import { resolveComponent, withCtx, createVNode, useSSRContext, mergeProps, createTextVNode, ref, withModifiers, renderSlot } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
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
const _sfc_main$5 = {
  data: () => ({
    location: "bottom",
    tab: null
  })
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_v_tab = resolveComponent("v-tab");
  const _component_v_list_item = resolveComponent("v-list-item");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_tabs, {
          modelValue: _ctx.tab,
          "onUpdate:modelValue": ($event) => _ctx.tab = $event,
          style: { "background-color": "indianred", "color": "white" },
          "center-active": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "What's New",
                      value: "",
                      href: "/categories/new"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "What's New",
                        value: "",
                        href: "/categories/new"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Books",
                      value: "",
                      href: "/categories/books"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Books",
                        value: "",
                        href: "/categories/books"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Music",
                      value: "",
                      href: "/categories/music"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Music",
                        value: "",
                        href: "/categories/music"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Theater",
                      value: "",
                      href: "/categories/theater"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Theater",
                        value: "",
                        href: "/categories/theater"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Games",
                      value: "",
                      href: "/categories/games"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Games",
                        value: "",
                        href: "/categories/games"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Podcasts",
                      value: "",
                      href: "/categories/podcasts"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Podcasts",
                        value: "",
                        href: "/categories/podcasts"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Sports & Fitness",
                      value: "",
                      href: "/categories/sportsfitness"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Sports & Fitness",
                        value: "",
                        href: "/categories/sportsfitness"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Newsfeed",
                      value: "",
                      href: "/social/newsfeed"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Newsfeed",
                        value: "",
                        href: "/social/newsfeed"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Groups",
                      value: "",
                      href: "/social/groups"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Groups",
                        value: "",
                        href: "/social/groups"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Coupons",
                      value: "",
                      href: "/commerce/coupons"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Coupons",
                        value: "",
                        href: "/commerce/coupons"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Crafts",
                      value: "",
                      href: "/crafts/"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Crafts",
                        value: "",
                        href: "/crafts/"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Yardsale",
                      value: "",
                      href: "/yardsale/"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Yardsale",
                        value: "",
                        href: "/yardsale/"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Exclusives",
                      value: "",
                      href: "/commerce/exclusives"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Exclusives",
                        value: "",
                        href: "/commerce/exclusives"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Songwriter's Corner",
                      value: "",
                      href: "/categories/songwriters"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Songwriter's Corner",
                        value: "",
                        href: "/categories/songwriters"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Events",
                      value: "",
                      href: "/categories/events"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Events",
                        value: "",
                        href: "/categories/events"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "What's Live",
                      value: "",
                      href: "/categories/live"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "What's Live",
                        value: "",
                        href: "/categories/live"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Returns & Orders",
                      value: "",
                      href: "/commerce/returns/"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Returns & Orders",
                        value: "",
                        href: "/commerce/returns/"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Buy Again",
                      value: "",
                      href: "/commerce/buyagain/"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_list_item, {
                        title: "Buy Again",
                        value: "",
                        href: "/commerce/buyagain/"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "What's New",
                      value: "",
                      href: "/categories/new"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Books",
                      value: "",
                      href: "/categories/books"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Music",
                      value: "",
                      href: "/categories/music"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Theater",
                      value: "",
                      href: "/categories/theater"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Games",
                      value: "",
                      href: "/categories/games"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Podcasts",
                      value: "",
                      href: "/categories/podcasts"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Sports & Fitness",
                      value: "",
                      href: "/categories/sportsfitness"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Newsfeed",
                      value: "",
                      href: "/social/newsfeed"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Groups",
                      value: "",
                      href: "/social/groups"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Coupons",
                      value: "",
                      href: "/commerce/coupons"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Crafts",
                      value: "",
                      href: "/crafts/"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Yardsale",
                      value: "",
                      href: "/yardsale/"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Exclusives",
                      value: "",
                      href: "/commerce/exclusives"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Songwriter's Corner",
                      value: "",
                      href: "/categories/songwriters"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Events",
                      value: "",
                      href: "/categories/events"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "What's Live",
                      value: "",
                      href: "/categories/live"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Returns & Orders",
                      value: "",
                      href: "/commerce/returns/"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item, {
                      title: "Buy Again",
                      value: "",
                      href: "/commerce/buyagain/"
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
          createVNode(_component_v_tabs, {
            modelValue: _ctx.tab,
            "onUpdate:modelValue": ($event) => _ctx.tab = $event,
            style: { "background-color": "indianred", "color": "white" },
            "center-active": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "What's New",
                    value: "",
                    href: "/categories/new"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Books",
                    value: "",
                    href: "/categories/books"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Music",
                    value: "",
                    href: "/categories/music"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Theater",
                    value: "",
                    href: "/categories/theater"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Games",
                    value: "",
                    href: "/categories/games"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Podcasts",
                    value: "",
                    href: "/categories/podcasts"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Sports & Fitness",
                    value: "",
                    href: "/categories/sportsfitness"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Newsfeed",
                    value: "",
                    href: "/social/newsfeed"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Groups",
                    value: "",
                    href: "/social/groups"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Coupons",
                    value: "",
                    href: "/commerce/coupons"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Crafts",
                    value: "",
                    href: "/crafts/"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Yardsale",
                    value: "",
                    href: "/yardsale/"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Exclusives",
                    value: "",
                    href: "/commerce/exclusives"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Songwriter's Corner",
                    value: "",
                    href: "/categories/songwriters"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Events",
                    value: "",
                    href: "/categories/events"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "What's Live",
                    value: "",
                    href: "/categories/live"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Returns & Orders",
                    value: "",
                    href: "/commerce/returns/"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item, {
                    title: "Buy Again",
                    value: "",
                    href: "/commerce/buyagain/"
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
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catbar/categories.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const catbar = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {
  data: () => ({
    tab: null
  })
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_v_tab = resolveComponent("v-tab");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_img = resolveComponent("v-img");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_tabs, {
          class: "livebar",
          modelValue: _ctx.tab,
          "onUpdate:modelValue": ($event) => _ctx.tab = $event,
          "center-active": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_avatar, {
                      icon: "fas fa-plus",
                      color: "info",
                      size: "40"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_avatar, {
                        icon: "fas fa-plus",
                        color: "info",
                        size: "40"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_v_avatar, {
                      color: "info",
                      size: "40"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_img, {
                            src: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt: "John"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_img, {
                              src: "https://cdn.vuetifyjs.com/images/john.jpg",
                              alt: "John"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_avatar, {
                        color: "info",
                        size: "40"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_img, {
                            src: "https://cdn.vuetifyjs.com/images/john.jpg",
                            alt: "John"
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
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_avatar, {
                      icon: "fas fa-plus",
                      color: "info",
                      size: "40"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_avatar, {
                      color: "info",
                      size: "40"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_img, {
                          src: "https://cdn.vuetifyjs.com/images/john.jpg",
                          alt: "John"
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_tabs, {
            class: "livebar",
            modelValue: _ctx.tab,
            "onUpdate:modelValue": ($event) => _ctx.tab = $event,
            "center-active": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_avatar, {
                    icon: "fas fa-plus",
                    color: "info",
                    size: "40"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode(_component_v_avatar, {
                    color: "info",
                    size: "40"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_img, {
                        src: "https://cdn.vuetifyjs.com/images/john.jpg",
                        alt: "John"
                      })
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
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Catbar/live.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const live = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_footer = resolveComponent("v-footer");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_v_list_item = resolveComponent("v-list-item");
  _push(ssrRenderComponent(_component_v_footer, mergeProps({ border: "" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, {
          justify: "center",
          "no-gutters": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h5${_scopeId3}><strong${_scopeId3}>MEEOVI</strong></h5>`);
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "About Us",
                      value: "about us",
                      href: "/about/"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Careers",
                      value: "Careers",
                      href: "/about/careers"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Licenses",
                      value: "Licenses",
                      href: "/about/licenses"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Affiliates",
                      value: "Affiliates",
                      href: "/partner/affiliates"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Diversity & Inclusion",
                      value: "Diversity & Inclusion",
                      href: "/about/dei"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Buyers",
                      value: "Buyers",
                      href: "/about/buyers"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h5", null, [
                        createVNode("strong", null, "MEEOVI")
                      ]),
                      createVNode(_component_v_list_item, {
                        title: "About Us",
                        value: "about us",
                        href: "/about/"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Careers",
                        value: "Careers",
                        href: "/about/careers"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Licenses",
                        value: "Licenses",
                        href: "/about/licenses"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Affiliates",
                        value: "Affiliates",
                        href: "/partner/affiliates"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Diversity & Inclusion",
                        value: "Diversity & Inclusion",
                        href: "/about/dei"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Buyers",
                        value: "Buyers",
                        href: "/about/buyers"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h5${_scopeId3}><strong${_scopeId3}>HELP</strong></h5>`);
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Return Policy",
                      value: "Return Policy",
                      href: "/legal/returns"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Conditions of Use",
                      value: "Conditions of Use",
                      href: "/legal/terms"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Privacy Notice",
                      value: "Privacy Notice",
                      href: "/legal/privacy"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Contact Us",
                      value: "Contact Us",
                      href: "/legal/contact"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Developers",
                      value: "Developers",
                      href: "/about/developers"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Sellers",
                      value: "Sellers",
                      href: "/sell/"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h5", null, [
                        createVNode("strong", null, "HELP")
                      ]),
                      createVNode(_component_v_list_item, {
                        title: "Return Policy",
                        value: "Return Policy",
                        href: "/legal/returns"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Conditions of Use",
                        value: "Conditions of Use",
                        href: "/legal/terms"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Privacy Notice",
                        value: "Privacy Notice",
                        href: "/legal/privacy"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Contact Us",
                        value: "Contact Us",
                        href: "/legal/contact"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Developers",
                        value: "Developers",
                        href: "/about/developers"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Sellers",
                        value: "Sellers",
                        href: "/sell/"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h5${_scopeId3}><strong${_scopeId3}>The Meeovi Company</strong></h5>`);
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Elite Novels",
                      value: "elite novels",
                      href: "https://www.elitenovels.com"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Meeovi Learning",
                      value: "meeovi learning",
                      href: "https://learning.meeovi.com"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Meeovi Notes",
                      value: "meeovi notes",
                      href: "https://notes.meeovi.com"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Meeovi Locate",
                      value: "meeovi locate",
                      href: "https://locate.meeovi.com"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "Collaborrate",
                      value: "collaborrate",
                      href: "https://www.collaborrate.com"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "ShopnCute",
                      value: "shopncute",
                      href: "https://www.shopncute.com"
                    }, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      title: "ShopnBold",
                      value: "shopnbold",
                      href: "https://www.shopnbold.com"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h5", null, [
                        createVNode("strong", null, "The Meeovi Company")
                      ]),
                      createVNode(_component_v_list_item, {
                        title: "Elite Novels",
                        value: "elite novels",
                        href: "https://www.elitenovels.com"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Meeovi Learning",
                        value: "meeovi learning",
                        href: "https://learning.meeovi.com"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Meeovi Notes",
                        value: "meeovi notes",
                        href: "https://notes.meeovi.com"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Meeovi Locate",
                        value: "meeovi locate",
                        href: "https://locate.meeovi.com"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "Collaborrate",
                        value: "collaborrate",
                        href: "https://www.collaborrate.com"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "ShopnCute",
                        value: "shopncute",
                        href: "https://www.shopncute.com"
                      }),
                      createVNode(_component_v_list_item, {
                        title: "ShopnBold",
                        value: "shopnbold",
                        href: "https://www.shopnbold.com"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<h5${_scopeId3}><strong${_scopeId3}>CONNECT</strong></h5>`);
                    _push4(ssrRenderComponent(_component_v_list_item, {
                      class: "fas fa-mobile",
                      title: "Get the App",
                      value: "Get the App",
                      href: "/applications"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode("h5", null, [
                        createVNode("strong", null, "CONNECT")
                      ]),
                      createVNode(_component_v_list_item, {
                        class: "fas fa-mobile",
                        title: "Get the App",
                        value: "Get the App",
                        href: "/applications"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_col, {
                  class: "text-center mt-4",
                  cols: "3"
                }, {
                  default: withCtx(() => [
                    createVNode("h5", null, [
                      createVNode("strong", null, "MEEOVI")
                    ]),
                    createVNode(_component_v_list_item, {
                      title: "About Us",
                      value: "about us",
                      href: "/about/"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Careers",
                      value: "Careers",
                      href: "/about/careers"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Licenses",
                      value: "Licenses",
                      href: "/about/licenses"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Affiliates",
                      value: "Affiliates",
                      href: "/partner/affiliates"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Diversity & Inclusion",
                      value: "Diversity & Inclusion",
                      href: "/about/dei"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Buyers",
                      value: "Buyers",
                      href: "/about/buyers"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  class: "text-center mt-4",
                  cols: "3"
                }, {
                  default: withCtx(() => [
                    createVNode("h5", null, [
                      createVNode("strong", null, "HELP")
                    ]),
                    createVNode(_component_v_list_item, {
                      title: "Return Policy",
                      value: "Return Policy",
                      href: "/legal/returns"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Conditions of Use",
                      value: "Conditions of Use",
                      href: "/legal/terms"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Privacy Notice",
                      value: "Privacy Notice",
                      href: "/legal/privacy"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Contact Us",
                      value: "Contact Us",
                      href: "/legal/contact"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Developers",
                      value: "Developers",
                      href: "/about/developers"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Sellers",
                      value: "Sellers",
                      href: "/sell/"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  class: "text-center mt-4",
                  cols: "3"
                }, {
                  default: withCtx(() => [
                    createVNode("h5", null, [
                      createVNode("strong", null, "The Meeovi Company")
                    ]),
                    createVNode(_component_v_list_item, {
                      title: "Elite Novels",
                      value: "elite novels",
                      href: "https://www.elitenovels.com"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Meeovi Learning",
                      value: "meeovi learning",
                      href: "https://learning.meeovi.com"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Meeovi Notes",
                      value: "meeovi notes",
                      href: "https://notes.meeovi.com"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Meeovi Locate",
                      value: "meeovi locate",
                      href: "https://locate.meeovi.com"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "Collaborrate",
                      value: "collaborrate",
                      href: "https://www.collaborrate.com"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "ShopnCute",
                      value: "shopncute",
                      href: "https://www.shopncute.com"
                    }),
                    createVNode(_component_v_list_item, {
                      title: "ShopnBold",
                      value: "shopnbold",
                      href: "https://www.shopnbold.com"
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_v_col, {
                  class: "text-center mt-4",
                  cols: "3"
                }, {
                  default: withCtx(() => [
                    createVNode("h5", null, [
                      createVNode("strong", null, "CONNECT")
                    ]),
                    createVNode(_component_v_list_item, {
                      class: "fas fa-mobile",
                      title: "Get the App",
                      value: "Get the App",
                      href: "/applications"
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
          createVNode(_component_v_row, {
            justify: "center",
            "no-gutters": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx(() => [
                  createVNode("h5", null, [
                    createVNode("strong", null, "MEEOVI")
                  ]),
                  createVNode(_component_v_list_item, {
                    title: "About Us",
                    value: "about us",
                    href: "/about/"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Careers",
                    value: "Careers",
                    href: "/about/careers"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Licenses",
                    value: "Licenses",
                    href: "/about/licenses"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Affiliates",
                    value: "Affiliates",
                    href: "/partner/affiliates"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Diversity & Inclusion",
                    value: "Diversity & Inclusion",
                    href: "/about/dei"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Buyers",
                    value: "Buyers",
                    href: "/about/buyers"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx(() => [
                  createVNode("h5", null, [
                    createVNode("strong", null, "HELP")
                  ]),
                  createVNode(_component_v_list_item, {
                    title: "Return Policy",
                    value: "Return Policy",
                    href: "/legal/returns"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Conditions of Use",
                    value: "Conditions of Use",
                    href: "/legal/terms"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Privacy Notice",
                    value: "Privacy Notice",
                    href: "/legal/privacy"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Contact Us",
                    value: "Contact Us",
                    href: "/legal/contact"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Developers",
                    value: "Developers",
                    href: "/about/developers"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Sellers",
                    value: "Sellers",
                    href: "/sell/"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx(() => [
                  createVNode("h5", null, [
                    createVNode("strong", null, "The Meeovi Company")
                  ]),
                  createVNode(_component_v_list_item, {
                    title: "Elite Novels",
                    value: "elite novels",
                    href: "https://www.elitenovels.com"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Meeovi Learning",
                    value: "meeovi learning",
                    href: "https://learning.meeovi.com"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Meeovi Notes",
                    value: "meeovi notes",
                    href: "https://notes.meeovi.com"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Meeovi Locate",
                    value: "meeovi locate",
                    href: "https://locate.meeovi.com"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "Collaborrate",
                    value: "collaborrate",
                    href: "https://www.collaborrate.com"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "ShopnCute",
                    value: "shopncute",
                    href: "https://www.shopncute.com"
                  }),
                  createVNode(_component_v_list_item, {
                    title: "ShopnBold",
                    value: "shopnbold",
                    href: "https://www.shopnbold.com"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_v_col, {
                class: "text-center mt-4",
                cols: "3"
              }, {
                default: withCtx(() => [
                  createVNode("h5", null, [
                    createVNode("strong", null, "CONNECT")
                  ]),
                  createVNode(_component_v_list_item, {
                    class: "fas fa-mobile",
                    title: "Get the App",
                    value: "Get the App",
                    href: "/applications"
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
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterNav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {
  data() {
    return {
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_row = resolveComponent("v-row");
  const _component_v_dialog = resolveComponent("v-dialog");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_card = resolveComponent("v-card");
  const _component_v_toolbar = resolveComponent("v-toolbar");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_col = resolveComponent("v-col");
  _push(ssrRenderComponent(_component_v_row, mergeProps({ justify: "center" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_dialog, {
          modelValue: $data.dialog,
          "onUpdate:modelValue": ($event) => $data.dialog = $event,
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
                      icon: "fas fa-bars-staggered"
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_v_icon, {
                        start: "",
                        icon: "fas fa-bars-staggered"
                      })
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
                      icon: "fas fa-bars-staggered"
                    })
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
                    _push4(ssrRenderComponent(_component_v_toolbar, {
                      dark: "",
                      color: "info"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_btn, {
                            icon: "",
                            dark: "",
                            onClick: ($event) => $data.dialog = false
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
                                _push6(`<span class="text-h6"${_scopeId5}>The Meeovi Company</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "text-h6" }, "The Meeovi Company")
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
                              onClick: ($event) => $data.dialog = false
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(_component_v_card_title, null, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-h6" }, "The Meeovi Company")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_v_row, { style: { "padding": "10px" } }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_v_col, { cols: "3" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<a href="https://www.meeovi.com"${_scopeId5}>`);
                                _push6(ssrRenderComponent(_component_v_card, {
                                  class: "mx-auto",
                                  width: "200",
                                  "prepend-icon": "fas fa-shopping-cart"
                                }, {
                                  title: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Meeovi `);
                                    } else {
                                      return [
                                        createTextVNode(" Meeovi ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(`</a>`);
                              } else {
                                return [
                                  createVNode("a", { href: "https://www.meeovi.com" }, [
                                    createVNode(_component_v_card, {
                                      class: "mx-auto",
                                      width: "200",
                                      "prepend-icon": "fas fa-shopping-cart"
                                    }, {
                                      title: withCtx(() => [
                                        createTextVNode(" Meeovi ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_v_col, { cols: "3" }, {
                              default: withCtx(() => [
                                createVNode("a", { href: "https://www.meeovi.com" }, [
                                  createVNode(_component_v_card, {
                                    class: "mx-auto",
                                    width: "200",
                                    "prepend-icon": "fas fa-shopping-cart"
                                  }, {
                                    title: withCtx(() => [
                                      createTextVNode(" Meeovi ")
                                    ]),
                                    _: 1
                                  })
                                ])
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
                      createVNode(_component_v_toolbar, {
                        dark: "",
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            icon: "",
                            dark: "",
                            onClick: ($event) => $data.dialog = false
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(_component_v_card_title, null, {
                            default: withCtx(() => [
                              createVNode("span", { class: "text-h6" }, "The Meeovi Company")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_row, { style: { "padding": "10px" } }, {
                        default: withCtx(() => [
                          createVNode(_component_v_col, { cols: "3" }, {
                            default: withCtx(() => [
                              createVNode("a", { href: "https://www.meeovi.com" }, [
                                createVNode(_component_v_card, {
                                  class: "mx-auto",
                                  width: "200",
                                  "prepend-icon": "fas fa-shopping-cart"
                                }, {
                                  title: withCtx(() => [
                                    createTextVNode(" Meeovi ")
                                  ]),
                                  _: 1
                                })
                              ])
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
                createVNode(_component_v_card, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_toolbar, {
                      dark: "",
                      color: "info"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          icon: "",
                          dark: "",
                          onClick: ($event) => $data.dialog = false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(_component_v_card_title, null, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-h6" }, "The Meeovi Company")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_row, { style: { "padding": "10px" } }, {
                      default: withCtx(() => [
                        createVNode(_component_v_col, { cols: "3" }, {
                          default: withCtx(() => [
                            createVNode("a", { href: "https://www.meeovi.com" }, [
                              createVNode(_component_v_card, {
                                class: "mx-auto",
                                width: "200",
                                "prepend-icon": "fas fa-shopping-cart"
                              }, {
                                title: withCtx(() => [
                                  createTextVNode(" Meeovi ")
                                ]),
                                _: 1
                              })
                            ])
                          ]),
                          _: 1
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_dialog, {
            modelValue: $data.dialog,
            "onUpdate:modelValue": ($event) => $data.dialog = $event,
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
                    icon: "fas fa-bars-staggered"
                  })
                ]),
                _: 2
              }, 1040)
            ]),
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_toolbar, {
                    dark: "",
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_btn, {
                        icon: "",
                        dark: "",
                        onClick: ($event) => $data.dialog = false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_icon, { icon: "fas fa-circle-xmark" })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_v_card_title, null, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-h6" }, "The Meeovi Company")
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_row, { style: { "padding": "10px" } }, {
                    default: withCtx(() => [
                      createVNode(_component_v_col, { cols: "3" }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "https://www.meeovi.com" }, [
                            createVNode(_component_v_card, {
                              class: "mx-auto",
                              width: "200",
                              "prepend-icon": "fas fa-shopping-cart"
                            }, {
                              title: withCtx(() => [
                                createTextVNode(" Meeovi ")
                              ]),
                              _: 1
                            })
                          ])
                        ]),
                        _: 1
                      })
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
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menus/ecosystemmenu.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ecosystemmenu = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ais_instant_search = resolveComponent("ais-instant-search");
  const _component_ais_search_box = resolveComponent("ais-search-box");
  _push(ssrRenderComponent(_component_ais_instant_search, mergeProps({
    "search-client": _ctx.searchClient,
    "index-name": "demo_ecommerce"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_ais_search_box, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_ais_search_box)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search/search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  data() {
    return {
      components: { search, ecosystemmenu, catbar, live },
      drawer: null,
      location: "bottom",
      rail: true,
      loaded: false,
      loading: false
    };
  },
  methods: {
    onClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.loaded = true;
      }, 2e3);
    }
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = ref("light");
    function onClick() {
      theme.value = theme.value === "light" ? "dark" : "light";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_v_app_bar = resolveComponent("v-app-bar");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_app_bar_title = resolveComponent("v-app-bar-title");
      const _component_v_img = resolveComponent("v-img");
      const _component_v_text_field = resolveComponent("v-text-field");
      const _component_v_spacer = resolveComponent("v-spacer");
      const _component_v_col = resolveComponent("v-col");
      const _component_v_menu = resolveComponent("v-menu");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_divider = resolveComponent("v-divider");
      const _component_v_main = resolveComponent("v-main");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_layout = resolveComponent("v-layout");
      const _component_v_navigation_drawer = resolveComponent("v-navigation-drawer");
      const _component_v_list_group = resolveComponent("v-list-group");
      const _component_FooterNav = __nuxt_component_0;
      _push(ssrRenderComponent(_component_v_app, mergeProps({ theme: theme.value }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_app_bar, {
              id: "topnav",
              density: "compact"
            }, {
              prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_btn, {
                    variant: "flat",
                    onClick: ($event) => _ctx.drawer = !_ctx.drawer
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_icon, {
                          start: "",
                          icon: "fas fa-bars"
                        }, null, _parent4, _scopeId3));
                        _push4(` Menu `);
                      } else {
                        return [
                          createVNode(_component_v_icon, {
                            start: "",
                            icon: "fas fa-bars"
                          }),
                          createTextVNode(" Menu ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_btn, {
                      variant: "flat",
                      onClick: ($event) => _ctx.drawer = !_ctx.drawer
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, {
                          start: "",
                          icon: "fas fa-bars"
                        }),
                        createTextVNode(" Menu ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_app_bar_title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="logobrand" href="/"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_v_icon, { start: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_img, { src: "/images/logo.png" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_img, { src: "/images/logo.png" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(`Meeovi </a>`);
                      } else {
                        return [
                          createVNode("a", {
                            class: "logobrand",
                            href: "/"
                          }, [
                            createVNode(_component_v_icon, { start: "" }, {
                              default: withCtx(() => [
                                createVNode(_component_v_img, { src: "/images/logo.png" })
                              ]),
                              _: 1
                            }),
                            createTextVNode("Meeovi ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_text_field, {
                    density: "compact",
                    variant: "solo",
                    label: "Search Meeovi",
                    "append-inner-icon": "fas fa-search",
                    "single-line": "",
                    "hide-details": "",
                    "onClick:appendInner": onClick
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_spacer, null, null, _parent3, _scopeId2));
                  _push3(`<div class="d-flex align-center flex-column flex-sm-row fill-height"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          "prepend-icon": theme.value === "dark" ? "fas fa-sun" : "fas fa-moon",
                          onClick
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            "prepend-icon": theme.value === "dark" ? "fas fa-sun" : "fas fa-moon",
                            onClick
                          }, null, 8, ["prepend-icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-bell"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        start: "",
                                        icon: "fas fa-bell"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-bell"
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "",
                                      value: "",
                                      href: "/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "All Notifications",
                                      value: "notifications",
                                      href: "/admin/user/notifications"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "",
                                        value: "",
                                        href: "/"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_list_item, {
                                        title: "All Notifications",
                                        value: "notifications",
                                        href: "/admin/user/notifications"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "",
                                      value: "",
                                      href: "/"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_list_item, {
                                      title: "All Notifications",
                                      value: "notifications",
                                      href: "/admin/user/notifications"
                                    })
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
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-bell"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "",
                                    value: "",
                                    href: "/"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_list_item, {
                                    title: "All Notifications",
                                    value: "notifications",
                                    href: "/admin/user/notifications"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(ecosystemmenu, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(ecosystemmenu)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-user-circle"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_icon, {
                                        start: "",
                                        icon: "fas fa-user-circle"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                  default: withCtx(() => [
                                    createVNode(_component_v_icon, {
                                      start: "",
                                      icon: "fas fa-user-circle"
                                    })
                                  ]),
                                  _: 2
                                }, 1040)
                              ];
                            }
                          }),
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Account",
                                      value: "Account",
                                      href: "/Admin/User/"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Profile",
                                      value: "Profile",
                                      href: "/Admin/User/profile"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Account",
                                      value: "Account",
                                      href: "/Admin/User/Account"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Addresses",
                                      value: "Addresses",
                                      href: "/Admin/User/Addresses"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "History",
                                      value: "History",
                                      href: "/Admin/User/History"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "My Uploads",
                                      value: "My Uploads",
                                      href: "/Admin/User/my-uploads"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Notifications",
                                      value: "Notifications",
                                      href: "/Admin/User/Notifications"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Recommendations",
                                      value: "Recommendations",
                                      href: "/Admin/User/Recommendations"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Lists",
                                      value: "Lists",
                                      href: "/Admin/User/Lists"
                                    }, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_divider, null, null, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      title: "Logout",
                                      value: "Logout",
                                      href: "/logout"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        title: "Account",
                                        value: "Account",
                                        href: "/Admin/User/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Profile",
                                        value: "Profile",
                                        href: "/Admin/User/profile"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Account",
                                        value: "Account",
                                        href: "/Admin/User/Account"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Addresses",
                                        value: "Addresses",
                                        href: "/Admin/User/Addresses"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "History",
                                        value: "History",
                                        href: "/Admin/User/History"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Uploads",
                                        value: "My Uploads",
                                        href: "/Admin/User/my-uploads"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Notifications",
                                        value: "Notifications",
                                        href: "/Admin/User/Notifications"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Recommendations",
                                        value: "Recommendations",
                                        href: "/Admin/User/Recommendations"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Lists",
                                        value: "Lists",
                                        href: "/Admin/User/Lists"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode(_component_v_list_item, {
                                        title: "Logout",
                                        value: "Logout",
                                        href: "/logout"
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      title: "Account",
                                      value: "Account",
                                      href: "/Admin/User/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Profile",
                                      value: "Profile",
                                      href: "/Admin/User/profile"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Account",
                                      value: "Account",
                                      href: "/Admin/User/Account"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Addresses",
                                      value: "Addresses",
                                      href: "/Admin/User/Addresses"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "History",
                                      value: "History",
                                      href: "/Admin/User/History"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "My Uploads",
                                      value: "My Uploads",
                                      href: "/Admin/User/my-uploads"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Notifications",
                                      value: "Notifications",
                                      href: "/Admin/User/Notifications"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Recommendations",
                                      value: "Recommendations",
                                      href: "/Admin/User/Recommendations"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      title: "Lists",
                                      value: "Lists",
                                      href: "/Admin/User/Lists"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode(_component_v_list_item, {
                                      title: "Logout",
                                      value: "Logout",
                                      href: "/logout"
                                    })
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
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-user-circle"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "Account",
                                    value: "Account",
                                    href: "/Admin/User/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Profile",
                                    value: "Profile",
                                    href: "/Admin/User/profile"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Account",
                                    value: "Account",
                                    href: "/Admin/User/Account"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Addresses",
                                    value: "Addresses",
                                    href: "/Admin/User/Addresses"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "History",
                                    value: "History",
                                    href: "/Admin/User/History"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Uploads",
                                    value: "My Uploads",
                                    href: "/Admin/User/my-uploads"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Notifications",
                                    value: "Notifications",
                                    href: "/Admin/User/Notifications"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Recommendations",
                                    value: "Recommendations",
                                    href: "/Admin/User/Recommendations"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Lists",
                                    value: "Lists",
                                    href: "/Admin/User/Lists"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_list_item, {
                                    title: "Logout",
                                    value: "Logout",
                                    href: "/logout"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_col, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_btn, {
                          variant: "flat",
                          href: "/commerce/cart"
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_icon, {
                                start: "",
                                icon: "fas fa-shopping-cart"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-shopping-cart"
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_btn, {
                            variant: "flat",
                            href: "/commerce/cart"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                start: "",
                                icon: "fas fa-shopping-cart"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode(_component_v_app_bar_title, null, {
                      default: withCtx(() => [
                        createVNode("a", {
                          class: "logobrand",
                          href: "/"
                        }, [
                          createVNode(_component_v_icon, { start: "" }, {
                            default: withCtx(() => [
                              createVNode(_component_v_img, { src: "/images/logo.png" })
                            ]),
                            _: 1
                          }),
                          createTextVNode("Meeovi ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_text_field, {
                      density: "compact",
                      variant: "solo",
                      label: "Search Meeovi",
                      "append-inner-icon": "fas fa-search",
                      "single-line": "",
                      "hide-details": "",
                      "onClick:appendInner": onClick
                    }),
                    createVNode(_component_v_spacer),
                    createVNode("div", { class: "d-flex align-center flex-column flex-sm-row fill-height" }, [
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            "prepend-icon": theme.value === "dark" ? "fas fa-sun" : "fas fa-moon",
                            onClick
                          }, null, 8, ["prepend-icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-bell"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "",
                                    value: "",
                                    href: "/"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_list_item, {
                                    title: "All Notifications",
                                    value: "notifications",
                                    href: "/admin/user/notifications"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(ecosystemmenu)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_menu, {
                            location: _ctx.location,
                            transition: "slide-y-transition"
                          }, {
                            activator: withCtx(({ props }) => [
                              createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, {
                                    start: "",
                                    icon: "fas fa-user-circle"
                                  })
                                ]),
                                _: 2
                              }, 1040)
                            ]),
                            default: withCtx(() => [
                              createVNode(_component_v_list, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    title: "Account",
                                    value: "Account",
                                    href: "/Admin/User/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Profile",
                                    value: "Profile",
                                    href: "/Admin/User/profile"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Account",
                                    value: "Account",
                                    href: "/Admin/User/Account"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Addresses",
                                    value: "Addresses",
                                    href: "/Admin/User/Addresses"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "History",
                                    value: "History",
                                    href: "/Admin/User/History"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "My Uploads",
                                    value: "My Uploads",
                                    href: "/Admin/User/my-uploads"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Notifications",
                                    value: "Notifications",
                                    href: "/Admin/User/Notifications"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Recommendations",
                                    value: "Recommendations",
                                    href: "/Admin/User/Recommendations"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    title: "Lists",
                                    value: "Lists",
                                    href: "/Admin/User/Lists"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode(_component_v_list_item, {
                                    title: "Logout",
                                    value: "Logout",
                                    href: "/logout"
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["location"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_col, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_btn, {
                            variant: "flat",
                            href: "/commerce/cart"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_icon, {
                                start: "",
                                icon: "fas fa-shopping-cart"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_v_main, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_v_card, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_v_layout, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_navigation_drawer, {
                                class: "sidebarSection",
                                modelValue: _ctx.drawer,
                                "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
                                temporary: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item, {
                                      "prepend-avatar": "https://randomuser.me/api/portraits/men/85.jpg",
                                      title: "John Leider",
                                      nav: ""
                                    }, {
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_btn, {
                                            variant: "text",
                                            icon: "fas fa-chevron-left",
                                            onClick: ($event) => _ctx.rail = !_ctx.rail
                                          }, null, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_btn, {
                                              variant: "text",
                                              icon: "fas fa-chevron-left",
                                              onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                                            }, null, 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list, {
                                      density: "compact",
                                      nav: ""
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<h6${_scopeId6}>Trending</h6>`);
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-cart-plus",
                                            title: "What's New",
                                            value: "What's New",
                                            href: "/categories/new"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(`<h6${_scopeId6}>Shop By Category</h6>`);
                                          _push7(ssrRenderComponent(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                            activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-book",
                                                  title: "Books",
                                                  value: "Books",
                                                  href: "/categories/books"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-music",
                                                  title: "Music",
                                                  value: "Music",
                                                  href: "/categories/music"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-play",
                                                  title: "Theater",
                                                  value: "Theater",
                                                  href: "/categories/theater"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-gamepad",
                                                  title: "Games",
                                                  value: "Games",
                                                  href: "/categories/games"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-podcast",
                                                  title: "Podcasts",
                                                  value: "Podcasts",
                                                  href: "/categories/podcasts"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-volleyball",
                                                  title: "Sports & Fitness",
                                                  value: "Sports & Fitness",
                                                  href: "/categories/sportsfitness"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-paw",
                                                  title: "Pets",
                                                  value: "Pets",
                                                  href: "/categories/pets"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-book",
                                                    title: "Books",
                                                    value: "Books",
                                                    href: "/categories/books"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-music",
                                                    title: "Music",
                                                    value: "Music",
                                                    href: "/categories/music"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-play",
                                                    title: "Theater",
                                                    value: "Theater",
                                                    href: "/categories/theater"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-gamepad",
                                                    title: "Games",
                                                    value: "Games",
                                                    href: "/categories/games"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-podcast",
                                                    title: "Podcasts",
                                                    value: "Podcasts",
                                                    href: "/categories/podcasts"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-volleyball",
                                                    title: "Sports & Fitness",
                                                    value: "Sports & Fitness",
                                                    href: "/categories/sportsfitness"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    "prepend-icon": "fas fa-paw",
                                                    title: "Pets",
                                                    value: "Pets",
                                                    href: "/categories/pets"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(`<h6${_scopeId6}>Social</h6>`);
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-video",
                                            title: "Meeovi Live",
                                            value: "live",
                                            href: "/categories/live"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-users",
                                            title: "Social Feed",
                                            value: "feed",
                                            href: "/social/newsfeed"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-people-group",
                                            title: "Groups",
                                            value: "groups",
                                            href: "/social/groups"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(`<h6${_scopeId6}>Department Stores</h6>`);
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-compass-drafting",
                                            title: "Meeovi Crafts",
                                            value: "meeovi crafts",
                                            href: "/crafts/"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-person-shelter",
                                            title: "Meeovi Yardsale",
                                            value: "meeovi yardsale",
                                            href: "/yardsale/"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fab fa-mattress-pillow",
                                            title: "Meeovi Fabrics",
                                            value: "meeovi fabrics",
                                            href: "/fabrics/"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-message",
                                            title: "Meeovi Reviews",
                                            value: "meeovi reviews",
                                            href: "/reviews/"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-tablet-button",
                                            title: "Meeovi Appstore",
                                            value: "meeovi appstore",
                                            href: "/categories/appstore"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(`<h6${_scopeId6}>Deals Corner</h6>`);
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-tablet-button",
                                            title: "Deals",
                                            value: "Deals",
                                            href: "/deals"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_list_item, {
                                            "prepend-icon": "fas fa-tablet-button",
                                            title: "Exclusives",
                                            value: "exclusives",
                                            href: "/categories/exclusives"
                                          }, null, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_v_divider, null, null, _parent7, _scopeId6));
                                          _push7(`<h6${_scopeId6}>My Account</h6>`);
                                          _push7(ssrRenderComponent(_component_v_list_group, {
                                            "prepend-icon": "fas fa-user-circle",
                                            value: "My Account"
                                          }, {
                                            activator: withCtx(({ props }, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                                ];
                                              }
                                            }),
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Account",
                                                  value: "Account",
                                                  href: "/Admin/User/"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Profile",
                                                  value: "Profile",
                                                  href: "/Admin/User/profile"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Account",
                                                  value: "Account",
                                                  href: "/Admin/User/Account"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Addresses",
                                                  value: "Addresses",
                                                  href: "/Admin/User/Addresses"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "History",
                                                  value: "History",
                                                  href: "/Admin/User/History"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "My Uploads",
                                                  value: "My Uploads",
                                                  href: "/Admin/User/my-uploads"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Notifications",
                                                  value: "Notifications",
                                                  href: "/Admin/User/Notifications"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Recommendations",
                                                  value: "Recommendations",
                                                  href: "/Admin/User/Recommendations"
                                                }, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_v_list_item, {
                                                  title: "Lists",
                                                  value: "Lists",
                                                  href: "/Admin/User/Lists"
                                                }, null, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_v_list_item, {
                                                    title: "Account",
                                                    value: "Account",
                                                    href: "/Admin/User/"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "Profile",
                                                    value: "Profile",
                                                    href: "/Admin/User/profile"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "Account",
                                                    value: "Account",
                                                    href: "/Admin/User/Account"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "Addresses",
                                                    value: "Addresses",
                                                    href: "/Admin/User/Addresses"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "History",
                                                    value: "History",
                                                    href: "/Admin/User/History"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "My Uploads",
                                                    value: "My Uploads",
                                                    href: "/Admin/User/my-uploads"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "Notifications",
                                                    value: "Notifications",
                                                    href: "/Admin/User/Notifications"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "Recommendations",
                                                    value: "Recommendations",
                                                    href: "/Admin/User/Recommendations"
                                                  }),
                                                  createVNode(_component_v_list_item, {
                                                    title: "Lists",
                                                    value: "Lists",
                                                    href: "/Admin/User/Lists"
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode("h6", null, "Trending"),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-cart-plus",
                                              title: "What's New",
                                              value: "What's New",
                                              href: "/categories/new"
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode("h6", null, "Shop By Category"),
                                            createVNode(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-book",
                                                  title: "Books",
                                                  value: "Books",
                                                  href: "/categories/books"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-music",
                                                  title: "Music",
                                                  value: "Music",
                                                  href: "/categories/music"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-play",
                                                  title: "Theater",
                                                  value: "Theater",
                                                  href: "/categories/theater"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-gamepad",
                                                  title: "Games",
                                                  value: "Games",
                                                  href: "/categories/games"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-podcast",
                                                  title: "Podcasts",
                                                  value: "Podcasts",
                                                  href: "/categories/podcasts"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-volleyball",
                                                  title: "Sports & Fitness",
                                                  value: "Sports & Fitness",
                                                  href: "/categories/sportsfitness"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  "prepend-icon": "fas fa-paw",
                                                  title: "Pets",
                                                  value: "Pets",
                                                  href: "/categories/pets"
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode("h6", null, "Social"),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-video",
                                              title: "Meeovi Live",
                                              value: "live",
                                              href: "/categories/live"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-users",
                                              title: "Social Feed",
                                              value: "feed",
                                              href: "/social/newsfeed"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-people-group",
                                              title: "Groups",
                                              value: "groups",
                                              href: "/social/groups"
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode("h6", null, "Department Stores"),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-compass-drafting",
                                              title: "Meeovi Crafts",
                                              value: "meeovi crafts",
                                              href: "/crafts/"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-person-shelter",
                                              title: "Meeovi Yardsale",
                                              value: "meeovi yardsale",
                                              href: "/yardsale/"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fab fa-mattress-pillow",
                                              title: "Meeovi Fabrics",
                                              value: "meeovi fabrics",
                                              href: "/fabrics/"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-message",
                                              title: "Meeovi Reviews",
                                              value: "meeovi reviews",
                                              href: "/reviews/"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-tablet-button",
                                              title: "Meeovi Appstore",
                                              value: "meeovi appstore",
                                              href: "/categories/appstore"
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode("h6", null, "Deals Corner"),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-tablet-button",
                                              title: "Deals",
                                              value: "Deals",
                                              href: "/deals"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-tablet-button",
                                              title: "Exclusives",
                                              value: "exclusives",
                                              href: "/categories/exclusives"
                                            }),
                                            createVNode(_component_v_divider),
                                            createVNode("h6", null, "My Account"),
                                            createVNode(_component_v_list_group, {
                                              "prepend-icon": "fas fa-user-circle",
                                              value: "My Account"
                                            }, {
                                              activator: withCtx(({ props }) => [
                                                createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                              ]),
                                              default: withCtx(() => [
                                                createVNode(_component_v_list_item, {
                                                  title: "Account",
                                                  value: "Account",
                                                  href: "/Admin/User/"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "Profile",
                                                  value: "Profile",
                                                  href: "/Admin/User/profile"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "Account",
                                                  value: "Account",
                                                  href: "/Admin/User/Account"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "Addresses",
                                                  value: "Addresses",
                                                  href: "/Admin/User/Addresses"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "History",
                                                  value: "History",
                                                  href: "/Admin/User/History"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "My Uploads",
                                                  value: "My Uploads",
                                                  href: "/Admin/User/my-uploads"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "Notifications",
                                                  value: "Notifications",
                                                  href: "/Admin/User/Notifications"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "Recommendations",
                                                  value: "Recommendations",
                                                  href: "/Admin/User/Recommendations"
                                                }),
                                                createVNode(_component_v_list_item, {
                                                  title: "Lists",
                                                  value: "Lists",
                                                  href: "/Admin/User/Lists"
                                                })
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_spacer, null, null, _parent6, _scopeId5));
                                    _push6(`<div class="pa-2"${_scopeId5}>`);
                                    _push6(ssrRenderComponent(_component_v_btn, { block: "" }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` Logout `);
                                        } else {
                                          return [
                                            createTextVNode(" Logout ")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(`</div>`);
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item, {
                                        "prepend-avatar": "https://randomuser.me/api/portraits/men/85.jpg",
                                        title: "John Leider",
                                        nav: ""
                                      }, {
                                        append: withCtx(() => [
                                          createVNode(_component_v_btn, {
                                            variant: "text",
                                            icon: "fas fa-chevron-left",
                                            onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                                          }, null, 8, ["onClick"])
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_list, {
                                        density: "compact",
                                        nav: ""
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("h6", null, "Trending"),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-cart-plus",
                                            title: "What's New",
                                            value: "What's New",
                                            href: "/categories/new"
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode("h6", null, "Shop By Category"),
                                          createVNode(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-book",
                                                title: "Books",
                                                value: "Books",
                                                href: "/categories/books"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-music",
                                                title: "Music",
                                                value: "Music",
                                                href: "/categories/music"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-play",
                                                title: "Theater",
                                                value: "Theater",
                                                href: "/categories/theater"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-gamepad",
                                                title: "Games",
                                                value: "Games",
                                                href: "/categories/games"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-podcast",
                                                title: "Podcasts",
                                                value: "Podcasts",
                                                href: "/categories/podcasts"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-volleyball",
                                                title: "Sports & Fitness",
                                                value: "Sports & Fitness",
                                                href: "/categories/sportsfitness"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                "prepend-icon": "fas fa-paw",
                                                title: "Pets",
                                                value: "Pets",
                                                href: "/categories/pets"
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode("h6", null, "Social"),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-video",
                                            title: "Meeovi Live",
                                            value: "live",
                                            href: "/categories/live"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-users",
                                            title: "Social Feed",
                                            value: "feed",
                                            href: "/social/newsfeed"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-people-group",
                                            title: "Groups",
                                            value: "groups",
                                            href: "/social/groups"
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode("h6", null, "Department Stores"),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-compass-drafting",
                                            title: "Meeovi Crafts",
                                            value: "meeovi crafts",
                                            href: "/crafts/"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-person-shelter",
                                            title: "Meeovi Yardsale",
                                            value: "meeovi yardsale",
                                            href: "/yardsale/"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fab fa-mattress-pillow",
                                            title: "Meeovi Fabrics",
                                            value: "meeovi fabrics",
                                            href: "/fabrics/"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-message",
                                            title: "Meeovi Reviews",
                                            value: "meeovi reviews",
                                            href: "/reviews/"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-tablet-button",
                                            title: "Meeovi Appstore",
                                            value: "meeovi appstore",
                                            href: "/categories/appstore"
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode("h6", null, "Deals Corner"),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-tablet-button",
                                            title: "Deals",
                                            value: "Deals",
                                            href: "/deals"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-tablet-button",
                                            title: "Exclusives",
                                            value: "exclusives",
                                            href: "/categories/exclusives"
                                          }),
                                          createVNode(_component_v_divider),
                                          createVNode("h6", null, "My Account"),
                                          createVNode(_component_v_list_group, {
                                            "prepend-icon": "fas fa-user-circle",
                                            value: "My Account"
                                          }, {
                                            activator: withCtx(({ props }) => [
                                              createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                            ]),
                                            default: withCtx(() => [
                                              createVNode(_component_v_list_item, {
                                                title: "Account",
                                                value: "Account",
                                                href: "/Admin/User/"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "Profile",
                                                value: "Profile",
                                                href: "/Admin/User/profile"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "Account",
                                                value: "Account",
                                                href: "/Admin/User/Account"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "Addresses",
                                                value: "Addresses",
                                                href: "/Admin/User/Addresses"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "History",
                                                value: "History",
                                                href: "/Admin/User/History"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "My Uploads",
                                                value: "My Uploads",
                                                href: "/Admin/User/my-uploads"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "Notifications",
                                                value: "Notifications",
                                                href: "/Admin/User/Notifications"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "Recommendations",
                                                value: "Recommendations",
                                                href: "/Admin/User/Recommendations"
                                              }),
                                              createVNode(_component_v_list_item, {
                                                title: "Lists",
                                                value: "Lists",
                                                href: "/Admin/User/Lists"
                                              })
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_spacer),
                                      createVNode("div", { class: "pa-2" }, [
                                        createVNode(_component_v_btn, { block: "" }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Logout ")
                                          ]),
                                          _: 1
                                        })
                                      ])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_v_main, { id: "sidebarNav" }, null, _parent5, _scopeId4));
                              _push5(`<main id="mainSection"${_scopeId4}>`);
                              _push5(ssrRenderComponent(live, null, null, _parent5, _scopeId4));
                              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push5, _parent5, _scopeId4);
                              _push5(`</main>`);
                            } else {
                              return [
                                createVNode(_component_v_navigation_drawer, {
                                  class: "sidebarSection",
                                  modelValue: _ctx.drawer,
                                  "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
                                  temporary: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item, {
                                      "prepend-avatar": "https://randomuser.me/api/portraits/men/85.jpg",
                                      title: "John Leider",
                                      nav: ""
                                    }, {
                                      append: withCtx(() => [
                                        createVNode(_component_v_btn, {
                                          variant: "text",
                                          icon: "fas fa-chevron-left",
                                          onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                                        }, null, 8, ["onClick"])
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_list, {
                                      density: "compact",
                                      nav: ""
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("h6", null, "Trending"),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-cart-plus",
                                          title: "What's New",
                                          value: "What's New",
                                          href: "/categories/new"
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode("h6", null, "Shop By Category"),
                                        createVNode(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-book",
                                              title: "Books",
                                              value: "Books",
                                              href: "/categories/books"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-music",
                                              title: "Music",
                                              value: "Music",
                                              href: "/categories/music"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-play",
                                              title: "Theater",
                                              value: "Theater",
                                              href: "/categories/theater"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-gamepad",
                                              title: "Games",
                                              value: "Games",
                                              href: "/categories/games"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-podcast",
                                              title: "Podcasts",
                                              value: "Podcasts",
                                              href: "/categories/podcasts"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-volleyball",
                                              title: "Sports & Fitness",
                                              value: "Sports & Fitness",
                                              href: "/categories/sportsfitness"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              "prepend-icon": "fas fa-paw",
                                              title: "Pets",
                                              value: "Pets",
                                              href: "/categories/pets"
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode("h6", null, "Social"),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-video",
                                          title: "Meeovi Live",
                                          value: "live",
                                          href: "/categories/live"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-users",
                                          title: "Social Feed",
                                          value: "feed",
                                          href: "/social/newsfeed"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-people-group",
                                          title: "Groups",
                                          value: "groups",
                                          href: "/social/groups"
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode("h6", null, "Department Stores"),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-compass-drafting",
                                          title: "Meeovi Crafts",
                                          value: "meeovi crafts",
                                          href: "/crafts/"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-person-shelter",
                                          title: "Meeovi Yardsale",
                                          value: "meeovi yardsale",
                                          href: "/yardsale/"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fab fa-mattress-pillow",
                                          title: "Meeovi Fabrics",
                                          value: "meeovi fabrics",
                                          href: "/fabrics/"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-message",
                                          title: "Meeovi Reviews",
                                          value: "meeovi reviews",
                                          href: "/reviews/"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-tablet-button",
                                          title: "Meeovi Appstore",
                                          value: "meeovi appstore",
                                          href: "/categories/appstore"
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode("h6", null, "Deals Corner"),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-tablet-button",
                                          title: "Deals",
                                          value: "Deals",
                                          href: "/deals"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-tablet-button",
                                          title: "Exclusives",
                                          value: "exclusives",
                                          href: "/categories/exclusives"
                                        }),
                                        createVNode(_component_v_divider),
                                        createVNode("h6", null, "My Account"),
                                        createVNode(_component_v_list_group, {
                                          "prepend-icon": "fas fa-user-circle",
                                          value: "My Account"
                                        }, {
                                          activator: withCtx(({ props }) => [
                                            createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                          ]),
                                          default: withCtx(() => [
                                            createVNode(_component_v_list_item, {
                                              title: "Account",
                                              value: "Account",
                                              href: "/Admin/User/"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "Profile",
                                              value: "Profile",
                                              href: "/Admin/User/profile"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "Account",
                                              value: "Account",
                                              href: "/Admin/User/Account"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "Addresses",
                                              value: "Addresses",
                                              href: "/Admin/User/Addresses"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "History",
                                              value: "History",
                                              href: "/Admin/User/History"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "My Uploads",
                                              value: "My Uploads",
                                              href: "/Admin/User/my-uploads"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "Notifications",
                                              value: "Notifications",
                                              href: "/Admin/User/Notifications"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "Recommendations",
                                              value: "Recommendations",
                                              href: "/Admin/User/Recommendations"
                                            }),
                                            createVNode(_component_v_list_item, {
                                              title: "Lists",
                                              value: "Lists",
                                              href: "/Admin/User/Lists"
                                            })
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_spacer),
                                    createVNode("div", { class: "pa-2" }, [
                                      createVNode(_component_v_btn, { block: "" }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Logout ")
                                        ]),
                                        _: 1
                                      })
                                    ])
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"]),
                                createVNode(_component_v_main, { id: "sidebarNav" }),
                                createVNode("main", { id: "mainSection" }, [
                                  createVNode(live),
                                  renderSlot(_ctx.$slots, "default")
                                ])
                              ];
                            }
                          }),
                          _: 3
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_v_layout, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_navigation_drawer, {
                                class: "sidebarSection",
                                modelValue: _ctx.drawer,
                                "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
                                temporary: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item, {
                                    "prepend-avatar": "https://randomuser.me/api/portraits/men/85.jpg",
                                    title: "John Leider",
                                    nav: ""
                                  }, {
                                    append: withCtx(() => [
                                      createVNode(_component_v_btn, {
                                        variant: "text",
                                        icon: "fas fa-chevron-left",
                                        onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                                      }, null, 8, ["onClick"])
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_list, {
                                    density: "compact",
                                    nav: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("h6", null, "Trending"),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-cart-plus",
                                        title: "What's New",
                                        value: "What's New",
                                        href: "/categories/new"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode("h6", null, "Shop By Category"),
                                      createVNode(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-book",
                                            title: "Books",
                                            value: "Books",
                                            href: "/categories/books"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-music",
                                            title: "Music",
                                            value: "Music",
                                            href: "/categories/music"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-play",
                                            title: "Theater",
                                            value: "Theater",
                                            href: "/categories/theater"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-gamepad",
                                            title: "Games",
                                            value: "Games",
                                            href: "/categories/games"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-podcast",
                                            title: "Podcasts",
                                            value: "Podcasts",
                                            href: "/categories/podcasts"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-volleyball",
                                            title: "Sports & Fitness",
                                            value: "Sports & Fitness",
                                            href: "/categories/sportsfitness"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            "prepend-icon": "fas fa-paw",
                                            title: "Pets",
                                            value: "Pets",
                                            href: "/categories/pets"
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode("h6", null, "Social"),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-video",
                                        title: "Meeovi Live",
                                        value: "live",
                                        href: "/categories/live"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-users",
                                        title: "Social Feed",
                                        value: "feed",
                                        href: "/social/newsfeed"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-people-group",
                                        title: "Groups",
                                        value: "groups",
                                        href: "/social/groups"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode("h6", null, "Department Stores"),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-compass-drafting",
                                        title: "Meeovi Crafts",
                                        value: "meeovi crafts",
                                        href: "/crafts/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-person-shelter",
                                        title: "Meeovi Yardsale",
                                        value: "meeovi yardsale",
                                        href: "/yardsale/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fab fa-mattress-pillow",
                                        title: "Meeovi Fabrics",
                                        value: "meeovi fabrics",
                                        href: "/fabrics/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-message",
                                        title: "Meeovi Reviews",
                                        value: "meeovi reviews",
                                        href: "/reviews/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-tablet-button",
                                        title: "Meeovi Appstore",
                                        value: "meeovi appstore",
                                        href: "/categories/appstore"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode("h6", null, "Deals Corner"),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-tablet-button",
                                        title: "Deals",
                                        value: "Deals",
                                        href: "/deals"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-tablet-button",
                                        title: "Exclusives",
                                        value: "exclusives",
                                        href: "/categories/exclusives"
                                      }),
                                      createVNode(_component_v_divider),
                                      createVNode("h6", null, "My Account"),
                                      createVNode(_component_v_list_group, {
                                        "prepend-icon": "fas fa-user-circle",
                                        value: "My Account"
                                      }, {
                                        activator: withCtx(({ props }) => [
                                          createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                        ]),
                                        default: withCtx(() => [
                                          createVNode(_component_v_list_item, {
                                            title: "Account",
                                            value: "Account",
                                            href: "/Admin/User/"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "Profile",
                                            value: "Profile",
                                            href: "/Admin/User/profile"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "Account",
                                            value: "Account",
                                            href: "/Admin/User/Account"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "Addresses",
                                            value: "Addresses",
                                            href: "/Admin/User/Addresses"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "History",
                                            value: "History",
                                            href: "/Admin/User/History"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "My Uploads",
                                            value: "My Uploads",
                                            href: "/Admin/User/my-uploads"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "Notifications",
                                            value: "Notifications",
                                            href: "/Admin/User/Notifications"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "Recommendations",
                                            value: "Recommendations",
                                            href: "/Admin/User/Recommendations"
                                          }),
                                          createVNode(_component_v_list_item, {
                                            title: "Lists",
                                            value: "Lists",
                                            href: "/Admin/User/Lists"
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_spacer),
                                  createVNode("div", { class: "pa-2" }, [
                                    createVNode(_component_v_btn, { block: "" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Logout ")
                                      ]),
                                      _: 1
                                    })
                                  ])
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_v_main, { id: "sidebarNav" }),
                              createVNode("main", { id: "mainSection" }, [
                                createVNode(live),
                                renderSlot(_ctx.$slots, "default")
                              ])
                            ]),
                            _: 3
                          })
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_FooterNav, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_v_card, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_layout, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_navigation_drawer, {
                              class: "sidebarSection",
                              modelValue: _ctx.drawer,
                              "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
                              temporary: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  "prepend-avatar": "https://randomuser.me/api/portraits/men/85.jpg",
                                  title: "John Leider",
                                  nav: ""
                                }, {
                                  append: withCtx(() => [
                                    createVNode(_component_v_btn, {
                                      variant: "text",
                                      icon: "fas fa-chevron-left",
                                      onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                                    }, null, 8, ["onClick"])
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_list, {
                                  density: "compact",
                                  nav: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode("h6", null, "Trending"),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-cart-plus",
                                      title: "What's New",
                                      value: "What's New",
                                      href: "/categories/new"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode("h6", null, "Shop By Category"),
                                    createVNode(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-book",
                                          title: "Books",
                                          value: "Books",
                                          href: "/categories/books"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-music",
                                          title: "Music",
                                          value: "Music",
                                          href: "/categories/music"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-play",
                                          title: "Theater",
                                          value: "Theater",
                                          href: "/categories/theater"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-gamepad",
                                          title: "Games",
                                          value: "Games",
                                          href: "/categories/games"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-podcast",
                                          title: "Podcasts",
                                          value: "Podcasts",
                                          href: "/categories/podcasts"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-volleyball",
                                          title: "Sports & Fitness",
                                          value: "Sports & Fitness",
                                          href: "/categories/sportsfitness"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          "prepend-icon": "fas fa-paw",
                                          title: "Pets",
                                          value: "Pets",
                                          href: "/categories/pets"
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode("h6", null, "Social"),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-video",
                                      title: "Meeovi Live",
                                      value: "live",
                                      href: "/categories/live"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-users",
                                      title: "Social Feed",
                                      value: "feed",
                                      href: "/social/newsfeed"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-people-group",
                                      title: "Groups",
                                      value: "groups",
                                      href: "/social/groups"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode("h6", null, "Department Stores"),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-compass-drafting",
                                      title: "Meeovi Crafts",
                                      value: "meeovi crafts",
                                      href: "/crafts/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-person-shelter",
                                      title: "Meeovi Yardsale",
                                      value: "meeovi yardsale",
                                      href: "/yardsale/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fab fa-mattress-pillow",
                                      title: "Meeovi Fabrics",
                                      value: "meeovi fabrics",
                                      href: "/fabrics/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-message",
                                      title: "Meeovi Reviews",
                                      value: "meeovi reviews",
                                      href: "/reviews/"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-tablet-button",
                                      title: "Meeovi Appstore",
                                      value: "meeovi appstore",
                                      href: "/categories/appstore"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode("h6", null, "Deals Corner"),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-tablet-button",
                                      title: "Deals",
                                      value: "Deals",
                                      href: "/deals"
                                    }),
                                    createVNode(_component_v_list_item, {
                                      "prepend-icon": "fas fa-tablet-button",
                                      title: "Exclusives",
                                      value: "exclusives",
                                      href: "/categories/exclusives"
                                    }),
                                    createVNode(_component_v_divider),
                                    createVNode("h6", null, "My Account"),
                                    createVNode(_component_v_list_group, {
                                      "prepend-icon": "fas fa-user-circle",
                                      value: "My Account"
                                    }, {
                                      activator: withCtx(({ props }) => [
                                        createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                      ]),
                                      default: withCtx(() => [
                                        createVNode(_component_v_list_item, {
                                          title: "Account",
                                          value: "Account",
                                          href: "/Admin/User/"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "Profile",
                                          value: "Profile",
                                          href: "/Admin/User/profile"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "Account",
                                          value: "Account",
                                          href: "/Admin/User/Account"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "Addresses",
                                          value: "Addresses",
                                          href: "/Admin/User/Addresses"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "History",
                                          value: "History",
                                          href: "/Admin/User/History"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "My Uploads",
                                          value: "My Uploads",
                                          href: "/Admin/User/my-uploads"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "Notifications",
                                          value: "Notifications",
                                          href: "/Admin/User/Notifications"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "Recommendations",
                                          value: "Recommendations",
                                          href: "/Admin/User/Recommendations"
                                        }),
                                        createVNode(_component_v_list_item, {
                                          title: "Lists",
                                          value: "Lists",
                                          href: "/Admin/User/Lists"
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_v_spacer),
                                createVNode("div", { class: "pa-2" }, [
                                  createVNode(_component_v_btn, { block: "" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Logout ")
                                    ]),
                                    _: 1
                                  })
                                ])
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_v_main, { id: "sidebarNav" }),
                            createVNode("main", { id: "mainSection" }, [
                              createVNode(live),
                              renderSlot(_ctx.$slots, "default")
                            ])
                          ]),
                          _: 3
                        })
                      ]),
                      _: 3
                    }),
                    createVNode(_component_FooterNav)
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_app_bar, {
                id: "topnav",
                density: "compact"
              }, {
                prepend: withCtx(() => [
                  createVNode(_component_v_btn, {
                    variant: "flat",
                    onClick: ($event) => _ctx.drawer = !_ctx.drawer
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_v_icon, {
                        start: "",
                        icon: "fas fa-bars"
                      }),
                      createTextVNode(" Menu ")
                    ]),
                    _: 1
                  }, 8, ["onClick"])
                ]),
                default: withCtx(() => [
                  createVNode(_component_v_app_bar_title, null, {
                    default: withCtx(() => [
                      createVNode("a", {
                        class: "logobrand",
                        href: "/"
                      }, [
                        createVNode(_component_v_icon, { start: "" }, {
                          default: withCtx(() => [
                            createVNode(_component_v_img, { src: "/images/logo.png" })
                          ]),
                          _: 1
                        }),
                        createTextVNode("Meeovi ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_text_field, {
                    density: "compact",
                    variant: "solo",
                    label: "Search Meeovi",
                    "append-inner-icon": "fas fa-search",
                    "single-line": "",
                    "hide-details": "",
                    "onClick:appendInner": onClick
                  }),
                  createVNode(_component_v_spacer),
                  createVNode("div", { class: "d-flex align-center flex-column flex-sm-row fill-height" }, [
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          "prepend-icon": theme.value === "dark" ? "fas fa-sun" : "fas fa-moon",
                          onClick
                        }, null, 8, ["prepend-icon"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-bell"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "",
                                  value: "",
                                  href: "/"
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_list_item, {
                                  title: "All Notifications",
                                  value: "notifications",
                                  href: "/admin/user/notifications"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(ecosystemmenu)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_menu, {
                          location: _ctx.location,
                          transition: "slide-y-transition"
                        }, {
                          activator: withCtx(({ props }) => [
                            createVNode(_component_v_btn, mergeProps({ variant: "flat" }, props), {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, {
                                  start: "",
                                  icon: "fas fa-user-circle"
                                })
                              ]),
                              _: 2
                            }, 1040)
                          ]),
                          default: withCtx(() => [
                            createVNode(_component_v_list, null, {
                              default: withCtx(() => [
                                createVNode(_component_v_list_item, {
                                  title: "Account",
                                  value: "Account",
                                  href: "/Admin/User/"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Profile",
                                  value: "Profile",
                                  href: "/Admin/User/profile"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Account",
                                  value: "Account",
                                  href: "/Admin/User/Account"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Addresses",
                                  value: "Addresses",
                                  href: "/Admin/User/Addresses"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "History",
                                  value: "History",
                                  href: "/Admin/User/History"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "My Uploads",
                                  value: "My Uploads",
                                  href: "/Admin/User/my-uploads"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Notifications",
                                  value: "Notifications",
                                  href: "/Admin/User/Notifications"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Recommendations",
                                  value: "Recommendations",
                                  href: "/Admin/User/Recommendations"
                                }),
                                createVNode(_component_v_list_item, {
                                  title: "Lists",
                                  value: "Lists",
                                  href: "/Admin/User/Lists"
                                }),
                                createVNode(_component_v_divider),
                                createVNode(_component_v_list_item, {
                                  title: "Logout",
                                  value: "Logout",
                                  href: "/logout"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["location"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_col, null, {
                      default: withCtx(() => [
                        createVNode(_component_v_btn, {
                          variant: "flat",
                          href: "/commerce/cart"
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_v_icon, {
                              start: "",
                              icon: "fas fa-shopping-cart"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_v_main, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_layout, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_navigation_drawer, {
                            class: "sidebarSection",
                            modelValue: _ctx.drawer,
                            "onUpdate:modelValue": ($event) => _ctx.drawer = $event,
                            temporary: ""
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item, {
                                "prepend-avatar": "https://randomuser.me/api/portraits/men/85.jpg",
                                title: "John Leider",
                                nav: ""
                              }, {
                                append: withCtx(() => [
                                  createVNode(_component_v_btn, {
                                    variant: "text",
                                    icon: "fas fa-chevron-left",
                                    onClick: withModifiers(($event) => _ctx.rail = !_ctx.rail, ["stop"])
                                  }, null, 8, ["onClick"])
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_list, {
                                density: "compact",
                                nav: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode("h6", null, "Trending"),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-cart-plus",
                                    title: "What's New",
                                    value: "What's New",
                                    href: "/categories/new"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode("h6", null, "Shop By Category"),
                                  createVNode(_component_v_list_group, { "prepend-icon": "fas fa-building" }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps(props, { title: "Categories" }), null, 16)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-book",
                                        title: "Books",
                                        value: "Books",
                                        href: "/categories/books"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-music",
                                        title: "Music",
                                        value: "Music",
                                        href: "/categories/music"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-play",
                                        title: "Theater",
                                        value: "Theater",
                                        href: "/categories/theater"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-gamepad",
                                        title: "Games",
                                        value: "Games",
                                        href: "/categories/games"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-podcast",
                                        title: "Podcasts",
                                        value: "Podcasts",
                                        href: "/categories/podcasts"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-volleyball",
                                        title: "Sports & Fitness",
                                        value: "Sports & Fitness",
                                        href: "/categories/sportsfitness"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        "prepend-icon": "fas fa-paw",
                                        title: "Pets",
                                        value: "Pets",
                                        href: "/categories/pets"
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode("h6", null, "Social"),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-video",
                                    title: "Meeovi Live",
                                    value: "live",
                                    href: "/categories/live"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-users",
                                    title: "Social Feed",
                                    value: "feed",
                                    href: "/social/newsfeed"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-people-group",
                                    title: "Groups",
                                    value: "groups",
                                    href: "/social/groups"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode("h6", null, "Department Stores"),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-compass-drafting",
                                    title: "Meeovi Crafts",
                                    value: "meeovi crafts",
                                    href: "/crafts/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-person-shelter",
                                    title: "Meeovi Yardsale",
                                    value: "meeovi yardsale",
                                    href: "/yardsale/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fab fa-mattress-pillow",
                                    title: "Meeovi Fabrics",
                                    value: "meeovi fabrics",
                                    href: "/fabrics/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-message",
                                    title: "Meeovi Reviews",
                                    value: "meeovi reviews",
                                    href: "/reviews/"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-tablet-button",
                                    title: "Meeovi Appstore",
                                    value: "meeovi appstore",
                                    href: "/categories/appstore"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode("h6", null, "Deals Corner"),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-tablet-button",
                                    title: "Deals",
                                    value: "Deals",
                                    href: "/deals"
                                  }),
                                  createVNode(_component_v_list_item, {
                                    "prepend-icon": "fas fa-tablet-button",
                                    title: "Exclusives",
                                    value: "exclusives",
                                    href: "/categories/exclusives"
                                  }),
                                  createVNode(_component_v_divider),
                                  createVNode("h6", null, "My Account"),
                                  createVNode(_component_v_list_group, {
                                    "prepend-icon": "fas fa-user-circle",
                                    value: "My Account"
                                  }, {
                                    activator: withCtx(({ props }) => [
                                      createVNode(_component_v_list_item, mergeProps(props, { title: "My Account" }), null, 16)
                                    ]),
                                    default: withCtx(() => [
                                      createVNode(_component_v_list_item, {
                                        title: "Account",
                                        value: "Account",
                                        href: "/Admin/User/"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Profile",
                                        value: "Profile",
                                        href: "/Admin/User/profile"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Account",
                                        value: "Account",
                                        href: "/Admin/User/Account"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Addresses",
                                        value: "Addresses",
                                        href: "/Admin/User/Addresses"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "History",
                                        value: "History",
                                        href: "/Admin/User/History"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "My Uploads",
                                        value: "My Uploads",
                                        href: "/Admin/User/my-uploads"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Notifications",
                                        value: "Notifications",
                                        href: "/Admin/User/Notifications"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Recommendations",
                                        value: "Recommendations",
                                        href: "/Admin/User/Recommendations"
                                      }),
                                      createVNode(_component_v_list_item, {
                                        title: "Lists",
                                        value: "Lists",
                                        href: "/Admin/User/Lists"
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_v_spacer),
                              createVNode("div", { class: "pa-2" }, [
                                createVNode(_component_v_btn, { block: "" }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Logout ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_v_main, { id: "sidebarNav" }),
                          createVNode("main", { id: "mainSection" }, [
                            createVNode(live),
                            renderSlot(_ctx.$slots, "default")
                          ])
                        ]),
                        _: 3
                      })
                    ]),
                    _: 3
                  }),
                  createVNode(_component_FooterNav)
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=default-e124b979.js.map
