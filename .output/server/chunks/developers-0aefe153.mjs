import { useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderStyle } from 'vue/server-renderer';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'appwrite';
import 'ts-invariant';
import 'zen-observable-ts';
import 'cookie-es';
import 'ohash';
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
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
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

const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "developers",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Developers"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="header6 cid-skfqnz1SdT mbr-fullscreen" id="header6-y"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.4", "background-color": "rgb(68, 121, 217)" })}"></div><div class="align-center container"><div class="row justify-content-center"><div class="col-12 col-lg-10"><h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1"><strong>Developer Center</strong></h1><p class="mbr-text mbr-white mbr-fonts-style display-7">Use the tools, SDKs, and code samples to get started building your apps that interact with Meeovi&#39;s content. <br><br></p><div class="mbr-section-btn mt-3"><a class="btn btn-danger display-4" href="/advertise">ADVERTISE WITH US</a></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About/developers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=developers-0aefe153.mjs.map
