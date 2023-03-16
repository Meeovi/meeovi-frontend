import { resolveComponent, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/vue/index.mjs';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/vue/server-renderer/index.mjs';
import './server.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/@unhead/vue/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/@unhead/dom/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/@unhead/ssr/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/appwrite/dist/esm/sdk.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/ts-invariant/lib/invariant.cjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/zen-observable-ts/index.cjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/cookie-es/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/graphql/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/optimism/lib/bundle.cjs.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/@wry/equality/lib/equality.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/@wry/trie/lib/trie.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/@fortawesome/free-solid-svg-icons/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/instantsearch.js/es/connectors/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/mitt/dist/mitt.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/instantsearch.js/es/lib/utils/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/instantsearch.js/es/widgets/index/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/instantsearch.js/es/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/defu/dist/defu.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/radix3/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/meilisearch/dist/bundles/meilisearch.cjs.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unified/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/mdast-util-to-string/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/micromark/lib/preprocess.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/micromark/lib/postprocess.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unist-util-stringify-position/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/micromark-util-character/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/micromark-util-chunked/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/micromark-util-resolve-all/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/remark-emoji/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/rehype-slug/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/remark-squeeze-paragraphs/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/rehype-external-links/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/remark-gfm/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/rehype-sort-attribute-values/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/rehype-sort-attributes/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/rehype-raw/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/remark-mdc/dist/index.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/remark-parse/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/remark-rehype/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/mdast-util-to-hast/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/detab/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unist-builder/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/mdurl/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/slugify/slugify.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unist-util-position/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unist-util-visit/index.js';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file://C:/Users/Basti/OneDrive/Documents/My%20Websites/Handmade%20Sites/Javascript-Projects/Nuxt-Projects/AlternateCMS-Framework/TheMeeoviCompany-Sites/meeovi-frontend/node_modules/unenv/runtime/npm/consola.mjs';

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
