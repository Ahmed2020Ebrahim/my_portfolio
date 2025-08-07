'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "223a0f4d7c5512f0eba18fe157571821",
"assets/AssetManifest.bin.json": "655afed6ae68e35f468bfe15d79218c5",
"assets/AssetManifest.json": "b9194b12e992e563e856976c7a6f9c33",
"assets/assets/fonts/Montserrat/Montserrat-Black.ttf": "b9ca03e9742434a8a843b6402995f1c8",
"assets/assets/fonts/Montserrat/Montserrat-BlackItalic.ttf": "da2cf9d185834f683099611f0a8dd54b",
"assets/assets/fonts/Montserrat/Montserrat-Bold.ttf": "354dc625a35bef1b6ec00a79c6cfc0c8",
"assets/assets/fonts/Montserrat/Montserrat-BoldItalic.ttf": "8d0891d878255f74eafd82d059cdb9d1",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBold.ttf": "1497e6fee4dd060b35f6b49e4241cb3f",
"assets/assets/fonts/Montserrat/Montserrat-ExtraBoldItalic.ttf": "f201991f01e3d93a72a397ad8634f279",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLight.ttf": "432be4a65a340e38f31651576ec58487",
"assets/assets/fonts/Montserrat/Montserrat-ExtraLightItalic.ttf": "5f562375fc1e3717fb1f8f788e86291a",
"assets/assets/fonts/Montserrat/Montserrat-Italic.ttf": "5128267cb132ae4a1a9e1d8ed61c1834",
"assets/assets/fonts/Montserrat/Montserrat-Light.ttf": "e1d9d4d7fc9ff0f24b901292a900ef66",
"assets/assets/fonts/Montserrat/Montserrat-LightItalic.ttf": "ce37c59e8bd8f6eecd40cf72e3198b56",
"assets/assets/fonts/Montserrat/Montserrat-Medium.ttf": "ee130b491bf120cdb261d27ec29e2805",
"assets/assets/fonts/Montserrat/Montserrat-MediumItalic.ttf": "aaba9a9046de09a1ace6971fd7dd3b8a",
"assets/assets/fonts/Montserrat/Montserrat-Regular.ttf": "38712903602f88435ddddec98862f8b8",
"assets/assets/fonts/Montserrat/Montserrat-SemiBold.ttf": "6e7bd3eacb1d1088e5063e375fc467aa",
"assets/assets/fonts/Montserrat/Montserrat-SemiBoldItalic.ttf": "9d08190268d026bbe4046c3cf911f87b",
"assets/assets/fonts/Montserrat/Montserrat-Thin.ttf": "a6cfec0cb3e946398cffcd4fa7ac61d1",
"assets/assets/fonts/Montserrat/Montserrat-ThinItalic.ttf": "da63f6debbd658592bcc843867837581",
"assets/assets/icons/svg/github.svg": "c31dcc2633c4b99013595d5ddce9697e",
"assets/assets/icons/svg/linkedin.svg": "6357197ac66d3b559e65997f84bd4e30",
"assets/assets/icons/university.png": "6231aa431c2ec66a583fef2232117e77",
"assets/assets/images/graduation.jpg": "29a3cfd0cfb79274f03e84bea0b5df53",
"assets/assets/images/image-3.jpg": "3c45c483e7b21efa905060ffdf4971e2",
"assets/assets/images/my_image.jpg": "e830115afa7700483782bbe33789e080",
"assets/assets/projects/pregnant_mom/1.jpg": "621ee3ed6d5653a3311e9c6134f91fc2",
"assets/assets/projects/pregnant_mom/10.jpg": "b4655f86327d4e9b7ca41230332ea6a6",
"assets/assets/projects/pregnant_mom/11.jpg": "c5860bcb90b5e95f03e083e9bccf4915",
"assets/assets/projects/pregnant_mom/2.jpg": "bae916e1e091e21586dccb991037b02e",
"assets/assets/projects/pregnant_mom/3.jpg": "8c3c77fce6e34e280a0b7aaa3330e722",
"assets/assets/projects/pregnant_mom/4.jpg": "67fdf018ffec3329a3745b659ae71ea4",
"assets/assets/projects/pregnant_mom/5.jpg": "f36f373b025d41f56232eb2a82ef4121",
"assets/assets/projects/pregnant_mom/6.jpg": "7545c9b756de560968f0d0c9d1ee6b84",
"assets/assets/projects/pregnant_mom/7.jpg": "6595625f451f84ffbadfa7132f1c22e0",
"assets/assets/projects/pregnant_mom/8.jpg": "666f74db5ee9d282d2ed03bb89a60dcb",
"assets/assets/projects/pregnant_mom/9.jpg": "62dc6781b5dfed7f810bc8d0a3389405",
"assets/assets/projects/ushop/1.jpg": "0efda6a3ef57c56805acc6b4fe7c40be",
"assets/assets/projects/ushop/10.jpg": "f99137d87e3dc73fc4fe547bdabcaec9",
"assets/assets/projects/ushop/11.jpg": "1b471e0a2ddc23f9a67930671c65665e",
"assets/assets/projects/ushop/12.jpg": "bbdccf8ddbabcc38d8e53b11e41cf87b",
"assets/assets/projects/ushop/13.jpg": "305aae799e0f25e85362a30c116e7ab6",
"assets/assets/projects/ushop/2.jpg": "af04cdb21f6744c850fa811857eda382",
"assets/assets/projects/ushop/3.jpg": "507d5a022bc906907cc893c47c770fea",
"assets/assets/projects/ushop/4.jpg": "4e22ab89eb5b8a0b1747f7e9b4cfad01",
"assets/assets/projects/ushop/5.jpg": "7feca5b25896dc542fc8bad849300f51",
"assets/assets/projects/ushop/6.jpg": "12c91c96430493a5979a414c1a628f19",
"assets/assets/projects/ushop/7.jpg": "8eb33f8cea07db3f48e2d7c1f15f8da7",
"assets/assets/projects/ushop/8.jpg": "0943cd1595171fc4c07ac507373400ce",
"assets/assets/projects/ushop/9.jpg": "2a9881f2e1fd5eb6639a8098232bebea",
"assets/assets/projects/ushop_dashboard/1.jpg": "090bbafc7a28f4f6ec0d28f616fb2999",
"assets/assets/projects/ushop_dashboard/10.jpg": "c6d167d27ace6543837c1a2943330659",
"assets/assets/projects/ushop_dashboard/11.jpg": "d1230bc1be4e04528d551902d52cbd17",
"assets/assets/projects/ushop_dashboard/12.jpg": "e59a8c21cd77fe7fd3b36e1503f90165",
"assets/assets/projects/ushop_dashboard/13.jpg": "f2487ef6f1384ccee1fcdbd1b34f4959",
"assets/assets/projects/ushop_dashboard/14.jpg": "c48386828b51d8d0d6fe0a79ac6c5cf2",
"assets/assets/projects/ushop_dashboard/15.jpg": "aaaa50d0e2b6a92a441ccb971977872c",
"assets/assets/projects/ushop_dashboard/2.jpg": "f54b97555b7af4b72f01ac8c9b734005",
"assets/assets/projects/ushop_dashboard/3.jpg": "d12c0a93557f5e8c314665b51e170315",
"assets/assets/projects/ushop_dashboard/4.jpg": "53ee6c96e103fb115b4aefca04db9427",
"assets/assets/projects/ushop_dashboard/5.jpg": "cbe7f8493373f7d1af9cef4f54d358a5",
"assets/assets/projects/ushop_dashboard/6.jpg": "bbde71a0f2287f2e5e141914f7bee4f2",
"assets/assets/projects/ushop_dashboard/7.jpg": "449d6958d6d6a99358ce686882edcb07",
"assets/assets/projects/ushop_dashboard/8.jpg": "3c5b01fa02378dc0c91e4309ccc128ab",
"assets/assets/projects/ushop_dashboard/9.jpg": "78015be741ee5a7d3715a7e1330b424e",
"assets/FontManifest.json": "d5be358e9625e1f2bba2ca798df8b3b8",
"assets/fonts/MaterialIcons-Regular.otf": "931ba3d7d628ef6a42297d39cdf2a201",
"assets/NOTICES": "f02ae36acd1a836e9985275eeecff1de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "80b7444824d66cca07b57cd152420196",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "716d6975b3259cc0a88baeda575042ee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6e35429938ede04eeed40709a3c44097",
"/": "6e35429938ede04eeed40709a3c44097",
"main.dart.js": "2f5a039a9592f4b7fe36258f97d8edec",
"manifest.json": "d8fe34f7ae4c072a77b924e01dac8a50",
"small_logo.png": "4557c1a2e3194def68def9983d1841e9",
"version.json": "9b818ca9511483c901bed1545384376c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
