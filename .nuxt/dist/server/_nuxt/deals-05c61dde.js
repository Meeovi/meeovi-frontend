import "../server.mjs";
import { useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as _imports_3 } from "./16-33a9678d.js";
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
  __name: "deals",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Deals"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="header3 cid-twaFvFUoaK mbr-fullscreen mbr-parallax-background" id="header3-3w"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.5" })}"></div><div class="container align-left"><div class="row justify-content-center mbr-white"><div class="mbr-white col-md-12"><h4 class="mbr-section-subtitle mbr-fonts-style align-left pb-2 display-5">Deals under $100</h4><h1 class="mbr-section-title mbr-white mbr-fonts-style align-left display-1">Deals unlike any other</h1><p class="mbr-text pb-3 mbr-fonts-style mbr-white align-left display-7">Meeovi Deals is the best spot to find a great deals that updates every week. </p></div></div></div></section><section data-bs-version="5.1" class="mbr-section features20 cid-txNm5Y2yB3" id="features20-4q"><div class="container-fluid"><div class="row justify-content-center pt-5"><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Skirt </p><div class="prices align-center"><span class="newPrice mbr-fonts-style mbr-bold display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Jeans </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Denim Jacket </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Leather Jacket </p></div><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/deals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=deals-05c61dde.js.map
