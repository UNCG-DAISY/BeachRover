(self.webpackChunkbeach_rover_site=self.webpackChunkbeach_rover_site||[]).push([[689],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),h=l(r),g=o,d=h["".concat(c,".").concat(g)]||h[g]||u[g]||i;return r?n.createElement(d,s(s({ref:t},p),{},{components:r})):n.createElement(d,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4437:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return h}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),s=["components"],a={title:"Sensor Wiring Setup",author:"Michael Mungaray",author_url:"https://github.com/MichaMung",author_image_url:"https://uncg-daisy.github.io/BeachRover/img/MMprofilePicture.jpg",tags:["Rover","Robotics","Sensor","Wiring"]},c=void 0,l={permalink:"/BeachRover/blog/2021/08/03/SensorWiringSetup",editUrl:"https://github.com/UNCG-DAISY/BeachRover/blog/2021-08-03-SensorWiringSetup.md",source:"@site/blog/2021-08-03-SensorWiringSetup.md",title:"Sensor Wiring Setup",description:"Tips for setting up a sensor and connecting directly to the Raspberry Pi/Multiplexer.",date:"2021-08-03T00:00:00.000Z",formattedDate:"August 3, 2021",tags:[{label:"Rover",permalink:"/BeachRover/blog/tags/rover"},{label:"Robotics",permalink:"/BeachRover/blog/tags/robotics"},{label:"Sensor",permalink:"/BeachRover/blog/tags/sensor"},{label:"Wiring",permalink:"/BeachRover/blog/tags/wiring"}],readingTime:2.315,truncated:!0,nextItem:{title:"Trial and Error for Improving GPS Signal",permalink:"/BeachRover/blog/2021/07/28/gpsAccuracy"}},p=[],u={toc:p};function h(e){var t=e.components,a=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Tips for setting up a sensor and connecting directly to the Raspberry Pi/Multiplexer."),(0,i.kt)("p",null,'When connecting a sensor directly to the Raspberry Pi, there are a few things to keep in mind to successfully complete the task. The process can be very straightforward to complete,\nhowever likewise it can be very easy to mix up wiring and possibly even ruin the wiring on the sensor or GPIO pinouts on the Raspberry Pi. When connecting a sensor to the Raspberry\nPi the first thing to check is the pin connections soldered to the sensor. These are the connections that, using wires, will provide power to the sensor while also transferring\nthe necessary information between both connection points. If the sensor has no soldered pins (example below) or improperly soldered pins this can lead to connection issues as\nwell as the possibility of "burning out" the pinouts. Once this step is completed you can then attach a female to female wire to the sensor. It is important to have the\nrequired number of wires, the wires are managed neatly and the wires are color coded. Neat management of the wires means the wires are not tangled nor are they too loose or too\ntightly connected to the Raspberry Pi. Proper length ensures the sensor can move freely with the rover but also the wire will not constantly be at risk of being easily pulled out. The\ncolor coordination helps the user identify what each wire represents and makes connection to the Raspberry Pi easier, as the three wires below show. The left orange wire connects\nto the 3.3v pinout for sensor power, the red center wire is used for the actual sensor information and the right brown wire connects to a ground pinout. Having this in mind then\nleads to a straightforward connection from the sensor to the Raspberry Pi as shown below. There are two 5.0v pinouts and are generally used for most sensors, as well as more\nintensive electronics such as servos. The 3.3v pinout is used for this particular sensor(DHT-22) as the power draw is low enough that the 3.3v or 5.0v is appropriate for usage.\nThe ground wire completes the circuit alongside the power wire which allows the sensor to fully become a part of the circuit and allow power. The red wire is connected to\na standard GPIO pinout and there are multiple such pinouts that can be used on the Raspberry Pi, however the number of connections besides the ground-power will dictate how many\nmore connecctions will need to be made, as well as if any pinouts must be specifically connected. The process for connecting this sensor to the Raspberry Pi can be used for any\nother sensor and electronic to be used with the rover.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"solder",src:r(9532).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"threewires",src:r(6397).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RPIconnect",src:r(7469).Z})))}h.isMDXComponent=!0},9532:function(e,t,r){"use strict";t.Z=r.p+"assets/images/absentSolderImage-00e0c4ba67d7c3153342342e4c80dbc6.jpg"},7469:function(e,t,r){"use strict";t.Z=r.p+"assets/images/raspbPiConnectImage-cb8e8e6070dff93e02e171fae3c347b3.jpg"},6397:function(e,t,r){"use strict";t.Z=r.p+"assets/images/threeWireImage-cb8eda4659a7e3cdac7ce07f300d6576.jpg"}}]);