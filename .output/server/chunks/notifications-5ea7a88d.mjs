import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'h3';
import 'ufo';
import 'destr';
import 'appwrite';
import 'ts-invariant';
import 'zen-observable-ts';
import 'cookie-es';
import 'ohash';
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
import 'defu';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
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

const __default__ = {
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          Notifications: 159
        },
        {
          name: "Ice cream sandwich",
          Notifications: 237
        },
        {
          name: "Eclair",
          Notifications: 262
        },
        {
          name: "Cupcake",
          Notifications: 305
        },
        {
          name: "Gingerbread",
          Notifications: 356
        },
        {
          name: "Jelly bean",
          Notifications: 375
        },
        {
          name: "Lollipop",
          Notifications: 392
        },
        {
          name: "Honeycomb",
          Notifications: 408
        },
        {
          name: "Donut",
          Notifications: 452
        },
        {
          name: "KitKat",
          Notifications: 518
        }
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "notifications",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Notifications"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_table = resolveComponent("v-table");
      _push(ssrRenderComponent(_component_v_table, mergeProps({
        "fixed-header": "",
        height: "300px"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-left"${_scopeId}> Name </th><th class="text-left"${_scopeId}> Notifications </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.name)}</td><td${_scopeId}>${ssrInterpolate(item.Notifications)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, " Name "),
                  createVNode("th", { class: "text-left" }, " Notifications ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.desserts, (item) => {
                  return openBlock(), createBlock("tr", {
                    key: item.name
                  }, [
                    createVNode("td", null, toDisplayString(item.name), 1),
                    createVNode("td", null, toDisplayString(item.Notifications), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/notifications.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=notifications-5ea7a88d.mjs.map
