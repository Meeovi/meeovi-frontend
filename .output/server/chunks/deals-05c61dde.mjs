import { useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3 } from './16-33a9678d.mjs';
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
  __name: "deals",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Deals"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="header3 cid-twaFvFUoaK mbr-fullscreen mbr-parallax-background" id="header3-3w"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.5" })}"></div><div class="container align-left"><div class="row justify-content-center mbr-white"><div class="mbr-white col-md-12"><h4 class="mbr-section-subtitle mbr-fonts-style align-left pb-2 display-5">Deals under $100</h4><h1 class="mbr-section-title mbr-white mbr-fonts-style align-left display-1">Deals unlike any other</h1><p class="mbr-text pb-3 mbr-fonts-style mbr-white align-left display-7">Meeovi Deals is the best spot to find a great deals that updates every week.\xA0</p></div></div></div></section><section data-bs-version="5.1" class="mbr-section features20 cid-txNm5Y2yB3" id="features20-4q"><div class="container-fluid"><div class="row justify-content-center pt-5"><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Skirt </p><div class="prices align-center"><span class="newPrice mbr-fonts-style mbr-bold display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Jeans </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Denim Jacket </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Leather Jacket </p></div><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=deals-05c61dde.mjs.map
