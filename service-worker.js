"use strict";var precacheConfig=[["/index.html","9618b386482b1811669eb3afee123fcf"],["/static/css/main.6daa7d95.css","55f1d66f2ab98877be8797b3462d45f7"],["/static/js/main.c714443e.js","371c31d796496fd91482bbf209924af9"],["/static/media/animations.1fe6b60f.jpg","1fe6b60ff160040779df496dd19a6ca5"],["/static/media/berlin_screen_tests.c1def1c7.png","c1def1c72c3e501e8bec070af7f7fa1e"],["/static/media/deutschland.074d3eb4.jpg","074d3eb45e330c34aeeda71f0f8e4fc6"],["/static/media/hr2.704972e7.png","704972e7c0e6b3950adcd28becbaa038"],["/static/media/kafka.de9618c2.jpg","de9618c25c1503807f488ffd7b76ab7d"],["/static/media/kafkatyped.80d4fff6.png","80d4fff6f9072bb4a6cd0e37bb310eff"],["/static/media/kinder.19c38035.jpg","19c38035ff69ae2059903c1780e1ea4d"],["/static/media/logo.506ff162.png","506ff16264d0608d8801bb204d49564d"],["/static/media/lt7.f8dd8c88.jpg","f8dd8c88cf90acedb6a3dc95a45e25f8"],["/static/media/lt8.06b9bf67.jpg","06b9bf675706b7bb6f358f74c96502d9"],["/static/media/lte07.f8dd8c88.jpg","f8dd8c88cf90acedb6a3dc95a45e25f8"],["/static/media/making_of.71e2a913.jpg","71e2a9138c0fc1960174405fedd0733a"],["/static/media/nibelungen.9d5b9a97.jpg","9d5b9a971e9ff5ea51bddfe6da63e944"],["/static/media/no-president.0f4595b0.jpg","0f4595b084817a3469a2dd7ce7301f11"],["/static/media/process_practice.bc3cc340.png","bc3cc340026c47577577ab25afaa6d97"],["/static/media/trailers.7d1506f7.png","7d1506f70c89d4f5d3318c1a92acc23d"],["/static/media/weareok1.49308918.jpg","4930891840c8b52cb1f08fd95a83189c"],["/static/media/weareok2.ce7419cf.jpg","ce7419cf88364deb28f0b7295af821e4"],["/static/media/weareok3.ef57b326.jpg","ef57b32672992f33cb32a4ba4812aaa8"],["/static/media/weareok4.7630df39.jpg","7630df392245fc023c085e8f328fb4da"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});