"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[6],{55847:(e,t,r)=>{r(29979);var s,n=r(51605),a=r(65077),i=r(9557),o=r(30200),h=r(46885),u=r(30281),f=r(7485),c=r(76477),l=r(65190),p=r(36490),m=r(81688),g=r(51027),d=r(76056),v=r(77804).codeAt,w=r(83150),P=r(95362),b=r(75282),S=r(56589),U=r(77895),y=r(99206),k=y.set,H=y.getterFor("URL"),q=U.URLSearchParams,L=U.getState,R=o.URL,B=o.TypeError,A=o.parseInt,z=Math.floor,C=Math.pow,O=u("".charAt),j=u(/./.exec),I=u([].join),$=u(1..toString),x=u([].pop),M=u([].push),E=u("".replace),F=u([].shift),J=u("".split),N=u("".slice),T=u("".toLowerCase),D=u([].unshift),G="Invalid scheme",K="Invalid host",Q="Invalid port",V=/[a-z]/i,W=/[\d+-.a-z]/i,X=/\d/,Y=/^0x/i,Z=/^[0-7]+$/,_=/^\d+$/,ee=/^[\da-f]+$/i,te=/[\0\t\n\r #%/:<>?@[\\\]^|]/,re=/[\0\t\n\r #/:<>?@[\\\]^|]/,se=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,ne=/[\t\n\r]/g,ae=function(e){var t,r,s,n;if("number"==typeof e){for(t=[],r=0;r<4;r++)D(t,e%256),e=z(e/256);return I(t,".")}if("object"==typeof e){for(t="",s=function(e){for(var t=null,r=1,s=null,n=0,a=0;a<8;a++)0!==e[a]?(n>r&&(t=s,r=n),s=null,n=0):(null===s&&(s=a),++n);return n>r&&(t=s,r=n),t}(e),r=0;r<8;r++)n&&0===e[r]||(n&&(n=!1),s===r?(t+=r?":":"::",n=!0):(t+=$(e[r],16),r<7&&(t+=":")));return"["+t+"]"}return e},ie={},oe=m({},ie,{" ":1,'"':1,"<":1,">":1,"`":1}),he=m({},oe,{"#":1,"?":1,"{":1,"}":1}),ue=m({},he,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),fe=function(e,t){var r=v(e,0);return r>32&&r<127&&!p(t,e)?e:encodeURIComponent(e)},ce={ftp:21,file:null,http:80,https:443,ws:80,wss:443},le=function(e,t){var r;return 2==e.length&&j(V,O(e,0))&&(":"==(r=O(e,1))||!t&&"|"==r)},pe=function(e){var t;return e.length>1&&le(N(e,0,2))&&(2==e.length||"/"===(t=O(e,2))||"\\"===t||"?"===t||"#"===t)},me=function(e){return"."===e||"%2e"===T(e)},ge={},de={},ve={},we={},Pe={},be={},Se={},Ue={},ye={},ke={},He={},qe={},Le={},Re={},Be={},Ae={},ze={},Ce={},Oe={},je={},Ie={},$e=function(e,t,r){var s,n,a,i=P(e);if(t){if(n=this.parse(i))throw B(n);this.searchParams=null}else{if(void 0!==r&&(s=new $e(r,!0)),n=this.parse(i,null,s))throw B(n);(a=L(new q)).bindURL(this),this.searchParams=a}};$e.prototype={type:"URL",parse:function(e,t,r){var n,a,i,o,h,u=this,f=t||ge,c=0,l="",m=!1,v=!1,w=!1;for(e=P(e),t||(u.scheme="",u.username="",u.password="",u.host=null,u.port=null,u.path=[],u.query=null,u.fragment=null,u.cannotBeABaseURL=!1,e=E(e,se,"")),e=E(e,ne,""),n=g(e);c<=n.length;){switch(a=n[c],f){case ge:if(!a||!j(V,a)){if(t)return G;f=ve;continue}l+=T(a),f=de;break;case de:if(a&&(j(W,a)||"+"==a||"-"==a||"."==a))l+=T(a);else{if(":"!=a){if(t)return G;l="",f=ve,c=0;continue}if(t&&(u.isSpecial()!=p(ce,l)||"file"==l&&(u.includesCredentials()||null!==u.port)||"file"==u.scheme&&!u.host))return;if(u.scheme=l,t)return void(u.isSpecial()&&ce[u.scheme]==u.port&&(u.port=null));l="","file"==u.scheme?f=Re:u.isSpecial()&&r&&r.scheme==u.scheme?f=we:u.isSpecial()?f=Ue:"/"==n[c+1]?(f=Pe,c++):(u.cannotBeABaseURL=!0,M(u.path,""),f=Oe)}break;case ve:if(!r||r.cannotBeABaseURL&&"#"!=a)return G;if(r.cannotBeABaseURL&&"#"==a){u.scheme=r.scheme,u.path=d(r.path),u.query=r.query,u.fragment="",u.cannotBeABaseURL=!0,f=Ie;break}f="file"==r.scheme?Re:be;continue;case we:if("/"!=a||"/"!=n[c+1]){f=be;continue}f=ye,c++;break;case Pe:if("/"==a){f=ke;break}f=Ce;continue;case be:if(u.scheme=r.scheme,a==s)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.query=r.query;else if("/"==a||"\\"==a&&u.isSpecial())f=Se;else if("?"==a)u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.query="",f=je;else{if("#"!=a){u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.path.length--,f=Ce;continue}u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,u.path=d(r.path),u.query=r.query,u.fragment="",f=Ie}break;case Se:if(!u.isSpecial()||"/"!=a&&"\\"!=a){if("/"!=a){u.username=r.username,u.password=r.password,u.host=r.host,u.port=r.port,f=Ce;continue}f=ke}else f=ye;break;case Ue:if(f=ye,"/"!=a||"/"!=O(l,c+1))continue;c++;break;case ye:if("/"!=a&&"\\"!=a){f=ke;continue}break;case ke:if("@"==a){m&&(l="%40"+l),m=!0,i=g(l);for(var b=0;b<i.length;b++){var S=i[b];if(":"!=S||w){var U=fe(S,ue);w?u.password+=U:u.username+=U}else w=!0}l=""}else if(a==s||"/"==a||"?"==a||"#"==a||"\\"==a&&u.isSpecial()){if(m&&""==l)return"Invalid authority";c-=g(l).length+1,l="",f=He}else l+=a;break;case He:case qe:if(t&&"file"==u.scheme){f=Ae;continue}if(":"!=a||v){if(a==s||"/"==a||"?"==a||"#"==a||"\\"==a&&u.isSpecial()){if(u.isSpecial()&&""==l)return K;if(t&&""==l&&(u.includesCredentials()||null!==u.port))return;if(o=u.parseHost(l))return o;if(l="",f=ze,t)return;continue}"["==a?v=!0:"]"==a&&(v=!1),l+=a}else{if(""==l)return K;if(o=u.parseHost(l))return o;if(l="",f=Le,t==qe)return}break;case Le:if(!j(X,a)){if(a==s||"/"==a||"?"==a||"#"==a||"\\"==a&&u.isSpecial()||t){if(""!=l){var y=A(l,10);if(y>65535)return Q;u.port=u.isSpecial()&&y===ce[u.scheme]?null:y,l=""}if(t)return;f=ze;continue}return Q}l+=a;break;case Re:if(u.scheme="file","/"==a||"\\"==a)f=Be;else{if(!r||"file"!=r.scheme){f=Ce;continue}if(a==s)u.host=r.host,u.path=d(r.path),u.query=r.query;else if("?"==a)u.host=r.host,u.path=d(r.path),u.query="",f=je;else{if("#"!=a){pe(I(d(n,c),""))||(u.host=r.host,u.path=d(r.path),u.shortenPath()),f=Ce;continue}u.host=r.host,u.path=d(r.path),u.query=r.query,u.fragment="",f=Ie}}break;case Be:if("/"==a||"\\"==a){f=Ae;break}r&&"file"==r.scheme&&!pe(I(d(n,c),""))&&(le(r.path[0],!0)?M(u.path,r.path[0]):u.host=r.host),f=Ce;continue;case Ae:if(a==s||"/"==a||"\\"==a||"?"==a||"#"==a){if(!t&&le(l))f=Ce;else if(""==l){if(u.host="",t)return;f=ze}else{if(o=u.parseHost(l))return o;if("localhost"==u.host&&(u.host=""),t)return;l="",f=ze}continue}l+=a;break;case ze:if(u.isSpecial()){if(f=Ce,"/"!=a&&"\\"!=a)continue}else if(t||"?"!=a)if(t||"#"!=a){if(a!=s&&(f=Ce,"/"!=a))continue}else u.fragment="",f=Ie;else u.query="",f=je;break;case Ce:if(a==s||"/"==a||"\\"==a&&u.isSpecial()||!t&&("?"==a||"#"==a)){if(".."===(h=T(h=l))||"%2e."===h||".%2e"===h||"%2e%2e"===h?(u.shortenPath(),"/"==a||"\\"==a&&u.isSpecial()||M(u.path,"")):me(l)?"/"==a||"\\"==a&&u.isSpecial()||M(u.path,""):("file"==u.scheme&&!u.path.length&&le(l)&&(u.host&&(u.host=""),l=O(l,0)+":"),M(u.path,l)),l="","file"==u.scheme&&(a==s||"?"==a||"#"==a))for(;u.path.length>1&&""===u.path[0];)F(u.path);"?"==a?(u.query="",f=je):"#"==a&&(u.fragment="",f=Ie)}else l+=fe(a,he);break;case Oe:"?"==a?(u.query="",f=je):"#"==a?(u.fragment="",f=Ie):a!=s&&(u.path[0]+=fe(a,ie));break;case je:t||"#"!=a?a!=s&&("'"==a&&u.isSpecial()?u.query+="%27":u.query+="#"==a?"%23":fe(a,ie)):(u.fragment="",f=Ie);break;case Ie:a!=s&&(u.fragment+=fe(a,oe))}c++}},parseHost:function(e){var t,r,s;if("["==O(e,0)){if("]"!=O(e,e.length-1))return K;if(t=function(e){var t,r,s,n,a,i,o,h=[0,0,0,0,0,0,0,0],u=0,f=null,c=0,l=function(){return O(e,c)};if(":"==l()){if(":"!=O(e,1))return;c+=2,f=++u}for(;l();){if(8==u)return;if(":"!=l()){for(t=r=0;r<4&&j(ee,l());)t=16*t+A(l(),16),c++,r++;if("."==l()){if(0==r)return;if(c-=r,u>6)return;for(s=0;l();){if(n=null,s>0){if(!("."==l()&&s<4))return;c++}if(!j(X,l()))return;for(;j(X,l());){if(a=A(l(),10),null===n)n=a;else{if(0==n)return;n=10*n+a}if(n>255)return;c++}h[u]=256*h[u]+n,2!=++s&&4!=s||u++}if(4!=s)return;break}if(":"==l()){if(c++,!l())return}else if(l())return;h[u++]=t}else{if(null!==f)return;c++,f=++u}}if(null!==f)for(i=u-f,u=7;0!=u&&i>0;)o=h[u],h[u--]=h[f+i-1],h[f+--i]=o;else if(8!=u)return;return h}(N(e,1,-1)),!t)return K;this.host=t}else if(this.isSpecial()){if(e=w(e),j(te,e))return K;if(t=function(e){var t,r,s,n,a,i,o,h=J(e,".");if(h.length&&""==h[h.length-1]&&h.length--,(t=h.length)>4)return e;for(r=[],s=0;s<t;s++){if(""==(n=h[s]))return e;if(a=10,n.length>1&&"0"==O(n,0)&&(a=j(Y,n)?16:8,n=N(n,8==a?1:2)),""===n)i=0;else{if(!j(10==a?_:8==a?Z:ee,n))return e;i=A(n,a)}M(r,i)}for(s=0;s<t;s++)if(i=r[s],s==t-1){if(i>=C(256,5-t))return null}else if(i>255)return null;for(o=x(r),s=0;s<r.length;s++)o+=r[s]*C(256,3-s);return o}(e),null===t)return K;this.host=t}else{if(j(re,e))return K;for(t="",r=g(e),s=0;s<r.length;s++)t+=fe(r[s],ie);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return p(ce,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&le(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,r=e.username,s=e.password,n=e.host,a=e.port,i=e.path,o=e.query,h=e.fragment,u=t+":";return null!==n?(u+="//",e.includesCredentials()&&(u+=r+(s?":"+s:"")+"@"),u+=ae(n),null!==a&&(u+=":"+a)):"file"==t&&(u+="//"),u+=e.cannotBeABaseURL?i[0]:i.length?"/"+I(i,"/"):"",null!==o&&(u+="?"+o),null!==h&&(u+="#"+h),u},setHref:function(e){var t=this.parse(e);if(t)throw B(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new xe(e.path[0]).origin}catch(e){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+ae(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(P(e)+":",ge)},getUsername:function(){return this.username},setUsername:function(e){var t=g(P(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var r=0;r<t.length;r++)this.username+=fe(t[r],ue)}},getPassword:function(){return this.password},setPassword:function(e){var t=g(P(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var r=0;r<t.length;r++)this.password+=fe(t[r],ue)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?ae(e):ae(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,He)},getHostname:function(){var e=this.host;return null===e?"":ae(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,qe)},getPort:function(){var e=this.port;return null===e?"":P(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(""==(e=P(e))?this.port=null:this.parse(e,Le))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+I(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,ze))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){""==(e=P(e))?this.query=null:("?"==O(e,0)&&(e=N(e,1)),this.query="",this.parse(e,je)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){""!=(e=P(e))?("#"==O(e,0)&&(e=N(e,1)),this.fragment="",this.parse(e,Ie)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var xe=function(e){var t=l(this,Me),r=S(arguments.length,1)>1?arguments[1]:void 0,s=k(t,new $e(e,!1,r));a||(t.href=s.serialize(),t.origin=s.getOrigin(),t.protocol=s.getProtocol(),t.username=s.getUsername(),t.password=s.getPassword(),t.host=s.getHost(),t.hostname=s.getHostname(),t.port=s.getPort(),t.pathname=s.getPathname(),t.search=s.getSearch(),t.searchParams=s.getSearchParams(),t.hash=s.getHash())},Me=xe.prototype,Ee=function(e,t){return{get:function(){return H(this)[e]()},set:t&&function(e){return H(this)[t](e)},configurable:!0,enumerable:!0}};if(a&&(c(Me,"href",Ee("serialize","setHref")),c(Me,"origin",Ee("getOrigin")),c(Me,"protocol",Ee("getProtocol","setProtocol")),c(Me,"username",Ee("getUsername","setUsername")),c(Me,"password",Ee("getPassword","setPassword")),c(Me,"host",Ee("getHost","setHost")),c(Me,"hostname",Ee("getHostname","setHostname")),c(Me,"port",Ee("getPort","setPort")),c(Me,"pathname",Ee("getPathname","setPathname")),c(Me,"search",Ee("getSearch","setSearch")),c(Me,"searchParams",Ee("getSearchParams")),c(Me,"hash",Ee("getHash","setHash"))),f(Me,"toJSON",(function(){return H(this).serialize()}),{enumerable:!0}),f(Me,"toString",(function(){return H(this).serialize()}),{enumerable:!0}),R){var Fe=R.createObjectURL,Je=R.revokeObjectURL;Fe&&f(xe,"createObjectURL",h(Fe,R)),Je&&f(xe,"revokeObjectURL",h(Je,R))}b(xe,"URL"),n({global:!0,constructor:!0,forced:!i,sham:!a},{URL:xe})}}]);