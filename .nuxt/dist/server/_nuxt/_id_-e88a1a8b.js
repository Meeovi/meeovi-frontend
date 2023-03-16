import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./1-e41cf1d9.js";
import { _ as _imports_1, a as _imports_2, b as _imports_3 } from "./4-771c9eab.js";
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
const __default__$1 = {};
const _sfc_main$1 = /* @__PURE__ */ Object.assign(__default__$1, {
  __name: "relatedcategories",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_row = resolveComponent("v-row");
      const _component_v_col = resolveComponent("v-col");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relatedMenu" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_v_row, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_col, { cols: "3" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="card card-category"${_scopeId2}><div class="img-wrap" style="${ssrRenderStyle({ "background": "#ffd7d7" })}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div><div class="card-body"${_scopeId2}><h4 class="card-title"${_scopeId2}><a href="/categories/"${_scopeId2}>Summer shirts</a></h4></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "card card-category" }, [
                      createVNode("div", {
                        class: "img-wrap",
                        style: { "background": "#ffd7d7" }
                      }, [
                        createVNode("img", { src: _imports_0 })
                      ]),
                      createVNode("div", { class: "card-body" }, [
                        createVNode("h4", { class: "card-title" }, [
                          createVNode("a", { href: "/categories/" }, "Summer shirts")
                        ])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_col, { cols: "3" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "card card-category" }, [
                    createVNode("div", {
                      class: "img-wrap",
                      style: { "background": "#ffd7d7" }
                    }, [
                      createVNode("img", { src: _imports_0 })
                    ]),
                    createVNode("div", { class: "card-body" }, [
                      createVNode("h4", { class: "card-title" }, [
                        createVNode("a", { href: "/categories/" }, "Summer shirts")
                      ])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Related/relatedcategories.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const relatedcategories = _sfc_main$1;
const _imports_4 = "" + __buildAssetsURL("5.8d03c3d5.jpg");
const _imports_5 = "" + __buildAssetsURL("6.3ee8ffa5.jpg");
const _imports_6 = "" + __buildAssetsURL("15.3cd91978.jpg");
const __default__ = {
  components: {
    relatedcategories
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-content padding-y"><div class="container"><div class="card mb-3"><div class="card-body"><div class="row"><div class="col-md-2">Filter by</div><div class="col-md-10"><ul class="list-inline"><li class="list-inline-item mr-3 dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"> Supplier type </a><div class="dropdown-menu p-3" style="${ssrRenderStyle({ "max-width": "400px" })}"><label class="form-check"><input type="radio" name="myfilter" class="form-check-input"> Good supplier </label><label class="form-check"><input type="radio" name="myfilter" class="form-check-input"> Best supplier </label><label class="form-check"><input type="radio" name="myfilter" class="form-check-input"> New supplier </label></div></li><li class="list-inline-item mr-3 dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown"> Country </a><div class="dropdown-menu p-3"><label class="form-check"><input type="checkbox" class="form-check-input"> China </label><label class="form-check"><input type="checkbox" class="form-check-input"> Japan </label><label class="form-check"><input type="checkbox" class="form-check-input"> Uzbekistan </label><label class="form-check"><input type="checkbox" class="form-check-input"> Russia </label></div></li><li class="list-inline-item mr-3 dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Feature</a><div class="dropdown-menu"><a href="" class="dropdown-item">Anti backterial</a><a href="" class="dropdown-item">With buttons</a><a href="" class="dropdown-item">Extra safety</a></div></li><li class="list-inline-item mr-3"><a href="#">Color</a></li><li class="list-inline-item mr-3"><a href="#">Size</a></li><li class="list-inline-item mr-3"><div class="form-inline"><label class="mr-2">Price</label><input class="form-control form-control-sm" placeholder="Min" type="number"><span class="px-2"> - </span><input class="form-control form-control-sm" placeholder="Max" type="number"><button type="submit" class="btn btn-sm btn-light ml-2">Ok</button></div></li><li class="list-inline-item mr-3"><label class="custom-control mt-1 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Ready to ship </div></label></li></ul></div></div></div></div><header class="mb-3"><div class="form-inline"><strong class="mr-md-auto">32 Items found </strong><select class="mr-2 form-control"><option>Latest items</option><option>Trending</option><option>Most Popular</option><option>Cheapest</option></select><div class="btn-group"><a href="page-listing-grid.html" class="btn btn-light active" data-toggle="tooltip" title="List view"><i class="fas fa-bars"></i></a><a href="page-listing-large.html" class="btn btn-light" data-toggle="tooltip" title="Grid view"><i class="fas fa-th"></i></a></div></div></header><div class="row"><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><span class="badge badge-danger"> NEW </span><img${ssrRenderAttr("src", _imports_0)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Hot sale unisex New Design Shirt for sport polo shirts latest design</a><div class="price-wrap"><span class="price">$32.00-$40.00</span><small class="text-muted">/per item</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 2 Years </span><span class="tag"> 23 reviews </span><span class="tag"> Japan </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_1)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">High Quality Winter PU Rain Jacket with Padding for Men&#39;s outdoor</a><div class="price-wrap"><span class="price">$50.00-$75.00</span><small class="text-muted">/per item</small></div><p class="mb-2"> 4 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Great manufacturer Co ltd.</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 3 Years </span><span class="tag"> 70 reviews </span><span class="tag"> Russia </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_2)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$425.00-$490.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Best textile company Ltd.</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 7 Years </span><span class="tag"> 34 reviews </span><span class="tag"> Russia </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_3)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_4)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_5)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_6)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Pro Electronic Ltd</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><img${ssrRenderAttr("src", _imports_0)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><span class="badge badge-danger"> NEW </span><img${ssrRenderAttr("src", _imports_1)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><span class="badge badge-danger"> NEW </span><img${ssrRenderAttr("src", _imports_2)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><span class="badge badge-danger"> NEW </span><img${ssrRenderAttr("src", _imports_3)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div><div class="col-md-3"><figure class="card card-product-grid"><div class="img-wrap"><span class="badge badge-danger"> NEW </span><img${ssrRenderAttr("src", _imports_0)}></div><figcaption class="info-wrap"><a href="#" class="title mb-2">Cheap and Best demo clothe with latest Fashion styles for Men</a><div class="price-wrap"><span class="price">$325.00-$390.00</span><small class="text-muted">/per bag</small></div><p class="mb-2"> 2 Pieces <small class="text-muted">(Min Order)</small></p><p class="text-muted">Guangzhou Yichuang Electronic Co</p><hr><p class="mb-3"><span class="tag"><i class="fa fa-check"></i> Verified</span><span class="tag"> 4 Years </span><span class="tag"> 60 reviews </span><span class="tag"> China </span></p><label class="custom-control mb-3 custom-checkbox"><input type="checkbox" class="custom-control-input"><div class="custom-control-label">Add to compare </div></label><a href="#" class="btn btn-outline-primary"><i class="fa fa-envelope"></i> Contact supplier </a></figcaption></figure></div></div><nav class="mb-4" aria-label="Page navigation sample"><ul class="pagination"><li class="page-item disabled"><a class="page-link" href="#">Previous</a></li><li class="page-item active"><a class="page-link" href="#">1</a></li><li class="page-item"><a class="page-link" href="#">2</a></li><li class="page-item"><a class="page-link" href="#">3</a></li><li class="page-item"><a class="page-link" href="#">4</a></li><li class="page-item"><a class="page-link" href="#">5</a></li><li class="page-item"><a class="page-link" href="#">Next</a></li></ul></nav><div class="box text-center"><p>Did you find what you were looking for？</p><a href="" class="btn btn-light">Yes</a><a href="" class="btn btn-light">No</a></div></div></section>`);
      _push(ssrRenderComponent(relatedcategories, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categories/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-e88a1a8b.js.map
