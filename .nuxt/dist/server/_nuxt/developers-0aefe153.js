import "../server.mjs";
import { useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/vue";
import "@unhead/dom";
import "@unhead/ssr";
import "vue-router";
import "h3";
import "ufo";
import "appwrite";
import "tslib";
import "ts-invariant";
import "zen-observable-ts";
import "symbol-observable";
import "cookie-es";
import "ohash";
import "graphql";
import "optimism";
import "@wry/equality";
import "@wry/trie";
import "@fortawesome/free-solid-svg-icons";
import "vue-instantsearch/vue3/es";
import "defu";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=developers-0aefe153.js.map
