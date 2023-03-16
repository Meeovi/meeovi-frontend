import { useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1 } from './product4-d899b70d.mjs';
import './server.mjs';
import './renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'defu';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'meilisearch';
import 'unified';
import 'mdast-util-to-string';
import 'micromark/lib/preprocess.js';
import 'micromark/lib/postprocess.js';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'remark-emoji';
import 'rehype-slug';
import 'remark-squeeze-paragraphs';
import 'rehype-external-links';
import 'remark-gfm';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import 'remark-mdc';
import 'remark-parse';
import 'remark-rehype';
import 'mdast-util-to-hast';
import 'detab';
import 'unist-builder';
import 'mdurl';
import 'slugify';
import 'unist-util-position';
import 'unist-util-visit';
import 'shiki-es';
import 'unenv/runtime/npm/consola';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'appwrite';
import 'ts-invariant';
import 'zen-observable-ts';
import 'cookie-es';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import '@fortawesome/free-solid-svg-icons';
import 'instantsearch.js/es/connectors/index.js';
import 'mitt';
import 'instantsearch.js/es/lib/utils/index.js';
import 'instantsearch.js/es/widgets/index/index.js';
import 'instantsearch.js/es/index.js';

const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Charts",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Charts"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="info3 cid-skeJzGmaT7" id="info3-i"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.6", "background-color": "rgb(68, 121, 217)" })}"></div><div class="container"><div class="row justify-content-center"><div class="card col-12 col-lg-10"><div class="card-wrapper"><div class="card-box align-center"><h4 class="card-title mbr-fonts-style align-center mb-4 display-1"><strong>Meeovi Charts</strong></h4></div></div></div></div></div></section><section class="content1 cid-skeJD0mzV9" id="content1-j"><div class="container"><div class="row mt-4"><div class="item features-image \u0441ol-12 col-md-6 col-lg-6"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_0)} alt="" title=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-5"><a href="#top" class="text-primary"><strong>Easy and Simple</strong></a></h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>John Smith</strong><em> 10-10-2025</em></h6></div></div></div><div class="item features-image \u0441ol-12 col-md-6 col-lg-6"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_1)} alt="" title=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-5"><a href="#top" class="text-primary"><strong>Automagically Mobile</strong></a></h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Ann Brown</strong><em>\xA009-09-2025</em></h6></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categories/Charts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Charts-6aac03f3.mjs.map
