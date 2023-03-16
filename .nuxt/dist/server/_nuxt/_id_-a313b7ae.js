import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./product2-b472875b.js";
import { _ as _imports_0 } from "./1-e41cf1d9.js";
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
const __default__$1 = {};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "relatedstation",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relatedMenu" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card card-category"${_scopeId2}><div class="img-wrap" style="${ssrRenderStyle({ "background": "#ffd7d7" })}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div><div class="card-body"${_scopeId2}><h4 class="card-title"${_scopeId2}><a href="/product/station/"${_scopeId2}>Summer shirts</a></h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card card-category" }, [
                      createVNode("div", {
                        class: "img-wrap",
                        style: { "background": "#ffd7d7" }
                      }, [
                        createVNode("img", { src: _imports_0 })
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("h4", { class: "card-title" }, [
                          createVNode("a", { href: "/product/station/" }, "Summer shirts")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "3" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "card card-category" }, [
                    createVNode("div", {
                      class: "img-wrap",
                      style: { "background": "#ffd7d7" }
                    }, [
                      createVNode("img", { src: _imports_0 })
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h4", { class: "card-title" }, [
                        createVNode("a", { href: "/product/station/" }, "Summer shirts")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Related/relatedstation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const relatedstation = _sfc_main$1;
const __default__ = {
  components: {
    relatedstation
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="content15 cid-so80Ub1nEB" id="content15-1i"><div class="container"><div class="row justify-content-center"><div class="card col-md-12 col-lg-12"><div class="card-wrapper"><div class="card-box align-left"><h4 class="card-title mbr-fonts-style mbr-white mb-3 display-5"><strong>Create Site Now</strong></h4><p class="mbr-text mbr-fonts-style display-7">Click any text to edit or style it. Select text to insert a link. Click blue &quot;Gear&quot; icon in the top right corner to hide/show buttons, text, title and change the block background. Click red &quot;+&quot; in the bottom right corner to add a new block. Use the top left menu to create new pages, sites and add themes.</p></div></div></div></div></div></section><section class="content4 cid-so828e0gEm" id="content4-1k"><div class="container-fluid"><div class="row justify-content-center"><div class="title col-md-12 col-lg-10"><h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2"><strong>Station Reviews</strong></h3><h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5"> You can arrange your articles with the Mobirise website design software. </h4></div></div></div></section><section class="features6 cid-so813ljCHt" id="features7-1j"><div class="container"><div class="card-wrapper"><div class="row align-items-center"><div class="col-12 col-lg-4"><div class="image-wrapper"><img${ssrRenderAttr("src", _imports_0$1)} alt="Mobirise"></div></div><div class="col-12 col-lg"><div class="text-box"><h5 class="mbr-title mbr-fonts-style display-2"><strong>Special Offer</strong></h5><p class="mbr-text mbr-fonts-style display-7">If you&#39;re wondering how to build a website, Mobirise can be the answer. Start creating your website with pre-made blocks and place your own content. Select the theme that suits you. Each theme contains a set of unique blocks.</p></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(relatedstation, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Product/Station/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-a313b7ae.js.map
