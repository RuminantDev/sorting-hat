"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const e=require("murmurhash");exports.getFlagVal=function(r,t,u){if(console.log(r,t,u),!u.active)return u.defaultValue;if(u.exceptIds&&u.exceptIds.indexOf(r)>=0)return!0;if(void 0!==u.perc){if(1===u.perc)return!0;if(0===u.perc)return!1;return function(e,r){const t=function(e){const r=50;return 1/r*(r-Math.abs(e%(2*r)-r))}(e);return console.log("X: ",t,e),t<r}(e.v3(`${r}-${t}`),u.perc)}return!!u.defaultValue&&u.defaultValue};
