import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./1-e41cf1d9.js";
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
  __name: "relatedproducts",
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
                  _push3(`<div class="card card-category"${_scopeId2}><div class="img-wrap" style="${ssrRenderStyle({ "background": "#ffd7d7" })}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)}${_scopeId2}></div><div class="card-body"${_scopeId2}><h4 class="card-title"${_scopeId2}><a href="/product/"${_scopeId2}>Summer shirts</a></h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card card-category" }, [
                      createVNode("div", {
                        class: "img-wrap",
                        style: { "background": "#ffd7d7" }
                      }, [
                        createVNode("img", { src: _imports_0$1 })
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("h4", { class: "card-title" }, [
                          createVNode("a", { href: "/product/" }, "Summer shirts")
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
                      createVNode("img", { src: _imports_0$1 })
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h4", { class: "card-title" }, [
                        createVNode("a", { href: "/product/" }, "Summer shirts")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Related/relatedproducts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const relatedproducts = _sfc_main$1;
const _imports_0 = "" + __buildAssetsURL("image12.c1f02d80.jpg");
const __default__ = {
  components: {
    relatedproducts
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
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h"><div class="container"><div class="row"><div class="col-12 col-md-6"><img${ssrRenderAttr("src", _imports_0)} class="top" alt=""></div><div class="col-12 col-md-6"><div class="right"><div class="card"><p class="desc1 bord mbr-fonts-style display-4"> SALE</p></div><p class="name mbr-fonts-style display-2"><strong>Diamond Ring</strong></p><div class="price-line"><p class="desc2 mbr-fonts-style display-5"><s>$145.00</s></p><p class="plus1 mbr-fonts-style display-5"><strong> </strong>$135.00</p></div><p class="mbr-text mbr-fonts-style display-4">Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor. <br><br>Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna aliquyam. Stet clitain vidunt ut labore.</p><div class="mbr-section-btn"><a class="btn btn-secondary display-7" href="">Buy Now</a></div><div class="price-line1"><p class="desc mbr-fonts-style display-7"><strong> Category:</strong></p><p class="plus mbr-fonts-style display-4">  Rings</p></div><div class="price-line1"><p class="desc mbr-fonts-style display-7"><strong> Tags:</strong> </p><p class="plus mbr-fonts-style display-4">ring</p></div><div class="price-line1"><p class="desc mbr-fonts-style display-7"><strong> Product ID:</strong></p><p class="plus mbr-fonts-style display-4">2234</p></div></div></div></div></div></section><section data-bs-version="5.1" class="features14 algom5 cid-twaUYmbT4E" id="afeatures14-4i"><div class="container"><div class="row"><div class="col-12 p-0 main-col"><div class="content-container"><div class="col-12 text-container"><div class="iconfont-wrapper"><span class="mbr-iconfont mobi-mbri-photos mobi-mbri"></span></div><div class="text-wrap"><h1 class="mbr-section-title align-center mbr-fonts-style display-2"> Our shared mission. </h1><p class="mbr-text align-center mbr-fonts-style display-4"> Neque convallis a cras semper auctor neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Interdum varius sit amet mattis vulputate enim nulla. Sapien pellentesque habitant morbi tristique. </p></div></div></div></div></div></div></section><section data-bs-version="5.1" class="pricing1 lodgem5 cid-twaVk5oC96" id="apricing1-4j"><div class="container"><div class="row"><div class="col-12"><div class="mbr-section-head"><h3 class="mbr-section-title mbr-fonts-style mb-0 display-5"> Specifications</h3></div><div class="tabl-container"><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-title mbr-fonts-style mb-0 display-7"></p></div><div class="tabl-item-column"><p class="card-title mbr-fonts-style mb-0 display-7"><strong>House and Gardens</strong></p></div><div class="tabl-item-column"><p class="card-title mbr-fonts-style mb-0 display-7"><strong>Gardens Only</strong></p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Children (5-16 years) </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £6.00 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £3.00 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Primary School Parties </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £4.50 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £4.00 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Secondary School Parties </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £8.70 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £5.90 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Mobility Scooter Hire </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> - </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £4.60 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Adults/Senior Citizens/Students </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £14.25 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> £6.5 </p></div></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(relatedproducts, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Product/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-22362870.js.map
