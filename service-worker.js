self.addEventListener("install", e => {
  console.log("Service Worker 설치됨");
});

self.addEventListener("fetch", e => {
  // 캐싱 기능 등 필요 시 구현
});
