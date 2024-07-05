'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8cb152d20fca2798c77d4f882672768e",
".git/config": "4fe5585129fe4fe656ea7f49a5a855d5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "880426908c138106fdaa88a4738d0d9c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "13f7e10fd2f13103ab228030d6c13cca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcb6c187d4526f57d46f1ad79477cfc8",
".git/logs/refs/heads/main": "ecefab1356d77abb11fee9015bd389b3",
".git/logs/refs/remotes/origin/main": "375301cc7e3631da4a06830703bfa526",
".git/objects/02/9c008ffadcc8eafadbf8547f7d913245f0e53a": "6908c972ba395946ca8fc39bb615417d",
".git/objects/04/e53c4e7bb051fd44b77d8da710107553436b07": "0d6129dafd52ba4cccab229367a82ad8",
".git/objects/06/3ebe91351ce59347fe6affca32c5046ee5eec2": "c63b1480632e9e960f4dbc7832620b0d",
".git/objects/0f/b754dc93880d748d7a1e3523cff47b40ffd498": "fdc35b02715d8e07acf70b2c511bc9ca",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/12/f3f41a61e65a383df47de75a835435c14fd2e7": "e76a2b64ec3f5185c15faff0a7f7a826",
".git/objects/19/c45cb65211a301883057310330f5b410762129": "2bb13baee15159200b542ed0bda9f0e9",
".git/objects/1c/0e599f0fbeaa9effc2d35462a3f02fe344762c": "8ac3046ab6bb7866f07bb3b27720d121",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/da99cd0e1213a3484246ce0fa431ddb4774849": "007b13f8dd5393d276f631864867d1a4",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/608747cd4fd1afc962c9701ae9cf2c05ecab95": "1920b27a5de50755c43e5592a8cc6d9b",
".git/objects/28/f3ccb99d2113e7006716d93daf1283adae3563": "e940e4de9906350689b607604a1243b0",
".git/objects/29/2873d63b93133ade083c4aec89407f4bacfc32": "15d78f468339dfec9b906f4e94744c18",
".git/objects/2a/404f7096f9cb2c5c3eaa6706b584a6ecc9d0f9": "b815b1f6a2571dfd9eb31f935d5bbce1",
".git/objects/2d/947465ca35541ee5d3f60666adc344b6fac15d": "425330b8a4052183673344523ba32a0d",
".git/objects/32/6dc536109e5e624fc819efce65e19e5c26d0c4": "9ee1f3fa838185cdd14989bf0d3a7b52",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/3f/6730fbe79269a132fa8d581acc2a7c0b99f907": "02b2490a16f5f3488f3179c1ad7c462f",
".git/objects/40/ca5669d0a46c334b765b9aecaf02f1d2326f30": "cff5382dab5952bfee3539d313cdd42f",
".git/objects/4b/4875fbc0a8957011a8919a2502cf11c1a649d9": "7b97ff7acc93b2e93a57dfe9b28aec43",
".git/objects/50/a72f89d622010e4e9f19a65d840b38be866923": "cd4b60e6960ae1e27f9a5e8526dfb32e",
".git/objects/52/82032dc8e233ddd35921f5e7b09499c9e0fd2a": "9dc48dcab3debac9e5963abf7e744108",
".git/objects/55/13bafce2230d8d1fbea4e31dfc81d187fcee72": "a3e816658ea48b832a3892467524afc0",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/2e3450b368544348f17540566dff93af26a6f9": "312184b9ad91ee6c75a9a4cb9152ccb1",
".git/objects/58/6f84ec1811aa1fdfa85f75e77f89905a44ab01": "758e7b7480c2ceecd927e8480dd0de36",
".git/objects/5a/7297048a62ba9384bdc2e50bed0eaa2636d8dd": "c2837a5830a4cda64c85a17a873d6856",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/5d/6c64e084ce777b7a3ef3f07b750f4328a53d15": "2f4ea8802b6197917acbaf012bf6a461",
".git/objects/60/b97b413e8a4c12ad724a76a15e2df5caa2b93c": "50bf3f8231e47c6f37286a186ad9989d",
".git/objects/68/bebf031571bf550e22a4cedb249340171909f0": "fc2283a88fddb917f7346d47b04e5da0",
".git/objects/72/e0e3f7f23899ec7079e8bc9edc955316f22077": "161578ee914d2669287ffb567e2baf02",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/a143a51231107dd99f4b0bbcbb05ec8341afc5": "ae8119f6892ae7227a474c472d8b5a91",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/84/10d3040e1e9f4cfc76deb3cf9700c6cff9b7e8": "594899f019cc8f3c19c3d1f329fd674b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/objects/90/aeb3b308951990542007a8dcab05eec2cee29b": "562a153cba5026c245171be9e9efd599",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/95/8a8b248e0e75d4a859487d14c552e604cf1431": "4a929d831a4577bdb67b5a355730680e",
".git/objects/9b/6f80eb1fed6f5c97bb76dc04930818689a5cdf": "4a5151a317569f5610020837b77f801c",
".git/objects/9d/d148e197dc04e1ae03c80e60e911d0aa5d293b": "7e7c55c7d318e08a89888471192a1df9",
".git/objects/9e/6d56157f56adab4b7e329496831ca2c3691a41": "6364424aa055c50bbf7d6190e79bb6cc",
".git/objects/a4/7a2c27e3fcb606f10816312b4675994a69e8a3": "bdd4fde9b82e2d3ba9852383a74c7a50",
".git/objects/ac/6da2e80e65c90200eb6549af957c121eaf83eb": "a2b8401d9451af52de2f605f30a2e7b4",
".git/objects/b2/ecf60673e301a826cdf7d65481e2db181231df": "784e81b3e6100fea1778a0a4f26af19a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/5a458a3b846da7414e2c0983d849d606294456": "6bcd403cffa9933f7a900b6d2164765e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/8449215ae0589d1d3156eddbe50dd642be2466": "77415a6c7731fc6c828403e2cc74601d",
".git/objects/c1/39872c25a3c35e293a904fb14d85d7958533bd": "05a4ab04b40e27eca440c9319d222b64",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/df/b134cca13405b229404957f94a60ec88002461": "00f39e998888e150aa3128c9600e2a70",
".git/objects/e2/425b23fc40006d4b7e3797c2c3fb85f1ac695e": "2ceeb2e574debd23c13da550a3dc9ddd",
".git/objects/e4/78e53ca0bbd471dac16177b8f4bdcffea949fd": "4e90e3c6549431d4e85e9df2fc266db8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/7a85fe04c4a2945c7dd6257de052d87d875ef4": "56ab07cb878eb3da2aebb8c3ab7d8022",
".git/objects/ee/a10db64d5d82193b16254424d57f653d5a7f7b": "ed924b64041bb93d3aba5e064898ebdd",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/f9/5c0d996a03b85d3ac6165236d5a09fea5be18d": "a05a970dafcb0a48930fa09a86a210b9",
".git/objects/fb/1c6d8a3d72ad18cf9fc045b939222c3a312044": "f84f022526b89feec8c54ccbf30199ac",
".git/objects/fb/8a41abf09bc734f87d27644c721e3df5cdcda6": "6be8f5daf4bf383051cc73a72caa019c",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/ORIG_HEAD": "3905961a2b2a9f76747b11cebbc4e012",
".git/refs/heads/main": "3905961a2b2a9f76747b11cebbc4e012",
".git/refs/remotes/origin/main": "3905961a2b2a9f76747b11cebbc4e012",
"assets/AssetManifest.bin": "b0412a0b35282b903987b1dfdbdeaa7f",
"assets/AssetManifest.bin.json": "867a9c507d92def1defff24e07676809",
"assets/AssetManifest.json": "0551c673995372a9233b0bef8dd0437f",
"assets/assets/iconos/android.png": "8a6e93188f7c270e0f64841fff1ba204",
"assets/assets/iconos/figma.png": "81aa8db6efccb10192d81f3d59c7e2b9",
"assets/assets/iconos/illustrator.png": "265b4f6b49f05f80f38b8d70504a1ff6",
"assets/assets/iconos/indesign.png": "fd833dd01ed0e82707a694d2d1280c57",
"assets/assets/iconos/office.png": "0ceb0100c8423b020fa50f03e1fbede0",
"assets/assets/iconos/photoshop.png": "bc7330f8376a9db1a6794ca77a777db6",
"assets/assets/images/desktop.png": "c8fed9ee290503ad90f09e0e5a64d6e8",
"assets/assets/images/logo.png": "bf8daea6b96f6f6f636efb94d42cee7a",
"assets/assets/images/mifoto.png": "5ba37fdc80346f2ad0be44cf6b0e293a",
"assets/assets/images/pruebafoto2.png": "845b7bf444c9eb96353545138668d5d3",
"assets/assets/proyectos/corazonnatural.png": "ef31bcc184e5f9e0f3e3b8e95b913529",
"assets/assets/proyectos/dados.png": "3664e3d458bab78f53f7e9e18a5353e5",
"assets/assets/proyectos/florpurpura.png": "4ffd59c71d22319077f82f690adae156",
"assets/assets/proyectos/gatito.png": "f398d63b490c685237af250a4d02c72e",
"assets/assets/proyectos/hojasmojadas.png": "636bf7f244579e9e36906f56444068aa",
"assets/assets/proyectos/libelula.png": "0db3167d1800283484dcd15c7f2c38e0",
"assets/assets/proyectos/perrito.png": "afd573fce180546a63c738dc67bffd19",
"assets/assets/proyectos/puentenatural.png": "b279620b52a50190d56f423fce05a64a",
"assets/assets/proyectos/tranvia.png": "70a4b0ee0db0a0f17b8a8a36eb872e91",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "39ca115be03feff64dbd61b61713676d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "64592956abc54aa2362391ec9d3fd332",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "48ed1b45e61720fcaed81b2c284eb70a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "77c69911cc91eeb29dd93a190252a3cf",
"/": "77c69911cc91eeb29dd93a190252a3cf",
"main.dart.js": "9fd703906184d0e8caec4a13ba043ca6",
"manifest.json": "4ae7f1f106574728225e6fdd9d4cad12",
"version.json": "c932eee3a526b586e232d52852b5708e"};
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
