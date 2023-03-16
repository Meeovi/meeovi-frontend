import "../server.mjs";
import { useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./01-69ec5c79.js";
import { _ as _imports_8 } from "./02-dde25c9b.js";
import { _ as _imports_3 } from "./03-0238e7ff.js";
import { _ as _imports_4, a as _imports_5, b as _imports_6 } from "./06-902f019a.js";
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
  __name: "Appstore",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Meeovi Appstore"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="mbr-section features13 cid-txNjPsul0g mbr-parallax-background" id="features13-4p"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.8", "background-color": "rgb(255, 255, 255)" })}"></div><div class="container-fluid"><div class="row"><div class="col-12 text-row col-md-6"><h2 class="align-center pb-3 mbr-fonts-style display-2"> Meeovi Appstore</h2><div class="mbr-section-btn title-btn align-center pt-3"><a class="btn btn-black-outline display-4" href="#">VIEW ALL</a></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_8)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_6)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categories/Appstore.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Appstore-6c0f735c.js.map
