import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './sq4-37b1b45a.mjs';
import { _ as _imports_0$1 } from './1-e41cf1d9.mjs';
import './server.mjs';
import './renderer.mjs';
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
  __name: "relatedposts",
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
                  _push3(`<div class="card card-category"${_scopeId2}><div class="img-wrap" style="${ssrRenderStyle({ "background": "#ffd7d7" })}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0$1)}${_scopeId2}></div><div class="card-body"${_scopeId2}><h4 class="card-title"${_scopeId2}><a href="/blog/"${_scopeId2}>Summer shirts</a></h4></div></div>`);
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
                          createVNode("a", { href: "/blog/" }, "Summer shirts")
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
                        createVNode("a", { href: "/blog/" }, "Summer shirts")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Related/relatedposts.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const relatedpost = _sfc_main$1;
const __default__ = {
  components: {
    relatedpost
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
      _push(`<div${ssrRenderAttrs(_attrs)}><section data-bs-version="5.1" class="header11 cid-txYTnQG6mf" id="header11-5n" data-sortbtn="btn-primary"><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-6 image-wrapper"><img class="w-100"${ssrRenderAttr("src", _imports_0)} alt=""></div><div class="col-12 col-md"><div class="text-wrapper text-center"><h1 class="mbr-section-title mbr-fonts-style mb-3 display-1"><strong>Make Fun Creating</strong></h1><p class="mbr-text mbr-fonts-style display-7"> Make awesome landing pages without coding!</p></div></div></div></div></section><section data-bs-version="5.1" class="content7 cid-txYTqgVHsB" id="content7-5o" data-sortbtn="btn-primary"><div class="container"><div class="row justify-content-center"><div class="col-12 col-md-12"><blockquote><h5 class="mbr-section-title mbr-fonts-style mb-2 display-7"><strong>How mobirise works?</strong></h5><p class="mbr-text mbr-fonts-style display-4">Use Mobirise website building software to create multiple sites for commercial and non-profit projects. Themes in the Mobirise website builder offer multiple blocks: intros, sliders, galleries, forms, articles, and so on. Start a project and click on the red plus buttons to see the blocks available for your theme.</p></blockquote></div></div></div></section>`);
      _push(ssrRenderComponent(relatedpost, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Blog/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-275af462.mjs.map
