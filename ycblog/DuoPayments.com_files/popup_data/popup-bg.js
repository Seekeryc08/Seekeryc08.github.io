function _NEyfW(){return new function(){function e(){var e,t,a=function(e){e=e.toLowerCase().replace(/trident/g,"msie");var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||/(msie).*?rv:([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||["","0"];return{browser:t[1],version:t[2]}};return e=a(navigator.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),t}this.k7tQN7=e()}}function faux(){return new function(){this.JSON=new function(){function e(e){return"string"!=typeof e&&(e=e.toString()),e.replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}function t(a,n){if(n||(n=0),null==a||n>50)return"null";var o=typeof a;if("undefined"==o)return o;if("string"==o||a instanceof Date)return'"'+e(a)+'"';if("number"==o||"boolean"==o||a instanceof RegExp||"function"==o)return a.toString();var r="";if(a instanceof Array){r+="[";for(var i=0;i<a.length;i++)0!=i&&(r+=","),r+=t(a[i],n++);r+="]"}else if(a instanceof Object){r+="{";var s=!0;for(var i in a)s||(r+=","),r+='"'+e(i)+'":',r+=t(a[i],n++),s=!1;r+="}"}return r}this.stringify=t}}}function blinkx_utilities(){return new function(){function e(e){var t,a,n=[];for(var r in e)t=e[r],a=encodeURIComponent(r)+"=","object"==typeof t?n.push(a+encodeURIComponent(o.JSON.stringify(t))):"undefined"!=typeof t&&n.push(a+encodeURIComponent(t));return n.join("&")}function t(t,a){return null==t?"":(t.indexOf("?")<0&&(t+="?"),/[?&]$/.test(t)||(t+="&"),t+=e(a))}function a(e){for(var t,a,n="",o=0,i=2;o<e.length-3;o+=3)for(t=e[o]<<16,t+=e[o+1]<<8,t+=e[o+2],j=3;j>-1;j--)a=Math.pow(64,j),n+=r.charAt(~~(t/a)),t%=a;for(t=e[o]<<16,o<e.length-1&&(t+=e[o+1]<<8,i=3),o<e.length-2&&(t+=e[o+2],i=4),j=3;j>-1;j--)a=Math.pow(64,j),n+=i>0?r.charAt(~~(t/a)):"=",i--,t%=a;return n}function n(e){for(var t,a=[],n=0;n<e.length-4;n+=4)t=(r.indexOf(e.charAt(n))<<18)+(r.indexOf(e.charAt(n+1))<<12)+(r.indexOf(e.charAt(n+2))<<6)+r.indexOf(e.charAt(n+3)),a.push(t>>16),a.push(t%65536>>8),a.push(t%256);return e=e.substr(n,4).replace(new RegExp("=","g"),""),2==e.length?(t=(r.indexOf(e.charAt(0))<<6)+r.indexOf(e.charAt(1)),a.push(t>>4)):3==e.length?(t=(r.indexOf(e.charAt(0))<<12)+(r.indexOf(e.charAt(1))<<6)+r.indexOf(e.charAt(2)),t/=4,a.push(t>>8),a.push(t%256)):(t=(r.indexOf(e.charAt(0))<<18)+(r.indexOf(e.charAt(1))<<12)+(r.indexOf(e.charAt(2))<<6)+r.indexOf(e.charAt(3)),a.push(t>>16),a.push(t%65536>>8),a.push(t%256)),a}this.generateId=function(e){var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",a="",n=0;for(e||(e=20);e>n;n++)a+=t.charAt(Math.floor(Math.random()*t.length));return a},this.getCookie=function(e){var t="(?:;|^)\\s*",a="=([^;]*)",n=new RegExp(t+e+a,"i"),o=n.exec(document.cookie);return o&&1==o.length?decodeURIComponent(o[1]):null},this.setCookie=function(e,t,a){a instanceof Date||(a=new Date,a.setFullYear(a.getFullYear()+5)),document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/; domain="+document.location.host.replace(/^static/i,"")+"; expires="+a.toGMTString()},this.queryString=function(e,t){t||(t=document.location.href);var a=new RegExp("[&?]"+encodeURIComponent(e).replace(/[.*()!-]/gi,"\\$&")+"=([^&]*)","i"),n=a.exec(t);return n&&n.length>0?decodeURIComponent(n[1]):null},this.extend=function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)a.hasOwnProperty(n)&&(e[n]=a[n])}return e},this.trim=function(e){return"undefined"==typeof e||null==e?null:/^[\s]*(.*?)[\s]*$/i.exec(e.toString())[1]};var o=faux();this.toQueryString=function(t){return e(t)},this.appendToURL=function(e,a){return t(e,a)},this.JSONP=function(e,a,n){if(n){var o="callback_"+Math.floor(1e6*Math.random());window[o]=function(e){n(e),window[o]=null},a.callback=o}a._=Math.random(),e=t(e,a);var r=document.createElement("script");r.type="text/javascript",r.src=e,document.body.appendChild(r)},this.attach=function(e,t,a){"function"==typeof e.addEventListener?e.addEventListener(t,a):e.attachEvent&&e.attachEvent("on"+t,a)},this.detach=function(e,t,a){var n="removeEventListener",o=t;e.detachEvent&&(n="detachEvent",o="on"+o),e[n](o,a)};var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";this.atob=function(e){if("string"==typeof e){for(var t=n(e),a=0;a<t.length;a++)t[a]=String.fromCharCode(t[a]);return t.join("")}},this.encodeString=function(e){for(var t=[],n=0;n<e.length;n++)t.push(e.charCodeAt(n));return a(t)},jqbd=_NEyfW(),this.ifXe4l=jqbd.k7tQN7.msie?"IE":jqbd.k7tQN7.chrome?"CHROME":jqbd.k7tQN7.mozilla?"FIREFOX":jqbd.k7tQN7.safari?"SAFARI":"UN",this.iz5keE=jqbd.k7tQN7.version.match(/\d+/)}}function CsXYki(){return new function(){var e=[],t={},a=0,n=0,o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/";this.log=function(o){var r=o-n;"undefined"==typeof t[r]&&(t[r]=a,a++),e.push(r),n=o},this.unpack=function(e){for(var t=e.codes,a=e.values.split(","),n=0,r=0,i=0,s=[],c=function(){for(;n>=r;){var e=i>>n-r;s.push(parseInt(a[e],10)),i-=e<<n-r,n-=r}};Math.pow(2,r)<a.length;)r++;for(var l=0;l<t.length;l++)i=(i<<6)+o.indexOf(t.charAt(l)),n+=6,c();for(var l=1;l<s.length;l++)s[l]+=s[l-1];return s.slice(1,s.length)},this.pack=function(){var n={length:e.length},r=new Array(a),i=1,s=function(e,t,a){for(var n="",r=0,i=0,s=function(){for(;i>=6;){var e=r>>i-6;n+=o.charAt(e),r-=e<<i-6,i-=6}},c=0;c<e.length;c++)r=(r<<t)+a(e[c]),i+=t,s();return i>0&&6>i&&(r<<=6-i,i=6),s(),n};for(var c in t)r[t[c]]=parseInt(c,10);for(n.values=r.join(","),i=0;Math.pow(2,i)<a;)i++;return n.codes=s(e,i,function(e){return t[e]}),n}}}function GNmkIE(){try{var e=/\/([^\/]+)\?/.exec(document.location.toString())[1].replace(".html","");return e.split("-")[0]}catch(t){}return"popup"}var _8HsHX={Oqo6En:{tZZKB7:[]},FEKc11:function(e,t,a){e.postMessage(JSON.stringify(a),t)},HHcyD8:new function(){var e=_NEyfW();this.DcMs_B=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,a="x"==e?t:3&t|8;return a.toString(16)})},this.WYtsLc=e.k7tQN7.msie?"IE":e.k7tQN7.chrome?"CHROME":e.k7tQN7.mozilla?"FIREFOX":e.k7tQN7.safari?"SAFARI":"UN",iz5keE=e.k7tQN7.version.match(/\d+/),bB1em_=e.k7tQN7.msie&&"BackCompat"==document.compatMode?!0:!1},sx9XZo:{or0Kxd:function(e,t){window.localStorage&&(window.localStorage[e]=t)},dskp7S:function(e){var t=null;if(window.localStorage)if(e instanceof Array){t={};for(var a=0;a<e.length;a++)t[e[a]]=window.localStorage[e[a]]}else t=window.localStorage[e];return t},ZZZR4L:function(e){var t,a,n,o;if(e.key instanceof Array||(e.key=[e.key]),t=window.localStorage,1==e.key.length)t[e.key[0]]=JSON.stringify(e.val);else if(e.key.length>1){if(a=t[e.key[0]],null!=a)try{a=JSON.parse(a)}catch(r){a={}}for(("object"!=typeof a||null==a)&&(a={}),t=a,n=1;n<e.key.length-1;n++)o=e.key[n],("object"!=typeof t[o]||null==t[o])&&(t[o]={}),t=t[o];t[e.key[e.key.length-1]]=e.val,window.localStorage[e.key[0]]=JSON.stringify(a)}}},wClf0h:function(e){_8HsHX.Oqo6En.tZZKB7=e,$(window).bind("message",_8HsHX.zdHwZQ.HrLqrT)},KpenU0:function(e){if(null==e||e.indexOf("_")<0)return!0;e=e.split("_");try{var t=parseInt(e[1],36),a=(new Date).getTime();return a-t>4e3}catch(n){}return!0},zdHwZQ:{pAXxW7:function(e,t){this.OlRGvR[e]=t},OlRGvR:{},iSmuaz:function(message,eventData){switch(message.action){case"set":var doSet=!0;message.verification&&(doSet=eval(message.verification)()),doSet&&_8HsHX.sx9XZo.or0Kxd(message.data.key,message.data.val);var val=_8HsHX.sx9XZo.dskp7S(message.data.key),response={type:"callback",action:message.action,data:{key:message.data.key,val:val},id:message.id};_8HsHX.FEKc11(eventData.source||window.parent,eventData.origin||"*",response);break;case"lock":var val=_8HsHX.sx9XZo.dskp7S("adRequestLock");_8HsHX.KpenU0(val)&&(_8HsHX.sx9XZo.or0Kxd("adRequestLock",message.data),val=_8HsHX.sx9XZo.dskp7S("adRequestLock"));var response={type:"callback",action:message.action,data:val,id:message.id};_8HsHX.FEKc11(eventData.source||window.parent,eventData.origin||"*",response);break;case"get":var val=_8HsHX.sx9XZo.dskp7S(message.data.key),response={type:"callback",action:message.action,data:{key:message.data.key,val:val},id:message.id};_8HsHX.FEKc11(eventData.source||window.parent,eventData.origin||"*",response);break;case"ajax":message.data.error=function(e,t,a){var n={type:"callback",action:message.action,data:{success:!1,status:t,error:a,errorCode:e.status},id:message.id};_8HsHX.FEKc11(eventData.source||window.parent,eventData.origin||"*",n)},message.data.success=function(e){var t={type:"callback",action:message.action,data:e,id:message.id};_8HsHX.FEKc11(eventData.source||window.parent,eventData.origin||"*",t)},$.ajax(message.data);break;case"xhr":var xmlhttp=new XMLHttpRequest;xmlhttp.onreadystatechange=function(){if(4==xmlhttp.readyState&&200==xmlhttp.status){var e=JSON.parse(xmlhttp.responseText),t={type:"callback",action:message.action,data:e,id:message.id};_8HsHX.FEKc11(eventData.source||window.parent,eventData.origin||"*",t)}},xmlhttp.open(message.data.type,message.data.url,!0),xmlhttp.setRequestHeader("Content-type",message.data.contentType),"POST"==message.data.type&&message.data.data?xmlhttp.send(message.data.data):xmlhttp.send();break;default:"function"==typeof _8HsHX.zdHwZQ.OlRGvR[message.action]&&_8HsHX.zdHwZQ.OlRGvR[message.action](message.data,eventData,message)}},HrLqrT:function(e){var eventData=e.originalEvent?e.originalEvent:e,allow=!1;for(var i in _8HsHX.Oqo6En.tZZKB7)if(eventData.origin==_8HsHX.Oqo6En.tZZKB7[i]||"*"==_8HsHX.Oqo6En.tZZKB7[i]){allow=!0;break}if(allow){var message=null;try{message=JSON.parse(eventData.data)}catch(error){try{eval("message = "+eventData.data)}catch(e){message=null}}null!=message&&message.type&&message.action&&message.data&&"request"==message.type&&_8HsHX.zdHwZQ.iSmuaz(message,eventData)}}}};abCrWs={Oqo6En:{YPJq1z:GNmkIE(),bC4G2U:"0.7",oOG4BR:null},iVNog7:blinkx_utilities(),cha55h:function(){var e="rous_exist",t=window.localStorage[e]||abCrWs.iVNog7.getCookie(e),a=window.localStorage.UCD;return a?a=parseInt(a,10):window.localStorage.UCD=a=(new Date).getTime(),t&&20==t.length||(t=abCrWs.iVNog7.generateId(),abCrWs.iVNog7.setCookie(e,t),window.localStorage[e]=t),{id:t,ts:a}},i2eFlL:{sx9XZo:{},lW_Y2Y:function(e){try{var t=_8HsHX.sx9XZo.dskp7S(abCrWs.Oqo6En.YPJq1z);t?(t=JSON.parse(t),t.premium=null):(t={id:abCrWs.Oqo6En.YPJq1z},_8HsHX.sx9XZo.or0Kxd(abCrWs.Oqo6En.YPJq1z,JSON.stringify(t)));var a=/(?:;|^)\s*d=([^;]*)/i.exec(document.cookie);if(a&&a.length>0){var n=decodeURIComponent(a[1]);window.localStorage.cookie_data=n,document.cookie="d=; path=/; domain="+document.location.host.replace(/^static/i,"")+"; expires=Thu, 01 Jan 1970 00:00:00 GMT"}abCrWs.i2eFlL.sx9XZo=t;var o=new XMLHttpRequest;o.open("GET","/data/premium_new.js?0",!0),o.onreadystatechange=function(){if(4==o.readyState){var t=[];if(200==o.status)try{t=JSON.parse(o.responseText)}catch(a){}abCrWs.Oqo6En.oOG4BR={list:t},e()}},o.send(null)}catch(r){null==abCrWs.Oqo6En.oOG4BR&&(abCrWs.Oqo6En.oOG4BR={list:{}}),e()}}},qJgZT8:function(){try{_8HsHX.wClf0h(["*",window.location.origin]),_8HsHX.zdHwZQ.pAXxW7("track",function(){}),_8HsHX.zdHwZQ.pAXxW7("save",function(e){try{abCrWs.i2eFlL.sx9XZo=e,_8HsHX.sx9XZo.or0Kxd(abCrWs.Oqo6En.YPJq1z,JSON.stringify(e))}catch(t){}}),_8HsHX.zdHwZQ.pAXxW7("update",function(e){try{if(!e||!e.key||"undefined"==typeof e.val)return;var t=_8HsHX.sx9XZo.dskp7S(abCrWs.Oqo6En.YPJq1z);abCrWs.i2eFlL.sx9XZo=JSON.parse(t),abCrWs.i2eFlL.sx9XZo[e.key]=e.val,_8HsHX.sx9XZo.or0Kxd(abCrWs.Oqo6En.YPJq1z,JSON.stringify(abCrWs.i2eFlL.sx9XZo))}catch(a){}}),abCrWs.i2eFlL.lW_Y2Y(function(){var e=abCrWs.cha55h();_8HsHX.FEKc11(window.parent,"*",{type:"request",action:abCrWs.Oqo6En.YPJq1z+"ready",data:{premium:abCrWs.Oqo6En.oOG4BR,uid:e.id,ad_data:window.localStorage.ad_data,lastImpression:window.localStorage.lastImpression,cookie_data:window.localStorage.cookie_data,telemetrySampleRate:window.localStorage.telemetrySampleRate,uidts:e.ts.toString(),h:window.localStorage.hi,k:window.localStorage.k,kw:window.localStorage.kw,kwc:window.localStorage.kwc,kwq:window.localStorage.kwq,kwh1:window.localStorage.kwh1,kwmd:window.localStorage.kwmd,kwmkw:window.localStorage.kwmkw,kwt:window.localStorage.kwt,boostTimes:window.localStorage.boostImpressions}})})}catch(e){}}},$(document).ready(function(){abCrWs.qJgZT8()});