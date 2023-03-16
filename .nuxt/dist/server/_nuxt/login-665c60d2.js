import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from "vue";
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
    form: false,
    email: null,
    password: null,
    loading: false
  }),
  methods: {
    onSubmit() {
      if (!this.form)
        return;
      this.loading = true;
      setTimeout(() => this.loading = false, 2e3);
    },
    required(v) {
      return !!v || "Field is required";
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Login to Meeovi"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_sheet = resolveComponent("v-sheet");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_form = resolveComponent("v-form");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_btn = resolveComponent("v-btn");
      _push(ssrRenderComponent(_component_v_sheet, mergeProps({
        class: "bg-deep-purple pa-12",
        rounded: ""
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_card, {
              class: "mx-auto px-6 py-8",
              "max-width": "344"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_form, {
                    modelValue: _ctx.form,
                    "onUpdate:modelValue": ($event) => _ctx.form = $event,
                    onSubmit: _ctx.onSubmit
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: _ctx.email,
                          "onUpdate:modelValue": ($event) => _ctx.email = $event,
                          readonly: _ctx.loading,
                          rules: [_ctx.required],
                          class: "mb-2",
                          clearable: "",
                          label: "Email"
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_text_field, {
                          modelValue: _ctx.password,
                          "onUpdate:modelValue": ($event) => _ctx.password = $event,
                          readonly: _ctx.loading,
                          rules: [_ctx.required],
                          clearable: "",
                          label: "Password",
                          placeholder: "Enter your password"
                        }, null, _parent4, _scopeId3));
                        _push4(`<br${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_btn, {
                          disabled: !_ctx.form,
                          loading: _ctx.loading,
                          block: "",
                          color: "success",
                          size: "large",
                          type: "submit",
                          variant: "elevated"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` Sign In `);
                            } else {
                              return [
                                createTextVNode(" Sign In ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_text_field, {
                            modelValue: _ctx.email,
                            "onUpdate:modelValue": ($event) => _ctx.email = $event,
                            readonly: _ctx.loading,
                            rules: [_ctx.required],
                            class: "mb-2",
                            clearable: "",
                            label: "Email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                          createVNode(_component_v_text_field, {
                            modelValue: _ctx.password,
                            "onUpdate:modelValue": ($event) => _ctx.password = $event,
                            readonly: _ctx.loading,
                            rules: [_ctx.required],
                            clearable: "",
                            label: "Password",
                            placeholder: "Enter your password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                          createVNode("br"),
                          createVNode(_component_v_btn, {
                            disabled: !_ctx.form,
                            loading: _ctx.loading,
                            block: "",
                            color: "success",
                            size: "large",
                            type: "submit",
                            variant: "elevated"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Sign In ")
                            ]),
                            _: 1
                          }, 8, ["disabled", "loading"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_form, {
                      modelValue: _ctx.form,
                      "onUpdate:modelValue": ($event) => _ctx.form = $event,
                      onSubmit: withModifiers(_ctx.onSubmit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_text_field, {
                          modelValue: _ctx.email,
                          "onUpdate:modelValue": ($event) => _ctx.email = $event,
                          readonly: _ctx.loading,
                          rules: [_ctx.required],
                          class: "mb-2",
                          clearable: "",
                          label: "Email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                        createVNode(_component_v_text_field, {
                          modelValue: _ctx.password,
                          "onUpdate:modelValue": ($event) => _ctx.password = $event,
                          readonly: _ctx.loading,
                          rules: [_ctx.required],
                          clearable: "",
                          label: "Password",
                          placeholder: "Enter your password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                        createVNode("br"),
                        createVNode(_component_v_btn, {
                          disabled: !_ctx.form,
                          loading: _ctx.loading,
                          block: "",
                          color: "success",
                          size: "large",
                          type: "submit",
                          variant: "elevated"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Sign In ")
                          ]),
                          _: 1
                        }, 8, ["disabled", "loading"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_card, {
                class: "mx-auto px-6 py-8",
                "max-width": "344"
              }, {
                default: withCtx(() => [
                  createVNode(_component_v_form, {
                    modelValue: _ctx.form,
                    "onUpdate:modelValue": ($event) => _ctx.form = $event,
                    onSubmit: withModifiers(_ctx.onSubmit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.email,
                        "onUpdate:modelValue": ($event) => _ctx.email = $event,
                        readonly: _ctx.loading,
                        rules: [_ctx.required],
                        class: "mb-2",
                        clearable: "",
                        label: "Email"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                      createVNode(_component_v_text_field, {
                        modelValue: _ctx.password,
                        "onUpdate:modelValue": ($event) => _ctx.password = $event,
                        readonly: _ctx.loading,
                        rules: [_ctx.required],
                        clearable: "",
                        label: "Password",
                        placeholder: "Enter your password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "readonly", "rules"]),
                      createVNode("br"),
                      createVNode(_component_v_btn, {
                        disabled: !_ctx.form,
                        loading: _ctx.loading,
                        block: "",
                        color: "success",
                        size: "large",
                        type: "submit",
                        variant: "elevated"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Sign In ")
                        ]),
                        _: 1
                      }, 8, ["disabled", "loading"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/Auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=login-665c60d2.js.map
