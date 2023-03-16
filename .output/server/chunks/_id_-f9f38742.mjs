import { useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './01-69ec5c79.mjs';
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
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Meeovi Reviews"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="features14 popup-btn-cards cid-txYsEZ3cAx mbr-parallax-background" id="features14-5k" data-sortbtn="btn-primary"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.1", "background-color": "rgb(0, 0, 0)" })}"></div><a class="full-link" href="/"></a><div class="container-fluid card-wrapper"><div class="row justify-content-center align-items-center" style="${ssrRenderStyle({ "min-height": "10vw" })}"><div class="col-xl-10 col-lg-10 col-md-12 text-block"><h2 class="mbr-section-title mbr-fonts-style mbr-light mbr-white mbr-bold display-2">Meeovi Reviews</h2></div></div></div></section><section data-bs-version="5.1" class="features19 cid-txYsKXi4I6" id="features19-5l" data-sortbtn="btn-primary"><div class="container-fluid"><div class="row justify-content-center align-items-start pt-5"><div class="card px-3 py-4 col-12 col-md-6 col-lg-4"><div class="card-wrapper flip-card"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt=""><div class="img-text mbr-text mbr-fonts-style align-center mbr-white display-7"> Reviews</div><div class="img-name mbr-fonts-style mbr-bold mbr-white display-2"> Film &amp; TV</div></div><div class="card-box"><div class="mbr-section-btn align-center"><a href="#" class="btn btn-primary-outline display-4">VIEW ALL</a></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Reviews/ReviewList/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-f9f38742.mjs.map
