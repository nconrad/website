// wrapped by build app
define("jDataView/demo/untar/json", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
//http://code.google.com/p/jquery-json/source/browse/trunk/src/jquery.json.js
if(!window.JSON)window.JSON={stringify:function(){var f=/["\\\x00-\x1f\x7f-\x9f]/g,h={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},g=function(a){return a.match(f)?'"'+a.replace(f,function(b){var a=h[b];if(typeof a==="string")return a;a=b.charCodeAt();return"\\u00"+Math.floor(a/16).toString(16)+(a%16).toString(16)})+'"':'"'+a+'"'};return function(a){if(a===null)return"null";var b=typeof a;if(b!=="undefined"){if(b==="number"||b==="boolean")return""+a;if(b===
"string")return g(a);if(b==="object"){if(a.constructor===Array){for(var e=[],d=0;d<a.length;d++)e.push(JSON.stringify(a[d])||"null");return"["+e.join(",")+"]"}var d=[],c;for(c in a)if(Object.prototype.hasOwnProperty.call(a,c)){b=typeof c;if(b==="number")e='"'+c+'"';else if(b==="string")e=g(c);else continue;b=typeof a[c];b==="function"||b==="undefined"||(b=JSON.stringify(a[c]),d.push(e+":"+b))}return"{"+d.join(",")+"}"}}}}()};

});
