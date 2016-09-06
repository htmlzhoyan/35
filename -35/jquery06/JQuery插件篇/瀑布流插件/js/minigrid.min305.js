/* @license Minigrid v3.0.5 – minimal cascading grid layout http://alves.im/minigrid */
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Minigrid=e()}(this,function(){"use strict";function t(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i]);return t}var e=function(e){var i=e.container instanceof Node?e.container:document.querySelector(e.container),n=e.item instanceof NodeList?e.item:i.querySelectorAll(e.item);this.props=t(e,{container:i,nodeList:n})};return e.prototype.mount=function(){if(!this.props.container)return!1;if(!this.props.nodeList||0===this.props.nodeList.length)return!1;var t="number"==typeof this.props.gutter&&isFinite(this.props.gutter)&&Math.floor(this.props.gutter)===this.props.gutter?this.props.gutter:0,e=this.props.done,i=this.props.container,n=this.props.nodeList;i.style.width="";var r=Array.prototype.forEach,o=i.getBoundingClientRect().width,s=n[0].getBoundingClientRect().width+t,p=Math.max(Math.floor((o-t)/s),1),a=0;o=s*p+t+"px",i.style.width=o,i.style.position="relative";for(var c=[],l=[],u=0;p>u;++u)l.push(u*s+t),c.push(t);r.call(n,function(e){var i=c.slice(0).sort(function(t,e){return t-e}).shift();i=c.indexOf(i);var n=parseInt(l[i]),r=parseInt(c[i]);e.style.position="absolute",e.style.overflow="hidden",e.style.webkitBackfaceVisibility=e.style.backfaceVisibility="hidden",e.style.transformStyle="preserve-3d",e.style.transform="translate3D("+n+"px,"+r+"px, 0)",c[i]+=e.getBoundingClientRect().height+t,a+=1}),i.style.display="";var f=c.slice(0).sort(function(t,e){return t-e}).pop();i.style.height=f+"px","function"==typeof e&&e(n)},e});