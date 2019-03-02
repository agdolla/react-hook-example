(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),o=n(1),l=n.n(o),s=n(2),i=n(3),b=n(4),m={depth:10,favSymbols:[]};var p=n(9);function d(e,t){return"".concat(e,"@depth").concat(t)}function v(e){return"".concat(e,"@ticker")}var f={topics:[]};var h=Object(a.createContext)(null),S=function(){return Object(a.useContext)(h)},E=function(e){var t=e.children,n=function(e){var t=Object(a.useState)(m),n=Object(b.a)(t,2),r=n[0],c=n[1],u=Object(a.useCallback)(Object(i.a)(l.a.mark(function t(){var n;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getFavSymbols();case 2:return n=t.sent,c(function(e){return Object(s.a)({},e,{favSymbols:n})}),t.abrupt("return",n);case 5:case"end":return t.stop()}},t,this)})),[e]),o=Object(a.useCallback)(function(e){c(function(t){return Object(s.a)({},t,{depth:e})})},[]);return Object(s.a)({},r,{setDepth:o,fetchFavSymbols:u})}(e.apiService),c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"stream.binance.com",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:9443,n=Object(a.useState)(f),r=Object(b.a)(n,2),c=r[0],u=r[1],o=c.topics,l=c.socket,i=Object(a.useRef)();i.current||(i.current=new Map);var m=Object(a.useMemo)(function(){return o.join("/")},[o]),h=Object(a.useMemo)(function(){return"wss://".concat(e,":").concat(t,"/stream?streams=").concat(m)},[e,t,m]);Object(a.useMemo)(function(){l&&l.close();var e=new WebSocket(h);e.onmessage=function(e){var t=JSON.parse(e.data),n=t.stream,a=t.data,r=new Map(i.current);r.set(n,a),i.current=r,u(function(e){return Object(s.a)({},e)})},u(function(t){return Object(s.a)({},t,{socket:e})})},[o]);var S=Object(a.useCallback)(function(e,t){var n=e.map(function(e){return d(e,t)}),a=e.map(v),r=[].concat(Object(p.a)(n),Object(p.a)(a));return i.current=new Map,r.forEach(function(e){return i.current.set(e,{})}),u(function(e){return Object(s.a)({},e,{topics:r})}),r},[e,t]);return Object(s.a)({},c,{url:h,subscribeSymbols:S,streams:i.current})}();return r.a.createElement(h.Provider,{value:{appState:n,webSocketState:c}},t)},O=function(e){var t=e.appState,n=e.webSocketState,r=n.url,c=n.topics,u=t.depth;Object(a.useMemo)(Object(i.a)(l.a.mark(function e(){var a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchFavSymbols();case 2:a=e.sent,n.subscribeSymbols(a,u);case 4:case"end":return e.stop()}},e,this)})),[u]);var o=Object(a.useCallback)(function(){var e=Object(i.a)(l.a.mark(function e(n){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.setDepth(n.target.value);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),[t]),s=Object(a.useCallback)(function(e){var t=n.streams.get(e)||{};return t.lastUpdateId||t.E},[n.streams]);return{depth:t.depth,depthOptions:[5,10,20],subscribedUrl:r,subscribedTopics:c,onSelectDepth:o,selectEventUidByTopic:s}},j=function(){var e=S(),t=e.appState,n=e.webSocketState,a=O({appState:t,webSocketState:n});return r.a.createElement("div",{className:"mt-5"},r.a.createElement("label",null,"Depth:"),r.a.createElement("select",{value:a.depth,onChange:a.onSelectDepth},a.depthOptions.map(function(e){return r.a.createElement("option",{key:e},e)})),r.a.createElement("p",null,r.a.createElement("b",null,"Subscribed WebSocket URL:")," ",a.subscribedUrl),r.a.createElement("b",null,"Subscribed Topics"),r.a.createElement("ul",null,a.subscribedTopics.map(function(e){return r.a.createElement("li",{key:e},e,"(event uid:",a.selectEventUidByTopic(e),")")})))},w=n(11),k=n(12),y=function(e){var t=e.appState,n=e.webSocketState,r=e.symbol,c=Object(a.useMemo)(function(){return d(r,t.depth)},[r,t.depth]),u=Object(a.useMemo)(function(){return n.streams.get(c)},[n.streams]),o=Object(a.useMemo)(function(){return u&&u.bids?u.bids:[]},[u&&u.bids]),l=Object(a.useMemo)(function(){return u&&u.bids?u.asks:[]},[u&&u.bids]);return{topic:c,stream:u,bids:o,asks:l}};function x(){var e=Object(w.a)(["\n  font-size: 10px; \n  \n  // Small devices (landscape phones, 576px and up)\n  @media (min-width: 576px) {\n    font-size: 14px;\n  }\n  \n  // Medium devices (tablets, 768px and up)\n  @media (min-width: 768px) { \n    font-size: 16px;\n  }\n"]);return x=function(){return e},e}var g=k.a.table.attrs({className:"table table-sm table-bordered text-center"})(x()),M=function(e){var t=e.title,n=e.source;return r.a.createElement("div",{className:"table-responsive col-6"},r.a.createElement(g,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:2},t))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Price"),r.a.createElement("td",null,"Qty")),n.map(function(e){var t=Object(b.a)(e,2),n=t[0],a=t[1];return r.a.createElement("tr",{key:n},r.a.createElement("td",null,n),r.a.createElement("td",null,a))}))))},C=function(e){var t=e.symbol,n=S(),a=n.appState,c=n.webSocketState,u=y({appState:a,webSocketState:c,symbol:t});return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("b",{className:"col-12 text-center"},r.a.createElement("u",null,"Real time OrderBook Depth")),r.a.createElement(M,{title:"Bids",source:u.bids}),r.a.createElement(M,{title:"Asks",source:u.asks}))},N=function(e){var t=e.webSocketState,n=v(e.symbol),r=Object(a.useMemo)(function(){return t.streams.get(n)},[t.streams]),c=Object(a.useMemo)(function(){return r&&void 0!==r.P?r.P>0?"+".concat(r.P,"%"):"".concat(r.P,"%"):""},[r&&r.P]),u=Object(a.useMemo)(function(){return r?[{label:"Open",value:r.o},{label:"High",value:r.h},{label:"Low",value:r.l},{label:"Close",value:r.c},{label:"Volume",value:r.v},{label:"Best bid",value:r.b},{label:"Best ask",value:r.a},{label:"Total Trades",value:r.n},{label:"Price Change over 24hr",value:c}]:[]},[r,c]);return{topic:n,stream:r,priceChangePercentage:c,stats:u}},P=function(e){var t=e.symbol,n=S().webSocketState,a=N({webSocketState:n,symbol:t});return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("b",{className:"col-12 text-center under-line"},r.a.createElement("u",null,"24 Hour Stats")),a.stats.map(function(e){return r.a.createElement("div",{className:"text-center text-sm-left col-12 col-sm-6 col-lg-4",key:e.label},r.a.createElement("b",null,e.label,":"),e.value)}))},B=function(e){var t=e.appState;return{depth:t.depth,favSymbols:t.favSymbols,titleForSymbol:Object(a.useCallback)(function(e){return e.toUpperCase()},[])}},T=function(){var e=S().appState,t=B({appState:e});return r.a.createElement(r.a.Fragment,null,t.favSymbols.map(function(e){return r.a.createElement("section",{key:e},r.a.createElement("div",{className:"border-top my-5"}),r.a.createElement("h1",{className:"text-center"},t.titleForSymbol(e)),r.a.createElement(P,{symbol:e}),r.a.createElement(C,{symbol:e}))}))},F=n(15),U=n(16),D=function(){function e(){Object(F.a)(this,e)}return Object(U.a)(e,[{key:"getFavSymbols",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){return new Promise(function(e){setTimeout(function(){return e(["ethbtc","btcusdt","xrpbtc","xrpeth","ethusdt","ltcbtc","neobtc","eoseth","tusdusdt"])},300)})},e.abrupt("return",t());case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}();var W=function(){var e=Object(a.useMemo)(function(){return new D},[]);return r.a.createElement("div",{className:"container"},r.a.createElement(E,{apiService:e},r.a.createElement(j,null),r.a.createElement(T,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.a8da0788.chunk.js.map