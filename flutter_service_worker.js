'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "ba54b2a3b76392bbf868949687986924",
"index.html": "4b8742653830e20d2e711a6af2a8ce0e",
"/": "4b8742653830e20d2e711a6af2a8ce0e",
"main.dart.js": "fb0d3b0bd4281e22845f1aafcea3f654",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "69f540e6e30ca79116e27a1e917f55c9",
".git/config": "f99198fe9e487b8ea0cd290553aa1d8d",
".git/objects/0d/b6292ea37af4e42220f3967e856be1b4594611": "c8e501e36048800e335b4217ec828535",
".git/objects/95/74a4dc60fe1bfecb99b566c406f7078399fa42": "32f206d8c9d319a3abe1170718bddede",
".git/objects/95/dc00e2bbde56fff8a761e76146f82880b67e38": "9673714f0367fe095e42ae0eed694d36",
".git/objects/59/f99cded5eebee0cb142bbf7424a91de6e5c1ee": "6c90fcd02d78b6b330cb0512800cfd24",
".git/objects/92/23e1bf8ff56513821bccd81ae65e7426c07b21": "7d633b387b655259aba2fb318631671a",
".git/objects/0c/75e34a032fe0030daafc5ab7d2ab282aeccefa": "533fc79fd207a723dbb635d281d6933a",
".git/objects/0c/e7498ee65c718711074497fd1ae2ffd4dcc9f7": "726d31868ca87f5e976d73848a237e7d",
".git/objects/66/610f676627343786361c7ba1849549f9f421dd": "3cdd14064087a36344338210c973eeb7",
".git/objects/03/5cbe9f911560fceda6eafca6972b0e08b7ee35": "bc2ace2ea8bf50f1b4004fba769b0a21",
".git/objects/9e/4aee09798690fdb7cedf77c29ac2435da77bcc": "9e1b2ac4aae828f273f5345eea5f491f",
".git/objects/04/c829e900b63c40881a345e8b4a84c117bb8fbf": "a53a17b5d18751be98b142acbcc97a2b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/f2a8d7a60d6392316bfc5720e227bca9112c89": "540e18b403e4a1c0f59368a2d559d76a",
".git/objects/35/2196fe6618e19ed1ccc6822bc8087bad74e5ff": "7642fd6f5604f55e576e116bc147691a",
".git/objects/35/5bf3cc7d82028cafb29118835ae50038ac3e7f": "af9fb79cea0fbf9e47b3777b115d5827",
".git/objects/69/34dbac5ae7e3b50c131977cf22cac2fe8b3629": "76d64e0bcf9ef56d9ba1b32208e331cb",
".git/objects/56/482d03047d53a5081050d51781e13e54753d80": "7593e14430cee9f0992315bc7b476833",
".git/objects/3d/ed32cc3a2aefd33910c6f0040264655c11f2c5": "1dc9ab82adb10c87c25767267b4d81b4",
".git/objects/58/2fe27a5717bcab31154d563ce2882ed801c21e": "7e7893ad4109ab03b50dac6904cf9d2e",
".git/objects/0b/d442b3b07a5a22a0fe1c51fcb4ab23a17285f7": "7cd99be357e8a798f772f7f5d8816f46",
".git/objects/0b/23ad6d652ab1f66446ce2a0c63227511afc292": "8e80e0aa7582a590ad3507fafc5dd0e8",
".git/objects/93/bf8de19a86d9d24db21ca105298966ac525686": "cb428c0fd412dc07d26bb53f58b6dc41",
".git/objects/94/72918c8994ed498c992c28b54403432e0bcdae": "9019aec32129c4b08242f6bad77d948b",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/5a/b24d8739e3d002db9d3d66f6a072ca0665ddb2": "d2b3e1352b1ee07aa697281d84a44fa4",
".git/objects/5a/f5925947ac90116299c04b44cf20f8d7aa3c36": "c4d488f48fab071e7324277569127274",
".git/objects/9d/d941061c324d07cfcb1f7fa2df5d25eac9aa6c": "93c40164edf1d8a693720ab6874e63dd",
".git/objects/9c/cf340a5bf4b7691068f14ca6690798a9cf6d77": "b1b3dd3fa574dfd810ccb154b356c5c8",
".git/objects/02/357bc12928acb2a3003854b23580aa4b8693ea": "68a1fb3b827c15d580f7f330c1c238de",
".git/objects/b2/8f864695b9581ef22f4e863d2af3685401a976": "dec9a4fb12ccbbfaa45e970a367f30bb",
".git/objects/d0/2330af40c3e1c47e962fa0a9829e1eb3e8acb8": "19e91f2372abedb3efd0f49ed05d51af",
".git/objects/be/ebee0c924883df6c76efba92b995524c216e54": "9989f8f17f0ac81b156b40d1c862d6c5",
".git/objects/b3/0de7ee2caf2fe6338ff09f868150042e0afc50": "5c81452ab01d1173e9b513bc1c2baa9e",
".git/objects/df/753c162190ae77804841f6360c9f585552df01": "abd7aee4501fd32ccf4256ba1b6f45a5",
".git/objects/da/bf6bbdf5956950f95123821131c2074b45f905": "01a8dcb03d1ec6bae1f0083085a3f5dd",
".git/objects/a5/8851c427d6f8714999c1ef7c1e02f2cfb439e8": "e64e3ce64b5bee37cbc26ce8e37b110c",
".git/objects/d1/6b3346d458f93f505d3c4c20b700b4d09109b6": "4d7aa19f5b88fd458b589f4709fd0958",
".git/objects/d1/3d851bda2176140b9070c0a82da8d517741212": "45d5f3950698d3ca8407df750b025ff6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6ab60274b47c9e04533466a4b18b02c7b4575e": "fd3480490cf21cdddd15c38940d8f8fb",
".git/objects/e5/32462a5d71c1802fe6a39730b6632ffd914b00": "29852b85569301825a9caa76e2e3acfd",
".git/objects/f3/28e28bf9809afdc96634d979d9f6eb6d965a39": "94ab9e6d337aab4152e78647190647f9",
".git/objects/f3/46df8e09df1519bdd0417b1f17045ef47069a4": "ea70f642092a9efa9b36c8a1474f8c04",
".git/objects/f3/8efae075932d74411580a9a86e8c88da54b5b6": "db8d9a294b2b9f1d21f150fc006b2899",
".git/objects/f3/9e8e17da8074ce27008329e4019fddb7e289c9": "b058bde721e5042d9705fc44ce88edd8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/9545fb35775aac456d87acc6f3be643769090f": "bb7a96dd259439266a6dc5d5a766073c",
".git/objects/c0/20c18c3666c87493912e376cb1fd7b0512756a": "8babed3d63c66080db7b0186292b1cf5",
".git/objects/c0/a96e2220745bd60c1eb6767e1a64813e40f268": "f85a66f0764616aeee380fdb78926765",
".git/objects/ee/fed0d28dd8a22f98b55ac4b32ee9ce3b26389c": "3686fba9f182db58dfd59b7b080b3919",
".git/objects/c9/c0a17e6c644a1bb9f7488b1306022080cca239": "70f5fc5d8eb2681247737e153d054baa",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/cf/fd49ce608b01a7f24e54f7c2940b6c028b3812": "2694485c1fe27f11b6c071e9cb27720e",
".git/objects/ca/425c91e0ee769747cdd119c5b8262a337b1bb9": "fa32e489986a732438c8f570982d4c2d",
".git/objects/ca/5da93cd59bc03a24e1d127474bb0f91e9e937c": "a5593c8e6ac1cb53d2aa7d2671c82236",
".git/objects/c6/dcc5d7fca454faa5c40598e52ff50b9deaea1e": "0374539fe42271fdd1101136e0d7112f",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/11/1e35c2ee0dcec19c2b69ce73793f6dae37a937": "de0ea2461d9458aefa210df90a17009b",
".git/objects/29/ed1b2ecd51c636531d924df44b416fb5fbaa2f": "e76bed2c567abafb7954ba8b650b69b7",
".git/objects/7c/c0602bc1df0c9afe253bb0f2c63af001d0bab2": "9c258fbe012588f9749e7ccd214c9748",
".git/objects/16/f83119abd38d29b8a5d1e8c4624e9f9df9d29b": "5cc4abf77e0612628815132ca02bc80b",
".git/objects/16/841ad943cd2393944cd3c4e54dd6d7c62f7a97": "3e6da77f296ae2358cdaf9283b3e1114",
".git/objects/42/faffd95253d3627c7d17a8b99300d1fbd62e7a": "c1199422ef2d482b2d76afa68b6547d2",
".git/objects/89/8e0980114af31b3e08d33e8c9a7d3ccee04e5e": "ba37abca21b27722bf994005ecb849c0",
".git/objects/89/e262cf7c378a7430d6820d69a4c8c438b8f4a0": "aaf34bebe4ab7a97aa151a7c292d66f4",
".git/objects/45/0f46ce3677d425e7e02ee8c376be58edae51bf": "2adb8bb7c52fb3a73754540d47e6a7fe",
".git/objects/1f/0675e01c09ee34aca92ccd6ed6ad7f49cab4bf": "bcf80d450342c2b8a0292df93051d896",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/93992e587f059a14af012d02b7becf0a8e64f3": "d1aad77da003d43a6b24bfda5c05f748",
".git/objects/28/9d818dd9d34c621fcdea4fe3e48c295a46e726": "7deaa530839b27469c92ea5d54aeda76",
".git/objects/7b/ea45f6116e77184b7c55c49ba9c3d916cb1ec4": "3ebae012b6f1d8f3fc341befa0c96558",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/53a0bfa07c756fb2b7cb8314a1d8321c4d8c07": "0216d6046381ac7c2f592f066457351e",
".git/objects/10/6ab9b480c2eacfb4df036d4a965323eaa871bb": "3bbec4e728b47f24718c587063392b70",
".git/objects/26/504fecf059774920f0596eeb6afb69d81904df": "b9adcd83f6258e1402efab21cf8ace63",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/4d/c221c2950161d4c1ec173dd50ab103c88e800c": "9e2a6b4694c04dcae5e12261da5dea7e",
".git/objects/4d/c19fdd13c5b48787a88b2e264e3421044ad88f": "fbb2c86e2a92415a3a1baa1fba97834d",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/3c9d1b814190bc879109c076ac5989e752476e": "115e0e958199d3a143fb470efc264305",
".git/objects/00/1bfc022fb5c4b3aa2906f66a5b288d06939d36": "89ab1e6f6d7608c1135cfde3eb8d17d4",
".git/objects/00/2b71048154da0f1881f38274577fc114437690": "94d3822b6c895d3fdf99e498bd118f7c",
".git/objects/6e/fc4722407748d478c46b04651b2b18bb649e22": "b4af027476fdb035a448ce710e8a2435",
".git/objects/36/80b16e905988f9f9a133400b095dbb1263ed20": "0505382094bdbc3de402543494a04a23",
".git/objects/5d/4fbdf93eed1fc571e1cae2caf11c25e0ddd8ad": "134bba1eb4f08f230338f54681e9c211",
".git/objects/5d/0f8bce30384d13a416b5c1ac75ca13b88a9c4e": "b6a3e0401e99456212e96dbec1aa88fc",
".git/objects/31/ff18b784494dd26d9a2bdaa337c7876134dc1b": "8876b97ddc3a0f109c94e4a1abb73559",
".git/objects/65/83943a2beafd15f3baa0adf819597c71d3770d": "eca3c8408c12225b2e0e7c036c51360d",
".git/objects/98/52e6ed889edc7ea5aabe1a7c612664596fe987": "3176d29d7db6bc4197f499740acf40af",
".git/objects/98/09af9df54827d68493ce69a5d01d46960dcb6e": "b060a1dd9cfb090032105d5a515998a5",
".git/objects/53/8c15ae876a6a90bdac59d61ade1df91d73b38e": "4d1bf471952fb4cd0a3a17b31e7b01a2",
".git/objects/3f/a9a7009a7244935b549034e7aa56738563a280": "98a603c41d977ac8fe792a4459f5b84d",
".git/objects/5b/0fc63f786e71be065f5a6e4d0ea88780e3acfd": "3f1233258ee84dc624a76b365191b00c",
".git/objects/5b/e231bce8d67df76166ece7cdadf9099ea799dc": "0fd6a875ed6c5e36cda348c6fbd8685d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/52/0bd58bc0d781411307247f5374fbb808dcc0b9": "cf8232fbd72178caa054eff955b7796d",
".git/objects/55/f8ab0d193a241d8d3aa0f9b852a356c09680bd": "421201ec367f6dfd20af2e7040a8fa33",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/73eedcd1bdbf2c3316f3aa46b2420f9628e5b7": "3863158f695909452b2fd877226773d1",
".git/objects/63/e7f28b94aaa1b20714de616b94460dce4a1856": "99bba4e1c04997f59e8ff5f50b0b7dda",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/64/8e02197f16b1532e56191a3853baf940fb5a6e": "33b151b74497f7e5bc1ec534e1bd804f",
".git/objects/a7/ecbb18d0b1307f8fca206b2506ff046699348b": "33852e928b9f12f0bce0b1e70b449427",
".git/objects/b1/d1768de7c4e3781a230746d2e1f623c00e6b39": "525530875bc5fd93fbbd71374ff3d52b",
".git/objects/dd/9b7f3aa19da535d4925045ebab4cb913d3c4fd": "bae7fc505f7e52918b556e7d71a6f11b",
".git/objects/dc/f234b8c8801fe462651127645135a0ef6c4889": "211b0ec352ff7778492cbf07e4a2ce4d",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/aa/5f2e326144a58434a49c7b9b141d48821051c0": "bb9116b67be9dc606385f27487eae4a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a6/064e1beea2a3b79a00158a78a277649a89236a": "398bb640dda0141c8c92a11baf75f5b6",
".git/objects/a6/79449634fbdc5081d685ef8493425f72e61ef4": "4cd213e3d14ebf8d65eadd73ffc3ab15",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/e1b36e5b88765ec91e143361bcd9f81b6942cd": "5800770a8c4bfce1594c06af81877bb1",
".git/objects/e6/8123f3066aa4745fc1de4ab492615cd7bf8f11": "f48fcfc132e898c8fb33fc3273fb4459",
".git/objects/e6/2fe71321294f7467c359b2e38acf2ec109b123": "9c5417e35a4a0363d7afc923fbed283f",
".git/objects/f0/fff242b9bd9110489d8e1c06aa43b7df29eadb": "d5874c745e918a6926db4e9a34f5618d",
".git/objects/f7/b8b7f4844507693ff230154e7e3ecb25350af7": "e3f45ff7d1e79d48ec93ed46698bb8f6",
".git/objects/ff/c7ceb791f568087dd5ec683431e439b79bf340": "50a955917d77db99795d6565cb047cd3",
".git/objects/ff/60842013dd631f7839fd5b94d1089093345563": "151a8c007c166133626adfc2722891a0",
".git/objects/e9/34457851c772c8f79e836967faa7f9805cf49d": "91b2a995076ecb61752144d4876358b9",
".git/objects/f8/58981336ec7d4270dc0c2712d3a4ece92ba6a9": "3fc5dc6e93cd85a54022b25ce60e5c99",
".git/objects/f8/546bfc1e5b8bd9785685c2705b4eb93f637ccf": "de0da760814a42dd996f32075758ea92",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/00f7734865233efa5fc79df8910ca9ff6d7f95": "c5521d305908fc1a3eb85329afef40a8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1e/a137fc7b17d0021a084178a0c550b558c25c8a": "028cda7153536f3e1070f844ca37af6d",
".git/objects/24/fff6cd90aa10bdd3d1996844a4eba2e2dcbf1b": "2ad07b2e81c23f87b147754e153cfc71",
".git/objects/4f/6a928d94c34c1beb6df2c6705e9a451f767d07": "f4088d3e390163d42e1253c66f8a1feb",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/85/64482c1e22e7d3b0eea8756f07c07e4dc8a19d": "0624093758a254a941b8a9834baec7ee",
".git/objects/1d/aa0f4c833112785b7cd5a7ba664002e01286aa": "c2ddbc783e064d3f3d948a5c2d29337b",
".git/objects/71/5209e06f749bd79eac903872ec2905b53b9b6f": "8bb8278b83a12b7adedc8caffdf94761",
".git/objects/76/83bf88fcf3445aea9da191fba3b0b581559a38": "cfca47428546c69493626242071ac5a5",
".git/objects/82/126269073304064595282fbec68e47746442d8": "79fc358dee374a373bc63c4cbca4de26",
".git/objects/49/974c3bab09f5081c14c875cf04617512690f4c": "33a10c00e422337f7ae3aad4e52e8964",
".git/objects/40/6aad0e603ef21ec563ec9d6c4f844e00fd2166": "f7904b802a6ec63e71e4e2bcf57c2753",
".git/objects/7f/a0038ac379bee61049c68809e0e98a867e3c46": "5e749e3bfa2790de604591f4b886f36c",
".git/objects/14/161303b2c32698b7d4ed85751580d4b839d79e": "8f921f8fbd2d710604079d16cf70f0a1",
".git/objects/8e/ee4c72c22c5523b319b927d23c355a6d47a3ce": "80e07c8e827e9e7970fa62e6415b2135",
".git/objects/8e/a9bf69c16f064e6962c16db72a8c0dfd771ba8": "7eb0e60291ce41d4c84acaf95bad8972",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93474dbb34591f32e81acad2e18e5bfd",
".git/logs/refs/heads/main": "93474dbb34591f32e81acad2e18e5bfd",
".git/logs/refs/remotes/origin/main": "047bd99a5bdfc88452c003383bc6788d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "14b0bec9dd86945523d77376de84be04",
".git/refs/remotes/origin/main": "14b0bec9dd86945523d77376de84be04",
".git/index": "1cbce12a191086b2f6fe173db89cec93",
".git/COMMIT_EDITMSG": "0254c744e2dd0ab60e4f0d8403201512",
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
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
".idea/vcs.xml": "166acef3d301bd241d0d6da15bc5ad3c",
".idea/workspace.xml": "e5ca3c710bc95deb9ad51335d89b76de",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
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
