# [Event hub](https://yfill.cn/event-hub) &middot; [![GitHub license][mit]][mit-url] [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url]

An event hub.

## Install

using npm:
```sh
npm install @yfill/event-hub --save
```
or using yarn:
```sh
yarn add @yfill/event-hub
```

## Usage

* Import resources.

  ```js
  import EventHub from "@yfill/event-hub";
  ```

  ```html
  <script src="https://unpkg.com/@yfill/event-hub"></script>
  ```

* Create an EventHub instance, and then use it to monitor, broadcast, cancel monitor, and destroy.

  ```js
	const eh = new EventHub();
	const typeHandler0 = (...arg) => {
		console.log('typeHandler0', ...arg);
	}
	const typeHandler1 = (...arg) => {
		console.log('typeHandler1', ...arg);
	}
	const typeHandler2 = (...arg) => {
		console.log('typeHandler2', ...arg);
	}
	eh.on('$type', typeHandler0)
	  .on('$type', typeHandler1)
	  .on('$type', typeHandler2);

	console.log('===First broadcast===');
	eh.emit('$type', 'First broadcast', 'data');

	eh.off('$type');

	console.log('===Second broadcast===');
	eh.emit('$type', 'Second broadcast', 'data');

	eh.on('$type', typeHandler1)
	  .on('$type', typeHandler2);

	console.log('===Third broadcast===');
	eh.emit('$type', 'Third broadcast', 'data0', 'data1');

	eh.off('$type', typeHandler1);

	console.log('===Fourth broadcast===');
	eh.emit('$type', 'Fourth broadcast', 'data0', 'data1', 'data2');

	eh.destroy();
  ```
	
[mit]:https://img.shields.io/badge/license-MIT-blue.svg
[mit-url]:https://github.com/Yfill/event-hub/blob/main/LICENSE
[npm]: https://img.shields.io/npm/v/@yfill/event-hub.svg
[npm-url]: https://www.npmjs.com/package/@yfill/event-hub
[build-size]: https://badgen.net/bundlephobia/minzip/@yfill/event-hub
[build-size-url]: https://bundlephobia.com/result?p=@yfill/event-hub