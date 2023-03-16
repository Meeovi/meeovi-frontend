import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderComponent } from "vue/server-renderer";
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
  data: () => ({
    first: null,
    last: null,
    email: null,
    password: null,
    terms: false
  })
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "register",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Register"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_checkbox = resolveComponent("v-checkbox");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      _push(ssrRenderComponent(_component_v_card, mergeProps({
        class: "mx-auto",
        "max-width": "344",
        title: "User Registration"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.first,
                    "onUpdate:modelValue": ($event) => _ctx.first = $event,
                    color: "primary",
                    label: "First name",
                    variant: "underlined"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.last,
                    "onUpdate:modelValue": ($event) => _ctx.last = $event,
                    color: "primary",
                    label: "Last name",
                    variant: "underlined"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    color: "primary",
                    label: "Email",
                    variant: "underlined"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    color: "primary",
                    label: "Password",
                    placeholder: "Enter your password",
                    variant: "underlined"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_checkbox, {
                    modelValue: _ctx.terms,
                    "onUpdate:modelValue": ($event) => _ctx.terms = $event,
                    color: "secondary",
                    label: "I agree to site terms and conditions"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.first,
                      "onUpdate:modelValue": ($event) => _ctx.first = $event,
                      color: "primary",
                      label: "First name",
                      variant: "underlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.last,
                      "onUpdate:modelValue": ($event) => _ctx.last = $event,
                      color: "primary",
                      label: "Last name",
                      variant: "underlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.email,
                      "onUpdate:modelValue": ($event) => _ctx.email = $event,
                      color: "primary",
                      label: "Email",
                      variant: "underlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_text_field, {
                      modelValue: _ctx.password,
                      "onUpdate:modelValue": ($event) => _ctx.password = $event,
                      color: "primary",
                      label: "Password",
                      placeholder: "Enter your password",
                      variant: "underlined"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_v_checkbox, {
                      modelValue: _ctx.terms,
                      "onUpdate:modelValue": ($event) => _ctx.terms = $event,
                      color: "secondary",
                      label: "I agree to site terms and conditions"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_actions, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, { color: "success" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Complete Registration `);
                        _push4(ssrRenderComponent(_component_v_icon, {
                          icon: "mdi-chevron-right",
                          end: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(" Complete Registration "),
                          createVNode(_component_v_icon, {
                            icon: "mdi-chevron-right",
                            end: ""
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_spacer),
                    createVNode(_component_v_btn, { color: "success" }, {
                      default: withCtx(() => [
                        createTextVNode(" Complete Registration "),
                        createVNode(_component_v_icon, {
                          icon: "mdi-chevron-right",
                          end: ""
                        })
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
              createVNode(_component_v_container, null, {
                default: withCtx(() => [
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.first,
                    "onUpdate:modelValue": ($event) => _ctx.first = $event,
                    color: "primary",
                    label: "First name",
                    variant: "underlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.last,
                    "onUpdate:modelValue": ($event) => _ctx.last = $event,
                    color: "primary",
                    label: "Last name",
                    variant: "underlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.email,
                    "onUpdate:modelValue": ($event) => _ctx.email = $event,
                    color: "primary",
                    label: "Email",
                    variant: "underlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_text_field, {
                    modelValue: _ctx.password,
                    "onUpdate:modelValue": ($event) => _ctx.password = $event,
                    color: "primary",
                    label: "Password",
                    placeholder: "Enter your password",
                    variant: "underlined"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_v_checkbox, {
                    modelValue: _ctx.terms,
                    "onUpdate:modelValue": ($event) => _ctx.terms = $event,
                    color: "secondary",
                    label: "I agree to site terms and conditions"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_v_divider),
              createVNode(_component_v_card_actions, null, {
                default: withCtx(() => [
                  createVNode(_component_v_spacer),
                  createVNode(_component_v_btn, { color: "success" }, {
                    default: withCtx(() => [
                      createTextVNode(" Complete Registration "),
                      createVNode(_component_v_icon, {
                        icon: "mdi-chevron-right",
                        end: ""
                      })
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
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Auth/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=register-77248156.js.map
