"use strict";var precacheConfig=[["0.bundle.js","b58208ec793a8b891143201203105bd5"],["2.bundle.js","3c286b09cd5e19d8dd09d8094be150c2"],["3.bundle.js","ab9da9a12b965d827a2b51f7a870afc3"],["4.bundle.js","fd83429881d5196dcbd8604886f12a2f"],["5.bundle.js","2ca4d0f12791f75bdb501459cf5fddaf"],["6.bundle.js","37aeae9014b5f3ad14a5c96736129c71"],["icon_128x128.e53f16c22adbf7611a14bdd86e865f0d.png","e53f16c22adbf7611a14bdd86e865f0d"],["icon_192x192.0b33527f4589daaa195daac6c7c748e8.png","0b33527f4589daaa195daac6c7c748e8"],["icon_256x256.c9d340afab12083696c7358d3f5f30e3.png","c9d340afab12083696c7358d3f5f30e3"],["icon_384x384.29ef4a1a4dd5127b5cc1c68228a4d92a.png","29ef4a1a4dd5127b5cc1c68228a4d92a"],["icon_512x512.589fdda94b2f91e5d64d738bd9af9dc2.png","589fdda94b2f91e5d64d738bd9af9dc2"],["icon_64x64.fa71ee0a538e1453746f312ff48eb389.png","fa71ee0a538e1453746f312ff48eb389"],["index.html","645c00d22bfe29a98883c8866a81c607"],["manifest.5c6014b3304d6aa2c44a2109c4dba3fd.json","5c6014b3304d6aa2c44a2109c4dba3fd"],["runtime.bundle.js","5c14aa63a973a424dd852b4f96d1c3ad"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,t){var r=new URL(e);return t&&r.pathname.match(t)||(r.search+=(r.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],t=new URL(n,self.location),r=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL("/index.html",self.location).toString(),n=urlsToCacheKeys.has(a)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});