(function(t){function e(e){for(var n,s,a=e[0],l=e[1],u=e[2],c=0,d=[];c<a.length;c++)s=a[c],r[s]&&d.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);h&&h(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],n=!0,a=1;a<i.length;a++){var l=i[a];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=i[0]))}return t}var n={},r={app:0},o=[];function s(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=n,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(i,n,function(e){return t[e]}.bind(null,n));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/mazing/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var h=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"034f":function(t,e,i){"use strict";var n=i("64a9"),r=i.n(n);r.a},1401:function(t,e,i){},"160f":function(t,e,i){},"42b7":function(t,e,i){},"601f":function(t,e,i){},"64a9":function(t,e,i){},"7f79":function(t,e,i){"use strict";var n=i("601f"),r=i.n(n);r.a},a347:function(t,e,i){},b786:function(t,e,i){"use strict";var n=i("1401"),r=i.n(n);r.a},cd49:function(t,e,i){"use strict";i.r(e);var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"app"},[i("header",{staticClass:"header"},[i("a",{staticClass:"header-link",attrs:{href:"/mazing/"}},[i("Logo",{staticClass:"logo"}),i("div",{staticClass:"page-title"},[t._v("Mazing Contest")])],1)]),i("div",{staticClass:"sidebar"},[i("menu",{staticClass:"menu"},[i("li",{staticClass:"menu-item"},[i("a",{staticClass:"menu-link",class:{selected:null===t.puzzleId},attrs:{href:"/mazing/"}},[t._v("Playground")])]),i("li",{staticClass:"menu-item"},[t._v("\n        Puzzles\n        "),i("ul",t._l(t.puzzles,function(e,n){return i("li",{key:n,staticClass:"menu-sub-item"},[i("a",{staticClass:"menu-link",class:{selected:n===t.puzzleId},attrs:{href:"/mazing/?puzzle="+(n+1)}},[t._v(t._s(e.name))])])}),0)])])]),i("div",{staticClass:"page"},[i("div",{staticClass:"content"},[i("div",{staticClass:"content-header"},[i("h1",{staticClass:"content-title"},[t._v(t._s(t.title))]),t.tagline?i("div",{staticClass:"tagline"},[t._v(t._s(t.tagline))]):t._e()]),i("div",{staticClass:"puzzle"},[i("div",{staticClass:"puzzle-data"},[t._v("\n          Available towers: "),i("b",[t._v(t._s(t.towerCount))])]),i("div",{staticClass:"puzzle-data"},[t._v("\n          Available slow towers: "),i("b",[t._v(t._s(t.slowCount))])]),i("div",{staticClass:"puzzle-data"},[t._v("\n          Time to beat: "),i("b",[t._v(t._s(t.puzzleTime))])])]),i("div",{staticClass:"actions"},[i("div",{staticClass:"tower-actions"},[i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.towerAction,expression:"towerAction"}],attrs:{type:"radio",name:"tower-action",value:"tower",disabled:t.isRunning},domProps:{checked:t._q(t.towerAction,"tower")},on:{change:function(e){t.towerAction="tower"}}}),i("u",[t._v("T")]),t._v("ower")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.towerAction,expression:"towerAction"}],attrs:{type:"radio",name:"tower-action",value:"slow",disabled:t.isRunning},domProps:{checked:t._q(t.towerAction,"slow")},on:{change:function(e){t.towerAction="slow"}}}),i("u",[t._v("S")]),t._v("low Tower")]),i("label",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.towerAction,expression:"towerAction"}],attrs:{type:"radio",name:"tower-action",value:"delete",disabled:t.isRunning},domProps:{checked:t._q(t.towerAction,"delete")},on:{change:function(e){t.towerAction="delete"}}}),i("u",[t._v("D")]),t._v("elete Tower")])]),i("div",{staticClass:"tower-actions"},[i("button",{staticClass:"link-button",on:{click:t.copyLink}},[t._v("Link to maze")]),i("button",{staticClass:"clear-towers-button",attrs:{disabled:t.isRunning},on:{click:function(e){return t.graphics.clearTowers()}}},[t._v("\n            Clear Towers\n          ")])]),i("div",{staticClass:"run-actions"},[i("div",{staticClass:"slider-container"},[i("label",[t._v("Speed: "+t._s(t.runSpeed)+"x")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue,expression:"sliderValue"}],staticClass:"slider",attrs:{type:"range",min:"0",max:"4"},domProps:{value:t.sliderValue},on:{__r:function(e){t.sliderValue=e.target.value}}})]),i("button",{staticClass:"run-button",on:{click:t.runButtonClicked}},[t._v(t._s(t.isRunning?"Stop":"Run"))])])]),i("div",{ref:"canvas",staticClass:"canvas"})])]),i("Toast",{ref:"toast"}),i("SwUpdate")],1)},o=[],s=i("9ab4"),a=i("60a3"),l=function(){function t(t,e){this.element=t,this.priority=e}return t}(),u=function(){function t(t){void 0===t&&(t=1e5),this.initSize=0,this.size=0,this.initSize=t,this.items=new Array(t).fill(null),this.size=0}return t.prototype.enqueue=function(t,e){var i=this.items;this.size===i.length-1&&i.push.apply(i,new Array(this.initSize).fill(null));var n=new l(t,e);this.size++;var r=this.size;i[r]=n;while(1){var o=r/2|0;if(o<1||i[o].priority<=e)break;i[r]=i[o],i[o]=n,r=o}},t.prototype.dequeue=function(){if(this.isEmpty())return null;var t=this.items,e=t[1],i=t[this.size];t[this.size]=null,this.size--,t[1]=i;var n=1;while(1){var r=2*n,o=2*n+1,s=r;if(r>this.size)break;if(s=o>this.size?r:t[o].priority<t[r].priority?o:r,t[n].priority<t[s].priority)break;t[n]=t[s],t[s]=i,n=s}return e.element},t.prototype.front=function(){return this.isEmpty()?null:this.items[1].element},t.prototype.isEmpty=function(){return 0===this.size},t.prototype.getSize=function(){return this.size},t}();function h(t,e){var i=new u,n={};i.enqueue({node:t,edge:null,dist:0},0);while(!i.isEmpty()){var r=i.dequeue();if(!n[r.node.id]){if(n[r.node.id]={fromEdge:r.edge,dist:r.dist},r.node.id===e.id)break;for(var o=0,s=r.node.edges;o<s.length;o++){var a=s[o],l=r.dist+a.dist;i.enqueue({node:a.to,edge:a,dist:l},l)}}}if(!n[e.id])return null;var h=[],c=e;while(c!==t){var d=n[c.id].fromEdge;h.push(d),c=d.from}return h.reverse()}var c=function(){function t(t,e,i,n){void 0===i&&(i=!1),void 0===n&&(n=0),this.time=t,this.p=e,this.isSlowed=i,this.angle=n}return t}(),d=function(){function t(t,e){this.time=t,this.p=e}return t}(),p=function(){function t(){this.moveEvents=[],this.slowEvents=[]}return t}();function f(t,e,i){void 0===i&&(i=!1);var n={x:e.x-t.x,y:e.y-t.y};return i&&(n.x=Math.abs(n.x),n.y=Math.abs(n.y)),n}function g(t,e){return t.x===e.x&&t.y===e.y}function v(t,e){var i=f(t,e);return Math.sqrt(i.x*i.x+i.y*i.y)}function w(t,e){return e?w(e,t%e):t}function y(t,e){var i=Math.atan2(e,t),n=180*i/Math.PI;return n+=90,n<0&&(n+=360),n}function m(t,e){var i={x:e.p2.x-e.p1.x,y:e.p2.y-e.p1.y},n={x:e.p1.x-t.center.x,y:e.p1.y-t.center.y},r=i.x*n.x+i.y*n.y,o=2*(i.x*i.x+i.y*i.y);r*=-2;var s=Math.sqrt(r*r-2*o*(n.x*n.x+n.y*n.y-t.radius*t.radius));if(isNaN(s))return[];var a=(r-s)/o,l=(r+s)/o,u={x:0,y:0},h={x:0,y:0},c=[];return a<=1&&a>=0&&(u.x=e.p1.x+i.x*a,u.y=e.p1.y+i.y*a,c.push(u)),l<=1&&l>=0&&(h.x=e.p1.x+i.x*l,h.y=e.p1.y+i.y*l,h.x===u.x&&h.y===u.y||(c[c.length]=h)),c}var b=function(){function t(t,e){void 0===t&&(t=!1),void 0===e&&(e=!1),this.isSlow=t,this.isFixed=e}return t}(),x=(function(){function t(){}}(),function(){function t(t,e){this.p="number"===typeof t?{x:t,y:e}:t,this.edges=[]}return t}()),z=function(){function t(t){void 0===t&&(t={});var e={entranceLength:6.5,boardHeight:16,boardWidth:18,moveSpeed:6,turnRate:2600,slowTowerRange:3.9,slowFactor:.5,slowDuration:5};this.config=s["a"]({},e,t),this.init()}return t.prototype.init=function(){this.initNodes(),this.initTowers()},t.prototype.initNodes=function(){var t,e=this.config,i=this.config.boardWidth/2-.5,n=Math.floor(i),r=Math.ceil(i);this.start={spawn:new x(i,e.boardHeight+e.entranceLength-1),left:new x(n,e.boardHeight),right:new x(r,e.boardHeight)},this.end={spawn:new x(i,-e.entranceLength),left:new x(n,-1),right:new x(r,-1)},this.nodes=new Array(e.boardWidth);for(var o=0;o<e.boardWidth;o++){this.nodes[o]=[];for(var s=0;s<e.boardHeight;s++)this.nodes[o].push(new x(o,s))}this.start.spawn.edges.push({to:this.end.spawn.p,dist:this.start.spawn.p.y-this.end.spawn.p.y}),this.buildEntranceEdges(this.start,!0),this.buildEntranceEdges(this.end,!1);for(o=0;o<e.boardWidth;o++)for(s=0;s<e.boardHeight;s++)(t=this.nodes[o][s].edges).push.apply(t,this.buildEdges(o,s))},t.prototype.buildEdges=function(t,e){for(var i=this.config,n=[],r=0;r<i.boardWidth;r++)for(var o=0;o<i.boardHeight;o++)if((r!==t||o!==e)&&!(w(Math.abs(r-t),Math.abs(o-e))>1)){var s={x:r,y:o};n.push({to:s,dist:v({x:t,y:e},s)})}return n},t.prototype.buildEntranceEdges=function(t,e){for(var i=this.config,n=t.spawn,r=0;r<i.boardWidth;r++)for(var o=0;o<i.boardHeight;o++){var s=f(n.p,{x:r,y:o},!0);if(s.x/s.y<=.5/i.entranceLength&&w(2*s.x,2*s.y)<=2)if(e){var a={x:r,y:o};n.edges.push({to:a,dist:v(n.p,a)})}else this.nodes[r][o].edges.push({to:n.p,dist:v(n.p,{x:r,y:o})})}var l=v(n.p,t.left.p);e?(n.edges.push({to:t.left.p,dist:l}),n.edges.push({to:t.right.p,dist:l}),t.left.edges.push({to:{x:t.left.p.x,y:t.left.p.y-1},dist:1}),t.right.edges.push({to:{x:t.right.p.x,y:t.right.p.y-1},dist:1})):(this.nodes[t.left.p.x][0].edges.push({to:{x:t.left.p.x,y:-1},dist:1}),this.nodes[t.right.p.x][0].edges.push({to:{x:t.right.p.x,y:-1},dist:1}),t.left.edges.push({to:n.p,dist:l}),t.right.edges.push({to:n.p,dist:l}))},t.prototype.initTowers=function(){var t=this.config;this.towers=new Array(t.boardWidth);for(var e=0;e<t.boardWidth;e++){var i=new Array(t.boardHeight);i.fill(null),this.towers[e]=i}},t.prototype.serializeTowers=function(){for(var t=this.config,e="a".charCodeAt(0),i=[],n=0;n<t.boardWidth;n++)for(var r=0;r<t.boardHeight;r++){var o=this.towers[n][r];if(o&&!o.isFixed){var s=String.fromCharCode(e+n)+String.fromCharCode(e+r);o.isSlow&&(s=s.toUpperCase()),i.push(s)}}return i.join("")},t.prototype.deserializeTowers=function(t,e){void 0===e&&(e=!1);for(var i="a".charCodeAt(0),n=0;n<t.length;n+=2){var r=/[A-Z]/.test(t[n]),o=t.substr(n,2).toLowerCase(),s=o.charCodeAt(0)-i,a=o.charCodeAt(1)-i;this.setTower({x:s,y:a},r,e)}},t.prototype.setTower=function(t,e,i){void 0===i&&(i=!1);var n=t.x,r=t.y;if(!(n<0||n>=this.config.boardWidth-1||r<0||r>=this.config.boardHeight-1)){for(var o=!0,s=n-1;s<=n+1;s++)for(var a=r-1;a<=r+1;a++)o=o&&this.deleteSingleTower({x:s,y:a});o&&(this.towers[n][r]=new b(e,i))}},t.prototype.deleteTower=function(t){for(var e=t.x-1;e<=t.x;e++)for(var i=t.y-1;i<=t.y;i++)this.deleteSingleTower({x:e,y:i})},t.prototype.clearTowers=function(){for(var t=this.config,e=0;e<t.boardWidth;e++)for(var i=0;i<t.boardHeight;i++)this.deleteSingleTower({x:e,y:i})},t.prototype.deleteSingleTower=function(t){var e=t.x,i=t.y;if(e<0||e>=this.config.boardWidth||i<0||i>this.config.boardHeight)return!0;var n=this.towers[e][i];if(n){if(n.isFixed)return!1;this.towers[e][i]=null}return!0},t.prototype.getRunResult=function(){var t=this.buildGraph(),e=t.startNode,i=t.endNode,n=h(e,i);return null===n?null:this.buildRunResult(n)},t.prototype.buildGraph=function(){for(var t=this.config,e=[],i=[],n=0;n<t.boardWidth;n++){i[n]=[];for(var r=0;r<t.boardHeight;r++)this.isNodeBlocked(n,r)||(i[n][r]={id:100*n+r,p:{x:n,y:r},edges:[]},e.push(this.nodes[n][r]))}for(var o=[this.start.spawn,this.start.left,this.start.right,this.end.spawn,this.end.left,this.end.right],s=-1,a=0,l=o;a<l.length;a++){var u=l[a];i[u.p.x]||(i[u.p.x]=[]),i[u.p.x][u.p.y]={id:s--,p:u.p,edges:[]},e.push(u)}for(var h=0,c=e;h<c.length;h++){u=c[h];for(var d=0,p=u.edges;d<p.length;d++){var f=p[d],g=i[u.p.x][u.p.y],v=i[f.to.x][f.to.y];v&&!this.isEdgeBlocked(u.p,f)&&g.edges.push({from:g,to:v,dist:f.dist})}}return{startNode:i[this.start.spawn.p.x][this.start.spawn.p.y],endNode:i[this.end.spawn.p.x][this.end.spawn.p.y]}},t.prototype.isNodeBlocked=function(t,e){for(var i=Math.max(0,t-1);i<=t;i++)for(var n=Math.max(0,e-1);n<=e;n++)if(this.towers[i][n])return!0;return!1},t.prototype.isEdgeBlocked=function(t,e){for(var i=Math.floor(Math.max(0,Math.min(t.x,e.to.x)-1)),n=Math.ceil(Math.min(this.config.boardWidth-1,Math.max(t.x,e.to.x))),r=Math.max(0,Math.min(t.y,e.to.y)-1),o=Math.min(this.config.boardHeight-1,Math.max(t.y,e.to.y)),s=Math.floor(t.x),a=Math.ceil(t.x),l=i;l<=n;l++)for(var u=r;u<=o;u++){var h=this.towers[l][u];if(h){var c=f(t,e.to);if(0===c.x&&l>=s-1&&l<=a)return!0;if(0===c.y&&u>=t.y-1&&u<=t.y)return!0;var d=c.y/c.x,p=d>0,g=void 0,v=void 0;p?(g={x:l+2,y:u-1},v={x:l-1,y:u+2}):(g={x:l-1,y:u-1},v={x:l+2,y:u+2});var w=(g.y-t.y)/(g.x-t.x),y=(v.y-t.y)/(v.x-t.x);p?(w<-1&&(w=1e6),y<-1&&(y=1e6)):(w>1&&(w=-1e6),y>1&&(y=-1e6));var m=w>=d&&y>=d||w<=d&&y<=d;if(!m)return!0}}return!1},t.prototype.buildRunResult=function(t){var e=this,i=this.config,n=new p,r=t[0].from,o=1,s=-1,a=this.getSlowTowers().map(function(t){return{p:t,slowReadyTime:-1}});return n.moveEvents.push(new c(0,r.p)),t.forEach(function(t){var r=function(){var r=t.to,l=t.from,h=n.moveEvents.slice(-1)[0],p=f(l.p,r.p),g=y(p.x,p.y),w=i.moveSpeed*o,b=i.turnRate*o,x=new u(10),z=h.angle!==g;if(z){var C=(g-h.angle)%180,T=Math.abs(C)/b+h.time;x.enqueue({time:T,type:"move"},T)}else{var _=v(h.p,r.p);T=_/w+h.time;x.enqueue({time:T,type:"move"},T)}a.forEach(function(t){var n=t.slowReadyTime;if(n>=h.time)x.enqueue({time:n,type:"slowEnd",tower:t},n);else{var o=e.getTowerCircle(t.p);if(v(h.p,o.center)<=i.slowTowerRange)x.enqueue({time:h.time,type:"slowStart",tower:t},h.time);else{var s={p1:h.p,p2:r.p},a=m(o,s);if(a.length){var l=v(h.p,a[0]),u=l/w+h.time;x.enqueue({time:u,type:"slowStart",tower:t},u)}}}}),s>=h.time&&x.enqueue({time:s,type:"slowEnd"},s);var S=x.front(),k=S.time,E=k-h.time,A=h.isSlowed;if("slowStart"===S.type?(A=!0,o=i.slowFactor,s=k+i.slowDuration,S.tower.slowReadyTime=k+i.slowDuration,n.slowEvents.push(new d(k,S.tower.p))):"slowEnd"===S.type&&(S.tower?S.tower.slowReadyTime=-1:(A=!1,o=1,s=-1)),h.angle!==g)if("move"===S.type)n.moveEvents.push(new c(S.time,h.p,A,g));else{C=g-h.angle;var R=C>180||C<0&&C>-180?-1:1,j=(h.angle+E*b*R+360)%360;n.moveEvents.push(new c(S.time,h.p,A,j))}else if("move"===S.type)n.moveEvents.push(new c(S.time,r.p,A,h.angle));else{var M=f(h.p,r.p),O=v(h.p,r.p),F={x:h.p.x+M.x/O*E*w,y:h.p.y+M.y/O*E*w};n.moveEvents.push(new c(S.time,F,A,h.angle))}};while(!g(n.moveEvents.slice(-1)[0].p,t.to.p))r()}),n},t.prototype.getSlowTowers=function(){for(var t=this.config,e=this.towers,i=[],n=0;n<t.boardWidth;n++)for(var r=0;r<t.boardHeight;r++){var o=e[n][r];o&&o.isSlow&&i.push({x:n,y:r})}return i},t.prototype.getTowerCircle=function(t){return{center:{x:t.x+.5,y:t.y+.5},radius:this.config.slowTowerRange}},t}(),C=i("22a2"),T=8246941,_=50,S=10,k=24,E=2516684,A=13421772,R=2,j=function(){function t(t,e){this.towerCount=100,this.slowCount=100,this.app=null,this.timer=null,this.isRunning=!1,this.towers=[],this.towerAction="tower",this.runSpeed=1,this.engine=t,this.puzzle=e||null,e&&this.engine.deserializeTowers(e.fixedTowers,!0)}return t.prototype.initialize=function(t){var e=this.engine.config,i=e.boardWidth*k+2*_,n=(e.boardHeight+2*e.entranceLength)*k+2*S;this.app=new C["a"]({width:i,height:n}),this.app.renderer.backgroundColor=T,t.appendChild(this.app.view),this.timer=new M(this.app),this.setupBoard(),this.updateTowers()},t.prototype.setupBoard=function(){var t=this,e=this.engine.config,i=2*k,n=e.entranceLength*k,r=this.getCoords({x:e.boardWidth/2-1,y:0}).x,o=this.buildRamp({x:r,y:S},i,n),s=this.buildRamp({x:r,y:this.getCoords({x:0,y:e.boardHeight}).y},i,n);this.app.stage.addChild(o,s);for(var a=function(i){l.towers.push([]);for(var n=function(e){var n=l.getCoords({x:i,y:e}),r=l.buildTile(n);r.interactive=!0,r.addListener("click",function(n){t.tileClicked({x:i,y:e},n.data.global)}),l.app.stage.addChild(r),l.towers[i].push(null)},r=0;r<e.boardHeight;r++)n(r)},l=this,u=0;u<e.boardWidth;u++)a(u)},t.prototype.buildRamp=function(t,e,i){var n=new C["b"];return n.lineStyle(R,A),n.beginFill(E),n.drawRect(t.x,t.y,e,i),n.endFill(),n},t.prototype.buildTile=function(t){var e=new C["b"];return e.lineStyle(R,A),e.beginFill(E),e.drawRect(t.x,t.y,k,k),e.endFill(),e},t.prototype.tileClicked=function(t,e){if(!this.isRunning){if("delete"===this.towerAction)this.engine.deleteTower(t);else{if(this.towerCount<=0||this.slowCount<=0&&"slow"===this.towerAction)return;var i=this.getCoords(t),n={x:e.x<i.x+k/2?Math.max(0,t.x-1):t.x,y:e.y<i.y+k/2?Math.max(0,t.y-1):t.y};this.engine.setTower(n,"slow"===this.towerAction)}this.updateTowers()}},t.prototype.clearTowers=function(){this.isRunning||(this.engine.clearTowers(),this.updateTowers())},t.prototype.run=function(t){var e=this;void 0===t&&(t=null);var i=this.engine.config,n=this.engine.getRunResult();if(null!==n){var r=n.moveEvents,o=n.slowEvents;console.log("time: "+r.slice(-1)[0].time);var s=new F(this.app);s.pos=this.getCoords(r[0].p);var a=o.reduce(function(t,n){var r=100*n.p.x+n.p.y;return t[r]||(t[r]=new P(e.app,i,e.getCoords(n.p))),t[r].activateTimes.push(n.time),t},{}),l=0,u=!1,h=null,c=0,d=function(i){void 0===i&&(i="0.000"),e.timer.text=i,s.remove(),Object.values(a).forEach(function(t){return t.remove()}),e.isRunning=!1,t&&t()},p=function(t){if(u)d();else{var i=null!==h?t-h:0;h=t,c+=i/1e3*e.runSpeed;while(c>=r[l+1].time){var n=r[l+1];if(s.pos=e.getCoords(n.p),s.angle=n.angle,l++,l>=r.length-1)return void d(r[l].time.toFixed(3))}e.timer.text=c.toFixed(3);var o=r[l],f=r[l+1],g=(c-o.time)/(f.time-o.time);if(Object.values(a).forEach(function(t){return t.update(c)}),s.slowed=o.isSlowed,o.angle!==f.angle){var v=f.angle-o.angle;v>180&&(v-=360),v<-180&&(v+=360);var w=g*v;s.angle=(o.angle+w+360)%360}else{var y=g*(f.p.x-o.p.x),m=g*(f.p.y-o.p.y),b={x:o.p.x+y,y:o.p.y+m};s.pos=e.getCoords(b)}requestAnimationFrame(p)}};return setTimeout(function(){e.isRunning=!0,requestAnimationFrame(p)},50),{stop:function(){u=!0}}}window.alert("No path")},t.prototype.updateTowers=function(){for(var t=this.engine.config,e=this.engine.towers,i=this.towers,n=0,r=0,o=0;o<t.boardWidth;o++)for(var s=0;s<t.boardHeight;s++){var a=i[o][s],l=e[o][s];l?(a&&a.isSlow===l.isSlow&&a.isFixed===l.isFixed||(a&&a.remove(),i[o][s]=new O(this.app,this.getCoords({x:o,y:s}),l.isSlow,l.isFixed)),l.isFixed||(n++,l.isSlow&&r++)):a&&(a.remove(),i[o][s]=null)}this.towerCount=this.puzzle?this.puzzle.towerCount-n:100,this.slowCount=this.puzzle?this.puzzle.slowCount-r:100},t.prototype.getCoords=function(t){return{x:t.x*k+_,y:(t.y+this.engine.config.entranceLength)*k+S}},t}(),M=function(){function t(t){this.app=t,this.timer=new C["c"]("0.000",{font:"bold 24px Roboto",fill:0}),this.timer.anchor.x=1,this.timer.x=this.app.renderer.width-k,this.timer.y=k,t.stage.addChild(this.timer)}return Object.defineProperty(t.prototype,"text",{set:function(t){this.timer.text=t},enumerable:!0,configurable:!0}),t.prototype.remove=function(){this.app.stage.removeChild(this.timer)},t}(),O=function(t){function e(e,i,n,r){var o=t.call(this,n,r)||this;o.size=2*k,o.orbRadius=k/2,o.app=e;var s=new C["b"];s.lineStyle(R,A);var a=r?9510944:7829367;return s.beginFill(a),s.drawRect(i.x,i.y,o.size,o.size),s.endFill(),n&&(s.lineStyle(0),s.beginFill(16382457),s.drawCircle(i.x+o.size/2,i.y+o.size/2,o.orbRadius),s.endFill()),o.graphics=s,e.stage.addChild(s),o}return s["c"](e,t),e.prototype.remove=function(){this.app.stage.removeChild(this.graphics)},e}(b),F=function(){function t(t){this.radius=k/2,this.mazer=new C["b"],this.mazer.beginFill(65280),this.mazer.drawCircle(0,0,this.radius),this.mazer.endFill(),this.mazer.beginFill(16776960),this.mazer.drawCircle(0,4-this.radius,4),this.mazer.endFill(),this.app=t,t.stage.addChild(this.mazer)}return Object.defineProperty(t.prototype,"pos",{set:function(t){this.mazer.x=t.x+this.radius,this.mazer.y=t.y+this.radius},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"angle",{set:function(t){this.mazer.angle=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"slowed",{set:function(t){this.mazer.tint=t?10066329:16777215},enumerable:!0,configurable:!0}),t.prototype.remove=function(){this.app.stage.removeChild(this.mazer)},t}(),P=function(){function t(t,e,i){this.radius=k,this.duration=.15,this.graphics=null,this.isActivated=!1,this.activateTimes=[],this.config=e,this.app=t,this.graphics=new C["b"],this.graphics.lineStyle(8,16777215),this.graphics.beginFill(0,0),this.graphics.drawCircle(0,0,this.radius),this.graphics.endFill(),this.graphics.x=i.x+this.radius,this.graphics.y=i.y+this.radius}return t.prototype.update=function(t){var e=this,i=this.activateTimes.find(function(i){return t<=i&&t+e.duration>=i});if(i){this.isActivated||(this.app.stage.addChild(this.graphics),this.isActivated=!0);var n=(t+this.duration-i)/this.duration;this.graphics.scale.x=1+n*(this.config.slowTowerRange/1.8),this.graphics.scale.y=1+n*(this.config.slowTowerRange/1.8)}else this.isActivated&&(this.isActivated=!1,this.graphics.scale.x=1,this.graphics.scale.y=1,this.app.stage.removeChild(this.graphics))},t.prototype.remove=function(){this.app.stage.removeChild(this.graphics)},t}(),q=i("1b23"),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{attrs:{width:"62.888mm",height:"62.204mm",viewBox:"0 0 62.888 62.204"}},[i("g",{attrs:{transform:"translate(678.78 24.653)"}},[i("g",{attrs:{fill:"#2666cc",stroke:"#ccc","stroke-width":"3"}},[i("rect",{attrs:{x:"-666.36",y:"-23.153",width:"24.482",height:"24.482"}}),i("rect",{attrs:{x:"-641.87",y:"1.3285",width:"24.482",height:"24.482"}}),i("rect",{attrs:{x:"-641.87",y:"-23.153",width:"24.482",height:"24.482"}}),i("rect",{attrs:{x:"-666.36",y:"1.3285",width:"24.482",height:"24.482"}})]),i("circle",{attrs:{cx:"-629.71",cy:"-10.862",r:"12.284",fill:"#0f0"}}),i("circle",{attrs:{cx:"-636.7",cy:"-18.043",r:"3.0238",fill:"#ff0"}}),i("rect",{attrs:{x:"-677.74",y:"1.3701",width:"35.823",height:"35.139",fill:"#777",stroke:"#ccc","stroke-width":"2.0831"}})])])},W=[],N=n["a"].extend({}),I=N,L=i("2877"),B=Object(L["a"])(I,H,W,!1,null,null,null),D=B.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.message?i("div",{staticClass:"toast-container"},[i("div",{staticClass:"toast"},[t._v(t._s(t.message))])]):t._e()])},$=[],V=n["a"].extend({data:function(){return{message:""}},methods:{showMessage:function(t){var e=this;this.message=t,setTimeout(function(){e.message=""},3e3)}}}),J=V,K=(i("7f79"),Object(L["a"])(J,U,$,!1,null,"86c05996",null)),G=K.exports,Z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[t.updateExists?i("div",{staticClass:"sw-update-popup"},[i("div",[t._v("New content available")]),i("button",{staticClass:"refresh-button",on:{click:t.refreshApp}},[t._v("Update")])]):t._e()])},Q=[],X=n["a"].extend({data:function(){return{refreshing:!1,registration:null,updateExists:!1}},created:function(){var t=this;document.addEventListener("swUpdated",this.showRefreshUI,{once:!0}),navigator.serviceWorker.addEventListener("controllerchange",function(){t.refreshing||(t.refreshing=!0,window.location.reload())})},methods:{showRefreshUI:function(t){this.registration=t.detail,this.updateExists=!0},refreshApp:function(){this.updateExists=!1,this.registration&&this.registration.waiting&&this.registration.waiting.postMessage("skipWaiting")}}}),Y=X,tt=(i("b786"),Object(L["a"])(Y,Z,Q,!1,null,"78210dc8",null)),et=tt.exports,it=i("4328"),nt=i.n(it);function rt(t){var e=window.clipboardData;if(e&&e.setData)return e.setData("Text",t);if(document.queryCommandSupported&&document.queryCommandSupported("copy")){var i=document.createElement("textarea");i.style.position="fixed",document.body.appendChild(i),i.contenteditable=!0,i.textContent=t,i.select(),i.setSelectionRange(0,999999);try{return document.execCommand("copy")}catch(n){return console.warn("Copy to clipboard failed.",n),!1}finally{document.body.removeChild(i)}}}var ot=[{name:"Puzzle 1",tagline:"An easy one to start with",fixedTowers:"agaodiecgehaKBllmcnknmoeqaqjql",towerCount:12,slowCount:1,time:24.563833702810005,solution:"bbbddffhfkhhhmicjfJOnipg"},{name:"Puzzle 2",tagline:"Every mazers dream",fixedTowers:"",towerCount:42,slowCount:2,time:42.56771251024278,solution:"agbbbdbjblcnDFdheaecekfhfmgehbhihoifikjajcjnkhkklembmhmmmoNJodofpbplpnqi"}],st=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.graphics=null,e.puzzles=ot,e.puzzleId=null,e.towerAction="tower",e.sliderValue=1,e.runInstance=null,e}return s["c"](e,t),Object.defineProperty(e.prototype,"puzzle",{get:function(){return null!==this.puzzleId?this.puzzles[this.puzzleId]:null},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return null!==this.puzzle?this.puzzle.name:"Playground"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tagline",{get:function(){return null!==this.puzzle?this.puzzle.tagline:""},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"towerCount",{get:function(){return this.puzzle?this.graphics.towerCount:"unlimited"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"slowCount",{get:function(){return this.puzzle?this.graphics.slowCount:"unlimited"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"puzzleTime",{get:function(){return this.puzzle&&this.puzzle.time.toFixed(3)||"-"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRunning",{get:function(){return!!this.runInstance},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"runSpeed",{get:function(){for(var t=.5,e=0;e<this.sliderValue;e++)t*=2;return t},enumerable:!0,configurable:!0}),e.prototype.onTowerActionChanged=function(t){this.graphics.towerAction=t},e.prototype.onRunSpeedChanged=function(t){this.graphics.runSpeed=t},e.prototype.created=function(){this.engine=new z;var t=ut(),e=null;if(t.puzzle){var i=Number(t.puzzle);i&&i>0&&i<=this.puzzles.length&&(this.puzzleId=i-1,e=this.puzzles[this.puzzleId])}t.towers&&this.engine.deserializeTowers(t.towers),this.graphics=new j(this.engine,e)},e.prototype.mounted=function(){this.graphics.initialize(this.$refs.canvas),this.setupHotkeys()},e.prototype.setupHotkeys=function(){var t=this;window.addEventListener("keydown",function(e){e.which===q["Key"].T?t.towerAction="tower":e.which===q["Key"].S?t.towerAction="slow":e.which===q["Key"].D&&(t.towerAction="delete")})},e.prototype.copyLink=function(){this.$refs.toast.showMessage("Link to maze copied to clipboard");var t={towers:this.engine.serializeTowers()};rt(lt(t,!0))},e.prototype.runButtonClicked=function(){var t=this;this.runInstance?(this.runInstance.stop(),this.runInstance=null):this.runInstance=this.graphics.run(function(){return t.runInstance=null})},s["b"]([Object(a["c"])("towerAction")],e.prototype,"onTowerActionChanged",null),s["b"]([Object(a["c"])("runSpeed")],e.prototype,"onRunSpeedChanged",null),e=s["b"]([Object(a["a"])({components:{Logo:D,Toast:G,SwUpdate:et}})],e),e}(a["b"]),at=st;function lt(t,e){void 0===e&&(e=!1);var i=e?nt.a.parse(window.location.search.replace("?","")):{},n=s["a"]({},i,t);return window.location.origin+window.location.pathname+"?"+nt.a.stringify(n)}function ut(){return nt.a.parse(window.location.search.replace("?",""))}var ht=at,ct=(i("034f"),Object(L["a"])(ht,r,o,!1,null,null,null)),dt=ct.exports,pt=i("9483");Object(pt["a"])("/mazing/service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(t){console.log("Service worker has been registered."),setInterval(function(){t.update()},36e5)},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(t){document.dispatchEvent(new CustomEvent("swUpdated",{detail:t}))},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});i("160f"),i("42b7"),i("a347");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(dt)}}).$mount("#app")}});