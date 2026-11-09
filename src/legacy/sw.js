'use strict';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('push',event=>{let payload={};try{payload=event.data?.json()||{}}catch{payload={body:event.data?.text()||''}}event.waitUntil(self.registration.showNotification(payload.title||'FitPath',{body:payload.body||'',icon:'/brand.svg',badge:'/brand.svg',data:{url:'/#user/notifications'},tag:payload.tag||'fitpath-update'}))});
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil((async()=>{const url=new URL('/#user/notifications',self.location.origin).href;const windows=await self.clients.matchAll({type:'window',includeUncontrolled:true});if(windows.length){await windows[0].navigate(url);return windows[0].focus()}return self.clients.openWindow(url)})())});
