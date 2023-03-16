import "../server.mjs";
import { useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./background16-0cc92019.js";
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
export {
  _sfc_main as default
};
//# sourceMappingURL=history-8c03657c.js.map
