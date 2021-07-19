(self.webpackChunkbeach_rover_site=self.webpackChunkbeach_rover_site||[]).push([[671],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=a,d=h["".concat(l,".").concat(m)]||h[m]||c[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},426:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return h}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:1,id:"intro",title:"Starting the Project",sidebar_label:"Starting Up"},l=void 0,p={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Starting the Project",description:"Who is this project for?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/BeachRover/docs/intro",editUrl:"https://github.com/UNCG-DAISY/BeachRover/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro",title:"Starting the Project",sidebar_label:"Starting Up"},sidebar:"tutorialSidebar",next:{title:"Assembly",permalink:"/BeachRover/docs/Assembly"}},u=[{value:"Who is this project for?",id:"who-is-this-project-for",children:[]},{value:"Parts Needed",id:"parts-needed",children:[]}],c={toc:u};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"who-is-this-project-for"},"Who is this project for?"),(0,o.kt)("p",null,"This rover was made to survey beaches and gather valuable data about how and why our coastlines are changing.\nYou could easily use this model for surveying other environmental areas or even for educational purposes."),(0,o.kt)("h2",{id:"parts-needed"},"Parts Needed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"RC Car"),(0,o.kt)("p",{parentName:"li"},"  While any RC car can work, in order to use our CAD Chassis you will need a 1:16 sized Car.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Raspberry Pi"),(0,o.kt)("p",{parentName:"li"},"  You will need a Raspberry Pi to serve as the brains of the rover. We use a Pi 4, that can\nbe bought ",(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/products/raspberry-pi-4-model-b/"},"here"),". The RAM,\nstorage, and other specs are subject to what you will be using the rover to do, we use a\nPi4 with 4 Gigabytes RAM and a 32 Gigabyte SD Storage Card.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Navio2"),(0,o.kt)("p",{parentName:"li"},"The Navio2 is an autopilot hat for the Raspberry Pi, and is what we will be using throughout\nthe project. You can get it ",(0,o.kt)("a",{parentName:"p",href:"https://navio2.emlid.com/"},"here"),", and read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.emlid.com/navio2/"},"here"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Telemetry Units"),(0,o.kt)("p",{parentName:"li"},"Telemetry Units allow us to communicate without the use of a Wifi connection. We use\n",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.com/Soulload-Telemetry-915Mhz-Transmit-Pixhawk/dp/B0768WQ989"},"these"),"\nbut there are many alternatives.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GPS Module"),(0,o.kt)("p",{parentName:"li"},"In order to get positional data like orientation and location we need a GPS Unit. As of now we are using\nthe module that ",(0,o.kt)("a",{parentName:"p",href:"https://store.emlid.com/product/gpsgnss-antenna-mcx/"},"Emlid sells")," and plugs right into\nthe Navio2 ANT port.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Battery and Charger"),(0,o.kt)("p",{parentName:"li"},"You will need a RC battery and charger to power your rover, these are widely available across the web and at\nhobby stores.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Chassis (Donkey Car Recommended)"),(0,o.kt)("p",{parentName:"li"},"As of now, we are using a Donkey Car Chassis that you can ",(0,o.kt)("a",{parentName:"p",href:"https://store.donkeycar.com/collections/accessories/products/standard-donkey-chassis-includes-screws"},"buy")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.thingiverse.com/thing:2566276"},"print yourself"),". We are working on making our own that will better fit\nthe other equipment and modules we will be using throughout the project.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Pi Camera/lens"),(0,o.kt)("p",{parentName:"li"},"You will need a camera to take high resolution photos of the sand for the best analysis results. A we are using\na ",(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/products/camera-module-v2/"},"generic Pi Camera")," as of now.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Multiplexer"),(0,o.kt)("p",{parentName:"li"},"Since the Navio2 takes up the entire 40 Pin GPIO of the Pi you cannot have any other sensors or devices on your rover.\nIn order to get around this, we used a multiplexer. This increases the amount of pins your Pi has and allows us\nto have more sensors on our rover besides the ones contained on the Navio2. We use this ",(0,o.kt)("a",{parentName:"p",href:"https://www.amazon.com/Stayhome-Raspberry-MultipleStayhome-Expansion-Multiplex/dp/B07PN8RZR7"},"one"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ground Control Station and Accompanying Software"),(0,o.kt)("p",{parentName:"li"},"A ground control station is a device that you will use to control your rover. You will make missions, monitor readouts, and more\nfrom this device. We use a laptop running Mission Planner to create our missions and monitor our rover."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://ardupilot.org/planner/"},"Mission Planner")," is a program created by Michael Oborne that allows you to create mission plans,\nmonitor your rover, and run SITL simulations all in one application."))))}h.isMDXComponent=!0}}]);