(self.webpackChunkbeach_rover_site=self.webpackChunkbeach_rover_site||[]).push([[359],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?o.createElement(h,a(a({ref:t},c),{},{components:n})):o.createElement(h,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},352:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],u={sidebar_position:3,id:"Config",title:"Configuration of Components",sidebar_label:"Configuration"},l="Configuration",s={unversionedId:"Config",id:"Config",isDocsHomePage:!1,title:"Configuration of Components",description:"While testing or configuring, powering the Pi and Navio2 combo through the Pi's USB Power is fine",source:"@site/docs/Configuration.md",sourceDirName:".",slug:"/Config",permalink:"/BeachRover/docs/Config",editUrl:"https://github.com/UNCG-DAISY/BeachRover/docs/Configuration.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,id:"Config",title:"Configuration of Components",sidebar_label:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Assembly",permalink:"/BeachRover/docs/Assembly"}},c=[{value:"Navio2",id:"navio2",children:[]},{value:"Testing Configuration",id:"testing-configuration",children:[]},{value:"Rover Configuration",id:"rover-configuration",children:[]},{value:"Mission Planner",id:"mission-planner",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"While testing or configuring, powering the Pi and Navio2 combo through the Pi's USB Power is fine\nbut will need to be changed to the Power Module supply through the Navio2's Power Port\nwhen being used as a rover."),(0,i.kt)("h2",{id:"navio2"},"Navio2"),(0,i.kt)("p",null,"The Navio2 has configurations for testing and deployment depending on your needs,\nit is important to use the correct configuration otherwise your rover\nwill not work or could even get damaged."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Click to expand"),(0,i.kt)("h2",{id:"testing-configuration"},"Testing Configuration"),(0,i.kt)("p",null,"  When testing, Ardupilot has to be turned off. This can be done by using the command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo emlidtool ardupilot\n")),(0,i.kt)("p",null,"  From this screen, you should be able to edit some of your settings, such as the state of ardupilot,\nwhat vehicle you are using, the model of the vehicle, and whether or not you want ardupilot to run on boot.\nyou should turn this off if you will be doing testing for multiple sessions otherwise you will have to manually\nturn it off every time you boot your Pi up. For testing purposes, make sure you turn ardupilot off."),(0,i.kt)("p",null,"   Reload your configuration by typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\n")),(0,i.kt)("h2",{id:"rover-configuration"},"Rover Configuration"),(0,i.kt)("p",null,"  When you are ready to drive as an autonomous rover, you will need to turn ardupilot back on. This can be done\nby typing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo emlidtool ardupilot\n")),(0,i.kt)("p",null,"  then either turning ardupilot on or if you are done testing for the foreseeable future you can let ardupilot\nrun on boot so you don't have to manually turn it on every time you boot up your rover."),(0,i.kt)("p",null,"  Make sure to reload your configuration with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\n"))),(0,i.kt)("h2",{id:"mission-planner"},"Mission Planner"),(0,i.kt)("p",null,"To connect your Mission Planner with your Navio2 select COM",(0,i.kt)("em",{parentName:"p"},"X")," (the ",(0,i.kt)("em",{parentName:"p"},"X")," is arbitrary) from the drop down menu in the top-\nright corner of the screen with the appropriate baud-rate for your telemetry unit.\nHit connect and you should be greeted with a loading bar that will give way to\nyour cars location on the map with data readouts on the left hand side of the screen."))}d.isMDXComponent=!0}}]);