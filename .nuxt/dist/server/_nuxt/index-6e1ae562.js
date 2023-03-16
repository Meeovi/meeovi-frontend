import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import _sfc_main$1 from "./account-c40c4da4.js";
import _sfc_main$2 from "./addresses-7983d03b.js";
import _sfc_main$3 from "./history-8c03657c.js";
import _sfc_main$4 from "./lists-f85ad1c5.js";
import _sfc_main$5 from "./my-uploads-8de9c1cb.js";
import _sfc_main$6 from "./recommendations-f0260d86.js";
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
import "./add-address-e9801a6c.js";
import "./background16-0cc92019.js";
import "./13-d731b4fa.js";
const __default__ = {
  components: {
    account: _sfc_main$1,
    addresses: _sfc_main$2,
    history: _sfc_main$3,
    lists: _sfc_main$4,
    uploads: _sfc_main$5,
    recommendations: _sfc_main$6
  },
  data: () => ({
    tab: "option-1"
  })
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Account"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_card = resolveComponent("v-card");
      const _component_v_toolbar = resolveComponent("v-toolbar");
      const _component_v_toolbar_title = resolveComponent("v-toolbar-title");
      const _component_v_tabs = resolveComponent("v-tabs");
      const _component_v_tab = resolveComponent("v-tab");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_window = resolveComponent("v-window");
      const _component_v_window_item = resolveComponent("v-window-item");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "settingsCard" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_card, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_toolbar, { color: "primary" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_toolbar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Account Overview`);
                      } else {
                        return [
                          createTextVNode("Account Overview")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_toolbar_title, null, {
                      default: withCtx(() => [
                        createTextVNode("Account Overview")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_v_tabs, {
              modelValue: _ctx.tab,
              "onUpdate:modelValue": ($event) => _ctx.tab = $event,
              color: "primary"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-1" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-account `);
                            } else {
                              return [
                                createTextVNode(" mdi-account ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Account `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-account ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-2" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-lock `);
                            } else {
                              return [
                                createTextVNode(" mdi-lock ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Addresses `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-lock ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Addresses ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-3" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` History `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" History ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Lists `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Lists ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-5" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` My Uploads `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" My Uploads ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_tab, { value: "option-6" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` mdi-access-point `);
                            } else {
                              return [
                                createTextVNode(" mdi-access-point ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(` Recommendations `);
                      } else {
                        return [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createTextVNode(" mdi-access-point ")
                            ]),
                            _: 1
                          }),
                          createTextVNode(" Recommendations ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_tab, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-account ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Account ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-lock ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Addresses ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" History ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Lists ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Uploads ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Recommendations ")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_card_text, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_window, {
                    modelValue: _ctx.tab,
                    "onUpdate:modelValue": ($event) => _ctx.tab = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "option-1" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$1, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$1)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$1)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "option-2" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$2, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$2)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$2)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "option-3" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$3, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$3)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$3)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "option-4" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$4, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$4)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$4)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "option-5" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$5, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$5)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$5)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_v_window_item, { value: "option-6" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_card, { flat: "" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_sfc_main$6, null, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_sfc_main$6)
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_card, { flat: "" }, {
                                  default: withCtx(() => [
                                    createVNode(_sfc_main$6)
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_window_item, { value: "option-1" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$1)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "option-2" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$2)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "option-3" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$3)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "option-4" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$4)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "option-5" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5)
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_window_item, { value: "option-6" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_card, { flat: "" }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$6)
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
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_window, {
                      modelValue: _ctx.tab,
                      "onUpdate:modelValue": ($event) => _ctx.tab = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "option-1" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$6)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_component_v_toolbar, { color: "primary" }, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Account Overview")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode("div", null, [
                createVNode(_component_v_tabs, {
                  modelValue: _ctx.tab,
                  "onUpdate:modelValue": ($event) => _ctx.tab = $event,
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_v_tab, { value: "option-1" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-account ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Account ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-2" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-lock ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Addresses ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-3" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" History ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-4" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Lists ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-5" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" My Uploads ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_tab, { value: "option-6" }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createTextVNode(" mdi-access-point ")
                          ]),
                          _: 1
                        }),
                        createTextVNode(" Recommendations ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_window, {
                      modelValue: _ctx.tab,
                      "onUpdate:modelValue": ($event) => _ctx.tab = $event
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_window_item, { value: "option-1" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$1)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-2" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$2)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-3" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$3)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-4" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$4)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-5" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_window_item, { value: "option-6" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_card, { flat: "" }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$6)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-6e1ae562.js.map
