/*
      @license
      @yfill/event-hub v1.0.0
      Sat, 31 Oct 2020 11:17:29 GMT
      https://yfill.cn/event-hub
      Released under the MIT License.
    */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).EventHub=n()}(this,(function(){"use strict";function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var n,e=function(t){var n=[];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.push(t[e]);return n};!function(t){t.Creating="Creating",t.Activated="Activated",t.Destroyed="Destroyed"}(n||(n={}));var r=0,i=0,o={},u={},a=function(t,n){return t["$event-type-".concat(n)]||""},c=function(t,n,e){if(n&&e){var i=t[n]||{},o=a(e,n)||"".concat(r+=1),u=i[o]||[];u.push(e),i[o]=u,t[n]=i,function(t,n,e){t["$event-type-".concat(n)]=e}(e,n,o)}},f=function(t,n,e){e?delete(t[n]||{})["".concat(a(e,n))]:delete t[n]},s=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),o=2;o<r;o++)i[o-2]=arguments[o];e(t[n]||{}).forEach((function(t){return t.forEach((function(t){return t.apply(void 0,i)}))}))},l=function(t,e){t===n.Activated&&e()},d=function(){function e(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.status=n.Creating,this.id="".concat(i+=1),u[this.id]={},this.status=n.Activated}var r,o,a;return r=e,a=[{key:"create",value:function(){return new e}}],(o=[{key:"on",value:function(t,n){var e=this;return l(this.status,(function(){return c(u[e.id],t,n)})),this}},{key:"off",value:function(t,n){var e=this;return l(this.status,(function(){return f(u[e.id],t,n)})),this}},{key:"emit",value:function(t){for(var n=this,e=arguments.length,r=new Array(e>1?e-1:0),i=1;i<e;i++)r[i-1]=arguments[i];return l(this.status,(function(){return s.apply(void 0,[u[n.id],t].concat(r))})),this}},{key:"destroy",value:function(){delete u[this.id],this.status=n.Destroyed}}])&&t(r.prototype,o),a&&t(r,a),e}();return d.on=function(t,n){return c(o,t,n)},d.off=function(t,n){return f(o,t,n)},d.emit=function(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return s.apply(void 0,[o,t].concat(e))},d}));
