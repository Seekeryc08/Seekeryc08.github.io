!function(d,aa,Ua,m,x,Ea,s,E,l,G,ba,Fa,H){d.fl.wa118||d.j(function(f){function I(){return ca?!0:+new Date-la>h.executionTimeout?ca=!0:!1}function ma(a){da=!0;var c=[],b=f("title");b.length&&c.push(b.text());f('meta[property="og:title"],meta[property="og:description"],meta[name="description"]').each(function(a,b){var g=f(b).attr("content");g&&c.push(g)});f('meta[name="keywords"]').each(function(a,b){var g=f(b).attr("content");g&&c.concat(g.split(","))});c.push(d.dv(s.hostname).pop().split(".")[0]);
d.items.l8add.callbacks.cpc_cb=function(b){b=b&&b.results||[];for(var c=0;c<b.length;c++){var g=b[c],f=g.title;if(g.headline)g.title=""+g.headline,g.description=""+g.line1+"<br />"+g.description,delete g.headline,delete g.line1;else{var d=f.match(/ - /g)||[],d=f.indexOf(" - ",1<d.length?f.indexOf(" - ")+1:0);-1<d&&(g.description=f.substring(d+3)+"<br />"+g.description,g.title=f.substring(0,d));g.pixel&&((new Image).src=g.pixel)}}P=b;A.apply(Fa,a)};(b=c.join(" ").substring(0,1E3))&&d.insertJS("//s.ws2wn.com/?q="+
x(b).replace(/%20/g,"+")+"&cb=_GPL.items.l8add.callbacks.cpc_cb&e=dn&cp=3&ck=1&domain="+x(s.hostname)+"&subid=z-"+Q+"-"+R)}function Ga(){if(d.gc("l8add_bl"))return!0;for(var a=["porn"],c=0;c<a.length;c++)if(-1<s.hostname.indexOf(a[c]))return!0;return 0<f('script[src*="exoclick.com"]').length||0<f('iframe[src*="ads.trafficjunky.net/ads"]').length||0<f('meta[content="RTA-5042-1996-1400-1577-RTA"]').length?!0:!1}function Ha(a){for(var c=0;c<m.styleSheets.length;c++)if(m.styleSheets[c].rules&&m.styleSheets[c].rules.length)for(var b=
0;b<m.styleSheets[c].rules.length;b++)if(-1<(m.styleSheets[c].rules[b].selectorText||"").indexOf("#adheader, #adholder, #adlayer"))return S=!0,a();var k=f('<iframe src="//ib.adnxs.com/robots.txt" style="width: 1px; height: 1px; position: absolute; top: -1000px; left: -1000px;" class="adholder" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"></iframe>').appendTo("body");G(function(){if(k.length){var b=k.css("display"),c=k[0].offsetHeight,f=k[0].offsetWidth;k.remove();if("none"==
b||0===c&&0===f)S=!0}return a()},200)}function na(){if(ea)for(var a=0;a<u.length;a++){var c=u[a];c.loaded&&!f(c.id).length&&(c.ad.remove(),c.loaded=!1,delete c.ad)}}function T(a){var c=a.get(0);if(H.getComputedStyle){var b=H.getComputedStyle(c,null);if(!b)return a.width();c=c.offsetWidth+(l(b.getPropertyValue("margin-left"),10)||0)+(l(b.getPropertyValue("margin-right"),10)||0)}else c=c.offsetWidth+(l(c.currentStyle.marginLeft,10)||0)+(l(c.currentStyle.marginRight,10)||0);return c>=oa?a.width():c}
function J(a){return"none"!==a.css("display")&&"hidden"!==a.css("visibility")&&a.closest("html").length}function pa(a,c){var b=f(a),k=v[c],e=l(b.css("height"),10);if(b.width()<k.width||e&&e<=k.height+U)return!1;e=b.children().first();if(e.length){if(e.is(h.ignoreTags)||0>l(e.css("marginTop"),10))return!1;var g=a._w||b.width();if("none"!==e.css("float")&&T(e)<0.8*g)return!1}if(a!=m.body&&h.avoidTopOfPage&&(e=y[0].getBoundingClientRect(),10>=a.getBoundingClientRect().top-e.top))return!1;var e=a.getBoundingClientRect(),
d={top:e.top,left:e.left+(e.width/2-k.width/2),bottom:e.top+k.height,right:e.left+(e.width/2-k.width/2)+k.width};V.length||(V=y.find(h.selectors+", "+h.adSelectors+", ul, li, nav").not(h.ignoreTags).filter(function(b,a){if(!J(f(a)))return!1;var c=f(a).css("position");return"absolute"===c||"fixed"===c}));var z=!1,B=!1;V.each(function(a,c){if(I())return B=!0,!1;var e=f('<div style="width: 100%; height: '+(k.height+U)+'px">&nbsp;</div>').prependTo(b),g=c.getBoundingClientRect();e.remove();if(fa(d,g))return z=
!0,!1});if(z||B)return!1;var p=!1;b.find(h.selectors).not(h.ignoreTags).each(function(a,b){if(I())return B=!0,!1;if(0>l(f(b).css("marginTop"),10)&&fa(d,b.getBoundingClientRect()))return p=!0,!1});return p||B?!1:!0}function Ia(a,c){if(a.is(m))return!0;var b=a.height(),d=f('<div style="min-width: '+c.width+"px; height: "+(c.height+U)+'px; float: none; clear: both;">&nbsp;</div>').prependTo(a),e=a.height(),g=d.offset().top,h=T(a);d.remove();if(g-a.offset().top>c.height||h<c.width||b===e||a.parents()[Ja]().filter(function(b,
a){return a.offsetHeight<a.scrollHeight&&"hidden"===f(a).css("overflow-y")}).length)return!0;b=a.children().filter(":visible").first();if(0<=b.css("display").indexOf("table-")&&T(b)<a[0]._w)return!0;b=a;d=0;do{if(!b||b.is(m))break;e=b.css(["marginTop","marginLeft","marginRight","marginBottom"]);g=b.css("overflow");if(e)for(var z in e)if(0>l(e[z],10)&&"hidden"===g)return!0;e=b.css("position");if("absolute"===e||"fixed"===e||!J(b)||b.width()<c.width)return!0;b=b.parent();d++}while(6>d);return!1}function qa(a,
c){for(var b=v[c],d=h.ignoreExisting?f("."+h.injectClass[c]):f.merge(f("."+h.injectClass[c]),q[c]),e=a.getBoundingClientRect(),b={top:e.top,left:e.left+(e.width/2-b.width/2),bottom:e.top+b.height,right:e.left+(e.width/2-b.width/2)+b.width},e=0;e<d.length;e++){var g=d[e].getBoundingClientRect();if(fa(b,g)||E.min(E.abs(b.top-g.bottom),E.abs(g.top-b.bottom))<h.minSpacing[c])return!0}return!1}function ra(a,c){var b=a._w,d=a._h;b>=v.leaderboard.width&&d>=v.leaderboard.height?(c.leaderboard||(c.leaderboard=
[]),c.leaderboard.push(a)):b>=v.rectangle.width&&b<=v.rectangle.width+80&&d>=v.rectangle.height&&(c.rectangle||(c.rectangle=[]),c.rectangle.push(a))}function Ka(){q={count:0};f(h.adSelectors).each(function(a,b){f(b).parents("body").length&&J(f(b))&&0<b.height&&0<b.width&&(b._w=b.width,b._h=b.height,ra(b,q))});for(var a in q)q.count+=q[a].length}function La(a){function c(a){return"transparent"==a||"rgba"==a.substring(0,4)}var b="#000",d="transparent",e=function(a){var b=a.css("background-color");c(b)&&
a.parents().each(function(a,e){e=f(e);if(!c(e.css("background-color")))return b=e.css("background-color"),!1});return b}(a);c(a.css("background-color"))&&"none"!==a.css("backgroundImage")?d="#fff":e&&!c(e)&&(e=e.replace(/[^0-9,]/g,"").split(","),3<=e.length&&130>E.sqrt(0.299*l(e[0],10)*l(e[0],10)+0.587*l(e[1],10)*l(e[1],10)+0.114*l(e[2],10)*l(e[2],10))&&(b="#fff"));return{txt:b,bg:d}}function A(a,c,b,k,e,g,l,z,B){d.log("Injecting ad",arguments);var p="",n="//"+(F?"secure.display-x.com/display":"secure.srv2trkk.com/serve"),
r=f("<span></span>").css("visibility","hidden");e[b](r);var t=r.offset().top>(H.innerHeight||W.height()||y.height())?"below":"above";r.remove();var r=a.width+"x"+a.height,q=d.dt&&d.dt(),q=q&&q.inherited&&q.inherited.t||[];B=x(B||ga||"row");n+="?"+X;if(ea||Ma)n+="&referer="+x(Na),n+="&cv_domain="+x(d.proto+s.hostname+s.pathname);else if(-1<q.indexOf("apn_whitelist")||d.f.bda27)n+="&cv_domain="+x(d.proto+s.hostname+s.pathname);n=n+("&pl="+t)+("&ch="+B);sa&&!S&&(n+="&sec=secure");n+="&size="+r;P.length&&
(t=r.replace("728x90","728x91").replace("300x250","300x251"),n="//secure.srv2trkk.com/serve?"+X+"&size="+t,p=Ea(JSON.stringify(P)),P=[]);t=f('<center class="'+h.injectClass[c]+" "+h.injectClass.all+'" data-type="'+k+'"/>');p='<iframe src="'+n+'" width="'+a.width+'" height="'+a.height+'" style="width:'+a.width+"px; height:"+a.height+'px;box-sizing: content-box; -webkit-box-sizing: content-box; display: inline; visibility: visible; margin:0;float:none;" marginheight="0" marginwidth="0" frameborder="0" scrolling="no"'+
(p?' name="'+p+'"':"")+"></iframe>";l&&(p='<div style="width:'+a.width+"px; height:"+a.height+'px;box-sizing: content-box; -webkit-box-sizing: content-box; display: inline; visibility: visible; margin:0;"></div>');r="auto";n=a.width;g&&(r=e.children(":visible").first(),n=E.max(E.min(e.width(),r.outerWidth()),a.width),r=n===r.width()?r.css("margin"):"auto");q=e.css("display");t.css({display:"table"==q?"table-row":"table-row"==q?"table-cell":"block",padding:"10px 0",margin:r,"text-align":"center",height:a.height+
U,overflow:"visible",width:n==a.width?"auto":n,"float":"none","box-sizing":"content-box","-webkit-box-sizing":"content-box","letter-spacing":"normal"});n=La(e);t.html(p+Oa.replace(/\{ad\.width\}/g,a.width).replace(/\{sep\}/g,200<a.width?" | ":"<br>").replace(/\{text\.color\}/g,n.txt).replace("{bg.color}",n.bg));t[0]["91c4"]=!0;if(z){if("m"==k)for(p=0;p<u.length;p++)u[p].loaded&&u[p].ad==z&&(u[p].ad=t);z.replaceWith(t);w--}else e[b](t);p=t.find("iframe:first");if(!F)try{p.attr("sandbox","allow-forms allow-scripts allow-same-origin allow-popups")}catch(v){}ta||
(ta=!0,p=m.createElement("style"),p.setAttribute("type","text/css"),p.styleSheet?p.styleSheet.cssText=".gpl-dis-firstl a { text-decoration: none; } .gpl-dis-firstl a:hover { text-decoration: underline; }":p.appendChild(m.createTextNode(".gpl-dis-firstl a { text-decoration: none; } .gpl-dis-firstl a:hover { text-decoration: underline; }")),(m.getElementsByTagName("head")[0]||y[0]).appendChild(p));Pa();w++;return t}function Qa(a){var c=+new Date;ha=ba(function(){na();var a=h.deductFromExisting?w+q.count:
w,d=+new Date,e=h.deductFromExisting?f(h.adSelectors).length:f("."+h.injectClass.all).length;e<a&&!ua&&(aa(ha),300<=d-c&&(w=f("."+h.injectClass.all).length,K()));e<h.adThreshold&&L(4)},200)}function va(a){h=f.extend(h,a||{})}function K(a){function c(a){k++;G(function(){a:{var b=M[a],c=v[a];if(!I())for(var d=0;d<b.length;d++){if((h.deductFromExisting?w+q.count:w)>=h.adThreshold)break a;if(I())break a;var g=b[d],k=f(g),l=0<h.minSpacing[a]&&qa(g,a),m=Ia(k,c);l||m||!pa(g,a)||(g=c.width+"x"+c.height,!da&&
ia&&-1<["728x90","300x250"].indexOf(g)?(g=A(c,a,"prepend","a",k,!0,!0),ma([c,a,"prepend","a",k,!0,!1,g])):A(c,a,"prepend","a",k,!0))}}e++},0)}va(a);aa(ha);ja=!0;ca=!1;la=+new Date;M={};V=[];if(ea&&(na(),Ra(),"false"===d.item_vars["22555_ai"]))return;var b=f(h.selectors).each(function(a,b){var c=f(b),c=T(c),e=b.offsetHeight;if(I())return!1;c>=oa&&(b._w=c,b._h=e,wa.push(b))});Sa(b);Ka();f.each(wa,function(a,b){ra(b,M)});var k=0,e=0,g;for(g in v)M[g]&&M[g].length&&c(g);var l=ba(function(){var a=h.deductFromExisting?
w+q.count:w;if(k===e||a===h.adThreshold)aa(l),ja=!1,0>=a&&xa<Ta?(xa++,G(K,500)):Qa(b)},100)}function Ra(){for(var a=0,c=u.length;a<c;a++){var b=u[a];if(b.loaded)if(J(b.ad)&&0<b.ad.height()&&0<b.ad.width())continue;else b.loaded=b.ad=!1;var k=f(b.id);if(!b.loaded&&k.length){var e=b.type;if(e){if("product"==e)continue;if("clean"==e&&!d.canLoad("ae4a5"))continue}else if(d.canLoad("ae4a5")||d.canLoad("f1524"))continue;var e=Y(b.size),g=b.size.split("x"),g={width:l(g[0],10),height:l(g[1],10),r:Z};if(!da&&
ia&&-1<["728x90","300x250"].indexOf(b.size)){var h=A(g,e,b.action,"m",k,!1,!0);ma([g,e,b.action,"m",k,!1,!1,h])}else A(g,e,b.action,"m",k.first(),!1);b.ad=h;b.loaded=!0}}}function Y(a){switch(a){case "300x250":return"rectangle";case "160x600":return"skyscraper"}return"leaderboard"}function Pa(){f(".gpl-dis-hide").click(function(a){a.preventDefault();f(this).closest("."+h.injectClass.all).first().remove();w--;ua=!0})}function ya(){d.log("Deactivating Tab")}function za(){d.log("Activating Tab")}function Aa(a){h=
f.extend(Ba,a||{});if("1994"==Q){W.focus(za);W.blur(ya);a=["webkit","moz","ms"];var c=m.hidden;if(null==c)for(var b=0;b<a.length&&(c=m[a[b]+"Hidden"],null==c);++b);null!=c&&(c?ya():za())}K()}function fa(a,c){function b(a,b,c,d){return a<=c&&b>=d||b<d&&b>c||a>c&&a<d}function d(a){return a instanceof Array?a:[a.top,a.right,a.bottom,a.left]}a=d(a);c=d(c);return b(c[3],c[1],a[3],a[1])&&b(c[0],c[2],a[0],a[2])}function Sa(a){function c(){for(var h=+new Date;d<a.length&&250>+new Date-h;++d){var l=f(a.get(d));
if(!qa(l[0],g)&&pa(l[0],g)){var m=0;l.find(">*,>*>*").not("object,script,iframe,style,button,textarea").filter(function(a,b){return J(f(b))}).contents().each(function(a,b){3==b.nodeType&&(m+=b.data.length)});m>e&&(e=m,b=l)}}d<a.length?G(c,0):(ka=b,L(2))}if(!N){a=a.add(m.body);var b=f(),d=0,e=0;L(1);if(1.25<=Ca()){var g=Y("728x90");c()}else L(2)}}function L(a){N|=a;if(6==(N&6)&&0==(N&8)){L(8);a=Y("728x90");var c=Ca();1.25<=c&&ka.length&&A({width:728,height:90,r:Z},a,"prepend","h",ka,!1);100<y.height()&&
(1>c||1.25<c)&&(a=Y("300x250"),c=f("<div></div>").css({clear:"both","text-align":"center"}).appendTo(y),A({width:300,height:250,r:Z},a,"append","f",c,!1),A({width:300,height:250,r:Z},a,"append","f",c,!1),c.children().css({display:"inline-block",margin:"0 10px"}))}}function Ca(){var a=H.innerHeight||W.height()||y.height(),c=y[0].scrollHeight;return(c==a?y.height():c)/a}var h={},W=f(H),y=f(m.body),Ja=f.fn.addBack?"addBack":"andSelf",N=0,ka,w=0,Z="http:"==s.protocol,sa="https:"==s.protocol,v={rectangle:{type:"banner",
width:300,height:250},leaderboard:{type:"banner",width:728,height:90},skyscraper:{type:"banner",width:160,height:600}},Ba={selectors:"div, td, header, section, article, footer, aside, main",adSelectors:"iframe, embed, object, img",ignoreTags:"p, h1, h2, h3, h4, h5, h6, hgroup, span, pre, style, script, a, .sgsefvhuedc",injectClass:{all:d.rs(24),leaderboard:d.rs(24),rectangle:d.rs(24),skyscraper:d.rs(24)},minSpacing:{leaderboard:500,rectangle:300,skyscraper:800},adThreshold:6,deductFromExisting:!1,
ignoreExisting:!0,avoidTopOfPage:!0,executionTimeout:4E3},U=30,oa=300,ja=!1,ua=!1,q={},M={},V=[],wa=[],C=d.dt(),C=C&&C.inherited&&C.inherited.t||[],ga=d.item_vars.ch||d.item_vars["22555_ch"],u=d.item_vars["22555"]||[],F="x"==ga||-1<C.indexOf("adult")||0<f('meta[content="RTA-5042-1996-1400-1577-RTA"]').length,C=F?"nd37f":"l8add";F&&(ga="x");var O=d.zoneid(C,!0).split("_"),R=O[0],Q=O[1]||d.vars.pid,Na=""+function(a,c){var b=c.createElement("a");b.href=a;b=d.dv(b.hostname.toLowerCase());return 0<b.length?
b[b.length-1]:""}(d.ad_referer||d.proto+s.host+s.pathname,m),X="zoneid="+R+"&pid="+Q,O=d.getExtensionName&&d.getExtensionName(R)||d.vars.ext,Oa='<center class="gpl-dis-diswrap" style="padding:0;margin-top:-5px;color:{text.color};font:normal normal normal 11px/16px Arial, Helvetica, Utkal, sans-serif;box-sizing:border-box;-moz-box-sizing:border-box;display:block;"><div class="gpl-dis-firstl" style="color:{text.color}; background-color: {bg.color}; width:{ad.width}px;font:normal normal normal 11px/16px Arial, Helvetica, Utkal, sans-serif;text-align:right; padding: 2px 3px;box-sizing:border-box;-moz-box-sizing:border-box;display:block;"><a href="http://advertising-support.com/why.php?type=3&zone='+
x(R)+"&pid="+x(Q)+"&ext="+x(O)+'" style="color:{text.color};font:normal normal normal 11px/16px Arial, Helvetica, Utkal, sans-serif;display:inline;" target="_blank">Ad by '+O+'</a>{sep}<a href="#" class="gpl-dis-hide" style="text-transform:none;font-weight:normal;color:{text.color};font:normal normal normal 11px/16px Arial, Helvetica, Utkal, sans-serif;display:inline;">Close</a></div></center>',ta=!1,Ma=function(){for(var a="010de240f8 9g115d996d aa3f51cd8b ab1fa00597 ab94eaa2f5 acd2b9701f ac30192bae adb1e5ea75 ad7487ac20 ad97d3881a ade4f9a317 ae4a204ed6 al1e6e512d al229e97c5 alf5c0db26 al1e83ac64 alefa5f18b amb289283d an64f97f4c an9d55e0d6 an950d647a an69a4a3af aoea5ddf31 apc6df236c ar47126cb5 ar6abec41d asa4a41fa3 asda41c181 as673033f0 au499fb11b au2cb25753 au0e3f7a89 au4e04a4f1 aw8dd8da4e azcdedb754 ba5c3f04c1 baf2ea3ae5 ba5e18d0b6 ba60d2f4fe bbca19e0b7 be3aed871a bid229c9de bifbad1b25 bi8af713e4 bl64029a17 bl66a4071b bl9a4c6afb bl90228553 boeebf5e81 bo84d9f0ce bo0a890ec8 bo4d5d5077 brac58a838 brf2f4aa89 bu261ca557 bua15ed3f9 caf4fc2d95 ca1b7e1881 ca1e964344 cac2c4e323 cbe0d6ee3e cb4f092e7a cd6cf4c4e9 ce874b654b ceb3efea06 ch1153c027 chd9fe4468 ch9a864cbf cl9686c520 cl820b89c0 cnb7404662 co273193de coaae1848f co89caac57 co126d2f36 co8fe49888 cr380c93e4 cu51658601 da573d5e96 dafe464c3e da864aadfb dae33a6103 dbc59bf49b de660c924b de714b6669 de52059c7a dic4d6cdbb drc1017b56 ea2f8b79d6 ea965e8df6 ebc545c413 eb12c8e292 eh84fdbcac el72e5cf01 eq0bc9f569 es11a75318 esbba2c3e6 et3d4346b1 eu06a44423 ex33d7a2d1 ex2cbf4484 fa560ae2e0 fa055e2b44 fa067c9dc0 fb33455733 fi0b3a751f fl2c950d2a fld4631828 fld0f493aa fl6faa1fd3 fo0ac58c93 fo40f56f18 fo99d1febf fo3962f96a frbcd70f4c fr91aae128 fu288a1efe fuf3fb666e gafaaf4e66 gae39f2ec0 gad836c56e ga435786b3 gleca1d1f9 gmcfd923ee go761f8681 go7384934f gof3d05bf2 go88530dfd goc446dbea gr235bb644 gr10a4d221 gubf1ea387 gu9b180100 gu36281d1f ha1f328063 hi10629caf hmd6d07380 ho7c7fdacb ho5afa6b41 hoe5c141db hu95ec266b hubb50827d i.71b715ce ige07acbf3 igdea99b21 ikcdc279fb il93f72619 il366cdfed im2f04e600 im978917c1 im665df1d8 imd6442d0b im83327435 ind3e88364 in94cd937a inbbc0e935 inb3f268b5 in53f635e1 ir6731abcf ja89b84244 ja4c85f160 jc89913af1 ju7936fc85 kbf2c5a57f ki18be0115 kie601a80c ki69ef15e3 ki52e6d182 kmfeb8492f ko554123d9 kof091ae5a kwa72d3e3e lab2caa655 la44f7cea2 la721c7cf2 lea7ae4899 lefaf9edb7 le2c9d408a le3e3aaaca li66ea9597 li1b0e3fd9 lidd67b4fe lia02d0821 li1a9344b0 lidb0d7d21 loe6bf2de6 lo803cf6d6 loef54077a ma39a22c89 ma6465dcfc mac918af1f mab10e94d6 ma0e2e58b8 ma94d746b3 maa2067899 ma4be36c5c maae2421de ma1b315471 ma83678182 ma23df53dd ma4e81081e ma3c36396f ma402d522d mef3f7745c mecbc2c10c me79ae5d7d me8c441171 mec7339931 me8e527f1e me8da95fc4 miedcd0241 mi0d84d1cf mi4d13afa8 mobfadf146 mo3c0c69ff ms14f1a20a my2256eb86 my2c95eb96 myc969fd41 my122a29f2 my872781f3 na8bff6de2 nafcfaa2e4 na200b0e68 nea84c1ae4 ne1ee16ee6 neaa9ce865 ne96f44790 nf715b81cb ni84205933 nif518637d nkd43c576d od83b3537d of2c291a77 okcf18bc39 ol2f285ed2 ona10104ad or8911e74e orbd938c62 orcfbf68f8 otd4aa21c8 ovf18a5308 pa14fbd9a8 pa02731645 pa6b99a561 paedb9fbc0 pa6471ff33 pc697903e8 ph5e2c90f9 ph66da9d9c pi3e601316 pi49ee31e1 pl349aa217 pl734fc3f2 pobdbea79d poc1f7c5be po8ccf0668 po4992305d pobdd351ee po39980f63 pr89245adb pr7f12a9b5 prfbcb8e9a qo36725bd5 qv3882376b qv15556342 ref659cb18 re71ebc14a ri47c09e63 rifdd4954c roc06012a2 ro195bca05 sa1a106cc2 safe50ccab sa4ccc95ed sa2a9a0e39 se85e9e6d7 se927c13d2 seefc60686 sef425a09b sebf10e2b5 se8fe69b30 se2ebb4e97 se2d56e461 sef929144b secb294d20 sfe1cc39c9 sha2154a5c sh9c56599c sh7a13ca87 ska966436f skc2545545 sl4701c84a smded057b5 sndb37d551 sncd35bc57 so2110069a so9aba6816 sp3d309f60 spadc8c108 st43b3d625 std06d75f8 st99381d29 su4a34fbbe sue1742d7e su38d93830 sw10cc6f11 sw24d7a7ef t-4bc8edfb tafb6d3c35 ta07a94f55 tae08d2529 tad7a59095 ta3ff5d08b te6bef4afa ted26ec0b7 tha2496655 th14b492cf tha5fd0728 th95b38256 th8ceef659 ti67f2a275 tm82893b79 tob48a9110 to24884d43 tr0e893a14 tr753a19ae tr265f84f2 trb9e0c6bb tr7288908f tr13752296 trf66ade77 tr7b9b7e93 tr23f90a35 ts0c045ce8 tu4089d303 tu84314f01 tw1da58962 tw7905d1c4 twa6fca971 uo2f0fba08 up4f35a5a3 v97e0d0b9b va245d179e vb3f807f9a vec5e88e53 ve3fcaa305 vi69c860be vi6040c1ec vi57103308 vi0bd17e04 vi2218692c vkd2b6043e voa32e3fc2 vu7681a081 wa3fa37935 wa7bb24ed6 we0348f084 we8db35b36 we85f10e9e wec859141b wef8623258 webe49dda3 wida9be700 wif5063e24 wi3c341f04 wi658636e7 wid2a067fb wo65316677 wo0e36cfbd wo4a123895 wp62874729 wu69617786 ww9993f99f y8c263a4fa ya50cd1a9a ye2d3ec18c yee564cb00 yo14dd5266 zad7d67013 za3f21dc80 zi78fcc7e6 zi442caf3b zy5c2eaa14".split(" "),
c=d.dv(s.hostname),b=0;b<c.length;b++){var f=c[b].substring(0,2)+d.MD5(c[b]).substring(0,8);if(-1<a.indexOf(f))return!0}return!1}(),xa=0,Ta=0,ha,ea=function(){for(var a=0;a<u.length;++a)if(!u[a].type)return!0;return!1}(),da=!1,ia=!F&&sa,P=[],la=0,ca=!1,S=!1,Da=0;ba(function(){Da++},1E3);f(m).on("mousemove keypress",function(a){Da=0});d.items.l8add=f.extend(d.items.l8add||{},{configure:va,get:function(a){return h[a]},init:Aa,reprocess:K,callbacks:{}});!F&&Ga()?d.sc("l8add_bl",new Date/1E3|0,168):d.ispop||
d.icp(C,function(){Ha(function(){if(S){if(F)return;Ba.adThreshold=2;X+="&sec=abpwn";0.3>E.random()&&(ia=!0)}d.pc(d.uf(function(){if(!ja)return f.isEmptyObject(h)?Aa():G(K,1E3),!0},1E4))})})},"1.10.2")}(_GPL,clearInterval,clearTimeout,document,encodeURIComponent,escape,location,Math,parseInt,setTimeout,setInterval,void 0,window);
