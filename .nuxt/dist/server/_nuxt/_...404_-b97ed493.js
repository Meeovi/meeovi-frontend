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
const _sfc_main = {
  __name: "[...404]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Oops Error Page"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="header5 cid-t7W19CM5wS mbr-fullscreen mbr-parallax-background" id="header5-2"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.2", "background-color": "rgb(53, 53, 53)" })}"></div><div class="container"><div class="row justify-content-end"><div class="col-12 col-lg-7"><h1 class="mbr-section-title mbr-fonts-style mbr-white mb-3 display-1"><strong>Oops Error Page</strong></h1><p class="mbr-text mbr-fonts-style mbr-white display-7"><a href="/" class="text-primary">Please go back to the homepage.</a></p></div></div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/[...404].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...404_-b97ed493.js.map
