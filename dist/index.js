/*! @yfill/event-hub v1.0.3 | Sun, 10 Jan 2021 11:37:34 GMT | https://yfill.cn/event-hub */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EventHub=n()}(this,(function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var r,o=function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(t[e]);return n};!function(t){t.Creating="Creating",t.Activated="Activated",t.Destroyed="Destroyed"}(r||(r={}));var i=0,u=0,a={},c={},f=function(){return"".concat(i+=1)},s=function(t,n){return t["$event-type-".concat(n)]||""},l=function(t,n,e){t["$event-type-".concat(n)]=e},y=function(t,n,e){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(n&&e){var o=t[n]||{},i=s(e,n)||f(),u=o[i]||[[],[]];r?u[1].push(e):u[0].push(e),o[i]=u,t[n]=o,l(e,n,i)}},d=function(t,n,e){e?delete(t[n]||{})["".concat(s(e,n))]:delete t[n]},h=function(t,e){for(var r=arguments.length,i=new Array(r>2?r-2:0),u=2;u<r;u++)i[u-2]=arguments[u];o(t[e]||{}).forEach((function(t){[].concat(n(t[0]),n(t[1])).forEach((function(t){return t.apply(void 0,i)})),t[1]=[]}))},v=function(t,n){t===r.Activated&&n()},p=function(){function n(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),this.status=r.Creating,this.id="".concat(u+=1),c[this.id]={},this.status=r.Activated}var e,o,i;return e=n,i=[{key:"create",value:function(){return new n}}],(o=[{key:"on",value:function(t,n){var e=this;return v(this.status,(function(){return y(c[e.id],t,n)})),this}},{key:"once",value:function(t,n){var e=this;return v(this.status,(function(){return y(c[e.id],t,n,!0)})),this}},{key:"off",value:function(t,n){var e=this;return v(this.status,(function(){return d(c[e.id],t,n)})),this}},{key:"emit",value:function(t){for(var n=this,e=arguments.length,r=new Array(e>1?e-1:0),o=1;o<e;o++)r[o-1]=arguments[o];return v(this.status,(function(){return h.apply(void 0,[c[n.id],t].concat(r))})),this}},{key:"destroy",value:function(){delete c[this.id],this.status=r.Destroyed}}])&&t(e.prototype,o),i&&t(e,i),n}();return p.on=function(t,n){return y(a,t,n)},p.once=function(t,n){return y(a,t,n,!0)},p.off=function(t,n){return d(a,t,n)},p.emit=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return h.apply(void 0,[a,t].concat(e))},p}));
