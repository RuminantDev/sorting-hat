const e=require("murmurhash");function r(r,t,n){if(console.log(r,t,n),!n.active)return n.defaultValue;if(n.exceptIds&&n.exceptIds.indexOf(r)>=0)return!0;if(void 0!==n.perc){if(1===n.perc)return!0;if(0===n.perc)return!1;return function(e,r){const t=function(e){const r=50;return 1/r*(r-Math.abs(e%(2*r)-r))}(e);return console.log("X: ",t,e),t<r}(e.v3(`${r}-${t}`),n.perc)}return!!n.defaultValue&&n.defaultValue}export{r as getFlagVal};