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
export {
  _sfc_main as default
};
//# sourceMappingURL=exclusives-82d0210e.js.map
