import { _ as _export_sfc } from "../server.mjs";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import { u as useHead } from "./composables-b654975a.js";
import "destr";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./07-37f81037.js";
import { _ as _imports_10 } from "./11-cc48cb6b.js";
import { _ as _imports_0$1 } from "./01-69ec5c79.js";
import { _ as _imports_8 } from "./02-dde25c9b.js";
import { _ as _imports_3 } from "./03-0238e7ff.js";
import { _ as _imports_4, a as _imports_5, b as _imports_6 } from "./06-902f019a.js";
import { _ as _imports_0$2, a as _imports_1, b as _imports_2, c as _imports_3$1 } from "./16-33a9678d.js";
import { _ as _imports_12, a as _imports_13, b as _imports_14, c as _imports_15 } from "./face8-227e7c85.js";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_tabs = resolveComponent("v-tabs");
  const _component_v_tab = resolveComponent("v-tab");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_tabs, {
          style: { "background-color": "red", "color": "white" },
          "center-active": ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Meeovi Music`);
                  } else {
                    return [
                      createTextVNode("Meeovi Music")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_tab, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<a href=""${_scopeId3}>Example</a>`);
                  } else {
                    return [
                      createVNode("a", { href: "" }, "Example")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createTextVNode("Meeovi Music")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_tab, null, {
                  default: withCtx(() => [
                    createVNode("a", { href: "" }, "Example")
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
            style: { "background-color": "red", "color": "white" },
            "center-active": ""
          }, {
            default: withCtx(() => [
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createTextVNode("Meeovi Music")
                ]),
                _: 1
              }),
              createVNode(_component_v_tab, null, {
                default: withCtx(() => [
                  createVNode("a", { href: "" }, "Example")
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Menus/musicbar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const musicbar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const __default__ = {
  components: { musicbar }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Music",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Meeovi Music"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(musicbar, null, null, _parent));
      _push(`<section data-bs-version="5.1" class="features15 popup-btn-cards cid-txNj8ml5nb mbr-parallax-background" id="features15-4l"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.4", "background-color": "rgb(0, 0, 0)" })}"></div><a class="full-link" href="#"></a><div class="container-fluid card-wrapper"><div class="row justify-content-center align-items-center" style="${ssrRenderStyle({ "min-height": "10vw" })}"><div class="col-xl-10 col-lg-10 col-md-12 text-block"><h2 class="mbr-section-title mbr-fonts-style mbr-light mbr-white mbr-bold display-2"><strong>Meeovi Music</strong></h2></div></div></div></section><section data-bs-version="5.1" class="features6 popup-btn-cards cid-txNjbpSVpF" id="features6-4m"><div class="container"><h2 class="align-center mbr-fonts-style mbr-section-title display-2">Music Collections</h2><div class="row main justify-content-center"><div class="col-lg-6 p-4"><div class="image-element card-wrapper"><img${ssrRenderAttr("src", _imports_0)} alt="" title=""><div class="mbr-overlay card-overlay"></div><div class="wrapper"><h3 class="card-title mbr-fonts-style align-left mbr-white display-2"> Meeovi Charts </h3><div class="collapsed-content"><p class="mbr-text mbr-white mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus minima corrupti labore, aliquid est, pariatur natus. </p><div class="mbr-section-btn"><a class="btn btn-md btn-info display-4" href="/categories/charts">Charts</a></div></div></div></div></div><div class="col-lg-6 p-4"><div class="image-element card-wrapper"><img${ssrRenderAttr("src", _imports_10)} alt="" title=""><div class="mbr-overlay card-overlay"></div><div class="wrapper"><h3 class="card-title mbr-fonts-style align-left mbr-white display-2"> Meeovi Radio </h3><div class="collapsed-content"><p class="mbr-text mbr-white mbr-fonts-style display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus minima corrupti labore, aliquid est, pariatur natus. </p><div class="mbr-section-btn"><a class="btn btn-md btn-info display-4" href="/categories/radio">Radio</a></div></div></div></div></div></div></div></section><section data-bs-version="5.1" class="mbr-section features13 cid-txNjPsul0g mbr-parallax-background" id="features13-4p"><div class="mbr-overlay" style="${ssrRenderStyle({ "opacity": "0.8", "background-color": "rgb(255, 255, 255)" })}"></div><div class="container-fluid"><div class="row"><div class="col-12 text-row col-md-6"><h2 class="align-center pb-3 mbr-fonts-style display-2"> LATEST PRODUCTS</h2><div class="mbr-section-btn title-btn align-center pt-3"><a class="btn btn-black-outline display-4" href="#">VIEW ALL</a></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0$1)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_8)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_4)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_5)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-4 col-xl-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_6)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p><div class="mbr-section-btn card-btn align-center"><a href="#" class="btn btn-secondary display-4"> BUY </a></div></div></div></div></div></div></section><section data-bs-version="5.1" class="mbr-section features20 cid-txNjkLmoOJ" id="features20-4o"><div class="container-fluid"><h2 class="mbr-section-title align-left mbr-fonts-style mbr-white display-2"> Explore Our Products</h2><div class="underline align-left pb-3"><div class="line"></div></div><div class="row justify-content-center pt-5"><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_0$2)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Skirt </p><div class="prices align-center"><span class="newPrice mbr-fonts-style mbr-bold display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_1)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Jeans </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_2)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Denim Jacket </p><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div><div class="card px-3 py-4 col-12 col-md-6 col-lg-3"><div class="card-wrapper"><div class="card-img"><img${ssrRenderAttr("src", _imports_3$1)} alt=""></div><div class="card-box"><p class="mbr-text mbr-fonts-style align-center mbr-white display-5"> Leather Jacket </p></div><div class="prices align-center"><span class="newPrice mbr-bold mbr-fonts-style display-2">$100</span></div><div class="mbr-section-btn align-center pt-3"><a href="#" class="btn btn-md btn-success display-4">BUY</a></div></div></div></div></div></section><section data-bs-version="5.1" class="teams1 cid-twaGraj1h8" id="teams1-41"><div class="container"><h2 class="mbr-section-title mbr-fonts-style align-left mbr-black display-2"> Check out some Creators</h2><h3 class="mbr-section-subtitle mbr-fonts-style align-left pt-2 display-5"><em>Show them support by following them</em></h3><div class="row justify-content-center flip-card pt-4"><div class="col-md-6 col-lg-3 card-wrap"><div class="image-wrap"><img${ssrRenderAttr("src", _imports_12)} alt=""><div class="social-media align-center"><ul><li><a class="icon-transition" href="https://www.facebook.com/Mobirise"><span class="mbr-iconfont mbr-black socicon-facebook socicon"></span></a></li><li><a class="icon-transition" href="https://twitter.com/mobirise"><span class="mbr-iconfont mbr-black socicon-twitter socicon"></span></a></li><li><a class="icon-transition" href="https://instagram.com/mobirise/"><span class="mbr-iconfont mbr-black socicon-instagram socicon"></span></a></li><li><a class="icon-transition" href="https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw"><span class="mbr-iconfont mbr-black socicon-youtube socicon"></span></a></li></ul></div><div class="img-overlay"></div></div><h4 class="mbr-fonts-style mbr-name align-left pt-4 mbr-bold display-5"> Amanda Adams </h4><h5 class="mbr-fonts-style mbr-role align-left pt-2 display-4">Sales Manager</h5><p class="mbr-fonts-style mbr-text align-left pt-1 display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, pariatur. </p></div><div class="col-md-6 col-lg-3 card-wrap"><div class="image-wrap"><img${ssrRenderAttr("src", _imports_13)} alt=""><div class="img-overlay"></div><div class="social-media align-center"><ul><li><a class="icon-transition" href="https://www.facebook.com/Mobirise"><span class="mbr-iconfont mbr-black socicon-facebook socicon"></span></a></li><li><a class="icon-transition" href="https://twitter.com/mobirise"><span class="mbr-iconfont mbr-black socicon-twitter socicon"></span></a></li><li><a class="icon-transition" href="https://instagram.com/mobirise/"><span class="mbr-iconfont mbr-black socicon-instagram socicon"></span></a></li><li><a class="icon-transition" href="https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw"><span class="mbr-iconfont mbr-black socicon-youtube socicon"></span></a></li></ul></div></div><h4 class="mbr-fonts-style mbr-name align-left pt-4 mbr-bold display-5"> John Smith </h4><h5 class="mbr-fonts-style mbr-role align-left pt-2 display-4">Service Advisor</h5><p class="mbr-fonts-style mbr-text align-left pt-1 display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, pariatur. </p></div><div class="col-md-6 col-lg-3 card-wrap"><div class="image-wrap"><img${ssrRenderAttr("src", _imports_14)} alt=""><div class="img-overlay"></div><div class="social-media align-center"><ul><li><a class="icon-transition" href="https://www.facebook.com/Mobirise"><span class="mbr-iconfont mbr-black socicon-facebook socicon"></span></a></li><li><a class="icon-transition" href="https://twitter.com/mobirise"><span class="mbr-iconfont mbr-black socicon-twitter socicon"></span></a></li><li><a class="icon-transition" href="https://instagram.com/mobirise/"><span class="mbr-iconfont mbr-black socicon-instagram socicon"></span></a></li><li><a class="icon-transition" href="https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw"><span class="mbr-iconfont mbr-black socicon-youtube socicon"></span></a></li></ul></div></div><h4 class="mbr-fonts-style mbr-name align-left pt-4 mbr-bold display-5"> Amanda Adams </h4><h5 class="mbr-fonts-style mbr-role align-left pt-2 display-4">Purchasing Officer</h5><p class="mbr-fonts-style mbr-text align-left pt-1 display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, pariatur. </p></div><div class="col-md-6 col-lg-3 card-wrap"><div class="image-wrap"><img${ssrRenderAttr("src", _imports_15)} alt=""><div class="img-overlay"></div><div class="social-media align-center"><ul><li><a class="icon-transition" href="https://www.facebook.com/Mobirise"><span class="mbr-iconfont mbr-black socicon-facebook socicon"></span></a></li><li><a class="icon-transition" href="https://twitter.com/mobirise"><span class="mbr-iconfont mbr-black socicon-twitter socicon"></span></a></li><li><a class="icon-transition" href="https://instagram.com/mobirise/"><span class="mbr-iconfont mbr-black socicon-instagram socicon"></span></a></li><li><a class="icon-transition" href="https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw"><span class="mbr-iconfont mbr-black socicon-youtube socicon"></span></a></li></ul></div></div><h4 class="mbr-fonts-style mbr-name align-left pt-4 mbr-bold display-5"> John Smith </h4><h5 class="mbr-fonts-style mbr-role align-left pt-2 display-4">Business Analyst</h5><p class="mbr-fonts-style mbr-text align-left pt-1 display-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, pariatur. </p></div></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Categories/Music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=Music-893a93c8.js.map
