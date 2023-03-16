import "../server.mjs";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
                        v-col y {
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
            prefetch: v-col ue,
            query: tax
            } 
        }, */
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "account",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      label: "Account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><form method="post">`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.first_name,
                    "onUpdate:modelValue": ($event) => _ctx.first_name = $event,
                    type: "text",
                    label: "First Name",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.first_name,
                      "onUpdate:modelValue": ($event) => _ctx.first_name = $event,
                      type: "text",
                      label: "First Name",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.last_name,
                    "onUpdate:modelValue": ($event) => _ctx.last_name = $event,
                    type: "text",
                    label: "Last Name",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.last_name,
                      "onUpdate:modelValue": ($event) => _ctx.last_name = $event,
                      type: "text",
                      label: "Last Name",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    type: "email",
                    label: "Email",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.email,
                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                      type: "email",
                      label: "Email",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.username,
                    "onUpdate:modelValue": ($event) => _ctx.username = $event,
                    type: "username",
                    label: "Username",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.username,
                      "onUpdate:modelValue": ($event) => _ctx.username = $event,
                      type: "username",
                      label: "Username",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_col, { cols: "12" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    type: "password",
                    label: "Password",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.password,
                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                      type: "password",
                      label: "Password",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.first_name,
                    "onUpdate:modelValue": ($event) => _ctx.first_name = $event,
                    type: "text",
                    label: "First Name",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.last_name,
                    "onUpdate:modelValue": ($event) => _ctx.last_name = $event,
                    type: "text",
                    label: "Last Name",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    type: "email",
                    label: "Email",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.username,
                    "onUpdate:modelValue": ($event) => _ctx.username = $event,
                    type: "username",
                    label: "Username",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_col, { cols: "12" }, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    type: "password",
                    label: "Password",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })
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
              variant: "text"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
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
                variant: "text"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/account.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=account-c40c4da4.js.map
