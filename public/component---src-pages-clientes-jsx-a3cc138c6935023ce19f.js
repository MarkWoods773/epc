(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[319],{3549:function(e){e.exports=function(){for(var e=arguments.length,t=[],n=0;n<e;n++)t[n]=arguments[n];if(0!==(t=t.filter((function(e){return null!=e}))).length)return 1===t.length?t[0]:t.reduce((function(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}))}},2130:function(e,t,n){"use strict";e.exports=n(4877)},8715:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=u(n(2130)),r=u(n(5697)),a=n(7294),s=u(a),l=u(n(7602));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){var e,n,i;c(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=i=p(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(r))),i.state={show:!1},i.show=function(){i.setState({show:!0}),i.props.onOpen()},i.handleClickBox=function(e){i.box.contains(e.target)||i.close()},i.close=function(){i.setState({show:!1}),i.props.onClose()},i.renderThumbnail=function(){var e=i.props,t=e.thumbnail,n=e.image,o=e.defaultThumbnailWidth,r=e.defaultThumbnailHeight;return t?s.default.createElement("div",{onClick:i.show,className:"thumbnail"},s.default.createElement("img",{src:t,alt:"thumbnail"})):s.default.createElement("div",{onClick:i.show,className:"thumbnail"},s.default.createElement("img",{style:{width:o,height:r,objectFit:"cover"},src:n,alt:"thumbnail"}))},p(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.image,i=t.caption,r=t.animation,a=t.showCloseBtn;return s.default.createElement("div",{className:"react-fancybox"},this.renderThumbnail(),s.default.createElement(o.default,{style:{animationDuration:1e3},transitionName:r,transitionEnterTimeout:0,transitionLeaveTimeout:0},this.state.show?s.default.createElement("div",{onClick:this.handleClickBox,className:"box"},s.default.createElement("div",{ref:function(t){return e.box=t},className:"image-box"},a&&s.default.createElement("img",{onClick:this.close,className:"close-btn",src:l.default,alt:"close"}),s.default.createElement("img",{style:{},src:n,alt:"original"}),i&&s.default.createElement("div",{className:"caption"},i))):null))}}]),t}(a.Component);f.defaultProps={thumbnail:"",image:"",defaultThumbnailWidth:300,defaultThumbnailHeight:250,caption:"",animation:"fade",onOpen:function(){},onClose:function(){},showCloseBtn:!0},f.propTypes={thumbnail:r.default.string,image:r.default.string,defaultThumbnailWidth:r.default.number,defaultThumbnailHeight:r.default.number,caption:r.default.string,animation:r.default.string,animationTime:r.default.number,onOpen:r.default.func,onClose:r.default.func,showCloseBtn:r.default.bool},t.Z=f},4877:function(e,t,n){"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=u(n(7294)),r=u(n(5697)),a=u(n(2643)),s=u(n(3274)),l=n(279);function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}l.nameShape.isRequired,r.default.bool,r.default.bool,r.default.bool,(0,l.transitionTimeout)("Appear"),(0,l.transitionTimeout)("Enter"),(0,l.transitionTimeout)("Leave");var f=function(e){function t(){var n,i;c(this,t);for(var r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=i=p(this,e.call.apply(e,[this].concat(a))),i._wrapChild=function(e){return o.default.createElement(s.default,{name:i.props.transitionName,appear:i.props.transitionAppear,enter:i.props.transitionEnter,leave:i.props.transitionLeave,appearTimeout:i.props.transitionAppearTimeout,enterTimeout:i.props.transitionEnterTimeout,leaveTimeout:i.props.transitionLeaveTimeout},e)},p(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){return o.default.createElement(a.default,i({},this.props,{childFactory:this._wrapChild}))},t}(o.default.Component);f.displayName="CSSTransitionGroup",f.propTypes={},f.defaultProps={transitionAppear:!1,transitionEnter:!0,transitionLeave:!0},t.default=f,e.exports=t.default},3274:function(e,t,n){"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=f(n(8141)),r=f(n(602)),a=f(n(5177)),s=n(702),l=f(n(7294)),u=f(n(5697)),c=n(3935),p=n(279);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=[];s.transitionEnd&&h.push(s.transitionEnd),s.animationEnd&&h.push(s.animationEnd);u.default.node,p.nameShape.isRequired,u.default.bool,u.default.bool,u.default.bool,u.default.number,u.default.number,u.default.number;var g=function(e){function t(){var n,i;d(this,t);for(var o=arguments.length,r=Array(o),a=0;a<o;a++)r[a]=arguments[a];return n=i=m(this,e.call.apply(e,[this].concat(r))),i.componentWillAppear=function(e){i.props.appear?i.transition("appear",e,i.props.appearTimeout):e()},i.componentWillEnter=function(e){i.props.enter?i.transition("enter",e,i.props.enterTimeout):e()},i.componentWillLeave=function(e){i.props.leave?i.transition("leave",e,i.props.leaveTimeout):e()},m(i,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.classNameAndNodeQueue=[],this.transitionTimeouts=[]},t.prototype.componentWillUnmount=function(){this.unmounted=!0,this.timeout&&clearTimeout(this.timeout),this.transitionTimeouts.forEach((function(e){clearTimeout(e)})),this.classNameAndNodeQueue.length=0},t.prototype.transition=function(e,t,n){var i=(0,c.findDOMNode)(this);if(i){var a=this.props.name[e]||this.props.name+"-"+e,l=this.props.name[e+"Active"]||a+"-active",u=null,p=void 0;(0,o.default)(i,a),this.queueClassAndNode(l,i);var f=function(e){e&&e.target!==i||(clearTimeout(u),p&&p(),(0,r.default)(i,a),(0,r.default)(i,l),p&&p(),t&&t())};n?(u=setTimeout(f,n),this.transitionTimeouts.push(u)):s.transitionEnd&&(p=function(e,t){return h.length?h.forEach((function(n){return e.addEventListener(n,t,!1)})):setTimeout(t,0),function(){h.length&&h.forEach((function(n){return e.removeEventListener(n,t,!1)}))}}(i,f))}else t&&t()},t.prototype.queueClassAndNode=function(e,t){var n=this;this.classNameAndNodeQueue.push({className:e,node:t}),this.rafHandle||(this.rafHandle=(0,a.default)((function(){return n.flushClassNameAndNodeQueue()})))},t.prototype.flushClassNameAndNodeQueue=function(){this.unmounted||this.classNameAndNodeQueue.forEach((function(e){e.node.scrollTop,(0,o.default)(e.node,e.className)})),this.classNameAndNodeQueue.length=0,this.rafHandle=null},t.prototype.render=function(){var e=i({},this.props);return delete e.name,delete e.appear,delete e.enter,delete e.leave,delete e.appearTimeout,delete e.enterTimeout,delete e.leaveTimeout,delete e.children,l.default.cloneElement(l.default.Children.only(this.props.children),e)},t}(l.default.Component);g.displayName="CSSTransitionGroupChild",g.propTypes={},t.default=g,e.exports=t.default},2643:function(e,t,n){"use strict";t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=l(n(3549)),r=l(n(7294)),a=l(n(5697)),s=(l(n(5124)),n(1777));function l(e){return e&&e.__esModule?e:{default:e}}a.default.any,a.default.func,a.default.node;var u=function(e){function t(n,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n,o));return r.performAppear=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillAppear?t.componentWillAppear(r._handleDoneAppearing.bind(r,e,t)):r._handleDoneAppearing(e,t)},r._handleDoneAppearing=function(e,t){t.componentDidAppear&&t.componentDidAppear(),delete r.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)||r.performLeave(e,t)},r.performEnter=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillEnter?t.componentWillEnter(r._handleDoneEntering.bind(r,e,t)):r._handleDoneEntering(e,t)},r._handleDoneEntering=function(e,t){t.componentDidEnter&&t.componentDidEnter(),delete r.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)||r.performLeave(e,t)},r.performLeave=function(e,t){r.currentlyTransitioningKeys[e]=!0,t.componentWillLeave?t.componentWillLeave(r._handleDoneLeaving.bind(r,e,t)):r._handleDoneLeaving(e,t)},r._handleDoneLeaving=function(e,t){t.componentDidLeave&&t.componentDidLeave(),delete r.currentlyTransitioningKeys[e];var n=(0,s.getChildMapping)(r.props.children);n&&n.hasOwnProperty(e)?r.keysToEnter.push(e):r.setState((function(t){var n=i({},t.children);return delete n[e],{children:n}}))},r.childRefs=Object.create(null),r.state={children:(0,s.getChildMapping)(n.children)},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},t.prototype.componentDidMount=function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t,this.childRefs[t])},t.prototype.componentWillReceiveProps=function(e){var t=(0,s.getChildMapping)(e.children),n=this.state.children;for(var i in this.setState({children:(0,s.mergeChildMappings)(n,t)}),t){var o=n&&n.hasOwnProperty(i);!t[i]||o||this.currentlyTransitioningKeys[i]||this.keysToEnter.push(i)}for(var r in n){var a=t&&t.hasOwnProperty(r);!n[r]||a||this.currentlyTransitioningKeys[r]||this.keysToLeave.push(r)}},t.prototype.componentDidUpdate=function(){var e=this,t=this.keysToEnter;this.keysToEnter=[],t.forEach((function(t){return e.performEnter(t,e.childRefs[t])}));var n=this.keysToLeave;this.keysToLeave=[],n.forEach((function(t){return e.performLeave(t,e.childRefs[t])}))},t.prototype.render=function(){var e=this,t=[],n=function(n){var i=e.state.children[n];if(i){var a="string"!=typeof i.ref,s=e.props.childFactory(i),l=function(t){e.childRefs[n]=t};s===i&&a&&(l=(0,o.default)(i.ref,l)),t.push(r.default.cloneElement(s,{key:n,ref:l}))}};for(var a in this.state.children)n(a);var s=i({},this.props);return delete s.transitionLeave,delete s.transitionName,delete s.transitionAppear,delete s.transitionEnter,delete s.childFactory,delete s.transitionLeaveTimeout,delete s.transitionEnterTimeout,delete s.transitionAppearTimeout,delete s.component,r.default.createElement(this.props.component,s,t)},t}(r.default.Component);u.displayName="TransitionGroup",u.propTypes={},u.defaultProps={component:"span",childFactory:function(e){return e}},t.default=u,e.exports=t.default},1777:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=function(e){if(!e)return e;var t={};return i.Children.map(e,(function(e){return e})).forEach((function(e){t[e.key]=e})),t},t.mergeChildMappings=function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var i={},o=[];for(var r in e)t.hasOwnProperty(r)?o.length&&(i[r]=o,o=[]):o.push(r);var a=void 0,s={};for(var l in t){if(i.hasOwnProperty(l))for(a=0;a<i[l].length;a++){var u=i[l][a];s[i[l][a]]=n(u)}s[l]=n(l)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s};var i=n(7294)},279:function(e,t,n){"use strict";t.__esModule=!0,t.nameShape=void 0,t.transitionTimeout=function(e){var t="transition"+e+"Timeout",n="transition"+e;return function(e){if(e[n]){if(null==e[t])return new Error(t+" wasn't supplied to CSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");if("number"!=typeof e[t])return new Error(t+" must be a number (in milliseconds)")}return null}};o(n(7294));var i=o(n(5697));function o(e){return e&&e.__esModule?e:{default:e}}t.nameShape=i.default.oneOfType([i.default.string,i.default.shape({enter:i.default.string,leave:i.default.string,active:i.default.string}),i.default.shape({enter:i.default.string,enterActive:i.default.string,leave:i.default.string,leaveActive:i.default.string,appear:i.default.string,appearActive:i.default.string})])},8141:function(e,t,n){"use strict";var i=n(2930);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,o.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var o=i(n(404));e.exports=t.default},404:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},602:function(e){"use strict";function t(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,n){e.classList?e.classList.remove(n):"string"==typeof e.className?e.className=t(e.className,n):e.setAttribute("class",t(e.className&&e.className.baseVal||"",n))}},702:function(e,t,n){"use strict";var i=n(2930);t.__esModule=!0,t.default=t.animationEnd=t.animationDelay=t.animationTiming=t.animationDuration=t.animationName=t.transitionEnd=t.transitionDuration=t.transitionDelay=t.transitionTiming=t.transitionProperty=t.transform=void 0;var o,r,a,s,l,u,c,p,f,d,m,h=i(n(139)),g="transform";if(t.transform=g,t.animationEnd=a,t.transitionEnd=r,t.transitionDelay=c,t.transitionTiming=u,t.transitionDuration=l,t.transitionProperty=s,t.animationDelay=m,t.animationTiming=d,t.animationDuration=f,t.animationName=p,h.default){var y=function(){for(var e,t,n=document.createElement("div").style,i={O:function(e){return"o"+e.toLowerCase()},Moz:function(e){return e.toLowerCase()},Webkit:function(e){return"webkit"+e},ms:function(e){return"MS"+e}},o=Object.keys(i),r="",a=0;a<o.length;a++){var s=o[a];if(s+"TransitionProperty"in n){r="-"+s.toLowerCase(),e=i[s]("TransitionEnd"),t=i[s]("AnimationEnd");break}}!e&&"transitionProperty"in n&&(e="transitionend");!t&&"animationName"in n&&(t="animationend");return n=null,{animationEnd:t,transitionEnd:e,prefix:r}}();o=y.prefix,t.transitionEnd=r=y.transitionEnd,t.animationEnd=a=y.animationEnd,t.transform=g=o+"-"+g,t.transitionProperty=s=o+"-transition-property",t.transitionDuration=l=o+"-transition-duration",t.transitionDelay=c=o+"-transition-delay",t.transitionTiming=u=o+"-transition-timing-function",t.animationName=p=o+"-animation-name",t.animationDuration=f=o+"-animation-duration",t.animationTiming=d=o+"-animation-delay",t.animationDelay=m=o+"-animation-timing-function"}var b={transform:g,end:r,property:s,timing:u,delay:c,duration:l};t.default=b},139:function(e,t){"use strict";t.__esModule=!0,t.default=void 0;var n=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=n,e.exports=t.default},5177:function(e,t,n){"use strict";var i=n(2930);t.__esModule=!0,t.default=void 0;var o,r=i(n(139)),a="clearTimeout",s=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-u)),i=setTimeout(e,n);return u=t,i},l=function(e,t){return e+(e?t[0].toUpperCase()+t.substr(1):t)+"AnimationFrame"};r.default&&["","webkit","moz","o","ms"].some((function(e){var t=l(e,"request");if(t in window)return a=l(e,"cancel"),s=function(e){return window[t](e)}}));var u=(new Date).getTime();(o=function(e){return s(e)}).cancel=function(e){window[a]&&"function"==typeof window[a]&&window[a](e)};var c=o;t.default=c,e.exports=t.default},727:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(7294),o=n(9),r=o.ZP.div.withConfig({displayName:"style__HeroContain",componentId:"ysj15a-0"})(["background-image:url(",");height:90vh;color:",';display:flex;align-items:center;background-repeat:no-repeat;background-size:cover;background-position:bottom;.container{width:100%;}::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,0.6);}'],(function(e){return e.image}),(function(e){return e.theme.colors.blanco})),a=o.ZP.p.withConfig({displayName:"style__Subtitle",componentId:"ysj15a-1"})(["text-transform:uppercase;margin:0;"]),s=o.ZP.div.withConfig({displayName:"style__WrapperInfo",componentId:"ysj15a-2"})(["position:relative;padding:1rem 0;width:50%;@media (max-width:800px){width:100%;text-align:center;}"]),l=o.ZP.h1.withConfig({displayName:"style__Title",componentId:"ysj15a-3"})(["font-weight:bold;font-size:",";margin-bottom:.5rem;text-transform:uppercase;margin-top:0;"],(function(e){return e.theme.fontsize.extralarge})),u=o.ZP.p.withConfig({displayName:"style__Text",componentId:"ysj15a-4"})(["font-size:",";"],(function(e){return e.theme.fontsize.medium})),c=function(e){return i.createElement(r,{image:e.image},i.createElement("div",{className:"container"},i.createElement(s,null,e.subtitle?i.createElement(a,null,e.subtitle):null,i.createElement(l,null,e.title),i.createElement(u,null,e.text))))}},8598:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var i=[{img:n.p+"static/img01-d3f51d5193857deae0039937c11e78dd.png"},{img:n.p+"static/img02-54f65a7c9d3b47cdfdc724b1991757d0.png"},{img:n.p+"static/img03-fa0baf44882649dd4015c50f258ee775.png"},{img:n.p+"static/img04-19cc27f159a54a0062ce77b059dbf99a.png"},{img:n.p+"static/img06-a69d5a68b401e8afec4df46234be2749.png"},{img:n.p+"static/img07-0e71d705b83c93c39141d41dc4c37ac9.png"},{img:n.p+"static/img08-22057614b227b0bce6edf4f900196fe3.png"},{img:n.p+"static/img09-9e9da31430b216234e517cbd19424944.png"},{img:n.p+"static/img10-b08dab61df0bc82de0966f4ba5122e45.jpeg"},{img:n.p+"static/img11-14f76bc803148c755506f2419d2d7483.jpg"},{img:n.p+"static/img12-d998478fbd1473a124c0ae29cf8c1524.jpg"},{img:n.p+"static/img13-a5b2bee0687450a65f1c35ba02710fad.jpg"}]},6586:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var i=n(7294),o=n(9783),r=n(727),a=n.p+"static/heroClientes-fb5436913bf15d797514ed784e379416.jpg",s=n(9),l=n(8598),u=n(8715),c=s.ZP.div.withConfig({displayName:"clientes__Wrapper",componentId:"sc-1np2e3m-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;@media (max-width:920px){grid-template-columns:1fr 1fr 1fr;}@media (max-width:640px){grid-template-columns:1fr 1fr;}@media (max-width:500px){grid-template-columns:1fr;}"]),p=s.ZP.div.withConfig({displayName:"clientes__Item",componentId:"sc-1np2e3m-1"})(["padding:1.2rem;width:100%;height:100%;border-right:1px solid #646464;border-bottom:1px solid #646464;display:flex;align-items:center;.react-fancybox{width:100%;.thumbnail{text-align:center;}}.react-fancybox .thumbnail img{max-width:100%;background-color:",";padding:0.5rem;}&:nth-child(4n){border-right:none;}&:nth-last-of-type(1){border-bottom:none;}@media (max-width:920px){&:nth-child(4n){border-right:1px solid #646464;}&:nth-child(3n){border-right:none;}&:nth-last-of-type(2){border-bottom:none;}&:nth-last-of-type(3){border-bottom:none;}}@media (max-width:640px){&:nth-child(4n){border:none;}border:none;}"],(function(e){return e.theme.colors.blanco})),f=(s.ZP.img.withConfig({displayName:"clientes__Img",componentId:"sc-1np2e3m-2"})(["width:100%;"]),function(){return i.createElement("div",{className:"container wrapper"},i.createElement(c,null,l.Z.map((function(e,t){var n=e.img;return i.createElement(p,{key:t},i.createElement(u.Z,{thumbnail:n,image:n}))}))))}),d=n(2583),m=function(){return i.createElement(i.Fragment,null,i.createElement(d.Z,{image:a,title:"Clientes",description:"Confianza y compromiso"}),i.createElement(o.Z,null,i.createElement(r.Z,{image:a,title:"Confianza y compromiso",text:"Clientes"}),i.createElement(f,null)))}},5124:function(e){"use strict";e.exports=function(){}},7602:function(e,t,n){"use strict";n.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDU1Ljk5MiA0NTUuOTkyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTUuOTkyIDQ1NS45OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8Zz4NCgkJCTxnPg0KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMjI3Ljk5NiwwQzEwMi4wODEsMCwwLDEwMi4wODEsMCwyMjcuOTk2YzAsMTI1Ljk0NSwxMDIuMDgxLDIyNy45OTYsMjI3Ljk5NiwyMjcuOTk2DQoJCQkJCWMxMjUuOTQ1LDAsMjI3Ljk5Ni0xMDIuMDUxLDIyNy45OTYtMjI3Ljk5NkM0NTUuOTkyLDEwMi4wODEsMzUzLjk0MSwwLDIyNy45OTYsMHogTTIyNy45OTYsNDI1LjU5Mw0KCQkJCQljLTEwOC45NTIsMC0xOTcuNTk3LTg4LjY0NS0xOTcuNTk3LTE5Ny41OTdTMTE5LjA0NCwzMC4zOTksMjI3Ljk5NiwzMC4zOTlzMTk3LjU5Nyw4OC42NDUsMTk3LjU5NywxOTcuNTk3DQoJCQkJCVMzMzYuOTQ4LDQyNS41OTMsMjI3Ljk5Niw0MjUuNTkzeiIvPg0KCQkJCTxwYXRoIHN0eWxlPSJmaWxsOiMwMTAwMDI7IiBkPSJNMzEyLjE0MiwxMjIuMzU4bC04My41MzgsODMuNTY4bC03NC45NjUtODMuNTY4Yy01LjkyOC01LjkyOC0xNS41NjUtNS45MjgtMjEuNDkyLDANCgkJCQkJYy01LjkyOCw1LjkyOC01LjkyOCwxNS41NjUsMCwyMS40OTJsNzQuOTY1LDgzLjU2OGwtODQuNzIzLDg0LjcyM2MtNS45MjgsNS45MjgtNS45MjgsMTUuNTk1LDAsMjEuNDkyDQoJCQkJCWM1LjkyOCw1LjkyOCwxNS41NjUsNS45MjgsMjEuNDkyLDBsODMuNTY4LTgzLjUzOGw3NC45NjUsODMuNTM4YzUuODk3LDUuOTI4LDE1LjU2NSw1LjkyOCwyMS40NjIsMA0KCQkJCQljNS45MjgtNS44OTgsNS45MjgtMTUuNTY1LDAtMjEuNDkybC03NC45OTUtODMuNTM4bDg0LjcyMy04NC43NTRjNS45MjgtNS45MjgsNS45MjgtMTUuNTY1LDAtMjEuNDkyDQoJCQkJCUMzMjcuNjc2LDExNi40MywzMTguMDcsMTE2LjQzLDMxMi4xNDIsMTIyLjM1OHoiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCgk8Zz4NCgk8L2c+DQoJPGc+DQoJPC9nPg0KCTxnPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-pages-clientes-jsx-a3cc138c6935023ce19f.js.map