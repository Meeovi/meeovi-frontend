import { b as buildAssetsURL } from './renderer.mjs';
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0$1 } from './1-e41cf1d9.mjs';
import './server.mjs';
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
const _imports_0 = "" + buildAssetsURL("image12.c1f02d80.jpg");
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
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="pricing1 cid-twaUcnOkam" id="pricing1-4h"><div class="container"><div class="row"><div class="col-12 col-md-6"><img${ssrRenderAttr("src", _imports_0)} class="top" alt=""></div><div class="col-12 col-md-6"><div class="right"><div class="card"><p class="desc1 bord mbr-fonts-style display-4"> SALE</p></div><p class="name mbr-fonts-style display-2"><strong>Diamond Ring</strong></p><div class="price-line"><p class="desc2 mbr-fonts-style display-5"><s>$145.00</s></p><p class="plus1 mbr-fonts-style display-5"><strong>\xA0</strong>$135.00</p></div><p class="mbr-text mbr-fonts-style display-4">Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor. <br><br>Aquia sit amet, elitr, sed diam nonum eirmod tempor invidunt labore et dolore magna aliquyam.erat, sed diam voluptua. At vero accusam et justo duo dolores et ea rebum. Stet clitain vidunt ut labore eirmod tempor invidunt magna aliquyam. Stet clitain vidunt ut labore.</p><div class="mbr-section-btn"><a class="btn btn-secondary display-7" href="">Buy Now</a></div><div class="price-line1"><p class="desc mbr-fonts-style display-7"><strong> Category:</strong></p><p class="plus mbr-fonts-style display-4"> \xA0Rings</p></div><div class="price-line1"><p class="desc mbr-fonts-style display-7"><strong> Tags:</strong>\xA0</p><p class="plus mbr-fonts-style display-4">ring</p></div><div class="price-line1"><p class="desc mbr-fonts-style display-7"><strong> Product ID:</strong></p><p class="plus mbr-fonts-style display-4">2234</p></div></div></div></div></div></section><section data-bs-version="5.1" class="features14 algom5 cid-twaUYmbT4E" id="afeatures14-4i"><div class="container"><div class="row"><div class="col-12 p-0 main-col"><div class="content-container"><div class="col-12 text-container"><div class="iconfont-wrapper"><span class="mbr-iconfont mobi-mbri-photos mobi-mbri"></span></div><div class="text-wrap"><h1 class="mbr-section-title align-center mbr-fonts-style display-2"> Our shared mission. </h1><p class="mbr-text align-center mbr-fonts-style display-4"> Neque convallis a cras semper auctor neque. Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Interdum varius sit amet mattis vulputate enim nulla. Sapien pellentesque habitant morbi tristique. </p></div></div></div></div></div></div></section><section data-bs-version="5.1" class="pricing1 lodgem5 cid-twaVk5oC96" id="apricing1-4j"><div class="container"><div class="row"><div class="col-12"><div class="mbr-section-head"><h3 class="mbr-section-title mbr-fonts-style mb-0 display-5"> Specifications</h3></div><div class="tabl-container"><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-title mbr-fonts-style mb-0 display-7"></p></div><div class="tabl-item-column"><p class="card-title mbr-fonts-style mb-0 display-7"><strong>House and Gardens</strong></p></div><div class="tabl-item-column"><p class="card-title mbr-fonts-style mb-0 display-7"><strong>Gardens Only</strong></p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Children (5-16 years) </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA36.00 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA33.00 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Primary School Parties </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA34.50 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA34.00 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Secondary School Parties </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA38.70 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA35.90 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Mobility Scooter Hire </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> - </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA34.60 </p></div></div><div class="tabl-item-row"><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> Adults/Senior Citizens/Students </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA314.25 </p></div><div class="tabl-item-column"><p class="card-text mbr-fonts-style mb-0 display-7"> \xA36.5 </p></div></div></div></div></div></div></section>`);
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

export { _sfc_main as default };
//# sourceMappingURL=_id_-22362870.mjs.map
