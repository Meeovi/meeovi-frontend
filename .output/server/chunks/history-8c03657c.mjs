import { useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './background16-0cc92019.mjs';
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
  __name: "history",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Order History"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="info1 cid-tuzvvh2C2A" id="info1-3m"><div class="align-center container"><div class="row justify-content-center"><div class="col-12 col-lg-8"><h3 class="mbr-section-title mb-4 mbr-fonts-style display-1"><strong>Order History</strong></h3></div></div></div></section><section data-bs-version="5.1" class="features10 cid-twaJZmEpe9" id="features10-4d"><div class="container"><div class="row justify-content-center align-items-start"><div class="card px-3 py-4 col-md-4"><div class="card-wrapper flip-card"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt="" title=""><div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-4">Customer story</div></div><div class="card-box"><h3 class="mbr-title mbr-fonts-style align-center display-2">Gift Registry</h3><p class="mbr-card-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-info display-4">Read More</a></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/history.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=history-8c03657c.mjs.map
