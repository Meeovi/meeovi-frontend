import { resolveComponent, mergeProps, withCtx, createVNode, createTextVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "destr";
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
const _sfc_main = {
  /*      data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
                name: ' ',
                content: ' ',
                image: ' ',
                meta_description: ' ',
                meta_keywords: ' ',
                meta_title: ' '
            }
        },
        methods: {
            addList() {
                const name = this.name;
                const content = this.content;
                const image = this.image;
                // eslint-disable-next-line camelcase
                const meta_title = this.meta_title;
                // eslint-disable-next-line camelcase
                const meta_keywords = this.meta_keywords;
                // eslint-disable-next-line camelcase
                const meta_description = this.meta_description;
                this.$apollo.mutate({
                    mutation: ADD_CATEGORIES,
                    variables: {
                        name,
                        content,
                        image,
                        meta_description,
                        meta_keywords,
                        meta_title,
                    },
                    update: (store, {
                        data: {
                            addList
                        }
                    }) => {
                        // Read data from store for this query
                        const data = store.readQuery({
                            query: findManyCategories,
                            variables: {
                                first: 5,
                                skip: 0,
                                orderBy: 'createdAt_DESC'
                            }
                        })
                        data.allCategories.push(addList)
                        store.writeQuery({
                            query: findManyCategories,
                            variables: {
                                first: 5,
                                skip: 0,
                                orderBy: 'createdAt_DESC'
                            },
                            data
                        })
                    }
                }).then((_data) => {
                    this.$router.push({
                        path: '../../content/categories'
                    })
                }).catch(error => console.error(error));
                this.name = ' ';
                this.content = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
        }, */
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_toolbar = resolveComponent("v-toolbar");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_container = resolveComponent("v-container");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_textarea = resolveComponent("v-textarea");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  const _component_v_spacer = resolveComponent("v-spacer");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
          fullscreen: "",
          scrim: false,
          transition: "dialog-bottom-transition",
          persistent: ""
        }, {
          activator: withCtx(({ props }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, mergeProps(props, { class: "rightAddBtn" }), {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_icon, {
                      start: "",
                      icon: "fas fa-plus"
                    }, null, _parent4, _scopeId3));
                    _push4(`Add List `);
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        start: "",
                        icon: "fas fa-plus"
                      }),
                      createTextVNode("Add List ")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, mergeProps(props, { class: "rightAddBtn" }), {
                  default: withCtx(() => [
                    createVNode(_component_v_icon, {
                      start: "",
                      icon: "fas fa-plus"
                    }),
                    createTextVNode("Add List ")
                  ]),
                  _: 2
                }, 1040)
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_card, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<form method="post"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_v_toolbar, {
                      dark: "",
                      color: "primary"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_btn, {
                            icon: "",
                            dark: "",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_icon, { icon: "fas fa-circle-xmark" }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_card_title, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<span class="text-h6"${_scopeId5}>Create new List</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-h6" }, "Create new List")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_btn, {
                              icon: "",
                              dark: "",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h6" }, "Create new List")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_text, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_container, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(_component_v_row, null, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_text_field, {
                                              modelValue: _ctx.name,
                                              "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                              id: "listName",
                                              label: "List Name*",
                                              required: ""
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_text_field, {
                                                modelValue: _ctx.name,
                                                "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                                id: "listName",
                                                label: "List Name*",
                                                required: ""
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_textarea, {
                                              modelValue: _ctx.content,
                                              "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                              label: "Description",
                                              id: "listDescription"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_textarea, {
                                                modelValue: _ctx.content,
                                                "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                                label: "Description",
                                                id: "listDescription"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_text_field, {
                                              modelValue: _ctx.meta_title,
                                              "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                              label: "Meta Name",
                                              id: "listName"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_text_field, {
                                                modelValue: _ctx.meta_title,
                                                "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                                label: "Meta Name",
                                                id: "listName"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, { cols: "6" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_text_field, {
                                              modelValue: _ctx.meta_keywords,
                                              "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                              label: "Meta Keywords"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_text_field, {
                                                modelValue: _ctx.meta_keywords,
                                                "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                                label: "Meta Keywords"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                      _push7(ssrRenderComponent(_component_v_col, { cols: "12" }, {
                                        default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                          if (_push8) {
                                            _push8(ssrRenderComponent(_component_v_textarea, {
                                              modelValue: _ctx.meta_description,
                                              "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                              label: "Meta Description",
                                              id: "listDescription"
                                            }, null, _parent8, _scopeId7));
                                          } else {
                                            return [
                                              createVNode(_component_v_textarea, {
                                                modelValue: _ctx.meta_description,
                                                "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                                label: "Meta Description",
                                                id: "listDescription"
                                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent7, _scopeId6));
                                    } else {
                                      return [
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: _ctx.name,
                                              "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                              id: "listName",
                                              label: "List Name*",
                                              required: ""
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_textarea, {
                                              modelValue: _ctx.content,
                                              "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                              label: "Description",
                                              id: "listDescription"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: _ctx.meta_title,
                                              "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                              label: "Meta Name",
                                              id: "listName"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "6" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_text_field, {
                                              modelValue: _ctx.meta_keywords,
                                              "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                              label: "Meta Keywords"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_col, { cols: "12" }, {
                                          default: withCtx(() => [
                                            createVNode(_component_v_textarea, {
                                              modelValue: _ctx.meta_description,
                                              "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                              label: "Meta Description",
                                              id: "listDescription"
                                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(_component_v_row, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: _ctx.name,
                                            "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                            id: "listName",
                                            label: "List Name*",
                                            required: ""
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_textarea, {
                                            modelValue: _ctx.content,
                                            "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                            label: "Description",
                                            id: "listDescription"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: _ctx.meta_title,
                                            "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                            label: "Meta Name",
                                            id: "listName"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "6" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_text_field, {
                                            modelValue: _ctx.meta_keywords,
                                            "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                            label: "Meta Keywords"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_col, { cols: "12" }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_textarea, {
                                            modelValue: _ctx.meta_description,
                                            "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                            label: "Meta Description",
                                            id: "listDescription"
                                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
                          }, _parent5, _scopeId4));
                          _push5(`<small${_scopeId4}>*indicates required field</small>`);
                        } else {
                          return [
                            createVNode(_component_v_container, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: _ctx.name,
                                          "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                          id: "listName",
                                          label: "List Name*",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          modelValue: _ctx.content,
                                          "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                          label: "Description",
                                          id: "listDescription"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: _ctx.meta_title,
                                          "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                          label: "Meta Name",
                                          id: "listName"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: _ctx.meta_keywords,
                                          "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                          label: "Meta Keywords"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          modelValue: _ctx.meta_description,
                                          "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                          label: "Meta Description",
                                          id: "listDescription"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("small", null, "*indicates required field")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_card_actions, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_spacer, null, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Close `);
                              } else {
                                return [
                                  createTextVNode(" Close ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Save `);
                              } else {
                                return [
                                  createTextVNode(" Save ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Close ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</form>`);
                  } else {
                    return [
                      createVNode("form", {
                        method: "post",
                        "onVOn:submit": withModifiers(($event) => _ctx.addList(), ["prevent"])
                      }, [
                        createVNode(_component_v_toolbar, {
                          dark: "",
                          color: "primary"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_btn, {
                              icon: "",
                              dark: "",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h6" }, "Create new List")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_text, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_container, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_row, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: _ctx.name,
                                          "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                          id: "listName",
                                          label: "List Name*",
                                          required: ""
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          modelValue: _ctx.content,
                                          "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                          label: "Description",
                                          id: "listDescription"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: _ctx.meta_title,
                                          "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                          label: "Meta Name",
                                          id: "listName"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "6" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_text_field, {
                                          modelValue: _ctx.meta_keywords,
                                          "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                          label: "Meta Keywords"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_col, { cols: "12" }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_textarea, {
                                          modelValue: _ctx.meta_description,
                                          "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                          label: "Meta Description",
                                          id: "listDescription"
                                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode("small", null, "*indicates required field")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_card_actions, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_spacer),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Close ")
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_btn, {
                              color: "blue-darken-1",
                              variant: "text",
                              onClick: ($event) => _ctx.dialog = false
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Save ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ]),
                          _: 1
                        })
                      ], 40, ["onVOn:submit"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode("form", {
                      method: "post",
                      "onVOn:submit": withModifiers(($event) => _ctx.addList(), ["prevent"])
                    }, [
                      createVNode(_component_v_toolbar, {
                        dark: "",
                        color: "primary"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            icon: "",
                            dark: "",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h6" }, "Create new List")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_text, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_container, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_row, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: _ctx.name,
                                        "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                        id: "listName",
                                        label: "List Name*",
                                        required: ""
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        modelValue: _ctx.content,
                                        "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                        label: "Description",
                                        id: "listDescription"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: _ctx.meta_title,
                                        "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                        label: "Meta Name",
                                        id: "listName"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "6" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_text_field, {
                                        modelValue: _ctx.meta_keywords,
                                        "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                        label: "Meta Keywords"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_col, { cols: "12" }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_textarea, {
                                        modelValue: _ctx.meta_description,
                                        "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                        label: "Meta Description",
                                        id: "listDescription"
                                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode("small", null, "*indicates required field")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_card_actions, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_spacer),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Close ")
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_btn, {
                            color: "blue-darken-1",
                            variant: "text",
                            onClick: ($event) => _ctx.dialog = false
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Save ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ]),
                        _: 1
                      })
                    ], 40, ["onVOn:submit"])
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
          createVNode(_component_v_dialog, {
            modelValue: _ctx.dialog,
            "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
            fullscreen: "",
            scrim: false,
            transition: "dialog-bottom-transition",
            persistent: ""
          }, {
            activator: withCtx(({ props }) => [
              createVNode(_component_v_btn, mergeProps(props, { class: "rightAddBtn" }), {
                default: withCtx(() => [
                  createVNode(_component_v_icon, {
                    start: "",
                    icon: "fas fa-plus"
                  }),
                  createTextVNode("Add List ")
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode("form", {
                    method: "post",
                    "onVOn:submit": withModifiers(($event) => _ctx.addList(), ["prevent"])
                  }, [
                    createVNode(_component_v_toolbar, {
                      dark: "",
                      color: "primary"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          icon: "",
                          dark: "",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-h6" }, "Create new List")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_text, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_container, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_row, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: _ctx.name,
                                      "onUpdate:modelValue": ($event) => _ctx.name = $event,
                                      id: "listName",
                                      label: "List Name*",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      modelValue: _ctx.content,
                                      "onUpdate:modelValue": ($event) => _ctx.content = $event,
                                      label: "Description",
                                      id: "listDescription"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: _ctx.meta_title,
                                      "onUpdate:modelValue": ($event) => _ctx.meta_title = $event,
                                      label: "Meta Name",
                                      id: "listName"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "6" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_text_field, {
                                      modelValue: _ctx.meta_keywords,
                                      "onUpdate:modelValue": ($event) => _ctx.meta_keywords = $event,
                                      label: "Meta Keywords"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_col, { cols: "12" }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_textarea, {
                                      modelValue: _ctx.meta_description,
                                      "onUpdate:modelValue": ($event) => _ctx.meta_description = $event,
                                      label: "Meta Description",
                                      id: "listDescription"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode("small", null, "*indicates required field")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_card_actions, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_spacer),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Close ")
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_btn, {
                          color: "blue-darken-1",
                          variant: "text",
                          onClick: ($event) => _ctx.dialog = false
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Save ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ], 40, ["onVOn:submit"])
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
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Admin/User/addAccount/add-list.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const addList = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  addList as default
};
//# sourceMappingURL=add-list-05185cca.js.map
