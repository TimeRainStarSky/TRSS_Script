if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const r=e=>a(e,d),b={module:{uri:d},exports:c,require:r};s[d]=Promise.all(f.map((e=>b[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-cc9d59eb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-3e1b86b7.js",revision:"d3ed548548804de2b6781bc8d678d163"},{url:"assets/404.html-f62210e6.js",revision:"68d511e2fb41489e07045673e2001c2f"},{url:"assets/add-html-label-6a460dce.js",revision:"4e1d9ff2f739a1d4c5e11892d5739b1f"},{url:"assets/Android.html-05a6cb7f.js",revision:"e88fd6b3336754083c6e10c170c949c7"},{url:"assets/Android.html-244d60f1.js",revision:"c8747bfacaec2276453d98ff60bc0927"},{url:"assets/app-de77e618.js",revision:"a0cc6438e91e690a4b09c56f27632c1a"},{url:"assets/arc-2a18983c.js",revision:"113c21c1cf966d91c22ffe040c0c481f"},{url:"assets/Arch_Linux-caa6794e.svg",revision:"6d4140d9057919fac74be0efe0ef9bc9"},{url:"assets/Arch_Linux.html-6aa54446.js",revision:"303c8b108c5adc539e8bbe08dfed77f7"},{url:"assets/Arch_Linux.html-d1e23318.js",revision:"37eeb6e4bdb04cd427d3a968d8746c55"},{url:"assets/ArchWSL.html-bc26f7da.js",revision:"4745c198e8876a6388838559791f21d7"},{url:"assets/ArchWSL.html-c117d1da.js",revision:"31865afc8257403c3f6b650155717f44"},{url:"assets/array-9f3ba611.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/auto-ba5ecab5.js",revision:"57b89633667b5b0106aa3e1509a740db"},{url:"assets/c4Diagram-f9e67060-8e40f57c.js",revision:"ff0d1c3f3d4bb951eee95f019024c89b"},{url:"assets/classDiagram-4456d403-0fc4c3f0.js",revision:"538ef90f5cf8c0c1579c103dfd09bdc1"},{url:"assets/classDiagram-v2-539b00ca-6fbe1aad.js",revision:"3de3700b316b3a37f5328520c8fd537b"},{url:"assets/Command.html-2cdd95f9.js",revision:"7d4e84eddd5eef2ef5b3cee205803df1"},{url:"assets/Command.html-97a8057c.js",revision:"704a3c912205066926ec6c56bd60f144"},{url:"assets/component-12a3b358.js",revision:"357f5327a81be61a7c4a8f51a33dd337"},{url:"assets/Docker-21a59e85.svg",revision:"247e66a9db8e235fdc0dbdf1a9a3a9e3"},{url:"assets/Docker.html-545d1966.js",revision:"02cf0d4691de33bbc2bf2116fda7c994"},{url:"assets/Docker.html-ce7d7ce9.js",revision:"ae66af57cb2f4f7b3748ea9db6cec8e6"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/edges-65da65dc-7288b2ca.js",revision:"c73073073dbf124ea29b0d4bde4dd063"},{url:"assets/erDiagram-25977acd-27a84f55.js",revision:"5ea0956448f8965fd24aa1b4109eff4c"},{url:"assets/errorDiagram-bb949655-e8e5727c.js",revision:"d4aff1439c7ddb7f207334bee8b4a604"},{url:"assets/flowchart-35969cab.js",revision:"9e6946328eeacbd52ab4fc11bd4a99f8"},{url:"assets/flowchart-elk-definition-c9fc5e04-63c9730f.js",revision:"b85891a4cfe4e914b843ea977c4fce1f"},{url:"assets/flowDiagram-42bb1e4d-521183af.js",revision:"cd34da9b2b9f5fb19593739fef9236a4"},{url:"assets/flowDiagram-v2-4c9a7611-aef45bde.js",revision:"447b154462abd5073e9a7c93e123de4a"},{url:"assets/framework-7c4de04b.js",revision:"faf10afdaa7aa573106ffb99ea33798c"},{url:"assets/ganttDiagram-41439120-d08882b5.js",revision:"64d674fb3fb50c4b1efb69ef6f0946ea"},{url:"assets/gitGraphDiagram-30dcca6d-2d72e9d2.js",revision:"c3c6c806ee7aab95ff50404b31fecf2a"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index-ade63bb5.js",revision:"55ae4af078c343139023fb1f7cc0cf26"},{url:"assets/index-f9d09cc9-52f47276.js",revision:"84292c6f696b93144d0fb4267a41ba90"},{url:"assets/index.html-03fb9bd9.js",revision:"50a63060c677531e033528f2636cfc45"},{url:"assets/index.html-06ef63f4.js",revision:"11593b95fa38167a06f40ba594dcf921"},{url:"assets/index.html-22a53211.js",revision:"38a46f81c5ad2cae0bd29000bd7e0d70"},{url:"assets/index.html-6426a75b.js",revision:"2a0b9841db6bf55d9bbd640e1d81b366"},{url:"assets/index.html-7e137727.js",revision:"477568ca524a4d58c79dc9c7663ac0f3"},{url:"assets/index.html-9a2c9097.js",revision:"1c647715df0faad7ddb0ddb4df665095"},{url:"assets/index.html-a4ddf5b7.js",revision:"658e16f5a8c1afc6e72337667d1f6f61"},{url:"assets/index.html-ae907e29.js",revision:"d0bfb560fbf0fb3f8d1b3867da5bb485"},{url:"assets/index.html-ebb4eb78.js",revision:"10a4524cabe8c45f8ac2bda13edab1f9"},{url:"assets/index.html-f18a7aa5.js",revision:"d2155753321d6867e75a31eebb8f8d4a"},{url:"assets/infoDiagram-1b335302-40bcbe1e.js",revision:"0dc859894b823705f86626eb7a266ec1"},{url:"assets/init-77b53fdd.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/is_dark-ce052afe.js",revision:"66c10a78e16039cdf63d68e2bf6b947e"},{url:"assets/isPlainObject-ee15858f.js",revision:"7be9e7e1c98abef8911922410064b1d2"},{url:"assets/journeyDiagram-ded66ec9-e4ed0821.js",revision:"2d1f3d8983455e5c67c02e986dc253f2"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/layout-b0d26fb6.js",revision:"284c8dffe8a21b026d5edd509c1a7fba"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/Linux.html-3c353d9b.js",revision:"c66ac6b856872b38cc9795919a89d4af"},{url:"assets/Linux.html-52003c34.js",revision:"4bbeabe45dd42e5544f626b832aad38c"},{url:"assets/Mac.html-49d64266.js",revision:"e5f31c2fb676c7b5ecf62365f6893b6c"},{url:"assets/Mac.html-fc53c546.js",revision:"61f0fd411405bc7b843126672a7e7605"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid.core-5b53bf74.js",revision:"98974f2ad004015666d4acc649180c97"},{url:"assets/mindmap-definition-c8a05b8a-0b1e0563.js",revision:"b9c36d8e8008b0800ed23c0c60fa39c9"},{url:"assets/MSYS2-c5ec5374.svg",revision:"11b66910423a4c02686b6637482a3e5d"},{url:"assets/MSYS2.html-16ec6add.js",revision:"9f5d38b129d0b204289a20ef71b3f60b"},{url:"assets/MSYS2.html-73ffcbfd.js",revision:"aa7870ddd485f4d1dc37b3493bb774b7"},{url:"assets/MTArch.html-209c4531.js",revision:"a27ba9d55f006244d5552f92cf9094ea"},{url:"assets/MTArch.html-8d2a6d24.js",revision:"5ea7a9ab55395d19ef9750f00ff97332"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/path-53f90ab3.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-6e6cbe40.js",revision:"6eca953ad70c9bd1203d174f448404b4"},{url:"assets/pieDiagram-905ac727-9ac2e024.js",revision:"95509d1a6c6c7ad5bea49af20db1bf91"},{url:"assets/requirementDiagram-84e9ae78-e7063ffb.js",revision:"a90e8d29baa9c3fc938e92fbd68cdfc0"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/selectAll-03cc1970.js",revision:"7c4ea43f0baf66d26c8a2757da1cb6f6"},{url:"assets/sequenceDiagram-2c95880e-a17066f0.js",revision:"8ca51b675a90f3a31fd4636a604229c1"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/stateDiagram-95825141-84976b36.js",revision:"4274603768d4483454d264d339eeed76"},{url:"assets/stateDiagram-v2-1cc5d8ed-ecf67074.js",revision:"b7311061c1594746382ce0219b643304"},{url:"assets/style-273dff77.css",revision:"d3a69fed2ea6653de3026e9525036f87"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/styles-0dd3ba1e-5456e1d4.js",revision:"8306b53f189f6b3b64fd5409c8d0f59a"},{url:"assets/styles-4fe3d1fc-2561815c.js",revision:"d4a30c0eada499e34f0095be8a1330bf"},{url:"assets/styles-d6bd7a5e-076ea5c6.js",revision:"0637213d2d7b94469cf8840ed321f9df"},{url:"assets/svgDraw-6a237a99-582dbd62.js",revision:"02374e37c71eb30e9860985b1310ee5e"},{url:"assets/timeline-definition-24ebf147-299eb43e.js",revision:"f36fe39f553d410a89e965c884acc15e"},{url:"assets/TMOE.html-26fa6201.js",revision:"6b2d0ad6a2e9bba846521fd6d8bb8164"},{url:"assets/TMOE.html-a262c129.js",revision:"86e0dbf1df29956c9fdbf800379380b5"},{url:"assets/TRSS_Amiya.html-0e2b91f3.js",revision:"519785cbe30ea945d60c9881d696955d"},{url:"assets/TRSS_Amiya.html-10576dad.js",revision:"0c73484e960d0f8eb3d96d881df31bbf"},{url:"assets/TRSS_Amiya.html-161b53d1.js",revision:"e4765d5398d3b2c843ee4efbf777bcce"},{url:"assets/TRSS_Amiya.html-675c4764.js",revision:"7b5a028956df9afe3b08a1740045928d"},{url:"assets/TRSS_Liteyuki.html-14f53a55.js",revision:"c3fe844c68f625c82070bbc743c0d816"},{url:"assets/TRSS_Liteyuki.html-5f46715c.js",revision:"78505252e370a525daa6aea8cdcd9b15"},{url:"assets/TRSS_Liteyuki.html-86ad1fa3.js",revision:"ff5f1e9c6a4b314a3b11c4f922bd3440"},{url:"assets/TRSS_Liteyuki.html-f8ad63d0.js",revision:"7c4683f293aca4adfeec258240afbdd2"},{url:"assets/TRSS_OneBot.html-28756d24.js",revision:"c5cad540c3b0ddec563482c59ef519ef"},{url:"assets/TRSS_OneBot.html-5384749c.js",revision:"3949474260cafe6b16071791b0140430"},{url:"assets/TRSS_OneBot.html-5af03bb8.js",revision:"ae66a7672092829f23fcaa54feac1587"},{url:"assets/TRSS_OneBot.html-e50dfb09.js",revision:"98518db53f11f67d7237f996a857282a"},{url:"assets/TRSS_Sagiri.html-811c6a48.js",revision:"99c6fc022ecaaeb3a3ebaf34740911ea"},{url:"assets/TRSS_Sagiri.html-c0de1ee9.js",revision:"012ec9ad75a7939959529ddada8bb56b"},{url:"assets/TRSS_Sagiri.html-e3471a30.js",revision:"a1e47f6970a99d4f82f1724e1904aad0"},{url:"assets/TRSS_Sagiri.html-e5c6165b.js",revision:"aa1268657145f240d863dcedd274acb6"},{url:"assets/TRSS_Yunzai.html-183d7211.js",revision:"ebb55a3eefa5dad5128174eade7ff723"},{url:"assets/TRSS_Yunzai.html-88d87ee3.js",revision:"6977c22800a86d3ca738d85a93b3b746"},{url:"assets/TRSS_Yunzai.html-9ba312c6.js",revision:"23e9d48f10dea0b76815b655a9c2a62c"},{url:"assets/TRSS_Yunzai.html-c551f49d.js",revision:"7dab148a9b5b7b78268b0b392a1a1eb4"},{url:"assets/TRSS_Zhenxun.html-09aab698.js",revision:"0a91386f669f5bbb6ed65406f1dc9b8a"},{url:"assets/TRSS_Zhenxun.html-881c88c9.js",revision:"464ebcdd34858c86ce505a664b01f735"},{url:"assets/TRSS_Zhenxun.html-a349032d.js",revision:"77854eafb4a7355a59124a35b268b2f1"},{url:"assets/TRSS_Zhenxun.html-c484f9cb.js",revision:"12c733efcf2bf682893e924c341dabfd"},{url:"assets/vmConsole.html-b944ce95.js",revision:"c5ae1ce48b0f1b23ecebb46634afd158"},{url:"assets/vmConsole.html-c490b428.js",revision:"77eba10d91897d2364f0383a1fe7dae7"},{url:"assets/vue-repl-3401013f.js",revision:"e1a668eb5b57f247181a07579e2677da"},{url:"assets/VuePlayground-09649dcf.js",revision:"75a9e40cd72cc6b14ebd33c5026c2704"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/Windows.html-3c4fcfef.js",revision:"49e69290831bec4de41d796bba74e7ea"},{url:"assets/Windows.html-afdc1c4c.js",revision:"27ee2b1152a39d50e441bd4376c5bc89"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"fonts/InconsolataGo.ttf",revision:"6d5c3f90b931124cd2c3a0ca47494d46"},{url:"404.html",revision:"b149e83b5d3eb9c3baf88ae051691ed5"},{url:"Guide/CLI/index.html",revision:"477fded5feefd9c484a6da2da85d79d3"},{url:"Guide/CLI/TRSS_Amiya.html",revision:"3663fd4e77cf17ee0e47c6baf98a4437"},{url:"Guide/CLI/TRSS_Liteyuki.html",revision:"767de1499ac5507c585008749447e3a4"},{url:"Guide/CLI/TRSS_OneBot.html",revision:"17861e45b25028c8ace3af0fbc5ac8b0"},{url:"Guide/CLI/TRSS_Sagiri.html",revision:"7318021ca295a1ac4ae2e0b16bd890dc"},{url:"Guide/CLI/TRSS_Yunzai.html",revision:"30029e7b35dfaab3415943790f397d34"},{url:"Guide/CLI/TRSS_Zhenxun.html",revision:"c106dddb4339f93602571119f88b33ae"},{url:"Guide/index.html",revision:"830ea8f8aa4c5dae36b5b973d08777db"},{url:"Guide/TUI/Command.html",revision:"677fa1513cee012e4ba35f8985f770d6"},{url:"Guide/TUI/index.html",revision:"ec577471f3b4dbaae81475ba4eaac965"},{url:"Guide/TUI/TRSS_Amiya.html",revision:"6993d051d5cb80e8c88b96ae4b3c755e"},{url:"Guide/TUI/TRSS_Liteyuki.html",revision:"e62b11ad6a9942cf66b142e940e2a27e"},{url:"Guide/TUI/TRSS_OneBot.html",revision:"31e82a625d6ff1ad0fe47bfc18db4137"},{url:"Guide/TUI/TRSS_Sagiri.html",revision:"4b39354fd1fd8ce46cfbfc94ffcc32ab"},{url:"Guide/TUI/TRSS_Yunzai.html",revision:"ce44133f2dd6c56d15c1a0c6f393fcfb"},{url:"Guide/TUI/TRSS_Zhenxun.html",revision:"a0364254fec99950789272f6ab8992f7"},{url:"index.html",revision:"94cc50b8a25275c9bd85db301d8d3fd8"},{url:"Install/Android.html",revision:"d60ea74a223e2afdf07beec7d6acf4a3"},{url:"Install/Arch_Linux.html",revision:"da73636e88a43b7edb69a638e89e970b"},{url:"Install/ArchWSL.html",revision:"74705f896166db3f54d307fba4533f1d"},{url:"Install/Docker.html",revision:"41557bb9824b2b584a3a8d297326f4b8"},{url:"Install/index.html",revision:"826715f167aa884f8d8096d895cc2d0d"},{url:"Install/Linux.html",revision:"d134d6b85b2b36404387db0027a29140"},{url:"Install/Mac.html",revision:"66774767b785d00a2e9fd1135c47af26"},{url:"Install/MSYS2.html",revision:"26dc1d620bc90a78ac69ceea09bcec94"},{url:"Install/MTArch.html",revision:"47d97456bb1632c490383f2c0dfabb8c"},{url:"Install/TMOE.html",revision:"098523b6d4077e74ee4e9f482260febd"},{url:"Install/vmConsole.html",revision:"1e6d53ad3800e744a849b261ce3ede8a"},{url:"Install/Windows.html",revision:"acae8daebc99c4195a98a4fde1871599"},{url:"Install/TMOE/1.jpg",revision:"ee403f77175625119fe9d93935c55e42"},{url:"Install/TMOE/2.jpg",revision:"8add5c99704dfe0f055870d6fe1dab9f"},{url:"Install/TMOE/3.jpg",revision:"292d51312261932d95692f17ffa99ff6"},{url:"Install/TMOE/4.jpg",revision:"8c05f5aec4fd8f2e87e63ab092c9c1d7"},{url:"Install/TMOE/5.jpg",revision:"abcab2ac1d735bbee72c0e2bcec37f00"},{url:"Install/TMOE/6.jpg",revision:"f3d0b6a6669c4409a5eda79aa2243dd9"},{url:"Install/TMOE/7.jpg",revision:"b391a9d29c5bcb80a6fda1eb5ca26e2d"},{url:"Install/TMOE/8.jpg",revision:"0f23127ecca86d2041db38d8cf73864e"},{url:"苏半夏Q.png",revision:"d0d44f4b7e56400a083ce6294771971a"},{url:"苏半夏QD.png",revision:"824a0a8d95de4ed6d9514cf1c1bcb6cd"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
