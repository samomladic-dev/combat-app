// built by tools/pwa.ts, version 993164674d
const C='app-993164674d',F='fonts-v1',FILES=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/maskable-512.png","icons/apple-touch-icon.png"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(n=>n!=C&&n!=F).map(n=>caches.delete(n)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!='GET')return;const u=new URL(q.url);
  if(u.origin==location.origin){e.respondWith((q.mode=='navigate'?caches.match('index.html',{cacheName:C}):caches.match(q,{cacheName:C,ignoreSearch:true})).then(r=>r||fetch(q)));return}
  if(/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname))e.respondWith(caches.open(F).then(c=>c.match(q).then(r=>r||fetch(q).then(n=>{c.put(q,n.clone());return n}))));
});
