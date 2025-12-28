// Nome do cache (muda a versão sempre que fizeres alterações grandes no código)
const CACHE_NAME = 'roteiro-tec-v2';

// Lista de ficheiros que devem ser guardados para uso offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// Evento de Instalação: Guarda os ficheiros no cache do navegador
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: A guardar ficheiros essenciais no cache...');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Evento de Ativação: Limpa caches antigos de versões anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('SW: A remover cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Evento Fetch: Tenta carregar da rede, se falhar (offline), usa o cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});