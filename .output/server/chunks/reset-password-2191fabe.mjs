import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle } from 'vue/server-renderer';
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
  /*      data() {
            return {
                email: " ",
            }
        },
        methods: {
            async addUser() {
                const email = this.email;
                await this.$apollo.mutate({
                    mutation: ADD_USER,
                    variables: {
                        email
                    },
                    update: (cache, {
                        data: {
                            insertStaffMember
                        }
                    }) => {
                        // Read data from cache for this query
                        try {
                            const insertedStaffMember = insertStaffMember.returning;
                            console.log(insertedStaffMember)
                            cache.writeQuery({
                                query: findManyUsers
                            })
                        } catch (err) {
                            console.error(err)
                        }
                    }
                }).then(() => {
                    this.$router.push({
                        path: '../../system/staff-members'
                    })
                }).catch(err => console.log(err));
                this.email = ' ';
            },
        },
        /* apollo: {
            tax: {
            prefetch: true,
            query: tax
            } 
        }, */
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "reset-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Reset Password"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_table = resolveComponent("v-table");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><form method="post">`);
      _push(ssrRenderComponent(_component_v_table, { class: "table" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<tbody${_scopeId}><tr${_scopeId}><td style="${ssrRenderStyle({ "text-align": "right" })}"${_scopeId}>Password</td><td${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: _ctx.password,
              "onUpdate:modelValue": ($event) => _ctx.password = $event,
              type: "password",
              name: "password",
              hint: "Reset your password for your account",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</td></tr><tr${_scopeId}><td style="${ssrRenderStyle({ "text-align": "right" })}"${_scopeId}>Repeat Password</td><td${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_text_field, {
              modelValue: _ctx.password,
              "onUpdate:modelValue": ($event) => _ctx.password = $event,
              type: "password",
              name: "password",
              hint: "Reset your password for your account",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</td></tr></tbody>`);
          } else {
            return [
              createVNode("tbody", null, [
                createVNode("tr", null, [
                  createVNode("td", { style: { "text-align": "right" } }, "Password"),
                  createVNode("td", null, [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.password,
                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                      type: "password",
                      name: "password",
                      hint: "Reset your password for your account",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("tr", null, [
                  createVNode("td", { style: { "text-align": "right" } }, "Repeat Password"),
                  createVNode("td", null, [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.password,
                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                      type: "password",
                      name: "password",
                      hint: "Reset your password for your account",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_v_card_actions, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_spacer, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_btn, {
              color: "blue-darken-1",
              variant: "text",
              onClick: ($event) => _ctx.dialog = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_spacer),
              createVNode(_component_v_btn, {
                color: "blue-darken-1",
                variant: "text",
                onClick: ($event) => _ctx.dialog = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Reset Password ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Auth/reset-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=reset-password-2191fabe.mjs.map
