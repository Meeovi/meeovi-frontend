import { b as buildAssetsURL } from './renderer.mjs';
import { resolveComponent, useSSRContext } from 'vue';
import { u as useHead } from './composables-b654975a.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './1-e41cf1d9.mjs';
import './server.mjs';
import 'vue-bundle-renderer/runtime';
import 'h3';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'unstorage/drivers/overlay';
import 'unstorage/drivers/memory';
import 'defu';
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
import 'unctx';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'appwrite';
import 'ts-invariant';
import 'zen-observable-ts';
import 'cookie-es';
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

const _imports_1 = "" + buildAssetsURL("payments.2d174087.png");
const __default__ = {};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "cart",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Shopping Cart"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="section-content padding-y"><div class="container"><div class="row"><main class="col-md-9"><div class="card"><table class="table table-borderless table-shopping-cart"><thead class="text-muted"><tr class="small text-uppercase"><th scope="col">Product</th><th scope="col" width="120">Quantity</th><th scope="col" width="120">Price</th><th scope="col" class="text-right" width="200"></th></tr></thead><tbody><tr><td><figure class="itemside"><div class="aside"><img${ssrRenderAttr("src", _imports_0)} class="img-sm"></div><figcaption class="info"><a href="#" class="title text-dark">Some name of item goes here nice</a><p class="text-muted small">Size: XL, Color: blue, <br> Brand: Gucci </p></figcaption></figure></td><td><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></td><td><div class="price-wrap"><var class="price">$1156.00</var><small class="text-muted"> $315.20 each </small></div></td><td class="text-right">`);
      _push(ssrRenderComponent(_component_v_btn, {
        icon: "fas fa-heart",
        size: "x-small",
        color: "pink",
        title: "Save to Wish List"
      }, null, _parent));
      _push(`</td><td class="text-right">`);
      _push(ssrRenderComponent(_component_v_btn, {
        icon: "fas fa-minus",
        size: "x-small",
        title: "Remove from Cart"
      }, null, _parent));
      _push(`</td></tr></tbody></table><div class="card-body border-top"><a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i></a><a href="/" class="btn btn-light"><i class="fa fa-chevron-left"></i> Continue shopping </a></div></div><div class="alert alert-success mt-3"><p class="icontext"><i class="icon text-success fa fa-truck"></i> Free Delivery within 1-2 weeks</p></div></main><aside class="col-md-3"><div class="card mb-3"><div class="card-body"><form><div class="form-group"><label>Have coupon?</label><div class="input-group"><input type="text" class="form-control" name="" placeholder="Coupon code"><span class="input-group-append"><button class="btn btn-primary">Apply</button></span></div></div></form></div></div><div class="card"><div class="card-body"><dl class="dlist-align"><dt>Total price:</dt><dd class="text-right">USD 568</dd></dl><dl class="dlist-align"><dt>Discount:</dt><dd class="text-right">USD 658</dd></dl><dl class="dlist-align"><dt>Total:</dt><dd class="text-right h5"><strong>$1,650</strong></dd></dl><hr><p class="text-center mb-3"><img${ssrRenderAttr("src", _imports_1)} height="26"></p></div></div></aside></div></div></section><section class="section-name border-top padding-y"><div class="container"><h6>Payment and refund policy</h6><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Commerce/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cart-1ffa5cd5.mjs.map
