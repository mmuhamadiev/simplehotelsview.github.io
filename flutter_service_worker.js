'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ba54b2a3b76392bbf868949687986924",
"index.html": "e5d0832c5846d3f131aaae9ae9d80fce",
"/": "e5d0832c5846d3f131aaae9ae9d80fce",
"main.dart.js": "0c68e7e4f48c035b96587ea6ba457067",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "69f540e6e30ca79116e27a1e917f55c9",
"assets/AssetManifest.json": "b1b403fc9943fad1e654a327b76778fb",
"assets/NOTICES": "e60623fd1104f9b91712282862e39ad3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/golden_ratio_5.jpg": "561645b6d3465c15a2af46cf7fb66bd3",
"assets/assets/images/p_17_hotel_4.jpg": "6783b9325645c526ad2f6f125b2007ff",
"assets/assets/images/flora_chiado_apartments_7.jpg": "1477556f232db7ddc2104fdc95263cce",
"assets/assets/images/oscar_hotel_2.jpg": "8de69945ac1cfb45fcaf911a40dd9ba3",
"assets/assets/images/oscar_hotel_3.jpg": "b95eb46a7dc05a33c661e482f31dc10b",
"assets/assets/images/flora_chiado_apartments_6.jpg": "179521b1f0be447c879711ce7e2371bd",
"assets/assets/images/p_17_hotel_5.jpg": "8673d24e9a126bea45891a15efb01b00",
"assets/assets/images/new_rome_house_1.jpg": "7e74d33212f6b348eb69427fb3db2773",
"assets/assets/images/golden_ratio_4.jpg": "3151a31874b45dd760068d8d5d32c380",
"assets/assets/images/golden_ratio_6.jpg": "495cf9ddad0a4d14c7f0fc3a5740a245",
"assets/assets/images/new_rome_house_3.jpg": "ce6fe997e04adf80117fd8d79ec17976",
"assets/assets/images/p_17_hotel_7.jpg": "79c7517c9fa23f781a6aa53e55b85c9b",
"assets/assets/images/flora_chiado_apartments_4.jpg": "81d8192f96d54260be594f166f6f5374",
"assets/assets/images/oscar_hotel_1.jpg": "bfe112621c07aef016052bf41d116f57",
"assets/assets/images/flora_chiado_apartments_5.jpg": "4bd2e4f838027140a97131f954e59c7c",
"assets/assets/images/p_17_hotel_6.jpg": "022b3c0a960a7d324f1deefa0130eceb",
"assets/assets/images/new_rome_house_2.jpg": "e17ebc54d3dd605315e415d7e35d224e",
"assets/assets/images/golden_ratio_7.jpg": "a7f4ae914b132d67366e8785f9b92a6d",
"assets/assets/images/golden_ratio_3.jpg": "adc93d81b4719f66d5c4b3c6339cd8d9",
"assets/assets/images/p_17_hotel_2.jpg": "2946ed8eaba0d7403a3f04924681900b",
"assets/assets/images/new_rome_house_6.jpg": "aaca4625ccdd50bab0b0621bea3ffa0d",
"assets/assets/images/flora_chiado_apartments_1.jpg": "b2b014c1e6a5c29731835dcd436b7c3f",
"assets/assets/images/motel_one_brussels_9.jpg": "9a87d4cec47d2d854fba7dfc75ad2bd5",
"assets/assets/images/oscar_hotel_4.jpg": "e62783d7d89807093c238825d5715803",
"assets/assets/images/oscar_hotel_5.jpg": "a40cd178750e96edbc1ef9e7f8b98e89",
"assets/assets/images/motel_one_brussels_8.jpg": "66ec32186a80ad0afdc791e35a48e101",
"assets/assets/images/p_17_hotel_3.jpg": "70567f2f13e6a43837310725d4496515",
"assets/assets/images/golden_ratio_2.jpg": "b484438326f0c98b56b26797c411810f",
"assets/assets/images/p_17_hotel_1.jpg": "213f82c9d16007eae3c0e55f39063e16",
"assets/assets/images/new_rome_house_5.jpg": "d46ee9fc5efe94939055b786f1ba82c4",
"assets/assets/images/flora_chiado_apartments_2.jpg": "0e1cb8f0b9b684f7c4776fe08e0d2714",
"assets/assets/images/oscar_hotel_6.jpg": "979c63468b8de2e5ed2d58c16e08bf1a",
"assets/assets/images/flora_chiado_apartments_3.jpg": "74ce7eea79c11abfc08e8f14eb6d3ece",
"assets/assets/images/new_rome_house_4.jpg": "b0f7f0522eca04ece2eeccb90f2ae06e",
"assets/assets/images/golden_ratio_1.jpg": "2c31b26dffd8b34c02fe8cc637f1a69f",
"assets/assets/images/upon_lisbon_prime_residences_4.jpg": "9a7d81e428fc03d52f970475ce2ed1b4",
"assets/assets/images/holiday_inn_&_suites_orlando_5.jpg": "033d6bd5aca86144010098236ac2fdcd",
"assets/assets/images/stradom_apartments_10.jpg": "6c64ef3dab96a0479c2858ea73dbc931",
"assets/assets/images/stradom_apartments_5.jpg": "a2e5464e7e6ea0edc402e10c6dc2a7a3",
"assets/assets/images/stradom_apartments_4.jpg": "f65255167277b0562346207c53dd42e7",
"assets/assets/images/holiday_inn_&_suites_orlando_4.jpg": "7d1dd4d2d285a35daff2ff11512d9a44",
"assets/assets/images/disney_dreams_1.jpg": "33c0d74eec6c99619603143d9542160c",
"assets/assets/images/upon_lisbon_prime_residences_5.jpg": "5c9cbbe70b8c99ce296cfe6e571abc42",
"assets/assets/images/upon_lisbon_prime_residences_7.jpg": "eb6567d472ac5ed3f10b3ce1d264f299",
"assets/assets/images/disney_dreams_3.jpg": "f2d1f64feac81ead85b3a480eb94a74e",
"assets/assets/images/holiday_inn_&_suites_orlando_6.jpg": "d29dd3441e93f66188f1382c00679eb8",
"assets/assets/images/stradom_apartments_6.jpg": "07c9b96a39ea48a866d5d48c078ae9cc",
"assets/assets/images/stradom_apartments_7.jpg": "be5ababec4277e2fe73ccc7e67785f5e",
"assets/assets/images/holiday_inn_&_suites_orlando_7.jpg": "fa9bddfbb0eb0b28c203cbfb7dd90430",
"assets/assets/images/disney_dreams_2.jpg": "2569a4b513c757dbfa9653cbcda2f01c",
"assets/assets/images/upon_lisbon_prime_residences_6.jpg": "e7a661f7a60e2f6a08b239cce6704581",
"assets/assets/images/upon_lisbon_prime_residences_2.jpg": "562132154f6a5ea9227889be3291387a",
"assets/assets/images/disney_dreams_6.jpg": "e323ed8c044078506c394028c8a86db5",
"assets/assets/images/holiday_inn_&_suites_orlando_3.jpg": "2b9883642ff048cc0826ea01565429b0",
"assets/assets/images/parkway_international_8.jpg": "928a3440cc402f2293893c546ace46aa",
"assets/assets/images/stradom_apartments_3.jpg": "cd4935d5d76e2cb6e06ef34d36c098b0",
"assets/assets/images/stradom_apartments_2.jpg": "aa4afe51421bd981292382a267230a85",
"assets/assets/images/flora_chiado_apartments_12.jpg": "06e7b48faff888f036efce2a53b36061",
"assets/assets/images/holiday_inn_&_suites_orlando_2.jpg": "cdd8ddf46eb3fe0bf7233d9dced22ca8",
"assets/assets/images/b&b_la_fontaine_8.jpg": "0d1441645c34c079cb418606df01daca",
"assets/assets/images/upon_lisbon_prime_residences_3.jpg": "b379edfc6f79fc75360c3765129ec03f",
"assets/assets/images/upon_lisbon_prime_residences_1.jpg": "7f7e5fd566b9dd0ad5605ea28a886ced",
"assets/assets/images/disney_dreams_5.jpg": "049d559cc09dc82d3cbbfae087bed60a",
"assets/assets/images/flora_chiado_apartments_10.jpg": "6f5d4a3fbc8bf07acb6d2d2dcccd75fc",
"assets/assets/images/stradom_apartments_1.jpg": "1c7bd47c787232d292fd9a6e854cb6a6",
"assets/assets/images/motel_one_brussels_10.jpg": "14dab364cf1e038322938ba8e967eeb9",
"assets/assets/images/flora_chiado_apartments_11.jpg": "87ca4a9d1bc189057532427137086a66",
"assets/assets/images/holiday_inn_&_suites_orlando_1.jpg": "30152763e6bb41db399210a21f8e0752",
"assets/assets/images/disney_dreams_4.jpg": "8c5251934e2ed7870049316ea284fa94",
"assets/assets/images/b&b_la_fontaine_6.jpg": "b11f42eb7923fcc2b71fa30770c97106",
"assets/assets/images/parkway_international_7.jpg": "f7425f147e62556f31eafe1a2e440d08",
"assets/assets/images/parkway_international_6.jpg": "7ed00b25db577292d92d42285ae09782",
"assets/assets/images/b&b_la_fontaine_7.jpg": "299271a0a2090c937b5ab64c3ad4065e",
"assets/assets/images/b&b_la_fontaine_5.jpg": "874b1487948354ed59c69dadce154386",
"assets/assets/images/parkway_international_4.jpg": "13a7724a7ea1832db343c1d3a4d7811c",
"assets/assets/images/parkway_international_5.jpg": "19f47ec3fb95dbb0f8d1a4026885a67a",
"assets/assets/images/b&b_la_fontaine_4.jpg": "24993a33d1d50271fbcb7d68dcc1db7e",
"assets/assets/images/parkway_international_1.jpg": "b4c7a3bbe5ba94d2e6caa6cc66b02bd7",
"assets/assets/images/b&b_la_fontaine_1.jpg": "59eec6d1fb20f64d1e7fec36a236a415",
"assets/assets/images/upon_lisbon_prime_residences_8.jpg": "833fe6d2fa2bdfeed518513a00a34516",
"assets/assets/images/b&b_la_fontaine_3.jpg": "1663b5caef0b0a952198a86e02e2f49d",
"assets/assets/images/parkway_international_2.jpg": "6a358f66cb186cd52b304cee5d397b3e",
"assets/assets/images/stradom_apartments_9.jpg": "2ff783c6ec2b2b1e7644830d474ea171",
"assets/assets/images/stradom_apartments_8.jpg": "d46f098f5866964cc6ee53ef808fddfc",
"assets/assets/images/parkway_international_3.jpg": "0913aed9f3a2812b56b519a6b18eb56f",
"assets/assets/images/holiday_inn_&_suites_orlando_8.jpg": "23eb5257779dfebc4e7fd28b8997dc1f",
"assets/assets/images/b&b_la_fontaine_2.jpg": "0b4b51efff7b55e322c5f55ec1fb5d1a",
"assets/assets/images/motel_one_brussels_6.jpg": "4849f3b54225554ed69f2d8179c6396b",
"assets/assets/images/grand_orlando_resort_5.jpg": "ba91cbcf3424d2e9fa9670c556aa395f",
"assets/assets/images/grand_orlando_resort_4.jpg": "d4051ba8602b3c87bf3660e0ae769416",
"assets/assets/images/motel_one_brussels_7.jpg": "1f11cb995bd926314cfcb01c588b3505",
"assets/assets/images/motel_one_brussels_5.jpg": "0e4680c31b5084b6844ba1c118556ac4",
"assets/assets/images/grand_orlando_resort_6.jpg": "b578c4c09c343f3f105b807759e58640",
"assets/assets/images/grand_orlando_resort_7.jpg": "55a8f30e1ac59018dcb9f1dea8c7c5f1",
"assets/assets/images/motel_one_brussels_4.jpg": "7bbdafdfdc17e44eb3c0c60950034ffc",
"assets/assets/images/flora_chiado_apartments_8.jpg": "47fcd515d85a8ae23436e43681f0b0a8",
"assets/assets/images/grand_orlando_resort_3.jpg": "d909e3fa1dbf289ba9dbfb7c403c063f",
"assets/assets/images/grand_orlando_resort_2.jpg": "d2136610dfebd05f858c80f97bb19c43",
"assets/assets/images/motel_one_brussels_1.jpg": "1060bb29614954897327b89b6b14c591",
"assets/assets/images/flora_chiado_apartments_9.jpg": "f07b9a47ef8d10fd63e72e7673a8c319",
"assets/assets/images/p_17_hotel_8.jpg": "9eec72641b2b8c8d6b63b5b03edbc6d3",
"assets/assets/images/motel_one_brussels_3.jpg": "c25c4f18ee8366b6524fcc29cdecc750",
"assets/assets/images/grand_orlando_resort_1.jpg": "3a487e5228a342cc8b25d4d79a212a6f",
"assets/assets/images/motel_one_brussels_2.jpg": "66395599a6fc72db8a7118ebcc58d0bc",
"assets/assets/images/golden_ratio_8.jpg": "e593f49ae95309dfdf5c8e9c819e3805",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
