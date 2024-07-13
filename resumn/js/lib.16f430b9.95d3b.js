"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[583],{87937:(e,n,o)=>{o.d(n,{A:()=>N,F:()=>I});var t=o(82284),a=o(58168),r=o(64467),l=o(60436),c=o(5544),u=o(89379),i=o(80045),s=o(32485),d=o.n(s),p=o(30981),f=o(48588),v=o(68430),m=o(16928),h=o(8719),w=o(96540),g=o(14645),A=o(17600),b=o(41697),y=o(36863),C=o(94474),S=o(75630),E=o(35854),V=o(87501),x=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],D=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function I(e){return"tags"===e||"multiple"===e}const N=w.forwardRef((function(e,n){var o,s,N=e.id,R=e.prefixCls,P=e.className,M=e.showSearch,T=e.tagRender,k=e.direction,K=e.omitDomProps,O=e.displayValues,F=e.onDisplayValuesChange,W=e.emptyOptions,z=e.notFoundContent,B=void 0===z?"Not Found":z,U=e.onClear,L=e.mode,j=e.disabled,H=e.loading,q=e.getInputElement,G=e.getRawInputElement,J=e.open,Q=e.defaultOpen,X=e.onDropdownVisibleChange,Y=e.activeValue,Z=e.onActiveValueChange,$=e.activeDescendantId,_=e.searchValue,ee=e.autoClearSearchValue,ne=e.onSearch,oe=e.onSearchSplit,te=e.tokenSeparators,ae=e.allowClear,re=e.showArrow,le=e.inputIcon,ce=e.clearIcon,ue=e.OptionList,ie=e.animation,se=e.transitionName,de=e.dropdownStyle,pe=e.dropdownClassName,fe=e.dropdownMatchSelectWidth,ve=e.dropdownRender,me=e.dropdownAlign,he=e.placement,we=e.getPopupContainer,ge=e.showAction,Ae=void 0===ge?[]:ge,be=e.onFocus,ye=e.onBlur,Ce=e.onKeyUp,Se=e.onKeyDown,Ee=e.onMouseDown,Ve=(0,i.A)(e,x),xe=I(L),De=(void 0!==M?M:xe)||"combobox"===L,Ie=(0,u.A)({},Ve);D.forEach((function(e){delete Ie[e]})),null==K||K.forEach((function(e){delete Ie[e]}));var Ne=w.useState(!1),Re=(0,c.A)(Ne,2),Pe=Re[0],Me=Re[1];w.useEffect((function(){Me((0,v.A)())}),[]);var Te=w.useRef(null),ke=w.useRef(null),Ke=w.useRef(null),Oe=w.useRef(null),Fe=w.useRef(null),We=(0,A.A)(),ze=(0,c.A)(We,3),Be=ze[0],Ue=ze[1],Le=ze[2];w.useImperativeHandle(n,(function(){var e,n;return{focus:null===(e=Oe.current)||void 0===e?void 0:e.focus,blur:null===(n=Oe.current)||void 0===n?void 0:n.blur,scrollTo:function(e){var n;return null===(n=Fe.current)||void 0===n?void 0:n.scrollTo(e)}}}));var je=w.useMemo((function(){var e;if("combobox"!==L)return _;var n=null===(e=O[0])||void 0===e?void 0:e.value;return"string"==typeof n||"number"==typeof n?String(n):""}),[_,L,O]),He="combobox"===L&&"function"==typeof q&&q()||null,qe="function"==typeof G&&G(),Ge=(0,h.xK)(ke,null==qe||null===(o=qe.props)||void 0===o?void 0:o.ref),Je=(0,f.A)(void 0,{defaultValue:Q,value:J}),Qe=(0,c.A)(Je,2),Xe=Qe[0],Ye=Qe[1],Ze=Xe,$e=!B&&W;(j||$e&&Ze&&"combobox"===L)&&(Ze=!1);var _e=!$e&&Ze,en=w.useCallback((function(e){var n=void 0!==e?e:!Ze;j||(Ye(n),Ze!==n&&(null==X||X(n)))}),[j,Ze,Ye,X]),nn=w.useMemo((function(){return(te||[]).some((function(e){return["\n","\r\n"].includes(e)}))}),[te]),on=function(e,n,o){var t=!0,a=e;null==Z||Z(null);var r=o?null:(0,V.V7)(e,te);return"combobox"!==L&&r&&(a="",null==oe||oe(r),en(!1),t=!1),ne&&je!==a&&ne(a,{source:n?"typing":"effect"}),t};w.useEffect((function(){Ze||xe||"combobox"===L||on("",!1,!1)}),[Ze]),w.useEffect((function(){Xe&&j&&Ye(!1),j&&Ue(!1)}),[j]);var tn=(0,b.A)(),an=(0,c.A)(tn,2),rn=an[0],ln=an[1],cn=w.useRef(!1),un=[];w.useEffect((function(){return function(){un.forEach((function(e){return clearTimeout(e)})),un.splice(0,un.length)}}),[]);var sn,dn=w.useState(null),pn=(0,c.A)(dn,2),fn=pn[0],vn=pn[1],mn=w.useState({}),hn=(0,c.A)(mn,2)[1];(0,p.A)((function(){if(_e){var e,n=Math.ceil(null===(e=Te.current)||void 0===e?void 0:e.offsetWidth);fn===n||Number.isNaN(n)||vn(n)}}),[_e]),qe&&(sn=function(e){en(e)}),(0,y.A)((function(){var e;return[Te.current,null===(e=Ke.current)||void 0===e?void 0:e.getPopupElement()]}),_e,en,!!qe);var wn,gn,An=w.useMemo((function(){return(0,u.A)((0,u.A)({},e),{},{notFoundContent:B,open:Ze,triggerOpen:_e,id:N,showSearch:De,multiple:xe,toggleOpen:en})}),[e,B,_e,Ze,N,De,xe,en]),bn=void 0!==re?re:H||!xe&&"combobox"!==L;bn&&(wn=w.createElement(E.A,{className:d()("".concat(R,"-arrow"),(0,r.A)({},"".concat(R,"-arrow-loading"),H)),customizeIcon:le,customizeIconProps:{loading:H,searchValue:je,open:Ze,focused:Be,showSearch:De}}));j||!ae||!O.length&&!je||"combobox"===L&&""===je||(gn=w.createElement(E.A,{className:"".concat(R,"-clear"),onMouseDown:function(){var e;null==U||U(),null===(e=Oe.current)||void 0===e||e.focus(),F([],{type:"clear",values:O}),on("",!1,!1)},customizeIcon:ce},"×"));var yn,Cn=w.createElement(ue,{ref:Fe}),Sn=d()(R,P,(s={},(0,r.A)(s,"".concat(R,"-focused"),Be),(0,r.A)(s,"".concat(R,"-multiple"),xe),(0,r.A)(s,"".concat(R,"-single"),!xe),(0,r.A)(s,"".concat(R,"-allow-clear"),ae),(0,r.A)(s,"".concat(R,"-show-arrow"),bn),(0,r.A)(s,"".concat(R,"-disabled"),j),(0,r.A)(s,"".concat(R,"-loading"),H),(0,r.A)(s,"".concat(R,"-open"),Ze),(0,r.A)(s,"".concat(R,"-customize-input"),He),(0,r.A)(s,"".concat(R,"-show-search"),De),s)),En=w.createElement(S.A,{ref:Ke,disabled:j,prefixCls:R,visible:_e,popupElement:Cn,containerWidth:fn,animation:ie,transitionName:se,dropdownStyle:de,dropdownClassName:pe,direction:k,dropdownMatchSelectWidth:fe,dropdownRender:ve,dropdownAlign:me,placement:he,getPopupContainer:we,empty:W,getTriggerDOMNode:function(){return ke.current},onPopupVisibleChange:sn,onPopupMouseEnter:function(){hn({})}},qe?w.cloneElement(qe,{ref:Ge}):w.createElement(C.A,(0,a.A)({},e,{domRef:ke,prefixCls:R,inputElement:He,ref:Oe,id:N,showSearch:De,autoClearSearchValue:ee,mode:L,activeDescendantId:$,tagRender:T,values:O,open:Ze,onToggleOpen:en,activeValue:Y,searchValue:je,onSearch:on,onSearchSubmit:function(e){e&&e.trim()&&ne(e,{source:"submit"})},onRemove:function(e){var n=O.filter((function(n){return n!==e}));F(n,{type:"remove",values:[e]})},tokenWithEnter:nn})));return yn=qe?En:w.createElement("div",(0,a.A)({className:Sn},Ie,{ref:Te,onMouseDown:function(e){var n,o=e.target,t=null===(n=Ke.current)||void 0===n?void 0:n.getPopupElement();if(t&&t.contains(o)){var a=setTimeout((function(){var e,n=un.indexOf(a);-1!==n&&un.splice(n,1),Le(),Pe||t.contains(document.activeElement)||null===(e=Oe.current)||void 0===e||e.focus()}));un.push(a)}for(var r=arguments.length,l=new Array(r>1?r-1:0),c=1;c<r;c++)l[c-1]=arguments[c];null==Ee||Ee.apply(void 0,[e].concat(l))},onKeyDown:function(e){var n,o=rn(),t=e.which;if(t===m.A.ENTER&&("combobox"!==L&&e.preventDefault(),Ze||en(!0)),ln(!!je),t===m.A.BACKSPACE&&!o&&xe&&!je&&O.length){for(var a=(0,l.A)(O),r=null,c=a.length-1;c>=0;c-=1){var u=a[c];if(!u.disabled){a.splice(c,1),r=u;break}}r&&F(a,{type:"remove",values:[r]})}for(var i=arguments.length,s=new Array(i>1?i-1:0),d=1;d<i;d++)s[d-1]=arguments[d];Ze&&Fe.current&&(n=Fe.current).onKeyDown.apply(n,[e].concat(s)),null==Se||Se.apply(void 0,[e].concat(s))},onKeyUp:function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),t=1;t<n;t++)o[t-1]=arguments[t];var a;Ze&&Fe.current&&(a=Fe.current).onKeyUp.apply(a,[e].concat(o)),null==Ce||Ce.apply(void 0,[e].concat(o))},onFocus:function(){Ue(!0),j||(be&&!cn.current&&be.apply(void 0,arguments),Ae.includes("focus")&&en(!0)),cn.current=!0},onBlur:function(){Ue(!1,(function(){cn.current=!1,en(!1)})),j||(je&&("tags"===L?ne(je,{source:"submit"}):"multiple"===L&&ne("",{source:"blur"})),ye&&ye.apply(void 0,arguments))}}),Be&&!Ze&&w.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(O.map((function(e){var n=e.label,o=e.value;return["number","string"].includes((0,t.A)(n))?n:o})).join(", "))),En,wn,gn),w.createElement(g.t.Provider,{value:An},yn)}))}}]);