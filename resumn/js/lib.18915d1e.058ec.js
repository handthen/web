"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[822],{13688:(e,o,t)=>{t.d(o,{A:()=>b});var n=t(89379),i=t(58168),s=t(23029),u=t(92901),r=t(9417),a=t(15361),p=t(52962),l=t(64467),c=t(96540),h=t(40961),d=t(25371),m=t(54808),f=t(66588),v=t(8719),A=t(69916),T=t(88822),M=t(32485),C=t.n(M),g=t(21643),k=t(51738),D=t(2939);function y(){}function P(){return""}function w(e){return e?e.ownerDocument:window.document}var x=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"];const b=(O=T.A,H=function(e){(0,a.A)(t,e);var o=(0,p.A)(t);function t(e){var n,u;return(0,s.A)(this,t),n=o.call(this,e),(0,l.A)((0,r.A)(n),"popupRef",c.createRef()),(0,l.A)((0,r.A)(n),"triggerRef",c.createRef()),(0,l.A)((0,r.A)(n),"portalContainer",void 0),(0,l.A)((0,r.A)(n),"attachId",void 0),(0,l.A)((0,r.A)(n),"clickOutsideHandler",void 0),(0,l.A)((0,r.A)(n),"touchOutsideHandler",void 0),(0,l.A)((0,r.A)(n),"contextMenuOutsideHandler1",void 0),(0,l.A)((0,r.A)(n),"contextMenuOutsideHandler2",void 0),(0,l.A)((0,r.A)(n),"mouseDownTimeout",void 0),(0,l.A)((0,r.A)(n),"focusTime",void 0),(0,l.A)((0,r.A)(n),"preClickTime",void 0),(0,l.A)((0,r.A)(n),"preTouchTime",void 0),(0,l.A)((0,r.A)(n),"delayTimer",void 0),(0,l.A)((0,r.A)(n),"hasPopupMouseDown",void 0),(0,l.A)((0,r.A)(n),"onMouseEnter",(function(e){var o=n.props.mouseEnterDelay;n.fireEvents("onMouseEnter",e),n.delaySetPopupVisible(!0,o,o?null:e)})),(0,l.A)((0,r.A)(n),"onMouseMove",(function(e){n.fireEvents("onMouseMove",e),n.setPoint(e)})),(0,l.A)((0,r.A)(n),"onMouseLeave",(function(e){n.fireEvents("onMouseLeave",e),n.delaySetPopupVisible(!1,n.props.mouseLeaveDelay)})),(0,l.A)((0,r.A)(n),"onPopupMouseEnter",(function(){n.clearDelayTimer()})),(0,l.A)((0,r.A)(n),"onPopupMouseLeave",(function(e){var o;e.relatedTarget&&!e.relatedTarget.setTimeout&&(0,m.A)(null===(o=n.popupRef.current)||void 0===o?void 0:o.getElement(),e.relatedTarget)||n.delaySetPopupVisible(!1,n.props.mouseLeaveDelay)})),(0,l.A)((0,r.A)(n),"onFocus",(function(e){n.fireEvents("onFocus",e),n.clearDelayTimer(),n.isFocusToShow()&&(n.focusTime=Date.now(),n.delaySetPopupVisible(!0,n.props.focusDelay))})),(0,l.A)((0,r.A)(n),"onMouseDown",(function(e){n.fireEvents("onMouseDown",e),n.preClickTime=Date.now()})),(0,l.A)((0,r.A)(n),"onTouchStart",(function(e){n.fireEvents("onTouchStart",e),n.preTouchTime=Date.now()})),(0,l.A)((0,r.A)(n),"onBlur",(function(e){n.fireEvents("onBlur",e),n.clearDelayTimer(),n.isBlurToHide()&&n.delaySetPopupVisible(!1,n.props.blurDelay)})),(0,l.A)((0,r.A)(n),"onContextMenu",(function(e){e.preventDefault(),n.fireEvents("onContextMenu",e),n.setPopupVisible(!0,e)})),(0,l.A)((0,r.A)(n),"onContextMenuClose",(function(){n.isContextMenuToShow()&&n.close()})),(0,l.A)((0,r.A)(n),"onClick",(function(e){if(n.fireEvents("onClick",e),n.focusTime){var o;if(n.preClickTime&&n.preTouchTime?o=Math.min(n.preClickTime,n.preTouchTime):n.preClickTime?o=n.preClickTime:n.preTouchTime&&(o=n.preTouchTime),Math.abs(o-n.focusTime)<20)return;n.focusTime=0}n.preClickTime=0,n.preTouchTime=0,n.isClickToShow()&&(n.isClickToHide()||n.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var t=!n.state.popupVisible;(n.isClickToHide()&&!t||t&&n.isClickToShow())&&n.setPopupVisible(!n.state.popupVisible,e)})),(0,l.A)((0,r.A)(n),"onPopupMouseDown",(function(){var e;n.hasPopupMouseDown=!0,clearTimeout(n.mouseDownTimeout),n.mouseDownTimeout=window.setTimeout((function(){n.hasPopupMouseDown=!1}),0),n.context&&(e=n.context).onPopupMouseDown.apply(e,arguments)})),(0,l.A)((0,r.A)(n),"onDocumentClick",(function(e){if(!n.props.mask||n.props.maskClosable){var o=e.target,t=n.getRootDomNode(),i=n.getPopupDomNode();(0,m.A)(t,o)&&!n.isContextMenuOnly()||(0,m.A)(i,o)||n.hasPopupMouseDown||n.close()}})),(0,l.A)((0,r.A)(n),"getRootDomNode",(function(){var e=n.props.getTriggerDOMNode;if(e)return e(n.triggerRef.current);try{var o=(0,f.A)(n.triggerRef.current);if(o)return o}catch(e){}return h.findDOMNode((0,r.A)(n))})),(0,l.A)((0,r.A)(n),"getPopupClassNameFromAlign",(function(e){var o=[],t=n.props,i=t.popupPlacement,s=t.builtinPlacements,u=t.prefixCls,r=t.alignPoint,a=t.getPopupClassNameFromAlign;return i&&s&&o.push((0,g.H)(s,u,e,r)),a&&o.push(a(e)),o.join(" ")})),(0,l.A)((0,r.A)(n),"getComponent",(function(){var e=n.props,o=e.prefixCls,t=e.destroyPopupOnHide,s=e.popupClassName,u=e.onPopupAlign,r=e.popupMotion,a=e.popupAnimation,p=e.popupTransitionName,l=e.popupStyle,h=e.mask,d=e.maskAnimation,m=e.maskTransitionName,f=e.maskMotion,v=e.zIndex,A=e.popup,T=e.stretch,M=e.alignPoint,C=e.mobile,g=e.forceRender,D=e.onPopupClick,y=n.state,P=y.popupVisible,w=y.point,x=n.getPopupAlign(),b={};return n.isMouseEnterToShow()&&(b.onMouseEnter=n.onPopupMouseEnter),n.isMouseLeaveToHide()&&(b.onMouseLeave=n.onPopupMouseLeave),b.onMouseDown=n.onPopupMouseDown,b.onTouchStart=n.onPopupMouseDown,c.createElement(k.A,(0,i.A)({prefixCls:o,destroyPopupOnHide:t,visible:P,point:M&&w,className:s,align:x,onAlign:u,animation:a,getClassNameFromAlign:n.getPopupClassNameFromAlign},b,{stretch:T,getRootDomNode:n.getRootDomNode,style:l,mask:h,zIndex:v,transitionName:p,maskAnimation:d,maskTransitionName:m,maskMotion:f,ref:n.popupRef,motion:r,mobile:C,forceRender:g,onClick:D}),"function"==typeof A?A():A)})),(0,l.A)((0,r.A)(n),"attachParent",(function(e){d.A.cancel(n.attachId);var o,t=n.props,i=t.getPopupContainer,s=t.getDocument,u=n.getRootDomNode();i?(u||0===i.length)&&(o=i(u)):o=s(n.getRootDomNode()).body,o?o.appendChild(e):n.attachId=(0,d.A)((function(){n.attachParent(e)}))})),(0,l.A)((0,r.A)(n),"getContainer",(function(){if(!n.portalContainer){var e=(0,n.props.getDocument)(n.getRootDomNode()).createElement("div");e.style.position="absolute",e.style.top="0",e.style.left="0",e.style.width="100%",n.portalContainer=e}return n.attachParent(n.portalContainer),n.portalContainer})),(0,l.A)((0,r.A)(n),"setPoint",(function(e){n.props.alignPoint&&e&&n.setState({point:{pageX:e.pageX,pageY:e.pageY}})})),(0,l.A)((0,r.A)(n),"handlePortalUpdate",(function(){n.state.prevPopupVisible!==n.state.popupVisible&&n.props.afterPopupVisibleChange(n.state.popupVisible)})),(0,l.A)((0,r.A)(n),"triggerContextValue",{onPopupMouseDown:n.onPopupMouseDown}),u="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,n.state={prevPopupVisible:u,popupVisible:u},x.forEach((function(e){n["fire".concat(e)]=function(o){n.fireEvents(e,o)}})),n}return(0,u.A)(t,[{key:"componentDidMount",value:function(){this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e,o=this.props;if(this.state.popupVisible)return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(e=o.getDocument(this.getRootDomNode()),this.clickOutsideHandler=(0,A.A)(e,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(e=e||o.getDocument(this.getRootDomNode()),this.touchOutsideHandler=(0,A.A)(e,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(e=e||o.getDocument(this.getRootDomNode()),this.contextMenuOutsideHandler1=(0,A.A)(e,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=(0,A.A)(window,"blur",this.onContextMenuClose)));this.clearOutsideHandler()}},{key:"componentWillUnmount",value:function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout),d.A.cancel(this.attachId)}},{key:"getPopupDomNode",value:function(){var e;return(null===(e=this.popupRef.current)||void 0===e?void 0:e.getElement())||null}},{key:"getPopupAlign",value:function(){var e=this.props,o=e.popupPlacement,t=e.popupAlign,n=e.builtinPlacements;return o&&n?(0,g.R)(n,o,t):t}},{key:"setPopupVisible",value:function(e,o){var t=this.props.alignPoint,n=this.state.popupVisible;this.clearDelayTimer(),n!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:n}),this.props.onPopupVisibleChange(e)),t&&o&&e&&this.setPoint(o)}},{key:"delaySetPopupVisible",value:function(e,o,t){var n=this,i=1e3*o;if(this.clearDelayTimer(),i){var s=t?{pageX:t.pageX,pageY:t.pageY}:null;this.delayTimer=window.setTimeout((function(){n.setPopupVisible(e,s),n.clearDelayTimer()}),i)}else this.setPopupVisible(e,t)}},{key:"clearDelayTimer",value:function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null)}},{key:"clearOutsideHandler",value:function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null)}},{key:"createTwoChains",value:function(e){var o=this.props.children.props,t=this.props;return o[e]&&t[e]?this["fire".concat(e)]:o[e]||t[e]}},{key:"isClickToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("click")||-1!==t.indexOf("click")}},{key:"isContextMenuOnly",value:function(){var e=this.props.action;return"contextMenu"===e||1===e.length&&"contextMenu"===e[0]}},{key:"isContextMenuToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("contextMenu")||-1!==t.indexOf("contextMenu")}},{key:"isClickToHide",value:function(){var e=this.props,o=e.action,t=e.hideAction;return-1!==o.indexOf("click")||-1!==t.indexOf("click")}},{key:"isMouseEnterToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("hover")||-1!==t.indexOf("mouseEnter")}},{key:"isMouseLeaveToHide",value:function(){var e=this.props,o=e.action,t=e.hideAction;return-1!==o.indexOf("hover")||-1!==t.indexOf("mouseLeave")}},{key:"isFocusToShow",value:function(){var e=this.props,o=e.action,t=e.showAction;return-1!==o.indexOf("focus")||-1!==t.indexOf("focus")}},{key:"isBlurToHide",value:function(){var e=this.props,o=e.action,t=e.hideAction;return-1!==o.indexOf("focus")||-1!==t.indexOf("blur")}},{key:"forcePopupAlign",value:function(){var e;this.state.popupVisible&&(null===(e=this.popupRef.current)||void 0===e||e.forceAlign())}},{key:"fireEvents",value:function(e,o){var t=this.props.children.props[e];t&&t(o);var n=this.props[e];n&&n(o)}},{key:"close",value:function(){this.setPopupVisible(!1)}},{key:"render",value:function(){var e=this.state.popupVisible,o=this.props,t=o.children,i=o.forceRender,s=o.alignPoint,u=o.className,r=o.autoDestroy,a=c.Children.only(t),p={key:"trigger"};this.isContextMenuToShow()?p.onContextMenu=this.onContextMenu:p.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(p.onClick=this.onClick,p.onMouseDown=this.onMouseDown,p.onTouchStart=this.onTouchStart):(p.onClick=this.createTwoChains("onClick"),p.onMouseDown=this.createTwoChains("onMouseDown"),p.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(p.onMouseEnter=this.onMouseEnter,s&&(p.onMouseMove=this.onMouseMove)):p.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?p.onMouseLeave=this.onMouseLeave:p.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(p.onFocus=this.onFocus,p.onBlur=this.onBlur):(p.onFocus=this.createTwoChains("onFocus"),p.onBlur=this.createTwoChains("onBlur"));var l=C()(a&&a.props&&a.props.className,u);l&&(p.className=l);var h=(0,n.A)({},p);(0,v.f3)(a)&&(h.ref=(0,v.K4)(this.triggerRef,a.ref));var d,m=c.cloneElement(a,h);return(e||this.popupRef.current||i)&&(d=c.createElement(O,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),!e&&r&&(d=null),c.createElement(D.A.Provider,{value:this.triggerContextValue},m,d)}}],[{key:"getDerivedStateFromProps",value:function(e,o){var t=e.popupVisible,n={};return void 0!==t&&o.popupVisible!==t&&(n.popupVisible=t,n.prevPopupVisible=o.popupVisible),n}}]),t}(c.Component),(0,l.A)(H,"contextType",D.A),(0,l.A)(H,"defaultProps",{prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:P,getDocument:w,onPopupVisibleChange:y,afterPopupVisibleChange:y,onPopupAlign:y,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[],autoDestroy:!1}),H);var O,H}}]);