import { objectValues } from './utils/object';

type Handler = (...arg: any[]) => void;

interface HandlerMapItem {
  [id: string]: [Handler[], Handler[]]
}

interface HandlerMap {
  [type: string]: HandlerMapItem
}
// eslint-disable-next-line no-unused-vars
enum EventHubStatus { Creating = 'Creating', Activated = 'Activated', Destroyed = 'Destroyed' }

let currentId = 0;

let currentEventHubId = 0;

const rootHandlerMap: HandlerMap = {};

const eventHubMap: { [id: string]: HandlerMap } = {};

const createHandlerTypeId = (): string => {
  currentId += 1;
  return `${currentId}`;
};

const createEventHubId = (): string => {
  currentEventHubId += 1;
  return `${currentEventHubId}`;
};

const getHandlerTypeId = (handler: Handler, type: string): string => (handler as (Handler & { [id: string]: string }))[`$event-type-${type}`] || '';

const setHandlerTypeId = (handler: Handler, type: string, handlerTypeId: string): void => {
  (handler as (Handler & { [id: string]: string }))[`$event-type-${type}`] = handlerTypeId;
};

const onInner = (handlerMap: HandlerMap, type: string, handler: Handler, once = false): void => {
  if (!type || !handler) return;
  const handlerMapItem: HandlerMapItem = handlerMap[type] || {};
  const handlerTypeId = getHandlerTypeId(handler, type) || createHandlerTypeId();
  const handlerBox = handlerMapItem[handlerTypeId] || [[], []];
  if (once) handlerBox[1].push(handler);
  else handlerBox[0].push(handler);
  handlerMapItem[handlerTypeId] = handlerBox;
  handlerMap[type] = handlerMapItem;
  setHandlerTypeId(handler, type, handlerTypeId);
};

const offInner = (handlerMap: HandlerMap, type: string, handler?: Handler): void => {
  if (handler) delete (handlerMap[type] || {})[`${getHandlerTypeId(handler, type)}`];
  else delete handlerMap[type];
};

const emitInner = (handlerMap: HandlerMap, type: string, ...arg: any[]): void => {
  objectValues(handlerMap[type] || {})
    .forEach((handlerBox: [Handler[], Handler[]]) => {
      [...handlerBox[0], ...handlerBox[1]]
        .forEach((handler: Handler) => handler(...arg));
      handlerBox[1] = [];
    });
};

const preDetection = (
  status: EventHubStatus,
  task: () => void,
): void => {
  if (status === EventHubStatus.Activated) task();
};

export default class EventHub {
  static on = (type: string, handler: Handler) => onInner(rootHandlerMap, type, handler)

  static once = (type: string, handler: Handler) => onInner(rootHandlerMap, type, handler, true)

  static off = (type: string, handler?: Handler) => offInner(rootHandlerMap, type, handler)

  static emit = (type: string, ...arg: any[]) => emitInner(rootHandlerMap, type, ...arg)

  static create(): EventHub {
    return new EventHub();
  }

  private id: string

  private status: EventHubStatus

  constructor() {
    this.status = EventHubStatus.Creating;
    this.id = createEventHubId();
    eventHubMap[this.id] = {};
    this.status = EventHubStatus.Activated;
  }

  on(type: string, handler: Handler): EventHub {
    preDetection(this.status, () => onInner(eventHubMap[this.id], type, handler));
    return this;
  }

  once(type: string, handler: Handler): EventHub {
    preDetection(this.status, () => onInner(eventHubMap[this.id], type, handler, true));
    return this;
  }

  off(type: string, handler?: Handler): EventHub {
    preDetection(this.status, () => offInner(eventHubMap[this.id], type, handler));
    return this;
  }

  emit(type: string, ...arg: any[]): EventHub {
    preDetection(this.status, () => emitInner(eventHubMap[this.id], type, ...arg));
    return this;
  }

  destroy() {
    delete eventHubMap[this.id];
    this.status = EventHubStatus.Destroyed;
  }
}
