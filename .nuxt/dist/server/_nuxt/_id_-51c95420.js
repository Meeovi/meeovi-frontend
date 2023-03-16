import "../server.mjs";
import { resolveComponent, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0$1 } from "./mbr-676x459-e8ec3c83.js";
import { _ as _imports_0$2, a as _imports_1 } from "./product4-d899b70d.js";
import { _ as _imports_2 } from "./product3-6b7493d9.js";
import { _ as _imports_0 } from "./1-e41cf1d9.js";
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
  __name: "relatedvideo",
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
                  _push3(`<div class="card card-category"${_scopeId2}><div class="img-wrap" style="${ssrRenderStyle({ "background": "#ffd7d7" })}"${_scopeId2}><img${ssrRenderAttr("src", _imports_0)}${_scopeId2}></div><div class="card-body"${_scopeId2}><h4 class="card-title"${_scopeId2}><a href="/product/video/"${_scopeId2}>Summer shirts</a></h4></div></div>`);
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
                          createVNode("a", { href: "/product/video/" }, "Summer shirts")
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
                        createVNode("a", { href: "/product/video/" }, "Summer shirts")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Related/relatedvideo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const relatedvideo = _sfc_main$1;
const __default__ = {
  components: { relatedvideo }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="video5 cid-sC3S8kznq5" id="video5-2v"><div class="container"><div class="title-wrapper mb-5"></div><div class="row align-items-center"><div class="col-12 col-lg-7 video-block"><div class="video-wrapper"><iframe class="mbr-embedded-video" src="https://www.youtube.com/embed/VA8PzkQa8d8?rel=0&amp;amp;showinfo=0&amp;autoplay=0&amp;loop=0" width="1280" height="720" frameborder="0" allowfullscreen></iframe></div></div><div class="col-12 col-lg"><div class="text-wrapper"><h3 class="mbr-section-subtitle mbr-fonts-style mb-3 display-5"><strong>View in Action</strong></h3><p class="mbr-text mbr-fonts-style display-7">By:<br>Published On:<br><br>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p></div></div></div></div></section><section class="features14 cid-sC3SUMqJhE" id="features15-2y"><div class="container"><div class="row justify-content-center"><div class="card col-12 col-md-6 col-lg-3"><div class="card-wrapper"><span class="mbr-iconfont m-auto mobi-mbri-clock mobi-mbri"></span><div class="card-box"><h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Categories</strong></h4><h5 class="card-text mbr-fonts-style display-4">Home &amp; Garden</h5></div></div></div><div class="card col-12 col-md-6 col-lg-3"><div class="card-wrapper"><span class="mbr-iconfont m-auto mobi-mbri-preview mobi-mbri"></span><div class="card-box"><h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Views</strong></h4><h5 class="card-text mbr-fonts-style display-4">24,000</h5></div></div></div><div class="card col-12 col-md-6 col-lg-3"><div class="card-wrapper"><span class="mbr-iconfont m-auto mobi-mbri-down mobi-mbri"></span><div class="card-box"><h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Download This Video</strong></h4><h5 class="card-text mbr-fonts-style display-4">Login to Download</h5></div></div></div><div class="card col-12 col-md-6 col-lg-3"><div class="card-wrapper"><span class="mbr-iconfont m-auto mobi-mbri-user-2 mobi-mbri"></span><div class="card-box"><h4 class="card-title mbr-fonts-style mb-2 display-7"><strong>Subscribe</strong></h4><h5 class="card-text mbr-fonts-style display-7">Login to Subscribe</h5></div></div></div></div></div></section><section class="features3 cid-sC3SnvKKxe" id="features3-2x"><div class="container"><div class="mbr-section-head"><h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Similar Videos</strong></h4></div><div class="row mt-4"><div class="item features-image сol-12 col-md-6 col-lg-4"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-7"><strong>Lorem Ipsum</strong></h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><em>Card Subtitle</em></h6></div></div></div><div class="item features-image сol-12 col-md-6 col-lg-4"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-7"><strong>Lorem Ipsum</strong></h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><em>Card Subtitle</em></h6></div></div></div><div class="item features-image сol-12 col-md-6 col-lg-4"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-7"><strong>Lorem Ipsum</strong></h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><em>Card Subtitle</em></h6></div></div></div></div></div></section><section class="content4 cid-sC3TwZn9ro" id="content4-2z"><div class="container"><div class="row justify-content-center"><div class="title col-md-12 col-lg-10"><h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2"><strong>Comments</strong></h3><h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5"> Comments goes here</h4></div></div></div></section><section class="content2 cid-sC3Si11MPr" id="content2-2w"><div class="container"><div class="mbr-section-head"><h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Across Meeovi Theater</strong></h4></div><div class="row mt-4"><div class="item features-image сol-12 col-md-6 col-lg-4"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_0$2)} alt="" title=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-5">Lorem Ipsum</h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>John Smith</strong><em> 10-10-2025</em></h6></div><div class="mbr-section-btn item-footer mt-2"><a href="" class="btn item-btn btn-danger display-7" target="_blank">Read More &gt;</a></div></div></div><div class="item features-image сol-12 col-md-6 col-lg-4"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_1)} alt="" title=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-5">Lorem Ipsum</h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Ann Brown</strong><em> 09-09-2025</em></h6></div><div class="mbr-section-btn item-footer mt-2"><a href="" class="btn item-btn btn-danger display-7" target="_blank">Read More &gt;</a></div></div></div><div class="item features-image сol-12 col-md-6 col-lg-4"><div class="item-wrapper"><div class="item-img"><img${ssrRenderAttr("src", _imports_2)} alt="" title=""></div><div class="item-content"><h5 class="item-title mbr-fonts-style display-5">Lorem Ipsum</h5><h6 class="item-subtitle mbr-fonts-style mt-1 display-7"><strong>Jessica Doe </strong><em>08-08-2025</em></h6></div><div class="mbr-section-btn item-footer mt-2"><a href="" class="btn item-btn btn-danger display-7" target="_blank">Read More &gt;</a></div></div></div></div></div></section>`);
      _push(ssrRenderComponent(relatedvideo, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Product/Video/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-51c95420.js.map
