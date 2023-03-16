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
  __name: "exclusives",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Exclusives"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="info3 cid-tuzqZ1PJf1" id="info3-39"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.6", "background-color": "rgb(68, 121, 217)" })}"></div><div class="container"><div class="row justify-content-center"><div class="card col-12 col-lg-10"><div class="card-wrapper"><div class="card-box align-center"><h4 class="card-title mbr-fonts-style align-center mb-4 display-1"><strong>Exclusives</strong></h4><p class="mbr-text mbr-fonts-style mb-4 display-7">Things you can only find here on Meeovi.</p></div></div></div></div></div></section><section data-bs-version="5.1" class="mbr-section features20 cid-txNmbfDNcf" id="features20-4r"><div class="container-fluid"><div class="row justify-content-center pt-5"><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Skirt </p><div class="prices align-center"><span class="newPrice mbr-fonts-style mbr-bold display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Jeans </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Denim Jacket </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Leather Jacket </p></div><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categories/exclusives.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=exclusives-82d0210e.mjs.map
