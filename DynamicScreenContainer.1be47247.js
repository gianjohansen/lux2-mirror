(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{179:function(e,t,n){"use strict";n.r(t);n(50),n(51),n(111),n(37);var r=n(0),o=n.n(r),i=n(216),a=n(203),l=n(13),c={SimManagement:l.b.div.withConfig({displayName:"styles__SimManagement",componentId:"sc-1pfoks5-0"})(["background:rgb(0,0,0);"]),Divider:l.b.div.withConfig({displayName:"styles__Divider",componentId:"sc-1pfoks5-1"})(["width:100%;height:1px;background:rgb(221,221,221);margin:25px 0 20px;"]),Dots:l.b.div.withConfig({displayName:"styles__Dots",componentId:"sc-1pfoks5-2"})(["display:flex;padding-top:24px;"]),Dot:l.b.span.withConfig({displayName:"styles__Dot",componentId:"sc-1pfoks5-3"})(["width:20px;text-align:center;border-radius:50%;height:20px;display:flex;justify-content:center;align-items:center;margin-right:20px;font-size:12px;font-weight:700;line-height:1;background:",";color:",""],function(e){return e.active?"rgb(255,110,126)":"rgb(222, 222, 222)"},function(e){return e.active?"rgb(255,255,255)":"rgb(136,136,136)"}),Title:l.b.div.withConfig({displayName:"styles__Title",componentId:"sc-1pfoks5-4"})(["border-bottom:1px solid rgb(221,221,221);border-left:4px solid rgb(255,110,126);font-weight:700;font-size:14px;padding:8px 10px 10px;margin:12px 0 24px;text-align:left;"]),ErrorText:l.b.p.withConfig({displayName:"styles__ErrorText",componentId:"sc-1pfoks5-5"})(["color:rgb(217,58,27);font-size:14px;"]),SuccessTick:l.b.p.withConfig({displayName:"styles__SuccessTick",componentId:"sc-1pfoks5-6"})(["text-align:center;line-height:1;margin-top:40px;&:before{font-family:'lux-icons';content:'';font-size:96px;color:rgb(60,128,49);}"]),Centre:l.b.div.withConfig({displayName:"styles__Centre",componentId:"sc-1pfoks5-7"})(["text-align:center;"])};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(e){var n,r,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=this,(n=!(o=u(t).call(this,e))||"object"!==s(o)&&"function"!=typeof o?f(r):o).state={leftActive:!1,rightActive:!1},n.goTo=n.goTo.bind(f(n)),n.changeScreens=n.changeScreens.bind(f(n)),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.a.Component),n=t,(r=[{key:"changeScreens",value:function(e,t){this.props.showScreens(e),this.setState({leftActive:t[0],rightActive:t[1]})}},{key:"goTo",value:function(e,t){this.setState({leftActive:t,rightActive:!t}),e.indexOf("/")>-1?window.location.href=e:this.props.showScreen(e)}},{key:"render",value:function(){for(var e=this,t=[],n=0;n<this.props.steps;n++)t.push(o.a.createElement(c.Dot,{key:n,active:this.props.thisStep>=n+1},n+1));return void 0!==this.props.visibleScreens&&-1===this.props.visibleScreens.split(" ").indexOf(this.props.id)?o.a.createElement(o.a.Fragment,null):void 0===this.props.showSimReplacement||this.props.showSimReplacement?o.a.createElement(o.a.Fragment,null,this.props.formType?o.a.createElement(o.a.Fragment,null,o.a.createElement(a.a,{onClick:function(){return e.props.goBack(e.props.thisStep)}},"< Back to previous page"),!this.state.hideDots&&o.a.createElement(c.Dots,null,t),o.a.createElement(c.Title,null,this.props.title)):"",this.props.showSuccessIcon?o.a.createElement(o.a.Fragment,null,o.a.createElement(c.SuccessTick,null),o.a.createElement(c.Centre,null,this.props.children)):this.props.children,this.props.leftTab?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{active:this.state.leftActive,onClick:function(){return e.props.leftTabUrl?e.goTo(e.props.leftTabUrl,!0):e.changeScreens(e.props.leftTab,[!0,!1])}},this.props.leftTabText)):"",this.props.rightTab?o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{active:this.state.rightActive,onClick:function(){return e.props.rightTabUrl?e.goTo(e.props.rightTabUrl,!1):e.changeScreens(e.props.rightTab,[!1,!0])}},this.props.rightTabText)):""):o.a.createElement(o.a.Fragment,null)}}])&&p(n.prototype,r),l&&p(n,l),t}();t.default=g},192:function(e,t,n){"use strict";n(52);var r=n(13),o={white:"#FFFFFF",grey:"#F6F5F5",darkslate:"#1D3444",black:"#231F20",singtelred:"#ED1A3D",singtelred_l5:"#F9B7C2",singtelred_l4:"#F798A8",singtelred_l3:"#F4788D",singtelred_l2:"#F25972",singtelred_l1:"#EF3958",singtelred_d1:"#D41131",singtelred_d2:"#B50E2A",singtelred_d3:"#950C23",singtelred_d4:"#76091B",singtelred_d5:"#560714",singtelred_00:"#990000",powderblue:"#5EC6C9",powderblue_l4:"#C4EAEB",powderblue_l3:"#AAE1E3",powderblue_l2:"#91D8DA",powderblue_l1:"#77CFD2",powderblue_d1:"#45BDC0",powderblue_d2:"#39A7AA",powderblue_d3:"#318E91",powderblue_d4:"#287577",powderblue_d5:"#1F5C5E",powderblue_d6:"#174344",powderblue_ee:"#1AB9EE",yellow:"#FFB824",yellow_l5:"#FFEFCE",yellow_l4:"#FFE4AC",yellow_l3:"#FFD98A",yellow_l2:"#FFCE68",yellow_l1:"#FFC346",yellow_d1:"#FFAD02",yellow_d2:"#DF9700",yellow_d3:"#BD8000",yellow_d4:"#9B6900",yellow_d5:"#795200",linkblue:"#009FD4",linkblue_l6:"#C3F0FF",linkblue_l5:"#A1E7FF",linkblue_l4:"#7FDFFF",linkblue_l3:"#5DD6FF",linkblue_l2:"#19C5FF",linkblue_l1:"#00B8F6",linkblue_d1:"#0086B2",linkblue_d2:"#006C90",linkblue_d3:"#00536E",linkblue_d4:"#00394C",cherise:"#E32490",cherise_l5:"#F6BBDC",cherise_l4:"#F29CCD",cherise_l3:"#EF7EBE",cherise_l2:"#EB60AF",cherise_l1:"#E7429F",cherise_d1:"#CB1A7E",cherise_d2:"#AD166B",cherise_d3:"#8F1259",cherise_d4:"#710E46",cherise_d5:"#530B33",lightslate:"#8589A1",lightslate_l5:"#E5E6EB",lightslate_l4:"#D2D3DC",lightslate_l3:"#BFC1CD",lightslate_l2:"#ABAEBF",lightslate_l1:"#989CB0",lightslate_d1:"#727692",lightslate_d2:"#626780",lightslate_d3:"#54576D",lightslate_d4:"#454859",lightslate_d5:"#363846",grey_f5:"#F5F5F5",grey_e5:"#E5E5E5",grey_e1:"#E1E1E1",grey_e2:"#E2E2E2",grey_cc:"#CCCCCC",grey_dd:"#DDDDDD",grey_d6:"#D6D6D6",grey_c6:"#C6C6C6",grey_a1:"#A1A1A1",grey_8a:"#8A8A8A",grey_70:"#707070",grey_66:"#666666",grey_50:"#505050",green_60:"#12CB60",green_BF:"#2A8231",purple_7c:"#7D287C",rederror:"#990000",bluehover:"#1AB9EE",talktime_easymob:"#7D287C"},i={gutterWidth:1.25,outerMargin:1.25,container:{md:65,lg:65},breakpoints:{sm:0,md:48,lg:80}},a=(n(70),n(2)),l={Museo100:"MarkPro, Georgia, Times New Roman, Times, serif",Museo300:"MarkPro-Bold, Georgia, Times New Roman, Times, serif",Museo500:"MarkPro-Bold, Georgia, Times New Roman, Times, serif",AvenirBook:"MarkPro, Arial, Helvetica, sans-serif",AvenirHeavy:"MarkPro, Arial, Helvetica, sans-serif",Arial:"MarkPro, Helvetica, sans-serif;"},c={xxxxlarge:Object(a.d)(48),xxxlarge:Object(a.d)(32),xxlarge:Object(a.d)(28),xlarge:Object(a.d)(21),large:Object(a.d)(18),regular:Object(a.d)(16),small:Object(a.d)(14),xsmall:Object(a.d)(12)},s={families:l,sizes:c,styles:{Header1:"\n    font-family: ".concat(l.Museo100,";\n    font-size: 24px;\n    letter-spacing: -0.02em;\n    color: rgb(24, 24, 24);\n    font-weight: 700;\n    margin-bottom: 12px;\n    margin-top: .2rem;\n    line-height: 28px;\n    @media (min-width: ").concat(i.breakpoints.md,"em) {\n      font-size: 32px;\n    }\n  "),Header2:"\n    font-family: ".concat(l.Museo300,";\n    font-size: ").concat(c.xxxlarge,";\n    letter-spacing: ").concat(Object(a.d)(1.6),";\n    font-weight: normal;\n    margin-bottom: 12px;\n    margin-top: .2rem;\n    @media (min-width: ").concat(i.breakpoints.md,"em) {\n      font-size: ").concat(c.xxxxlarge,";\n    }\n  "),Header3:"\n    font-family: ".concat(l.Museo100,";\n    font-size: ").concat(c.xlarge,";\n    letter-spacing: ").concat(Object(a.d)(.5),";\n    line-height: 33px;\n    font-weight: normal;\n    margin-bottom: .5rem;\n    margin-top: .2rem;\n    @media (min-width: ").concat(i.breakpoints.md,"em) {\n      font-size: ").concat(c.xxlarge,";\n    }\n  "),Header4:"\n    font-family: ".concat(l.Museo100,";\n    font-size: ").concat(c.xlarge,";\n    letter-spacing: ").concat(Object(a.d)(1.6),";\n    font-weight: normal;\n    margin-bottom: .5rem;\n    margin-top: .2rem;\n    @media (min-width: ").concat(i.breakpoints.md,"em) {\n      font-size: ").concat(c.xlarge,";\n    }\n  "),Header5:"\n    font-family: ".concat(l.AvenirBook,";\n    font-size: ").concat(c.large,";\n    letter-spacing: ").concat(Object(a.d)(1.6),";\n    font-weight: normal;\n    margin-bottom: .5rem;\n    margin-top: .2rem;\n    @media (min-width: ").concat(i.breakpoints.md,"em) {\n      font-size: ").concat(c.xxlarge,";\n    }\n  "),Header6:"\n    font-family: ".concat(l.AvenirHeavy,";\n    font-size: ").concat(c.regular,";\n    letter-spacing: ").concat(Object(a.d)(1.6),";\n    font-weight: normal;\n    margin-bottom: .5rem;\n    margin-top: .2rem;\n    @media (min-width: ").concat(i.breakpoints.md,"em) {\n      font-size: ").concat(c.large,";\n    }\n  "),Header7:"\n    font-family: ".concat(l.AvenirHeavy,";\n    font-size: ").concat(c.regular,";\n    font-weight: normal;\n  "),BodyCopy:"\n    font-family: ".concat(l.AvenirBook,";\n    font-size: 16px;\n    line-height: 24px;\n  "),CalloutText:"\n    font-family: ".concat(l.AvenirBook,";\n    font-size: ").concat(c.regular,";\n    color: ").concat(o.grey_50,";\n  "),CalloutError:"\n    font-family: ".concat(l.AvenirBook,";\n    font-size: ").concat(c.regular,";\n    color: ").concat(o.rederror,";\n  "),TextLink:"\n    font-family: ".concat(l.AvenirHeavy,";\n    font-size: ").concat(c.regular,";\n    color: ").concat(o.linkblue,";\n  "),InputFieldLabels:"\n    font-family: ".concat(l.AvenirHeavy,";\n    font-size: ").concat(c.small,";\n    color: ").concat(o.grey_a1,";\n  "),SubscriptBadge:"\n    font-family: ".concat(l.AvenirHeavy,";\n    font-size: ").concat(c.xsmall,";\n    text-transform: uppercase;\n    letter-spacing: 0.16rem;\n  "),ErrorMessage:"\n    font-family: ".concat(l.Arial,";\n    font-size: ").concat(c.regular,";\n    color: ").concat(o.rederror,";\n  "),FinePrintTitle:"\n    font-family: ".concat(l.Arial,";\n    font-weight: bold;\n    font-size: ").concat(c.xsmall,";\n  "),FinePrintCopy:"\n    font-family: ".concat(l.Arial,";\n    font-size: ").concat(c.xsmall,";\n  ")}},p={info:{colour:o.grey_c6},success:{colour:o.green_60},warning:{colour:o.yellow_d2},danger:{colour:o.singtelred_00}};n(17),n(20),n(25);function u(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  .lux-component-container {\n    ",";\n\n    margin: 12px 0;\n    \n    letter-spacing: 0;\n    text-size-adjust: 100%;\n\n    box-sizing: border-box;\n    *, *:before, *:after {\n      box-sizing: inherit;\n    }\n\n    hr {\n      border: solid ",";\n      border-width: 1px 0 0;\n      clear: both;\n      height: 0;\n      margin: "," 0;\n    }\n  }\n  p {\n    margin: 12px 0;\n  }\n\n"]);return u=function(){return e},e}n(208),Object(r.c)(u(),s.styles.BodyCopy,o.grey_dd,Object(a.d)(20));var f;t.a={colours:o,fonts:s,spacing:{xsmall:"0.625rem",small:"1.25rem",medium:"2.5rem",large:"3.75rem",xlarge:"5rem"},media:(f=i.breakpoints,Object.keys(f).reduce(function(e,t){return e[t]=function(){return Object(r.a)(["@media (min-width:","em){",";}"],f[t],r.a.apply(void 0,arguments))},e},{})),styles:{panelDropShadow:"box-shadow: 0px 2px 4px 0 rgba(0, 0, 0, 0.2);",componentSmallRadius:"border-radius: 3px;"},grid:i,states:p}},196:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var r=n(192);function o(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.innerWidth)<16*r.a.grid.breakpoints.md}function i(){}},203:function(e,t,n){"use strict";n(50),n(51),n(111);var r=n(0),o=n.n(r),i=n(13),a=n(196),l=n(192);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=i.b.a.withConfig({displayName:"Anchor__SCAnchor",componentId:"ne13yt-0"})(["color:rgb(0,98,128);text-decoration:none;cursor:pointer;outline:0;letter-spacing:0;font-weight:700;font-family:MarkProBold,MarkPro,sans-serif;&[disabled]{color:",";cursor:default;}"],l.a.colours.grey_cc),g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,u(t).apply(this,arguments))}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r["Component"]),n=t,(i=[{key:"render",value:function(){return o.a.createElement(d,{className:this.props.className,id:this.props.id,href:this.props.href,role:this.props.role,"aria-label":this.props.ariaLabel,target:this.props.target,title:this.props.title,tabIndex:this.props.tabIndex,onClick:this.handleClick.bind(this),disabled:this.props.disabled,secondary:this.props.secondary},this.props.children)}},{key:"handleClick",value:function(e){this.props.disabled||this.props.onClick(e)}}])&&s(n.prototype,i),a&&s(n,a),t}();g.defaultProps={onClick:a.b,disabled:!1,secondary:!1},t.a=g},208:function(e,t,n){},216:function(e,t,n){"use strict";n(50),n(51),n(111);var r=n(0),o=n.n(r);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=n(13).b.button.withConfig({displayName:"ToggleButton__Button",componentId:"sc-1sx02d6-0"})(["font-weight:700;display:inline-block;text-align:center;padding:12px 12px;font-size:14px;width:160px;position:relative;transition:all 0.2s ease;width:50%;outline:none;margin-bottom:24px;text-transform:none;background:",";color:",";&:hover{background:",";color:",";}border:",";z-index:",";margin-left:-2px;@media only screen and (min-width:768px){max-width:162px;}"],function(e){return e.active?"rgb(255, 255, 255) !important":"rgb(244, 244, 244) !important"},function(e){return e.active?"rgb(0, 0, 0) !important":"rgb(136, 136, 136) !important"},function(e){return e.active?"rgb(255, 255, 255) !important":"rgb(244, 244, 244) !important"},function(e){return e.active?"rgb(0, 0, 0) !important":"rgb(136, 136, 136) !important"},function(e){return e.active?"2px solid rgb(0, 163, 173) !important":"2px solid rgb(170, 170, 170) !important"},function(e){return e.active?"2":"1"}),u=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=l(this,c(t).call(this))).state={},e}var n,i,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(i=[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return o.a.createElement(p,this.props,this.props.children)}}])&&a(n.prototype,i),u&&a(n,u),t}();t.a=u}}]);
//# sourceMappingURL=DynamicScreenContainer.1be47247.js.map