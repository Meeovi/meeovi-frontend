import "../server.mjs";
import { resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import addAddress from "./add-address-e9801a6c.js";
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
const __default__ = {
  components: { addAddress },
  data() {
    return {
      desserts: [
        {
          name: "Frozen Yogurt",
          Addresses: 159
        },
        {
          name: "Ice cream sandwich",
          Addresses: 237
        },
        {
          name: "Eclair",
          Addresses: 262
        },
        {
          name: "Cupcake",
          Addresses: 305
        },
        {
          name: "Gingerbread",
          Addresses: 356
        },
        {
          name: "Jelly bean",
          Addresses: 375
        },
        {
          name: "Lollipop",
          Addresses: 392
        },
        {
          name: "Honeycomb",
          Addresses: 408
        },
        {
          name: "Donut",
          Addresses: 452
        },
        {
          name: "KitKat",
          Addresses: 518
        }
      ]
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "addresses",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Addresses"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_table = resolveComponent("v-table");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_v_toolbar, { color: "transparent" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_row, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_col, { cols: "9" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<h5${_scopeId3}>My Addresses</h5>`);
                      } else {
                        return [
                          createVNode("h5", null, "My Addresses")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, { cols: "2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(addAddress, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(addAddress)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_col, { cols: "9" }, {
                      default: withCtx(() => [
                        createVNode("h5", null, "My Addresses")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, { cols: "2" }, {
                      default: withCtx(() => [
                        createVNode(addAddress)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_row, null, {
                default: withCtx(() => [
                  createVNode(_component_v_col, { cols: "9" }, {
                    default: withCtx(() => [
                      createVNode("h5", null, "My Addresses")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_col, { cols: "2" }, {
                    default: withCtx(() => [
                      createVNode(addAddress)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_table, { "fixed-header": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<thead${_scopeId}><tr${_scopeId}><th class="text-left"${_scopeId}> Name </th><th class="text-left"${_scopeId}> Addresses </th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(_ctx.desserts, (item) => {
              _push2(`<tr${_scopeId}><td${_scopeId}>${ssrInterpolate(item.name)}</td><td${_scopeId}>${ssrInterpolate(item.Addresses)}</td></tr>`);
            });
            _push2(`<!--]--></tbody>`);
          } else {
            return [
              createVNode("thead", null, [
                createVNode("tr", null, [
                  createVNode("th", { class: "text-left" }, " Name "),
                  createVNode("th", { class: "text-left" }, " Addresses ")
                ])
              ]),
              createVNode("tbody", null, [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.desserts, (item) => {
                  return openBlock(), createBlock("tr", {
                    key: item.name
                  }, [
                    createVNode("td", null, toDisplayString(item.name), 1),
                    createVNode("td", null, toDisplayString(item.Addresses), 1)
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/addresses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=addresses-7983d03b.js.map
