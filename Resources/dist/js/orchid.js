/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");
d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
(function ($) {
    $(document).ready(function () {
        $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $(this).parent().siblings().removeClass('open');
            $(this).parent().toggleClass('open');
        });
    });
})(jQuery);
(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;
                if (!u && a)return a(o, !0);
                if (i)return i(o, !0);
                var f = new Error("Cannot find module '" + o + "'");
                throw f.code = "MODULE_NOT_FOUND", f
            }
            var l = n[o] = {exports: {}};
            t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];
                return s(n ? n : e)
            }, l, l.exports, e, t, n, r)
        }
        return n[o].exports
    }

    var i = typeof require == "function" && require;
    for (var o = 0; o < r.length; o++)s(r[o]);
    return s
})({
    1: [function (require, module, exports) {
        'use strict';

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = {
            data: {
                settings: {},
                settingsResource: null,
                pagination: {
                    page: 1,
                    previous: false,
                    next: false
                }
            },
            ready: function ready() {
                this.$http({url: '/dashboard/settings', method: 'GET'}).then(function (response) {
                    this.$set('settings', response.data);
                    this.fetchSettingsPaginate();
                }, function (response) {
                    alert('Error load');
                });
            },
            methods: {
                fetchSettingsPaginate: function fetchSettingsPaginate(direction) {
                    if (direction === 'previous') {
                        --this.pagination.page;
                    } else if (direction === 'next') {
                        ++this.pagination.page;
                    }

                    this.settingsResource.get({page: this.pagination.page}, function (data) {
                        this.settings = data.data;
                        this.pagination.next = data.next_page_url;
                        this.pagination.previous = data.prev_page_url;
                    });
                }
            }
        };
        if (module.exports.__esModule) module.exports = module.exports.default
        ;
        (typeof module.exports === "function" ? module.exports.options : module.exports).template = "\n\n<div class=\"bg-light lter b-b wrapper-md\">\n    <h1 class=\"m-n font-thin h3\">Системные константы</h1>\n    <small class=\"text-muted\">Будьте осторожны при изменении</small>\n</div>\n\n<div class=\"wrapper-md\" id=\"settings-container\">\n\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading font-bold\">Системные константы</div>\n\n\n        <div class=\"row wrapper\">\n            <div class=\"col-sm-5 m-b-xs\">\n            </div>\n            <div class=\"col-sm-4\">\n            </div>\n            <div class=\"col-sm-3\">\n                <form action=\"\">\n                    <div class=\"input-group\">\n                        <input type=\"text\" class=\"input-sm form-control\" name=\"search\" placeholder=\"Поиск ...\">\n      <span class=\"input-group-btn\">\n        <button class=\"btn btn-sm btn-default\" type=\"submit\">Найти!</button>\n      </span>\n                    </div>\n                </form>\n            </div>\n        </div>\n\n\n        <div class=\"panel-body row\">\n\n            <pre>                    {{ settings | json }}\n\n                {{settingsResource | json }}\n            </pre>\n\n\n            <div class=\"table-responsive\">\n                <table class=\"table table-striped b-t b-light\">\n                    <thead>\n                    <tr>\n                        <th>Ключ</th>\n                        <th>Последние изменение</th>\n                        <th>Управление</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n\n                    <tr v-for=\"setting in settings\">\n                        <td>{{setting}}</td>\n                        <td>$setting-&gt;updated_at</td>\n                        <td>\n\n                            <div class=\"btn-group pull-right\" role=\"group\" aria-label=\"...\">\n                                <a href=\"route('admin.settings.edit',$setting->slug) \" class=\"btn btn-default\"><span class=\"fa fa-edit\"></span> </a>\n                                <a href=\"#\" data-toggle=\"modal\" data-target=\"#Modal-$setting->slug\" class=\"btn btn-danger\">\n                                    <i class=\"fa fa-trash\"></i>\n                                </a>\n                            </div>\n\n\n                        </td>\n                    </tr>\n\n\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n\n        <div class=\"modal fade\" id=\"settings-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">×</span></button>\n                        <h4 class=\"modal-title\" id=\"myModalLabel\">Удалить\n                            ?</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        Вы действительно хотите удалить\n                    </div>\n                    <div class=\"modal-footer\">\n                        <form action=\"\" method=\"post\">\n                            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Нет\n                            </button>\n                            <button type=\"submit\" class=\"btn btn-danger\">Да</button>\n                            <input type=\"hidden\" name=\"_method\" value=\"DELETE\">\n                            <input type=\"hidden\" name=\"_token\" value=\"csrf_token()\">\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n\n\n        <footer class=\"panel-footer\">\n            <div class=\"row\">\n                <div class=\"col-sm-offset-4 col-sm-4 text-center\">\n                    <small class=\"text-muted inline m-t-sm m-b-sm\">Всего\n                        элементов: </small>\n                </div>\n                <div class=\"col-sm-4 text-right text-center-xs\">\n\n                </div>\n            </div>\n        </footer>\n    </div>\n</div>\n\n\n"
        if (module.hot) {
            (function () {
                module.hot.accept()
                var hotAPI = require("vue-hot-reload-api")
                hotAPI.install(require("vue"), true)
                if (!hotAPI.compatible) return
                var id = "/var/www/Orchid/Orchid/Resources/assets/js/components/Settings.vue"
                if (!module.hot.data) {
                    hotAPI.createRecord(id, module.exports)
                } else {
                    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
                }
            })()
        }
    }, {"vue": 30, "vue-hot-reload-api": 4}],
    2: [function (require, module, exports) {
        'use strict';

        var Vue = require('vue');
        var VueRouter = require('vue-router');

        Vue.use(VueRouter);
        Vue.use(require('vue-resource'));

        Vue.config.debug = true;

//Vue.http.options.root = '/api';
        Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('content');

        var router = new VueRouter({
            history: true,
            root: 'app'
        });

        var router = new VueRouter();

        router.map({
            '/settings': {
                component: require('./components/Settings.vue')
            }
        });

        var App = Vue.extend({});

        router.start(App, '#app-content-body');

    }, {"./components/Settings.vue": 1, "vue": 30, "vue-resource": 18, "vue-router": 29}],
    3: [function (require, module, exports) {
// shim for using process in browser

        var process = module.exports = {};
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;

        function cleanUpNextTick() {
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            } else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }

        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = setTimeout(cleanUpNextTick);
            draining = true;

            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            clearTimeout(timeout);
        }

        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                setTimeout(drainQueue, 0);
            }
        };

// v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }

        Item.prototype.run = function () {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};

        function noop() {
        }

        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;

        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };

        process.cwd = function () {
            return '/'
        };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function () {
            return 0;
        };

    }, {}],
    4: [function (require, module, exports) {
        var Vue // late bind
        var map = Object.create(null)
        var shimmed = false
        var isBrowserify = false

        /**
         * Determine compatibility and apply patch.
         *
         * @param {Function} vue
         * @param {Boolean} browserify
         */

        exports.install = function (vue, browserify) {
            if (shimmed) return
            shimmed = true

            Vue = vue
            isBrowserify = browserify

            exports.compatible = !!Vue.internalDirectives
            if (!exports.compatible) {
                console.warn(
                    '[HMR] vue-loader hot reload is only compatible with ' +
                    'Vue.js 1.0.0+.'
                )
                return
            }

            // patch view directive
            patchView(Vue.internalDirectives.component)
            console.log('[HMR] Vue component hot reload shim applied.')
            // shim router-view if present
            var routerView = Vue.elementDirective('router-view')
            if (routerView) {
                patchView(routerView)
                console.log('[HMR] vue-router <router-view> hot reload shim applied.')
            }
        }

        /**
         * Shim the view directive (component or router-view).
         *
         * @param {Object} View
         */

        function patchView(View) {
            var unbuild = View.unbuild
            View.unbuild = function (defer) {
                if (!this.hotUpdating) {
                    var prevComponent = this.childVM && this.childVM.constructor
                    removeView(prevComponent, this)
                    // defer = true means we are transitioning to a new
                    // Component. Register this new component to the list.
                    if (defer) {
                        addView(this.Component, this)
                    }
                }
                // call original
                return unbuild.call(this, defer)
            }
        }

        /**
         * Add a component view to a Component's hot list
         *
         * @param {Function} Component
         * @param {Directive} view - view directive instance
         */

        function addView(Component, view) {
            var id = Component && Component.options.hotID
            if (id) {
                if (!map[id]) {
                    map[id] = {
                        Component: Component,
                        views: [],
                        instances: []
                    }
                }
                map[id].views.push(view)
            }
        }

        /**
         * Remove a component view from a Component's hot list
         *
         * @param {Function} Component
         * @param {Directive} view - view directive instance
         */

        function removeView(Component, view) {
            var id = Component && Component.options.hotID
            if (id) {
                map[id].views.$remove(view)
            }
        }

        /**
         * Create a record for a hot module, which keeps track of its construcotr,
         * instnaces and views (component directives or router-views).
         *
         * @param {String} id
         * @param {Object} options
         */

        exports.createRecord = function (id, options) {
            if (typeof options === 'function') {
                options = options.options
            }
            if (typeof options.el !== 'string' && typeof options.data !== 'object') {
                makeOptionsHot(id, options)
                map[id] = {
                    Component: null,
                    views: [],
                    instances: []
                }
            }
        }

        /**
         * Make a Component options object hot.
         *
         * @param {String} id
         * @param {Object} options
         */

        function makeOptionsHot(id, options) {
            options.hotID = id
            injectHook(options, 'created', function () {
                var record = map[id]
                if (!record.Component) {
                    record.Component = this.constructor
                }
                record.instances.push(this)
            })
            injectHook(options, 'beforeDestroy', function () {
                map[id].instances.$remove(this)
            })
        }

        /**
         * Inject a hook to a hot reloadable component so that
         * we can keep track of it.
         *
         * @param {Object} options
         * @param {String} name
         * @param {Function} hook
         */

        function injectHook(options, name, hook) {
            var existing = options[name]
            options[name] = existing
                ? Array.isArray(existing)
                ? existing.concat(hook)
                : [existing, hook]
                : [hook]
        }

        /**
         * Update a hot component.
         *
         * @param {String} id
         * @param {Object|null} newOptions
         * @param {String|null} newTemplate
         */

        exports.update = function (id, newOptions, newTemplate) {
            var record = map[id]
            // force full-reload if an instance of the component is active but is not
            // managed by a view
            if (!record || (record.instances.length && !record.views.length)) {
                console.log('[HMR] Root or manually-mounted instance modified. Full reload may be required.')
                if (!isBrowserify) {
                    window.location.reload()
                } else {
                    // browserify-hmr somehow sends incomplete bundle if we reload here
                    return
                }
            }
            if (!isBrowserify) {
                // browserify-hmr already logs this
                console.log('[HMR] Updating component: ' + format(id))
            }
            var Component = record.Component
            // update constructor
            if (newOptions) {
                // in case the user exports a constructor
                Component = record.Component = typeof newOptions === 'function'
                    ? newOptions
                    : Vue.extend(newOptions)
                makeOptionsHot(id, Component.options)
            }
            if (newTemplate) {
                Component.options.template = newTemplate
            }
            // handle recursive lookup
            if (Component.options.name) {
                Component.options.components[Component.options.name] = Component
            }
            // reset constructor cached linker
            Component.linker = null
            // reload all views
            record.views.forEach(function (view) {
                updateView(view, Component)
            })
            // flush devtools
            if (window.__VUE_DEVTOOLS_GLOBAL_HOOK__) {
                window.__VUE_DEVTOOLS_GLOBAL_HOOK__.emit('flush')
            }
        }

        /**
         * Update a component view instance
         *
         * @param {Directive} view
         * @param {Function} Component
         */

        function updateView(view, Component) {
            if (!view._bound) {
                return
            }
            view.Component = Component
            view.hotUpdating = true
            // disable transitions
            view.vm._isCompiled = false
            // save state
            var state = extractState(view.childVM)
            // remount, make sure to disable keep-alive
            var keepAlive = view.keepAlive
            view.keepAlive = false
            view.mountComponent()
            view.keepAlive = keepAlive
            // restore state
            restoreState(view.childVM, state, true)
            // re-eanble transitions
            view.vm._isCompiled = true
            view.hotUpdating = false
        }

        /**
         * Extract state from a Vue instance.
         *
         * @param {Vue} vm
         * @return {Object}
         */

        function extractState(vm) {
            return {
                cid: vm.constructor.cid,
                data: vm.$data,
                children: vm.$children.map(extractState)
            }
        }

        /**
         * Restore state to a reloaded Vue instance.
         *
         * @param {Vue} vm
         * @param {Object} state
         */

        function restoreState(vm, state, isRoot) {
            var oldAsyncConfig
            if (isRoot) {
                // set Vue into sync mode during state rehydration
                oldAsyncConfig = Vue.config.async
                Vue.config.async = false
            }
            // actual restore
            if (isRoot || !vm._props) {
                vm.$data = state.data
            } else {
                Object.keys(state.data).forEach(function (key) {
                    if (!vm._props[key]) {
                        // for non-root, only restore non-props fields
                        vm.$data[key] = state.data[key]
                    }
                })
            }
            // verify child consistency
            var hasSameChildren = vm.$children.every(function (c, i) {
                return state.children[i] && state.children[i].cid === c.constructor.cid
            })
            if (hasSameChildren) {
                // rehydrate children
                vm.$children.forEach(function (c, i) {
                    restoreState(c, state.children[i])
                })
            }
            if (isRoot) {
                Vue.config.async = oldAsyncConfig
            }
        }

        function format(id) {
            return id.match(/[^\/]+\.vue$/)[0]
        }

    }, {}],
    5: [function (require, module, exports) {
        /**
         * Before Interceptor.
         */

        var _ = require('../util');

        module.exports = {

            request: function (request) {

                if (_.isFunction(request.beforeSend)) {
                    request.beforeSend.call(this, request);
                }

                return request;
            }

        };

    }, {"../util": 28}],
    6: [function (require, module, exports) {
        /**
         * Base client.
         */

        var _ = require('../../util');
        var Promise = require('../../promise');
        var xhrClient = require('./xhr');

        module.exports = function (request) {

            var response = (request.client || xhrClient)(request);

            return Promise.resolve(response).then(function (response) {

                if (response.headers) {

                    var headers = parseHeaders(response.headers);

                    response.headers = function (name) {

                        if (name) {
                            return headers[_.toLower(name)];
                        }

                        return headers;
                    };

                }

                response.ok = response.status >= 200 && response.status < 300;

                return response;
            });

        };

        function parseHeaders(str) {

            var headers = {}, value, name, i;

            if (_.isString(str)) {
                _.each(str.split('\n'), function (row) {

                    i = row.indexOf(':');
                    name = _.trim(_.toLower(row.slice(0, i)));
                    value = _.trim(row.slice(i + 1));

                    if (headers[name]) {

                        if (_.isArray(headers[name])) {
                            headers[name].push(value);
                        } else {
                            headers[name] = [headers[name], value];
                        }

                    } else {

                        headers[name] = value;
                    }

                });
            }

            return headers;
        }

    }, {"../../promise": 21, "../../util": 28, "./xhr": 9}],
    7: [function (require, module, exports) {
        /**
         * JSONP client.
         */

        var _ = require('../../util');
        var Promise = require('../../promise');

        module.exports = function (request) {
            return new Promise(function (resolve) {

                var callback = '_jsonp' + Math.random().toString(36).substr(2), response = {
                    request: request,
                    data: null
                }, handler, script;

                request.params[request.jsonp] = callback;
                request.cancel = function () {
                    handler({type: 'cancel'});
                };

                script = document.createElement('script');
                script.src = _.url(request);
                script.type = 'text/javascript';
                script.async = true;

                window[callback] = function (data) {
                    response.data = data;
                };

                handler = function (event) {

                    if (event.type === 'load' && response.data !== null) {
                        response.status = 200;
                    } else if (event.type === 'error') {
                        response.status = 404;
                    } else {
                        response.status = 0;
                    }

                    resolve(response);

                    delete window[callback];
                    document.body.removeChild(script);
                };

                script.onload = handler;
                script.onerror = handler;

                document.body.appendChild(script);
            });
        };

    }, {"../../promise": 21, "../../util": 28}],
    8: [function (require, module, exports) {
        /**
         * XDomain client (Internet Explorer).
         */

        var _ = require('../../util');
        var Promise = require('../../promise');

        module.exports = function (request) {
            return new Promise(function (resolve) {

                var xdr = new XDomainRequest(), response = {request: request}, handler;

                request.cancel = function () {
                    xdr.abort();
                };

                xdr.open(request.method, _.url(request), true);

                handler = function (event) {

                    response.data = xdr.responseText;
                    response.status = xdr.status;
                    response.statusText = xdr.statusText;

                    resolve(response);
                };

                xdr.timeout = 0;
                xdr.onload = handler;
                xdr.onabort = handler;
                xdr.onerror = handler;
                xdr.ontimeout = function () {
                };
                xdr.onprogress = function () {
                };

                xdr.send(request.data);
            });
        };

    }, {"../../promise": 21, "../../util": 28}],
    9: [function (require, module, exports) {
        /**
         * XMLHttp client.
         */

        var _ = require('../../util');
        var Promise = require('../../promise');

        module.exports = function (request) {
            return new Promise(function (resolve) {

                var xhr = new XMLHttpRequest(), response = {request: request}, handler;

                request.cancel = function () {
                    xhr.abort();
                };

                xhr.open(request.method, _.url(request), true);

                handler = function (event) {

                    response.data = xhr.responseText;
                    response.status = xhr.status;
                    response.statusText = xhr.statusText;
                    response.headers = xhr.getAllResponseHeaders();

                    resolve(response);
                };

                xhr.timeout = 0;
                xhr.onload = handler;
                xhr.onabort = handler;
                xhr.onerror = handler;
                xhr.ontimeout = function () {
                };
                xhr.onprogress = function () {
                };

                if (_.isPlainObject(request.xhr)) {
                    _.extend(xhr, request.xhr);
                }

                if (_.isPlainObject(request.upload)) {
                    _.extend(xhr.upload, request.upload);
                }

                _.each(request.headers || {}, function (value, header) {
                    xhr.setRequestHeader(header, value);
                });

                xhr.send(request.data);
            });
        };

    }, {"../../promise": 21, "../../util": 28}],
    10: [function (require, module, exports) {
        /**
         * CORS Interceptor.
         */

        var _ = require('../util');
        var xdrClient = require('./client/xdr');
        var xhrCors = 'withCredentials' in new XMLHttpRequest();
        var originUrl = _.url.parse(location.href);

        module.exports = {

            request: function (request) {

                if (request.crossOrigin === null) {
                    request.crossOrigin = crossOrigin(request);
                }

                if (request.crossOrigin) {

                    if (!xhrCors) {
                        request.client = xdrClient;
                    }

                    request.emulateHTTP = false;
                }

                return request;
            }

        };

        function crossOrigin(request) {

            var requestUrl = _.url.parse(_.url(request));

            return (requestUrl.protocol !== originUrl.protocol || requestUrl.host !== originUrl.host);
        }

    }, {"../util": 28, "./client/xdr": 8}],
    11: [function (require, module, exports) {
        /**
         * Header Interceptor.
         */

        var _ = require('../util');

        module.exports = {

            request: function (request) {

                request.method = request.method.toUpperCase();
                request.headers = _.extend({}, _.http.headers.common,
                    !request.crossOrigin ? _.http.headers.custom : {},
                    _.http.headers[request.method.toLowerCase()],
                    request.headers
                );

                if (_.isPlainObject(request.data) && /^(GET|JSONP)$/i.test(request.method)) {
                    _.extend(request.params, request.data);
                    delete request.data;
                }

                return request;
            }

        };

    }, {"../util": 28}],
    12: [function (require, module, exports) {
        /**
         * Service for sending network requests.
         */

        var _ = require('../util');
        var Client = require('./client');
        var Promise = require('../promise');
        var interceptor = require('./interceptor');
        var jsonType = {'Content-Type': 'application/json'};

        function Http(url, options) {

            var client = Client, request, promise;

            Http.interceptors.forEach(function (handler) {
                client = interceptor(handler, this.$vm)(client);
            }, this);

            options = _.isObject(url) ? url : _.extend({url: url}, options);
            request = _.merge({}, Http.options, this.$options, options);
            promise = client(request).bind(this.$vm).then(function (response) {

                return response.ok ? response : Promise.reject(response);

            }, function (response) {

                if (response instanceof Error) {
                    _.error(response);
                }

                return Promise.reject(response);
            });

            if (request.success) {
                promise.success(request.success);
            }

            if (request.error) {
                promise.error(request.error);
            }

            return promise;
        }

        Http.options = {
            method: 'get',
            data: '',
            params: {},
            headers: {},
            xhr: null,
            upload: null,
            jsonp: 'callback',
            beforeSend: null,
            crossOrigin: null,
            emulateHTTP: false,
            emulateJSON: false,
            timeout: 0
        };

        Http.interceptors = [
            require('./before'),
            require('./timeout'),
            require('./jsonp'),
            require('./method'),
            require('./mime'),
            require('./header'),
            require('./cors')
        ];

        Http.headers = {
            put: jsonType,
            post: jsonType,
            patch: jsonType,
            delete: jsonType,
            common: {'Accept': 'application/json, text/plain, */*'},
            custom: {'X-Requested-With': 'XMLHttpRequest'}
        };

        ['get', 'put', 'post', 'patch', 'delete', 'jsonp'].forEach(function (method) {

            Http[method] = function (url, data, success, options) {

                if (_.isFunction(data)) {
                    options = success;
                    success = data;
                    data = undefined;
                }

                if (_.isObject(success)) {
                    options = success;
                    success = undefined;
                }

                return this(url, _.extend({method: method, data: data, success: success}, options));
            };
        });

        module.exports = _.http = Http;

    }, {
        "../promise": 21,
        "../util": 28,
        "./before": 5,
        "./client": 6,
        "./cors": 10,
        "./header": 11,
        "./interceptor": 13,
        "./jsonp": 14,
        "./method": 15,
        "./mime": 16,
        "./timeout": 17
    }],
    13: [function (require, module, exports) {
        /**
         * Interceptor factory.
         */

        var _ = require('../util');
        var Promise = require('../promise');

        module.exports = function (handler, vm) {

            return function (client) {

                if (_.isFunction(handler)) {
                    handler = handler.call(vm, Promise);
                }

                return function (request) {

                    if (_.isFunction(handler.request)) {
                        request = handler.request.call(vm, request);
                    }

                    return when(request, function (request) {
                        return when(client(request), function (response) {

                            if (_.isFunction(handler.response)) {
                                response = handler.response.call(vm, response);
                            }

                            return response;
                        });
                    });
                };
            };
        };

        function when(value, fulfilled, rejected) {

            var promise = Promise.resolve(value);

            if (arguments.length < 2) {
                return promise;
            }

            return promise.then(fulfilled, rejected);
        }

    }, {"../promise": 21, "../util": 28}],
    14: [function (require, module, exports) {
        /**
         * JSONP Interceptor.
         */

        var jsonpClient = require('./client/jsonp');

        module.exports = {

            request: function (request) {

                if (request.method == 'JSONP') {
                    request.client = jsonpClient;
                }

                return request;
            }

        };

    }, {"./client/jsonp": 7}],
    15: [function (require, module, exports) {
        /**
         * HTTP method override Interceptor.
         */

        module.exports = {

            request: function (request) {

                if (request.emulateHTTP && /^(PUT|PATCH|DELETE)$/i.test(request.method)) {
                    request.headers['X-HTTP-Method-Override'] = request.method;
                    request.method = 'POST';
                }

                return request;
            }

        };

    }, {}],
    16: [function (require, module, exports) {
        /**
         * Mime Interceptor.
         */

        var _ = require('../util');

        module.exports = {

            request: function (request) {

                if (request.emulateJSON && _.isPlainObject(request.data)) {
                    request.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                    request.data = _.url.params(request.data);
                }

                if (_.isObject(request.data) && /FormData/i.test(request.data.toString())) {
                    delete request.headers['Content-Type'];
                }

                if (_.isPlainObject(request.data)) {
                    request.data = JSON.stringify(request.data);
                }

                return request;
            },

            response: function (response) {

                try {
                    response.data = JSON.parse(response.data);
                } catch (e) {
                }

                return response;
            }

        };

    }, {"../util": 28}],
    17: [function (require, module, exports) {
        /**
         * Timeout Interceptor.
         */

        module.exports = function () {

            var timeout;

            return {

                request: function (request) {

                    if (request.timeout) {
                        timeout = setTimeout(function () {
                            request.cancel();
                        }, request.timeout);
                    }

                    return request;
                },

                response: function (response) {

                    clearTimeout(timeout);

                    return response;
                }

            };
        };

    }, {}],
    18: [function (require, module, exports) {
        /**
         * Install plugin.
         */

        function install(Vue) {

            var _ = require('./util');

            _.config = Vue.config;
            _.warning = Vue.util.warn;
            _.nextTick = Vue.util.nextTick;

            Vue.url = require('./url');
            Vue.http = require('./http');
            Vue.resource = require('./resource');
            Vue.Promise = require('./promise');

            Object.defineProperties(Vue.prototype, {

                $url: {
                    get: function () {
                        return _.options(Vue.url, this, this.$options.url);
                    }
                },

                $http: {
                    get: function () {
                        return _.options(Vue.http, this, this.$options.http);
                    }
                },

                $resource: {
                    get: function () {
                        return Vue.resource.bind(this);
                    }
                },

                $promise: {
                    get: function () {
                        return function (executor) {
                            return new Vue.Promise(executor, this);
                        }.bind(this);
                    }
                }

            });
        }

        if (window.Vue) {
            Vue.use(install);
        }

        module.exports = install;

    }, {"./http": 12, "./promise": 21, "./resource": 22, "./url": 23, "./util": 28}],
    19: [function (require, module, exports) {
        /**
         * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
         */

        var _ = require('../util');

        var RESOLVED = 0;
        var REJECTED = 1;
        var PENDING = 2;

        function Promise(executor) {

            this.state = PENDING;
            this.value = undefined;
            this.deferred = [];

            var promise = this;

            try {
                executor(function (x) {
                    promise.resolve(x);
                }, function (r) {
                    promise.reject(r);
                });
            } catch (e) {
                promise.reject(e);
            }
        }

        Promise.reject = function (r) {
            return new Promise(function (resolve, reject) {
                reject(r);
            });
        };

        Promise.resolve = function (x) {
            return new Promise(function (resolve, reject) {
                resolve(x);
            });
        };

        Promise.all = function all(iterable) {
            return new Promise(function (resolve, reject) {
                var count = 0, result = [];

                if (iterable.length === 0) {
                    resolve(result);
                }

                function resolver(i) {
                    return function (x) {
                        result[i] = x;
                        count += 1;

                        if (count === iterable.length) {
                            resolve(result);
                        }
                    };
                }

                for (var i = 0; i < iterable.length; i += 1) {
                    Promise.resolve(iterable[i]).then(resolver(i), reject);
                }
            });
        };

        Promise.race = function race(iterable) {
            return new Promise(function (resolve, reject) {
                for (var i = 0; i < iterable.length; i += 1) {
                    Promise.resolve(iterable[i]).then(resolve, reject);
                }
            });
        };

        var p = Promise.prototype;

        p.resolve = function resolve(x) {
            var promise = this;

            if (promise.state === PENDING) {
                if (x === promise) {
                    throw new TypeError('Promise settled with itself.');
                }

                var called = false;

                try {
                    var then = x && x['then'];

                    if (x !== null && typeof x === 'object' && typeof then === 'function') {
                        then.call(x, function (x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;

                        }, function (r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        });
                        return;
                    }
                } catch (e) {
                    if (!called) {
                        promise.reject(e);
                    }
                    return;
                }

                promise.state = RESOLVED;
                promise.value = x;
                promise.notify();
            }
        };

        p.reject = function reject(reason) {
            var promise = this;

            if (promise.state === PENDING) {
                if (reason === promise) {
                    throw new TypeError('Promise settled with itself.');
                }

                promise.state = REJECTED;
                promise.value = reason;
                promise.notify();
            }
        };

        p.notify = function notify() {
            var promise = this;

            _.nextTick(function () {
                if (promise.state !== PENDING) {
                    while (promise.deferred.length) {
                        var deferred = promise.deferred.shift(),
                            onResolved = deferred[0],
                            onRejected = deferred[1],
                            resolve = deferred[2],
                            reject = deferred[3];

                        try {
                            if (promise.state === RESOLVED) {
                                if (typeof onResolved === 'function') {
                                    resolve(onResolved.call(undefined, promise.value));
                                } else {
                                    resolve(promise.value);
                                }
                            } else if (promise.state === REJECTED) {
                                if (typeof onRejected === 'function') {
                                    resolve(onRejected.call(undefined, promise.value));
                                } else {
                                    reject(promise.value);
                                }
                            }
                        } catch (e) {
                            reject(e);
                        }
                    }
                }
            });
        };

        p.then = function then(onResolved, onRejected) {
            var promise = this;

            return new Promise(function (resolve, reject) {
                promise.deferred.push([onResolved, onRejected, resolve, reject]);
                promise.notify();
            });
        };

        p.catch = function (onRejected) {
            return this.then(undefined, onRejected);
        };

        module.exports = Promise;

    }, {"../util": 28}],
    20: [function (require, module, exports) {
        /**
         * URL Template v2.0.6 (https://github.com/bramstein/url-template)
         */

        exports.expand = function (url, params, variables) {

            var tmpl = this.parse(url), expanded = tmpl.expand(params);

            if (variables) {
                variables.push.apply(variables, tmpl.vars);
            }

            return expanded;
        };

        exports.parse = function (template) {

            var operators = ['+', '#', '.', '/', ';', '?', '&'], variables = [];

            return {
                vars: variables,
                expand: function (context) {
                    return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function (_, expression, literal) {
                        if (expression) {

                            var operator = null, values = [];

                            if (operators.indexOf(expression.charAt(0)) !== -1) {
                                operator = expression.charAt(0);
                                expression = expression.substr(1);
                            }

                            expression.split(/,/g).forEach(function (variable) {
                                var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
                                values.push.apply(values, exports.getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
                                variables.push(tmp[1]);
                            });

                            if (operator && operator !== '+') {

                                var separator = ',';

                                if (operator === '?') {
                                    separator = '&';
                                } else if (operator !== '#') {
                                    separator = operator;
                                }

                                return (values.length !== 0 ? operator : '') + values.join(separator);
                            } else {
                                return values.join(',');
                            }

                        } else {
                            return exports.encodeReserved(literal);
                        }
                    });
                }
            };
        };

        exports.getValues = function (context, operator, key, modifier) {

            var value = context[key], result = [];

            if (this.isDefined(value) && value !== '') {
                if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
                    value = value.toString();

                    if (modifier && modifier !== '*') {
                        value = value.substring(0, parseInt(modifier, 10));
                    }

                    result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
                } else {
                    if (modifier === '*') {
                        if (Array.isArray(value)) {
                            value.filter(this.isDefined).forEach(function (value) {
                                result.push(this.encodeValue(operator, value, this.isKeyOperator(operator) ? key : null));
                            }, this);
                        } else {
                            Object.keys(value).forEach(function (k) {
                                if (this.isDefined(value[k])) {
                                    result.push(this.encodeValue(operator, value[k], k));
                                }
                            }, this);
                        }
                    } else {
                        var tmp = [];

                        if (Array.isArray(value)) {
                            value.filter(this.isDefined).forEach(function (value) {
                                tmp.push(this.encodeValue(operator, value));
                            }, this);
                        } else {
                            Object.keys(value).forEach(function (k) {
                                if (this.isDefined(value[k])) {
                                    tmp.push(encodeURIComponent(k));
                                    tmp.push(this.encodeValue(operator, value[k].toString()));
                                }
                            }, this);
                        }

                        if (this.isKeyOperator(operator)) {
                            result.push(encodeURIComponent(key) + '=' + tmp.join(','));
                        } else if (tmp.length !== 0) {
                            result.push(tmp.join(','));
                        }
                    }
                }
            } else {
                if (operator === ';') {
                    result.push(encodeURIComponent(key));
                } else if (value === '' && (operator === '&' || operator === '?')) {
                    result.push(encodeURIComponent(key) + '=');
                } else if (value === '') {
                    result.push('');
                }
            }

            return result;
        };

        exports.isDefined = function (value) {
            return value !== undefined && value !== null;
        };

        exports.isKeyOperator = function (operator) {
            return operator === ';' || operator === '&' || operator === '?';
        };

        exports.encodeValue = function (operator, value, key) {

            value = (operator === '+' || operator === '#') ? this.encodeReserved(value) : encodeURIComponent(value);

            if (key) {
                return encodeURIComponent(key) + '=' + value;
            } else {
                return value;
            }
        };

        exports.encodeReserved = function (str) {
            return str.split(/(%[0-9A-Fa-f]{2})/g).map(function (part) {
                if (!/%[0-9A-Fa-f]/.test(part)) {
                    part = encodeURI(part);
                }
                return part;
            }).join('');
        };

    }, {}],
    21: [function (require, module, exports) {
        /**
         * Promise adapter.
         */

        var _ = require('./util');
        var PromiseObj = window.Promise || require('./lib/promise');

        function Promise(executor, context) {

            if (executor instanceof PromiseObj) {
                this.promise = executor;
            } else {
                this.promise = new PromiseObj(executor.bind(context));
            }

            this.context = context;
        }

        Promise.all = function (iterable, context) {
            return new Promise(PromiseObj.all(iterable), context);
        };

        Promise.resolve = function (value, context) {
            return new Promise(PromiseObj.resolve(value), context);
        };

        Promise.reject = function (reason, context) {
            return new Promise(PromiseObj.reject(reason), context);
        };

        Promise.race = function (iterable, context) {
            return new Promise(PromiseObj.race(iterable), context);
        };

        var p = Promise.prototype;

        p.bind = function (context) {
            this.context = context;
            return this;
        };

        p.then = function (fulfilled, rejected) {

            if (fulfilled && fulfilled.bind && this.context) {
                fulfilled = fulfilled.bind(this.context);
            }

            if (rejected && rejected.bind && this.context) {
                rejected = rejected.bind(this.context);
            }

            this.promise = this.promise.then(fulfilled, rejected);

            return this;
        };

        p.catch = function (rejected) {

            if (rejected && rejected.bind && this.context) {
                rejected = rejected.bind(this.context);
            }

            this.promise = this.promise.catch(rejected);

            return this;
        };

        p.finally = function (callback) {

            return this.then(function (value) {
                    callback.call(this);
                    return value;
                }, function (reason) {
                    callback.call(this);
                    return PromiseObj.reject(reason);
                }
            );
        };

        p.success = function (callback) {

            _.warn('The `success` method has been deprecated. Use the `then` method instead.');

            return this.then(function (response) {
                return callback.call(this, response.data, response.status, response) || response;
            });
        };

        p.error = function (callback) {

            _.warn('The `error` method has been deprecated. Use the `catch` method instead.');

            return this.catch(function (response) {
                return callback.call(this, response.data, response.status, response) || response;
            });
        };

        p.always = function (callback) {

            _.warn('The `always` method has been deprecated. Use the `finally` method instead.');

            var cb = function (response) {
                return callback.call(this, response.data, response.status, response) || response;
            };

            return this.then(cb, cb);
        };

        module.exports = Promise;

    }, {"./lib/promise": 19, "./util": 28}],
    22: [function (require, module, exports) {
        /**
         * Service for interacting with RESTful services.
         */

        var _ = require('./util');

        function Resource(url, params, actions, options) {

            var self = this, resource = {};

            actions = _.extend({},
                Resource.actions,
                actions
            );

            _.each(actions, function (action, name) {

                action = _.merge({url: url, params: params || {}}, options, action);

                resource[name] = function () {
                    return (self.$http || _.http)(opts(action, arguments));
                };
            });

            return resource;
        }

        function opts(action, args) {

            var options = _.extend({}, action), params = {}, data, success, error;

            switch (args.length) {

                case 4:

                    error = args[3];
                    success = args[2];

                case 3:
                case 2:

                    if (_.isFunction(args[1])) {

                        if (_.isFunction(args[0])) {

                            success = args[0];
                            error = args[1];

                            break;
                        }

                        success = args[1];
                        error = args[2];

                    } else {

                        params = args[0];
                        data = args[1];
                        success = args[2];

                        break;
                    }

                case 1:

                    if (_.isFunction(args[0])) {
                        success = args[0];
                    } else if (/^(POST|PUT|PATCH)$/i.test(options.method)) {
                        data = args[0];
                    } else {
                        params = args[0];
                    }

                    break;

                case 0:

                    break;

                default:

                    throw 'Expected up to 4 arguments [params, data, success, error], got ' + args.length + ' arguments';
            }

            options.data = data;
            options.params = _.extend({}, options.params, params);

            if (success) {
                options.success = success;
            }

            if (error) {
                options.error = error;
            }

            return options;
        }

        Resource.actions = {

            get: {method: 'GET'},
            save: {method: 'POST'},
            query: {method: 'GET'},
            update: {method: 'PUT'},
            remove: {method: 'DELETE'},
            delete: {method: 'DELETE'}

        };

        module.exports = _.resource = Resource;

    }, {"./util": 28}],
    23: [function (require, module, exports) {
        /**
         * Service for URL templating.
         */

        var _ = require('../util');
        var ie = document.documentMode;
        var el = document.createElement('a');

        function Url(url, params) {

            var options = url, transform;

            if (_.isString(url)) {
                options = {url: url, params: params};
            }

            options = _.merge({}, Url.options, this.$options, options);

            Url.transforms.forEach(function (handler) {
                transform = factory(handler, transform, this.$vm);
            }, this);

            return transform(options);
        };

        /**
         * Url options.
         */

        Url.options = {
            url: '',
            root: null,
            params: {}
        };

        /**
         * Url transforms.
         */

        Url.transforms = [
            require('./template'),
            require('./legacy'),
            require('./query'),
            require('./root')
        ];

        /**
         * Encodes a Url parameter string.
         *
         * @param {Object} obj
         */

        Url.params = function (obj) {

            var params = [], escape = encodeURIComponent;

            params.add = function (key, value) {

                if (_.isFunction(value)) {
                    value = value();
                }

                if (value === null) {
                    value = '';
                }

                this.push(escape(key) + '=' + escape(value));
            };

            serialize(params, obj);

            return params.join('&').replace(/%20/g, '+');
        };

        /**
         * Parse a URL and return its components.
         *
         * @param {String} url
         */

        Url.parse = function (url) {

            if (ie) {
                el.href = url;
                url = el.href;
            }

            el.href = url;

            return {
                href: el.href,
                protocol: el.protocol ? el.protocol.replace(/:$/, '') : '',
                port: el.port,
                host: el.host,
                hostname: el.hostname,
                pathname: el.pathname.charAt(0) === '/' ? el.pathname : '/' + el.pathname,
                search: el.search ? el.search.replace(/^\?/, '') : '',
                hash: el.hash ? el.hash.replace(/^#/, '') : ''
            };
        };

        function factory(handler, next, vm) {
            return function (options) {
                return handler.call(vm, options, next);
            };
        }

        function serialize(params, obj, scope) {

            var array = _.isArray(obj), plain = _.isPlainObject(obj), hash;

            _.each(obj, function (value, key) {

                hash = _.isObject(value) || _.isArray(value);

                if (scope) {
                    key = scope + '[' + (plain || hash ? key : '') + ']';
                }

                if (!scope && array) {
                    params.add(value.name, value.value);
                } else if (hash) {
                    serialize(params, value, key);
                } else {
                    params.add(key, value);
                }
            });
        }

        module.exports = _.url = Url;

    }, {"../util": 28, "./legacy": 24, "./query": 25, "./root": 26, "./template": 27}],
    24: [function (require, module, exports) {
        /**
         * Legacy Transform.
         */

        var _ = require('../util');

        module.exports = function (options, next) {

            var variables = [], url = next(options);

            url = url.replace(/(\/?):([a-z]\w*)/gi, function (match, slash, name) {

                _.warn('The `:' + name + '` parameter syntax has been deprecated. Use the `{' + name + '}` syntax instead.');

                if (options.params[name]) {
                    variables.push(name);
                    return slash + encodeUriSegment(options.params[name]);
                }

                return '';
            });

            variables.forEach(function (key) {
                delete options.params[key];
            });

            return url;
        };

        function encodeUriSegment(value) {

            return encodeUriQuery(value, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
        }

        function encodeUriQuery(value, spaces) {

            return encodeURIComponent(value).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, (spaces ? '%20' : '+'));
        }

    }, {"../util": 28}],
    25: [function (require, module, exports) {
        /**
         * Query Parameter Transform.
         */

        var _ = require('../util');

        module.exports = function (options, next) {

            var urlParams = Object.keys(_.url.options.params), query = {}, url = next(options);

            _.each(options.params, function (value, key) {
                if (urlParams.indexOf(key) === -1) {
                    query[key] = value;
                }
            });

            query = _.url.params(query);

            if (query) {
                url += (url.indexOf('?') == -1 ? '?' : '&') + query;
            }

            return url;
        };

    }, {"../util": 28}],
    26: [function (require, module, exports) {
        /**
         * Root Prefix Transform.
         */

        var _ = require('../util');

        module.exports = function (options, next) {

            var url = next(options);

            if (_.isString(options.root) && !url.match(/^(https?:)?\//)) {
                url = options.root + '/' + url;
            }

            return url;
        };

    }, {"../util": 28}],
    27: [function (require, module, exports) {
        /**
         * URL Template (RFC 6570) Transform.
         */

        var UrlTemplate = require('../lib/url-template');

        module.exports = function (options) {

            var variables = [], url = UrlTemplate.expand(options.url, options.params, variables);

            variables.forEach(function (key) {
                delete options.params[key];
            });

            return url;
        };

    }, {"../lib/url-template": 20}],
    28: [function (require, module, exports) {
        /**
         * Utility functions.
         */

        var _ = exports, array = [], console = window.console;

        _.warn = function (msg) {
            if (console && _.warning && (!_.config.silent || _.config.debug)) {
                console.warn('[VueResource warn]: ' + msg);
            }
        };

        _.error = function (msg) {
            if (console) {
                console.error(msg);
            }
        };

        _.trim = function (str) {
            return str.replace(/^\s*|\s*$/g, '');
        };

        _.toLower = function (str) {
            return str ? str.toLowerCase() : '';
        };

        _.isArray = Array.isArray;

        _.isString = function (val) {
            return typeof val === 'string';
        };

        _.isFunction = function (val) {
            return typeof val === 'function';
        };

        _.isObject = function (obj) {
            return obj !== null && typeof obj === 'object';
        };

        _.isPlainObject = function (obj) {
            return _.isObject(obj) && Object.getPrototypeOf(obj) == Object.prototype;
        };

        _.options = function (fn, obj, options) {

            options = options || {};

            if (_.isFunction(options)) {
                options = options.call(obj);
            }

            return _.merge(fn.bind({$vm: obj, $options: options}), fn, {$options: options});
        };

        _.each = function (obj, iterator) {

            var i, key;

            if (typeof obj.length == 'number') {
                for (i = 0; i < obj.length; i++) {
                    iterator.call(obj[i], obj[i], i);
                }
            } else if (_.isObject(obj)) {
                for (key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        iterator.call(obj[key], obj[key], key);
                    }
                }
            }

            return obj;
        };

        _.defaults = function (target, source) {

            for (var key in source) {
                if (target[key] === undefined) {
                    target[key] = source[key];
                }
            }

            return target;
        };

        _.extend = function (target) {

            var args = array.slice.call(arguments, 1);

            args.forEach(function (arg) {
                merge(target, arg);
            });

            return target;
        };

        _.merge = function (target) {

            var args = array.slice.call(arguments, 1);

            args.forEach(function (arg) {
                merge(target, arg, true);
            });

            return target;
        };

        function merge(target, source, deep) {
            for (var key in source) {
                if (deep && (_.isPlainObject(source[key]) || _.isArray(source[key]))) {
                    if (_.isPlainObject(source[key]) && !_.isPlainObject(target[key])) {
                        target[key] = {};
                    }
                    if (_.isArray(source[key]) && !_.isArray(target[key])) {
                        target[key] = [];
                    }
                    merge(target[key], source[key], deep);
                } else if (source[key] !== undefined) {
                    target[key] = source[key];
                }
            }
        }

    }, {}],
    29: [function (require, module, exports) {
        /*!
         * vue-router v0.7.11
         * (c) 2016 Evan You
         * Released under the MIT License.
         */
        (function (global, factory) {
            typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
                typeof define === 'function' && define.amd ? define(factory) :
                    global.VueRouter = factory();
        }(this, function () {
            'use strict';

            var babelHelpers = {};

            babelHelpers.classCallCheck = function (instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            };
            function Target(path, matcher, delegate) {
                this.path = path;
                this.matcher = matcher;
                this.delegate = delegate;
            }

            Target.prototype = {
                to: function to(target, callback) {
                    var delegate = this.delegate;

                    if (delegate && delegate.willAddRoute) {
                        target = delegate.willAddRoute(this.matcher.target, target);
                    }

                    this.matcher.add(this.path, target);

                    if (callback) {
                        if (callback.length === 0) {
                            throw new Error("You must have an argument in the function passed to `to`");
                        }
                        this.matcher.addChild(this.path, target, callback, this.delegate);
                    }
                    return this;
                }
            };

            function Matcher(target) {
                this.routes = {};
                this.children = {};
                this.target = target;
            }

            Matcher.prototype = {
                add: function add(path, handler) {
                    this.routes[path] = handler;
                },

                addChild: function addChild(path, target, callback, delegate) {
                    var matcher = new Matcher(target);
                    this.children[path] = matcher;

                    var match = generateMatch(path, matcher, delegate);

                    if (delegate && delegate.contextEntered) {
                        delegate.contextEntered(target, match);
                    }

                    callback(match);
                }
            };

            function generateMatch(startingPath, matcher, delegate) {
                return function (path, nestedCallback) {
                    var fullPath = startingPath + path;

                    if (nestedCallback) {
                        nestedCallback(generateMatch(fullPath, matcher, delegate));
                    } else {
                        return new Target(startingPath + path, matcher, delegate);
                    }
                };
            }

            function addRoute(routeArray, path, handler) {
                var len = 0;
                for (var i = 0, l = routeArray.length; i < l; i++) {
                    len += routeArray[i].path.length;
                }

                path = path.substr(len);
                var route = {path: path, handler: handler};
                routeArray.push(route);
            }

            function eachRoute(baseRoute, matcher, callback, binding) {
                var routes = matcher.routes;

                for (var path in routes) {
                    if (routes.hasOwnProperty(path)) {
                        var routeArray = baseRoute.slice();
                        addRoute(routeArray, path, routes[path]);

                        if (matcher.children[path]) {
                            eachRoute(routeArray, matcher.children[path], callback, binding);
                        } else {
                            callback.call(binding, routeArray);
                        }
                    }
                }
            }

            function map(callback, addRouteCallback) {
                var matcher = new Matcher();

                callback(generateMatch("", matcher, this.delegate));

                eachRoute([], matcher, function (route) {
                    if (addRouteCallback) {
                        addRouteCallback(this, route);
                    } else {
                        this.add(route);
                    }
                }, this);
            }

            var specials = ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'];

            var escapeRegex = new RegExp('(\\' + specials.join('|\\') + ')', 'g');

            function isArray(test) {
                return Object.prototype.toString.call(test) === "[object Array]";
            }

            // A Segment represents a segment in the original route description.
            // Each Segment type provides an `eachChar` and `regex` method.
            //
            // The `eachChar` method invokes the callback with one or more character
            // specifications. A character specification consumes one or more input
            // characters.
            //
            // The `regex` method returns a regex fragment for the segment. If the
            // segment is a dynamic of star segment, the regex fragment also includes
            // a capture.
            //
            // A character specification contains:
            //
            // * `validChars`: a String with a list of all valid characters, or
            // * `invalidChars`: a String with a list of all invalid characters
            // * `repeat`: true if the character specification can repeat

            function StaticSegment(string) {
                this.string = string;
            }

            StaticSegment.prototype = {
                eachChar: function eachChar(callback) {
                    var string = this.string,
                        ch;

                    for (var i = 0, l = string.length; i < l; i++) {
                        ch = string.charAt(i);
                        callback({validChars: ch});
                    }
                },

                regex: function regex() {
                    return this.string.replace(escapeRegex, '\\$1');
                },

                generate: function generate() {
                    return this.string;
                }
            };

            function DynamicSegment(name) {
                this.name = name;
            }

            DynamicSegment.prototype = {
                eachChar: function eachChar(callback) {
                    callback({invalidChars: "/", repeat: true});
                },

                regex: function regex() {
                    return "([^/]+)";
                },

                generate: function generate(params) {
                    var val = params[this.name];
                    return val == null ? ":" + this.name : val;
                }
            };

            function StarSegment(name) {
                this.name = name;
            }

            StarSegment.prototype = {
                eachChar: function eachChar(callback) {
                    callback({invalidChars: "", repeat: true});
                },

                regex: function regex() {
                    return "(.+)";
                },

                generate: function generate(params) {
                    var val = params[this.name];
                    return val == null ? ":" + this.name : val;
                }
            };

            function EpsilonSegment() {
            }

            EpsilonSegment.prototype = {
                eachChar: function eachChar() {
                },
                regex: function regex() {
                    return "";
                },
                generate: function generate() {
                    return "";
                }
            };

            function parse(route, names, specificity) {
                // normalize route as not starting with a "/". Recognition will
                // also normalize.
                if (route.charAt(0) === "/") {
                    route = route.substr(1);
                }

                var segments = route.split("/"),
                    results = [];

                // A routes has specificity determined by the order that its different segments
                // appear in. This system mirrors how the magnitude of numbers written as strings
                // works.
                // Consider a number written as: "abc". An example would be "200". Any other number written
                // "xyz" will be smaller than "abc" so long as `a > z`. For instance, "199" is smaller
                // then "200", even though "y" and "z" (which are both 9) are larger than "0" (the value
                // of (`b` and `c`). This is because the leading symbol, "2", is larger than the other
                // leading symbol, "1".
                // The rule is that symbols to the left carry more weight than symbols to the right
                // when a number is written out as a string. In the above strings, the leading digit
                // represents how many 100's are in the number, and it carries more weight than the middle
                // number which represents how many 10's are in the number.
                // This system of number magnitude works well for route specificity, too. A route written as
                // `a/b/c` will be more specific than `x/y/z` as long as `a` is more specific than
                // `x`, irrespective of the other parts.
                // Because of this similarity, we assign each type of segment a number value written as a
                // string. We can find the specificity of compound routes by concatenating these strings
                // together, from left to right. After we have looped through all of the segments,
                // we convert the string to a number.
                specificity.val = '';

                for (var i = 0, l = segments.length; i < l; i++) {
                    var segment = segments[i],
                        match;

                    if (match = segment.match(/^:([^\/]+)$/)) {
                        results.push(new DynamicSegment(match[1]));
                        names.push(match[1]);
                        specificity.val += '3';
                    } else if (match = segment.match(/^\*([^\/]+)$/)) {
                        results.push(new StarSegment(match[1]));
                        specificity.val += '2';
                        names.push(match[1]);
                    } else if (segment === "") {
                        results.push(new EpsilonSegment());
                        specificity.val += '1';
                    } else {
                        results.push(new StaticSegment(segment));
                        specificity.val += '4';
                    }
                }

                specificity.val = +specificity.val;

                return results;
            }

            // A State has a character specification and (`charSpec`) and a list of possible
            // subsequent states (`nextStates`).
            //
            // If a State is an accepting state, it will also have several additional
            // properties:
            //
            // * `regex`: A regular expression that is used to extract parameters from paths
            //   that reached this accepting state.
            // * `handlers`: Information on how to convert the list of captures into calls
            //   to registered handlers with the specified parameters
            // * `types`: How many static, dynamic or star segments in this route. Used to
            //   decide which route to use if multiple registered routes match a path.
            //
            // Currently, State is implemented naively by looping over `nextStates` and
            // comparing a character specification against a character. A more efficient
            // implementation would use a hash of keys pointing at one or more next states.

            function State(charSpec) {
                this.charSpec = charSpec;
                this.nextStates = [];
            }

            State.prototype = {
                get: function get(charSpec) {
                    var nextStates = this.nextStates;

                    for (var i = 0, l = nextStates.length; i < l; i++) {
                        var child = nextStates[i];

                        var isEqual = child.charSpec.validChars === charSpec.validChars;
                        isEqual = isEqual && child.charSpec.invalidChars === charSpec.invalidChars;

                        if (isEqual) {
                            return child;
                        }
                    }
                },

                put: function put(charSpec) {
                    var state;

                    // If the character specification already exists in a child of the current
                    // state, just return that state.
                    if (state = this.get(charSpec)) {
                        return state;
                    }

                    // Make a new state for the character spec
                    state = new State(charSpec);

                    // Insert the new state as a child of the current state
                    this.nextStates.push(state);

                    // If this character specification repeats, insert the new state as a child
                    // of itself. Note that this will not trigger an infinite loop because each
                    // transition during recognition consumes a character.
                    if (charSpec.repeat) {
                        state.nextStates.push(state);
                    }

                    // Return the new state
                    return state;
                },

                // Find a list of child states matching the next character
                match: function match(ch) {
                    // DEBUG "Processing `" + ch + "`:"
                    var nextStates = this.nextStates,
                        child,
                        charSpec,
                        chars;

                    // DEBUG "  " + debugState(this)
                    var returned = [];

                    for (var i = 0, l = nextStates.length; i < l; i++) {
                        child = nextStates[i];

                        charSpec = child.charSpec;

                        if (typeof (chars = charSpec.validChars) !== 'undefined') {
                            if (chars.indexOf(ch) !== -1) {
                                returned.push(child);
                            }
                        } else if (typeof (chars = charSpec.invalidChars) !== 'undefined') {
                            if (chars.indexOf(ch) === -1) {
                                returned.push(child);
                            }
                        }
                    }

                    return returned;
                }

                /** IF DEBUG
                 , debug: function() {
      var charSpec = this.charSpec,
          debug = "[",
          chars = charSpec.validChars || charSpec.invalidChars;
       if (charSpec.invalidChars) { debug += "^"; }
      debug += chars;
      debug += "]";
       if (charSpec.repeat) { debug += "+"; }
       return debug;
    }
                 END IF **/
            };

            /** IF DEBUG
             function debug(log) {
    console.log(log);
  }

             function debugState(state) {
    return state.nextStates.map(function(n) {
      if (n.nextStates.length === 0) { return "( " + n.debug() + " [accepting] )"; }
      return "( " + n.debug() + " <then> " + n.nextStates.map(function(s) { return s.debug() }).join(" or ") + " )";
    }).join(", ")
  }
             END IF **/

            // Sort the routes by specificity
            function sortSolutions(states) {
                return states.sort(function (a, b) {
                    return b.specificity.val - a.specificity.val;
                });
            }

            function recognizeChar(states, ch) {
                var nextStates = [];

                for (var i = 0, l = states.length; i < l; i++) {
                    var state = states[i];

                    nextStates = nextStates.concat(state.match(ch));
                }

                return nextStates;
            }

            var oCreate = Object.create || function (proto) {
                    function F() {
                    }

                    F.prototype = proto;
                    return new F();
                };

            function RecognizeResults(queryParams) {
                this.queryParams = queryParams || {};
            }

            RecognizeResults.prototype = oCreate({
                splice: Array.prototype.splice,
                slice: Array.prototype.slice,
                push: Array.prototype.push,
                length: 0,
                queryParams: null
            });

            function findHandler(state, path, queryParams) {
                var handlers = state.handlers,
                    regex = state.regex;
                var captures = path.match(regex),
                    currentCapture = 1;
                var result = new RecognizeResults(queryParams);

                for (var i = 0, l = handlers.length; i < l; i++) {
                    var handler = handlers[i],
                        names = handler.names,
                        params = {};

                    for (var j = 0, m = names.length; j < m; j++) {
                        params[names[j]] = captures[currentCapture++];
                    }

                    result.push({handler: handler.handler, params: params, isDynamic: !!names.length});
                }

                return result;
            }

            function addSegment(currentState, segment) {
                segment.eachChar(function (ch) {
                    var state;

                    currentState = currentState.put(ch);
                });

                return currentState;
            }

            function decodeQueryParamPart(part) {
                // http://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1
                part = part.replace(/\+/gm, '%20');
                return decodeURIComponent(part);
            }

            // The main interface

            var RouteRecognizer = function RouteRecognizer() {
                this.rootState = new State();
                this.names = {};
            };

            RouteRecognizer.prototype = {
                add: function add(routes, options) {
                    var currentState = this.rootState,
                        regex = "^",
                        specificity = {},
                        handlers = [],
                        allSegments = [],
                        name;

                    var isEmpty = true;

                    for (var i = 0, l = routes.length; i < l; i++) {
                        var route = routes[i],
                            names = [];

                        var segments = parse(route.path, names, specificity);

                        allSegments = allSegments.concat(segments);

                        for (var j = 0, m = segments.length; j < m; j++) {
                            var segment = segments[j];

                            if (segment instanceof EpsilonSegment) {
                                continue;
                            }

                            isEmpty = false;

                            // Add a "/" for the new segment
                            currentState = currentState.put({validChars: "/"});
                            regex += "/";

                            // Add a representation of the segment to the NFA and regex
                            currentState = addSegment(currentState, segment);
                            regex += segment.regex();
                        }

                        var handler = {handler: route.handler, names: names};
                        handlers.push(handler);
                    }

                    if (isEmpty) {
                        currentState = currentState.put({validChars: "/"});
                        regex += "/";
                    }

                    currentState.handlers = handlers;
                    currentState.regex = new RegExp(regex + "$");
                    currentState.specificity = specificity;

                    if (name = options && options.as) {
                        this.names[name] = {
                            segments: allSegments,
                            handlers: handlers
                        };
                    }
                },

                handlersFor: function handlersFor(name) {
                    var route = this.names[name],
                        result = [];
                    if (!route) {
                        throw new Error("There is no route named " + name);
                    }

                    for (var i = 0, l = route.handlers.length; i < l; i++) {
                        result.push(route.handlers[i]);
                    }

                    return result;
                },

                hasRoute: function hasRoute(name) {
                    return !!this.names[name];
                },

                generate: function generate(name, params) {
                    var route = this.names[name],
                        output = "";
                    if (!route) {
                        throw new Error("There is no route named " + name);
                    }

                    var segments = route.segments;

                    for (var i = 0, l = segments.length; i < l; i++) {
                        var segment = segments[i];

                        if (segment instanceof EpsilonSegment) {
                            continue;
                        }

                        output += "/";
                        output += segment.generate(params);
                    }

                    if (output.charAt(0) !== '/') {
                        output = '/' + output;
                    }

                    if (params && params.queryParams) {
                        output += this.generateQueryString(params.queryParams);
                    }

                    return output;
                },

                generateQueryString: function generateQueryString(params) {
                    var pairs = [];
                    var keys = [];
                    for (var key in params) {
                        if (params.hasOwnProperty(key)) {
                            keys.push(key);
                        }
                    }
                    keys.sort();
                    for (var i = 0, len = keys.length; i < len; i++) {
                        key = keys[i];
                        var value = params[key];
                        if (value == null) {
                            continue;
                        }
                        var pair = encodeURIComponent(key);
                        if (isArray(value)) {
                            for (var j = 0, l = value.length; j < l; j++) {
                                var arrayPair = key + '[]' + '=' + encodeURIComponent(value[j]);
                                pairs.push(arrayPair);
                            }
                        } else {
                            pair += "=" + encodeURIComponent(value);
                            pairs.push(pair);
                        }
                    }

                    if (pairs.length === 0) {
                        return '';
                    }

                    return "?" + pairs.join("&");
                },

                parseQueryString: function parseQueryString(queryString) {
                    var pairs = queryString.split("&"),
                        queryParams = {};
                    for (var i = 0; i < pairs.length; i++) {
                        var pair = pairs[i].split('='),
                            key = decodeQueryParamPart(pair[0]),
                            keyLength = key.length,
                            isArray = false,
                            value;
                        if (pair.length === 1) {
                            value = 'true';
                        } else {
                            //Handle arrays
                            if (keyLength > 2 && key.slice(keyLength - 2) === '[]') {
                                isArray = true;
                                key = key.slice(0, keyLength - 2);
                                if (!queryParams[key]) {
                                    queryParams[key] = [];
                                }
                            }
                            value = pair[1] ? decodeQueryParamPart(pair[1]) : '';
                        }
                        if (isArray) {
                            queryParams[key].push(value);
                        } else {
                            queryParams[key] = value;
                        }
                    }
                    return queryParams;
                },

                recognize: function recognize(path) {
                    var states = [this.rootState],
                        pathLen,
                        i,
                        l,
                        queryStart,
                        queryParams = {},
                        isSlashDropped = false;

                    queryStart = path.indexOf('?');
                    if (queryStart !== -1) {
                        var queryString = path.substr(queryStart + 1, path.length);
                        path = path.substr(0, queryStart);
                        queryParams = this.parseQueryString(queryString);
                    }

                    path = decodeURI(path);

                    // DEBUG GROUP path

                    if (path.charAt(0) !== "/") {
                        path = "/" + path;
                    }

                    pathLen = path.length;
                    if (pathLen > 1 && path.charAt(pathLen - 1) === "/") {
                        path = path.substr(0, pathLen - 1);
                        isSlashDropped = true;
                    }

                    for (i = 0, l = path.length; i < l; i++) {
                        states = recognizeChar(states, path.charAt(i));
                        if (!states.length) {
                            break;
                        }
                    }

                    // END DEBUG GROUP

                    var solutions = [];
                    for (i = 0, l = states.length; i < l; i++) {
                        if (states[i].handlers) {
                            solutions.push(states[i]);
                        }
                    }

                    states = sortSolutions(solutions);

                    var state = solutions[0];

                    if (state && state.handlers) {
                        // if a trailing slash was dropped and a star segment is the last segment
                        // specified, put the trailing slash back
                        if (isSlashDropped && state.regex.source.slice(-5) === "(.+)$") {
                            path = path + "/";
                        }
                        return findHandler(state, path, queryParams);
                    }
                }
            };

            RouteRecognizer.prototype.map = map;

            RouteRecognizer.VERSION = '0.1.9';

            var genQuery = RouteRecognizer.prototype.generateQueryString;

            // export default for holding the Vue reference
            var exports$1 = {};

            /**
             * Warn stuff.
             *
             * @param {String} msg
             */

            function warn(msg) {
                /* istanbul ignore next */
                if (window.console) {
                    console.warn('[vue-router] ' + msg);
                    if (!exports$1.Vue || exports$1.Vue.config.debug) {
                        console.warn(new Error('warning stack trace:').stack);
                    }
                }
            }

            /**
             * Resolve a relative path.
             *
             * @param {String} base
             * @param {String} relative
             * @param {Boolean} append
             * @return {String}
             */

            function resolvePath(base, relative, append) {
                var query = base.match(/(\?.*)$/);
                if (query) {
                    query = query[1];
                    base = base.slice(0, -query.length);
                }
                // a query!
                if (relative.charAt(0) === '?') {
                    return base + relative;
                }
                var stack = base.split('/');
                // remove trailing segment if:
                // - not appending
                // - appending to trailing slash (last segment is empty)
                if (!append || !stack[stack.length - 1]) {
                    stack.pop();
                }
                // resolve relative path
                var segments = relative.replace(/^\//, '').split('/');
                for (var i = 0; i < segments.length; i++) {
                    var segment = segments[i];
                    if (segment === '.') {
                        continue;
                    } else if (segment === '..') {
                        stack.pop();
                    } else {
                        stack.push(segment);
                    }
                }
                // ensure leading slash
                if (stack[0] !== '') {
                    stack.unshift('');
                }
                return stack.join('/');
            }

            /**
             * Forgiving check for a promise
             *
             * @param {Object} p
             * @return {Boolean}
             */

            function isPromise(p) {
                return p && typeof p.then === 'function';
            }

            /**
             * Retrive a route config field from a component instance
             * OR a component contructor.
             *
             * @param {Function|Vue} component
             * @param {String} name
             * @return {*}
             */

            function getRouteConfig(component, name) {
                var options = component && (component.$options || component.options);
                return options && options.route && options.route[name];
            }

            /**
             * Resolve an async component factory. Have to do a dirty
             * mock here because of Vue core's internal API depends on
             * an ID check.
             *
             * @param {Object} handler
             * @param {Function} cb
             */

            var resolver = undefined;

            function resolveAsyncComponent(handler, cb) {
                if (!resolver) {
                    resolver = {
                        resolve: exports$1.Vue.prototype._resolveComponent,
                        $options: {
                            components: {
                                _: handler.component
                            }
                        }
                    };
                } else {
                    resolver.$options.components._ = handler.component;
                }
                resolver.resolve('_', function (Component) {
                    handler.component = Component;
                    cb(Component);
                });
            }

            /**
             * Map the dynamic segments in a path to params.
             *
             * @param {String} path
             * @param {Object} params
             * @param {Object} query
             */

            function mapParams(path, params, query) {
                if (params === undefined) params = {};

                path = path.replace(/:([^\/]+)/g, function (_, key) {
                    var val = params[key];
                    /* istanbul ignore if */
                    if (!val) {
                        warn('param "' + key + '" not found when generating ' + 'path for "' + path + '" with params ' + JSON.stringify(params));
                    }
                    return val || '';
                });
                if (query) {
                    path += genQuery(query);
                }
                return path;
            }

            var hashRE = /#.*$/;

            var HTML5History = (function () {
                function HTML5History(_ref) {
                    var root = _ref.root;
                    var onChange = _ref.onChange;
                    babelHelpers.classCallCheck(this, HTML5History);

                    if (root) {
                        // make sure there's the starting slash
                        if (root.charAt(0) !== '/') {
                            root = '/' + root;
                        }
                        // remove trailing slash
                        this.root = root.replace(/\/$/, '');
                        this.rootRE = new RegExp('^\\' + this.root);
                    } else {
                        this.root = null;
                    }
                    this.onChange = onChange;
                    // check base tag
                    var baseEl = document.querySelector('base');
                    this.base = baseEl && baseEl.getAttribute('href');
                }

                HTML5History.prototype.start = function start() {
                    var _this = this;

                    this.listener = function (e) {
                        var url = decodeURI(location.pathname + location.search);
                        if (_this.root) {
                            url = url.replace(_this.rootRE, '');
                        }
                        _this.onChange(url, e && e.state, location.hash);
                    };
                    window.addEventListener('popstate', this.listener);
                    this.listener();
                };

                HTML5History.prototype.stop = function stop() {
                    window.removeEventListener('popstate', this.listener);
                };

                HTML5History.prototype.go = function go(path, replace, append) {
                    var url = this.formatPath(path, append);
                    if (replace) {
                        history.replaceState({}, '', url);
                    } else {
                        // record scroll position by replacing current state
                        history.replaceState({
                            pos: {
                                x: window.pageXOffset,
                                y: window.pageYOffset
                            }
                        }, '', location.href);
                        // then push new state
                        history.pushState({}, '', url);
                    }
                    var hashMatch = path.match(hashRE);
                    var hash = hashMatch && hashMatch[0];
                    path = url
                    // strip hash so it doesn't mess up params
                        .replace(hashRE, '')
                        // remove root before matching
                        .replace(this.rootRE, '');
                    this.onChange(path, null, hash);
                };

                HTML5History.prototype.formatPath = function formatPath(path, append) {
                    return path.charAt(0) === '/'
                        // absolute path
                        ? this.root ? this.root + '/' + path.replace(/^\//, '') : path : resolvePath(this.base || location.pathname, path, append);
                };

                return HTML5History;
            })();

            var HashHistory = (function () {
                function HashHistory(_ref) {
                    var hashbang = _ref.hashbang;
                    var onChange = _ref.onChange;
                    babelHelpers.classCallCheck(this, HashHistory);

                    this.hashbang = hashbang;
                    this.onChange = onChange;
                }

                HashHistory.prototype.start = function start() {
                    var self = this;
                    this.listener = function () {
                        var path = location.hash;
                        var raw = path.replace(/^#!?/, '');
                        // always
                        if (raw.charAt(0) !== '/') {
                            raw = '/' + raw;
                        }
                        var formattedPath = self.formatPath(raw);
                        if (formattedPath !== path) {
                            location.replace(formattedPath);
                            return;
                        }
                        // determine query
                        // note it's possible to have queries in both the actual URL
                        // and the hash fragment itself.
                        var query = location.search && path.indexOf('?') > -1 ? '&' + location.search.slice(1) : location.search;
                        self.onChange(decodeURI(path.replace(/^#!?/, '') + query));
                    };
                    window.addEventListener('hashchange', this.listener);
                    this.listener();
                };

                HashHistory.prototype.stop = function stop() {
                    window.removeEventListener('hashchange', this.listener);
                };

                HashHistory.prototype.go = function go(path, replace, append) {
                    path = this.formatPath(path, append);
                    if (replace) {
                        location.replace(path);
                    } else {
                        location.hash = path;
                    }
                };

                HashHistory.prototype.formatPath = function formatPath(path, append) {
                    var isAbsoloute = path.charAt(0) === '/';
                    var prefix = '#' + (this.hashbang ? '!' : '');
                    return isAbsoloute ? prefix + path : prefix + resolvePath(location.hash.replace(/^#!?/, ''), path, append);
                };

                return HashHistory;
            })();

            var AbstractHistory = (function () {
                function AbstractHistory(_ref) {
                    var onChange = _ref.onChange;
                    babelHelpers.classCallCheck(this, AbstractHistory);

                    this.onChange = onChange;
                    this.currentPath = '/';
                }

                AbstractHistory.prototype.start = function start() {
                    this.onChange('/');
                };

                AbstractHistory.prototype.stop = function stop() {
                    // noop
                };

                AbstractHistory.prototype.go = function go(path, replace, append) {
                    path = this.currentPath = this.formatPath(path, append);
                    this.onChange(path);
                };

                AbstractHistory.prototype.formatPath = function formatPath(path, append) {
                    return path.charAt(0) === '/' ? path : resolvePath(this.currentPath, path, append);
                };

                return AbstractHistory;
            })();

            /**
             * Determine the reusability of an existing router view.
             *
             * @param {Directive} view
             * @param {Object} handler
             * @param {Transition} transition
             */

            function canReuse(view, handler, transition) {
                var component = view.childVM;
                if (!component || !handler) {
                    return false;
                }
                // important: check view.Component here because it may
                // have been changed in activate hook
                if (view.Component !== handler.component) {
                    return false;
                }
                var canReuseFn = getRouteConfig(component, 'canReuse');
                return typeof canReuseFn === 'boolean' ? canReuseFn : canReuseFn ? canReuseFn.call(component, {
                    to: transition.to,
                    from: transition.from
                }) : true; // defaults to true
            }

            /**
             * Check if a component can deactivate.
             *
             * @param {Directive} view
             * @param {Transition} transition
             * @param {Function} next
             */

            function canDeactivate(view, transition, next) {
                var fromComponent = view.childVM;
                var hook = getRouteConfig(fromComponent, 'canDeactivate');
                if (!hook) {
                    next();
                } else {
                    transition.callHook(hook, fromComponent, next, {
                        expectBoolean: true
                    });
                }
            }

            /**
             * Check if a component can activate.
             *
             * @param {Object} handler
             * @param {Transition} transition
             * @param {Function} next
             */

            function canActivate(handler, transition, next) {
                resolveAsyncComponent(handler, function (Component) {
                    // have to check due to async-ness
                    if (transition.aborted) {
                        return;
                    }
                    // determine if this component can be activated
                    var hook = getRouteConfig(Component, 'canActivate');
                    if (!hook) {
                        next();
                    } else {
                        transition.callHook(hook, null, next, {
                            expectBoolean: true
                        });
                    }
                });
            }

            /**
             * Call deactivate hooks for existing router-views.
             *
             * @param {Directive} view
             * @param {Transition} transition
             * @param {Function} next
             */

            function deactivate(view, transition, next) {
                var component = view.childVM;
                var hook = getRouteConfig(component, 'deactivate');
                if (!hook) {
                    next();
                } else {
                    transition.callHooks(hook, component, next);
                }
            }

            /**
             * Activate / switch component for a router-view.
             *
             * @param {Directive} view
             * @param {Transition} transition
             * @param {Number} depth
             * @param {Function} [cb]
             */

            function activate(view, transition, depth, cb, reuse) {
                var handler = transition.activateQueue[depth];
                if (!handler) {
                    saveChildView(view);
                    if (view._bound) {
                        view.setComponent(null);
                    }
                    cb && cb();
                    return;
                }

                var Component = view.Component = handler.component;
                var activateHook = getRouteConfig(Component, 'activate');
                var dataHook = getRouteConfig(Component, 'data');
                var waitForData = getRouteConfig(Component, 'waitForData');

                view.depth = depth;
                view.activated = false;

                var component = undefined;
                var loading = !!(dataHook && !waitForData);

                // "reuse" is a flag passed down when the parent view is
                // either reused via keep-alive or as a child of a kept-alive view.
                // of course we can only reuse if the current kept-alive instance
                // is of the correct type.
                reuse = reuse && view.childVM && view.childVM.constructor === Component;

                if (reuse) {
                    // just reuse
                    component = view.childVM;
                    component.$loadingRouteData = loading;
                } else {
                    saveChildView(view);

                    // unbuild current component. this step also destroys
                    // and removes all nested child views.
                    view.unbuild(true);

                    // build the new component. this will also create the
                    // direct child view of the current one. it will register
                    // itself as view.childView.
                    component = view.build({
                        _meta: {
                            $loadingRouteData: loading
                        },
                        created: function created() {
                            this._routerView = view;
                        }
                    });

                    // handle keep-alive.
                    // when a kept-alive child vm is restored, we need to
                    // add its cached child views into the router's view list,
                    // and also properly update current view's child view.
                    if (view.keepAlive) {
                        component.$loadingRouteData = loading;
                        var cachedChildView = component._keepAliveRouterView;
                        if (cachedChildView) {
                            view.childView = cachedChildView;
                            component._keepAliveRouterView = null;
                        }
                    }
                }

                // cleanup the component in case the transition is aborted
                // before the component is ever inserted.
                var cleanup = function cleanup() {
                    component.$destroy();
                };

                // actually insert the component and trigger transition
                var insert = function insert() {
                    if (reuse) {
                        cb && cb();
                        return;
                    }
                    var router = transition.router;
                    if (router._rendered || router._transitionOnLoad) {
                        view.transition(component);
                    } else {
                        // no transition on first render, manual transition
                        /* istanbul ignore if */
                        if (view.setCurrent) {
                            // 0.12 compat
                            view.setCurrent(component);
                        } else {
                            // 1.0
                            view.childVM = component;
                        }
                        component.$before(view.anchor, null, false);
                    }
                    cb && cb();
                };

                var afterData = function afterData() {
                    // activate the child view
                    if (view.childView) {
                        activate(view.childView, transition, depth + 1, null, reuse || view.keepAlive);
                    }
                    insert();
                };

                // called after activation hook is resolved
                var afterActivate = function afterActivate() {
                    view.activated = true;
                    if (dataHook && waitForData) {
                        // wait until data loaded to insert
                        loadData(component, transition, dataHook, afterData, cleanup);
                    } else {
                        // load data and insert at the same time
                        if (dataHook) {
                            loadData(component, transition, dataHook);
                        }
                        afterData();
                    }
                };

                if (activateHook) {
                    transition.callHooks(activateHook, component, afterActivate, {
                        cleanup: cleanup,
                        postActivate: true
                    });
                } else {
                    afterActivate();
                }
            }

            /**
             * Reuse a view, just reload data if necessary.
             *
             * @param {Directive} view
             * @param {Transition} transition
             */

            function reuse(view, transition) {
                var component = view.childVM;
                var dataHook = getRouteConfig(component, 'data');
                if (dataHook) {
                    loadData(component, transition, dataHook);
                }
            }

            /**
             * Asynchronously load and apply data to component.
             *
             * @param {Vue} component
             * @param {Transition} transition
             * @param {Function} hook
             * @param {Function} cb
             * @param {Function} cleanup
             */

            function loadData(component, transition, hook, cb, cleanup) {
                component.$loadingRouteData = true;
                transition.callHooks(hook, component, function () {
                    component.$loadingRouteData = false;
                    component.$emit('route-data-loaded', component);
                    cb && cb();
                }, {
                    cleanup: cleanup,
                    postActivate: true,
                    processData: function processData(data) {
                        // handle promise sugar syntax
                        var promises = [];
                        if (isPlainObject(data)) {
                            Object.keys(data).forEach(function (key) {
                                var val = data[key];
                                if (isPromise(val)) {
                                    promises.push(val.then(function (resolvedVal) {
                                        component.$set(key, resolvedVal);
                                    }));
                                } else {
                                    component.$set(key, val);
                                }
                            });
                        }
                        if (promises.length) {
                            return promises[0].constructor.all(promises);
                        }
                    }
                });
            }

            /**
             * Save the child view for a kept-alive view so that
             * we can restore it when it is switched back to.
             *
             * @param {Directive} view
             */

            function saveChildView(view) {
                if (view.keepAlive && view.childVM && view.childView) {
                    view.childVM._keepAliveRouterView = view.childView;
                }
                view.childView = null;
            }

            /**
             * Check plain object.
             *
             * @param {*} val
             */

            function isPlainObject(val) {
                return Object.prototype.toString.call(val) === '[object Object]';
            }

            /**
             * A RouteTransition object manages the pipeline of a
             * router-view switching process. This is also the object
             * passed into user route hooks.
             *
             * @param {Router} router
             * @param {Route} to
             * @param {Route} from
             */

            var RouteTransition = (function () {
                function RouteTransition(router, to, from) {
                    babelHelpers.classCallCheck(this, RouteTransition);

                    this.router = router;
                    this.to = to;
                    this.from = from;
                    this.next = null;
                    this.aborted = false;
                    this.done = false;
                }

                /**
                 * Abort current transition and return to previous location.
                 */

                RouteTransition.prototype.abort = function abort() {
                    if (!this.aborted) {
                        this.aborted = true;
                        // if the root path throws an error during validation
                        // on initial load, it gets caught in an infinite loop.
                        var abortingOnLoad = !this.from.path && this.to.path === '/';
                        if (!abortingOnLoad) {
                            this.router.replace(this.from.path || '/');
                        }
                    }
                };

                /**
                 * Abort current transition and redirect to a new location.
                 *
                 * @param {String} path
                 */

                RouteTransition.prototype.redirect = function redirect(path) {
                    if (!this.aborted) {
                        this.aborted = true;
                        if (typeof path === 'string') {
                            path = mapParams(path, this.to.params, this.to.query);
                        } else {
                            path.params = path.params || this.to.params;
                            path.query = path.query || this.to.query;
                        }
                        this.router.replace(path);
                    }
                };

                /**
                 * A router view transition's pipeline can be described as
                 * follows, assuming we are transitioning from an existing
                 * <router-view> chain [Component A, Component B] to a new
                 * chain [Component A, Component C]:
                 *
                 *  A    A
                 *  | => |
                 *  B    C
                 *
                 * 1. Reusablity phase:
                 *   -> canReuse(A, A)
                 *   -> canReuse(B, C)
                 *   -> determine new queues:
                 *      - deactivation: [B]
                 *      - activation: [C]
                 *
                 * 2. Validation phase:
                 *   -> canDeactivate(B)
                 *   -> canActivate(C)
                 *
                 * 3. Activation phase:
                 *   -> deactivate(B)
                 *   -> activate(C)
                 *
                 * Each of these steps can be asynchronous, and any
                 * step can potentially abort the transition.
                 *
                 * @param {Function} cb
                 */

                RouteTransition.prototype.start = function start(cb) {
                    var transition = this;

                    // determine the queue of views to deactivate
                    var deactivateQueue = [];
                    var view = this.router._rootView;
                    while (view) {
                        deactivateQueue.unshift(view);
                        view = view.childView;
                    }
                    var reverseDeactivateQueue = deactivateQueue.slice().reverse();

                    // determine the queue of route handlers to activate
                    var activateQueue = this.activateQueue = toArray(this.to.matched).map(function (match) {
                        return match.handler;
                    });

                    // 1. Reusability phase
                    var i = undefined,
                        reuseQueue = undefined;
                    for (i = 0; i < reverseDeactivateQueue.length; i++) {
                        if (!canReuse(reverseDeactivateQueue[i], activateQueue[i], transition)) {
                            break;
                        }
                    }
                    if (i > 0) {
                        reuseQueue = reverseDeactivateQueue.slice(0, i);
                        deactivateQueue = reverseDeactivateQueue.slice(i).reverse();
                        activateQueue = activateQueue.slice(i);
                    }

                    // 2. Validation phase
                    transition.runQueue(deactivateQueue, canDeactivate, function () {
                        transition.runQueue(activateQueue, canActivate, function () {
                            transition.runQueue(deactivateQueue, deactivate, function () {
                                // 3. Activation phase

                                // Update router current route
                                transition.router._onTransitionValidated(transition);

                                // trigger reuse for all reused views
                                reuseQueue && reuseQueue.forEach(function (view) {
                                    return reuse(view, transition);
                                });

                                // the root of the chain that needs to be replaced
                                // is the top-most non-reusable view.
                                if (deactivateQueue.length) {
                                    var _view = deactivateQueue[deactivateQueue.length - 1];
                                    var depth = reuseQueue ? reuseQueue.length : 0;
                                    activate(_view, transition, depth, cb);
                                } else {
                                    cb();
                                }
                            });
                        });
                    });
                };

                /**
                 * Asynchronously and sequentially apply a function to a
                 * queue.
                 *
                 * @param {Array} queue
                 * @param {Function} fn
                 * @param {Function} cb
                 */

                RouteTransition.prototype.runQueue = function runQueue(queue, fn, cb) {
                    var transition = this;
                    step(0);
                    function step(index) {
                        if (index >= queue.length) {
                            cb();
                        } else {
                            fn(queue[index], transition, function () {
                                step(index + 1);
                            });
                        }
                    }
                };

                /**
                 * Call a user provided route transition hook and handle
                 * the response (e.g. if the user returns a promise).
                 *
                 * If the user neither expects an argument nor returns a
                 * promise, the hook is assumed to be synchronous.
                 *
                 * @param {Function} hook
                 * @param {*} [context]
                 * @param {Function} [cb]
                 * @param {Object} [options]
                 *                 - {Boolean} expectBoolean
                 *                 - {Boolean} postActive
                 *                 - {Function} processData
                 *                 - {Function} cleanup
                 */

                RouteTransition.prototype.callHook = function callHook(hook, context, cb) {
                    var _ref = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

                    var _ref$expectBoolean = _ref.expectBoolean;
                    var expectBoolean = _ref$expectBoolean === undefined ? false : _ref$expectBoolean;
                    var _ref$postActivate = _ref.postActivate;
                    var postActivate = _ref$postActivate === undefined ? false : _ref$postActivate;
                    var processData = _ref.processData;
                    var cleanup = _ref.cleanup;

                    var transition = this;
                    var nextCalled = false;

                    // abort the transition
                    var abort = function abort() {
                        cleanup && cleanup();
                        transition.abort();
                    };

                    // handle errors
                    var onError = function onError(err) {
                        postActivate ? next() : abort();
                        if (err && !transition.router._suppress) {
                            warn('Uncaught error during transition: ');
                            throw err instanceof Error ? err : new Error(err);
                        }
                    };

                    // since promise swallows errors, we have to
                    // throw it in the next tick...
                    var onPromiseError = function onPromiseError(err) {
                        try {
                            onError(err);
                        } catch (e) {
                            setTimeout(function () {
                                throw e;
                            }, 0);
                        }
                    };

                    // advance the transition to the next step
                    var next = function next() {
                        if (nextCalled) {
                            warn('transition.next() should be called only once.');
                            return;
                        }
                        nextCalled = true;
                        if (transition.aborted) {
                            cleanup && cleanup();
                            return;
                        }
                        cb && cb();
                    };

                    var nextWithBoolean = function nextWithBoolean(res) {
                        if (typeof res === 'boolean') {
                            res ? next() : abort();
                        } else if (isPromise(res)) {
                            res.then(function (ok) {
                                ok ? next() : abort();
                            }, onPromiseError);
                        } else if (!hook.length) {
                            next();
                        }
                    };

                    var nextWithData = function nextWithData(data) {
                        var res = undefined;
                        try {
                            res = processData(data);
                        } catch (err) {
                            return onError(err);
                        }
                        if (isPromise(res)) {
                            res.then(next, onPromiseError);
                        } else {
                            next();
                        }
                    };

                    // expose a clone of the transition object, so that each
                    // hook gets a clean copy and prevent the user from
                    // messing with the internals.
                    var exposed = {
                        to: transition.to,
                        from: transition.from,
                        abort: abort,
                        next: processData ? nextWithData : next,
                        redirect: function redirect() {
                            transition.redirect.apply(transition, arguments);
                        }
                    };

                    // actually call the hook
                    var res = undefined;
                    try {
                        res = hook.call(context, exposed);
                    } catch (err) {
                        return onError(err);
                    }

                    if (expectBoolean) {
                        // boolean hooks
                        nextWithBoolean(res);
                    } else if (isPromise(res)) {
                        // promise
                        if (processData) {
                            res.then(nextWithData, onPromiseError);
                        } else {
                            res.then(next, onPromiseError);
                        }
                    } else if (processData && isPlainOjbect(res)) {
                        // data promise sugar
                        nextWithData(res);
                    } else if (!hook.length) {
                        next();
                    }
                };

                /**
                 * Call a single hook or an array of async hooks in series.
                 *
                 * @param {Array} hooks
                 * @param {*} context
                 * @param {Function} cb
                 * @param {Object} [options]
                 */

                RouteTransition.prototype.callHooks = function callHooks(hooks, context, cb, options) {
                    var _this = this;

                    if (Array.isArray(hooks)) {
                        this.runQueue(hooks, function (hook, _, next) {
                            if (!_this.aborted) {
                                _this.callHook(hook, context, next, options);
                            }
                        }, cb);
                    } else {
                        this.callHook(hooks, context, cb, options);
                    }
                };

                return RouteTransition;
            })();

            function isPlainOjbect(val) {
                return Object.prototype.toString.call(val) === '[object Object]';
            }

            function toArray(val) {
                return val ? Array.prototype.slice.call(val) : [];
            }

            var internalKeysRE = /^(component|subRoutes)$/;

            /**
             * Route Context Object
             *
             * @param {String} path
             * @param {Router} router
             */

            var Route = function Route(path, router) {
                var _this = this;

                babelHelpers.classCallCheck(this, Route);

                var matched = router._recognizer.recognize(path);
                if (matched) {
                    // copy all custom fields from route configs
                    [].forEach.call(matched, function (match) {
                        for (var key in match.handler) {
                            if (!internalKeysRE.test(key)) {
                                _this[key] = match.handler[key];
                            }
                        }
                    });
                    // set query and params
                    this.query = matched.queryParams;
                    this.params = [].reduce.call(matched, function (prev, cur) {
                        if (cur.params) {
                            for (var key in cur.params) {
                                prev[key] = cur.params[key];
                            }
                        }
                        return prev;
                    }, {});
                }
                // expose path and router
                this.path = path;
                this.router = router;
                // for internal use
                this.matched = matched || router._notFoundHandler;
                // Important: freeze self to prevent observation
                Object.freeze(this);
            };

            function applyOverride(Vue) {
                var _Vue$util = Vue.util;
                var extend = _Vue$util.extend;
                var isArray = _Vue$util.isArray;
                var defineReactive = _Vue$util.defineReactive;

                // override Vue's init and destroy process to keep track of router instances
                var init = Vue.prototype._init;
                Vue.prototype._init = function (options) {
                    options = options || {};
                    var root = options._parent || options.parent || this;
                    var router = root.$router;
                    var route = root.$route;
                    if (router) {
                        // expose router
                        this.$router = router;
                        router._children.push(this);
                        /* istanbul ignore if */
                        if (this._defineMeta) {
                            // 0.12
                            this._defineMeta('$route', route);
                        } else {
                            // 1.0
                            defineReactive(this, '$route', route);
                        }
                    }
                    init.call(this, options);
                };

                var destroy = Vue.prototype._destroy;
                Vue.prototype._destroy = function () {
                    if (!this._isBeingDestroyed && this.$router) {
                        this.$router._children.$remove(this);
                    }
                    destroy.apply(this, arguments);
                };

                // 1.0 only: enable route mixins
                var strats = Vue.config.optionMergeStrategies;
                var hooksToMergeRE = /^(data|activate|deactivate)$/;

                if (strats) {
                    strats.route = function (parentVal, childVal) {
                        if (!childVal) return parentVal;
                        if (!parentVal) return childVal;
                        var ret = {};
                        extend(ret, parentVal);
                        for (var key in childVal) {
                            var a = ret[key];
                            var b = childVal[key];
                            // for data, activate and deactivate, we need to merge them into
                            // arrays similar to lifecycle hooks.
                            if (a && hooksToMergeRE.test(key)) {
                                ret[key] = (isArray(a) ? a : [a]).concat(b);
                            } else {
                                ret[key] = b;
                            }
                        }
                        return ret;
                    };
                }
            }

            function View(Vue) {

                var _ = Vue.util;
                var componentDef =
                    // 0.12
                    Vue.directive('_component') ||
                        // 1.0
                    Vue.internalDirectives.component;
                // <router-view> extends the internal component directive
                var viewDef = _.extend({}, componentDef);

                // with some overrides
                _.extend(viewDef, {

                    _isRouterView: true,

                    bind: function bind() {
                        var route = this.vm.$route;
                        /* istanbul ignore if */
                        if (!route) {
                            warn('<router-view> can only be used inside a ' + 'router-enabled app.');
                            return;
                        }
                        // force dynamic directive so v-component doesn't
                        // attempt to build right now
                        this._isDynamicLiteral = true;
                        // finally, init by delegating to v-component
                        componentDef.bind.call(this);

                        // locate the parent view
                        var parentView = undefined;
                        var parent = this.vm;
                        while (parent) {
                            if (parent._routerView) {
                                parentView = parent._routerView;
                                break;
                            }
                            parent = parent.$parent;
                        }
                        if (parentView) {
                            // register self as a child of the parent view,
                            // instead of activating now. This is so that the
                            // child's activate hook is called after the
                            // parent's has resolved.
                            this.parentView = parentView;
                            parentView.childView = this;
                        } else {
                            // this is the root view!
                            var router = route.router;
                            router._rootView = this;
                        }

                        // handle late-rendered view
                        // two possibilities:
                        // 1. root view rendered after transition has been
                        //    validated;
                        // 2. child view rendered after parent view has been
                        //    activated.
                        var transition = route.router._currentTransition;
                        if (!parentView && transition.done || parentView && parentView.activated) {
                            var depth = parentView ? parentView.depth + 1 : 0;
                            activate(this, transition, depth);
                        }
                    },

                    unbind: function unbind() {
                        if (this.parentView) {
                            this.parentView.childView = null;
                        }
                        componentDef.unbind.call(this);
                    }
                });

                Vue.elementDirective('router-view', viewDef);
            }

            var trailingSlashRE = /\/$/;
            var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
            var queryStringRE = /\?.*$/;

            // install v-link, which provides navigation support for
            // HTML5 history mode
            function Link(Vue) {
                var _Vue$util = Vue.util;
                var _bind = _Vue$util.bind;
                var isObject = _Vue$util.isObject;
                var addClass = _Vue$util.addClass;
                var removeClass = _Vue$util.removeClass;

                Vue.directive('link-active', {
                    priority: 1001,
                    bind: function bind() {
                        this.el.__v_link_active = true;
                    }
                });

                Vue.directive('link', {
                    priority: 1000,

                    bind: function bind() {
                        var vm = this.vm;
                        /* istanbul ignore if */
                        if (!vm.$route) {
                            warn('v-link can only be used inside a router-enabled app.');
                            return;
                        }
                        this.router = vm.$route.router;
                        // update things when the route changes
                        this.unwatch = vm.$watch('$route', _bind(this.onRouteUpdate, this));
                        // check if active classes should be applied to a different element
                        this.activeEl = this.el;
                        var parent = this.el.parentNode;
                        while (parent) {
                            if (parent.__v_link_active) {
                                this.activeEl = parent;
                                break;
                            }
                            parent = parent.parentNode;
                        }
                        // no need to handle click if link expects to be opened
                        // in a new window/tab.
                        /* istanbul ignore if */
                        if (this.el.tagName === 'A' && this.el.getAttribute('target') === '_blank') {
                            return;
                        }
                        // handle click
                        this.handler = _bind(this.onClick, this);
                        this.el.addEventListener('click', this.handler);
                    },

                    update: function update(target) {
                        this.target = target;
                        if (isObject(target)) {
                            this.append = target.append;
                            this.exact = target.exact;
                            this.prevActiveClass = this.activeClass;
                            this.activeClass = target.activeClass;
                        }
                        this.onRouteUpdate(this.vm.$route);
                    },

                    onClick: function onClick(e) {
                        // don't redirect with control keys
                        /* istanbul ignore if */
                        if (e.metaKey || e.ctrlKey || e.shiftKey) return;
                        // don't redirect when preventDefault called
                        /* istanbul ignore if */
                        if (e.defaultPrevented) return;
                        // don't redirect on right click
                        /* istanbul ignore if */
                        if (e.button !== 0) return;

                        var target = this.target;
                        if (target) {
                            // v-link with expression, just go
                            e.preventDefault();
                            this.router.go(target);
                        } else {
                            // no expression, delegate for an <a> inside
                            var el = e.target;
                            while (el.tagName !== 'A' && el !== this.el) {
                                el = el.parentNode;
                            }
                            if (el.tagName === 'A' && sameOrigin(el)) {
                                e.preventDefault();
                                this.router.go({
                                    path: el.pathname,
                                    replace: target && target.replace,
                                    append: target && target.append
                                });
                            }
                        }
                    },

                    onRouteUpdate: function onRouteUpdate(route) {
                        // router._stringifyPath is dependent on current route
                        // and needs to be called again whenver route changes.
                        var newPath = this.router._stringifyPath(this.target);
                        if (this.path !== newPath) {
                            this.path = newPath;
                            this.updateActiveMatch();
                            this.updateHref();
                        }
                        this.updateClasses(route.path);
                    },

                    updateActiveMatch: function updateActiveMatch() {
                        this.activeRE = this.path && !this.exact ? new RegExp('^' + this.path.replace(/\/$/, '').replace(queryStringRE, '').replace(regexEscapeRE, '\\$&') + '(\\/|$)') : null;
                    },

                    updateHref: function updateHref() {
                        if (this.el.tagName !== 'A') {
                            return;
                        }
                        var path = this.path;
                        var router = this.router;
                        var isAbsolute = path.charAt(0) === '/';
                        // do not format non-hash relative paths
                        var href = path && (router.mode === 'hash' || isAbsolute) ? router.history.formatPath(path, this.append) : path;
                        if (href) {
                            this.el.href = href;
                        } else {
                            this.el.removeAttribute('href');
                        }
                    },

                    updateClasses: function updateClasses(path) {
                        var el = this.activeEl;
                        var activeClass = this.activeClass || this.router._linkActiveClass;
                        // clear old class
                        if (this.prevActiveClass !== activeClass) {
                            removeClass(el, this.prevActiveClass);
                        }
                        // remove query string before matching
                        var dest = this.path.replace(queryStringRE, '');
                        path = path.replace(queryStringRE, '');
                        // add new class
                        if (this.exact) {
                            if (dest === path ||
                                    // also allow additional trailing slash
                                dest.charAt(dest.length - 1) !== '/' && dest === path.replace(trailingSlashRE, '')) {
                                addClass(el, activeClass);
                            } else {
                                removeClass(el, activeClass);
                            }
                        } else {
                            if (this.activeRE && this.activeRE.test(path)) {
                                addClass(el, activeClass);
                            } else {
                                removeClass(el, activeClass);
                            }
                        }
                    },

                    unbind: function unbind() {
                        this.el.removeEventListener('click', this.handler);
                        this.unwatch && this.unwatch();
                    }
                });

                function sameOrigin(link) {
                    return link.protocol === location.protocol && link.hostname === location.hostname && link.port === location.port;
                }
            }

            var historyBackends = {
                abstract: AbstractHistory,
                hash: HashHistory,
                html5: HTML5History
            };

            // late bind during install
            var Vue = undefined;

            /**
             * Router constructor
             *
             * @param {Object} [options]
             */

            var Router = (function () {
                function Router() {
                    var _this = this;

                    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

                    var _ref$hashbang = _ref.hashbang;
                    var hashbang = _ref$hashbang === undefined ? true : _ref$hashbang;
                    var _ref$abstract = _ref.abstract;
                    var abstract = _ref$abstract === undefined ? false : _ref$abstract;
                    var _ref$history = _ref.history;
                    var history = _ref$history === undefined ? false : _ref$history;
                    var _ref$saveScrollPosition = _ref.saveScrollPosition;
                    var saveScrollPosition = _ref$saveScrollPosition === undefined ? false : _ref$saveScrollPosition;
                    var _ref$transitionOnLoad = _ref.transitionOnLoad;
                    var transitionOnLoad = _ref$transitionOnLoad === undefined ? false : _ref$transitionOnLoad;
                    var _ref$suppressTransitionError = _ref.suppressTransitionError;
                    var suppressTransitionError = _ref$suppressTransitionError === undefined ? false : _ref$suppressTransitionError;
                    var _ref$root = _ref.root;
                    var root = _ref$root === undefined ? null : _ref$root;
                    var _ref$linkActiveClass = _ref.linkActiveClass;
                    var linkActiveClass = _ref$linkActiveClass === undefined ? 'v-link-active' : _ref$linkActiveClass;
                    babelHelpers.classCallCheck(this, Router);

                    /* istanbul ignore if */
                    if (!Router.installed) {
                        throw new Error('Please install the Router with Vue.use() before ' + 'creating an instance.');
                    }

                    // Vue instances
                    this.app = null;
                    this._children = [];

                    // route recognizer
                    this._recognizer = new RouteRecognizer();
                    this._guardRecognizer = new RouteRecognizer();

                    // state
                    this._started = false;
                    this._startCb = null;
                    this._currentRoute = {};
                    this._currentTransition = null;
                    this._previousTransition = null;
                    this._notFoundHandler = null;
                    this._notFoundRedirect = null;
                    this._beforeEachHooks = [];
                    this._afterEachHooks = [];

                    // trigger transition on initial render?
                    this._rendered = false;
                    this._transitionOnLoad = transitionOnLoad;

                    // history mode
                    this._root = root;
                    this._abstract = abstract;
                    this._hashbang = hashbang;

                    // check if HTML5 history is available
                    var hasPushState = typeof window !== 'undefined' && window.history && window.history.pushState;
                    this._history = history && hasPushState;
                    this._historyFallback = history && !hasPushState;

                    // create history object
                    var inBrowser = Vue.util.inBrowser;
                    this.mode = !inBrowser || this._abstract ? 'abstract' : this._history ? 'html5' : 'hash';

                    var History = historyBackends[this.mode];
                    this.history = new History({
                        root: root,
                        hashbang: this._hashbang,
                        onChange: function onChange(path, state, anchor) {
                            _this._match(path, state, anchor);
                        }
                    });

                    // other options
                    this._saveScrollPosition = saveScrollPosition;
                    this._linkActiveClass = linkActiveClass;
                    this._suppress = suppressTransitionError;
                }

                /**
                 * Allow directly passing components to a route
                 * definition.
                 *
                 * @param {String} path
                 * @param {Object} handler
                 */

                // API ===================================================

                /**
                 * Register a map of top-level paths.
                 *
                 * @param {Object} map
                 */

                Router.prototype.map = function map(_map) {
                    for (var route in _map) {
                        this.on(route, _map[route]);
                    }
                    return this;
                };

                /**
                 * Register a single root-level path
                 *
                 * @param {String} rootPath
                 * @param {Object} handler
                 *                 - {String} component
                 *                 - {Object} [subRoutes]
                 *                 - {Boolean} [forceRefresh]
                 *                 - {Function} [before]
                 *                 - {Function} [after]
                 */

                Router.prototype.on = function on(rootPath, handler) {
                    if (rootPath === '*') {
                        this._notFound(handler);
                    } else {
                        this._addRoute(rootPath, handler, []);
                    }
                    return this;
                };

                /**
                 * Set redirects.
                 *
                 * @param {Object} map
                 */

                Router.prototype.redirect = function redirect(map) {
                    for (var path in map) {
                        this._addRedirect(path, map[path]);
                    }
                    return this;
                };

                /**
                 * Set aliases.
                 *
                 * @param {Object} map
                 */

                Router.prototype.alias = function alias(map) {
                    for (var path in map) {
                        this._addAlias(path, map[path]);
                    }
                    return this;
                };

                /**
                 * Set global before hook.
                 *
                 * @param {Function} fn
                 */

                Router.prototype.beforeEach = function beforeEach(fn) {
                    this._beforeEachHooks.push(fn);
                    return this;
                };

                /**
                 * Set global after hook.
                 *
                 * @param {Function} fn
                 */

                Router.prototype.afterEach = function afterEach(fn) {
                    this._afterEachHooks.push(fn);
                    return this;
                };

                /**
                 * Navigate to a given path.
                 * The path can be an object describing a named path in
                 * the format of { name: '...', params: {}, query: {}}
                 * The path is assumed to be already decoded, and will
                 * be resolved against root (if provided)
                 *
                 * @param {String|Object} path
                 * @param {Boolean} [replace]
                 */

                Router.prototype.go = function go(path) {
                    var replace = false;
                    var append = false;
                    if (Vue.util.isObject(path)) {
                        replace = path.replace;
                        append = path.append;
                    }
                    path = this._stringifyPath(path);
                    if (path) {
                        this.history.go(path, replace, append);
                    }
                };

                /**
                 * Short hand for replacing current path
                 *
                 * @param {String} path
                 */

                Router.prototype.replace = function replace(path) {
                    if (typeof path === 'string') {
                        path = {path: path};
                    }
                    path.replace = true;
                    this.go(path);
                };

                /**
                 * Start the router.
                 *
                 * @param {VueConstructor} App
                 * @param {String|Element} container
                 * @param {Function} [cb]
                 */

                Router.prototype.start = function start(App, container, cb) {
                    /* istanbul ignore if */
                    if (this._started) {
                        warn('already started.');
                        return;
                    }
                    this._started = true;
                    this._startCb = cb;
                    if (!this.app) {
                        /* istanbul ignore if */
                        if (!App || !container) {
                            throw new Error('Must start vue-router with a component and a ' + 'root container.');
                        }
                        /* istanbul ignore if */
                        if (App instanceof Vue) {
                            throw new Error('Must start vue-router with a component, not a ' + 'Vue instance.');
                        }
                        this._appContainer = container;
                        var Ctor = this._appConstructor = typeof App === 'function' ? App : Vue.extend(App);
                        // give it a name for better debugging
                        Ctor.options.name = Ctor.options.name || 'RouterApp';
                    }

                    // handle history fallback in browsers that do not
                    // support HTML5 history API
                    if (this._historyFallback) {
                        var _location = window.location;
                        var _history = new HTML5History({root: this._root});
                        var path = _history.root ? _location.pathname.replace(_history.rootRE, '') : _location.pathname;
                        if (path && path !== '/') {
                            _location.assign((_history.root || '') + '/' + this.history.formatPath(path) + _location.search);
                            return;
                        }
                    }

                    this.history.start();
                };

                /**
                 * Stop listening to route changes.
                 */

                Router.prototype.stop = function stop() {
                    this.history.stop();
                    this._started = false;
                };

                // Internal methods ======================================

                /**
                 * Add a route containing a list of segments to the internal
                 * route recognizer. Will be called recursively to add all
                 * possible sub-routes.
                 *
                 * @param {String} path
                 * @param {Object} handler
                 * @param {Array} segments
                 */

                Router.prototype._addRoute = function _addRoute(path, handler, segments) {
                    guardComponent(path, handler);
                    handler.path = path;
                    handler.fullPath = (segments.reduce(function (path, segment) {
                        return path + segment.path;
                    }, '') + path).replace('//', '/');
                    segments.push({
                        path: path,
                        handler: handler
                    });
                    this._recognizer.add(segments, {
                        as: handler.name
                    });
                    // add sub routes
                    if (handler.subRoutes) {
                        for (var subPath in handler.subRoutes) {
                            // recursively walk all sub routes
                            this._addRoute(subPath, handler.subRoutes[subPath],
                                // pass a copy in recursion to avoid mutating
                                // across branches
                                segments.slice());
                        }
                    }
                };

                /**
                 * Set the notFound route handler.
                 *
                 * @param {Object} handler
                 */

                Router.prototype._notFound = function _notFound(handler) {
                    guardComponent('*', handler);
                    this._notFoundHandler = [{handler: handler}];
                };

                /**
                 * Add a redirect record.
                 *
                 * @param {String} path
                 * @param {String} redirectPath
                 */

                Router.prototype._addRedirect = function _addRedirect(path, redirectPath) {
                    if (path === '*') {
                        this._notFoundRedirect = redirectPath;
                    } else {
                        this._addGuard(path, redirectPath, this.replace);
                    }
                };

                /**
                 * Add an alias record.
                 *
                 * @param {String} path
                 * @param {String} aliasPath
                 */

                Router.prototype._addAlias = function _addAlias(path, aliasPath) {
                    this._addGuard(path, aliasPath, this._match);
                };

                /**
                 * Add a path guard.
                 *
                 * @param {String} path
                 * @param {String} mappedPath
                 * @param {Function} handler
                 */

                Router.prototype._addGuard = function _addGuard(path, mappedPath, _handler) {
                    var _this2 = this;

                    this._guardRecognizer.add([{
                        path: path,
                        handler: function handler(match, query) {
                            var realPath = mapParams(mappedPath, match.params, query);
                            _handler.call(_this2, realPath);
                        }
                    }]);
                };

                /**
                 * Check if a path matches any redirect records.
                 *
                 * @param {String} path
                 * @return {Boolean} - if true, will skip normal match.
                 */

                Router.prototype._checkGuard = function _checkGuard(path) {
                    var matched = this._guardRecognizer.recognize(path);
                    if (matched) {
                        matched[0].handler(matched[0], matched.queryParams);
                        return true;
                    } else if (this._notFoundRedirect) {
                        matched = this._recognizer.recognize(path);
                        if (!matched) {
                            this.replace(this._notFoundRedirect);
                            return true;
                        }
                    }
                };

                /**
                 * Match a URL path and set the route context on vm,
                 * triggering view updates.
                 *
                 * @param {String} path
                 * @param {Object} [state]
                 * @param {String} [anchor]
                 */

                Router.prototype._match = function _match(path, state, anchor) {
                    var _this3 = this;

                    if (this._checkGuard(path)) {
                        return;
                    }

                    var currentRoute = this._currentRoute;
                    var currentTransition = this._currentTransition;

                    if (currentTransition) {
                        if (currentTransition.to.path === path) {
                            // do nothing if we have an active transition going to the same path
                            return;
                        } else if (currentRoute.path === path) {
                            // We are going to the same path, but we also have an ongoing but
                            // not-yet-validated transition. Abort that transition and reset to
                            // prev transition.
                            currentTransition.aborted = true;
                            this._currentTransition = this._prevTransition;
                            return;
                        } else {
                            // going to a totally different path. abort ongoing transition.
                            currentTransition.aborted = true;
                        }
                    }

                    // construct new route and transition context
                    var route = new Route(path, this);
                    var transition = new RouteTransition(this, route, currentRoute);

                    // current transition is updated right now.
                    // however, current route will only be updated after the transition has
                    // been validated.
                    this._prevTransition = currentTransition;
                    this._currentTransition = transition;

                    if (!this.app) {
                        (function () {
                            // initial render
                            var router = _this3;
                            _this3.app = new _this3._appConstructor({
                                el: _this3._appContainer,
                                created: function created() {
                                    this.$router = router;
                                },
                                _meta: {
                                    $route: route
                                }
                            });
                        })();
                    }

                    // check global before hook
                    var beforeHooks = this._beforeEachHooks;
                    var startTransition = function startTransition() {
                        transition.start(function () {
                            _this3._postTransition(route, state, anchor);
                        });
                    };

                    if (beforeHooks.length) {
                        transition.runQueue(beforeHooks, function (hook, _, next) {
                            if (transition === _this3._currentTransition) {
                                transition.callHook(hook, null, next, {
                                    expectBoolean: true
                                });
                            }
                        }, startTransition);
                    } else {
                        startTransition();
                    }

                    if (!this._rendered && this._startCb) {
                        this._startCb.call(null);
                    }

                    // HACK:
                    // set rendered to true after the transition start, so
                    // that components that are acitvated synchronously know
                    // whether it is the initial render.
                    this._rendered = true;
                };

                /**
                 * Set current to the new transition.
                 * This is called by the transition object when the
                 * validation of a route has succeeded.
                 *
                 * @param {Transition} transition
                 */

                Router.prototype._onTransitionValidated = function _onTransitionValidated(transition) {
                    // set current route
                    var route = this._currentRoute = transition.to;
                    // update route context for all children
                    if (this.app.$route !== route) {
                        this.app.$route = route;
                        this._children.forEach(function (child) {
                            child.$route = route;
                        });
                    }
                    // call global after hook
                    if (this._afterEachHooks.length) {
                        this._afterEachHooks.forEach(function (hook) {
                            return hook.call(null, {
                                to: transition.to,
                                from: transition.from
                            });
                        });
                    }
                    this._currentTransition.done = true;
                };

                /**
                 * Handle stuff after the transition.
                 *
                 * @param {Route} route
                 * @param {Object} [state]
                 * @param {String} [anchor]
                 */

                Router.prototype._postTransition = function _postTransition(route, state, anchor) {
                    // handle scroll positions
                    // saved scroll positions take priority
                    // then we check if the path has an anchor
                    var pos = state && state.pos;
                    if (pos && this._saveScrollPosition) {
                        Vue.nextTick(function () {
                            window.scrollTo(pos.x, pos.y);
                        });
                    } else if (anchor) {
                        Vue.nextTick(function () {
                            var el = document.getElementById(anchor.slice(1));
                            if (el) {
                                window.scrollTo(window.scrollX, el.offsetTop);
                            }
                        });
                    }
                };

                /**
                 * Normalize named route object / string paths into
                 * a string.
                 *
                 * @param {Object|String|Number} path
                 * @return {String}
                 */

                Router.prototype._stringifyPath = function _stringifyPath(path) {
                    var fullPath = '';
                    if (path && typeof path === 'object') {
                        if (path.name) {
                            var extend = Vue.util.extend;
                            var currentParams = this._currentTransition && this._currentTransition.to.params;
                            var targetParams = path.params || {};
                            var params = currentParams ? extend(extend({}, currentParams), targetParams) : targetParams;
                            if (path.query) {
                                params.queryParams = path.query;
                            }
                            fullPath = this._recognizer.generate(path.name, params);
                        } else if (path.path) {
                            fullPath = path.path;
                            if (path.query) {
                                var query = this._recognizer.generateQueryString(path.query);
                                if (fullPath.indexOf('?') > -1) {
                                    fullPath += '&' + query.slice(1);
                                } else {
                                    fullPath += query;
                                }
                            }
                        }
                    } else {
                        fullPath = path ? path + '' : '';
                    }
                    return encodeURI(fullPath);
                };

                return Router;
            })();

            function guardComponent(path, handler) {
                var comp = handler.component;
                if (Vue.util.isPlainObject(comp)) {
                    comp = handler.component = Vue.extend(comp);
                }
                /* istanbul ignore if */
                if (typeof comp !== 'function') {
                    handler.component = null;
                    warn('invalid component for route "' + path + '".');
                }
            }

            /* Installation */

            Router.installed = false;

            /**
             * Installation interface.
             * Install the necessary directives.
             */

            Router.install = function (externalVue) {
                /* istanbul ignore if */
                if (Router.installed) {
                    warn('already installed.');
                    return;
                }
                Vue = externalVue;
                applyOverride(Vue);
                View(Vue);
                Link(Vue);
                exports$1.Vue = Vue;
                Router.installed = true;
            };

            // auto install
            /* istanbul ignore if */
            if (typeof window !== 'undefined' && window.Vue) {
                window.Vue.use(Router);
            }

            return Router;

        }));
    }, {}],
    30: [function (require, module, exports) {
        (function (process, global) {
            /*!
             * Vue.js v1.0.16
             * (c) 2016 Evan You
             * Released under the MIT License.
             */
            'use strict';

            function set(obj, key, val) {
                if (hasOwn(obj, key)) {
                    obj[key] = val;
                    return;
                }
                if (obj._isVue) {
                    set(obj._data, key, val);
                    return;
                }
                var ob = obj.__ob__;
                if (!ob) {
                    obj[key] = val;
                    return;
                }
                ob.convert(key, val);
                ob.dep.notify();
                if (ob.vms) {
                    var i = ob.vms.length;
                    while (i--) {
                        var vm = ob.vms[i];
                        vm._proxy(key);
                        vm._digest();
                    }
                }
                return val;
            }

            /**
             * Delete a property and trigger change if necessary.
             *
             * @param {Object} obj
             * @param {String} key
             */

            function del(obj, key) {
                if (!hasOwn(obj, key)) {
                    return;
                }
                delete obj[key];
                var ob = obj.__ob__;
                if (!ob) {
                    return;
                }
                ob.dep.notify();
                if (ob.vms) {
                    var i = ob.vms.length;
                    while (i--) {
                        var vm = ob.vms[i];
                        vm._unproxy(key);
                        vm._digest();
                    }
                }
            }

            var hasOwnProperty = Object.prototype.hasOwnProperty;

            /**
             * Check whether the object has the property.
             *
             * @param {Object} obj
             * @param {String} key
             * @return {Boolean}
             */

            function hasOwn(obj, key) {
                return hasOwnProperty.call(obj, key);
            }

            /**
             * Check if an expression is a literal value.
             *
             * @param {String} exp
             * @return {Boolean}
             */

            var literalValueRE = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/;

            function isLiteral(exp) {
                return literalValueRE.test(exp);
            }

            /**
             * Check if a string starts with $ or _
             *
             * @param {String} str
             * @return {Boolean}
             */

            function isReserved(str) {
                var c = (str + '').charCodeAt(0);
                return c === 0x24 || c === 0x5F;
            }

            /**
             * Guard text output, make sure undefined outputs
             * empty string
             *
             * @param {*} value
             * @return {String}
             */

            function _toString(value) {
                return value == null ? '' : value.toString();
            }

            /**
             * Check and convert possible numeric strings to numbers
             * before setting back to data
             *
             * @param {*} value
             * @return {*|Number}
             */

            function toNumber(value) {
                if (typeof value !== 'string') {
                    return value;
                } else {
                    var parsed = Number(value);
                    return isNaN(parsed) ? value : parsed;
                }
            }

            /**
             * Convert string boolean literals into real booleans.
             *
             * @param {*} value
             * @return {*|Boolean}
             */

            function toBoolean(value) {
                return value === 'true' ? true : value === 'false' ? false : value;
            }

            /**
             * Strip quotes from a string
             *
             * @param {String} str
             * @return {String | false}
             */

            function stripQuotes(str) {
                var a = str.charCodeAt(0);
                var b = str.charCodeAt(str.length - 1);
                return a === b && (a === 0x22 || a === 0x27) ? str.slice(1, -1) : str;
            }

            /**
             * Camelize a hyphen-delmited string.
             *
             * @param {String} str
             * @return {String}
             */

            var camelizeRE = /-(\w)/g;

            function camelize(str) {
                return str.replace(camelizeRE, toUpper);
            }

            function toUpper(_, c) {
                return c ? c.toUpperCase() : '';
            }

            /**
             * Hyphenate a camelCase string.
             *
             * @param {String} str
             * @return {String}
             */

            var hyphenateRE = /([a-z\d])([A-Z])/g;

            function hyphenate(str) {
                return str.replace(hyphenateRE, '$1-$2').toLowerCase();
            }

            /**
             * Converts hyphen/underscore/slash delimitered names into
             * camelized classNames.
             *
             * e.g. my-component => MyComponent
             *      some_else    => SomeElse
             *      some/comp    => SomeComp
             *
             * @param {String} str
             * @return {String}
             */

            var classifyRE = /(?:^|[-_\/])(\w)/g;

            function classify(str) {
                return str.replace(classifyRE, toUpper);
            }

            /**
             * Simple bind, faster than native
             *
             * @param {Function} fn
             * @param {Object} ctx
             * @return {Function}
             */

            function bind$1(fn, ctx) {
                return function (a) {
                    var l = arguments.length;
                    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
                };
            }

            /**
             * Convert an Array-like object to a real Array.
             *
             * @param {Array-like} list
             * @param {Number} [start] - start index
             * @return {Array}
             */

            function toArray(list, start) {
                start = start || 0;
                var i = list.length - start;
                var ret = new Array(i);
                while (i--) {
                    ret[i] = list[i + start];
                }
                return ret;
            }

            /**
             * Mix properties into target object.
             *
             * @param {Object} to
             * @param {Object} from
             */

            function extend(to, from) {
                var keys = Object.keys(from);
                var i = keys.length;
                while (i--) {
                    to[keys[i]] = from[keys[i]];
                }
                return to;
            }

            /**
             * Quick object check - this is primarily used to tell
             * Objects from primitive values when we know the value
             * is a JSON-compliant type.
             *
             * @param {*} obj
             * @return {Boolean}
             */

            function isObject(obj) {
                return obj !== null && typeof obj === 'object';
            }

            /**
             * Strict object type check. Only returns true
             * for plain JavaScript objects.
             *
             * @param {*} obj
             * @return {Boolean}
             */

            var toString = Object.prototype.toString;
            var OBJECT_STRING = '[object Object]';

            function isPlainObject(obj) {
                return toString.call(obj) === OBJECT_STRING;
            }

            /**
             * Array type check.
             *
             * @param {*} obj
             * @return {Boolean}
             */

            var isArray = Array.isArray;

            /**
             * Define a non-enumerable property
             *
             * @param {Object} obj
             * @param {String} key
             * @param {*} val
             * @param {Boolean} [enumerable]
             */

            function def(obj, key, val, enumerable) {
                Object.defineProperty(obj, key, {
                    value: val,
                    enumerable: !!enumerable,
                    writable: true,
                    configurable: true
                });
            }

            /**
             * Debounce a function so it only gets called after the
             * input stops arriving after the given wait period.
             *
             * @param {Function} func
             * @param {Number} wait
             * @return {Function} - the debounced function
             */

            function _debounce(func, wait) {
                var timeout, args, context, timestamp, result;
                var later = function later() {
                    var last = Date.now() - timestamp;
                    if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    }
                };
                return function () {
                    context = this;
                    args = arguments;
                    timestamp = Date.now();
                    if (!timeout) {
                        timeout = setTimeout(later, wait);
                    }
                    return result;
                };
            }

            /**
             * Manual indexOf because it's slightly faster than
             * native.
             *
             * @param {Array} arr
             * @param {*} obj
             */

            function indexOf(arr, obj) {
                var i = arr.length;
                while (i--) {
                    if (arr[i] === obj) return i;
                }
                return -1;
            }

            /**
             * Make a cancellable version of an async callback.
             *
             * @param {Function} fn
             * @return {Function}
             */

            function cancellable(fn) {
                var cb = function cb() {
                    if (!cb.cancelled) {
                        return fn.apply(this, arguments);
                    }
                };
                cb.cancel = function () {
                    cb.cancelled = true;
                };
                return cb;
            }

            /**
             * Check if two values are loosely equal - that is,
             * if they are plain objects, do they have the same shape?
             *
             * @param {*} a
             * @param {*} b
             * @return {Boolean}
             */

            function looseEqual(a, b) {
                /* eslint-disable eqeqeq */
                return a == b || (isObject(a) && isObject(b) ? JSON.stringify(a) === JSON.stringify(b) : false);
                /* eslint-enable eqeqeq */
            }

            var hasProto = ('__proto__' in {});

// Browser environment sniffing
            var inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';

            var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

            var isIE9 = inBrowser && navigator.userAgent.toLowerCase().indexOf('msie 9.0') > 0;

            var isAndroid = inBrowser && navigator.userAgent.toLowerCase().indexOf('android') > 0;

            var transitionProp = undefined;
            var transitionEndEvent = undefined;
            var animationProp = undefined;
            var animationEndEvent = undefined;

// Transition property/event sniffing
            if (inBrowser && !isIE9) {
                var isWebkitTrans = window.ontransitionend === undefined && window.onwebkittransitionend !== undefined;
                var isWebkitAnim = window.onanimationend === undefined && window.onwebkitanimationend !== undefined;
                transitionProp = isWebkitTrans ? 'WebkitTransition' : 'transition';
                transitionEndEvent = isWebkitTrans ? 'webkitTransitionEnd' : 'transitionend';
                animationProp = isWebkitAnim ? 'WebkitAnimation' : 'animation';
                animationEndEvent = isWebkitAnim ? 'webkitAnimationEnd' : 'animationend';
            }

            /**
             * Defer a task to execute it asynchronously. Ideally this
             * should be executed as a microtask, so we leverage
             * MutationObserver if it's available, and fallback to
             * setTimeout(0).
             *
             * @param {Function} cb
             * @param {Object} ctx
             */

            var nextTick = (function () {
                var callbacks = [];
                var pending = false;
                var timerFunc;

                function nextTickHandler() {
                    pending = false;
                    var copies = callbacks.slice(0);
                    callbacks = [];
                    for (var i = 0; i < copies.length; i++) {
                        copies[i]();
                    }
                }

                /* istanbul ignore if */
                if (typeof MutationObserver !== 'undefined') {
                    var counter = 1;
                    var observer = new MutationObserver(nextTickHandler);
                    var textNode = document.createTextNode(counter);
                    observer.observe(textNode, {
                        characterData: true
                    });
                    timerFunc = function () {
                        counter = (counter + 1) % 2;
                        textNode.data = counter;
                    };
                } else {
                    // webpack attempts to inject a shim for setImmediate
                    // if it is used as a global, so we have to work around that to
                    // avoid bundling unnecessary code.
                    var context = inBrowser ? window : typeof global !== 'undefined' ? global : {};
                    timerFunc = context.setImmediate || setTimeout;
                }
                return function (cb, ctx) {
                    var func = ctx ? function () {
                        cb.call(ctx);
                    } : cb;
                    callbacks.push(func);
                    if (pending) return;
                    pending = true;
                    timerFunc(nextTickHandler, 0);
                };
            })();

            function Cache(limit) {
                this.size = 0;
                this.limit = limit;
                this.head = this.tail = undefined;
                this._keymap = Object.create(null);
            }

            var p = Cache.prototype;

            /**
             * Put <value> into the cache associated with <key>.
             * Returns the entry which was removed to make room for
             * the new entry. Otherwise undefined is returned.
             * (i.e. if there was enough room already).
             *
             * @param {String} key
             * @param {*} value
             * @return {Entry|undefined}
             */

            p.put = function (key, value) {
                var removed;
                if (this.size === this.limit) {
                    removed = this.shift();
                }

                var entry = this.get(key, true);
                if (!entry) {
                    entry = {
                        key: key
                    };
                    this._keymap[key] = entry;
                    if (this.tail) {
                        this.tail.newer = entry;
                        entry.older = this.tail;
                    } else {
                        this.head = entry;
                    }
                    this.tail = entry;
                    this.size++;
                }
                entry.value = value;

                return removed;
            };

            /**
             * Purge the least recently used (oldest) entry from the
             * cache. Returns the removed entry or undefined if the
             * cache was empty.
             */

            p.shift = function () {
                var entry = this.head;
                if (entry) {
                    this.head = this.head.newer;
                    this.head.older = undefined;
                    entry.newer = entry.older = undefined;
                    this._keymap[entry.key] = undefined;
                    this.size--;
                }
                return entry;
            };

            /**
             * Get and register recent use of <key>. Returns the value
             * associated with <key> or undefined if not in cache.
             *
             * @param {String} key
             * @param {Boolean} returnEntry
             * @return {Entry|*}
             */

            p.get = function (key, returnEntry) {
                var entry = this._keymap[key];
                if (entry === undefined) return;
                if (entry === this.tail) {
                    return returnEntry ? entry : entry.value;
                }
                // HEAD--------------TAIL
                //   <.older   .newer>
                //  <--- add direction --
                //   A  B  C  <D>  E
                if (entry.newer) {
                    if (entry === this.head) {
                        this.head = entry.newer;
                    }
                    entry.newer.older = entry.older; // C <-- E.
                }
                if (entry.older) {
                    entry.older.newer = entry.newer; // C. --> E
                }
                entry.newer = undefined; // D --x
                entry.older = this.tail; // D. --> E
                if (this.tail) {
                    this.tail.newer = entry; // E. <-- D
                }
                this.tail = entry;
                return returnEntry ? entry : entry.value;
            };

            var cache$1 = new Cache(1000);
            var filterTokenRE = /[^\s'"]+|'[^']*'|"[^"]*"/g;
            var reservedArgRE = /^in$|^-?\d+/;

            /**
             * Parser state
             */

            var str;
            var dir;
            var c;
            var prev;
            var i;
            var l;
            var lastFilterIndex;
            var inSingle;
            var inDouble;
            var curly;
            var square;
            var paren;

            /**
             * Push a filter to the current directive object
             */

            function pushFilter() {
                var exp = str.slice(lastFilterIndex, i).trim();
                var filter;
                if (exp) {
                    filter = {};
                    var tokens = exp.match(filterTokenRE);
                    filter.name = tokens[0];
                    if (tokens.length > 1) {
                        filter.args = tokens.slice(1).map(processFilterArg);
                    }
                }
                if (filter) {
                    (dir.filters = dir.filters || []).push(filter);
                }
                lastFilterIndex = i + 1;
            }

            /**
             * Check if an argument is dynamic and strip quotes.
             *
             * @param {String} arg
             * @return {Object}
             */

            function processFilterArg(arg) {
                if (reservedArgRE.test(arg)) {
                    return {
                        value: toNumber(arg),
                        dynamic: false
                    };
                } else {
                    var stripped = stripQuotes(arg);
                    var dynamic = stripped === arg;
                    return {
                        value: dynamic ? arg : stripped,
                        dynamic: dynamic
                    };
                }
            }

            /**
             * Parse a directive value and extract the expression
             * and its filters into a descriptor.
             *
             * Example:
             *
             * "a + 1 | uppercase" will yield:
             * {
 *   expression: 'a + 1',
 *   filters: [
 *     { name: 'uppercase', args: null }
 *   ]
 * }
             *
             * @param {String} str
             * @return {Object}
             */

            function parseDirective(s) {

                var hit = cache$1.get(s);
                if (hit) {
                    return hit;
                }

                // reset parser state
                str = s;
                inSingle = inDouble = false;
                curly = square = paren = 0;
                lastFilterIndex = 0;
                dir = {};

                for (i = 0, l = str.length; i < l; i++) {
                    prev = c;
                    c = str.charCodeAt(i);
                    if (inSingle) {
                        // check single quote
                        if (c === 0x27 && prev !== 0x5C) inSingle = !inSingle;
                    } else if (inDouble) {
                        // check double quote
                        if (c === 0x22 && prev !== 0x5C) inDouble = !inDouble;
                    } else if (c === 0x7C && // pipe
                        str.charCodeAt(i + 1) !== 0x7C && str.charCodeAt(i - 1) !== 0x7C) {
                        if (dir.expression == null) {
                            // first filter, end of expression
                            lastFilterIndex = i + 1;
                            dir.expression = str.slice(0, i).trim();
                        } else {
                            // already has filter
                            pushFilter();
                        }
                    } else {
                        switch (c) {
                            case 0x22:
                                inDouble = true;
                                break; // "
                            case 0x27:
                                inSingle = true;
                                break; // '
                            case 0x28:
                                paren++;
                                break; // (
                            case 0x29:
                                paren--;
                                break; // )
                            case 0x5B:
                                square++;
                                break; // [
                            case 0x5D:
                                square--;
                                break; // ]
                            case 0x7B:
                                curly++;
                                break; // {
                            case 0x7D:
                                curly--;
                                break; // }
                        }
                    }
                }

                if (dir.expression == null) {
                    dir.expression = str.slice(0, i).trim();
                } else if (lastFilterIndex !== 0) {
                    pushFilter();
                }

                cache$1.put(s, dir);
                return dir;
            }

            var directive = Object.freeze({
                parseDirective: parseDirective
            });

            var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;
            var cache = undefined;
            var tagRE = undefined;
            var htmlRE = undefined;

            /**
             * Escape a string so it can be used in a RegExp
             * constructor.
             *
             * @param {String} str
             */

            function escapeRegex(str) {
                return str.replace(regexEscapeRE, '\\$&');
            }

            function compileRegex() {
                var open = escapeRegex(config.delimiters[0]);
                var close = escapeRegex(config.delimiters[1]);
                var unsafeOpen = escapeRegex(config.unsafeDelimiters[0]);
                var unsafeClose = escapeRegex(config.unsafeDelimiters[1]);
                tagRE = new RegExp(unsafeOpen + '(.+?)' + unsafeClose + '|' + open + '(.+?)' + close, 'g');
                htmlRE = new RegExp('^' + unsafeOpen + '.*' + unsafeClose + '$');
                // reset cache
                cache = new Cache(1000);
            }

            /**
             * Parse a template text string into an array of tokens.
             *
             * @param {String} text
             * @return {Array<Object> | null}
             *               - {String} type
             *               - {String} value
             *               - {Boolean} [html]
             *               - {Boolean} [oneTime]
             */

            function parseText(text) {
                if (!cache) {
                    compileRegex();
                }
                var hit = cache.get(text);
                if (hit) {
                    return hit;
                }
                text = text.replace(/\n/g, '');
                if (!tagRE.test(text)) {
                    return null;
                }
                var tokens = [];
                var lastIndex = tagRE.lastIndex = 0;
                var match, index, html, value, first, oneTime;
                /* eslint-disable no-cond-assign */
                while (match = tagRE.exec(text)) {
                    /* eslint-enable no-cond-assign */
                    index = match.index;
                    // push text token
                    if (index > lastIndex) {
                        tokens.push({
                            value: text.slice(lastIndex, index)
                        });
                    }
                    // tag token
                    html = htmlRE.test(match[0]);
                    value = html ? match[1] : match[2];
                    first = value.charCodeAt(0);
                    oneTime = first === 42; // *
                    value = oneTime ? value.slice(1) : value;
                    tokens.push({
                        tag: true,
                        value: value.trim(),
                        html: html,
                        oneTime: oneTime
                    });
                    lastIndex = index + match[0].length;
                }
                if (lastIndex < text.length) {
                    tokens.push({
                        value: text.slice(lastIndex)
                    });
                }
                cache.put(text, tokens);
                return tokens;
            }

            /**
             * Format a list of tokens into an expression.
             * e.g. tokens parsed from 'a {{b}} c' can be serialized
             * into one single expression as '"a " + b + " c"'.
             *
             * @param {Array} tokens
             * @param {Vue} [vm]
             * @return {String}
             */

            function tokensToExp(tokens, vm) {
                if (tokens.length > 1) {
                    return tokens.map(function (token) {
                        return formatToken(token, vm);
                    }).join('+');
                } else {
                    return formatToken(tokens[0], vm, true);
                }
            }

            /**
             * Format a single token.
             *
             * @param {Object} token
             * @param {Vue} [vm]
             * @param {Boolean} [single]
             * @return {String}
             */

            function formatToken(token, vm, single) {
                return token.tag ? token.oneTime && vm ? '"' + vm.$eval(token.value) + '"' : inlineFilters(token.value, single) : '"' + token.value + '"';
            }

            /**
             * For an attribute with multiple interpolation tags,
             * e.g. attr="some-{{thing | filter}}", in order to combine
             * the whole thing into a single watchable expression, we
             * have to inline those filters. This function does exactly
             * that. This is a bit hacky but it avoids heavy changes
             * to directive parser and watcher mechanism.
             *
             * @param {String} exp
             * @param {Boolean} single
             * @return {String}
             */

            var filterRE$1 = /[^|]\|[^|]/;

            function inlineFilters(exp, single) {
                if (!filterRE$1.test(exp)) {
                    return single ? exp : '(' + exp + ')';
                } else {
                    var dir = parseDirective(exp);
                    if (!dir.filters) {
                        return '(' + exp + ')';
                    } else {
                        return 'this._applyFilters(' + dir.expression + // value
                            ',null,' + // oldValue (null for read)
                            JSON.stringify(dir.filters) + // filter descriptors
                            ',false)'; // write?
                    }
                }
            }

            var text$1 = Object.freeze({
                compileRegex: compileRegex,
                parseText: parseText,
                tokensToExp: tokensToExp
            });

            var delimiters = ['{{', '}}'];
            var unsafeDelimiters = ['{{{', '}}}'];

            var config = Object.defineProperties({

                /**
                 * Whether to print debug messages.
                 * Also enables stack trace for warnings.
                 *
                 * @type {Boolean}
                 */

                debug: false,

                /**
                 * Whether to suppress warnings.
                 *
                 * @type {Boolean}
                 */

                silent: false,

                /**
                 * Whether to use async rendering.
                 */

                async: true,

                /**
                 * Whether to warn against errors caught when evaluating
                 * expressions.
                 */

                warnExpressionErrors: true,

                /**
                 * Whether or not to handle fully object properties which
                 * are already backed by getters and seters. Depending on
                 * use case and environment, this might introduce non-neglible
                 * performance penalties.
                 */
                convertAllProperties: false,

                /**
                 * Internal flag to indicate the delimiters have been
                 * changed.
                 *
                 * @type {Boolean}
                 */

                _delimitersChanged: true,

                /**
                 * List of asset types that a component can own.
                 *
                 * @type {Array}
                 */

                _assetTypes: ['component', 'directive', 'elementDirective', 'filter', 'transition', 'partial'],

                /**
                 * prop binding modes
                 */

                _propBindingModes: {
                    ONE_WAY: 0,
                    TWO_WAY: 1,
                    ONE_TIME: 2
                },

                /**
                 * Max circular updates allowed in a batcher flush cycle.
                 */

                _maxUpdateCount: 100

            }, {
                delimiters: {
                    /**
                     * Interpolation delimiters. Changing these would trigger
                     * the text parser to re-compile the regular expressions.
                     *
                     * @type {Array<String>}
                     */

                    get: function get() {
                        return delimiters;
                    },
                    set: function set(val) {
                        delimiters = val;
                        compileRegex();
                    },
                    configurable: true,
                    enumerable: true
                },
                unsafeDelimiters: {
                    get: function get() {
                        return unsafeDelimiters;
                    },
                    set: function set(val) {
                        unsafeDelimiters = val;
                        compileRegex();
                    },
                    configurable: true,
                    enumerable: true
                }
            });

            var warn = undefined;

            if (process.env.NODE_ENV !== 'production') {
                (function () {
                    var hasConsole = typeof console !== 'undefined';
                    warn = function (msg, e) {
                        if (hasConsole && (!config.silent || config.debug)) {
                            console.warn('[Vue warn]: ' + msg);
                            /* istanbul ignore if */
                            if (config.debug) {
                                if (e) {
                                    throw e;
                                } else {
                                    console.warn(new Error('Warning Stack Trace').stack);
                                }
                            }
                        }
                    };
                })();
            }

            /**
             * Append with transition.
             *
             * @param {Element} el
             * @param {Element} target
             * @param {Vue} vm
             * @param {Function} [cb]
             */

            function appendWithTransition(el, target, vm, cb) {
                applyTransition(el, 1, function () {
                    target.appendChild(el);
                }, vm, cb);
            }

            /**
             * InsertBefore with transition.
             *
             * @param {Element} el
             * @param {Element} target
             * @param {Vue} vm
             * @param {Function} [cb]
             */

            function beforeWithTransition(el, target, vm, cb) {
                applyTransition(el, 1, function () {
                    before(el, target);
                }, vm, cb);
            }

            /**
             * Remove with transition.
             *
             * @param {Element} el
             * @param {Vue} vm
             * @param {Function} [cb]
             */

            function removeWithTransition(el, vm, cb) {
                applyTransition(el, -1, function () {
                    remove(el);
                }, vm, cb);
            }

            /**
             * Apply transitions with an operation callback.
             *
             * @param {Element} el
             * @param {Number} direction
             *                  1: enter
             *                 -1: leave
             * @param {Function} op - the actual DOM operation
             * @param {Vue} vm
             * @param {Function} [cb]
             */

            function applyTransition(el, direction, op, vm, cb) {
                var transition = el.__v_trans;
                if (!transition ||
                        // skip if there are no js hooks and CSS transition is
                        // not supported
                    !transition.hooks && !transitionEndEvent ||
                        // skip transitions for initial compile
                    !vm._isCompiled ||
                        // if the vm is being manipulated by a parent directive
                        // during the parent's compilation phase, skip the
                        // animation.
                    vm.$parent && !vm.$parent._isCompiled) {
                    op();
                    if (cb) cb();
                    return;
                }
                var action = direction > 0 ? 'enter' : 'leave';
                transition[action](op, cb);
            }

            /**
             * Query an element selector if it's not an element already.
             *
             * @param {String|Element} el
             * @return {Element}
             */

            function query(el) {
                if (typeof el === 'string') {
                    var selector = el;
                    el = document.querySelector(el);
                    if (!el) {
                        process.env.NODE_ENV !== 'production' && warn('Cannot find element: ' + selector);
                    }
                }
                return el;
            }

            /**
             * Check if a node is in the document.
             * Note: document.documentElement.contains should work here
             * but always returns false for comment nodes in phantomjs,
             * making unit tests difficult. This is fixed by doing the
             * contains() check on the node's parentNode instead of
             * the node itself.
             *
             * @param {Node} node
             * @return {Boolean}
             */

            function inDoc(node) {
                var doc = document.documentElement;
                var parent = node && node.parentNode;
                return doc === node || doc === parent || !!(parent && parent.nodeType === 1 && doc.contains(parent));
            }

            /**
             * Get and remove an attribute from a node.
             *
             * @param {Node} node
             * @param {String} _attr
             */

            function getAttr(node, _attr) {
                var val = node.getAttribute(_attr);
                if (val !== null) {
                    node.removeAttribute(_attr);
                }
                return val;
            }

            /**
             * Get an attribute with colon or v-bind: prefix.
             *
             * @param {Node} node
             * @param {String} name
             * @return {String|null}
             */

            function getBindAttr(node, name) {
                var val = getAttr(node, ':' + name);
                if (val === null) {
                    val = getAttr(node, 'v-bind:' + name);
                }
                return val;
            }

            /**
             * Check the presence of a bind attribute.
             *
             * @param {Node} node
             * @param {String} name
             * @return {Boolean}
             */

            function hasBindAttr(node, name) {
                return node.hasAttribute(name) || node.hasAttribute(':' + name) || node.hasAttribute('v-bind:' + name);
            }

            /**
             * Insert el before target
             *
             * @param {Element} el
             * @param {Element} target
             */

            function before(el, target) {
                target.parentNode.insertBefore(el, target);
            }

            /**
             * Insert el after target
             *
             * @param {Element} el
             * @param {Element} target
             */

            function after(el, target) {
                if (target.nextSibling) {
                    before(el, target.nextSibling);
                } else {
                    target.parentNode.appendChild(el);
                }
            }

            /**
             * Remove el from DOM
             *
             * @param {Element} el
             */

            function remove(el) {
                el.parentNode.removeChild(el);
            }

            /**
             * Prepend el to target
             *
             * @param {Element} el
             * @param {Element} target
             */

            function prepend(el, target) {
                if (target.firstChild) {
                    before(el, target.firstChild);
                } else {
                    target.appendChild(el);
                }
            }

            /**
             * Replace target with el
             *
             * @param {Element} target
             * @param {Element} el
             */

            function replace(target, el) {
                var parent = target.parentNode;
                if (parent) {
                    parent.replaceChild(el, target);
                }
            }

            /**
             * Add event listener shorthand.
             *
             * @param {Element} el
             * @param {String} event
             * @param {Function} cb
             * @param {Boolean} [useCapture]
             */

            function on$1(el, event, cb, useCapture) {
                el.addEventListener(event, cb, useCapture);
            }

            /**
             * Remove event listener shorthand.
             *
             * @param {Element} el
             * @param {String} event
             * @param {Function} cb
             */

            function off(el, event, cb) {
                el.removeEventListener(event, cb);
            }

            /**
             * In IE9, setAttribute('class') will result in empty class
             * if the element also has the :class attribute; However in
             * PhantomJS, setting `className` does not work on SVG elements...
             * So we have to do a conditional check here.
             *
             * @param {Element} el
             * @param {String} cls
             */

            function setClass(el, cls) {
                /* istanbul ignore if */
                if (isIE9 && !(el instanceof SVGElement)) {
                    el.className = cls;
                } else {
                    el.setAttribute('class', cls);
                }
            }

            /**
             * Add class with compatibility for IE & SVG
             *
             * @param {Element} el
             * @param {String} cls
             */

            function addClass(el, cls) {
                if (el.classList) {
                    el.classList.add(cls);
                } else {
                    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
                    if (cur.indexOf(' ' + cls + ' ') < 0) {
                        setClass(el, (cur + cls).trim());
                    }
                }
            }

            /**
             * Remove class with compatibility for IE & SVG
             *
             * @param {Element} el
             * @param {String} cls
             */

            function removeClass(el, cls) {
                if (el.classList) {
                    el.classList.remove(cls);
                } else {
                    var cur = ' ' + (el.getAttribute('class') || '') + ' ';
                    var tar = ' ' + cls + ' ';
                    while (cur.indexOf(tar) >= 0) {
                        cur = cur.replace(tar, ' ');
                    }
                    setClass(el, cur.trim());
                }
                if (!el.className) {
                    el.removeAttribute('class');
                }
            }

            /**
             * Extract raw content inside an element into a temporary
             * container div
             *
             * @param {Element} el
             * @param {Boolean} asFragment
             * @return {Element}
             */

            function extractContent(el, asFragment) {
                var child;
                var rawContent;
                /* istanbul ignore if */
                if (isTemplate(el) && el.content instanceof DocumentFragment) {
                    el = el.content;
                }
                if (el.hasChildNodes()) {
                    trimNode(el);
                    rawContent = asFragment ? document.createDocumentFragment() : document.createElement('div');
                    /* eslint-disable no-cond-assign */
                    while (child = el.firstChild) {
                        /* eslint-enable no-cond-assign */
                        rawContent.appendChild(child);
                    }
                }
                return rawContent;
            }

            /**
             * Trim possible empty head/tail text and comment
             * nodes inside a parent.
             *
             * @param {Node} node
             */

            function trimNode(node) {
                var child;
                /* eslint-disable no-sequences */
                while ((child = node.firstChild, isTrimmable(child))) {
                    node.removeChild(child);
                }
                while ((child = node.lastChild, isTrimmable(child))) {
                    node.removeChild(child);
                }
                /* eslint-enable no-sequences */
            }

            function isTrimmable(node) {
                return node && (node.nodeType === 3 && !node.data.trim() || node.nodeType === 8);
            }

            /**
             * Check if an element is a template tag.
             * Note if the template appears inside an SVG its tagName
             * will be in lowercase.
             *
             * @param {Element} el
             */

            function isTemplate(el) {
                return el.tagName && el.tagName.toLowerCase() === 'template';
            }

            /**
             * Create an "anchor" for performing dom insertion/removals.
             * This is used in a number of scenarios:
             * - fragment instance
             * - v-html
             * - v-if
             * - v-for
             * - component
             *
             * @param {String} content
             * @param {Boolean} persist - IE trashes empty textNodes on
             *                            cloneNode(true), so in certain
             *                            cases the anchor needs to be
             *                            non-empty to be persisted in
             *                            templates.
             * @return {Comment|Text}
             */

            function createAnchor(content, persist) {
                var anchor = config.debug ? document.createComment(content) : document.createTextNode(persist ? ' ' : '');
                anchor.__vue_anchor = true;
                return anchor;
            }

            /**
             * Find a component ref attribute that starts with $.
             *
             * @param {Element} node
             * @return {String|undefined}
             */

            var refRE = /^v-ref:/;

            function findRef(node) {
                if (node.hasAttributes()) {
                    var attrs = node.attributes;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        var name = attrs[i].name;
                        if (refRE.test(name)) {
                            return camelize(name.replace(refRE, ''));
                        }
                    }
                }
            }

            /**
             * Map a function to a range of nodes .
             *
             * @param {Node} node
             * @param {Node} end
             * @param {Function} op
             */

            function mapNodeRange(node, end, op) {
                var next;
                while (node !== end) {
                    next = node.nextSibling;
                    op(node);
                    node = next;
                }
                op(end);
            }

            /**
             * Remove a range of nodes with transition, store
             * the nodes in a fragment with correct ordering,
             * and call callback when done.
             *
             * @param {Node} start
             * @param {Node} end
             * @param {Vue} vm
             * @param {DocumentFragment} frag
             * @param {Function} cb
             */

            function removeNodeRange(start, end, vm, frag, cb) {
                var done = false;
                var removed = 0;
                var nodes = [];
                mapNodeRange(start, end, function (node) {
                    if (node === end) done = true;
                    nodes.push(node);
                    removeWithTransition(node, vm, onRemoved);
                });
                function onRemoved() {
                    removed++;
                    if (done && removed >= nodes.length) {
                        for (var i = 0; i < nodes.length; i++) {
                            frag.appendChild(nodes[i]);
                        }
                        cb && cb();
                    }
                }
            }

            var commonTagRE = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/;
            var reservedTagRE = /^(slot|partial|component)$/;

            /**
             * Check if an element is a component, if yes return its
             * component id.
             *
             * @param {Element} el
             * @param {Object} options
             * @return {Object|undefined}
             */

            function checkComponentAttr(el, options) {
                var tag = el.tagName.toLowerCase();
                var hasAttrs = el.hasAttributes();
                if (!commonTagRE.test(tag) && !reservedTagRE.test(tag)) {
                    if (resolveAsset(options, 'components', tag)) {
                        return {id: tag};
                    } else {
                        var is = hasAttrs && getIsBinding(el);
                        if (is) {
                            return is;
                        } else if (process.env.NODE_ENV !== 'production') {
                            if (tag.indexOf('-') > -1 || /HTMLUnknownElement/.test(el.toString()) &&
                                    // Chrome returns unknown for several HTML5 elements.
                                    // https://code.google.com/p/chromium/issues/detail?id=540526
                                !/^(data|time|rtc|rb)$/.test(tag)) {
                                warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.');
                            }
                        }
                    }
                } else if (hasAttrs) {
                    return getIsBinding(el);
                }
            }

            /**
             * Get "is" binding from an element.
             *
             * @param {Element} el
             * @return {Object|undefined}
             */

            function getIsBinding(el) {
                // dynamic syntax
                var exp = getAttr(el, 'is');
                if (exp != null) {
                    return {id: exp};
                } else {
                    exp = getBindAttr(el, 'is');
                    if (exp != null) {
                        return {id: exp, dynamic: true};
                    }
                }
            }

            /**
             * Set a prop's initial value on a vm and its data object.
             *
             * @param {Vue} vm
             * @param {Object} prop
             * @param {*} value
             */

            function initProp(vm, prop, value) {
                var key = prop.path;
                value = coerceProp(prop, value);
                vm[key] = vm._data[key] = assertProp(prop, value) ? value : undefined;
            }

            /**
             * Assert whether a prop is valid.
             *
             * @param {Object} prop
             * @param {*} value
             */

            function assertProp(prop, value) {
                // if a prop is not provided and is not required,
                // skip the check.
                if (prop.raw === null && !prop.required) {
                    return true;
                }
                var options = prop.options;
                var type = options.type;
                var valid = true;
                var expectedType;
                if (type) {
                    if (type === String) {
                        expectedType = 'string';
                        valid = typeof value === expectedType;
                    } else if (type === Number) {
                        expectedType = 'number';
                        valid = typeof value === 'number';
                    } else if (type === Boolean) {
                        expectedType = 'boolean';
                        valid = typeof value === 'boolean';
                    } else if (type === Function) {
                        expectedType = 'function';
                        valid = typeof value === 'function';
                    } else if (type === Object) {
                        expectedType = 'object';
                        valid = isPlainObject(value);
                    } else if (type === Array) {
                        expectedType = 'array';
                        valid = isArray(value);
                    } else {
                        valid = value instanceof type;
                    }
                }
                if (!valid) {
                    process.env.NODE_ENV !== 'production' && warn('Invalid prop: type check failed for ' + prop.path + '="' + prop.raw + '".' + ' Expected ' + formatType(expectedType) + ', got ' + formatValue(value) + '.');
                    return false;
                }
                var validator = options.validator;
                if (validator) {
                    if (!validator.call(null, value)) {
                        process.env.NODE_ENV !== 'production' && warn('Invalid prop: custom validator check failed for ' + prop.path + '="' + prop.raw + '"');
                        return false;
                    }
                }
                return true;
            }

            /**
             * Force parsing value with coerce option.
             *
             * @param {*} value
             * @param {Object} options
             * @return {*}
             */

            function coerceProp(prop, value) {
                var coerce = prop.options.coerce;
                if (!coerce) {
                    return value;
                }
                // coerce is a function
                return coerce(value);
            }

            function formatType(val) {
                return val ? val.charAt(0).toUpperCase() + val.slice(1) : 'custom type';
            }

            function formatValue(val) {
                return Object.prototype.toString.call(val).slice(8, -1);
            }

            /**
             * Option overwriting strategies are functions that handle
             * how to merge a parent option value and a child option
             * value into the final value.
             *
             * All strategy functions follow the same signature:
             *
             * @param {*} parentVal
             * @param {*} childVal
             * @param {Vue} [vm]
             */

            var strats = config.optionMergeStrategies = Object.create(null);

            /**
             * Helper that recursively merges two data objects together.
             */

            function mergeData(to, from) {
                var key, toVal, fromVal;
                for (key in from) {
                    toVal = to[key];
                    fromVal = from[key];
                    if (!hasOwn(to, key)) {
                        set(to, key, fromVal);
                    } else if (isObject(toVal) && isObject(fromVal)) {
                        mergeData(toVal, fromVal);
                    }
                }
                return to;
            }

            /**
             * Data
             */

            strats.data = function (parentVal, childVal, vm) {
                if (!vm) {
                    // in a Vue.extend merge, both should be functions
                    if (!childVal) {
                        return parentVal;
                    }
                    if (typeof childVal !== 'function') {
                        process.env.NODE_ENV !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
                        return parentVal;
                    }
                    if (!parentVal) {
                        return childVal;
                    }
                    // when parentVal & childVal are both present,
                    // we need to return a function that returns the
                    // merged result of both functions... no need to
                    // check if parentVal is a function here because
                    // it has to be a function to pass previous merges.
                    return function mergedDataFn() {
                        return mergeData(childVal.call(this), parentVal.call(this));
                    };
                } else if (parentVal || childVal) {
                    return function mergedInstanceDataFn() {
                        // instance merge
                        var instanceData = typeof childVal === 'function' ? childVal.call(vm) : childVal;
                        var defaultData = typeof parentVal === 'function' ? parentVal.call(vm) : undefined;
                        if (instanceData) {
                            return mergeData(instanceData, defaultData);
                        } else {
                            return defaultData;
                        }
                    };
                }
            };

            /**
             * El
             */

            strats.el = function (parentVal, childVal, vm) {
                if (!vm && childVal && typeof childVal !== 'function') {
                    process.env.NODE_ENV !== 'production' && warn('The "el" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.');
                    return;
                }
                var ret = childVal || parentVal;
                // invoke the element factory if this is instance merge
                return vm && typeof ret === 'function' ? ret.call(vm) : ret;
            };

            /**
             * Hooks and param attributes are merged as arrays.
             */

            strats.init = strats.created = strats.ready = strats.attached = strats.detached = strats.beforeCompile = strats.compiled = strats.beforeDestroy = strats.destroyed = function (parentVal, childVal) {
                return childVal ? parentVal ? parentVal.concat(childVal) : isArray(childVal) ? childVal : [childVal] : parentVal;
            };

            /**
             * 0.11 deprecation warning
             */

            strats.paramAttributes = function () {
                /* istanbul ignore next */
                process.env.NODE_ENV !== 'production' && warn('"paramAttributes" option has been deprecated in 0.12. ' + 'Use "props" instead.');
            };

            /**
             * Assets
             *
             * When a vm is present (instance creation), we need to do
             * a three-way merge between constructor options, instance
             * options and parent options.
             */

            function mergeAssets(parentVal, childVal) {
                var res = Object.create(parentVal);
                return childVal ? extend(res, guardArrayAssets(childVal)) : res;
            }

            config._assetTypes.forEach(function (type) {
                strats[type + 's'] = mergeAssets;
            });

            /**
             * Events & Watchers.
             *
             * Events & watchers hashes should not overwrite one
             * another, so we merge them as arrays.
             */

            strats.watch = strats.events = function (parentVal, childVal) {
                if (!childVal) return parentVal;
                if (!parentVal) return childVal;
                var ret = {};
                extend(ret, parentVal);
                for (var key in childVal) {
                    var parent = ret[key];
                    var child = childVal[key];
                    if (parent && !isArray(parent)) {
                        parent = [parent];
                    }
                    ret[key] = parent ? parent.concat(child) : [child];
                }
                return ret;
            };

            /**
             * Other object hashes.
             */

            strats.props = strats.methods = strats.computed = function (parentVal, childVal) {
                if (!childVal) return parentVal;
                if (!parentVal) return childVal;
                var ret = Object.create(null);
                extend(ret, parentVal);
                extend(ret, childVal);
                return ret;
            };

            /**
             * Default strategy.
             */

            var defaultStrat = function defaultStrat(parentVal, childVal) {
                return childVal === undefined ? parentVal : childVal;
            };

            /**
             * Make sure component options get converted to actual
             * constructors.
             *
             * @param {Object} options
             */

            function guardComponents(options) {
                if (options.components) {
                    var components = options.components = guardArrayAssets(options.components);
                    var def;
                    var ids = Object.keys(components);
                    for (var i = 0, l = ids.length; i < l; i++) {
                        var key = ids[i];
                        if (commonTagRE.test(key) || reservedTagRE.test(key)) {
                            process.env.NODE_ENV !== 'production' && warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + key);
                            continue;
                        }
                        def = components[key];
                        if (isPlainObject(def)) {
                            components[key] = Vue.extend(def);
                        }
                    }
                }
            }

            /**
             * Ensure all props option syntax are normalized into the
             * Object-based format.
             *
             * @param {Object} options
             */

            function guardProps(options) {
                var props = options.props;
                var i, val;
                if (isArray(props)) {
                    options.props = {};
                    i = props.length;
                    while (i--) {
                        val = props[i];
                        if (typeof val === 'string') {
                            options.props[val] = null;
                        } else if (val.name) {
                            options.props[val.name] = val;
                        }
                    }
                } else if (isPlainObject(props)) {
                    var keys = Object.keys(props);
                    i = keys.length;
                    while (i--) {
                        val = props[keys[i]];
                        if (typeof val === 'function') {
                            props[keys[i]] = {type: val};
                        }
                    }
                }
            }

            /**
             * Guard an Array-format assets option and converted it
             * into the key-value Object format.
             *
             * @param {Object|Array} assets
             * @return {Object}
             */

            function guardArrayAssets(assets) {
                if (isArray(assets)) {
                    var res = {};
                    var i = assets.length;
                    var asset;
                    while (i--) {
                        asset = assets[i];
                        var id = typeof asset === 'function' ? asset.options && asset.options.name || asset.id : asset.name || asset.id;
                        if (!id) {
                            process.env.NODE_ENV !== 'production' && warn('Array-syntax assets must provide a "name" or "id" field.');
                        } else {
                            res[id] = asset;
                        }
                    }
                    return res;
                }
                return assets;
            }

            /**
             * Merge two option objects into a new one.
             * Core utility used in both instantiation and inheritance.
             *
             * @param {Object} parent
             * @param {Object} child
             * @param {Vue} [vm] - if vm is present, indicates this is
             *                     an instantiation merge.
             */

            function mergeOptions(parent, child, vm) {
                guardComponents(child);
                guardProps(child);
                var options = {};
                var key;
                if (child.mixins) {
                    for (var i = 0, l = child.mixins.length; i < l; i++) {
                        parent = mergeOptions(parent, child.mixins[i], vm);
                    }
                }
                for (key in parent) {
                    mergeField(key);
                }
                for (key in child) {
                    if (!hasOwn(parent, key)) {
                        mergeField(key);
                    }
                }
                function mergeField(key) {
                    var strat = strats[key] || defaultStrat;
                    options[key] = strat(parent[key], child[key], vm, key);
                }

                return options;
            }

            /**
             * Resolve an asset.
             * This function is used because child instances need access
             * to assets defined in its ancestor chain.
             *
             * @param {Object} options
             * @param {String} type
             * @param {String} id
             * @return {Object|Function}
             */

            function resolveAsset(options, type, id) {
                /* istanbul ignore if */
                if (typeof id !== 'string') {
                    return;
                }
                var assets = options[type];
                var camelizedId;
                return assets[id] ||
                        // camelCase ID
                    assets[camelizedId = camelize(id)] ||
                        // Pascal Case ID
                    assets[camelizedId.charAt(0).toUpperCase() + camelizedId.slice(1)];
            }

            /**
             * Assert asset exists
             */

            function assertAsset(val, type, id) {
                if (!val) {
                    process.env.NODE_ENV !== 'production' && warn('Failed to resolve ' + type + ': ' + id);
                }
            }

            var arrayProto = Array.prototype;
            var arrayMethods = Object.create(arrayProto)

            /**
             * Intercept mutating methods and emit events
             */

                ;
            ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function (method) {
                // cache original method
                var original = arrayProto[method];
                def(arrayMethods, method, function mutator() {
                    // avoid leaking arguments:
                    // http://jsperf.com/closure-with-arguments
                    var i = arguments.length;
                    var args = new Array(i);
                    while (i--) {
                        args[i] = arguments[i];
                    }
                    var result = original.apply(this, args);
                    var ob = this.__ob__;
                    var inserted;
                    switch (method) {
                        case 'push':
                            inserted = args;
                            break;
                        case 'unshift':
                            inserted = args;
                            break;
                        case 'splice':
                            inserted = args.slice(2);
                            break;
                    }
                    if (inserted) ob.observeArray(inserted);
                    // notify change
                    ob.dep.notify();
                    return result;
                });
            });

            /**
             * Swap the element at the given index with a new value
             * and emits corresponding event.
             *
             * @param {Number} index
             * @param {*} val
             * @return {*} - replaced element
             */

            def(arrayProto, '$set', function $set(index, val) {
                if (index >= this.length) {
                    this.length = Number(index) + 1;
                }
                return this.splice(index, 1, val)[0];
            });

            /**
             * Convenience method to remove the element at given index.
             *
             * @param {Number} index
             * @param {*} val
             */

            def(arrayProto, '$remove', function $remove(item) {
                /* istanbul ignore if */
                if (!this.length) return;
                var index = indexOf(this, item);
                if (index > -1) {
                    return this.splice(index, 1);
                }
            });

            var uid$3 = 0;

            /**
             * A dep is an observable that can have multiple
             * directives subscribing to it.
             *
             * @constructor
             */
            function Dep() {
                this.id = uid$3++;
                this.subs = [];
            }

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
            Dep.target = null;

            /**
             * Add a directive subscriber.
             *
             * @param {Directive} sub
             */

            Dep.prototype.addSub = function (sub) {
                this.subs.push(sub);
            };

            /**
             * Remove a directive subscriber.
             *
             * @param {Directive} sub
             */

            Dep.prototype.removeSub = function (sub) {
                this.subs.$remove(sub);
            };

            /**
             * Add self as a dependency to the target watcher.
             */

            Dep.prototype.depend = function () {
                Dep.target.addDep(this);
            };

            /**
             * Notify all subscribers of a new value.
             */

            Dep.prototype.notify = function () {
                // stablize the subscriber list first
                var subs = toArray(this.subs);
                for (var i = 0, l = subs.length; i < l; i++) {
                    subs[i].update();
                }
            };

            var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

            /**
             * Observer class that are attached to each observed
             * object. Once attached, the observer converts target
             * object's property keys into getter/setters that
             * collect dependencies and dispatches updates.
             *
             * @param {Array|Object} value
             * @constructor
             */

            function Observer(value) {
                this.value = value;
                this.dep = new Dep();
                def(value, '__ob__', this);
                if (isArray(value)) {
                    var augment = hasProto ? protoAugment : copyAugment;
                    augment(value, arrayMethods, arrayKeys);
                    this.observeArray(value);
                } else {
                    this.walk(value);
                }
            }

// Instance methods

            /**
             * Walk through each property and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             *
             * @param {Object} obj
             */

            Observer.prototype.walk = function (obj) {
                var keys = Object.keys(obj);
                for (var i = 0, l = keys.length; i < l; i++) {
                    this.convert(keys[i], obj[keys[i]]);
                }
            };

            /**
             * Observe a list of Array items.
             *
             * @param {Array} items
             */

            Observer.prototype.observeArray = function (items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    observe(items[i]);
                }
            };

            /**
             * Convert a property into getter/setter so we can emit
             * the events when the property is accessed/changed.
             *
             * @param {String} key
             * @param {*} val
             */

            Observer.prototype.convert = function (key, val) {
                defineReactive(this.value, key, val);
            };

            /**
             * Add an owner vm, so that when $set/$delete mutations
             * happen we can notify owner vms to proxy the keys and
             * digest the watchers. This is only called when the object
             * is observed as an instance's root $data.
             *
             * @param {Vue} vm
             */

            Observer.prototype.addVm = function (vm) {
                (this.vms || (this.vms = [])).push(vm);
            };

            /**
             * Remove an owner vm. This is called when the object is
             * swapped out as an instance's $data object.
             *
             * @param {Vue} vm
             */

            Observer.prototype.removeVm = function (vm) {
                this.vms.$remove(vm);
            };

// helpers

            /**
             * Augment an target Object or Array by intercepting
             * the prototype chain using __proto__
             *
             * @param {Object|Array} target
             * @param {Object} proto
             */

            function protoAugment(target, src) {
                target.__proto__ = src;
            }

            /**
             * Augment an target Object or Array by defining
             * hidden properties.
             *
             * @param {Object|Array} target
             * @param {Object} proto
             */

            function copyAugment(target, src, keys) {
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    def(target, key, src[key]);
                }
            }

            /**
             * Attempt to create an observer instance for a value,
             * returns the new observer if successfully observed,
             * or the existing observer if the value already has one.
             *
             * @param {*} value
             * @param {Vue} [vm]
             * @return {Observer|undefined}
             * @static
             */

            function observe(value, vm) {
                if (!value || typeof value !== 'object') {
                    return;
                }
                var ob;
                if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
                    ob = value.__ob__;
                } else if ((isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
                    ob = new Observer(value);
                }
                if (ob && vm) {
                    ob.addVm(vm);
                }
                return ob;
            }

            /**
             * Define a reactive property on an Object.
             *
             * @param {Object} obj
             * @param {String} key
             * @param {*} val
             */

            function defineReactive(obj, key, val) {
                var dep = new Dep();

                // cater for pre-defined getter/setters
                var getter, setter;
                if (config.convertAllProperties) {
                    var property = Object.getOwnPropertyDescriptor(obj, key);
                    if (property && property.configurable === false) {
                        return;
                    }
                    getter = property && property.get;
                    setter = property && property.set;
                }

                var childOb = observe(val);
                Object.defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true,
                    get: function reactiveGetter() {
                        var value = getter ? getter.call(obj) : val;
                        if (Dep.target) {
                            dep.depend();
                            if (childOb) {
                                childOb.dep.depend();
                            }
                            if (isArray(value)) {
                                for (var e, i = 0, l = value.length; i < l; i++) {
                                    e = value[i];
                                    e && e.__ob__ && e.__ob__.dep.depend();
                                }
                            }
                        }
                        return value;
                    },
                    set: function reactiveSetter(newVal) {
                        var value = getter ? getter.call(obj) : val;
                        if (newVal === value) {
                            return;
                        }
                        if (setter) {
                            setter.call(obj, newVal);
                        } else {
                            val = newVal;
                        }
                        childOb = observe(newVal);
                        dep.notify();
                    }
                });
            }

            var util = Object.freeze({
                defineReactive: defineReactive,
                set: set,
                del: del,
                hasOwn: hasOwn,
                isLiteral: isLiteral,
                isReserved: isReserved,
                _toString: _toString,
                toNumber: toNumber,
                toBoolean: toBoolean,
                stripQuotes: stripQuotes,
                camelize: camelize,
                hyphenate: hyphenate,
                classify: classify,
                bind: bind$1,
                toArray: toArray,
                extend: extend,
                isObject: isObject,
                isPlainObject: isPlainObject,
                def: def,
                debounce: _debounce,
                indexOf: indexOf,
                cancellable: cancellable,
                looseEqual: looseEqual,
                isArray: isArray,
                hasProto: hasProto,
                inBrowser: inBrowser,
                devtools: devtools,
                isIE9: isIE9,
                isAndroid: isAndroid,
                get transitionProp() {
                    return transitionProp;
                },
                get transitionEndEvent() {
                    return transitionEndEvent;
                },
                get animationProp() {
                    return animationProp;
                },
                get animationEndEvent() {
                    return animationEndEvent;
                },
                nextTick: nextTick,
                query: query,
                inDoc: inDoc,
                getAttr: getAttr,
                getBindAttr: getBindAttr,
                hasBindAttr: hasBindAttr,
                before: before,
                after: after,
                remove: remove,
                prepend: prepend,
                replace: replace,
                on: on$1,
                off: off,
                setClass: setClass,
                addClass: addClass,
                removeClass: removeClass,
                extractContent: extractContent,
                trimNode: trimNode,
                isTemplate: isTemplate,
                createAnchor: createAnchor,
                findRef: findRef,
                mapNodeRange: mapNodeRange,
                removeNodeRange: removeNodeRange,
                mergeOptions: mergeOptions,
                resolveAsset: resolveAsset,
                assertAsset: assertAsset,
                checkComponentAttr: checkComponentAttr,
                initProp: initProp,
                assertProp: assertProp,
                coerceProp: coerceProp,
                commonTagRE: commonTagRE,
                reservedTagRE: reservedTagRE,
                get warn() {
                    return warn;
                }
            });

            var uid = 0;

            function initMixin(Vue) {

                /**
                 * The main init sequence. This is called for every
                 * instance, including ones that are created from extended
                 * constructors.
                 *
                 * @param {Object} options - this options object should be
                 *                           the result of merging class
                 *                           options and the options passed
                 *                           in to the constructor.
                 */

                Vue.prototype._init = function (options) {

                    options = options || {};

                    this.$el = null;
                    this.$parent = options.parent;
                    this.$root = this.$parent ? this.$parent.$root : this;
                    this.$children = [];
                    this.$refs = {}; // child vm references
                    this.$els = {}; // element references
                    this._watchers = []; // all watchers as an array
                    this._directives = []; // all directives

                    // a uid
                    this._uid = uid++;

                    // a flag to avoid this being observed
                    this._isVue = true;

                    // events bookkeeping
                    this._events = {}; // registered callbacks
                    this._eventsCount = {}; // for $broadcast optimization

                    // fragment instance properties
                    this._isFragment = false;
                    this._fragment = // @type {DocumentFragment}
                        this._fragmentStart = // @type {Text|Comment}
                            this._fragmentEnd = null; // @type {Text|Comment}

                    // lifecycle state
                    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = false;
                    this._unlinkFn = null;

                    // context:
                    // if this is a transcluded component, context
                    // will be the common parent vm of this instance
                    // and its host.
                    this._context = options._context || this.$parent;

                    // scope:
                    // if this is inside an inline v-for, the scope
                    // will be the intermediate scope created for this
                    // repeat fragment. this is used for linking props
                    // and container directives.
                    this._scope = options._scope;

                    // fragment:
                    // if this instance is compiled inside a Fragment, it
                    // needs to reigster itself as a child of that fragment
                    // for attach/detach to work properly.
                    this._frag = options._frag;
                    if (this._frag) {
                        this._frag.children.push(this);
                    }

                    // push self into parent / transclusion host
                    if (this.$parent) {
                        this.$parent.$children.push(this);
                    }

                    // save raw constructor data before merge
                    // so that we know which properties are provided at
                    // instantiation.
                    if (process.env.NODE_ENV !== 'production') {
                        this._runtimeData = options.data;
                    }

                    // merge options.
                    options = this.$options = mergeOptions(this.constructor.options, options, this);

                    // set ref
                    this._updateRef();

                    // initialize data as empty object.
                    // it will be filled up in _initScope().
                    this._data = {};

                    // call init hook
                    this._callHook('init');

                    // initialize data observation and scope inheritance.
                    this._initState();

                    // setup event system and option events.
                    this._initEvents();

                    // call created hook
                    this._callHook('created');

                    // if `el` option is passed, start compilation.
                    if (options.el) {
                        this.$mount(options.el);
                    }
                };
            }

            var pathCache = new Cache(1000);

// actions
            var APPEND = 0;
            var PUSH = 1;
            var INC_SUB_PATH_DEPTH = 2;
            var PUSH_SUB_PATH = 3;

// states
            var BEFORE_PATH = 0;
            var IN_PATH = 1;
            var BEFORE_IDENT = 2;
            var IN_IDENT = 3;
            var IN_SUB_PATH = 4;
            var IN_SINGLE_QUOTE = 5;
            var IN_DOUBLE_QUOTE = 6;
            var AFTER_PATH = 7;
            var ERROR = 8;

            var pathStateMachine = [];

            pathStateMachine[BEFORE_PATH] = {
                'ws': [BEFORE_PATH],
                'ident': [IN_IDENT, APPEND],
                '[': [IN_SUB_PATH],
                'eof': [AFTER_PATH]
            };

            pathStateMachine[IN_PATH] = {
                'ws': [IN_PATH],
                '.': [BEFORE_IDENT],
                '[': [IN_SUB_PATH],
                'eof': [AFTER_PATH]
            };

            pathStateMachine[BEFORE_IDENT] = {
                'ws': [BEFORE_IDENT],
                'ident': [IN_IDENT, APPEND]
            };

            pathStateMachine[IN_IDENT] = {
                'ident': [IN_IDENT, APPEND],
                '0': [IN_IDENT, APPEND],
                'number': [IN_IDENT, APPEND],
                'ws': [IN_PATH, PUSH],
                '.': [BEFORE_IDENT, PUSH],
                '[': [IN_SUB_PATH, PUSH],
                'eof': [AFTER_PATH, PUSH]
            };

            pathStateMachine[IN_SUB_PATH] = {
                "'": [IN_SINGLE_QUOTE, APPEND],
                '"': [IN_DOUBLE_QUOTE, APPEND],
                '[': [IN_SUB_PATH, INC_SUB_PATH_DEPTH],
                ']': [IN_PATH, PUSH_SUB_PATH],
                'eof': ERROR,
                'else': [IN_SUB_PATH, APPEND]
            };

            pathStateMachine[IN_SINGLE_QUOTE] = {
                "'": [IN_SUB_PATH, APPEND],
                'eof': ERROR,
                'else': [IN_SINGLE_QUOTE, APPEND]
            };

            pathStateMachine[IN_DOUBLE_QUOTE] = {
                '"': [IN_SUB_PATH, APPEND],
                'eof': ERROR,
                'else': [IN_DOUBLE_QUOTE, APPEND]
            };

            /**
             * Determine the type of a character in a keypath.
             *
             * @param {Char} ch
             * @return {String} type
             */

            function getPathCharType(ch) {
                if (ch === undefined) {
                    return 'eof';
                }

                var code = ch.charCodeAt(0);

                switch (code) {
                    case 0x5B: // [
                    case 0x5D: // ]
                    case 0x2E: // .
                    case 0x22: // "
                    case 0x27: // '
                    case 0x30:
                        // 0
                        return ch;

                    case 0x5F: // _
                    case 0x24:
                        // $
                        return 'ident';

                    case 0x20: // Space
                    case 0x09: // Tab
                    case 0x0A: // Newline
                    case 0x0D: // Return
                    case 0xA0: // No-break space
                    case 0xFEFF: // Byte Order Mark
                    case 0x2028: // Line Separator
                    case 0x2029:
                        // Paragraph Separator
                        return 'ws';
                }

                // a-z, A-Z
                if (code >= 0x61 && code <= 0x7A || code >= 0x41 && code <= 0x5A) {
                    return 'ident';
                }

                // 1-9
                if (code >= 0x31 && code <= 0x39) {
                    return 'number';
                }

                return 'else';
            }

            /**
             * Format a subPath, return its plain form if it is
             * a literal string or number. Otherwise prepend the
             * dynamic indicator (*).
             *
             * @param {String} path
             * @return {String}
             */

            function formatSubPath(path) {
                var trimmed = path.trim();
                // invalid leading 0
                if (path.charAt(0) === '0' && isNaN(path)) {
                    return false;
                }
                return isLiteral(trimmed) ? stripQuotes(trimmed) : '*' + trimmed;
            }

            /**
             * Parse a string path into an array of segments
             *
             * @param {String} path
             * @return {Array|undefined}
             */

            function parse(path) {
                var keys = [];
                var index = -1;
                var mode = BEFORE_PATH;
                var subPathDepth = 0;
                var c, newChar, key, type, transition, action, typeMap;

                var actions = [];

                actions[PUSH] = function () {
                    if (key !== undefined) {
                        keys.push(key);
                        key = undefined;
                    }
                };

                actions[APPEND] = function () {
                    if (key === undefined) {
                        key = newChar;
                    } else {
                        key += newChar;
                    }
                };

                actions[INC_SUB_PATH_DEPTH] = function () {
                    actions[APPEND]();
                    subPathDepth++;
                };

                actions[PUSH_SUB_PATH] = function () {
                    if (subPathDepth > 0) {
                        subPathDepth--;
                        mode = IN_SUB_PATH;
                        actions[APPEND]();
                    } else {
                        subPathDepth = 0;
                        key = formatSubPath(key);
                        if (key === false) {
                            return false;
                        } else {
                            actions[PUSH]();
                        }
                    }
                };

                function maybeUnescapeQuote() {
                    var nextChar = path[index + 1];
                    if (mode === IN_SINGLE_QUOTE && nextChar === "'" || mode === IN_DOUBLE_QUOTE && nextChar === '"') {
                        index++;
                        newChar = '\\' + nextChar;
                        actions[APPEND]();
                        return true;
                    }
                }

                while (mode != null) {
                    index++;
                    c = path[index];

                    if (c === '\\' && maybeUnescapeQuote()) {
                        continue;
                    }

                    type = getPathCharType(c);
                    typeMap = pathStateMachine[mode];
                    transition = typeMap[type] || typeMap['else'] || ERROR;

                    if (transition === ERROR) {
                        return; // parse error
                    }

                    mode = transition[0];
                    action = actions[transition[1]];
                    if (action) {
                        newChar = transition[2];
                        newChar = newChar === undefined ? c : newChar;
                        if (action() === false) {
                            return;
                        }
                    }

                    if (mode === AFTER_PATH) {
                        keys.raw = path;
                        return keys;
                    }
                }
            }

            /**
             * External parse that check for a cache hit first
             *
             * @param {String} path
             * @return {Array|undefined}
             */

            function parsePath(path) {
                var hit = pathCache.get(path);
                if (!hit) {
                    hit = parse(path);
                    if (hit) {
                        pathCache.put(path, hit);
                    }
                }
                return hit;
            }

            /**
             * Get from an object from a path string
             *
             * @param {Object} obj
             * @param {String} path
             */

            function getPath(obj, path) {
                return parseExpression(path).get(obj);
            }

            /**
             * Warn against setting non-existent root path on a vm.
             */

            var warnNonExistent;
            if (process.env.NODE_ENV !== 'production') {
                warnNonExistent = function (path) {
                    warn('You are setting a non-existent path "' + path.raw + '" ' + 'on a vm instance. Consider pre-initializing the property ' + 'with the "data" option for more reliable reactivity ' + 'and better performance.');
                };
            }

            /**
             * Set on an object from a path
             *
             * @param {Object} obj
             * @param {String | Array} path
             * @param {*} val
             */

            function setPath(obj, path, val) {
                var original = obj;
                if (typeof path === 'string') {
                    path = parse(path);
                }
                if (!path || !isObject(obj)) {
                    return false;
                }
                var last, key;
                for (var i = 0, l = path.length; i < l; i++) {
                    last = obj;
                    key = path[i];
                    if (key.charAt(0) === '*') {
                        key = parseExpression(key.slice(1)).get.call(original, original);
                    }
                    if (i < l - 1) {
                        obj = obj[key];
                        if (!isObject(obj)) {
                            obj = {};
                            if (process.env.NODE_ENV !== 'production' && last._isVue) {
                                warnNonExistent(path);
                            }
                            set(last, key, obj);
                        }
                    } else {
                        if (isArray(obj)) {
                            obj.$set(key, val);
                        } else if (key in obj) {
                            obj[key] = val;
                        } else {
                            if (process.env.NODE_ENV !== 'production' && obj._isVue) {
                                warnNonExistent(path);
                            }
                            set(obj, key, val);
                        }
                    }
                }
                return true;
            }

            var path = Object.freeze({
                parsePath: parsePath,
                getPath: getPath,
                setPath: setPath
            });

            var expressionCache = new Cache(1000);

            var allowedKeywords = 'Math,Date,this,true,false,null,undefined,Infinity,NaN,' + 'isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,' + 'encodeURIComponent,parseInt,parseFloat';
            var allowedKeywordsRE = new RegExp('^(' + allowedKeywords.replace(/,/g, '\\b|') + '\\b)');

// keywords that don't make sense inside expressions
            var improperKeywords = 'break,case,class,catch,const,continue,debugger,default,' + 'delete,do,else,export,extends,finally,for,function,if,' + 'import,in,instanceof,let,return,super,switch,throw,try,' + 'var,while,with,yield,enum,await,implements,package,' + 'proctected,static,interface,private,public';
            var improperKeywordsRE = new RegExp('^(' + improperKeywords.replace(/,/g, '\\b|') + '\\b)');

            var wsRE = /\s/g;
            var newlineRE = /\n/g;
            var saveRE = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*")|new |typeof |void /g;
            var restoreRE = /"(\d+)"/g;
            var pathTestRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/;
            var identRE = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g;
            var booleanLiteralRE = /^(?:true|false)$/;

            /**
             * Save / Rewrite / Restore
             *
             * When rewriting paths found in an expression, it is
             * possible for the same letter sequences to be found in
             * strings and Object literal property keys. Therefore we
             * remove and store these parts in a temporary array, and
             * restore them after the path rewrite.
             */

            var saved = [];

            /**
             * Save replacer
             *
             * The save regex can match two possible cases:
             * 1. An opening object literal
             * 2. A string
             * If matched as a plain string, we need to escape its
             * newlines, since the string needs to be preserved when
             * generating the function body.
             *
             * @param {String} str
             * @param {String} isString - str if matched as a string
             * @return {String} - placeholder with index
             */

            function save(str, isString) {
                var i = saved.length;
                saved[i] = isString ? str.replace(newlineRE, '\\n') : str;
                return '"' + i + '"';
            }

            /**
             * Path rewrite replacer
             *
             * @param {String} raw
             * @return {String}
             */

            function rewrite(raw) {
                var c = raw.charAt(0);
                var path = raw.slice(1);
                if (allowedKeywordsRE.test(path)) {
                    return raw;
                } else {
                    path = path.indexOf('"') > -1 ? path.replace(restoreRE, restore) : path;
                    return c + 'scope.' + path;
                }
            }

            /**
             * Restore replacer
             *
             * @param {String} str
             * @param {String} i - matched save index
             * @return {String}
             */

            function restore(str, i) {
                return saved[i];
            }

            /**
             * Rewrite an expression, prefixing all path accessors with
             * `scope.` and generate getter/setter functions.
             *
             * @param {String} exp
             * @return {Function}
             */

            function compileGetter(exp) {
                if (improperKeywordsRE.test(exp)) {
                    process.env.NODE_ENV !== 'production' && warn('Avoid using reserved keywords in expression: ' + exp);
                }
                // reset state
                saved.length = 0;
                // save strings and object literal keys
                var body = exp.replace(saveRE, save).replace(wsRE, '');
                // rewrite all paths
                // pad 1 space here becaue the regex matches 1 extra char
                body = (' ' + body).replace(identRE, rewrite).replace(restoreRE, restore);
                return makeGetterFn(body);
            }

            /**
             * Build a getter function. Requires eval.
             *
             * We isolate the try/catch so it doesn't affect the
             * optimization of the parse function when it is not called.
             *
             * @param {String} body
             * @return {Function|undefined}
             */

            function makeGetterFn(body) {
                try {
                    return new Function('scope', 'return ' + body + ';');
                } catch (e) {
                    process.env.NODE_ENV !== 'production' && warn('Invalid expression. ' + 'Generated function body: ' + body);
                }
            }

            /**
             * Compile a setter function for the expression.
             *
             * @param {String} exp
             * @return {Function|undefined}
             */

            function compileSetter(exp) {
                var path = parsePath(exp);
                if (path) {
                    return function (scope, val) {
                        setPath(scope, path, val);
                    };
                } else {
                    process.env.NODE_ENV !== 'production' && warn('Invalid setter expression: ' + exp);
                }
            }

            /**
             * Parse an expression into re-written getter/setters.
             *
             * @param {String} exp
             * @param {Boolean} needSet
             * @return {Function}
             */

            function parseExpression(exp, needSet) {
                exp = exp.trim();
                // try cache
                var hit = expressionCache.get(exp);
                if (hit) {
                    if (needSet && !hit.set) {
                        hit.set = compileSetter(hit.exp);
                    }
                    return hit;
                }
                var res = {exp: exp};
                res.get = isSimplePath(exp) && exp.indexOf('[') < 0
                    // optimized super simple getter
                    ? makeGetterFn('scope.' + exp)
                    // dynamic getter
                    : compileGetter(exp);
                if (needSet) {
                    res.set = compileSetter(exp);
                }
                expressionCache.put(exp, res);
                return res;
            }

            /**
             * Check if an expression is a simple path.
             *
             * @param {String} exp
             * @return {Boolean}
             */

            function isSimplePath(exp) {
                return pathTestRE.test(exp) &&
                        // don't treat true/false as paths
                    !booleanLiteralRE.test(exp) &&
                        // Math constants e.g. Math.PI, Math.E etc.
                    exp.slice(0, 5) !== 'Math.';
            }

            var expression = Object.freeze({
                parseExpression: parseExpression,
                isSimplePath: isSimplePath
            });

// we have two separate queues: one for directive updates
// and one for user watcher registered via $watch().
// we want to guarantee directive updates to be called
// before user watchers so that when user watchers are
// triggered, the DOM would have already been in updated
// state.
            var queue = [];
            var userQueue = [];
            var has = {};
            var circular = {};
            var waiting = false;
            var internalQueueDepleted = false;

            /**
             * Reset the batcher's state.
             */

            function resetBatcherState() {
                queue = [];
                userQueue = [];
                has = {};
                circular = {};
                waiting = internalQueueDepleted = false;
            }

            /**
             * Flush both queues and run the watchers.
             */

            function flushBatcherQueue() {
                runBatcherQueue(queue);
                internalQueueDepleted = true;
                runBatcherQueue(userQueue);
                // dev tool hook
                /* istanbul ignore if */
                if (devtools) {
                    devtools.emit('flush');
                }
                resetBatcherState();
            }

            /**
             * Run the watchers in a single queue.
             *
             * @param {Array} queue
             */

            function runBatcherQueue(queue) {
                // do not cache length because more watchers might be pushed
                // as we run existing watchers
                for (var i = 0; i < queue.length; i++) {
                    var watcher = queue[i];
                    var id = watcher.id;
                    has[id] = null;
                    watcher.run();
                    // in dev build, check and stop circular updates.
                    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
                        circular[id] = (circular[id] || 0) + 1;
                        if (circular[id] > config._maxUpdateCount) {
                            queue.splice(has[id], 1);
                            warn('You may have an infinite update loop for watcher ' + 'with expression: ' + watcher.expression);
                        }
                    }
                }
            }

            /**
             * Push a watcher into the watcher queue.
             * Jobs with duplicate IDs will be skipped unless it's
             * pushed when the queue is being flushed.
             *
             * @param {Watcher} watcher
             *   properties:
             *   - {Number} id
             *   - {Function} run
             */

            function pushWatcher(watcher) {
                var id = watcher.id;
                if (has[id] == null) {
                    // if an internal watcher is pushed, but the internal
                    // queue is already depleted, we run it immediately.
                    if (internalQueueDepleted && !watcher.user) {
                        watcher.run();
                        return;
                    }
                    // push watcher into appropriate queue
                    var q = watcher.user ? userQueue : queue;
                    has[id] = q.length;
                    q.push(watcher);
                    // queue the flush
                    if (!waiting) {
                        waiting = true;
                        nextTick(flushBatcherQueue);
                    }
                }
            }

            var uid$2 = 0;

            /**
             * A watcher parses an expression, collects dependencies,
             * and fires callback when the expression value changes.
             * This is used for both the $watch() api and directives.
             *
             * @param {Vue} vm
             * @param {String} expression
             * @param {Function} cb
             * @param {Object} options
             *                 - {Array} filters
             *                 - {Boolean} twoWay
             *                 - {Boolean} deep
             *                 - {Boolean} user
             *                 - {Boolean} sync
             *                 - {Boolean} lazy
             *                 - {Function} [preProcess]
             *                 - {Function} [postProcess]
             * @constructor
             */
            function Watcher(vm, expOrFn, cb, options) {
                // mix in options
                if (options) {
                    extend(this, options);
                }
                var isFn = typeof expOrFn === 'function';
                this.vm = vm;
                vm._watchers.push(this);
                this.expression = isFn ? expOrFn.toString() : expOrFn;
                this.cb = cb;
                this.id = ++uid$2; // uid for batching
                this.active = true;
                this.dirty = this.lazy; // for lazy watchers
                this.deps = Object.create(null);
                this.newDeps = null;
                this.prevError = null; // for async error stacks
                // parse expression for getter/setter
                if (isFn) {
                    this.getter = expOrFn;
                    this.setter = undefined;
                } else {
                    var res = parseExpression(expOrFn, this.twoWay);
                    this.getter = res.get;
                    this.setter = res.set;
                }
                this.value = this.lazy ? undefined : this.get();
                // state for avoiding false triggers for deep and Array
                // watchers during vm._digest()
                this.queued = this.shallow = false;
            }

            /**
             * Add a dependency to this directive.
             *
             * @param {Dep} dep
             */

            Watcher.prototype.addDep = function (dep) {
                var id = dep.id;
                if (!this.newDeps[id]) {
                    this.newDeps[id] = dep;
                    if (!this.deps[id]) {
                        this.deps[id] = dep;
                        dep.addSub(this);
                    }
                }
            };

            /**
             * Evaluate the getter, and re-collect dependencies.
             */

            Watcher.prototype.get = function () {
                this.beforeGet();
                var scope = this.scope || this.vm;
                var value;
                try {
                    value = this.getter.call(scope, scope);
                } catch (e) {
                    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
                        warn('Error when evaluating expression "' + this.expression + '". ' + (config.debug ? '' : 'Turn on debug mode to see stack trace.'), e);
                    }
                }
                // "touch" every property so they are all tracked as
                // dependencies for deep watching
                if (this.deep) {
                    traverse(value);
                }
                if (this.preProcess) {
                    value = this.preProcess(value);
                }
                if (this.filters) {
                    value = scope._applyFilters(value, null, this.filters, false);
                }
                if (this.postProcess) {
                    value = this.postProcess(value);
                }
                this.afterGet();
                return value;
            };

            /**
             * Set the corresponding value with the setter.
             *
             * @param {*} value
             */

            Watcher.prototype.set = function (value) {
                var scope = this.scope || this.vm;
                if (this.filters) {
                    value = scope._applyFilters(value, this.value, this.filters, true);
                }
                try {
                    this.setter.call(scope, scope, value);
                } catch (e) {
                    if (process.env.NODE_ENV !== 'production' && config.warnExpressionErrors) {
                        warn('Error when evaluating setter "' + this.expression + '"', e);
                    }
                }
                // two-way sync for v-for alias
                var forContext = scope.$forContext;
                if (forContext && forContext.alias === this.expression) {
                    if (forContext.filters) {
                        process.env.NODE_ENV !== 'production' && warn('It seems you are using two-way binding on ' + 'a v-for alias (' + this.expression + '), and the ' + 'v-for has filters. This will not work properly. ' + 'Either remove the filters or use an array of ' + 'objects and bind to object properties instead.');
                        return;
                    }
                    forContext._withLock(function () {
                        if (scope.$key) {
                            // original is an object
                            forContext.rawValue[scope.$key] = value;
                        } else {
                            forContext.rawValue.$set(scope.$index, value);
                        }
                    });
                }
            };

            /**
             * Prepare for dependency collection.
             */

            Watcher.prototype.beforeGet = function () {
                Dep.target = this;
                this.newDeps = Object.create(null);
            };

            /**
             * Clean up for dependency collection.
             */

            Watcher.prototype.afterGet = function () {
                Dep.target = null;
                var ids = Object.keys(this.deps);
                var i = ids.length;
                while (i--) {
                    var id = ids[i];
                    if (!this.newDeps[id]) {
                        this.deps[id].removeSub(this);
                    }
                }
                this.deps = this.newDeps;
            };

            /**
             * Subscriber interface.
             * Will be called when a dependency changes.
             *
             * @param {Boolean} shallow
             */

            Watcher.prototype.update = function (shallow) {
                if (this.lazy) {
                    this.dirty = true;
                } else if (this.sync || !config.async) {
                    this.run();
                } else {
                    // if queued, only overwrite shallow with non-shallow,
                    // but not the other way around.
                    this.shallow = this.queued ? shallow ? this.shallow : false : !!shallow;
                    this.queued = true;
                    // record before-push error stack in debug mode
                    /* istanbul ignore if */
                    if (process.env.NODE_ENV !== 'production' && config.debug) {
                        this.prevError = new Error('[vue] async stack trace');
                    }
                    pushWatcher(this);
                }
            };

            /**
             * Batcher job interface.
             * Will be called by the batcher.
             */

            Watcher.prototype.run = function () {
                if (this.active) {
                    var value = this.get();
                    if (value !== this.value ||
                            // Deep watchers and watchers on Object/Arrays should fire even
                            // when the value is the same, because the value may
                            // have mutated; but only do so if this is a
                            // non-shallow update (caused by a vm digest).
                        (isObject(value) || this.deep) && !this.shallow) {
                        // set new value
                        var oldValue = this.value;
                        this.value = value;
                        // in debug + async mode, when a watcher callbacks
                        // throws, we also throw the saved before-push error
                        // so the full cross-tick stack trace is available.
                        var prevError = this.prevError;
                        /* istanbul ignore if */
                        if (process.env.NODE_ENV !== 'production' && config.debug && prevError) {
                            this.prevError = null;
                            try {
                                this.cb.call(this.vm, value, oldValue);
                            } catch (e) {
                                nextTick(function () {
                                    throw prevError;
                                }, 0);
                                throw e;
                            }
                        } else {
                            this.cb.call(this.vm, value, oldValue);
                        }
                    }
                    this.queued = this.shallow = false;
                }
            };

            /**
             * Evaluate the value of the watcher.
             * This only gets called for lazy watchers.
             */

            Watcher.prototype.evaluate = function () {
                // avoid overwriting another watcher that is being
                // collected.
                var current = Dep.target;
                this.value = this.get();
                this.dirty = false;
                Dep.target = current;
            };

            /**
             * Depend on all deps collected by this watcher.
             */

            Watcher.prototype.depend = function () {
                var depIds = Object.keys(this.deps);
                var i = depIds.length;
                while (i--) {
                    this.deps[depIds[i]].depend();
                }
            };

            /**
             * Remove self from all dependencies' subcriber list.
             */

            Watcher.prototype.teardown = function () {
                if (this.active) {
                    // remove self from vm's watcher list
                    // this is a somewhat expensive operation so we skip it
                    // if the vm is being destroyed or is performing a v-for
                    // re-render (the watcher list is then filtered by v-for).
                    if (!this.vm._isBeingDestroyed && !this.vm._vForRemoving) {
                        this.vm._watchers.$remove(this);
                    }
                    var depIds = Object.keys(this.deps);
                    var i = depIds.length;
                    while (i--) {
                        this.deps[depIds[i]].removeSub(this);
                    }
                    this.active = false;
                    this.vm = this.cb = this.value = null;
                }
            };

            /**
             * Recrusively traverse an object to evoke all converted
             * getters, so that every nested property inside the object
             * is collected as a "deep" dependency.
             *
             * @param {*} val
             */

            function traverse(val) {
                var i, keys;
                if (isArray(val)) {
                    i = val.length;
                    while (i--) traverse(val[i]);
                } else if (isObject(val)) {
                    keys = Object.keys(val);
                    i = keys.length;
                    while (i--) traverse(val[keys[i]]);
                }
            }

            var cloak = {
                bind: function bind() {
                    var el = this.el;
                    this.vm.$once('pre-hook:compiled', function () {
                        el.removeAttribute('v-cloak');
                    });
                }
            };

            var ref = {
                bind: function bind() {
                    process.env.NODE_ENV !== 'production' && warn('v-ref:' + this.arg + ' must be used on a child ' + 'component. Found on <' + this.el.tagName.toLowerCase() + '>.');
                }
            };

            var ON = 700;
            var MODEL = 800;
            var BIND = 850;
            var TRANSITION = 1100;
            var EL = 1500;
            var COMPONENT = 1500;
            var PARTIAL = 1750;
            var FOR = 2000;
            var IF = 2000;
            var SLOT = 2100;

            var el = {

                priority: EL,

                bind: function bind() {
                    /* istanbul ignore if */
                    if (!this.arg) {
                        return;
                    }
                    var id = this.id = camelize(this.arg);
                    var refs = (this._scope || this.vm).$els;
                    if (hasOwn(refs, id)) {
                        refs[id] = this.el;
                    } else {
                        defineReactive(refs, id, this.el);
                    }
                },

                unbind: function unbind() {
                    var refs = (this._scope || this.vm).$els;
                    if (refs[this.id] === this.el) {
                        refs[this.id] = null;
                    }
                }
            };

            var prefixes = ['-webkit-', '-moz-', '-ms-'];
            var camelPrefixes = ['Webkit', 'Moz', 'ms'];
            var importantRE = /!important;?$/;
            var propCache = Object.create(null);

            var testEl = null;

            var style = {

                deep: true,

                update: function update(value) {
                    if (typeof value === 'string') {
                        this.el.style.cssText = value;
                    } else if (isArray(value)) {
                        this.handleObject(value.reduce(extend, {}));
                    } else {
                        this.handleObject(value || {});
                    }
                },

                handleObject: function handleObject(value) {
                    // cache object styles so that only changed props
                    // are actually updated.
                    var cache = this.cache || (this.cache = {});
                    var name, val;
                    for (name in cache) {
                        if (!(name in value)) {
                            this.handleSingle(name, null);
                            delete cache[name];
                        }
                    }
                    for (name in value) {
                        val = value[name];
                        if (val !== cache[name]) {
                            cache[name] = val;
                            this.handleSingle(name, val);
                        }
                    }
                },

                handleSingle: function handleSingle(prop, value) {
                    prop = normalize(prop);
                    if (!prop) return; // unsupported prop
                    // cast possible numbers/booleans into strings
                    if (value != null) value += '';
                    if (value) {
                        var isImportant = importantRE.test(value) ? 'important' : '';
                        if (isImportant) {
                            value = value.replace(importantRE, '').trim();
                        }
                        this.el.style.setProperty(prop, value, isImportant);
                    } else {
                        this.el.style.removeProperty(prop);
                    }
                }

            };

            /**
             * Normalize a CSS property name.
             * - cache result
             * - auto prefix
             * - camelCase -> dash-case
             *
             * @param {String} prop
             * @return {String}
             */

            function normalize(prop) {
                if (propCache[prop]) {
                    return propCache[prop];
                }
                var res = prefix(prop);
                propCache[prop] = propCache[res] = res;
                return res;
            }

            /**
             * Auto detect the appropriate prefix for a CSS property.
             * https://gist.github.com/paulirish/523692
             *
             * @param {String} prop
             * @return {String}
             */

            function prefix(prop) {
                prop = hyphenate(prop);
                var camel = camelize(prop);
                var upper = camel.charAt(0).toUpperCase() + camel.slice(1);
                if (!testEl) {
                    testEl = document.createElement('div');
                }
                var i = prefixes.length;
                var prefixed;
                while (i--) {
                    prefixed = camelPrefixes[i] + upper;
                    if (prefixed in testEl.style) {
                        return prefixes[i] + prop;
                    }
                }
                if (camel in testEl.style) {
                    return prop;
                }
            }

// xlink
            var xlinkNS = 'http://www.w3.org/1999/xlink';
            var xlinkRE = /^xlink:/;

// check for attributes that prohibit interpolations
            var disallowedInterpAttrRE = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/;
// these attributes should also set their corresponding properties
// because they only affect the initial state of the element
            var attrWithPropsRE = /^(?:value|checked|selected|muted)$/;

// these attributes should set a hidden property for
// binding v-model to object values
            var modelProps = {
                value: '_value',
                'true-value': '_trueValue',
                'false-value': '_falseValue'
            };

            var bind = {

                priority: BIND,

                bind: function bind() {
                    var attr = this.arg;
                    var tag = this.el.tagName;
                    // should be deep watch on object mode
                    if (!attr) {
                        this.deep = true;
                    }
                    // handle interpolation bindings
                    var descriptor = this.descriptor;
                    var tokens = descriptor.interp;
                    if (tokens) {
                        // handle interpolations with one-time tokens
                        if (descriptor.hasOneTime) {
                            this.expression = tokensToExp(tokens, this._scope || this.vm);
                        }

                        // only allow binding on native attributes
                        if (disallowedInterpAttrRE.test(attr) || attr === 'name' && (tag === 'PARTIAL' || tag === 'SLOT')) {
                            process.env.NODE_ENV !== 'production' && warn(attr + '="' + descriptor.raw + '": ' + 'attribute interpolation is not allowed in Vue.js ' + 'directives and special attributes.');
                            this.el.removeAttribute(attr);
                            this.invalid = true;
                        }

                        /* istanbul ignore if */
                        if (process.env.NODE_ENV !== 'production') {
                            var raw = attr + '="' + descriptor.raw + '": ';
                            // warn src
                            if (attr === 'src') {
                                warn(raw + 'interpolation in "src" attribute will cause ' + 'a 404 request. Use v-bind:src instead.');
                            }

                            // warn style
                            if (attr === 'style') {
                                warn(raw + 'interpolation in "style" attribute will cause ' + 'the attribute to be discarded in Internet Explorer. ' + 'Use v-bind:style instead.');
                            }
                        }
                    }
                },

                update: function update(value) {
                    if (this.invalid) {
                        return;
                    }
                    var attr = this.arg;
                    if (this.arg) {
                        this.handleSingle(attr, value);
                    } else {
                        this.handleObject(value || {});
                    }
                },

                // share object handler with v-bind:class
                handleObject: style.handleObject,

                handleSingle: function handleSingle(attr, value) {
                    var el = this.el;
                    var interp = this.descriptor.interp;
                    if (this.modifiers.camel) {
                        attr = camelize(attr);
                    }
                    if (!interp && attrWithPropsRE.test(attr) && attr in el) {
                        el[attr] = attr === 'value' ? value == null // IE9 will set input.value to "null" for null...
                            ? '' : value : value;
                    }
                    // set model props
                    var modelProp = modelProps[attr];
                    if (!interp && modelProp) {
                        el[modelProp] = value;
                        // update v-model if present
                        var model = el.__v_model;
                        if (model) {
                            model.listener();
                        }
                    }
                    // do not set value attribute for textarea
                    if (attr === 'value' && el.tagName === 'TEXTAREA') {
                        el.removeAttribute(attr);
                        return;
                    }
                    // update attribute
                    if (value != null && value !== false) {
                        if (attr === 'class') {
                            // handle edge case #1960:
                            // class interpolation should not overwrite Vue transition class
                            if (el.__v_trans) {
                                value += ' ' + el.__v_trans.id + '-transition';
                            }
                            setClass(el, value);
                        } else if (xlinkRE.test(attr)) {
                            el.setAttributeNS(xlinkNS, attr, value === true ? '' : value);
                        } else {
                            el.setAttribute(attr, value === true ? '' : value);
                        }
                    } else {
                        el.removeAttribute(attr);
                    }
                }
            };

// keyCode aliases
            var keyCodes = {
                esc: 27,
                tab: 9,
                enter: 13,
                space: 32,
                'delete': [8, 46],
                up: 38,
                left: 37,
                right: 39,
                down: 40
            };

            function keyFilter(handler, keys) {
                var codes = keys.map(function (key) {
                    var charCode = key.charCodeAt(0);
                    if (charCode > 47 && charCode < 58) {
                        return parseInt(key, 10);
                    }
                    if (key.length === 1) {
                        charCode = key.toUpperCase().charCodeAt(0);
                        if (charCode > 64 && charCode < 91) {
                            return charCode;
                        }
                    }
                    return keyCodes[key];
                });
                codes = [].concat.apply([], codes);
                return function keyHandler(e) {
                    if (codes.indexOf(e.keyCode) > -1) {
                        return handler.call(this, e);
                    }
                };
            }

            function stopFilter(handler) {
                return function stopHandler(e) {
                    e.stopPropagation();
                    return handler.call(this, e);
                };
            }

            function preventFilter(handler) {
                return function preventHandler(e) {
                    e.preventDefault();
                    return handler.call(this, e);
                };
            }

            function selfFilter(handler) {
                return function selfHandler(e) {
                    if (e.target === e.currentTarget) {
                        return handler.call(this, e);
                    }
                };
            }

            var on = {

                acceptStatement: true,
                priority: ON,

                bind: function bind() {
                    // deal with iframes
                    if (this.el.tagName === 'IFRAME' && this.arg !== 'load') {
                        var self = this;
                        this.iframeBind = function () {
                            on$1(self.el.contentWindow, self.arg, self.handler, self.modifiers.capture);
                        };
                        this.on('load', this.iframeBind);
                    }
                },

                update: function update(handler) {
                    // stub a noop for v-on with no value,
                    // e.g. @mousedown.prevent
                    if (!this.descriptor.raw) {
                        handler = function () {
                        };
                    }

                    if (typeof handler !== 'function') {
                        process.env.NODE_ENV !== 'production' && warn('v-on:' + this.arg + '="' + this.expression + '" expects a function value, ' + 'got ' + handler);
                        return;
                    }

                    // apply modifiers
                    if (this.modifiers.stop) {
                        handler = stopFilter(handler);
                    }
                    if (this.modifiers.prevent) {
                        handler = preventFilter(handler);
                    }
                    if (this.modifiers.self) {
                        handler = selfFilter(handler);
                    }
                    // key filter
                    var keys = Object.keys(this.modifiers).filter(function (key) {
                        return key !== 'stop' && key !== 'prevent';
                    });
                    if (keys.length) {
                        handler = keyFilter(handler, keys);
                    }

                    this.reset();
                    this.handler = handler;

                    if (this.iframeBind) {
                        this.iframeBind();
                    } else {
                        on$1(this.el, this.arg, this.handler, this.modifiers.capture);
                    }
                },

                reset: function reset() {
                    var el = this.iframeBind ? this.el.contentWindow : this.el;
                    if (this.handler) {
                        off(el, this.arg, this.handler);
                    }
                },

                unbind: function unbind() {
                    this.reset();
                }
            };

            var checkbox = {

                bind: function bind() {
                    var self = this;
                    var el = this.el;

                    this.getValue = function () {
                        return el.hasOwnProperty('_value') ? el._value : self.params.number ? toNumber(el.value) : el.value;
                    };

                    function getBooleanValue() {
                        var val = el.checked;
                        if (val && el.hasOwnProperty('_trueValue')) {
                            return el._trueValue;
                        }
                        if (!val && el.hasOwnProperty('_falseValue')) {
                            return el._falseValue;
                        }
                        return val;
                    }

                    this.listener = function () {
                        var model = self._watcher.value;
                        if (isArray(model)) {
                            var val = self.getValue();
                            if (el.checked) {
                                if (indexOf(model, val) < 0) {
                                    model.push(val);
                                }
                            } else {
                                model.$remove(val);
                            }
                        } else {
                            self.set(getBooleanValue());
                        }
                    };

                    this.on('change', this.listener);
                    if (el.hasAttribute('checked')) {
                        this.afterBind = this.listener;
                    }
                },

                update: function update(value) {
                    var el = this.el;
                    if (isArray(value)) {
                        el.checked = indexOf(value, this.getValue()) > -1;
                    } else {
                        if (el.hasOwnProperty('_trueValue')) {
                            el.checked = looseEqual(value, el._trueValue);
                        } else {
                            el.checked = !!value;
                        }
                    }
                }
            };

            var select = {

                bind: function bind() {
                    var self = this;
                    var el = this.el;

                    // method to force update DOM using latest value.
                    this.forceUpdate = function () {
                        if (self._watcher) {
                            self.update(self._watcher.get());
                        }
                    };

                    // check if this is a multiple select
                    var multiple = this.multiple = el.hasAttribute('multiple');

                    // attach listener
                    this.listener = function () {
                        var value = getValue(el, multiple);
                        value = self.params.number ? isArray(value) ? value.map(toNumber) : toNumber(value) : value;
                        self.set(value);
                    };
                    this.on('change', this.listener);

                    // if has initial value, set afterBind
                    var initValue = getValue(el, multiple, true);
                    if (multiple && initValue.length || !multiple && initValue !== null) {
                        this.afterBind = this.listener;
                    }

                    // All major browsers except Firefox resets
                    // selectedIndex with value -1 to 0 when the element
                    // is appended to a new parent, therefore we have to
                    // force a DOM update whenever that happens...
                    this.vm.$on('hook:attached', this.forceUpdate);
                },

                update: function update(value) {
                    var el = this.el;
                    el.selectedIndex = -1;
                    var multi = this.multiple && isArray(value);
                    var options = el.options;
                    var i = options.length;
                    var op, val;
                    while (i--) {
                        op = options[i];
                        val = op.hasOwnProperty('_value') ? op._value : op.value;
                        /* eslint-disable eqeqeq */
                        op.selected = multi ? indexOf$1(value, val) > -1 : looseEqual(value, val);
                        /* eslint-enable eqeqeq */
                    }
                },

                unbind: function unbind() {
                    /* istanbul ignore next */
                    this.vm.$off('hook:attached', this.forceUpdate);
                }
            };

            /**
             * Get select value
             *
             * @param {SelectElement} el
             * @param {Boolean} multi
             * @param {Boolean} init
             * @return {Array|*}
             */

            function getValue(el, multi, init) {
                var res = multi ? [] : null;
                var op, val, selected;
                for (var i = 0, l = el.options.length; i < l; i++) {
                    op = el.options[i];
                    selected = init ? op.hasAttribute('selected') : op.selected;
                    if (selected) {
                        val = op.hasOwnProperty('_value') ? op._value : op.value;
                        if (multi) {
                            res.push(val);
                        } else {
                            return val;
                        }
                    }
                }
                return res;
            }

            /**
             * Native Array.indexOf uses strict equal, but in this
             * case we need to match string/numbers with custom equal.
             *
             * @param {Array} arr
             * @param {*} val
             */

            function indexOf$1(arr, val) {
                var i = arr.length;
                while (i--) {
                    if (looseEqual(arr[i], val)) {
                        return i;
                    }
                }
                return -1;
            }

            var radio = {

                bind: function bind() {
                    var self = this;
                    var el = this.el;

                    this.getValue = function () {
                        // value overwrite via v-bind:value
                        if (el.hasOwnProperty('_value')) {
                            return el._value;
                        }
                        var val = el.value;
                        if (self.params.number) {
                            val = toNumber(val);
                        }
                        return val;
                    };

                    this.listener = function () {
                        self.set(self.getValue());
                    };
                    this.on('change', this.listener);

                    if (el.hasAttribute('checked')) {
                        this.afterBind = this.listener;
                    }
                },

                update: function update(value) {
                    this.el.checked = looseEqual(value, this.getValue());
                }
            };

            var text$2 = {

                bind: function bind() {
                    var self = this;
                    var el = this.el;
                    var isRange = el.type === 'range';
                    var lazy = this.params.lazy;
                    var number = this.params.number;
                    var debounce = this.params.debounce;

                    // handle composition events.
                    //   http://blog.evanyou.me/2014/01/03/composition-event/
                    // skip this for Android because it handles composition
                    // events quite differently. Android doesn't trigger
                    // composition events for language input methods e.g.
                    // Chinese, but instead triggers them for spelling
                    // suggestions... (see Discussion/#162)
                    var composing = false;
                    if (!isAndroid && !isRange) {
                        this.on('compositionstart', function () {
                            composing = true;
                        });
                        this.on('compositionend', function () {
                            composing = false;
                            // in IE11 the "compositionend" event fires AFTER
                            // the "input" event, so the input handler is blocked
                            // at the end... have to call it here.
                            //
                            // #1327: in lazy mode this is unecessary.
                            if (!lazy) {
                                self.listener();
                            }
                        });
                    }

                    // prevent messing with the input when user is typing,
                    // and force update on blur.
                    this.focused = false;
                    if (!isRange && !lazy) {
                        this.on('focus', function () {
                            self.focused = true;
                        });
                        this.on('blur', function () {
                            self.focused = false;
                            // do not sync value after fragment removal (#2017)
                            if (!self._frag || self._frag.inserted) {
                                self.rawListener();
                            }
                        });
                    }

                    // Now attach the main listener
                    this.listener = this.rawListener = function () {
                        if (composing || !self._bound) {
                            return;
                        }
                        var val = number || isRange ? toNumber(el.value) : el.value;
                        self.set(val);
                        // force update on next tick to avoid lock & same value
                        // also only update when user is not typing
                        nextTick(function () {
                            if (self._bound && !self.focused) {
                                self.update(self._watcher.value);
                            }
                        });
                    };

                    // apply debounce
                    if (debounce) {
                        this.listener = _debounce(this.listener, debounce);
                    }

                    // Support jQuery events, since jQuery.trigger() doesn't
                    // trigger native events in some cases and some plugins
                    // rely on $.trigger()
                    //
                    // We want to make sure if a listener is attached using
                    // jQuery, it is also removed with jQuery, that's why
                    // we do the check for each directive instance and
                    // store that check result on itself. This also allows
                    // easier test coverage control by unsetting the global
                    // jQuery variable in tests.
                    this.hasjQuery = typeof jQuery === 'function';
                    if (this.hasjQuery) {
                        var method = jQuery.fn.on ? 'on' : 'bind';
                        jQuery(el)[method]('change', this.listener);
                        if (!lazy) {
                            jQuery(el)[method]('input', this.listener);
                        }
                    } else {
                        this.on('change', this.listener);
                        if (!lazy) {
                            this.on('input', this.listener);
                        }
                    }

                    // IE9 doesn't fire input event on backspace/del/cut
                    if (!lazy && isIE9) {
                        this.on('cut', function () {
                            nextTick(self.listener);
                        });
                        this.on('keyup', function (e) {
                            if (e.keyCode === 46 || e.keyCode === 8) {
                                self.listener();
                            }
                        });
                    }

                    // set initial value if present
                    if (el.hasAttribute('value') || el.tagName === 'TEXTAREA' && el.value.trim()) {
                        this.afterBind = this.listener;
                    }
                },

                update: function update(value) {
                    this.el.value = _toString(value);
                },

                unbind: function unbind() {
                    var el = this.el;
                    if (this.hasjQuery) {
                        var method = jQuery.fn.off ? 'off' : 'unbind';
                        jQuery(el)[method]('change', this.listener);
                        jQuery(el)[method]('input', this.listener);
                    }
                }
            };

            var handlers = {
                text: text$2,
                radio: radio,
                select: select,
                checkbox: checkbox
            };

            var model = {

                priority: MODEL,
                twoWay: true,
                handlers: handlers,
                params: ['lazy', 'number', 'debounce'],

                /**
                 * Possible elements:
                 *   <select>
                 *   <textarea>
                 *   <input type="*">
                 *     - text
                 *     - checkbox
                 *     - radio
                 *     - number
                 */

                bind: function bind() {
                    // friendly warning...
                    this.checkFilters();
                    if (this.hasRead && !this.hasWrite) {
                        process.env.NODE_ENV !== 'production' && warn('It seems you are using a read-only filter with ' + 'v-model. You might want to use a two-way filter ' + 'to ensure correct behavior.');
                    }
                    var el = this.el;
                    var tag = el.tagName;
                    var handler;
                    if (tag === 'INPUT') {
                        handler = handlers[el.type] || handlers.text;
                    } else if (tag === 'SELECT') {
                        handler = handlers.select;
                    } else if (tag === 'TEXTAREA') {
                        handler = handlers.text;
                    } else {
                        process.env.NODE_ENV !== 'production' && warn('v-model does not support element type: ' + tag);
                        return;
                    }
                    el.__v_model = this;
                    handler.bind.call(this);
                    this.update = handler.update;
                    this._unbind = handler.unbind;
                },

                /**
                 * Check read/write filter stats.
                 */

                checkFilters: function checkFilters() {
                    var filters = this.filters;
                    if (!filters) return;
                    var i = filters.length;
                    while (i--) {
                        var filter = resolveAsset(this.vm.$options, 'filters', filters[i].name);
                        if (typeof filter === 'function' || filter.read) {
                            this.hasRead = true;
                        }
                        if (filter.write) {
                            this.hasWrite = true;
                        }
                    }
                },

                unbind: function unbind() {
                    this.el.__v_model = null;
                    this._unbind && this._unbind();
                }
            };

            var show = {

                bind: function bind() {
                    // check else block
                    var next = this.el.nextElementSibling;
                    if (next && getAttr(next, 'v-else') !== null) {
                        this.elseEl = next;
                    }
                },

                update: function update(value) {
                    this.apply(this.el, value);
                    if (this.elseEl) {
                        this.apply(this.elseEl, !value);
                    }
                },

                apply: function apply(el, value) {
                    if (inDoc(el)) {
                        applyTransition(el, value ? 1 : -1, toggle, this.vm);
                    } else {
                        toggle();
                    }
                    function toggle() {
                        el.style.display = value ? '' : 'none';
                    }
                }
            };

            var templateCache = new Cache(1000);
            var idSelectorCache = new Cache(1000);

            var map = {
                efault: [0, '', ''],
                legend: [1, '<fieldset>', '</fieldset>'],
                tr: [2, '<table><tbody>', '</tbody></table>'],
                col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>']
            };

            map.td = map.th = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

            map.option = map.optgroup = [1, '<select multiple="multiple">', '</select>'];

            map.thead = map.tbody = map.colgroup = map.caption = map.tfoot = [1, '<table>', '</table>'];

            map.g = map.defs = map.symbol = map.use = map.image = map.text = map.circle = map.ellipse = map.line = map.path = map.polygon = map.polyline = map.rect = [1, '<svg ' + 'xmlns="http://www.w3.org/2000/svg" ' + 'xmlns:xlink="http://www.w3.org/1999/xlink" ' + 'xmlns:ev="http://www.w3.org/2001/xml-events"' + 'version="1.1">', '</svg>'];

            /**
             * Check if a node is a supported template node with a
             * DocumentFragment content.
             *
             * @param {Node} node
             * @return {Boolean}
             */

            function isRealTemplate(node) {
                return isTemplate(node) && node.content instanceof DocumentFragment;
            }

            var tagRE$1 = /<([\w:]+)/;
            var entityRE = /&#?\w+?;/;

            /**
             * Convert a string template to a DocumentFragment.
             * Determines correct wrapping by tag types. Wrapping
             * strategy found in jQuery & component/domify.
             *
             * @param {String} templateString
             * @param {Boolean} raw
             * @return {DocumentFragment}
             */

            function stringToFragment(templateString, raw) {
                // try a cache hit first
                var cacheKey = raw ? templateString : templateString.trim();
                var hit = templateCache.get(cacheKey);
                if (hit) {
                    return hit;
                }

                var frag = document.createDocumentFragment();
                var tagMatch = templateString.match(tagRE$1);
                var entityMatch = entityRE.test(templateString);

                if (!tagMatch && !entityMatch) {
                    // text only, return a single text node.
                    frag.appendChild(document.createTextNode(templateString));
                } else {

                    var tag = tagMatch && tagMatch[1];
                    var wrap = map[tag] || map.efault;
                    var depth = wrap[0];
                    var prefix = wrap[1];
                    var suffix = wrap[2];
                    var node = document.createElement('div');

                    node.innerHTML = prefix + templateString + suffix;
                    while (depth--) {
                        node = node.lastChild;
                    }

                    var child;
                    /* eslint-disable no-cond-assign */
                    while (child = node.firstChild) {
                        /* eslint-enable no-cond-assign */
                        frag.appendChild(child);
                    }
                }
                if (!raw) {
                    trimNode(frag);
                }
                templateCache.put(cacheKey, frag);
                return frag;
            }

            /**
             * Convert a template node to a DocumentFragment.
             *
             * @param {Node} node
             * @return {DocumentFragment}
             */

            function nodeToFragment(node) {
                // if its a template tag and the browser supports it,
                // its content is already a document fragment.
                if (isRealTemplate(node)) {
                    trimNode(node.content);
                    return node.content;
                }
                // script template
                if (node.tagName === 'SCRIPT') {
                    return stringToFragment(node.textContent);
                }
                // normal node, clone it to avoid mutating the original
                var clonedNode = cloneNode(node);
                var frag = document.createDocumentFragment();
                var child;
                /* eslint-disable no-cond-assign */
                while (child = clonedNode.firstChild) {
                    /* eslint-enable no-cond-assign */
                    frag.appendChild(child);
                }
                trimNode(frag);
                return frag;
            }

// Test for the presence of the Safari template cloning bug
// https://bugs.webkit.org/showug.cgi?id=137755
            var hasBrokenTemplate = (function () {
                /* istanbul ignore else */
                if (inBrowser) {
                    var a = document.createElement('div');
                    a.innerHTML = '<template>1</template>';
                    return !a.cloneNode(true).firstChild.innerHTML;
                } else {
                    return false;
                }
            })();

// Test for IE10/11 textarea placeholder clone bug
            var hasTextareaCloneBug = (function () {
                /* istanbul ignore else */
                if (inBrowser) {
                    var t = document.createElement('textarea');
                    t.placeholder = 't';
                    return t.cloneNode(true).value === 't';
                } else {
                    return false;
                }
            })();

            /**
             * 1. Deal with Safari cloning nested <template> bug by
             *    manually cloning all template instances.
             * 2. Deal with IE10/11 textarea placeholder bug by setting
             *    the correct value after cloning.
             *
             * @param {Element|DocumentFragment} node
             * @return {Element|DocumentFragment}
             */

            function cloneNode(node) {
                if (!node.querySelectorAll) {
                    return node.cloneNode();
                }
                var res = node.cloneNode(true);
                var i, original, cloned;
                /* istanbul ignore if */
                if (hasBrokenTemplate) {
                    var tempClone = res;
                    if (isRealTemplate(node)) {
                        node = node.content;
                        tempClone = res.content;
                    }
                    original = node.querySelectorAll('template');
                    if (original.length) {
                        cloned = tempClone.querySelectorAll('template');
                        i = cloned.length;
                        while (i--) {
                            cloned[i].parentNode.replaceChild(cloneNode(original[i]), cloned[i]);
                        }
                    }
                }
                /* istanbul ignore if */
                if (hasTextareaCloneBug) {
                    if (node.tagName === 'TEXTAREA') {
                        res.value = node.value;
                    } else {
                        original = node.querySelectorAll('textarea');
                        if (original.length) {
                            cloned = res.querySelectorAll('textarea');
                            i = cloned.length;
                            while (i--) {
                                cloned[i].value = original[i].value;
                            }
                        }
                    }
                }
                return res;
            }

            /**
             * Process the template option and normalizes it into a
             * a DocumentFragment that can be used as a partial or a
             * instance template.
             *
             * @param {*} template
             *        Possible values include:
             *        - DocumentFragment object
             *        - Node object of type Template
             *        - id selector: '#some-template-id'
             *        - template string: '<div><span>{{msg}}</span></div>'
             * @param {Boolean} shouldClone
             * @param {Boolean} raw
             *        inline HTML interpolation. Do not check for id
             *        selector and keep whitespace in the string.
             * @return {DocumentFragment|undefined}
             */

            function parseTemplate(template, shouldClone, raw) {
                var node, frag;

                // if the template is already a document fragment,
                // do nothing
                if (template instanceof DocumentFragment) {
                    trimNode(template);
                    return shouldClone ? cloneNode(template) : template;
                }

                if (typeof template === 'string') {
                    // id selector
                    if (!raw && template.charAt(0) === '#') {
                        // id selector can be cached too
                        frag = idSelectorCache.get(template);
                        if (!frag) {
                            node = document.getElementById(template.slice(1));
                            if (node) {
                                frag = nodeToFragment(node);
                                // save selector to cache
                                idSelectorCache.put(template, frag);
                            }
                        }
                    } else {
                        // normal string template
                        frag = stringToFragment(template, raw);
                    }
                } else if (template.nodeType) {
                    // a direct node
                    frag = nodeToFragment(template);
                }

                return frag && shouldClone ? cloneNode(frag) : frag;
            }

            var template = Object.freeze({
                cloneNode: cloneNode,
                parseTemplate: parseTemplate
            });

            /**
             * Abstraction for a partially-compiled fragment.
             * Can optionally compile content with a child scope.
             *
             * @param {Function} linker
             * @param {Vue} vm
             * @param {DocumentFragment} frag
             * @param {Vue} [host]
             * @param {Object} [scope]
             */
            function Fragment(linker, vm, frag, host, scope, parentFrag) {
                this.children = [];
                this.childFrags = [];
                this.vm = vm;
                this.scope = scope;
                this.inserted = false;
                this.parentFrag = parentFrag;
                if (parentFrag) {
                    parentFrag.childFrags.push(this);
                }
                this.unlink = linker(vm, frag, host, scope, this);
                var single = this.single = frag.childNodes.length === 1 &&
                        // do not go single mode if the only node is an anchor
                    !frag.childNodes[0].__vue_anchor;
                if (single) {
                    this.node = frag.childNodes[0];
                    this.before = singleBefore;
                    this.remove = singleRemove;
                } else {
                    this.node = createAnchor('fragment-start');
                    this.end = createAnchor('fragment-end');
                    this.frag = frag;
                    prepend(this.node, frag);
                    frag.appendChild(this.end);
                    this.before = multiBefore;
                    this.remove = multiRemove;
                }
                this.node.__vfrag__ = this;
            }

            /**
             * Call attach/detach for all components contained within
             * this fragment. Also do so recursively for all child
             * fragments.
             *
             * @param {Function} hook
             */

            Fragment.prototype.callHook = function (hook) {
                var i, l;
                for (i = 0, l = this.childFrags.length; i < l; i++) {
                    this.childFrags[i].callHook(hook);
                }
                for (i = 0, l = this.children.length; i < l; i++) {
                    hook(this.children[i]);
                }
            };

            /**
             * Insert fragment before target, single node version
             *
             * @param {Node} target
             * @param {Boolean} withTransition
             */

            function singleBefore(target, withTransition) {
                this.inserted = true;
                var method = withTransition !== false ? beforeWithTransition : before;
                method(this.node, target, this.vm);
                if (inDoc(this.node)) {
                    this.callHook(attach);
                }
            }

            /**
             * Remove fragment, single node version
             */

            function singleRemove() {
                this.inserted = false;
                var shouldCallRemove = inDoc(this.node);
                var self = this;
                this.beforeRemove();
                removeWithTransition(this.node, this.vm, function () {
                    if (shouldCallRemove) {
                        self.callHook(detach);
                    }
                    self.destroy();
                });
            }

            /**
             * Insert fragment before target, multi-nodes version
             *
             * @param {Node} target
             * @param {Boolean} withTransition
             */

            function multiBefore(target, withTransition) {
                this.inserted = true;
                var vm = this.vm;
                var method = withTransition !== false ? beforeWithTransition : before;
                mapNodeRange(this.node, this.end, function (node) {
                    method(node, target, vm);
                });
                if (inDoc(this.node)) {
                    this.callHook(attach);
                }
            }

            /**
             * Remove fragment, multi-nodes version
             */

            function multiRemove() {
                this.inserted = false;
                var self = this;
                var shouldCallRemove = inDoc(this.node);
                this.beforeRemove();
                removeNodeRange(this.node, this.end, this.vm, this.frag, function () {
                    if (shouldCallRemove) {
                        self.callHook(detach);
                    }
                    self.destroy();
                });
            }

            /**
             * Prepare the fragment for removal.
             */

            Fragment.prototype.beforeRemove = function () {
                var i, l;
                for (i = 0, l = this.childFrags.length; i < l; i++) {
                    // call the same method recursively on child
                    // fragments, depth-first
                    this.childFrags[i].beforeRemove(false);
                }
                for (i = 0, l = this.children.length; i < l; i++) {
                    // Call destroy for all contained instances,
                    // with remove:false and defer:true.
                    // Defer is necessary because we need to
                    // keep the children to call detach hooks
                    // on them.
                    this.children[i].$destroy(false, true);
                }
                var dirs = this.unlink.dirs;
                for (i = 0, l = dirs.length; i < l; i++) {
                    // disable the watchers on all the directives
                    // so that the rendered content stays the same
                    // during removal.
                    dirs[i]._watcher && dirs[i]._watcher.teardown();
                }
            };

            /**
             * Destroy the fragment.
             */

            Fragment.prototype.destroy = function () {
                if (this.parentFrag) {
                    this.parentFrag.childFrags.$remove(this);
                }
                this.node.__vfrag__ = null;
                this.unlink();
            };

            /**
             * Call attach hook for a Vue instance.
             *
             * @param {Vue} child
             */

            function attach(child) {
                if (!child._isAttached) {
                    child._callHook('attached');
                }
            }

            /**
             * Call detach hook for a Vue instance.
             *
             * @param {Vue} child
             */

            function detach(child) {
                if (child._isAttached) {
                    child._callHook('detached');
                }
            }

            var linkerCache = new Cache(5000);

            /**
             * A factory that can be used to create instances of a
             * fragment. Caches the compiled linker if possible.
             *
             * @param {Vue} vm
             * @param {Element|String} el
             */
            function FragmentFactory(vm, el) {
                this.vm = vm;
                var template;
                var isString = typeof el === 'string';
                if (isString || isTemplate(el)) {
                    template = parseTemplate(el, true);
                } else {
                    template = document.createDocumentFragment();
                    template.appendChild(el);
                }
                this.template = template;
                // linker can be cached, but only for components
                var linker;
                var cid = vm.constructor.cid;
                if (cid > 0) {
                    var cacheId = cid + (isString ? el : el.outerHTML);
                    linker = linkerCache.get(cacheId);
                    if (!linker) {
                        linker = compile(template, vm.$options, true);
                        linkerCache.put(cacheId, linker);
                    }
                } else {
                    linker = compile(template, vm.$options, true);
                }
                this.linker = linker;
            }

            /**
             * Create a fragment instance with given host and scope.
             *
             * @param {Vue} host
             * @param {Object} scope
             * @param {Fragment} parentFrag
             */

            FragmentFactory.prototype.create = function (host, scope, parentFrag) {
                var frag = cloneNode(this.template);
                return new Fragment(this.linker, this.vm, frag, host, scope, parentFrag);
            };

            var vIf = {

                priority: IF,

                bind: function bind() {
                    var el = this.el;
                    if (!el.__vue__) {
                        // check else block
                        var next = el.nextElementSibling;
                        if (next && getAttr(next, 'v-else') !== null) {
                            remove(next);
                            this.elseFactory = new FragmentFactory(this.vm, next);
                        }
                        // check main block
                        this.anchor = createAnchor('v-if');
                        replace(el, this.anchor);
                        this.factory = new FragmentFactory(this.vm, el);
                    } else {
                        process.env.NODE_ENV !== 'production' && warn('v-if="' + this.expression + '" cannot be ' + 'used on an instance root element.');
                        this.invalid = true;
                    }
                },

                update: function update(value) {
                    if (this.invalid) return;
                    if (value) {
                        if (!this.frag) {
                            this.insert();
                        }
                    } else {
                        this.remove();
                    }
                },

                insert: function insert() {
                    if (this.elseFrag) {
                        this.elseFrag.remove();
                        this.elseFrag = null;
                    }
                    this.frag = this.factory.create(this._host, this._scope, this._frag);
                    this.frag.before(this.anchor);
                },

                remove: function remove() {
                    if (this.frag) {
                        this.frag.remove();
                        this.frag = null;
                    }
                    if (this.elseFactory && !this.elseFrag) {
                        this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag);
                        this.elseFrag.before(this.anchor);
                    }
                },

                unbind: function unbind() {
                    if (this.frag) {
                        this.frag.destroy();
                    }
                    if (this.elseFrag) {
                        this.elseFrag.destroy();
                    }
                }
            };

            var uid$1 = 0;

            var vFor = {

                priority: FOR,

                params: ['track-by', 'stagger', 'enter-stagger', 'leave-stagger'],

                bind: function bind() {
                    // support "item in items" syntax
                    var inMatch = this.expression.match(/(.*) in (.*)/);
                    if (inMatch) {
                        var itMatch = inMatch[1].match(/\((.*),(.*)\)/);
                        if (itMatch) {
                            this.iterator = itMatch[1].trim();
                            this.alias = itMatch[2].trim();
                        } else {
                            this.alias = inMatch[1].trim();
                        }
                        this.expression = inMatch[2];
                    }

                    if (!this.alias) {
                        process.env.NODE_ENV !== 'production' && warn('Alias is required in v-for.');
                        return;
                    }

                    // uid as a cache identifier
                    this.id = '__v-for__' + ++uid$1;

                    // check if this is an option list,
                    // so that we know if we need to update the <select>'s
                    // v-model when the option list has changed.
                    // because v-model has a lower priority than v-for,
                    // the v-model is not bound here yet, so we have to
                    // retrive it in the actual updateModel() function.
                    var tag = this.el.tagName;
                    this.isOption = (tag === 'OPTION' || tag === 'OPTGROUP') && this.el.parentNode.tagName === 'SELECT';

                    // setup anchor nodes
                    this.start = createAnchor('v-for-start');
                    this.end = createAnchor('v-for-end');
                    replace(this.el, this.end);
                    before(this.start, this.end);

                    // cache
                    this.cache = Object.create(null);

                    // fragment factory
                    this.factory = new FragmentFactory(this.vm, this.el);
                },

                update: function update(data) {
                    this.diff(data);
                    this.updateRef();
                    this.updateModel();
                },

                /**
                 * Diff, based on new data and old data, determine the
                 * minimum amount of DOM manipulations needed to make the
                 * DOM reflect the new data Array.
                 *
                 * The algorithm diffs the new data Array by storing a
                 * hidden reference to an owner vm instance on previously
                 * seen data. This allows us to achieve O(n) which is
                 * better than a levenshtein distance based algorithm,
                 * which is O(m * n).
                 *
                 * @param {Array} data
                 */

                diff: function diff(data) {
                    // check if the Array was converted from an Object
                    var item = data[0];
                    var convertedFromObject = this.fromObject = isObject(item) && hasOwn(item, '$key') && hasOwn(item, '$value');

                    var trackByKey = this.params.trackBy;
                    var oldFrags = this.frags;
                    var frags = this.frags = new Array(data.length);
                    var alias = this.alias;
                    var iterator = this.iterator;
                    var start = this.start;
                    var end = this.end;
                    var inDocument = inDoc(start);
                    var init = !oldFrags;
                    var i, l, frag, key, value, primitive;

                    // First pass, go through the new Array and fill up
                    // the new frags array. If a piece of data has a cached
                    // instance for it, we reuse it. Otherwise build a new
                    // instance.
                    for (i = 0, l = data.length; i < l; i++) {
                        item = data[i];
                        key = convertedFromObject ? item.$key : null;
                        value = convertedFromObject ? item.$value : item;
                        primitive = !isObject(value);
                        frag = !init && this.getCachedFrag(value, i, key);
                        if (frag) {
                            // reusable fragment
                            frag.reused = true;
                            // update $index
                            frag.scope.$index = i;
                            // update $key
                            if (key) {
                                frag.scope.$key = key;
                            }
                            // update iterator
                            if (iterator) {
                                frag.scope[iterator] = key !== null ? key : i;
                            }
                            // update data for track-by, object repeat &
                            // primitive values.
                            if (trackByKey || convertedFromObject || primitive) {
                                frag.scope[alias] = value;
                            }
                        } else {
                            // new isntance
                            frag = this.create(value, alias, i, key);
                            frag.fresh = !init;
                        }
                        frags[i] = frag;
                        if (init) {
                            frag.before(end);
                        }
                    }

                    // we're done for the initial render.
                    if (init) {
                        return;
                    }

                    // Second pass, go through the old fragments and
                    // destroy those who are not reused (and remove them
                    // from cache)
                    var removalIndex = 0;
                    var totalRemoved = oldFrags.length - frags.length;
                    // when removing a large number of fragments, watcher removal
                    // turns out to be a perf bottleneck, so we batch the watcher
                    // removals into a single filter call!
                    this.vm._vForRemoving = true;
                    for (i = 0, l = oldFrags.length; i < l; i++) {
                        frag = oldFrags[i];
                        if (!frag.reused) {
                            this.deleteCachedFrag(frag);
                            this.remove(frag, removalIndex++, totalRemoved, inDocument);
                        }
                    }
                    this.vm._vForRemoving = false;
                    this.vm._watchers = this.vm._watchers.filter(function (w) {
                        return w.active;
                    });

                    // Final pass, move/insert new fragments into the
                    // right place.
                    var targetPrev, prevEl, currentPrev;
                    var insertionIndex = 0;
                    for (i = 0, l = frags.length; i < l; i++) {
                        frag = frags[i];
                        // this is the frag that we should be after
                        targetPrev = frags[i - 1];
                        prevEl = targetPrev ? targetPrev.staggerCb ? targetPrev.staggerAnchor : targetPrev.end || targetPrev.node : start;
                        if (frag.reused && !frag.staggerCb) {
                            currentPrev = findPrevFrag(frag, start, this.id);
                            if (currentPrev !== targetPrev && (!currentPrev ||
                                    // optimization for moving a single item.
                                    // thanks to suggestions by @livoras in #1807
                                findPrevFrag(currentPrev, start, this.id) !== targetPrev)) {
                                this.move(frag, prevEl);
                            }
                        } else {
                            // new instance, or still in stagger.
                            // insert with updated stagger index.
                            this.insert(frag, insertionIndex++, prevEl, inDocument);
                        }
                        frag.reused = frag.fresh = false;
                    }
                },

                /**
                 * Create a new fragment instance.
                 *
                 * @param {*} value
                 * @param {String} alias
                 * @param {Number} index
                 * @param {String} [key]
                 * @return {Fragment}
                 */

                create: function create(value, alias, index, key) {
                    var host = this._host;
                    // create iteration scope
                    var parentScope = this._scope || this.vm;
                    var scope = Object.create(parentScope);
                    // ref holder for the scope
                    scope.$refs = Object.create(parentScope.$refs);
                    scope.$els = Object.create(parentScope.$els);
                    // make sure point $parent to parent scope
                    scope.$parent = parentScope;
                    // for two-way binding on alias
                    scope.$forContext = this;
                    // define scope properties
                    defineReactive(scope, alias, value);
                    defineReactive(scope, '$index', index);
                    if (key) {
                        defineReactive(scope, '$key', key);
                    } else if (scope.$key) {
                        // avoid accidental fallback
                        def(scope, '$key', null);
                    }
                    if (this.iterator) {
                        defineReactive(scope, this.iterator, key !== null ? key : index);
                    }
                    var frag = this.factory.create(host, scope, this._frag);
                    frag.forId = this.id;
                    this.cacheFrag(value, frag, index, key);
                    return frag;
                },

                /**
                 * Update the v-ref on owner vm.
                 */

                updateRef: function updateRef() {
                    var ref = this.descriptor.ref;
                    if (!ref) return;
                    var hash = (this._scope || this.vm).$refs;
                    var refs;
                    if (!this.fromObject) {
                        refs = this.frags.map(findVmFromFrag);
                    } else {
                        refs = {};
                        this.frags.forEach(function (frag) {
                            refs[frag.scope.$key] = findVmFromFrag(frag);
                        });
                    }
                    hash[ref] = refs;
                },

                /**
                 * For option lists, update the containing v-model on
                 * parent <select>.
                 */

                updateModel: function updateModel() {
                    if (this.isOption) {
                        var parent = this.start.parentNode;
                        var model = parent && parent.__v_model;
                        if (model) {
                            model.forceUpdate();
                        }
                    }
                },

                /**
                 * Insert a fragment. Handles staggering.
                 *
                 * @param {Fragment} frag
                 * @param {Number} index
                 * @param {Node} prevEl
                 * @param {Boolean} inDocument
                 */

                insert: function insert(frag, index, prevEl, inDocument) {
                    if (frag.staggerCb) {
                        frag.staggerCb.cancel();
                        frag.staggerCb = null;
                    }
                    var staggerAmount = this.getStagger(frag, index, null, 'enter');
                    if (inDocument && staggerAmount) {
                        // create an anchor and insert it synchronously,
                        // so that we can resolve the correct order without
                        // worrying about some elements not inserted yet
                        var anchor = frag.staggerAnchor;
                        if (!anchor) {
                            anchor = frag.staggerAnchor = createAnchor('stagger-anchor');
                            anchor.__vfrag__ = frag;
                        }
                        after(anchor, prevEl);
                        var op = frag.staggerCb = cancellable(function () {
                            frag.staggerCb = null;
                            frag.before(anchor);
                            remove(anchor);
                        });
                        setTimeout(op, staggerAmount);
                    } else {
                        frag.before(prevEl.nextSibling);
                    }
                },

                /**
                 * Remove a fragment. Handles staggering.
                 *
                 * @param {Fragment} frag
                 * @param {Number} index
                 * @param {Number} total
                 * @param {Boolean} inDocument
                 */

                remove: function remove(frag, index, total, inDocument) {
                    if (frag.staggerCb) {
                        frag.staggerCb.cancel();
                        frag.staggerCb = null;
                        // it's not possible for the same frag to be removed
                        // twice, so if we have a pending stagger callback,
                        // it means this frag is queued for enter but removed
                        // before its transition started. Since it is already
                        // destroyed, we can just leave it in detached state.
                        return;
                    }
                    var staggerAmount = this.getStagger(frag, index, total, 'leave');
                    if (inDocument && staggerAmount) {
                        var op = frag.staggerCb = cancellable(function () {
                            frag.staggerCb = null;
                            frag.remove();
                        });
                        setTimeout(op, staggerAmount);
                    } else {
                        frag.remove();
                    }
                },

                /**
                 * Move a fragment to a new position.
                 * Force no transition.
                 *
                 * @param {Fragment} frag
                 * @param {Node} prevEl
                 */

                move: function move(frag, prevEl) {
                    // fix a common issue with Sortable:
                    // if prevEl doesn't have nextSibling, this means it's
                    // been dragged after the end anchor. Just re-position
                    // the end anchor to the end of the container.
                    /* istanbul ignore if */
                    if (!prevEl.nextSibling) {
                        this.end.parentNode.appendChild(this.end);
                    }
                    frag.before(prevEl.nextSibling, false);
                },

                /**
                 * Cache a fragment using track-by or the object key.
                 *
                 * @param {*} value
                 * @param {Fragment} frag
                 * @param {Number} index
                 * @param {String} [key]
                 */

                cacheFrag: function cacheFrag(value, frag, index, key) {
                    var trackByKey = this.params.trackBy;
                    var cache = this.cache;
                    var primitive = !isObject(value);
                    var id;
                    if (key || trackByKey || primitive) {
                        id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
                        if (!cache[id]) {
                            cache[id] = frag;
                        } else if (trackByKey !== '$index') {
                            process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
                        }
                    } else {
                        id = this.id;
                        if (hasOwn(value, id)) {
                            if (value[id] === null) {
                                value[id] = frag;
                            } else {
                                process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
                            }
                        } else {
                            def(value, id, frag);
                        }
                    }
                    frag.raw = value;
                },

                /**
                 * Get a cached fragment from the value/index/key
                 *
                 * @param {*} value
                 * @param {Number} index
                 * @param {String} key
                 * @return {Fragment}
                 */

                getCachedFrag: function getCachedFrag(value, index, key) {
                    var trackByKey = this.params.trackBy;
                    var primitive = !isObject(value);
                    var frag;
                    if (key || trackByKey || primitive) {
                        var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
                        frag = this.cache[id];
                    } else {
                        frag = value[this.id];
                    }
                    if (frag && (frag.reused || frag.fresh)) {
                        process.env.NODE_ENV !== 'production' && this.warnDuplicate(value);
                    }
                    return frag;
                },

                /**
                 * Delete a fragment from cache.
                 *
                 * @param {Fragment} frag
                 */

                deleteCachedFrag: function deleteCachedFrag(frag) {
                    var value = frag.raw;
                    var trackByKey = this.params.trackBy;
                    var scope = frag.scope;
                    var index = scope.$index;
                    // fix #948: avoid accidentally fall through to
                    // a parent repeater which happens to have $key.
                    var key = hasOwn(scope, '$key') && scope.$key;
                    var primitive = !isObject(value);
                    if (trackByKey || key || primitive) {
                        var id = trackByKey ? trackByKey === '$index' ? index : value[trackByKey] : key || value;
                        this.cache[id] = null;
                    } else {
                        value[this.id] = null;
                        frag.raw = null;
                    }
                },

                /**
                 * Get the stagger amount for an insertion/removal.
                 *
                 * @param {Fragment} frag
                 * @param {Number} index
                 * @param {Number} total
                 * @param {String} type
                 */

                getStagger: function getStagger(frag, index, total, type) {
                    type = type + 'Stagger';
                    var trans = frag.node.__v_trans;
                    var hooks = trans && trans.hooks;
                    var hook = hooks && (hooks[type] || hooks.stagger);
                    return hook ? hook.call(frag, index, total) : index * parseInt(this.params[type] || this.params.stagger, 10);
                },

                /**
                 * Pre-process the value before piping it through the
                 * filters. This is passed to and called by the watcher.
                 */

                _preProcess: function _preProcess(value) {
                    // regardless of type, store the un-filtered raw value.
                    this.rawValue = value;
                    return value;
                },

                /**
                 * Post-process the value after it has been piped through
                 * the filters. This is passed to and called by the watcher.
                 *
                 * It is necessary for this to be called during the
                 * wathcer's dependency collection phase because we want
                 * the v-for to update when the source Object is mutated.
                 */

                _postProcess: function _postProcess(value) {
                    if (isArray(value)) {
                        return value;
                    } else if (isPlainObject(value)) {
                        // convert plain object to array.
                        var keys = Object.keys(value);
                        var i = keys.length;
                        var res = new Array(i);
                        var key;
                        while (i--) {
                            key = keys[i];
                            res[i] = {
                                $key: key,
                                $value: value[key]
                            };
                        }
                        return res;
                    } else {
                        if (typeof value === 'number' && !isNaN(value)) {
                            value = range(value);
                        }
                        return value || [];
                    }
                },

                unbind: function unbind() {
                    if (this.descriptor.ref) {
                        (this._scope || this.vm).$refs[this.descriptor.ref] = null;
                    }
                    if (this.frags) {
                        var i = this.frags.length;
                        var frag;
                        while (i--) {
                            frag = this.frags[i];
                            this.deleteCachedFrag(frag);
                            frag.destroy();
                        }
                    }
                }
            };

            /**
             * Helper to find the previous element that is a fragment
             * anchor. This is necessary because a destroyed frag's
             * element could still be lingering in the DOM before its
             * leaving transition finishes, but its inserted flag
             * should have been set to false so we can skip them.
             *
             * If this is a block repeat, we want to make sure we only
             * return frag that is bound to this v-for. (see #929)
             *
             * @param {Fragment} frag
             * @param {Comment|Text} anchor
             * @param {String} id
             * @return {Fragment}
             */

            function findPrevFrag(frag, anchor, id) {
                var el = frag.node.previousSibling;
                /* istanbul ignore if */
                if (!el) return;
                frag = el.__vfrag__;
                while ((!frag || frag.forId !== id || !frag.inserted) && el !== anchor) {
                    el = el.previousSibling;
                    /* istanbul ignore if */
                    if (!el) return;
                    frag = el.__vfrag__;
                }
                return frag;
            }

            /**
             * Find a vm from a fragment.
             *
             * @param {Fragment} frag
             * @return {Vue|undefined}
             */

            function findVmFromFrag(frag) {
                var node = frag.node;
                // handle multi-node frag
                if (frag.end) {
                    while (!node.__vue__ && node !== frag.end && node.nextSibling) {
                        node = node.nextSibling;
                    }
                }
                return node.__vue__;
            }

            /**
             * Create a range array from given number.
             *
             * @param {Number} n
             * @return {Array}
             */

            function range(n) {
                var i = -1;
                var ret = new Array(Math.floor(n));
                while (++i < n) {
                    ret[i] = i;
                }
                return ret;
            }

            if (process.env.NODE_ENV !== 'production') {
                vFor.warnDuplicate = function (value) {
                    warn('Duplicate value found in v-for="' + this.descriptor.raw + '": ' + JSON.stringify(value) + '. Use track-by="$index" if ' + 'you are expecting duplicate values.');
                };
            }

            var html = {

                bind: function bind() {
                    // a comment node means this is a binding for
                    // {{{ inline unescaped html }}}
                    if (this.el.nodeType === 8) {
                        // hold nodes
                        this.nodes = [];
                        // replace the placeholder with proper anchor
                        this.anchor = createAnchor('v-html');
                        replace(this.el, this.anchor);
                    }
                },

                update: function update(value) {
                    value = _toString(value);
                    if (this.nodes) {
                        this.swap(value);
                    } else {
                        this.el.innerHTML = value;
                    }
                },

                swap: function swap(value) {
                    // remove old nodes
                    var i = this.nodes.length;
                    while (i--) {
                        remove(this.nodes[i]);
                    }
                    // convert new value to a fragment
                    // do not attempt to retrieve from id selector
                    var frag = parseTemplate(value, true, true);
                    // save a reference to these nodes so we can remove later
                    this.nodes = toArray(frag.childNodes);
                    before(frag, this.anchor);
                }
            };

            var text = {

                bind: function bind() {
                    this.attr = this.el.nodeType === 3 ? 'data' : 'textContent';
                },

                update: function update(value) {
                    this.el[this.attr] = _toString(value);
                }
            };

// must export plain object
            var publicDirectives = {
                text: text,
                html: html,
                'for': vFor,
                'if': vIf,
                show: show,
                model: model,
                on: on,
                bind: bind,
                el: el,
                ref: ref,
                cloak: cloak
            };

            var queue$1 = [];
            var queued = false;

            /**
             * Push a job into the queue.
             *
             * @param {Function} job
             */

            function pushJob(job) {
                queue$1.push(job);
                if (!queued) {
                    queued = true;
                    nextTick(flush);
                }
            }

            /**
             * Flush the queue, and do one forced reflow before
             * triggering transitions.
             */

            function flush() {
                // Force layout
                var f = document.documentElement.offsetHeight;
                for (var i = 0; i < queue$1.length; i++) {
                    queue$1[i]();
                }
                queue$1 = [];
                queued = false;
                // dummy return, so js linters don't complain about
                // unused variable f
                return f;
            }

            var TYPE_TRANSITION = 'transition';
            var TYPE_ANIMATION = 'animation';
            var transDurationProp = transitionProp + 'Duration';
            var animDurationProp = animationProp + 'Duration';

            /**
             * A Transition object that encapsulates the state and logic
             * of the transition.
             *
             * @param {Element} el
             * @param {String} id
             * @param {Object} hooks
             * @param {Vue} vm
             */
            function Transition(el, id, hooks, vm) {
                this.id = id;
                this.el = el;
                this.enterClass = hooks && hooks.enterClass || id + '-enter';
                this.leaveClass = hooks && hooks.leaveClass || id + '-leave';
                this.hooks = hooks;
                this.vm = vm;
                // async state
                this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null;
                this.justEntered = false;
                this.entered = this.left = false;
                this.typeCache = {};
                // check css transition type
                this.type = hooks && hooks.type;
                /* istanbul ignore if */
                if (process.env.NODE_ENV !== 'production') {
                    if (this.type && this.type !== TYPE_TRANSITION && this.type !== TYPE_ANIMATION) {
                        warn('invalid CSS transition type for transition="' + this.id + '": ' + this.type);
                    }
                }
                // bind
                var self = this;
                ['enterNextTick', 'enterDone', 'leaveNextTick', 'leaveDone'].forEach(function (m) {
                    self[m] = bind$1(self[m], self);
                });
            }

            var p$1 = Transition.prototype;

            /**
             * Start an entering transition.
             *
             * 1. enter transition triggered
             * 2. call beforeEnter hook
             * 3. add enter class
             * 4. insert/show element
             * 5. call enter hook (with possible explicit js callback)
             * 6. reflow
             * 7. based on transition type:
             *    - transition:
             *        remove class now, wait for transitionend,
             *        then done if there's no explicit js callback.
             *    - animation:
             *        wait for animationend, remove class,
             *        then done if there's no explicit js callback.
             *    - no css transition:
             *        done now if there's no explicit js callback.
             * 8. wait for either done or js callback, then call
             *    afterEnter hook.
             *
             * @param {Function} op - insert/show the element
             * @param {Function} [cb]
             */

            p$1.enter = function (op, cb) {
                this.cancelPending();
                this.callHook('beforeEnter');
                this.cb = cb;
                addClass(this.el, this.enterClass);
                op();
                this.entered = false;
                this.callHookWithCb('enter');
                if (this.entered) {
                    return; // user called done synchronously.
                }
                this.cancel = this.hooks && this.hooks.enterCancelled;
                pushJob(this.enterNextTick);
            };

            /**
             * The "nextTick" phase of an entering transition, which is
             * to be pushed into a queue and executed after a reflow so
             * that removing the class can trigger a CSS transition.
             */

            p$1.enterNextTick = function () {

                // Important hack:
                // in Chrome, if a just-entered element is applied the
                // leave class while its interpolated property still has
                // a very small value (within one frame), Chrome will
                // skip the leave transition entirely and not firing the
                // transtionend event. Therefore we need to protected
                // against such cases using a one-frame timeout.
                this.justEntered = true;
                var self = this;
                setTimeout(function () {
                    self.justEntered = false;
                }, 17);

                var enterDone = this.enterDone;
                var type = this.getCssTransitionType(this.enterClass);
                if (!this.pendingJsCb) {
                    if (type === TYPE_TRANSITION) {
                        // trigger transition by removing enter class now
                        removeClass(this.el, this.enterClass);
                        this.setupCssCb(transitionEndEvent, enterDone);
                    } else if (type === TYPE_ANIMATION) {
                        this.setupCssCb(animationEndEvent, enterDone);
                    } else {
                        enterDone();
                    }
                } else if (type === TYPE_TRANSITION) {
                    removeClass(this.el, this.enterClass);
                }
            };

            /**
             * The "cleanup" phase of an entering transition.
             */

            p$1.enterDone = function () {
                this.entered = true;
                this.cancel = this.pendingJsCb = null;
                removeClass(this.el, this.enterClass);
                this.callHook('afterEnter');
                if (this.cb) this.cb();
            };

            /**
             * Start a leaving transition.
             *
             * 1. leave transition triggered.
             * 2. call beforeLeave hook
             * 3. add leave class (trigger css transition)
             * 4. call leave hook (with possible explicit js callback)
             * 5. reflow if no explicit js callback is provided
             * 6. based on transition type:
             *    - transition or animation:
             *        wait for end event, remove class, then done if
             *        there's no explicit js callback.
             *    - no css transition:
             *        done if there's no explicit js callback.
             * 7. wait for either done or js callback, then call
             *    afterLeave hook.
             *
             * @param {Function} op - remove/hide the element
             * @param {Function} [cb]
             */

            p$1.leave = function (op, cb) {
                this.cancelPending();
                this.callHook('beforeLeave');
                this.op = op;
                this.cb = cb;
                addClass(this.el, this.leaveClass);
                this.left = false;
                this.callHookWithCb('leave');
                if (this.left) {
                    return; // user called done synchronously.
                }
                this.cancel = this.hooks && this.hooks.leaveCancelled;
                // only need to handle leaveDone if
                // 1. the transition is already done (synchronously called
                //    by the user, which causes this.op set to null)
                // 2. there's no explicit js callback
                if (this.op && !this.pendingJsCb) {
                    // if a CSS transition leaves immediately after enter,
                    // the transitionend event never fires. therefore we
                    // detect such cases and end the leave immediately.
                    if (this.justEntered) {
                        this.leaveDone();
                    } else {
                        pushJob(this.leaveNextTick);
                    }
                }
            };

            /**
             * The "nextTick" phase of a leaving transition.
             */

            p$1.leaveNextTick = function () {
                var type = this.getCssTransitionType(this.leaveClass);
                if (type) {
                    var event = type === TYPE_TRANSITION ? transitionEndEvent : animationEndEvent;
                    this.setupCssCb(event, this.leaveDone);
                } else {
                    this.leaveDone();
                }
            };

            /**
             * The "cleanup" phase of a leaving transition.
             */

            p$1.leaveDone = function () {
                this.left = true;
                this.cancel = this.pendingJsCb = null;
                this.op();
                removeClass(this.el, this.leaveClass);
                this.callHook('afterLeave');
                if (this.cb) this.cb();
                this.op = null;
            };

            /**
             * Cancel any pending callbacks from a previously running
             * but not finished transition.
             */

            p$1.cancelPending = function () {
                this.op = this.cb = null;
                var hasPending = false;
                if (this.pendingCssCb) {
                    hasPending = true;
                    off(this.el, this.pendingCssEvent, this.pendingCssCb);
                    this.pendingCssEvent = this.pendingCssCb = null;
                }
                if (this.pendingJsCb) {
                    hasPending = true;
                    this.pendingJsCb.cancel();
                    this.pendingJsCb = null;
                }
                if (hasPending) {
                    removeClass(this.el, this.enterClass);
                    removeClass(this.el, this.leaveClass);
                }
                if (this.cancel) {
                    this.cancel.call(this.vm, this.el);
                    this.cancel = null;
                }
            };

            /**
             * Call a user-provided synchronous hook function.
             *
             * @param {String} type
             */

            p$1.callHook = function (type) {
                if (this.hooks && this.hooks[type]) {
                    this.hooks[type].call(this.vm, this.el);
                }
            };

            /**
             * Call a user-provided, potentially-async hook function.
             * We check for the length of arguments to see if the hook
             * expects a `done` callback. If true, the transition's end
             * will be determined by when the user calls that callback;
             * otherwise, the end is determined by the CSS transition or
             * animation.
             *
             * @param {String} type
             */

            p$1.callHookWithCb = function (type) {
                var hook = this.hooks && this.hooks[type];
                if (hook) {
                    if (hook.length > 1) {
                        this.pendingJsCb = cancellable(this[type + 'Done']);
                    }
                    hook.call(this.vm, this.el, this.pendingJsCb);
                }
            };

            /**
             * Get an element's transition type based on the
             * calculated styles.
             *
             * @param {String} className
             * @return {Number}
             */

            p$1.getCssTransitionType = function (className) {
                /* istanbul ignore if */
                if (!transitionEndEvent ||
                        // skip CSS transitions if page is not visible -
                        // this solves the issue of transitionend events not
                        // firing until the page is visible again.
                        // pageVisibility API is supported in IE10+, same as
                        // CSS transitions.
                    document.hidden ||
                        // explicit js-only transition
                    this.hooks && this.hooks.css === false ||
                        // element is hidden
                    isHidden(this.el)) {
                    return;
                }
                var type = this.type || this.typeCache[className];
                if (type) return type;
                var inlineStyles = this.el.style;
                var computedStyles = window.getComputedStyle(this.el);
                var transDuration = inlineStyles[transDurationProp] || computedStyles[transDurationProp];
                if (transDuration && transDuration !== '0s') {
                    type = TYPE_TRANSITION;
                } else {
                    var animDuration = inlineStyles[animDurationProp] || computedStyles[animDurationProp];
                    if (animDuration && animDuration !== '0s') {
                        type = TYPE_ANIMATION;
                    }
                }
                if (type) {
                    this.typeCache[className] = type;
                }
                return type;
            };

            /**
             * Setup a CSS transitionend/animationend callback.
             *
             * @param {String} event
             * @param {Function} cb
             */

            p$1.setupCssCb = function (event, cb) {
                this.pendingCssEvent = event;
                var self = this;
                var el = this.el;
                var onEnd = this.pendingCssCb = function (e) {
                    if (e.target === el) {
                        off(el, event, onEnd);
                        self.pendingCssEvent = self.pendingCssCb = null;
                        if (!self.pendingJsCb && cb) {
                            cb();
                        }
                    }
                };
                on$1(el, event, onEnd);
            };

            /**
             * Check if an element is hidden - in that case we can just
             * skip the transition alltogether.
             *
             * @param {Element} el
             * @return {Boolean}
             */

            function isHidden(el) {
                return !(el.offsetWidth || el.offsetHeight || el.getClientRects().length);
            }

            var transition = {

                priority: TRANSITION,

                update: function update(id, oldId) {
                    var el = this.el;
                    // resolve on owner vm
                    var hooks = resolveAsset(this.vm.$options, 'transitions', id);
                    id = id || 'v';
                    // apply on closest vm
                    el.__v_trans = new Transition(el, id, hooks, this.el.__vue__ || this.vm);
                    if (oldId) {
                        removeClass(el, oldId + '-transition');
                    }
                    addClass(el, id + '-transition');
                }
            };

            var bindingModes = config._propBindingModes;

            var propDef = {

                bind: function bind() {

                    var child = this.vm;
                    var parent = child._context;
                    // passed in from compiler directly
                    var prop = this.descriptor.prop;
                    var childKey = prop.path;
                    var parentKey = prop.parentPath;
                    var twoWay = prop.mode === bindingModes.TWO_WAY;

                    var parentWatcher = this.parentWatcher = new Watcher(parent, parentKey, function (val) {
                        val = coerceProp(prop, val);
                        if (assertProp(prop, val)) {
                            child[childKey] = val;
                        }
                    }, {
                        twoWay: twoWay,
                        filters: prop.filters,
                        // important: props need to be observed on the
                        // v-for scope if present
                        scope: this._scope
                    });

                    // set the child initial value.
                    initProp(child, prop, parentWatcher.value);

                    // setup two-way binding
                    if (twoWay) {
                        // important: defer the child watcher creation until
                        // the created hook (after data observation)
                        var self = this;
                        child.$once('pre-hook:created', function () {
                            self.childWatcher = new Watcher(child, childKey, function (val) {
                                parentWatcher.set(val);
                            }, {
                                // ensure sync upward before parent sync down.
                                // this is necessary in cases e.g. the child
                                // mutates a prop array, then replaces it. (#1683)
                                sync: true
                            });
                        });
                    }
                },

                unbind: function unbind() {
                    this.parentWatcher.teardown();
                    if (this.childWatcher) {
                        this.childWatcher.teardown();
                    }
                }
            };

            var component = {

                priority: COMPONENT,

                params: ['keep-alive', 'transition-mode', 'inline-template'],

                /**
                 * Setup. Two possible usages:
                 *
                 * - static:
                 *   <comp> or <div v-component="comp">
                 *
                 * - dynamic:
                 *   <component :is="view">
                 */

                bind: function bind() {
                    if (!this.el.__vue__) {
                        // keep-alive cache
                        this.keepAlive = this.params.keepAlive;
                        if (this.keepAlive) {
                            this.cache = {};
                        }
                        // check inline-template
                        if (this.params.inlineTemplate) {
                            // extract inline template as a DocumentFragment
                            this.inlineTemplate = extractContent(this.el, true);
                        }
                        // component resolution related state
                        this.pendingComponentCb = this.Component = null;
                        // transition related state
                        this.pendingRemovals = 0;
                        this.pendingRemovalCb = null;
                        // create a ref anchor
                        this.anchor = createAnchor('v-component');
                        replace(this.el, this.anchor);
                        // remove is attribute.
                        // this is removed during compilation, but because compilation is
                        // cached, when the component is used elsewhere this attribute
                        // will remain at link time.
                        this.el.removeAttribute('is');
                        // remove ref, same as above
                        if (this.descriptor.ref) {
                            this.el.removeAttribute('v-ref:' + hyphenate(this.descriptor.ref));
                        }
                        // if static, build right now.
                        if (this.literal) {
                            this.setComponent(this.expression);
                        }
                    } else {
                        process.env.NODE_ENV !== 'production' && warn('cannot mount component "' + this.expression + '" ' + 'on already mounted element: ' + this.el);
                    }
                },

                /**
                 * Public update, called by the watcher in the dynamic
                 * literal scenario, e.g. <component :is="view">
                 */

                update: function update(value) {
                    if (!this.literal) {
                        this.setComponent(value);
                    }
                },

                /**
                 * Switch dynamic components. May resolve the component
                 * asynchronously, and perform transition based on
                 * specified transition mode. Accepts a few additional
                 * arguments specifically for vue-router.
                 *
                 * The callback is called when the full transition is
                 * finished.
                 *
                 * @param {String} value
                 * @param {Function} [cb]
                 */

                setComponent: function setComponent(value, cb) {
                    this.invalidatePending();
                    if (!value) {
                        // just remove current
                        this.unbuild(true);
                        this.remove(this.childVM, cb);
                        this.childVM = null;
                    } else {
                        var self = this;
                        this.resolveComponent(value, function () {
                            self.mountComponent(cb);
                        });
                    }
                },

                /**
                 * Resolve the component constructor to use when creating
                 * the child vm.
                 */

                resolveComponent: function resolveComponent(id, cb) {
                    var self = this;
                    this.pendingComponentCb = cancellable(function (Component) {
                        self.ComponentName = Component.options.name || id;
                        self.Component = Component;
                        cb();
                    });
                    this.vm._resolveComponent(id, this.pendingComponentCb);
                },

                /**
                 * Create a new instance using the current constructor and
                 * replace the existing instance. This method doesn't care
                 * whether the new component and the old one are actually
                 * the same.
                 *
                 * @param {Function} [cb]
                 */

                mountComponent: function mountComponent(cb) {
                    // actual mount
                    this.unbuild(true);
                    var self = this;
                    var activateHook = this.Component.options.activate;
                    var cached = this.getCached();
                    var newComponent = this.build();
                    if (activateHook && !cached) {
                        this.waitingFor = newComponent;
                        activateHook.call(newComponent, function () {
                            if (self.waitingFor !== newComponent) {
                                return;
                            }
                            self.waitingFor = null;
                            self.transition(newComponent, cb);
                        });
                    } else {
                        // update ref for kept-alive component
                        if (cached) {
                            newComponent._updateRef();
                        }
                        this.transition(newComponent, cb);
                    }
                },

                /**
                 * When the component changes or unbinds before an async
                 * constructor is resolved, we need to invalidate its
                 * pending callback.
                 */

                invalidatePending: function invalidatePending() {
                    if (this.pendingComponentCb) {
                        this.pendingComponentCb.cancel();
                        this.pendingComponentCb = null;
                    }
                },

                /**
                 * Instantiate/insert a new child vm.
                 * If keep alive and has cached instance, insert that
                 * instance; otherwise build a new one and cache it.
                 *
                 * @param {Object} [extraOptions]
                 * @return {Vue} - the created instance
                 */

                build: function build(extraOptions) {
                    var cached = this.getCached();
                    if (cached) {
                        return cached;
                    }
                    if (this.Component) {
                        // default options
                        var options = {
                            name: this.ComponentName,
                            el: cloneNode(this.el),
                            template: this.inlineTemplate,
                            // make sure to add the child with correct parent
                            // if this is a transcluded component, its parent
                            // should be the transclusion host.
                            parent: this._host || this.vm,
                            // if no inline-template, then the compiled
                            // linker can be cached for better performance.
                            _linkerCachable: !this.inlineTemplate,
                            _ref: this.descriptor.ref,
                            _asComponent: true,
                            _isRouterView: this._isRouterView,
                            // if this is a transcluded component, context
                            // will be the common parent vm of this instance
                            // and its host.
                            _context: this.vm,
                            // if this is inside an inline v-for, the scope
                            // will be the intermediate scope created for this
                            // repeat fragment. this is used for linking props
                            // and container directives.
                            _scope: this._scope,
                            // pass in the owner fragment of this component.
                            // this is necessary so that the fragment can keep
                            // track of its contained components in order to
                            // call attach/detach hooks for them.
                            _frag: this._frag
                        };
                        // extra options
                        // in 1.0.0 this is used by vue-router only
                        /* istanbul ignore if */
                        if (extraOptions) {
                            extend(options, extraOptions);
                        }
                        var child = new this.Component(options);
                        if (this.keepAlive) {
                            this.cache[this.Component.cid] = child;
                        }
                        /* istanbul ignore if */
                        if (process.env.NODE_ENV !== 'production' && this.el.hasAttribute('transition') && child._isFragment) {
                            warn('Transitions will not work on a fragment instance. ' + 'Template: ' + child.$options.template);
                        }
                        return child;
                    }
                },

                /**
                 * Try to get a cached instance of the current component.
                 *
                 * @return {Vue|undefined}
                 */

                getCached: function getCached() {
                    return this.keepAlive && this.cache[this.Component.cid];
                },

                /**
                 * Teardown the current child, but defers cleanup so
                 * that we can separate the destroy and removal steps.
                 *
                 * @param {Boolean} defer
                 */

                unbuild: function unbuild(defer) {
                    if (this.waitingFor) {
                        this.waitingFor.$destroy();
                        this.waitingFor = null;
                    }
                    var child = this.childVM;
                    if (!child || this.keepAlive) {
                        if (child) {
                            // remove ref
                            child._updateRef(true);
                        }
                        return;
                    }
                    // the sole purpose of `deferCleanup` is so that we can
                    // "deactivate" the vm right now and perform DOM removal
                    // later.
                    child.$destroy(false, defer);
                },

                /**
                 * Remove current destroyed child and manually do
                 * the cleanup after removal.
                 *
                 * @param {Function} cb
                 */

                remove: function remove(child, cb) {
                    var keepAlive = this.keepAlive;
                    if (child) {
                        // we may have a component switch when a previous
                        // component is still being transitioned out.
                        // we want to trigger only one lastest insertion cb
                        // when the existing transition finishes. (#1119)
                        this.pendingRemovals++;
                        this.pendingRemovalCb = cb;
                        var self = this;
                        child.$remove(function () {
                            self.pendingRemovals--;
                            if (!keepAlive) child._cleanup();
                            if (!self.pendingRemovals && self.pendingRemovalCb) {
                                self.pendingRemovalCb();
                                self.pendingRemovalCb = null;
                            }
                        });
                    } else if (cb) {
                        cb();
                    }
                },

                /**
                 * Actually swap the components, depending on the
                 * transition mode. Defaults to simultaneous.
                 *
                 * @param {Vue} target
                 * @param {Function} [cb]
                 */

                transition: function transition(target, cb) {
                    var self = this;
                    var current = this.childVM;
                    // for devtool inspection
                    if (process.env.NODE_ENV !== 'production') {
                        if (current) current._inactive = true;
                        target._inactive = false;
                    }
                    this.childVM = target;
                    switch (self.params.transitionMode) {
                        case 'in-out':
                            target.$before(self.anchor, function () {
                                self.remove(current, cb);
                            });
                            break;
                        case 'out-in':
                            self.remove(current, function () {
                                target.$before(self.anchor, cb);
                            });
                            break;
                        default:
                            self.remove(current);
                            target.$before(self.anchor, cb);
                    }
                },

                /**
                 * Unbind.
                 */

                unbind: function unbind() {
                    this.invalidatePending();
                    // Do not defer cleanup when unbinding
                    this.unbuild();
                    // destroy all keep-alive cached instances
                    if (this.cache) {
                        for (var key in this.cache) {
                            this.cache[key].$destroy();
                        }
                        this.cache = null;
                    }
                }
            };

            var vClass = {

                deep: true,

                update: function update(value) {
                    if (value && typeof value === 'string') {
                        this.handleObject(stringToObject(value));
                    } else if (isPlainObject(value)) {
                        this.handleObject(value);
                    } else if (isArray(value)) {
                        this.handleArray(value);
                    } else {
                        this.cleanup();
                    }
                },

                handleObject: function handleObject(value) {
                    this.cleanup(value);
                    var keys = this.prevKeys = Object.keys(value);
                    for (var i = 0, l = keys.length; i < l; i++) {
                        var key = keys[i];
                        if (value[key]) {
                            addClass(this.el, key);
                        } else {
                            removeClass(this.el, key);
                        }
                    }
                },

                handleArray: function handleArray(value) {
                    this.cleanup(value);
                    for (var i = 0, l = value.length; i < l; i++) {
                        if (value[i]) {
                            addClass(this.el, value[i]);
                        }
                    }
                    this.prevKeys = value.slice();
                },

                cleanup: function cleanup(value) {
                    if (this.prevKeys) {
                        var i = this.prevKeys.length;
                        while (i--) {
                            var key = this.prevKeys[i];
                            if (key && (!value || !contains$1(value, key))) {
                                removeClass(this.el, key);
                            }
                        }
                    }
                }
            };

            function stringToObject(value) {
                var res = {};
                var keys = value.trim().split(/\s+/);
                var i = keys.length;
                while (i--) {
                    res[keys[i]] = true;
                }
                return res;
            }

            function contains$1(value, key) {
                return isArray(value) ? value.indexOf(key) > -1 : hasOwn(value, key);
            }

            var internalDirectives = {
                style: style,
                'class': vClass,
                component: component,
                prop: propDef,
                transition: transition
            };

            var propBindingModes = config._propBindingModes;
            var empty = {};

// regexes
            var identRE$1 = /^[$_a-zA-Z]+[\w$]*$/;
            var settablePathRE = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*|\[[^\[\]]+\])*$/;

            /**
             * Compile props on a root element and return
             * a props link function.
             *
             * @param {Element|DocumentFragment} el
             * @param {Array} propOptions
             * @return {Function} propsLinkFn
             */

            function compileProps(el, propOptions) {
                var props = [];
                var names = Object.keys(propOptions);
                var i = names.length;
                var options, name, attr, value, path, parsed, prop;
                while (i--) {
                    name = names[i];
                    options = propOptions[name] || empty;

                    if (process.env.NODE_ENV !== 'production' && name === '$data') {
                        warn('Do not use $data as prop.');
                        continue;
                    }

                    // props could contain dashes, which will be
                    // interpreted as minus calculations by the parser
                    // so we need to camelize the path here
                    path = camelize(name);
                    if (!identRE$1.test(path)) {
                        process.env.NODE_ENV !== 'production' && warn('Invalid prop key: "' + name + '". Prop keys ' + 'must be valid identifiers.');
                        continue;
                    }

                    prop = {
                        name: name,
                        path: path,
                        options: options,
                        mode: propBindingModes.ONE_WAY,
                        raw: null
                    };

                    attr = hyphenate(name);
                    // first check dynamic version
                    if ((value = getBindAttr(el, attr)) === null) {
                        if ((value = getBindAttr(el, attr + '.sync')) !== null) {
                            prop.mode = propBindingModes.TWO_WAY;
                        } else if ((value = getBindAttr(el, attr + '.once')) !== null) {
                            prop.mode = propBindingModes.ONE_TIME;
                        }
                    }
                    if (value !== null) {
                        // has dynamic binding!
                        prop.raw = value;
                        parsed = parseDirective(value);
                        value = parsed.expression;
                        prop.filters = parsed.filters;
                        // check binding type
                        if (isLiteral(value) && !parsed.filters) {
                            // for expressions containing literal numbers and
                            // booleans, there's no need to setup a prop binding,
                            // so we can optimize them as a one-time set.
                            prop.optimizedLiteral = true;
                        } else {
                            prop.dynamic = true;
                            // check non-settable path for two-way bindings
                            if (process.env.NODE_ENV !== 'production' && prop.mode === propBindingModes.TWO_WAY && !settablePathRE.test(value)) {
                                prop.mode = propBindingModes.ONE_WAY;
                                warn('Cannot bind two-way prop with non-settable ' + 'parent path: ' + value);
                            }
                        }
                        prop.parentPath = value;

                        // warn required two-way
                        if (process.env.NODE_ENV !== 'production' && options.twoWay && prop.mode !== propBindingModes.TWO_WAY) {
                            warn('Prop "' + name + '" expects a two-way binding type.');
                        }
                    } else if ((value = getAttr(el, attr)) !== null) {
                        // has literal binding!
                        prop.raw = value;
                    } else if (options.required) {
                        // warn missing required
                        process.env.NODE_ENV !== 'production' && warn('Missing required prop: ' + name);
                    }
                    // push prop
                    props.push(prop);
                }
                return makePropsLinkFn(props);
            }

            /**
             * Build a function that applies props to a vm.
             *
             * @param {Array} props
             * @return {Function} propsLinkFn
             */

            function makePropsLinkFn(props) {
                return function propsLinkFn(vm, scope) {
                    // store resolved props info
                    vm._props = {};
                    var i = props.length;
                    var prop, path, options, value, raw;
                    while (i--) {
                        prop = props[i];
                        raw = prop.raw;
                        path = prop.path;
                        options = prop.options;
                        vm._props[path] = prop;
                        if (raw === null) {
                            // initialize absent prop
                            initProp(vm, prop, getDefault(vm, options));
                        } else if (prop.dynamic) {
                            // dynamic prop
                            if (vm._context) {
                                if (prop.mode === propBindingModes.ONE_TIME) {
                                    // one time binding
                                    value = (scope || vm._context).$get(prop.parentPath);
                                    initProp(vm, prop, value);
                                } else {
                                    // dynamic binding
                                    vm._bindDir({
                                        name: 'prop',
                                        def: propDef,
                                        prop: prop
                                    }, null, null, scope); // el, host, scope
                                }
                            } else {
                                process.env.NODE_ENV !== 'production' && warn('Cannot bind dynamic prop on a root instance' + ' with no parent: ' + prop.name + '="' + raw + '"');
                            }
                        } else if (prop.optimizedLiteral) {
                            // optimized literal, cast it and just set once
                            var stripped = stripQuotes(raw);
                            value = stripped === raw ? toBoolean(toNumber(raw)) : stripped;
                            initProp(vm, prop, value);
                        } else {
                            // string literal, but we need to cater for
                            // Boolean props with no value
                            value = options.type === Boolean && raw === '' ? true : raw;
                            initProp(vm, prop, value);
                        }
                    }
                };
            }

            /**
             * Get the default value of a prop.
             *
             * @param {Vue} vm
             * @param {Object} options
             * @return {*}
             */

            function getDefault(vm, options) {
                // no default, return undefined
                if (!hasOwn(options, 'default')) {
                    // absent boolean value defaults to false
                    return options.type === Boolean ? false : undefined;
                }
                var def = options['default'];
                // warn against non-factory defaults for Object & Array
                if (isObject(def)) {
                    process.env.NODE_ENV !== 'production' && warn('Object/Array as default prop values will be shared ' + 'across multiple instances. Use a factory function ' + 'to return the default value instead.');
                }
                // call factory function for non-Function types
                return typeof def === 'function' && options.type !== Function ? def.call(vm) : def;
            }

// special binding prefixes
            var bindRE = /^v-bind:|^:/;
            var onRE = /^v-on:|^@/;
            var dirAttrRE = /^v-([^:]+)(?:$|:(.*)$)/;
            var modifierRE = /\.[^\.]+/g;
            var transitionRE = /^(v-bind:|:)?transition$/;

// terminal directives
            var terminalDirectives = ['for', 'if'];

// default directive priority
            var DEFAULT_PRIORITY = 1000;

            /**
             * Compile a template and return a reusable composite link
             * function, which recursively contains more link functions
             * inside. This top level compile function would normally
             * be called on instance root nodes, but can also be used
             * for partial compilation if the partial argument is true.
             *
             * The returned composite link function, when called, will
             * return an unlink function that tearsdown all directives
             * created during the linking phase.
             *
             * @param {Element|DocumentFragment} el
             * @param {Object} options
             * @param {Boolean} partial
             * @return {Function}
             */

            function compile(el, options, partial) {
                // link function for the node itself.
                var nodeLinkFn = partial || !options._asComponent ? compileNode(el, options) : null;
                // link function for the childNodes
                var childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && el.tagName !== 'SCRIPT' && el.hasChildNodes() ? compileNodeList(el.childNodes, options) : null;

                /**
                 * A composite linker function to be called on a already
                 * compiled piece of DOM, which instantiates all directive
                 * instances.
                 *
                 * @param {Vue} vm
                 * @param {Element|DocumentFragment} el
                 * @param {Vue} [host] - host vm of transcluded content
                 * @param {Object} [scope] - v-for scope
                 * @param {Fragment} [frag] - link context fragment
                 * @return {Function|undefined}
                 */

                return function compositeLinkFn(vm, el, host, scope, frag) {
                    // cache childNodes before linking parent, fix #657
                    var childNodes = toArray(el.childNodes);
                    // link
                    var dirs = linkAndCapture(function compositeLinkCapturer() {
                        if (nodeLinkFn) nodeLinkFn(vm, el, host, scope, frag);
                        if (childLinkFn) childLinkFn(vm, childNodes, host, scope, frag);
                    }, vm);
                    return makeUnlinkFn(vm, dirs);
                };
            }

            /**
             * Apply a linker to a vm/element pair and capture the
             * directives created during the process.
             *
             * @param {Function} linker
             * @param {Vue} vm
             */

            function linkAndCapture(linker, vm) {
                /* istanbul ignore if */
                if (process.env.NODE_ENV === 'production') {
                    // reset directives before every capture in production
                    // mode, so that when unlinking we don't need to splice
                    // them out (which turns out to be a perf hit).
                    // they are kept in development mode because they are
                    // useful for Vue's own tests.
                    vm._directives = [];
                }
                var originalDirCount = vm._directives.length;
                linker();
                var dirs = vm._directives.slice(originalDirCount);
                dirs.sort(directiveComparator);
                for (var i = 0, l = dirs.length; i < l; i++) {
                    dirs[i]._bind();
                }
                return dirs;
            }

            /**
             * Directive priority sort comparator
             *
             * @param {Object} a
             * @param {Object} b
             */

            function directiveComparator(a, b) {
                a = a.descriptor.def.priority || DEFAULT_PRIORITY;
                b = b.descriptor.def.priority || DEFAULT_PRIORITY;
                return a > b ? -1 : a === b ? 0 : 1;
            }

            /**
             * Linker functions return an unlink function that
             * tearsdown all directives instances generated during
             * the process.
             *
             * We create unlink functions with only the necessary
             * information to avoid retaining additional closures.
             *
             * @param {Vue} vm
             * @param {Array} dirs
             * @param {Vue} [context]
             * @param {Array} [contextDirs]
             * @return {Function}
             */

            function makeUnlinkFn(vm, dirs, context, contextDirs) {
                function unlink(destroying) {
                    teardownDirs(vm, dirs, destroying);
                    if (context && contextDirs) {
                        teardownDirs(context, contextDirs);
                    }
                }

                // expose linked directives
                unlink.dirs = dirs;
                return unlink;
            }

            /**
             * Teardown partial linked directives.
             *
             * @param {Vue} vm
             * @param {Array} dirs
             * @param {Boolean} destroying
             */

            function teardownDirs(vm, dirs, destroying) {
                var i = dirs.length;
                while (i--) {
                    dirs[i]._teardown();
                    if (process.env.NODE_ENV !== 'production' && !destroying) {
                        vm._directives.$remove(dirs[i]);
                    }
                }
            }

            /**
             * Compile link props on an instance.
             *
             * @param {Vue} vm
             * @param {Element} el
             * @param {Object} props
             * @param {Object} [scope]
             * @return {Function}
             */

            function compileAndLinkProps(vm, el, props, scope) {
                var propsLinkFn = compileProps(el, props);
                var propDirs = linkAndCapture(function () {
                    propsLinkFn(vm, scope);
                }, vm);
                return makeUnlinkFn(vm, propDirs);
            }

            /**
             * Compile the root element of an instance.
             *
             * 1. attrs on context container (context scope)
             * 2. attrs on the component template root node, if
             *    replace:true (child scope)
             *
             * If this is a fragment instance, we only need to compile 1.
             *
             * @param {Element} el
             * @param {Object} options
             * @param {Object} contextOptions
             * @return {Function}
             */

            function compileRoot(el, options, contextOptions) {
                var containerAttrs = options._containerAttrs;
                var replacerAttrs = options._replacerAttrs;
                var contextLinkFn, replacerLinkFn;

                // only need to compile other attributes for
                // non-fragment instances
                if (el.nodeType !== 11) {
                    // for components, container and replacer need to be
                    // compiled separately and linked in different scopes.
                    if (options._asComponent) {
                        // 2. container attributes
                        if (containerAttrs && contextOptions) {
                            contextLinkFn = compileDirectives(containerAttrs, contextOptions);
                        }
                        if (replacerAttrs) {
                            // 3. replacer attributes
                            replacerLinkFn = compileDirectives(replacerAttrs, options);
                        }
                    } else {
                        // non-component, just compile as a normal element.
                        replacerLinkFn = compileDirectives(el.attributes, options);
                    }
                } else if (process.env.NODE_ENV !== 'production' && containerAttrs) {
                    // warn container directives for fragment instances
                    var names = containerAttrs.filter(function (attr) {
                        // allow vue-loader/vueify scoped css attributes
                        return attr.name.indexOf('_v-') < 0 &&
                                // allow event listeners
                            !onRE.test(attr.name) &&
                                // allow slots
                            attr.name !== 'slot';
                    }).map(function (attr) {
                        return '"' + attr.name + '"';
                    });
                    if (names.length) {
                        var plural = names.length > 1;
                        warn('Attribute' + (plural ? 's ' : ' ') + names.join(', ') + (plural ? ' are' : ' is') + ' ignored on component ' + '<' + options.el.tagName.toLowerCase() + '> because ' + 'the component is a fragment instance: ' + 'http://vuejs.org/guide/components.html#Fragment_Instance');
                    }
                }

                options._containerAttrs = options._replacerAttrs = null;
                return function rootLinkFn(vm, el, scope) {
                    // link context scope dirs
                    var context = vm._context;
                    var contextDirs;
                    if (context && contextLinkFn) {
                        contextDirs = linkAndCapture(function () {
                            contextLinkFn(context, el, null, scope);
                        }, context);
                    }

                    // link self
                    var selfDirs = linkAndCapture(function () {
                        if (replacerLinkFn) replacerLinkFn(vm, el);
                    }, vm);

                    // return the unlink function that tearsdown context
                    // container directives.
                    return makeUnlinkFn(vm, selfDirs, context, contextDirs);
                };
            }

            /**
             * Compile a node and return a nodeLinkFn based on the
             * node type.
             *
             * @param {Node} node
             * @param {Object} options
             * @return {Function|null}
             */

            function compileNode(node, options) {
                var type = node.nodeType;
                if (type === 1 && node.tagName !== 'SCRIPT') {
                    return compileElement(node, options);
                } else if (type === 3 && node.data.trim()) {
                    return compileTextNode(node, options);
                } else {
                    return null;
                }
            }

            /**
             * Compile an element and return a nodeLinkFn.
             *
             * @param {Element} el
             * @param {Object} options
             * @return {Function|null}
             */

            function compileElement(el, options) {
                // preprocess textareas.
                // textarea treats its text content as the initial value.
                // just bind it as an attr directive for value.
                if (el.tagName === 'TEXTAREA') {
                    var tokens = parseText(el.value);
                    if (tokens) {
                        el.setAttribute(':value', tokensToExp(tokens));
                        el.value = '';
                    }
                }
                var linkFn;
                var hasAttrs = el.hasAttributes();
                // check terminal directives (for & if)
                if (hasAttrs) {
                    linkFn = checkTerminalDirectives(el, options);
                }
                // check element directives
                if (!linkFn) {
                    linkFn = checkElementDirectives(el, options);
                }
                // check component
                if (!linkFn) {
                    linkFn = checkComponent(el, options);
                }
                // normal directives
                if (!linkFn && hasAttrs) {
                    linkFn = compileDirectives(el.attributes, options);
                }
                return linkFn;
            }

            /**
             * Compile a textNode and return a nodeLinkFn.
             *
             * @param {TextNode} node
             * @param {Object} options
             * @return {Function|null} textNodeLinkFn
             */

            function compileTextNode(node, options) {
                // skip marked text nodes
                if (node._skip) {
                    return removeText;
                }

                var tokens = parseText(node.wholeText);
                if (!tokens) {
                    return null;
                }

                // mark adjacent text nodes as skipped,
                // because we are using node.wholeText to compile
                // all adjacent text nodes together. This fixes
                // issues in IE where sometimes it splits up a single
                // text node into multiple ones.
                var next = node.nextSibling;
                while (next && next.nodeType === 3) {
                    next._skip = true;
                    next = next.nextSibling;
                }

                var frag = document.createDocumentFragment();
                var el, token;
                for (var i = 0, l = tokens.length; i < l; i++) {
                    token = tokens[i];
                    el = token.tag ? processTextToken(token, options) : document.createTextNode(token.value);
                    frag.appendChild(el);
                }
                return makeTextNodeLinkFn(tokens, frag, options);
            }

            /**
             * Linker for an skipped text node.
             *
             * @param {Vue} vm
             * @param {Text} node
             */

            function removeText(vm, node) {
                remove(node);
            }

            /**
             * Process a single text token.
             *
             * @param {Object} token
             * @param {Object} options
             * @return {Node}
             */

            function processTextToken(token, options) {
                var el;
                if (token.oneTime) {
                    el = document.createTextNode(token.value);
                } else {
                    if (token.html) {
                        el = document.createComment('v-html');
                        setTokenType('html');
                    } else {
                        // IE will clean up empty textNodes during
                        // frag.cloneNode(true), so we have to give it
                        // something here...
                        el = document.createTextNode(' ');
                        setTokenType('text');
                    }
                }
                function setTokenType(type) {
                    if (token.descriptor) return;
                    var parsed = parseDirective(token.value);
                    token.descriptor = {
                        name: type,
                        def: publicDirectives[type],
                        expression: parsed.expression,
                        filters: parsed.filters
                    };
                }

                return el;
            }

            /**
             * Build a function that processes a textNode.
             *
             * @param {Array<Object>} tokens
             * @param {DocumentFragment} frag
             */

            function makeTextNodeLinkFn(tokens, frag) {
                return function textNodeLinkFn(vm, el, host, scope) {
                    var fragClone = frag.cloneNode(true);
                    var childNodes = toArray(fragClone.childNodes);
                    var token, value, node;
                    for (var i = 0, l = tokens.length; i < l; i++) {
                        token = tokens[i];
                        value = token.value;
                        if (token.tag) {
                            node = childNodes[i];
                            if (token.oneTime) {
                                value = (scope || vm).$eval(value);
                                if (token.html) {
                                    replace(node, parseTemplate(value, true));
                                } else {
                                    node.data = value;
                                }
                            } else {
                                vm._bindDir(token.descriptor, node, host, scope);
                            }
                        }
                    }
                    replace(el, fragClone);
                };
            }

            /**
             * Compile a node list and return a childLinkFn.
             *
             * @param {NodeList} nodeList
             * @param {Object} options
             * @return {Function|undefined}
             */

            function compileNodeList(nodeList, options) {
                var linkFns = [];
                var nodeLinkFn, childLinkFn, node;
                for (var i = 0, l = nodeList.length; i < l; i++) {
                    node = nodeList[i];
                    nodeLinkFn = compileNode(node, options);
                    childLinkFn = !(nodeLinkFn && nodeLinkFn.terminal) && node.tagName !== 'SCRIPT' && node.hasChildNodes() ? compileNodeList(node.childNodes, options) : null;
                    linkFns.push(nodeLinkFn, childLinkFn);
                }
                return linkFns.length ? makeChildLinkFn(linkFns) : null;
            }

            /**
             * Make a child link function for a node's childNodes.
             *
             * @param {Array<Function>} linkFns
             * @return {Function} childLinkFn
             */

            function makeChildLinkFn(linkFns) {
                return function childLinkFn(vm, nodes, host, scope, frag) {
                    var node, nodeLinkFn, childrenLinkFn;
                    for (var i = 0, n = 0, l = linkFns.length; i < l; n++) {
                        node = nodes[n];
                        nodeLinkFn = linkFns[i++];
                        childrenLinkFn = linkFns[i++];
                        // cache childNodes before linking parent, fix #657
                        var childNodes = toArray(node.childNodes);
                        if (nodeLinkFn) {
                            nodeLinkFn(vm, node, host, scope, frag);
                        }
                        if (childrenLinkFn) {
                            childrenLinkFn(vm, childNodes, host, scope, frag);
                        }
                    }
                };
            }

            /**
             * Check for element directives (custom elements that should
             * be resovled as terminal directives).
             *
             * @param {Element} el
             * @param {Object} options
             */

            function checkElementDirectives(el, options) {
                var tag = el.tagName.toLowerCase();
                if (commonTagRE.test(tag)) return;
                // special case: give named slot a higher priority
                // than unnamed slots
                if (tag === 'slot' && hasBindAttr(el, 'name')) {
                    tag = '_namedSlot';
                }
                var def = resolveAsset(options, 'elementDirectives', tag);
                if (def) {
                    return makeTerminalNodeLinkFn(el, tag, '', options, def);
                }
            }

            /**
             * Check if an element is a component. If yes, return
             * a component link function.
             *
             * @param {Element} el
             * @param {Object} options
             * @return {Function|undefined}
             */

            function checkComponent(el, options) {
                var component = checkComponentAttr(el, options);
                if (component) {
                    var ref = findRef(el);
                    var descriptor = {
                        name: 'component',
                        ref: ref,
                        expression: component.id,
                        def: internalDirectives.component,
                        modifiers: {
                            literal: !component.dynamic
                        }
                    };
                    var componentLinkFn = function componentLinkFn(vm, el, host, scope, frag) {
                        if (ref) {
                            defineReactive((scope || vm).$refs, ref, null);
                        }
                        vm._bindDir(descriptor, el, host, scope, frag);
                    };
                    componentLinkFn.terminal = true;
                    return componentLinkFn;
                }
            }

            /**
             * Check an element for terminal directives in fixed order.
             * If it finds one, return a terminal link function.
             *
             * @param {Element} el
             * @param {Object} options
             * @return {Function} terminalLinkFn
             */

            function checkTerminalDirectives(el, options) {
                // skip v-pre
                if (getAttr(el, 'v-pre') !== null) {
                    return skip;
                }
                // skip v-else block, but only if following v-if
                if (el.hasAttribute('v-else')) {
                    var prev = el.previousElementSibling;
                    if (prev && prev.hasAttribute('v-if')) {
                        return skip;
                    }
                }
                var value, dirName;
                for (var i = 0, l = terminalDirectives.length; i < l; i++) {
                    dirName = terminalDirectives[i];
                    value = el.getAttribute('v-' + dirName);
                    if (value != null) {
                        return makeTerminalNodeLinkFn(el, dirName, value, options);
                    }
                }
            }

            function skip() {
            }

            skip.terminal = true;

            /**
             * Build a node link function for a terminal directive.
             * A terminal link function terminates the current
             * compilation recursion and handles compilation of the
             * subtree in the directive.
             *
             * @param {Element} el
             * @param {String} dirName
             * @param {String} value
             * @param {Object} options
             * @param {Object} [def]
             * @return {Function} terminalLinkFn
             */

            function makeTerminalNodeLinkFn(el, dirName, value, options, def) {
                var parsed = parseDirective(value);
                var descriptor = {
                    name: dirName,
                    expression: parsed.expression,
                    filters: parsed.filters,
                    raw: value,
                    // either an element directive, or if/for
                    def: def || publicDirectives[dirName]
                };
                // check ref for v-for and router-view
                if (dirName === 'for' || dirName === 'router-view') {
                    descriptor.ref = findRef(el);
                }
                var fn = function terminalNodeLinkFn(vm, el, host, scope, frag) {
                    if (descriptor.ref) {
                        defineReactive((scope || vm).$refs, descriptor.ref, null);
                    }
                    vm._bindDir(descriptor, el, host, scope, frag);
                };
                fn.terminal = true;
                return fn;
            }

            /**
             * Compile the directives on an element and return a linker.
             *
             * @param {Array|NamedNodeMap} attrs
             * @param {Object} options
             * @return {Function}
             */

            function compileDirectives(attrs, options) {
                var i = attrs.length;
                var dirs = [];
                var attr, name, value, rawName, rawValue, dirName, arg, modifiers, dirDef, tokens, matched;
                while (i--) {
                    attr = attrs[i];
                    name = rawName = attr.name;
                    value = rawValue = attr.value;
                    tokens = parseText(value);
                    // reset arg
                    arg = null;
                    // check modifiers
                    modifiers = parseModifiers(name);
                    name = name.replace(modifierRE, '');

                    // attribute interpolations
                    if (tokens) {
                        value = tokensToExp(tokens);
                        arg = name;
                        pushDir('bind', publicDirectives.bind, tokens);
                        // warn against mixing mustaches with v-bind
                        if (process.env.NODE_ENV !== 'production') {
                            if (name === 'class' && Array.prototype.some.call(attrs, function (attr) {
                                    return attr.name === ':class' || attr.name === 'v-bind:class';
                                })) {
                                warn('class="' + rawValue + '": Do not mix mustache interpolation ' + 'and v-bind for "class" on the same element. Use one or the other.');
                            }
                        }
                    } else

                    // special attribute: transition
                    if (transitionRE.test(name)) {
                        modifiers.literal = !bindRE.test(name);
                        pushDir('transition', internalDirectives.transition);
                    } else

                    // event handlers
                    if (onRE.test(name)) {
                        arg = name.replace(onRE, '');
                        pushDir('on', publicDirectives.on);
                    } else

                    // attribute bindings
                    if (bindRE.test(name)) {
                        dirName = name.replace(bindRE, '');
                        if (dirName === 'style' || dirName === 'class') {
                            pushDir(dirName, internalDirectives[dirName]);
                        } else {
                            arg = dirName;
                            pushDir('bind', publicDirectives.bind);
                        }
                    } else

                    // normal directives
                    if (matched = name.match(dirAttrRE)) {
                        dirName = matched[1];
                        arg = matched[2];

                        // skip v-else (when used with v-show)
                        if (dirName === 'else') {
                            continue;
                        }

                        dirDef = resolveAsset(options, 'directives', dirName);

                        if (process.env.NODE_ENV !== 'production') {
                            assertAsset(dirDef, 'directive', dirName);
                        }

                        if (dirDef) {
                            pushDir(dirName, dirDef);
                        }
                    }
                }

                /**
                 * Push a directive.
                 *
                 * @param {String} dirName
                 * @param {Object|Function} def
                 * @param {Array} [interpTokens]
                 */

                function pushDir(dirName, def, interpTokens) {
                    var hasOneTimeToken = interpTokens && hasOneTime(interpTokens);
                    var parsed = !hasOneTimeToken && parseDirective(value);
                    dirs.push({
                        name: dirName,
                        attr: rawName,
                        raw: rawValue,
                        def: def,
                        arg: arg,
                        modifiers: modifiers,
                        // conversion from interpolation strings with one-time token
                        // to expression is differed until directive bind time so that we
                        // have access to the actual vm context for one-time bindings.
                        expression: parsed && parsed.expression,
                        filters: parsed && parsed.filters,
                        interp: interpTokens,
                        hasOneTime: hasOneTimeToken
                    });
                }

                if (dirs.length) {
                    return makeNodeLinkFn(dirs);
                }
            }

            /**
             * Parse modifiers from directive attribute name.
             *
             * @param {String} name
             * @return {Object}
             */

            function parseModifiers(name) {
                var res = Object.create(null);
                var match = name.match(modifierRE);
                if (match) {
                    var i = match.length;
                    while (i--) {
                        res[match[i].slice(1)] = true;
                    }
                }
                return res;
            }

            /**
             * Build a link function for all directives on a single node.
             *
             * @param {Array} directives
             * @return {Function} directivesLinkFn
             */

            function makeNodeLinkFn(directives) {
                return function nodeLinkFn(vm, el, host, scope, frag) {
                    // reverse apply because it's sorted low to high
                    var i = directives.length;
                    while (i--) {
                        vm._bindDir(directives[i], el, host, scope, frag);
                    }
                };
            }

            /**
             * Check if an interpolation string contains one-time tokens.
             *
             * @param {Array} tokens
             * @return {Boolean}
             */

            function hasOneTime(tokens) {
                var i = tokens.length;
                while (i--) {
                    if (tokens[i].oneTime) return true;
                }
            }

            var specialCharRE = /[^\w\-:\.]/;

            /**
             * Process an element or a DocumentFragment based on a
             * instance option object. This allows us to transclude
             * a template node/fragment before the instance is created,
             * so the processed fragment can then be cloned and reused
             * in v-for.
             *
             * @param {Element} el
             * @param {Object} options
             * @return {Element|DocumentFragment}
             */

            function transclude(el, options) {
                // extract container attributes to pass them down
                // to compiler, because they need to be compiled in
                // parent scope. we are mutating the options object here
                // assuming the same object will be used for compile
                // right after this.
                if (options) {
                    options._containerAttrs = extractAttrs(el);
                }
                // for template tags, what we want is its content as
                // a documentFragment (for fragment instances)
                if (isTemplate(el)) {
                    el = parseTemplate(el);
                }
                if (options) {
                    if (options._asComponent && !options.template) {
                        options.template = '<slot></slot>';
                    }
                    if (options.template) {
                        options._content = extractContent(el);
                        el = transcludeTemplate(el, options);
                    }
                }
                if (el instanceof DocumentFragment) {
                    // anchors for fragment instance
                    // passing in `persist: true` to avoid them being
                    // discarded by IE during template cloning
                    prepend(createAnchor('v-start', true), el);
                    el.appendChild(createAnchor('v-end', true));
                }
                return el;
            }

            /**
             * Process the template option.
             * If the replace option is true this will swap the $el.
             *
             * @param {Element} el
             * @param {Object} options
             * @return {Element|DocumentFragment}
             */

            function transcludeTemplate(el, options) {
                var template = options.template;
                var frag = parseTemplate(template, true);
                if (frag) {
                    var replacer = frag.firstChild;
                    var tag = replacer.tagName && replacer.tagName.toLowerCase();
                    if (options.replace) {
                        /* istanbul ignore if */
                        if (el === document.body) {
                            process.env.NODE_ENV !== 'production' && warn('You are mounting an instance with a template to ' + '<body>. This will replace <body> entirely. You ' + 'should probably use `replace: false` here.');
                        }
                        // there are many cases where the instance must
                        // become a fragment instance: basically anything that
                        // can create more than 1 root nodes.
                        if (
                            // multi-children template
                        frag.childNodes.length > 1 ||
                            // non-element template
                        replacer.nodeType !== 1 ||
                            // single nested component
                        tag === 'component' || resolveAsset(options, 'components', tag) || hasBindAttr(replacer, 'is') ||
                            // element directive
                        resolveAsset(options, 'elementDirectives', tag) ||
                            // for block
                        replacer.hasAttribute('v-for') ||
                            // if block
                        replacer.hasAttribute('v-if')) {
                            return frag;
                        } else {
                            options._replacerAttrs = extractAttrs(replacer);
                            mergeAttrs(el, replacer);
                            return replacer;
                        }
                    } else {
                        el.appendChild(frag);
                        return el;
                    }
                } else {
                    process.env.NODE_ENV !== 'production' && warn('Invalid template option: ' + template);
                }
            }

            /**
             * Helper to extract a component container's attributes
             * into a plain object array.
             *
             * @param {Element} el
             * @return {Array}
             */

            function extractAttrs(el) {
                if (el.nodeType === 1 && el.hasAttributes()) {
                    return toArray(el.attributes);
                }
            }

            /**
             * Merge the attributes of two elements, and make sure
             * the class names are merged properly.
             *
             * @param {Element} from
             * @param {Element} to
             */

            function mergeAttrs(from, to) {
                var attrs = from.attributes;
                var i = attrs.length;
                var name, value;
                while (i--) {
                    name = attrs[i].name;
                    value = attrs[i].value;
                    if (!to.hasAttribute(name) && !specialCharRE.test(name)) {
                        to.setAttribute(name, value);
                    } else if (name === 'class' && !parseText(value)) {
                        value.split(/\s+/).forEach(function (cls) {
                            addClass(to, cls);
                        });
                    }
                }
            }

            var compiler = Object.freeze({
                compile: compile,
                compileAndLinkProps: compileAndLinkProps,
                compileRoot: compileRoot,
                terminalDirectives: terminalDirectives,
                transclude: transclude
            });

            function stateMixin(Vue) {

                /**
                 * Accessor for `$data` property, since setting $data
                 * requires observing the new object and updating
                 * proxied properties.
                 */

                Object.defineProperty(Vue.prototype, '$data', {
                    get: function get() {
                        return this._data;
                    },
                    set: function set(newData) {
                        if (newData !== this._data) {
                            this._setData(newData);
                        }
                    }
                });

                /**
                 * Setup the scope of an instance, which contains:
                 * - observed data
                 * - computed properties
                 * - user methods
                 * - meta properties
                 */

                Vue.prototype._initState = function () {
                    this._initProps();
                    this._initMeta();
                    this._initMethods();
                    this._initData();
                    this._initComputed();
                };

                /**
                 * Initialize props.
                 */

                Vue.prototype._initProps = function () {
                    var options = this.$options;
                    var el = options.el;
                    var props = options.props;
                    if (props && !el) {
                        process.env.NODE_ENV !== 'production' && warn('Props will not be compiled if no `el` option is ' + 'provided at instantiation.');
                    }
                    // make sure to convert string selectors into element now
                    el = options.el = query(el);
                    this._propsUnlinkFn = el && el.nodeType === 1 && props
                        // props must be linked in proper scope if inside v-for
                        ? compileAndLinkProps(this, el, props, this._scope) : null;
                };

                /**
                 * Initialize the data.
                 */

                Vue.prototype._initData = function () {
                    var propsData = this._data;
                    var optionsDataFn = this.$options.data;
                    var optionsData = optionsDataFn && optionsDataFn();
                    var runtimeData;
                    if (process.env.NODE_ENV !== 'production') {
                        runtimeData = (typeof this._runtimeData === 'function' ? this._runtimeData() : this._runtimeData) || {};
                        this._runtimeData = null;
                    }
                    if (optionsData) {
                        this._data = optionsData;
                        for (var prop in propsData) {
                            if (process.env.NODE_ENV !== 'production' && hasOwn(optionsData, prop) && !hasOwn(runtimeData, prop)) {
                                warn('Data field "' + prop + '" is already defined ' + 'as a prop. Use prop default value instead.');
                            }
                            if (this._props[prop].raw !== null || !hasOwn(optionsData, prop)) {
                                set(optionsData, prop, propsData[prop]);
                            }
                        }
                    }
                    var data = this._data;
                    // proxy data on instance
                    var keys = Object.keys(data);
                    var i, key;
                    i = keys.length;
                    while (i--) {
                        key = keys[i];
                        this._proxy(key);
                    }
                    // observe data
                    observe(data, this);
                };

                /**
                 * Swap the instance's $data. Called in $data's setter.
                 *
                 * @param {Object} newData
                 */

                Vue.prototype._setData = function (newData) {
                    newData = newData || {};
                    var oldData = this._data;
                    this._data = newData;
                    var keys, key, i;
                    // unproxy keys not present in new data
                    keys = Object.keys(oldData);
                    i = keys.length;
                    while (i--) {
                        key = keys[i];
                        if (!(key in newData)) {
                            this._unproxy(key);
                        }
                    }
                    // proxy keys not already proxied,
                    // and trigger change for changed values
                    keys = Object.keys(newData);
                    i = keys.length;
                    while (i--) {
                        key = keys[i];
                        if (!hasOwn(this, key)) {
                            // new property
                            this._proxy(key);
                        }
                    }
                    oldData.__ob__.removeVm(this);
                    observe(newData, this);
                    this._digest();
                };

                /**
                 * Proxy a property, so that
                 * vm.prop === vm._data.prop
                 *
                 * @param {String} key
                 */

                Vue.prototype._proxy = function (key) {
                    if (!isReserved(key)) {
                        // need to store ref to self here
                        // because these getter/setters might
                        // be called by child scopes via
                        // prototype inheritance.
                        var self = this;
                        Object.defineProperty(self, key, {
                            configurable: true,
                            enumerable: true,
                            get: function proxyGetter() {
                                return self._data[key];
                            },
                            set: function proxySetter(val) {
                                self._data[key] = val;
                            }
                        });
                    }
                };

                /**
                 * Unproxy a property.
                 *
                 * @param {String} key
                 */

                Vue.prototype._unproxy = function (key) {
                    if (!isReserved(key)) {
                        delete this[key];
                    }
                };

                /**
                 * Force update on every watcher in scope.
                 */

                Vue.prototype._digest = function () {
                    for (var i = 0, l = this._watchers.length; i < l; i++) {
                        this._watchers[i].update(true); // shallow updates
                    }
                };

                /**
                 * Setup computed properties. They are essentially
                 * special getter/setters
                 */

                function noop() {
                }

                Vue.prototype._initComputed = function () {
                    var computed = this.$options.computed;
                    if (computed) {
                        for (var key in computed) {
                            var userDef = computed[key];
                            var def = {
                                enumerable: true,
                                configurable: true
                            };
                            if (typeof userDef === 'function') {
                                def.get = makeComputedGetter(userDef, this);
                                def.set = noop;
                            } else {
                                def.get = userDef.get ? userDef.cache !== false ? makeComputedGetter(userDef.get, this) : bind$1(userDef.get, this) : noop;
                                def.set = userDef.set ? bind$1(userDef.set, this) : noop;
                            }
                            Object.defineProperty(this, key, def);
                        }
                    }
                };

                function makeComputedGetter(getter, owner) {
                    var watcher = new Watcher(owner, getter, null, {
                        lazy: true
                    });
                    return function computedGetter() {
                        if (watcher.dirty) {
                            watcher.evaluate();
                        }
                        if (Dep.target) {
                            watcher.depend();
                        }
                        return watcher.value;
                    };
                }

                /**
                 * Setup instance methods. Methods must be bound to the
                 * instance since they might be passed down as a prop to
                 * child components.
                 */

                Vue.prototype._initMethods = function () {
                    var methods = this.$options.methods;
                    if (methods) {
                        for (var key in methods) {
                            this[key] = bind$1(methods[key], this);
                        }
                    }
                };

                /**
                 * Initialize meta information like $index, $key & $value.
                 */

                Vue.prototype._initMeta = function () {
                    var metas = this.$options._meta;
                    if (metas) {
                        for (var key in metas) {
                            defineReactive(this, key, metas[key]);
                        }
                    }
                };
            }

            var eventRE = /^v-on:|^@/;

            function eventsMixin(Vue) {

                /**
                 * Setup the instance's option events & watchers.
                 * If the value is a string, we pull it from the
                 * instance's methods by name.
                 */

                Vue.prototype._initEvents = function () {
                    var options = this.$options;
                    if (options._asComponent) {
                        registerComponentEvents(this, options.el);
                    }
                    registerCallbacks(this, '$on', options.events);
                    registerCallbacks(this, '$watch', options.watch);
                };

                /**
                 * Register v-on events on a child component
                 *
                 * @param {Vue} vm
                 * @param {Element} el
                 */

                function registerComponentEvents(vm, el) {
                    var attrs = el.attributes;
                    var name, handler;
                    for (var i = 0, l = attrs.length; i < l; i++) {
                        name = attrs[i].name;
                        if (eventRE.test(name)) {
                            name = name.replace(eventRE, '');
                            handler = (vm._scope || vm._context).$eval(attrs[i].value, true);
                            handler._fromParent = true;
                            vm.$on(name.replace(eventRE), handler);
                        }
                    }
                }

                /**
                 * Register callbacks for option events and watchers.
                 *
                 * @param {Vue} vm
                 * @param {String} action
                 * @param {Object} hash
                 */

                function registerCallbacks(vm, action, hash) {
                    if (!hash) return;
                    var handlers, key, i, j;
                    for (key in hash) {
                        handlers = hash[key];
                        if (isArray(handlers)) {
                            for (i = 0, j = handlers.length; i < j; i++) {
                                register(vm, action, key, handlers[i]);
                            }
                        } else {
                            register(vm, action, key, handlers);
                        }
                    }
                }

                /**
                 * Helper to register an event/watch callback.
                 *
                 * @param {Vue} vm
                 * @param {String} action
                 * @param {String} key
                 * @param {Function|String|Object} handler
                 * @param {Object} [options]
                 */

                function register(vm, action, key, handler, options) {
                    var type = typeof handler;
                    if (type === 'function') {
                        vm[action](key, handler, options);
                    } else if (type === 'string') {
                        var methods = vm.$options.methods;
                        var method = methods && methods[handler];
                        if (method) {
                            vm[action](key, method, options);
                        } else {
                            process.env.NODE_ENV !== 'production' && warn('Unknown method: "' + handler + '" when ' + 'registering callback for ' + action + ': "' + key + '".');
                        }
                    } else if (handler && type === 'object') {
                        register(vm, action, key, handler.handler, handler);
                    }
                }

                /**
                 * Setup recursive attached/detached calls
                 */

                Vue.prototype._initDOMHooks = function () {
                    this.$on('hook:attached', onAttached);
                    this.$on('hook:detached', onDetached);
                };

                /**
                 * Callback to recursively call attached hook on children
                 */

                function onAttached() {
                    if (!this._isAttached) {
                        this._isAttached = true;
                        this.$children.forEach(callAttach);
                    }
                }

                /**
                 * Iterator to call attached hook
                 *
                 * @param {Vue} child
                 */

                function callAttach(child) {
                    if (!child._isAttached && inDoc(child.$el)) {
                        child._callHook('attached');
                    }
                }

                /**
                 * Callback to recursively call detached hook on children
                 */

                function onDetached() {
                    if (this._isAttached) {
                        this._isAttached = false;
                        this.$children.forEach(callDetach);
                    }
                }

                /**
                 * Iterator to call detached hook
                 *
                 * @param {Vue} child
                 */

                function callDetach(child) {
                    if (child._isAttached && !inDoc(child.$el)) {
                        child._callHook('detached');
                    }
                }

                /**
                 * Trigger all handlers for a hook
                 *
                 * @param {String} hook
                 */

                Vue.prototype._callHook = function (hook) {
                    this.$emit('pre-hook:' + hook);
                    var handlers = this.$options[hook];
                    if (handlers) {
                        for (var i = 0, j = handlers.length; i < j; i++) {
                            handlers[i].call(this);
                        }
                    }
                    this.$emit('hook:' + hook);
                };
            }

            function noop() {
            }

            /**
             * A directive links a DOM element with a piece of data,
             * which is the result of evaluating an expression.
             * It registers a watcher with the expression and calls
             * the DOM update function when a change is triggered.
             *
             * @param {String} name
             * @param {Node} el
             * @param {Vue} vm
             * @param {Object} descriptor
             *                 - {String} name
             *                 - {Object} def
             *                 - {String} expression
             *                 - {Array<Object>} [filters]
             *                 - {Boolean} literal
             *                 - {String} attr
             *                 - {String} raw
             * @param {Object} def - directive definition object
             * @param {Vue} [host] - transclusion host component
             * @param {Object} [scope] - v-for scope
             * @param {Fragment} [frag] - owner fragment
             * @constructor
             */
            function Directive(descriptor, vm, el, host, scope, frag) {
                this.vm = vm;
                this.el = el;
                // copy descriptor properties
                this.descriptor = descriptor;
                this.name = descriptor.name;
                this.expression = descriptor.expression;
                this.arg = descriptor.arg;
                this.modifiers = descriptor.modifiers;
                this.filters = descriptor.filters;
                this.literal = this.modifiers && this.modifiers.literal;
                // private
                this._locked = false;
                this._bound = false;
                this._listeners = null;
                // link context
                this._host = host;
                this._scope = scope;
                this._frag = frag;
                // store directives on node in dev mode
                if (process.env.NODE_ENV !== 'production' && this.el) {
                    this.el._vue_directives = this.el._vue_directives || [];
                    this.el._vue_directives.push(this);
                }
            }

            /**
             * Initialize the directive, mixin definition properties,
             * setup the watcher, call definition bind() and update()
             * if present.
             *
             * @param {Object} def
             */

            Directive.prototype._bind = function () {
                var name = this.name;
                var descriptor = this.descriptor;

                // remove attribute
                if ((name !== 'cloak' || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
                    var attr = descriptor.attr || 'v-' + name;
                    this.el.removeAttribute(attr);
                }

                // copy def properties
                var def = descriptor.def;
                if (typeof def === 'function') {
                    this.update = def;
                } else {
                    extend(this, def);
                }

                // setup directive params
                this._setupParams();

                // initial bind
                if (this.bind) {
                    this.bind();
                }
                this._bound = true;

                if (this.literal) {
                    this.update && this.update(descriptor.raw);
                } else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
                    // wrapped updater for context
                    var dir = this;
                    if (this.update) {
                        this._update = function (val, oldVal) {
                            if (!dir._locked) {
                                dir.update(val, oldVal);
                            }
                        };
                    } else {
                        this._update = noop;
                    }
                    var preProcess = this._preProcess ? bind$1(this._preProcess, this) : null;
                    var postProcess = this._postProcess ? bind$1(this._postProcess, this) : null;
                    var watcher = this._watcher = new Watcher(this.vm, this.expression, this._update, // callback
                        {
                            filters: this.filters,
                            twoWay: this.twoWay,
                            deep: this.deep,
                            preProcess: preProcess,
                            postProcess: postProcess,
                            scope: this._scope
                        });
                    // v-model with inital inline value need to sync back to
                    // model instead of update to DOM on init. They would
                    // set the afterBind hook to indicate that.
                    if (this.afterBind) {
                        this.afterBind();
                    } else if (this.update) {
                        this.update(watcher.value);
                    }
                }
            };

            /**
             * Setup all param attributes, e.g. track-by,
             * transition-mode, etc...
             */

            Directive.prototype._setupParams = function () {
                if (!this.params) {
                    return;
                }
                var params = this.params;
                // swap the params array with a fresh object.
                this.params = Object.create(null);
                var i = params.length;
                var key, val, mappedKey;
                while (i--) {
                    key = params[i];
                    mappedKey = camelize(key);
                    val = getBindAttr(this.el, key);
                    if (val != null) {
                        // dynamic
                        this._setupParamWatcher(mappedKey, val);
                    } else {
                        // static
                        val = getAttr(this.el, key);
                        if (val != null) {
                            this.params[mappedKey] = val === '' ? true : val;
                        }
                    }
                }
            };

            /**
             * Setup a watcher for a dynamic param.
             *
             * @param {String} key
             * @param {String} expression
             */

            Directive.prototype._setupParamWatcher = function (key, expression) {
                var self = this;
                var called = false;
                var unwatch = (this._scope || this.vm).$watch(expression, function (val, oldVal) {
                    self.params[key] = val;
                    // since we are in immediate mode,
                    // only call the param change callbacks if this is not the first update.
                    if (called) {
                        var cb = self.paramWatchers && self.paramWatchers[key];
                        if (cb) {
                            cb.call(self, val, oldVal);
                        }
                    } else {
                        called = true;
                    }
                }, {
                    immediate: true,
                    user: false
                });
                (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(unwatch);
            };

            /**
             * Check if the directive is a function caller
             * and if the expression is a callable one. If both true,
             * we wrap up the expression and use it as the event
             * handler.
             *
             * e.g. on-click="a++"
             *
             * @return {Boolean}
             */

            Directive.prototype._checkStatement = function () {
                var expression = this.expression;
                if (expression && this.acceptStatement && !isSimplePath(expression)) {
                    var fn = parseExpression(expression).get;
                    var scope = this._scope || this.vm;
                    var handler = function handler(e) {
                        scope.$event = e;
                        fn.call(scope, scope);
                        scope.$event = null;
                    };
                    if (this.filters) {
                        handler = scope._applyFilters(handler, null, this.filters);
                    }
                    this.update(handler);
                    return true;
                }
            };

            /**
             * Set the corresponding value with the setter.
             * This should only be used in two-way directives
             * e.g. v-model.
             *
             * @param {*} value
             * @public
             */

            Directive.prototype.set = function (value) {
                /* istanbul ignore else */
                if (this.twoWay) {
                    this._withLock(function () {
                        this._watcher.set(value);
                    });
                } else if (process.env.NODE_ENV !== 'production') {
                    warn('Directive.set() can only be used inside twoWay' + 'directives.');
                }
            };

            /**
             * Execute a function while preventing that function from
             * triggering updates on this directive instance.
             *
             * @param {Function} fn
             */

            Directive.prototype._withLock = function (fn) {
                var self = this;
                self._locked = true;
                fn.call(self);
                nextTick(function () {
                    self._locked = false;
                });
            };

            /**
             * Convenience method that attaches a DOM event listener
             * to the directive element and autometically tears it down
             * during unbind.
             *
             * @param {String} event
             * @param {Function} handler
             * @param {Boolean} [useCapture]
             */

            Directive.prototype.on = function (event, handler, useCapture) {
                on$1(this.el, event, handler, useCapture);
                (this._listeners || (this._listeners = [])).push([event, handler]);
            };

            /**
             * Teardown the watcher and call unbind.
             */

            Directive.prototype._teardown = function () {
                if (this._bound) {
                    this._bound = false;
                    if (this.unbind) {
                        this.unbind();
                    }
                    if (this._watcher) {
                        this._watcher.teardown();
                    }
                    var listeners = this._listeners;
                    var i;
                    if (listeners) {
                        i = listeners.length;
                        while (i--) {
                            off(this.el, listeners[i][0], listeners[i][1]);
                        }
                    }
                    var unwatchFns = this._paramUnwatchFns;
                    if (unwatchFns) {
                        i = unwatchFns.length;
                        while (i--) {
                            unwatchFns[i]();
                        }
                    }
                    if (process.env.NODE_ENV !== 'production' && this.el) {
                        this.el._vue_directives.$remove(this);
                    }
                    this.vm = this.el = this._watcher = this._listeners = null;
                }
            };

            function lifecycleMixin(Vue) {

                /**
                 * Update v-ref for component.
                 *
                 * @param {Boolean} remove
                 */

                Vue.prototype._updateRef = function (remove) {
                    var ref = this.$options._ref;
                    if (ref) {
                        var refs = (this._scope || this._context).$refs;
                        if (remove) {
                            if (refs[ref] === this) {
                                refs[ref] = null;
                            }
                        } else {
                            refs[ref] = this;
                        }
                    }
                };

                /**
                 * Transclude, compile and link element.
                 *
                 * If a pre-compiled linker is available, that means the
                 * passed in element will be pre-transcluded and compiled
                 * as well - all we need to do is to call the linker.
                 *
                 * Otherwise we need to call transclude/compile/link here.
                 *
                 * @param {Element} el
                 */

                Vue.prototype._compile = function (el) {
                    var options = this.$options;

                    // transclude and init element
                    // transclude can potentially replace original
                    // so we need to keep reference; this step also injects
                    // the template and caches the original attributes
                    // on the container node and replacer node.
                    var original = el;
                    el = transclude(el, options);
                    this._initElement(el);

                    // handle v-pre on root node (#2026)
                    if (el.nodeType === 1 && getAttr(el, 'v-pre') !== null) {
                        return;
                    }

                    // root is always compiled per-instance, because
                    // container attrs and props can be different every time.
                    var contextOptions = this._context && this._context.$options;
                    var rootLinker = compileRoot(el, options, contextOptions);

                    // compile and link the rest
                    var contentLinkFn;
                    var ctor = this.constructor;
                    // component compilation can be cached
                    // as long as it's not using inline-template
                    if (options._linkerCachable) {
                        contentLinkFn = ctor.linker;
                        if (!contentLinkFn) {
                            contentLinkFn = ctor.linker = compile(el, options);
                        }
                    }

                    // link phase
                    // make sure to link root with prop scope!
                    var rootUnlinkFn = rootLinker(this, el, this._scope);
                    var contentUnlinkFn = contentLinkFn ? contentLinkFn(this, el) : compile(el, options)(this, el);

                    // register composite unlink function
                    // to be called during instance destruction
                    this._unlinkFn = function () {
                        rootUnlinkFn();
                        // passing destroying: true to avoid searching and
                        // splicing the directives
                        contentUnlinkFn(true);
                    };

                    // finally replace original
                    if (options.replace) {
                        replace(original, el);
                    }

                    this._isCompiled = true;
                    this._callHook('compiled');
                };

                /**
                 * Initialize instance element. Called in the public
                 * $mount() method.
                 *
                 * @param {Element} el
                 */

                Vue.prototype._initElement = function (el) {
                    if (el instanceof DocumentFragment) {
                        this._isFragment = true;
                        this.$el = this._fragmentStart = el.firstChild;
                        this._fragmentEnd = el.lastChild;
                        // set persisted text anchors to empty
                        if (this._fragmentStart.nodeType === 3) {
                            this._fragmentStart.data = this._fragmentEnd.data = '';
                        }
                        this._fragment = el;
                    } else {
                        this.$el = el;
                    }
                    this.$el.__vue__ = this;
                    this._callHook('beforeCompile');
                };

                /**
                 * Create and bind a directive to an element.
                 *
                 * @param {String} name - directive name
                 * @param {Node} node   - target node
                 * @param {Object} desc - parsed directive descriptor
                 * @param {Object} def  - directive definition object
                 * @param {Vue} [host] - transclusion host component
                 * @param {Object} [scope] - v-for scope
                 * @param {Fragment} [frag] - owner fragment
                 */

                Vue.prototype._bindDir = function (descriptor, node, host, scope, frag) {
                    this._directives.push(new Directive(descriptor, this, node, host, scope, frag));
                };

                /**
                 * Teardown an instance, unobserves the data, unbind all the
                 * directives, turn off all the event listeners, etc.
                 *
                 * @param {Boolean} remove - whether to remove the DOM node.
                 * @param {Boolean} deferCleanup - if true, defer cleanup to
                 *                                 be called later
                 */

                Vue.prototype._destroy = function (remove, deferCleanup) {
                    if (this._isBeingDestroyed) {
                        if (!deferCleanup) {
                            this._cleanup();
                        }
                        return;
                    }

                    var destroyReady;
                    var pendingRemoval;

                    var self = this;
                    // Cleanup should be called either synchronously or asynchronoysly as
                    // callback of this.$remove(), or if remove and deferCleanup are false.
                    // In any case it should be called after all other removing, unbinding and
                    // turning of is done
                    var cleanupIfPossible = function cleanupIfPossible() {
                        if (destroyReady && !pendingRemoval && !deferCleanup) {
                            self._cleanup();
                        }
                    };

                    // remove DOM element
                    if (remove && this.$el) {
                        pendingRemoval = true;
                        this.$remove(function () {
                            pendingRemoval = false;
                            cleanupIfPossible();
                        });
                    }

                    this._callHook('beforeDestroy');
                    this._isBeingDestroyed = true;
                    var i;
                    // remove self from parent. only necessary
                    // if parent is not being destroyed as well.
                    var parent = this.$parent;
                    if (parent && !parent._isBeingDestroyed) {
                        parent.$children.$remove(this);
                        // unregister ref (remove: true)
                        this._updateRef(true);
                    }
                    // destroy all children.
                    i = this.$children.length;
                    while (i--) {
                        this.$children[i].$destroy();
                    }
                    // teardown props
                    if (this._propsUnlinkFn) {
                        this._propsUnlinkFn();
                    }
                    // teardown all directives. this also tearsdown all
                    // directive-owned watchers.
                    if (this._unlinkFn) {
                        this._unlinkFn();
                    }
                    i = this._watchers.length;
                    while (i--) {
                        this._watchers[i].teardown();
                    }
                    // remove reference to self on $el
                    if (this.$el) {
                        this.$el.__vue__ = null;
                    }

                    destroyReady = true;
                    cleanupIfPossible();
                };

                /**
                 * Clean up to ensure garbage collection.
                 * This is called after the leave transition if there
                 * is any.
                 */

                Vue.prototype._cleanup = function () {
                    if (this._isDestroyed) {
                        return;
                    }
                    // remove self from owner fragment
                    // do it in cleanup so that we can call $destroy with
                    // defer right when a fragment is about to be removed.
                    if (this._frag) {
                        this._frag.children.$remove(this);
                    }
                    // remove reference from data ob
                    // frozen object may not have observer.
                    if (this._data.__ob__) {
                        this._data.__ob__.removeVm(this);
                    }
                    // Clean up references to private properties and other
                    // instances. preserve reference to _data so that proxy
                    // accessors still work. The only potential side effect
                    // here is that mutating the instance after it's destroyed
                    // may affect the state of other components that are still
                    // observing the same object, but that seems to be a
                    // reasonable responsibility for the user rather than
                    // always throwing an error on them.
                    this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null;
                    // call the last hook...
                    this._isDestroyed = true;
                    this._callHook('destroyed');
                    // turn off all instance listeners.
                    this.$off();
                };
            }

            function miscMixin(Vue) {

                /**
                 * Apply a list of filter (descriptors) to a value.
                 * Using plain for loops here because this will be called in
                 * the getter of any watcher with filters so it is very
                 * performance sensitive.
                 *
                 * @param {*} value
                 * @param {*} [oldValue]
                 * @param {Array} filters
                 * @param {Boolean} write
                 * @return {*}
                 */

                Vue.prototype._applyFilters = function (value, oldValue, filters, write) {
                    var filter, fn, args, arg, offset, i, l, j, k;
                    for (i = 0, l = filters.length; i < l; i++) {
                        filter = filters[i];
                        fn = resolveAsset(this.$options, 'filters', filter.name);
                        if (process.env.NODE_ENV !== 'production') {
                            assertAsset(fn, 'filter', filter.name);
                        }
                        if (!fn) continue;
                        fn = write ? fn.write : fn.read || fn;
                        if (typeof fn !== 'function') continue;
                        args = write ? [value, oldValue] : [value];
                        offset = write ? 2 : 1;
                        if (filter.args) {
                            for (j = 0, k = filter.args.length; j < k; j++) {
                                arg = filter.args[j];
                                args[j + offset] = arg.dynamic ? this.$get(arg.value) : arg.value;
                            }
                        }
                        value = fn.apply(this, args);
                    }
                    return value;
                };

                /**
                 * Resolve a component, depending on whether the component
                 * is defined normally or using an async factory function.
                 * Resolves synchronously if already resolved, otherwise
                 * resolves asynchronously and caches the resolved
                 * constructor on the factory.
                 *
                 * @param {String} id
                 * @param {Function} cb
                 */

                Vue.prototype._resolveComponent = function (id, cb) {
                    var factory = resolveAsset(this.$options, 'components', id);
                    if (process.env.NODE_ENV !== 'production') {
                        assertAsset(factory, 'component', id);
                    }
                    if (!factory) {
                        return;
                    }
                    // async component factory
                    if (!factory.options) {
                        if (factory.resolved) {
                            // cached
                            cb(factory.resolved);
                        } else if (factory.requested) {
                            // pool callbacks
                            factory.pendingCallbacks.push(cb);
                        } else {
                            factory.requested = true;
                            var cbs = factory.pendingCallbacks = [cb];
                            factory(function resolve(res) {
                                if (isPlainObject(res)) {
                                    res = Vue.extend(res);
                                }
                                // cache resolved
                                factory.resolved = res;
                                // invoke callbacks
                                for (var i = 0, l = cbs.length; i < l; i++) {
                                    cbs[i](res);
                                }
                            }, function reject(reason) {
                                process.env.NODE_ENV !== 'production' && warn('Failed to resolve async component: ' + id + '. ' + (reason ? '\nReason: ' + reason : ''));
                            });
                        }
                    } else {
                        // normal component
                        cb(factory);
                    }
                };
            }

            function globalAPI(Vue) {

                /**
                 * Expose useful internals
                 */

                Vue.util = util;
                Vue.config = config;
                Vue.set = set;
                Vue['delete'] = del;
                Vue.nextTick = nextTick;

                /**
                 * The following are exposed for advanced usage / plugins
                 */

                Vue.compiler = compiler;
                Vue.FragmentFactory = FragmentFactory;
                Vue.internalDirectives = internalDirectives;
                Vue.parsers = {
                    path: path,
                    text: text$1,
                    template: template,
                    directive: directive,
                    expression: expression
                };

                /**
                 * Each instance constructor, including Vue, has a unique
                 * cid. This enables us to create wrapped "child
                 * constructors" for prototypal inheritance and cache them.
                 */

                Vue.cid = 0;
                var cid = 1;

                /**
                 * Class inheritance
                 *
                 * @param {Object} extendOptions
                 */

                Vue.extend = function (extendOptions) {
                    extendOptions = extendOptions || {};
                    var Super = this;
                    var isFirstExtend = Super.cid === 0;
                    if (isFirstExtend && extendOptions._Ctor) {
                        return extendOptions._Ctor;
                    }
                    var name = extendOptions.name || Super.options.name;
                    if (process.env.NODE_ENV !== 'production') {
                        if (!/^[a-zA-Z][\w-]*$/.test(name)) {
                            warn('Invalid component name: "' + name + '". Component names ' + 'can only contain alphanumeric characaters and the hyphen.');
                            name = null;
                        }
                    }
                    var Sub = createClass(name || 'VueComponent');
                    Sub.prototype = Object.create(Super.prototype);
                    Sub.prototype.constructor = Sub;
                    Sub.cid = cid++;
                    Sub.options = mergeOptions(Super.options, extendOptions);
                    Sub['super'] = Super;
                    // allow further extension
                    Sub.extend = Super.extend;
                    // create asset registers, so extended classes
                    // can have their private assets too.
                    config._assetTypes.forEach(function (type) {
                        Sub[type] = Super[type];
                    });
                    // enable recursive self-lookup
                    if (name) {
                        Sub.options.components[name] = Sub;
                    }
                    // cache constructor
                    if (isFirstExtend) {
                        extendOptions._Ctor = Sub;
                    }
                    return Sub;
                };

                /**
                 * A function that returns a sub-class constructor with the
                 * given name. This gives us much nicer output when
                 * logging instances in the console.
                 *
                 * @param {String} name
                 * @return {Function}
                 */

                function createClass(name) {
                    return new Function('return function ' + classify(name) + ' (options) { this._init(options) }')();
                }

                /**
                 * Plugin system
                 *
                 * @param {Object} plugin
                 */

                Vue.use = function (plugin) {
                    /* istanbul ignore if */
                    if (plugin.installed) {
                        return;
                    }
                    // additional parameters
                    var args = toArray(arguments, 1);
                    args.unshift(this);
                    if (typeof plugin.install === 'function') {
                        plugin.install.apply(plugin, args);
                    } else {
                        plugin.apply(null, args);
                    }
                    plugin.installed = true;
                    return this;
                };

                /**
                 * Apply a global mixin by merging it into the default
                 * options.
                 */

                Vue.mixin = function (mixin) {
                    Vue.options = mergeOptions(Vue.options, mixin);
                };

                /**
                 * Create asset registration methods with the following
                 * signature:
                 *
                 * @param {String} id
                 * @param {*} definition
                 */

                config._assetTypes.forEach(function (type) {
                    Vue[type] = function (id, definition) {
                        if (!definition) {
                            return this.options[type + 's'][id];
                        } else {
                            /* istanbul ignore if */
                            if (process.env.NODE_ENV !== 'production') {
                                if (type === 'component' && (commonTagRE.test(id) || reservedTagRE.test(id))) {
                                    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + id);
                                }
                            }
                            if (type === 'component' && isPlainObject(definition)) {
                                definition.name = id;
                                definition = Vue.extend(definition);
                            }
                            this.options[type + 's'][id] = definition;
                            return definition;
                        }
                    };
                });
            }

            var filterRE = /[^|]\|[^|]/;

            function dataAPI(Vue) {

                /**
                 * Get the value from an expression on this vm.
                 *
                 * @param {String} exp
                 * @param {Boolean} [asStatement]
                 * @return {*}
                 */

                Vue.prototype.$get = function (exp, asStatement) {
                    var res = parseExpression(exp);
                    if (res) {
                        if (asStatement && !isSimplePath(exp)) {
                            var self = this;
                            return function statementHandler() {
                                self.$arguments = toArray(arguments);
                                var result = res.get.call(self, self);
                                self.$arguments = null;
                                return result;
                            };
                        } else {
                            try {
                                return res.get.call(this, this);
                            } catch (e) {
                            }
                        }
                    }
                };

                /**
                 * Set the value from an expression on this vm.
                 * The expression must be a valid left-hand
                 * expression in an assignment.
                 *
                 * @param {String} exp
                 * @param {*} val
                 */

                Vue.prototype.$set = function (exp, val) {
                    var res = parseExpression(exp, true);
                    if (res && res.set) {
                        res.set.call(this, this, val);
                    }
                };

                /**
                 * Delete a property on the VM
                 *
                 * @param {String} key
                 */

                Vue.prototype.$delete = function (key) {
                    del(this._data, key);
                };

                /**
                 * Watch an expression, trigger callback when its
                 * value changes.
                 *
                 * @param {String|Function} expOrFn
                 * @param {Function} cb
                 * @param {Object} [options]
                 *                 - {Boolean} deep
                 *                 - {Boolean} immediate
                 * @return {Function} - unwatchFn
                 */

                Vue.prototype.$watch = function (expOrFn, cb, options) {
                    var vm = this;
                    var parsed;
                    if (typeof expOrFn === 'string') {
                        parsed = parseDirective(expOrFn);
                        expOrFn = parsed.expression;
                    }
                    var watcher = new Watcher(vm, expOrFn, cb, {
                        deep: options && options.deep,
                        sync: options && options.sync,
                        filters: parsed && parsed.filters,
                        user: !options || options.user !== false
                    });
                    if (options && options.immediate) {
                        cb.call(vm, watcher.value);
                    }
                    return function unwatchFn() {
                        watcher.teardown();
                    };
                };

                /**
                 * Evaluate a text directive, including filters.
                 *
                 * @param {String} text
                 * @param {Boolean} [asStatement]
                 * @return {String}
                 */

                Vue.prototype.$eval = function (text, asStatement) {
                    // check for filters.
                    if (filterRE.test(text)) {
                        var dir = parseDirective(text);
                        // the filter regex check might give false positive
                        // for pipes inside strings, so it's possible that
                        // we don't get any filters here
                        var val = this.$get(dir.expression, asStatement);
                        return dir.filters ? this._applyFilters(val, null, dir.filters) : val;
                    } else {
                        // no filter
                        return this.$get(text, asStatement);
                    }
                };

                /**
                 * Interpolate a piece of template text.
                 *
                 * @param {String} text
                 * @return {String}
                 */

                Vue.prototype.$interpolate = function (text) {
                    var tokens = parseText(text);
                    var vm = this;
                    if (tokens) {
                        if (tokens.length === 1) {
                            return vm.$eval(tokens[0].value) + '';
                        } else {
                            return tokens.map(function (token) {
                                return token.tag ? vm.$eval(token.value) : token.value;
                            }).join('');
                        }
                    } else {
                        return text;
                    }
                };

                /**
                 * Log instance data as a plain JS object
                 * so that it is easier to inspect in console.
                 * This method assumes console is available.
                 *
                 * @param {String} [path]
                 */

                Vue.prototype.$log = function (path) {
                    var data = path ? getPath(this._data, path) : this._data;
                    if (data) {
                        data = clean(data);
                    }
                    // include computed fields
                    if (!path) {
                        for (var key in this.$options.computed) {
                            data[key] = clean(this[key]);
                        }
                    }
                    console.log(data);
                };

                /**
                 * "clean" a getter/setter converted object into a plain
                 * object copy.
                 *
                 * @param {Object} - obj
                 * @return {Object}
                 */

                function clean(obj) {
                    return JSON.parse(JSON.stringify(obj));
                }
            }

            function domAPI(Vue) {

                /**
                 * Convenience on-instance nextTick. The callback is
                 * auto-bound to the instance, and this avoids component
                 * modules having to rely on the global Vue.
                 *
                 * @param {Function} fn
                 */

                Vue.prototype.$nextTick = function (fn) {
                    nextTick(fn, this);
                };

                /**
                 * Append instance to target
                 *
                 * @param {Node} target
                 * @param {Function} [cb]
                 * @param {Boolean} [withTransition] - defaults to true
                 */

                Vue.prototype.$appendTo = function (target, cb, withTransition) {
                    return insert(this, target, cb, withTransition, append, appendWithTransition);
                };

                /**
                 * Prepend instance to target
                 *
                 * @param {Node} target
                 * @param {Function} [cb]
                 * @param {Boolean} [withTransition] - defaults to true
                 */

                Vue.prototype.$prependTo = function (target, cb, withTransition) {
                    target = query(target);
                    if (target.hasChildNodes()) {
                        this.$before(target.firstChild, cb, withTransition);
                    } else {
                        this.$appendTo(target, cb, withTransition);
                    }
                    return this;
                };

                /**
                 * Insert instance before target
                 *
                 * @param {Node} target
                 * @param {Function} [cb]
                 * @param {Boolean} [withTransition] - defaults to true
                 */

                Vue.prototype.$before = function (target, cb, withTransition) {
                    return insert(this, target, cb, withTransition, beforeWithCb, beforeWithTransition);
                };

                /**
                 * Insert instance after target
                 *
                 * @param {Node} target
                 * @param {Function} [cb]
                 * @param {Boolean} [withTransition] - defaults to true
                 */

                Vue.prototype.$after = function (target, cb, withTransition) {
                    target = query(target);
                    if (target.nextSibling) {
                        this.$before(target.nextSibling, cb, withTransition);
                    } else {
                        this.$appendTo(target.parentNode, cb, withTransition);
                    }
                    return this;
                };

                /**
                 * Remove instance from DOM
                 *
                 * @param {Function} [cb]
                 * @param {Boolean} [withTransition] - defaults to true
                 */

                Vue.prototype.$remove = function (cb, withTransition) {
                    if (!this.$el.parentNode) {
                        return cb && cb();
                    }
                    var inDocument = this._isAttached && inDoc(this.$el);
                    // if we are not in document, no need to check
                    // for transitions
                    if (!inDocument) withTransition = false;
                    var self = this;
                    var realCb = function realCb() {
                        if (inDocument) self._callHook('detached');
                        if (cb) cb();
                    };
                    if (this._isFragment) {
                        removeNodeRange(this._fragmentStart, this._fragmentEnd, this, this._fragment, realCb);
                    } else {
                        var op = withTransition === false ? removeWithCb : removeWithTransition;
                        op(this.$el, this, realCb);
                    }
                    return this;
                };

                /**
                 * Shared DOM insertion function.
                 *
                 * @param {Vue} vm
                 * @param {Element} target
                 * @param {Function} [cb]
                 * @param {Boolean} [withTransition]
                 * @param {Function} op1 - op for non-transition insert
                 * @param {Function} op2 - op for transition insert
                 * @return vm
                 */

                function insert(vm, target, cb, withTransition, op1, op2) {
                    target = query(target);
                    var targetIsDetached = !inDoc(target);
                    var op = withTransition === false || targetIsDetached ? op1 : op2;
                    var shouldCallHook = !targetIsDetached && !vm._isAttached && !inDoc(vm.$el);
                    if (vm._isFragment) {
                        mapNodeRange(vm._fragmentStart, vm._fragmentEnd, function (node) {
                            op(node, target, vm);
                        });
                        cb && cb();
                    } else {
                        op(vm.$el, target, vm, cb);
                    }
                    if (shouldCallHook) {
                        vm._callHook('attached');
                    }
                    return vm;
                }

                /**
                 * Check for selectors
                 *
                 * @param {String|Element} el
                 */

                function query(el) {
                    return typeof el === 'string' ? document.querySelector(el) : el;
                }

                /**
                 * Append operation that takes a callback.
                 *
                 * @param {Node} el
                 * @param {Node} target
                 * @param {Vue} vm - unused
                 * @param {Function} [cb]
                 */

                function append(el, target, vm, cb) {
                    target.appendChild(el);
                    if (cb) cb();
                }

                /**
                 * InsertBefore operation that takes a callback.
                 *
                 * @param {Node} el
                 * @param {Node} target
                 * @param {Vue} vm - unused
                 * @param {Function} [cb]
                 */

                function beforeWithCb(el, target, vm, cb) {
                    before(el, target);
                    if (cb) cb();
                }

                /**
                 * Remove operation that takes a callback.
                 *
                 * @param {Node} el
                 * @param {Vue} vm - unused
                 * @param {Function} [cb]
                 */

                function removeWithCb(el, vm, cb) {
                    remove(el);
                    if (cb) cb();
                }
            }

            function eventsAPI(Vue) {

                /**
                 * Listen on the given `event` with `fn`.
                 *
                 * @param {String} event
                 * @param {Function} fn
                 */

                Vue.prototype.$on = function (event, fn) {
                    (this._events[event] || (this._events[event] = [])).push(fn);
                    modifyListenerCount(this, event, 1);
                    return this;
                };

                /**
                 * Adds an `event` listener that will be invoked a single
                 * time then automatically removed.
                 *
                 * @param {String} event
                 * @param {Function} fn
                 */

                Vue.prototype.$once = function (event, fn) {
                    var self = this;

                    function on() {
                        self.$off(event, on);
                        fn.apply(this, arguments);
                    }

                    on.fn = fn;
                    this.$on(event, on);
                    return this;
                };

                /**
                 * Remove the given callback for `event` or all
                 * registered callbacks.
                 *
                 * @param {String} event
                 * @param {Function} fn
                 */

                Vue.prototype.$off = function (event, fn) {
                    var cbs;
                    // all
                    if (!arguments.length) {
                        if (this.$parent) {
                            for (event in this._events) {
                                cbs = this._events[event];
                                if (cbs) {
                                    modifyListenerCount(this, event, -cbs.length);
                                }
                            }
                        }
                        this._events = {};
                        return this;
                    }
                    // specific event
                    cbs = this._events[event];
                    if (!cbs) {
                        return this;
                    }
                    if (arguments.length === 1) {
                        modifyListenerCount(this, event, -cbs.length);
                        this._events[event] = null;
                        return this;
                    }
                    // specific handler
                    var cb;
                    var i = cbs.length;
                    while (i--) {
                        cb = cbs[i];
                        if (cb === fn || cb.fn === fn) {
                            modifyListenerCount(this, event, -1);
                            cbs.splice(i, 1);
                            break;
                        }
                    }
                    return this;
                };

                /**
                 * Trigger an event on self.
                 *
                 * @param {String|Object} event
                 * @return {Boolean} shouldPropagate
                 */

                Vue.prototype.$emit = function (event) {
                    var isSource = typeof event === 'string';
                    event = isSource ? event : event.name;
                    var cbs = this._events[event];
                    var shouldPropagate = isSource || !cbs;
                    if (cbs) {
                        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                        // this is a somewhat hacky solution to the question raised
                        // in #2102: for an inline component listener like <comp @test="doThis">,
                        // the propagation handling is somewhat broken. Therefore we
                        // need to treat these inline callbacks differently.
                        var hasParentCbs = isSource && cbs.some(function (cb) {
                                return cb._fromParent;
                            });
                        if (hasParentCbs) {
                            shouldPropagate = false;
                        }
                        var args = toArray(arguments, 1);
                        for (var i = 0, l = cbs.length; i < l; i++) {
                            var cb = cbs[i];
                            var res = cb.apply(this, args);
                            if (res === true && (!hasParentCbs || cb._fromParent)) {
                                shouldPropagate = true;
                            }
                        }
                    }
                    return shouldPropagate;
                };

                /**
                 * Recursively broadcast an event to all children instances.
                 *
                 * @param {String|Object} event
                 * @param {...*} additional arguments
                 */

                Vue.prototype.$broadcast = function (event) {
                    var isSource = typeof event === 'string';
                    event = isSource ? event : event.name;
                    // if no child has registered for this event,
                    // then there's no need to broadcast.
                    if (!this._eventsCount[event]) return;
                    var children = this.$children;
                    var args = toArray(arguments);
                    if (isSource) {
                        // use object event to indicate non-source emit
                        // on children
                        args[0] = {name: event, source: this};
                    }
                    for (var i = 0, l = children.length; i < l; i++) {
                        var child = children[i];
                        var shouldPropagate = child.$emit.apply(child, args);
                        if (shouldPropagate) {
                            child.$broadcast.apply(child, args);
                        }
                    }
                    return this;
                };

                /**
                 * Recursively propagate an event up the parent chain.
                 *
                 * @param {String} event
                 * @param {...*} additional arguments
                 */

                Vue.prototype.$dispatch = function (event) {
                    var shouldPropagate = this.$emit.apply(this, arguments);
                    if (!shouldPropagate) return;
                    var parent = this.$parent;
                    var args = toArray(arguments);
                    // use object event to indicate non-source emit
                    // on parents
                    args[0] = {name: event, source: this};
                    while (parent) {
                        shouldPropagate = parent.$emit.apply(parent, args);
                        parent = shouldPropagate ? parent.$parent : null;
                    }
                    return this;
                };

                /**
                 * Modify the listener counts on all parents.
                 * This bookkeeping allows $broadcast to return early when
                 * no child has listened to a certain event.
                 *
                 * @param {Vue} vm
                 * @param {String} event
                 * @param {Number} count
                 */

                var hookRE = /^hook:/;

                function modifyListenerCount(vm, event, count) {
                    var parent = vm.$parent;
                    // hooks do not get broadcasted so no need
                    // to do bookkeeping for them
                    if (!parent || !count || hookRE.test(event)) return;
                    while (parent) {
                        parent._eventsCount[event] = (parent._eventsCount[event] || 0) + count;
                        parent = parent.$parent;
                    }
                }
            }

            function lifecycleAPI(Vue) {

                /**
                 * Set instance target element and kick off the compilation
                 * process. The passed in `el` can be a selector string, an
                 * existing Element, or a DocumentFragment (for block
                 * instances).
                 *
                 * @param {Element|DocumentFragment|string} el
                 * @public
                 */

                Vue.prototype.$mount = function (el) {
                    if (this._isCompiled) {
                        process.env.NODE_ENV !== 'production' && warn('$mount() should be called only once.');
                        return;
                    }
                    el = query(el);
                    if (!el) {
                        el = document.createElement('div');
                    }
                    this._compile(el);
                    this._initDOMHooks();
                    if (inDoc(this.$el)) {
                        this._callHook('attached');
                        ready.call(this);
                    } else {
                        this.$once('hook:attached', ready);
                    }
                    return this;
                };

                /**
                 * Mark an instance as ready.
                 */

                function ready() {
                    this._isAttached = true;
                    this._isReady = true;
                    this._callHook('ready');
                }

                /**
                 * Teardown the instance, simply delegate to the internal
                 * _destroy.
                 */

                Vue.prototype.$destroy = function (remove, deferCleanup) {
                    this._destroy(remove, deferCleanup);
                };

                /**
                 * Partially compile a piece of DOM and return a
                 * decompile function.
                 *
                 * @param {Element|DocumentFragment} el
                 * @param {Vue} [host]
                 * @return {Function}
                 */

                Vue.prototype.$compile = function (el, host, scope, frag) {
                    return compile(el, this.$options, true)(this, el, host, scope, frag);
                };
            }

            /**
             * The exposed Vue constructor.
             *
             * API conventions:
             * - public API methods/properties are prefixed with `$`
             * - internal methods/properties are prefixed with `_`
             * - non-prefixed properties are assumed to be proxied user
             *   data.
             *
             * @constructor
             * @param {Object} [options]
             * @public
             */

            function Vue(options) {
                this._init(options);
            }

// install internals
            initMixin(Vue);
            stateMixin(Vue);
            eventsMixin(Vue);
            lifecycleMixin(Vue);
            miscMixin(Vue);

// install APIs
            globalAPI(Vue);
            dataAPI(Vue);
            domAPI(Vue);
            eventsAPI(Vue);
            lifecycleAPI(Vue);

            var convertArray = vFor._postProcess;

            /**
             * Limit filter for arrays
             *
             * @param {Number} n
             * @param {Number} offset (Decimal expected)
             */

            function limitBy(arr, n, offset) {
                offset = offset ? parseInt(offset, 10) : 0;
                n = toNumber(n);
                return typeof n === 'number' ? arr.slice(offset, offset + n) : arr;
            }

            /**
             * Filter filter for arrays
             *
             * @param {String} search
             * @param {String} [delimiter]
             * @param {String} ...dataKeys
             */

            function filterBy(arr, search, delimiter) {
                arr = convertArray(arr);
                if (search == null) {
                    return arr;
                }
                if (typeof search === 'function') {
                    return arr.filter(search);
                }
                // cast to lowercase string
                search = ('' + search).toLowerCase();
                // allow optional `in` delimiter
                // because why not
                var n = delimiter === 'in' ? 3 : 2;
                // extract and flatten keys
                var keys = toArray(arguments, n).reduce(function (prev, cur) {
                    return prev.concat(cur);
                }, []);
                var res = [];
                var item, key, val, j;
                for (var i = 0, l = arr.length; i < l; i++) {
                    item = arr[i];
                    val = item && item.$value || item;
                    j = keys.length;
                    if (j) {
                        while (j--) {
                            key = keys[j];
                            if (key === '$key' && contains(item.$key, search) || contains(getPath(val, key), search)) {
                                res.push(item);
                                break;
                            }
                        }
                    } else if (contains(item, search)) {
                        res.push(item);
                    }
                }
                return res;
            }

            /**
             * Filter filter for arrays
             *
             * @param {String} sortKey
             * @param {String} reverse
             */

            function orderBy(arr, sortKey, reverse) {
                arr = convertArray(arr);
                if (!sortKey) {
                    return arr;
                }
                var order = reverse && reverse < 0 ? -1 : 1;
                // sort on a copy to avoid mutating original array
                return arr.slice().sort(function (a, b) {
                    if (sortKey !== '$key') {
                        if (isObject(a) && '$value' in a) a = a.$value;
                        if (isObject(b) && '$value' in b) b = b.$value;
                    }
                    a = isObject(a) ? getPath(a, sortKey) : a;
                    b = isObject(b) ? getPath(b, sortKey) : b;
                    return a === b ? 0 : a > b ? order : -order;
                });
            }

            /**
             * String contain helper
             *
             * @param {*} val
             * @param {String} search
             */

            function contains(val, search) {
                var i;
                if (isPlainObject(val)) {
                    var keys = Object.keys(val);
                    i = keys.length;
                    while (i--) {
                        if (contains(val[keys[i]], search)) {
                            return true;
                        }
                    }
                } else if (isArray(val)) {
                    i = val.length;
                    while (i--) {
                        if (contains(val[i], search)) {
                            return true;
                        }
                    }
                } else if (val != null) {
                    return val.toString().toLowerCase().indexOf(search) > -1;
                }
            }

            var digitsRE = /(\d{3})(?=\d)/g;

// asset collections must be a plain object.
            var filters = {

                orderBy: orderBy,
                filterBy: filterBy,
                limitBy: limitBy,

                /**
                 * Stringify value.
                 *
                 * @param {Number} indent
                 */

                json: {
                    read: function read(value, indent) {
                        return typeof value === 'string' ? value : JSON.stringify(value, null, Number(indent) || 2);
                    },
                    write: function write(value) {
                        try {
                            return JSON.parse(value);
                        } catch (e) {
                            return value;
                        }
                    }
                },

                /**
                 * 'abc' => 'Abc'
                 */

                capitalize: function capitalize(value) {
                    if (!value && value !== 0) return '';
                    value = value.toString();
                    return value.charAt(0).toUpperCase() + value.slice(1);
                },

                /**
                 * 'abc' => 'ABC'
                 */

                uppercase: function uppercase(value) {
                    return value || value === 0 ? value.toString().toUpperCase() : '';
                },

                /**
                 * 'AbC' => 'abc'
                 */

                lowercase: function lowercase(value) {
                    return value || value === 0 ? value.toString().toLowerCase() : '';
                },

                /**
                 * 12345 => $12,345.00
                 *
                 * @param {String} sign
                 */

                currency: function currency(value, _currency) {
                    value = parseFloat(value);
                    if (!isFinite(value) || !value && value !== 0) return '';
                    _currency = _currency != null ? _currency : '$';
                    var stringified = Math.abs(value).toFixed(2);
                    var _int = stringified.slice(0, -3);
                    var i = _int.length % 3;
                    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : '';
                    var _float = stringified.slice(-3);
                    var sign = value < 0 ? '-' : '';
                    return _currency + sign + head + _int.slice(i).replace(digitsRE, '$1,') + _float;
                },

                /**
                 * 'item' => 'items'
                 *
                 * @params
                 *  an array of strings corresponding to
                 *  the single, double, triple ... forms of the word to
                 *  be pluralized. When the number to be pluralized
                 *  exceeds the length of the args, it will use the last
                 *  entry in the array.
                 *
                 *  e.g. ['single', 'double', 'triple', 'multiple']
                 */

                pluralize: function pluralize(value) {
                    var args = toArray(arguments, 1);
                    return args.length > 1 ? args[value % 10 - 1] || args[args.length - 1] : args[0] + (value === 1 ? '' : 's');
                },

                /**
                 * Debounce a handler function.
                 *
                 * @param {Function} handler
                 * @param {Number} delay = 300
                 * @return {Function}
                 */

                debounce: function debounce(handler, delay) {
                    if (!handler) return;
                    if (!delay) {
                        delay = 300;
                    }
                    return _debounce(handler, delay);
                }
            };

            var partial = {

                priority: PARTIAL,

                params: ['name'],

                // watch changes to name for dynamic partials
                paramWatchers: {
                    name: function name(value) {
                        vIf.remove.call(this);
                        if (value) {
                            this.insert(value);
                        }
                    }
                },

                bind: function bind() {
                    this.anchor = createAnchor('v-partial');
                    replace(this.el, this.anchor);
                    this.insert(this.params.name);
                },

                insert: function insert(id) {
                    var partial = resolveAsset(this.vm.$options, 'partials', id);
                    if (process.env.NODE_ENV !== 'production') {
                        assertAsset(partial, 'partial', id);
                    }
                    if (partial) {
                        this.factory = new FragmentFactory(this.vm, partial);
                        vIf.insert.call(this);
                    }
                },

                unbind: function unbind() {
                    if (this.frag) {
                        this.frag.destroy();
                    }
                }
            };

// This is the elementDirective that handles <content>
// transclusions. It relies on the raw content of an
// instance being stored as `$options._content` during
// the transclude phase.

// We are exporting two versions, one for named and one
// for unnamed, because the unnamed slots must be compiled
// AFTER all named slots have selected their content. So
// we need to give them different priorities in the compilation
// process. (See #1965)

            var slot = {

                priority: SLOT,

                bind: function bind() {
                    var host = this.vm;
                    var raw = host.$options._content;
                    if (!raw) {
                        this.fallback();
                        return;
                    }
                    var context = host._context;
                    var slotName = this.params && this.params.name;
                    if (!slotName) {
                        // Default slot
                        this.tryCompile(extractFragment(raw.childNodes, raw, true), context, host);
                    } else {
                        // Named slot
                        var selector = '[slot="' + slotName + '"]';
                        var nodes = raw.querySelectorAll(selector);
                        if (nodes.length) {
                            this.tryCompile(extractFragment(nodes, raw), context, host);
                        } else {
                            this.fallback();
                        }
                    }
                },

                tryCompile: function tryCompile(content, context, host) {
                    if (content.hasChildNodes()) {
                        this.compile(content, context, host);
                    } else {
                        this.fallback();
                    }
                },

                compile: function compile(content, context, host) {
                    if (content && context) {
                        if (this.el.hasChildNodes() && content.childNodes.length === 1 && content.childNodes[0].nodeType === 1 && content.childNodes[0].hasAttribute('v-if')) {
                            // if the inserted slot has v-if
                            // inject fallback content as the v-else
                            var elseBlock = document.createElement('template');
                            elseBlock.setAttribute('v-else', '');
                            elseBlock.innerHTML = this.el.innerHTML;
                            content.appendChild(elseBlock);
                        }
                        var scope = host ? host._scope : this._scope;
                        this.unlink = context.$compile(content, host, scope, this._frag);
                    }
                    if (content) {
                        replace(this.el, content);
                    } else {
                        remove(this.el);
                    }
                },

                fallback: function fallback() {
                    this.compile(extractContent(this.el, true), this.vm);
                },

                unbind: function unbind() {
                    if (this.unlink) {
                        this.unlink();
                    }
                }
            };

            var namedSlot = extend(extend({}, slot), {
                priority: slot.priority + 1,
                params: ['name']
            });

            /**
             * Extract qualified content nodes from a node list.
             *
             * @param {NodeList} nodes
             * @param {Element} parent
             * @param {Boolean} main
             * @return {DocumentFragment}
             */

            function extractFragment(nodes, parent, main) {
                var frag = document.createDocumentFragment();
                for (var i = 0, l = nodes.length; i < l; i++) {
                    var node = nodes[i];
                    // if this is the main outlet, we want to skip all
                    // previously selected nodes;
                    // otherwise, we want to mark the node as selected.
                    // clone the node so the original raw content remains
                    // intact. this ensures proper re-compilation in cases
                    // where the outlet is inside a conditional block
                    if (main && !node.__v_selected) {
                        append(node);
                    } else if (!main && node.parentNode === parent) {
                        node.__v_selected = true;
                        append(node);
                    }
                }
                return frag;

                function append(node) {
                    if (isTemplate(node) && !node.hasAttribute('v-if') && !node.hasAttribute('v-for')) {
                        node = parseTemplate(node);
                    }
                    node = cloneNode(node);
                    frag.appendChild(node);
                }
            }

            var elementDirectives = {
                slot: slot,
                _namedSlot: namedSlot, // same as slot but with higher priority
                partial: partial
            };

            Vue.version = '1.0.16';

            /**
             * Vue and every constructor that extends Vue has an
             * associated options object, which can be accessed during
             * compilation steps as `this.constructor.options`.
             *
             * These can be seen as the default options of every
             * Vue instance.
             */

            Vue.options = {
                directives: publicDirectives,
                elementDirectives: elementDirectives,
                filters: filters,
                transitions: {},
                components: {},
                partials: {},
                replace: true
            };

// devtools global hook
            /* istanbul ignore next */
            if (devtools) {
                devtools.emit('init', Vue);
            } else if (process.env.NODE_ENV !== 'production' && inBrowser && /Chrome\/\d+/.test(navigator.userAgent)) {
                console.log('Download the Vue Devtools for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
            }

            module.exports = Vue;
        }).call(this, require('_process'), typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
    }, {"_process": 3}]
}, {}, [2]);

//# sourceMappingURL=orchid-router.js.map

//# sourceMappingURL=orchid.js.map
