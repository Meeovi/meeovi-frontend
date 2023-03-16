globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, getRequestHeaders, setResponseHeader, createError, getQuery, getCookie, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase, kebabCase, pascalCase, camelCase } from 'scule';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash, isRelative } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import overlay from 'unstorage/drivers/overlay';
import memory$1 from 'unstorage/drivers/memory';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, extname, join } from 'pathe';
import { MeiliSearch } from 'meilisearch';
import { unified } from 'unified';
import { toString } from 'mdast-util-to-string';
import { preprocess } from 'micromark/lib/preprocess.js';
import { postprocess } from 'micromark/lib/postprocess.js';
import { stringifyPosition } from 'unist-util-stringify-position';
import { markdownLineEnding, markdownSpace } from 'micromark-util-character';
import { push, splice } from 'micromark-util-chunked';
import { resolveAll } from 'micromark-util-resolve-all';
import remarkEmoji from 'remark-emoji';
import rehypeSlug from 'rehype-slug';
import remarkSqueezeParagraphs from 'remark-squeeze-paragraphs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import rehypeSortAttributeValues from 'rehype-sort-attribute-values';
import rehypeSortAttributes from 'rehype-sort-attributes';
import rehypeRaw from 'rehype-raw';
import remarkMDC, { parseFrontMatter } from 'remark-mdc';
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import { all } from 'mdast-util-to-hast';
import { detab } from 'detab';
import { u } from 'unist-builder';
import { encode } from 'mdurl';
import slugify from 'slugify';
import { position } from 'unist-util-position';
import { visit } from 'unist-util-visit';
import { BUNDLED_LANGUAGES, BUNDLED_THEMES, getHighlighter } from 'shiki-es';
import consola from 'unenv/runtime/npm/consola';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=2592000, immutable"}}}},"public":{"content":{"locales":[],"defaultLocale":"","integrity":1678943073320,"experimental":{"stripQueryParameters":false,"clientDB":false},"api":{"baseURL":"/api/_content"},"navigation":{"fields":[]},"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"highlight":false,"wsUrl":"","documentDriven":false,"host":"","trailingSlash":false,"anchorLinks":{"depth":4,"exclude":[1]}},"meilisearchClient":{"hostUrl":"https://meeovi-meilisearch.q9re0h.easypanel.host/","searchApiKey":"<your_public_key>","serverSideUsage":true,"instantSearch":{"theme":"algolia"},"clientOptions":{"placeholderSearch":true,"paginationTotalHits":50,"finitePagination":true,"primaryKey":"","keepZeroFacets":false}},"appwrite":{"endpoint":"http://139.59.175.54/v1","project":"64109c12cd88d74e969b"}},"content":{"cacheVersion":2,"cacheIntegrity":"kc4UzpZUjI","transformers":[],"base":"","api":{"baseURL":"/api/_content"},"watch":{"ws":{"port":{"port":4000,"portRange":[4000,4040]},"hostname":"localhost","showURL":false}},"sources":{},"ignores":["\\.","-"],"locales":[],"defaultLocale":"","highlight":false,"markdown":{"tags":{"p":"prose-p","a":"prose-a","blockquote":"prose-blockquote","code-inline":"prose-code-inline","code":"prose-code","em":"prose-em","h1":"prose-h1","h2":"prose-h2","h3":"prose-h3","h4":"prose-h4","h5":"prose-h5","h6":"prose-h6","hr":"prose-hr","img":"prose-img","ul":"prose-ul","ol":"prose-ol","li":"prose-li","strong":"prose-strong","table":"prose-table","thead":"prose-thead","tbody":"prose-tbody","td":"prose-td","th":"prose-th","tr":"prose-tr"},"anchorLinks":{"depth":4,"exclude":[1]},"remarkPlugins":{},"rehypePlugins":{}},"yaml":{},"csv":{"delimeter":",","json":true},"navigation":{"fields":[]},"documentDriven":false,"experimental":{"clientDB":false,"stripQueryParameters":false}},"serverMeilisearchClient":{"hostUrl":"https://meeovi-meilisearch.q9re0h.easypanel.host/","searchApiKey":"<your_public_key>","adminApiKey":"<your_secret_key>","serverSideUsage":true,"instantSearch":{"theme":"algolia"},"clientOptions":{"placeholderSearch":true,"paginationTotalHits":50,"finitePagination":true,"primaryKey":"","keepZeroFacets":false}}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
};
function isObject$1(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject$1(obj[key])) {
      if (isObject$1(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {
  ["nitro:bundled:cache:content:content-index.json"]: {
    import: () => import('./raw/content-index.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"2-vyGp6PvFo4RvsFtPoIWeCReyIC8\"","mtime":"2023-03-16T05:10:03.747Z"}
  },
  ["nitro:bundled:cache:content:content-navigation.json"]: {
    import: () => import('./raw/content-navigation.mjs').then(r => r.default || r),
    meta: {"type":"application/json","etag":"\"2-l9Fw4VUO7kr8CvBlt4zaMCqXZ0w\"","mtime":"2023-03-16T05:10:03.747Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const bundledStorage = ["/cache/content"];
for (const base of bundledStorage) {
  storage.mount(base, overlay({
    layers: [
      memory$1(),
      // TODO
      // prefixStorage(storage, base),
      prefixStorage(storage, 'assets:nitro:bundled:' + base)
    ]
  }));
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/images/logo.png": {
    "type": "image/png",
    "etag": "\"2bde-vql4Z3taQAzn48Is+HzcKFaJz+0\"",
    "mtime": "2018-07-25T03:56:29.000Z",
    "size": 11230,
    "path": "../public/images/logo.png"
  },
  "/images/logo512alpha.png": {
    "type": "image/png",
    "etag": "\"2bde-vql4Z3taQAzn48Is+HzcKFaJz+0\"",
    "mtime": "2018-07-25T03:56:29.000Z",
    "size": 11230,
    "path": "../public/images/logo512alpha.png"
  },
  "/_nuxt/01.61756a82.jpg": {
    "type": "image/jpeg",
    "etag": "\"17c3c-PNgHR3r2ysZqhkvJT1GGLNDHg4k\"",
    "mtime": "2023-03-16T05:06:47.306Z",
    "size": 97340,
    "path": "../public/_nuxt/01.61756a82.jpg"
  },
  "/_nuxt/01.c8dbbc25.js": {
    "type": "application/javascript",
    "etag": "\"67-uFlRnE46PKjp4/e/iehYTzAisiM\"",
    "mtime": "2023-03-16T05:06:47.828Z",
    "size": 103,
    "path": "../public/_nuxt/01.c8dbbc25.js"
  },
  "/_nuxt/02.6c95af76.jpg": {
    "type": "image/jpeg",
    "etag": "\"d132-/ru4XPIzvu5G1vlXi65X7do36FU\"",
    "mtime": "2023-03-16T05:06:47.346Z",
    "size": 53554,
    "path": "../public/_nuxt/02.6c95af76.jpg"
  },
  "/_nuxt/02.9f7859e6.js": {
    "type": "application/javascript",
    "etag": "\"67-RdqteAq9HW+ME2/binrji5Kmv28\"",
    "mtime": "2023-03-16T05:06:48.087Z",
    "size": 103,
    "path": "../public/_nuxt/02.9f7859e6.js"
  },
  "/_nuxt/03.11639ea7.js": {
    "type": "application/javascript",
    "etag": "\"67-TN7bH5ofLc+tDxB8GjN8Mmi9zio\"",
    "mtime": "2023-03-16T05:06:48.076Z",
    "size": 103,
    "path": "../public/_nuxt/03.11639ea7.js"
  },
  "/_nuxt/03.986bf1ea.jpg": {
    "type": "image/jpeg",
    "etag": "\"750e-OB6ZkyESfOiziU5MpVb5fu/FqtI\"",
    "mtime": "2023-03-16T05:06:47.322Z",
    "size": 29966,
    "path": "../public/_nuxt/03.986bf1ea.jpg"
  },
  "/_nuxt/04.186639cc.jpg": {
    "type": "image/jpeg",
    "etag": "\"13788-6njEPGAts9AeWZZMOrZQ2y16Spg\"",
    "mtime": "2023-03-16T05:06:47.371Z",
    "size": 79752,
    "path": "../public/_nuxt/04.186639cc.jpg"
  },
  "/_nuxt/05.4a6d93cf.jpg": {
    "type": "image/jpeg",
    "etag": "\"1214d-REh73urq/mlcx79neirfJsNVG3s\"",
    "mtime": "2023-03-16T05:06:47.371Z",
    "size": 74061,
    "path": "../public/_nuxt/05.4a6d93cf.jpg"
  },
  "/_nuxt/06.79b5799c.jpg": {
    "type": "image/jpeg",
    "etag": "\"17f27-/w6WKHZ5oy8PwEtx207vlNREQAI\"",
    "mtime": "2023-03-16T05:06:47.383Z",
    "size": 98087,
    "path": "../public/_nuxt/06.79b5799c.jpg"
  },
  "/_nuxt/06.a4d106bb.js": {
    "type": "application/javascript",
    "etag": "\"df-yjKv3EPh9g1go0ydNIs0hVDJd/A\"",
    "mtime": "2023-03-16T05:06:47.813Z",
    "size": 223,
    "path": "../public/_nuxt/06.a4d106bb.js"
  },
  "/_nuxt/07.99785198.jpg": {
    "type": "image/jpeg",
    "etag": "\"7bd3-WTRNyuncHIamu/dU90qXfWVp8zQ\"",
    "mtime": "2023-03-16T05:06:47.372Z",
    "size": 31699,
    "path": "../public/_nuxt/07.99785198.jpg"
  },
  "/_nuxt/07.ea819a9a.js": {
    "type": "application/javascript",
    "etag": "\"67-xLP7cDsNOJf9k1Y/mrIgeRkZejg\"",
    "mtime": "2023-03-16T05:06:47.814Z",
    "size": 103,
    "path": "../public/_nuxt/07.ea819a9a.js"
  },
  "/_nuxt/08.8e45356a.jpg": {
    "type": "image/jpeg",
    "etag": "\"23a1a-oAB2EuVYO2lILcWT72PEA9t5NUs\"",
    "mtime": "2023-03-16T05:06:47.474Z",
    "size": 145946,
    "path": "../public/_nuxt/08.8e45356a.jpg"
  },
  "/_nuxt/1.0983f78c.png": {
    "type": "image/png",
    "etag": "\"2017-4WUtaW6ABVLkHVJLmdBdmCmFE+4\"",
    "mtime": "2023-03-16T05:06:47.678Z",
    "size": 8215,
    "path": "../public/_nuxt/1.0983f78c.png"
  },
  "/_nuxt/1.b9ccd96b.jpg": {
    "type": "image/jpeg",
    "etag": "\"9dde-6aalZGuzYExBcCbZ0AM+GzIh5hc\"",
    "mtime": "2023-03-16T05:06:47.400Z",
    "size": 40414,
    "path": "../public/_nuxt/1.b9ccd96b.jpg"
  },
  "/_nuxt/1.da503d3c.js": {
    "type": "application/javascript",
    "etag": "\"66-cA6nueymBZNO7asmB+opVGac2Y4\"",
    "mtime": "2023-03-16T05:06:47.813Z",
    "size": 102,
    "path": "../public/_nuxt/1.da503d3c.js"
  },
  "/_nuxt/10.30c980f0.jpg": {
    "type": "image/jpeg",
    "etag": "\"13b41-oN2XZP3NYNYozCyNaVIEwBzIJlA\"",
    "mtime": "2023-03-16T05:06:47.474Z",
    "size": 80705,
    "path": "../public/_nuxt/10.30c980f0.jpg"
  },
  "/_nuxt/11.9a7dd3d4.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b50d-/4IEl6h327NXhYSnt5Yh5RqZKUE\"",
    "mtime": "2023-03-16T05:06:47.391Z",
    "size": 111885,
    "path": "../public/_nuxt/11.9a7dd3d4.jpg"
  },
  "/_nuxt/11.ea39e8e0.js": {
    "type": "application/javascript",
    "etag": "\"67-QCo46q26889ypoNTZhgEgcPLdrg\"",
    "mtime": "2023-03-16T05:06:47.828Z",
    "size": 103,
    "path": "../public/_nuxt/11.ea39e8e0.js"
  },
  "/_nuxt/12.c2ad36cb.jpg": {
    "type": "image/jpeg",
    "etag": "\"f059-tL1O6FnSHpIn6PyW+jr0HhYlCNM\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 61529,
    "path": "../public/_nuxt/12.c2ad36cb.jpg"
  },
  "/_nuxt/13.6abdf22a.js": {
    "type": "application/javascript",
    "etag": "\"a3-5WA1AdDaCfh4BKgdCy879GIGsXQ\"",
    "mtime": "2023-03-16T05:06:48.163Z",
    "size": 163,
    "path": "../public/_nuxt/13.6abdf22a.js"
  },
  "/_nuxt/13.90b30ffe.jpg": {
    "type": "image/jpeg",
    "etag": "\"b144-ybdout+5Mbbh3EWko3+5PAxfv6Q\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 45380,
    "path": "../public/_nuxt/13.90b30ffe.jpg"
  },
  "/_nuxt/14.013bba01.jpg": {
    "type": "image/jpeg",
    "etag": "\"33531-itKyum+B8sa98prL5QBOfhNqswY\"",
    "mtime": "2023-03-16T05:06:47.282Z",
    "size": 210225,
    "path": "../public/_nuxt/14.013bba01.jpg"
  },
  "/_nuxt/15.3cd91978.jpg": {
    "type": "image/jpeg",
    "etag": "\"a629-vQLPuMdBlyb2pXLPDLaTXgUZjpQ\"",
    "mtime": "2023-03-16T05:06:47.402Z",
    "size": 42537,
    "path": "../public/_nuxt/15.3cd91978.jpg"
  },
  "/_nuxt/15.8a682cbb.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a053-dLBHEGR4dR6RCO8NHeiIc3hbCGI\"",
    "mtime": "2023-03-16T05:06:47.272Z",
    "size": 106579,
    "path": "../public/_nuxt/15.8a682cbb.jpg"
  },
  "/_nuxt/16.9574f1e7.jpg": {
    "type": "image/jpeg",
    "etag": "\"1cb2f-iu2YCwfEcNkpR2ZfnBJ1FzSbH/Q\"",
    "mtime": "2023-03-16T05:06:47.273Z",
    "size": 117551,
    "path": "../public/_nuxt/16.9574f1e7.jpg"
  },
  "/_nuxt/16.b014be8a.js": {
    "type": "application/javascript",
    "etag": "\"11b-om0S5Gqz0GdOkDzpbZBXZtsNlkU\"",
    "mtime": "2023-03-16T05:06:47.758Z",
    "size": 283,
    "path": "../public/_nuxt/16.b014be8a.js"
  },
  "/_nuxt/17.56e121f3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2be26-h/1EU1vVtvTtsXTmNrt0XAqwE54\"",
    "mtime": "2023-03-16T05:06:47.272Z",
    "size": 179750,
    "path": "../public/_nuxt/17.56e121f3.jpg"
  },
  "/_nuxt/2.5140257b.jpg": {
    "type": "image/jpeg",
    "etag": "\"906e-oUq2rBiqew2o7AaekPq5RDIh4vI\"",
    "mtime": "2023-03-16T05:06:47.400Z",
    "size": 36974,
    "path": "../public/_nuxt/2.5140257b.jpg"
  },
  "/_nuxt/2.af109c98.jpg": {
    "type": "image/jpeg",
    "etag": "\"18cc2-6RGTRINJ2j43eemlAM2oCfa93I8\"",
    "mtime": "2023-03-16T05:06:47.675Z",
    "size": 101570,
    "path": "../public/_nuxt/2.af109c98.jpg"
  },
  "/_nuxt/3.778fc245.png": {
    "type": "image/png",
    "etag": "\"1c14-Co0+aTaeBnkn1jznoKn29+qhKMM\"",
    "mtime": "2023-03-16T05:06:47.576Z",
    "size": 7188,
    "path": "../public/_nuxt/3.778fc245.png"
  },
  "/_nuxt/3.e6f9f820.jpg": {
    "type": "image/jpeg",
    "etag": "\"cb7e-62Ggg2J8SVyJnc2fq9jDBV2sW/M\"",
    "mtime": "2023-03-16T05:06:47.400Z",
    "size": 52094,
    "path": "../public/_nuxt/3.e6f9f820.jpg"
  },
  "/_nuxt/4.2f20a2ca.jpg": {
    "type": "image/jpeg",
    "etag": "\"7612-sf/kf2bLiQmkNsC3BGN+fuc/koM\"",
    "mtime": "2023-03-16T05:06:47.401Z",
    "size": 30226,
    "path": "../public/_nuxt/4.2f20a2ca.jpg"
  },
  "/_nuxt/4.9b24c10e.jpg": {
    "type": "image/jpeg",
    "etag": "\"eac2-k54ZnieFFOVLb9uj6jJbzOD75aI\"",
    "mtime": "2023-03-16T05:06:47.261Z",
    "size": 60098,
    "path": "../public/_nuxt/4.9b24c10e.jpg"
  },
  "/_nuxt/4.d8efe629.js": {
    "type": "application/javascript",
    "etag": "\"dc-eQk9AlYBjCIDwFJZ+YY8iPkqh3E\"",
    "mtime": "2023-03-16T05:06:47.835Z",
    "size": 220,
    "path": "../public/_nuxt/4.d8efe629.js"
  },
  "/_nuxt/5.8d03c3d5.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e13-1g2UPRQdrI4vY7bYQZ7a7BU9Y5k\"",
    "mtime": "2023-03-16T05:06:47.402Z",
    "size": 15891,
    "path": "../public/_nuxt/5.8d03c3d5.jpg"
  },
  "/_nuxt/6.3ee8ffa5.jpg": {
    "type": "image/jpeg",
    "etag": "\"710e-hrDPTBPtj0Fq28pk9kn4/LMoH68\"",
    "mtime": "2023-03-16T05:06:47.401Z",
    "size": 28942,
    "path": "../public/_nuxt/6.3ee8ffa5.jpg"
  },
  "/_nuxt/account.652a5266.js": {
    "type": "application/javascript",
    "etag": "\"611-Um4R61inrONgBmjiXRaW/ZZef/I\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 1553,
    "path": "../public/_nuxt/account.652a5266.js"
  },
  "/_nuxt/add-address.a449b47f.js": {
    "type": "application/javascript",
    "etag": "\"9f6-2B1e/HSbYsMEpbsz8QWyRNoRUmg\"",
    "mtime": "2023-03-16T05:06:47.782Z",
    "size": 2550,
    "path": "../public/_nuxt/add-address.a449b47f.js"
  },
  "/_nuxt/add-list.5cbf0e32.js": {
    "type": "application/javascript",
    "etag": "\"9de-3GB7JMQN1uDC7m33IHBJUHfBKfQ\"",
    "mtime": "2023-03-16T05:06:48.186Z",
    "size": 2526,
    "path": "../public/_nuxt/add-list.5cbf0e32.js"
  },
  "/_nuxt/addresses.f2344b07.js": {
    "type": "application/javascript",
    "etag": "\"50a-P77wiYXsEw2GIuWbT1owRUYW9jE\"",
    "mtime": "2023-03-16T05:06:48.155Z",
    "size": 1290,
    "path": "../public/_nuxt/addresses.f2344b07.js"
  },
  "/_nuxt/affiliateapply.737a75ed.js": {
    "type": "application/javascript",
    "etag": "\"f0-cPIRlnmwaY6ahN1ZLpfgZ8QtASM\"",
    "mtime": "2023-03-16T05:06:48.115Z",
    "size": 240,
    "path": "../public/_nuxt/affiliateapply.737a75ed.js"
  },
  "/_nuxt/Affiliates.0d188e63.js": {
    "type": "application/javascript",
    "etag": "\"18b3-8WJQ+pS+rsMyroSEBm2YUEkQgiE\"",
    "mtime": "2023-03-16T05:06:48.165Z",
    "size": 6323,
    "path": "../public/_nuxt/Affiliates.0d188e63.js"
  },
  "/_nuxt/applications.3ccecc48.js": {
    "type": "application/javascript",
    "etag": "\"3ff1-tWqjnCL0cw+EnnU9tNbJHNr2nHY\"",
    "mtime": "2023-03-16T05:06:48.114Z",
    "size": 16369,
    "path": "../public/_nuxt/applications.3ccecc48.js"
  },
  "/_nuxt/Appstore.73c34bb2.js": {
    "type": "application/javascript",
    "etag": "\"d75-g+IiBFh0gGLQ418PabIlQnnFELg\"",
    "mtime": "2023-03-16T05:06:47.813Z",
    "size": 3445,
    "path": "../public/_nuxt/Appstore.73c34bb2.js"
  },
  "/_nuxt/background1.f8215af4.jpg": {
    "type": "image/jpeg",
    "etag": "\"279d9-8kFecllanttoshU34lmm5ZvycYk\"",
    "mtime": "2023-03-16T05:06:47.126Z",
    "size": 162265,
    "path": "../public/_nuxt/background1.f8215af4.jpg"
  },
  "/_nuxt/background11.1ad7c125.jpg": {
    "type": "image/jpeg",
    "etag": "\"2632c-WLZNYUShHyBX81Mu0OoDHMCjPRg\"",
    "mtime": "2023-03-16T05:06:47.127Z",
    "size": 156460,
    "path": "../public/_nuxt/background11.1ad7c125.jpg"
  },
  "/_nuxt/background12.124eb5ff.jpg": {
    "type": "image/jpeg",
    "etag": "\"1fa36-1KqTLubU5yNQl01j/49iw9je6Gc\"",
    "mtime": "2023-03-16T05:06:47.144Z",
    "size": 129590,
    "path": "../public/_nuxt/background12.124eb5ff.jpg"
  },
  "/_nuxt/background16.4a34e56b.jpg": {
    "type": "image/jpeg",
    "etag": "\"44849-fjGMQeJqumTLfhIHPCUsNhna3IY\"",
    "mtime": "2023-03-16T05:06:47.289Z",
    "size": 280649,
    "path": "../public/_nuxt/background16.4a34e56b.jpg"
  },
  "/_nuxt/background16.9f5acce8.js": {
    "type": "application/javascript",
    "etag": "\"71-NdQgPjUb7GQQbK2yMHG5W+PNipo\"",
    "mtime": "2023-03-16T05:06:48.043Z",
    "size": 113,
    "path": "../public/_nuxt/background16.9f5acce8.js"
  },
  "/_nuxt/background2.6cb940dc.jpg": {
    "type": "image/jpeg",
    "etag": "\"33f13-N7eRVtmrJq8IgNRDTl1RjFwlAIA\"",
    "mtime": "2023-03-16T05:06:47.577Z",
    "size": 212755,
    "path": "../public/_nuxt/background2.6cb940dc.jpg"
  },
  "/_nuxt/background3.2f1081c5.jpg": {
    "type": "image/jpeg",
    "etag": "\"17ea0-l0TDHoXMr36xCWww9xupV7vUfeI\"",
    "mtime": "2023-03-16T05:06:47.112Z",
    "size": 97952,
    "path": "../public/_nuxt/background3.2f1081c5.jpg"
  },
  "/_nuxt/background4.92e5a327.jpg": {
    "type": "image/jpeg",
    "etag": "\"37ebd-wGHhbCFpTGiB0g4gmFzrM50OUa0\"",
    "mtime": "2023-03-16T05:06:47.116Z",
    "size": 229053,
    "path": "../public/_nuxt/background4.92e5a327.jpg"
  },
  "/_nuxt/background5.e66dec19.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a4ca-zYNxgDfdCJT3jWcJuUTPLx5hYdQ\"",
    "mtime": "2023-03-16T05:06:47.126Z",
    "size": 107722,
    "path": "../public/_nuxt/background5.e66dec19.jpg"
  },
  "/_nuxt/background6.e0e6714a.jpg": {
    "type": "image/jpeg",
    "etag": "\"24d6c-kHr9oJhY20ofF3uGnULcodPiLJY\"",
    "mtime": "2023-03-16T05:06:47.135Z",
    "size": 150892,
    "path": "../public/_nuxt/background6.e0e6714a.jpg"
  },
  "/_nuxt/background7.58bb7717.jpg": {
    "type": "image/jpeg",
    "etag": "\"3ab3e-MGl+UqJY/NofHxwkJrtygvZf5FE\"",
    "mtime": "2023-03-16T05:06:47.127Z",
    "size": 240446,
    "path": "../public/_nuxt/background7.58bb7717.jpg"
  },
  "/_nuxt/big-height.633e7b12.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e7c4-bJyyfW6IbHlaSJy3Ca8tr9RPS5I\"",
    "mtime": "2023-03-16T05:06:47.465Z",
    "size": 124868,
    "path": "../public/_nuxt/big-height.633e7b12.jpg"
  },
  "/_nuxt/big-height.e54862fb.js": {
    "type": "application/javascript",
    "etag": "\"6f-iABc3fCTJ/3qYBaZWg9hUULoLsg\"",
    "mtime": "2023-03-16T05:06:48.040Z",
    "size": 111,
    "path": "../public/_nuxt/big-height.e54862fb.js"
  },
  "/_nuxt/Books.28fd4697.js": {
    "type": "application/javascript",
    "etag": "\"33f4-do797JDmzi4vF0iA6GZ3XKnA+Us\"",
    "mtime": "2023-03-16T05:06:48.080Z",
    "size": 13300,
    "path": "../public/_nuxt/Books.28fd4697.js"
  },
  "/_nuxt/buyagain.68594854.js": {
    "type": "application/javascript",
    "etag": "\"1101-gbvtYx6A+Eq1zAM0xPiN2Odoztk\"",
    "mtime": "2023-03-16T05:06:48.080Z",
    "size": 4353,
    "path": "../public/_nuxt/buyagain.68594854.js"
  },
  "/_nuxt/buyers.a93cc67f.js": {
    "type": "application/javascript",
    "etag": "\"1186-PhCZjDWg6kjBW97oGo34rHikYu0\"",
    "mtime": "2023-03-16T05:06:47.932Z",
    "size": 4486,
    "path": "../public/_nuxt/buyers.a93cc67f.js"
  },
  "/_nuxt/callback.4471e008.js": {
    "type": "application/javascript",
    "etag": "\"194-fVulty89bHoHZEgGmH9THzjPI6I\"",
    "mtime": "2023-03-16T05:06:47.752Z",
    "size": 404,
    "path": "../public/_nuxt/callback.4471e008.js"
  },
  "/_nuxt/careers.2ee736b1.js": {
    "type": "application/javascript",
    "etag": "\"e0-cejCXu+29wibt5BuLjbXKt8QH5M\"",
    "mtime": "2023-03-16T05:06:47.693Z",
    "size": 224,
    "path": "../public/_nuxt/careers.2ee736b1.js"
  },
  "/_nuxt/cart.d47fc530.js": {
    "type": "application/javascript",
    "etag": "\"f7a-twc1aGEwOMaOE8esXOi+czMW4Gs\"",
    "mtime": "2023-03-16T05:06:48.123Z",
    "size": 3962,
    "path": "../public/_nuxt/cart.d47fc530.js"
  },
  "/_nuxt/charts.53bcd3d9.js": {
    "type": "application/javascript",
    "etag": "\"1381-FxPt6JQdEx4zkj0Fxeqz9uJC0W4\"",
    "mtime": "2023-03-16T05:06:48.113Z",
    "size": 4993,
    "path": "../public/_nuxt/charts.53bcd3d9.js"
  },
  "/_nuxt/Charts.ae984b9b.js": {
    "type": "application/javascript",
    "etag": "\"6b8-WZZ5labvY3T8hws3J6ePQe3pQts\"",
    "mtime": "2023-03-16T05:06:47.828Z",
    "size": 1720,
    "path": "../public/_nuxt/Charts.ae984b9b.js"
  },
  "/_nuxt/checkout.89ffaccd.js": {
    "type": "application/javascript",
    "etag": "\"e2-SMXKiKKgQWVBdlajZVkqN+4bSOM\"",
    "mtime": "2023-03-16T05:06:48.028Z",
    "size": 226,
    "path": "../public/_nuxt/checkout.89ffaccd.js"
  },
  "/_nuxt/client-db.cc4dcd3a.js": {
    "type": "application/javascript",
    "etag": "\"4957-qD9Aq7BasWtHPfApTQ7EDmVGvEU\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 18775,
    "path": "../public/_nuxt/client-db.cc4dcd3a.js"
  },
  "/_nuxt/composables.cafbcfda.js": {
    "type": "application/javascript",
    "etag": "\"5c-m3ieU1aRHdJyp+dd2jqkPdjwbwg\"",
    "mtime": "2023-03-16T05:06:47.874Z",
    "size": 92,
    "path": "../public/_nuxt/composables.cafbcfda.js"
  },
  "/_nuxt/ContentDoc.9730e7d7.js": {
    "type": "application/javascript",
    "etag": "\"7f1-0RB0AKsRiypgbdk1IhPKb6MAbMM\"",
    "mtime": "2023-03-16T05:06:47.924Z",
    "size": 2033,
    "path": "../public/_nuxt/ContentDoc.9730e7d7.js"
  },
  "/_nuxt/ContentList.260251cb.js": {
    "type": "application/javascript",
    "etag": "\"388-On9gcySO+qdj7CnvbB6b2KZ+Z/8\"",
    "mtime": "2023-03-16T05:06:48.164Z",
    "size": 904,
    "path": "../public/_nuxt/ContentList.260251cb.js"
  },
  "/_nuxt/ContentNavigation.39036772.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"30a6-DHQUJS2d0J5ERn571suqqWz6msk\"",
    "mtime": "2023-03-16T05:06:47.671Z",
    "size": 12454,
    "path": "../public/_nuxt/ContentNavigation.39036772.css"
  },
  "/_nuxt/ContentNavigation.630658a4.js": {
    "type": "application/javascript",
    "etag": "\"8b488-qiZqHbXPX0vOX7m2XxasxRvz4Uc\"",
    "mtime": "2023-03-16T05:06:48.261Z",
    "size": 570504,
    "path": "../public/_nuxt/ContentNavigation.630658a4.js"
  },
  "/_nuxt/ContentQuery.7c5ca978.js": {
    "type": "application/javascript",
    "etag": "\"8cc-tcsoxQAZcAIorXPfzyNANO8cMyY\"",
    "mtime": "2023-03-16T05:06:48.029Z",
    "size": 2252,
    "path": "../public/_nuxt/ContentQuery.7c5ca978.js"
  },
  "/_nuxt/ContentRenderer.9c69b0e5.js": {
    "type": "application/javascript",
    "etag": "\"4d2-m+lwwAIs9PW6ma9K6rbLKTB8NaI\"",
    "mtime": "2023-03-16T05:06:48.042Z",
    "size": 1234,
    "path": "../public/_nuxt/ContentRenderer.9c69b0e5.js"
  },
  "/_nuxt/ContentRendererMarkdown.26e321e8.js": {
    "type": "application/javascript",
    "etag": "\"5653-o5oJ48wj9n5SkejTjAggjsET2PM\"",
    "mtime": "2023-03-16T05:06:48.058Z",
    "size": 22099,
    "path": "../public/_nuxt/ContentRendererMarkdown.26e321e8.js"
  },
  "/_nuxt/ContentSlot.398654bf.js": {
    "type": "application/javascript",
    "etag": "\"3e8-/vYawZehGk6Ny1ewaeNvp8pamW8\"",
    "mtime": "2023-03-16T05:06:48.125Z",
    "size": 1000,
    "path": "../public/_nuxt/ContentSlot.398654bf.js"
  },
  "/_nuxt/corner.18478d37.js": {
    "type": "application/javascript",
    "etag": "\"e7-xOOsS9+lgMzpg1Fk9OvIrl2RH5k\"",
    "mtime": "2023-03-16T05:06:48.163Z",
    "size": 231,
    "path": "../public/_nuxt/corner.18478d37.js"
  },
  "/_nuxt/coupons.fed61cc7.js": {
    "type": "application/javascript",
    "etag": "\"10fc-mH7H9neqZmfyUgn0tMihA6hjXyU\"",
    "mtime": "2023-03-16T05:06:48.155Z",
    "size": 4348,
    "path": "../public/_nuxt/coupons.fed61cc7.js"
  },
  "/_nuxt/deals.d477ed04.js": {
    "type": "application/javascript",
    "etag": "\"c00-rDz6V2aQTLySMkxhFM+dL/m0zZk\"",
    "mtime": "2023-03-16T05:06:48.081Z",
    "size": 3072,
    "path": "../public/_nuxt/deals.d477ed04.js"
  },
  "/_nuxt/default.7e1d69a9.js": {
    "type": "application/javascript",
    "etag": "\"332d-7vbjcEBMyBqayIlXNeCQHXfxBC0\"",
    "mtime": "2023-03-16T05:06:48.082Z",
    "size": 13101,
    "path": "../public/_nuxt/default.7e1d69a9.js"
  },
  "/_nuxt/dei.c5feaddf.js": {
    "type": "application/javascript",
    "etag": "\"576-BdYAzjQFJRfIS0Gx3QBvPp2xWZ4\"",
    "mtime": "2023-03-16T05:06:47.750Z",
    "size": 1398,
    "path": "../public/_nuxt/dei.c5feaddf.js"
  },
  "/_nuxt/design20.b8b73e0b.jpg": {
    "type": "image/jpeg",
    "etag": "\"2c3ec-IP/vuxcsPqOJy80Srdq+RO7fg1s\"",
    "mtime": "2023-03-16T05:06:47.442Z",
    "size": 181228,
    "path": "../public/_nuxt/design20.b8b73e0b.jpg"
  },
  "/_nuxt/design20.f78b8aa8.js": {
    "type": "application/javascript",
    "etag": "\"f1-wTl9W5bt1TlG8qLKpOr6g7iF+Y4\"",
    "mtime": "2023-03-16T05:06:48.254Z",
    "size": 241,
    "path": "../public/_nuxt/design20.f78b8aa8.js"
  },
  "/_nuxt/design21.4755cf6d.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f816-mb8JwAdQKUtETi0o4smFpTR/GdM\"",
    "mtime": "2023-03-16T05:06:47.423Z",
    "size": 129046,
    "path": "../public/_nuxt/design21.4755cf6d.jpg"
  },
  "/_nuxt/design31.20a7a4b1.jpg": {
    "type": "image/jpeg",
    "etag": "\"118b2-PBambm9iYZ+yyLnDNvChGW2cN8c\"",
    "mtime": "2023-03-16T05:06:47.415Z",
    "size": 71858,
    "path": "../public/_nuxt/design31.20a7a4b1.jpg"
  },
  "/_nuxt/developers.fa9b7a71.js": {
    "type": "application/javascript",
    "etag": "\"3bc-SBJHsbY+z/k9/m5uSB2TCQTYPLM\"",
    "mtime": "2023-03-16T05:06:47.751Z",
    "size": 956,
    "path": "../public/_nuxt/developers.fa9b7a71.js"
  },
  "/_nuxt/DocumentDrivenEmpty.6468834d.js": {
    "type": "application/javascript",
    "etag": "\"120-w7NMlrsPW3odhQUej2Mo41+eDD8\"",
    "mtime": "2023-03-16T05:06:48.041Z",
    "size": 288,
    "path": "../public/_nuxt/DocumentDrivenEmpty.6468834d.js"
  },
  "/_nuxt/DocumentDrivenNotFound.d7c8bc3a.js": {
    "type": "application/javascript",
    "etag": "\"9f-7znCCncFqjL5vkyVfFuhJNU1Orc\"",
    "mtime": "2023-03-16T05:06:47.905Z",
    "size": 159,
    "path": "../public/_nuxt/DocumentDrivenNotFound.d7c8bc3a.js"
  },
  "/_nuxt/entry.4d806ec5.js": {
    "type": "application/javascript",
    "etag": "\"1cf0a2-ya5JaG2eK0tC9pNfkJ9a3dw5Ptg\"",
    "mtime": "2023-03-16T05:06:48.266Z",
    "size": 1896610,
    "path": "../public/_nuxt/entry.4d806ec5.js"
  },
  "/_nuxt/entry.ecaac564.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"10e611-R8T3MamK5egbz8j3TpWwpYrENVk\"",
    "mtime": "2023-03-16T05:06:47.712Z",
    "size": 1107473,
    "path": "../public/_nuxt/entry.ecaac564.css"
  },
  "/_nuxt/error-404.1bd4df3a.js": {
    "type": "application/javascript",
    "etag": "\"8fb-ncALx8cJYu1e9q6+BpKng+GuqWY\"",
    "mtime": "2023-03-16T05:06:48.256Z",
    "size": 2299,
    "path": "../public/_nuxt/error-404.1bd4df3a.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-03-16T05:06:47.678Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-500.81926850.js": {
    "type": "application/javascript",
    "etag": "\"77f-h26dG4whsr0BIC/7UdFy9w4DD/8\"",
    "mtime": "2023-03-16T05:06:48.256Z",
    "size": 1919,
    "path": "../public/_nuxt/error-500.81926850.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-03-16T05:06:47.676Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.51ee622a.js": {
    "type": "application/javascript",
    "etag": "\"4b0-A8BssGb9aQVwQtslPog1GrYOo5E\"",
    "mtime": "2023-03-16T05:06:47.924Z",
    "size": 1200,
    "path": "../public/_nuxt/error-component.51ee622a.js"
  },
  "/_nuxt/events.b5701cf6.js": {
    "type": "application/javascript",
    "etag": "\"dc6-WRCbdC5vdJjjT9GMUWgaEm9BstY\"",
    "mtime": "2023-03-16T05:06:48.058Z",
    "size": 3526,
    "path": "../public/_nuxt/events.b5701cf6.js"
  },
  "/_nuxt/exclusives.5e644a64.js": {
    "type": "application/javascript",
    "etag": "\"b98-AaY9LSz82PltMXwif6XT3GW0mfo\"",
    "mtime": "2023-03-16T05:06:48.124Z",
    "size": 2968,
    "path": "../public/_nuxt/exclusives.5e644a64.js"
  },
  "/_nuxt/face5.4bb26c7a.jpg": {
    "type": "image/jpeg",
    "etag": "\"25277-+kzRlAVOEQernPNsLKX/rRIYuws\"",
    "mtime": "2023-03-16T05:06:47.391Z",
    "size": 152183,
    "path": "../public/_nuxt/face5.4bb26c7a.jpg"
  },
  "/_nuxt/face6.79f578f5.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a195-CRNhfN7TFtdt6xw9apNlHQTTuac\"",
    "mtime": "2023-03-16T05:06:47.391Z",
    "size": 172437,
    "path": "../public/_nuxt/face6.79f578f5.jpg"
  },
  "/_nuxt/face7.ba1415ca.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b891-edUg6Vw0S1QLaAmxeaIgyrJnEWc\"",
    "mtime": "2023-03-16T05:06:47.391Z",
    "size": 112785,
    "path": "../public/_nuxt/face7.ba1415ca.jpg"
  },
  "/_nuxt/face8.636c2eb6.js": {
    "type": "application/javascript",
    "etag": "\"127-SOjzRTZmRG9nY5bgwftvsm58OZo\"",
    "mtime": "2023-03-16T05:06:47.861Z",
    "size": 295,
    "path": "../public/_nuxt/face8.636c2eb6.js"
  },
  "/_nuxt/face8.6aeac576.jpg": {
    "type": "image/jpeg",
    "etag": "\"2bda7-E85X48W+FVjk7K4RJiYEcosbC8c\"",
    "mtime": "2023-03-16T05:06:47.401Z",
    "size": 179623,
    "path": "../public/_nuxt/face8.6aeac576.jpg"
  },
  "/_nuxt/features1.7a70b29e.jpg": {
    "type": "image/jpeg",
    "etag": "\"602a-Wr0gg3kFbosuF/YUxlR4jdgoOqo\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 24618,
    "path": "../public/_nuxt/features1.7a70b29e.jpg"
  },
  "/_nuxt/features2.114b8f2c.jpg": {
    "type": "image/jpeg",
    "etag": "\"4862-1FqIDuX80xE5tXPQhL7GcPtujK4\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 18530,
    "path": "../public/_nuxt/features2.114b8f2c.jpg"
  },
  "/_nuxt/features3.3c62df2b.jpg": {
    "type": "image/jpeg",
    "etag": "\"3463-smLJRCbeQs9eLVImw33yhWhebes\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 13411,
    "path": "../public/_nuxt/features3.3c62df2b.jpg"
  },
  "/_nuxt/features3.d471fca1.js": {
    "type": "application/javascript",
    "etag": "\"f4-RIym5dN5FCN4yyup6DQs4AroniU\"",
    "mtime": "2023-03-16T05:06:48.081Z",
    "size": 244,
    "path": "../public/_nuxt/features3.d471fca1.js"
  },
  "/_nuxt/forgot-password.b55c6580.js": {
    "type": "application/javascript",
    "etag": "\"3df-yUo2vS5Xml4FPIrBT3gXTaVYphc\"",
    "mtime": "2023-03-16T05:06:48.164Z",
    "size": 991,
    "path": "../public/_nuxt/forgot-password.b55c6580.js"
  },
  "/_nuxt/galleries.4efc9f43.js": {
    "type": "application/javascript",
    "etag": "\"1384-hWkDNtuwMlODPQ2+Fda34TQqmxc\"",
    "mtime": "2023-03-16T05:06:48.080Z",
    "size": 4996,
    "path": "../public/_nuxt/galleries.4efc9f43.js"
  },
  "/_nuxt/gallery05.59d6da2a.jpg": {
    "type": "image/jpeg",
    "etag": "\"c5ea-zgDg8PNibA707QVcrBOi5UlkWZU\"",
    "mtime": "2023-03-16T05:06:47.402Z",
    "size": 50666,
    "path": "../public/_nuxt/gallery05.59d6da2a.jpg"
  },
  "/_nuxt/Games.76ecf76d.js": {
    "type": "application/javascript",
    "etag": "\"33f4-Af7PdXc/VAP76KIVi+tk+nTEloQ\"",
    "mtime": "2023-03-16T05:06:48.139Z",
    "size": 13300,
    "path": "../public/_nuxt/Games.76ecf76d.js"
  },
  "/_nuxt/Grocery.01b48709.js": {
    "type": "application/javascript",
    "etag": "\"2c19-FrjC0sQSh+ue0XV3lTExp3RX36A\"",
    "mtime": "2023-03-16T05:06:48.106Z",
    "size": 11289,
    "path": "../public/_nuxt/Grocery.01b48709.js"
  },
  "/_nuxt/groups.2469a1e4.js": {
    "type": "application/javascript",
    "etag": "\"97a-gW2jgHoPGPHgf0Ky9EHaem4emeE\"",
    "mtime": "2023-03-16T05:06:48.149Z",
    "size": 2426,
    "path": "../public/_nuxt/groups.2469a1e4.js"
  },
  "/_nuxt/history.3446691f.js": {
    "type": "application/javascript",
    "etag": "\"571-G9nyUAbdAElW5O0hfsMOhrSQ36o\"",
    "mtime": "2023-03-16T05:06:47.790Z",
    "size": 1393,
    "path": "../public/_nuxt/history.3446691f.js"
  },
  "/_nuxt/image12.c1f02d80.jpg": {
    "type": "image/jpeg",
    "etag": "\"27da-7klHeNtHS6AHRKnsPLOguCMAgIQ\"",
    "mtime": "2023-03-16T05:06:47.547Z",
    "size": 10202,
    "path": "../public/_nuxt/image12.c1f02d80.jpg"
  },
  "/_nuxt/index.1222938d.js": {
    "type": "application/javascript",
    "etag": "\"49ab-JCSapUUHo2a9kjYaO8OEVIcTDno\"",
    "mtime": "2023-03-16T05:06:47.905Z",
    "size": 18859,
    "path": "../public/_nuxt/index.1222938d.js"
  },
  "/_nuxt/index.1fa9de38.js": {
    "type": "application/javascript",
    "etag": "\"17b7-xw1BUG4D7dne3yLEck85ZxU6PdY\"",
    "mtime": "2023-03-16T05:06:48.164Z",
    "size": 6071,
    "path": "../public/_nuxt/index.1fa9de38.js"
  },
  "/_nuxt/index.298d0915.js": {
    "type": "application/javascript",
    "etag": "\"24f8-syhuDIXqhMqBmCluA9d/Bcjs2TY\"",
    "mtime": "2023-03-16T05:06:48.081Z",
    "size": 9464,
    "path": "../public/_nuxt/index.298d0915.js"
  },
  "/_nuxt/index.2ea883d4.js": {
    "type": "application/javascript",
    "etag": "\"628-YBVKdrEN8sy7ZlMRRvT5WqkA4gQ\"",
    "mtime": "2023-03-16T05:06:48.253Z",
    "size": 1576,
    "path": "../public/_nuxt/index.2ea883d4.js"
  },
  "/_nuxt/index.3db656f6.js": {
    "type": "application/javascript",
    "etag": "\"3114-7yYcd5WrbaM6yP9SWMtA0LQUM3c\"",
    "mtime": "2023-03-16T05:06:47.783Z",
    "size": 12564,
    "path": "../public/_nuxt/index.3db656f6.js"
  },
  "/_nuxt/index.4876b821.js": {
    "type": "application/javascript",
    "etag": "\"2db6-Xe2/mqpq9IyBs4TnlJ0gHf6PbY8\"",
    "mtime": "2023-03-16T05:06:48.156Z",
    "size": 11702,
    "path": "../public/_nuxt/index.4876b821.js"
  },
  "/_nuxt/index.5e61b713.js": {
    "type": "application/javascript",
    "etag": "\"a21-ojaKvpVFS5IgueNdVLAHesR5DyU\"",
    "mtime": "2023-03-16T05:06:47.829Z",
    "size": 2593,
    "path": "../public/_nuxt/index.5e61b713.js"
  },
  "/_nuxt/index.60af9a27.js": {
    "type": "application/javascript",
    "etag": "\"19f9-7VpWl4fe26NDgB8j+5V/OrGEGWY\"",
    "mtime": "2023-03-16T05:06:47.953Z",
    "size": 6649,
    "path": "../public/_nuxt/index.60af9a27.js"
  },
  "/_nuxt/index.80e2a0c6.js": {
    "type": "application/javascript",
    "etag": "\"1fd8-HWYbj88DAXA18u1QoM7d+D1WZF8\"",
    "mtime": "2023-03-16T05:06:48.163Z",
    "size": 8152,
    "path": "../public/_nuxt/index.80e2a0c6.js"
  },
  "/_nuxt/index.a6ef77ff.js": {
    "type": "application/javascript",
    "etag": "\"26c-+VpW5S3yY9LeN0pZkd2hWLzNeBY\"",
    "mtime": "2023-03-16T05:06:48.081Z",
    "size": 620,
    "path": "../public/_nuxt/index.a6ef77ff.js"
  },
  "/_nuxt/index.b44fab1a.js": {
    "type": "application/javascript",
    "etag": "\"d6d-Cp6ylFThp+Cw05CAlNOiZ1IzOtM\"",
    "mtime": "2023-03-16T05:06:48.173Z",
    "size": 3437,
    "path": "../public/_nuxt/index.b44fab1a.js"
  },
  "/_nuxt/index.c98eb4b3.js": {
    "type": "application/javascript",
    "etag": "\"a20-LfS/xafGdYxdvz5lItXdE0cYdIQ\"",
    "mtime": "2023-03-16T05:06:47.926Z",
    "size": 2592,
    "path": "../public/_nuxt/index.c98eb4b3.js"
  },
  "/_nuxt/index.f50cb84d.js": {
    "type": "application/javascript",
    "etag": "\"e6-nXhKN5WdWPihqv+ovOO2W3L2Qsw\"",
    "mtime": "2023-03-16T05:06:47.814Z",
    "size": 230,
    "path": "../public/_nuxt/index.f50cb84d.js"
  },
  "/_nuxt/index.ff895998.js": {
    "type": "application/javascript",
    "etag": "\"1f31-w28kvY1sK3zCpyKXBA8Hl8731Xs\"",
    "mtime": "2023-03-16T05:06:48.122Z",
    "size": 7985,
    "path": "../public/_nuxt/index.ff895998.js"
  },
  "/_nuxt/investors.45091c5e.js": {
    "type": "application/javascript",
    "etag": "\"562-dps8TxqLoEoAjpE9gxv4vkNDq6s\"",
    "mtime": "2023-03-16T05:06:47.943Z",
    "size": 1378,
    "path": "../public/_nuxt/investors.45091c5e.js"
  },
  "/_nuxt/licenses.e85aca7b.js": {
    "type": "application/javascript",
    "etag": "\"55f-aMxPJvILyh8InBCuEjG/UqJqzx0\"",
    "mtime": "2023-03-16T05:06:47.775Z",
    "size": 1375,
    "path": "../public/_nuxt/licenses.e85aca7b.js"
  },
  "/_nuxt/lists.8b5a0acf.js": {
    "type": "application/javascript",
    "etag": "\"aad-b/lyD7rn++Qd1l6cxcVB4EaTL+4\"",
    "mtime": "2023-03-16T05:06:47.813Z",
    "size": 2733,
    "path": "../public/_nuxt/lists.8b5a0acf.js"
  },
  "/_nuxt/lists.bbfe1d12.js": {
    "type": "application/javascript",
    "etag": "\"10fd-qPC0YnM5fYTIPwc/Ron+H0vTdys\"",
    "mtime": "2023-03-16T05:06:48.122Z",
    "size": 4349,
    "path": "../public/_nuxt/lists.bbfe1d12.js"
  },
  "/_nuxt/login.7cc374bf.js": {
    "type": "application/javascript",
    "etag": "\"5b2-CSpvokmjnI2iV0TSguBj4BGKJtc\"",
    "mtime": "2023-03-16T05:06:47.759Z",
    "size": 1458,
    "path": "../public/_nuxt/login.7cc374bf.js"
  },
  "/_nuxt/Markdown.6c2e4095.js": {
    "type": "application/javascript",
    "etag": "\"160-8RuhBX50VnDpgx8hDeOgKzLgTL0\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 352,
    "path": "../public/_nuxt/Markdown.6c2e4095.js"
  },
  "/_nuxt/materialdesignicons-webfont.6d5e4be4.woff": {
    "type": "font/woff",
    "etag": "\"8ad48-8fBPxn8AuTHR6aNqnpd7/YZOYX8\"",
    "mtime": "2023-03-16T05:06:47.228Z",
    "size": 568648,
    "path": "../public/_nuxt/materialdesignicons-webfont.6d5e4be4.woff"
  },
  "/_nuxt/materialdesignicons-webfont.739dc70d.woff2": {
    "type": "font/woff2",
    "etag": "\"5fa08-x2c2gG9GszeWFK/zkIHWweCMXSI\"",
    "mtime": "2023-03-16T05:06:47.206Z",
    "size": 391688,
    "path": "../public/_nuxt/materialdesignicons-webfont.739dc70d.woff2"
  },
  "/_nuxt/materialdesignicons-webfont.c02d41ce.ttf": {
    "type": "font/ttf",
    "etag": "\"1340e0-0j+vWGoLzkw+W0jSd4RXTdcjOAI\"",
    "mtime": "2023-03-16T05:06:47.249Z",
    "size": 1261792,
    "path": "../public/_nuxt/materialdesignicons-webfont.c02d41ce.ttf"
  },
  "/_nuxt/materialdesignicons-webfont.f5966bae.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"1341bc-IPFqEZIUYBdgxGkgWDK5VXZOlmw\"",
    "mtime": "2023-03-16T05:06:47.235Z",
    "size": 1262012,
    "path": "../public/_nuxt/materialdesignicons-webfont.f5966bae.eot"
  },
  "/_nuxt/mbr-1-1920x1280.99a6cd8e.jpg": {
    "type": "image/jpeg",
    "etag": "\"93847-nYD40LcyCrg9Sda+2YfCzOFefhc\"",
    "mtime": "2023-03-16T05:06:47.226Z",
    "size": 604231,
    "path": "../public/_nuxt/mbr-1-1920x1280.99a6cd8e.jpg"
  },
  "/_nuxt/mbr-1-1920x1281.6a2f2d15.jpg": {
    "type": "image/jpeg",
    "etag": "\"7baf7-yBkPWGy581KSbz7qiNs7RnKsKyY\"",
    "mtime": "2023-03-16T05:06:47.192Z",
    "size": 506615,
    "path": "../public/_nuxt/mbr-1-1920x1281.6a2f2d15.jpg"
  },
  "/_nuxt/mbr-1-1920x1920.3cdfef4b.jpg": {
    "type": "image/jpeg",
    "etag": "\"747a9-8y66AEtTdOpPCKJPiqLsmDmZXmo\"",
    "mtime": "2023-03-16T05:06:47.192Z",
    "size": 477097,
    "path": "../public/_nuxt/mbr-1-1920x1920.3cdfef4b.jpg"
  },
  "/_nuxt/mbr-1-676x451.c142cfea.jpg": {
    "type": "image/jpeg",
    "etag": "\"ea23-J3yAQ56Kko8Yw9sLTBQ3Spnmd1E\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 59939,
    "path": "../public/_nuxt/mbr-1-676x451.c142cfea.jpg"
  },
  "/_nuxt/mbr-1-696x696.40d91d75.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e1d0-A96acOOMFLe2Ag+r4LF4bVFVa5o\"",
    "mtime": "2023-03-16T05:06:47.568Z",
    "size": 188880,
    "path": "../public/_nuxt/mbr-1-696x696.40d91d75.jpg"
  },
  "/_nuxt/mbr-1-712x475.68e0d527.jpg": {
    "type": "image/jpeg",
    "etag": "\"1731b-4Pia6H2mFHjyMVzqtal1EHfcb6E\"",
    "mtime": "2023-03-16T05:06:47.473Z",
    "size": 95003,
    "path": "../public/_nuxt/mbr-1-712x475.68e0d527.jpg"
  },
  "/_nuxt/mbr-1-950x633.1b19980b.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b831-iYsuxLi5D+GKHxF/Ofq8uSNiH70\"",
    "mtime": "2023-03-16T05:06:47.506Z",
    "size": 112689,
    "path": "../public/_nuxt/mbr-1-950x633.1b19980b.jpg"
  },
  "/_nuxt/mbr-1.4f9d127a.jpg": {
    "type": "image/jpeg",
    "etag": "\"63483-D8iWrwTqAtZzLGMjQ8AjKjEVgZI\"",
    "mtime": "2023-03-16T05:06:47.669Z",
    "size": 406659,
    "path": "../public/_nuxt/mbr-1.4f9d127a.jpg"
  },
  "/_nuxt/mbr-10-696x464.49448272.jpg": {
    "type": "image/jpeg",
    "etag": "\"1602e-dgwWC3VkfIc95qVclxZIn/RiGq8\"",
    "mtime": "2023-03-16T05:06:47.488Z",
    "size": 90158,
    "path": "../public/_nuxt/mbr-10-696x464.49448272.jpg"
  },
  "/_nuxt/mbr-1224x816.9dca31aa.jpg": {
    "type": "image/jpeg",
    "etag": "\"56ef8-9A1qqGCzHN27VWXvaLiTS5Z8MAE\"",
    "mtime": "2023-03-16T05:06:47.577Z",
    "size": 356088,
    "path": "../public/_nuxt/mbr-1224x816.9dca31aa.jpg"
  },
  "/_nuxt/mbr-1553x1035.ace90e80.jpg": {
    "type": "image/jpeg",
    "etag": "\"9d4d1-vf0sDehJPL0U66s2hdLLoJqGEQs\"",
    "mtime": "2023-03-16T05:06:47.505Z",
    "size": 644305,
    "path": "../public/_nuxt/mbr-1553x1035.ace90e80.jpg"
  },
  "/_nuxt/mbr-17-1920x1280.07375760.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a6a9-NRnh4KCwrJ9mcL+BqZL/1GyrooY\"",
    "mtime": "2023-03-16T05:06:47.115Z",
    "size": 173737,
    "path": "../public/_nuxt/mbr-17-1920x1280.07375760.jpg"
  },
  "/_nuxt/mbr-1900x1069.e4352d85.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d063-H01kjypL6U7KkdMuXknzy+3qQjU\"",
    "mtime": "2023-03-16T05:06:47.554Z",
    "size": 446563,
    "path": "../public/_nuxt/mbr-1900x1069.e4352d85.jpg"
  },
  "/_nuxt/mbr-1900x1266.0697e1ce.jpg": {
    "type": "image/jpeg",
    "etag": "\"7d6d6-xxa4jgcIyvnyMTz4DoXldhAQx0g\"",
    "mtime": "2023-03-16T05:06:47.537Z",
    "size": 513750,
    "path": "../public/_nuxt/mbr-1900x1266.0697e1ce.jpg"
  },
  "/_nuxt/mbr-1900x1267.f7d3d053.jpg": {
    "type": "image/jpeg",
    "etag": "\"6d53e-o7AhDEOoFiwKRkBywZXzM+I16uw\"",
    "mtime": "2023-03-16T05:06:47.116Z",
    "size": 447806,
    "path": "../public/_nuxt/mbr-1900x1267.f7d3d053.jpg"
  },
  "/_nuxt/mbr-1900x1268.29e5e697.jpg": {
    "type": "image/jpeg",
    "etag": "\"696c3-fRhwJT9yFJJev6/QKz+alPvmAmM\"",
    "mtime": "2023-03-16T05:06:47.556Z",
    "size": 431811,
    "path": "../public/_nuxt/mbr-1900x1268.29e5e697.jpg"
  },
  "/_nuxt/mbr-1900x1268.5af22972.js": {
    "type": "application/javascript",
    "etag": "\"100-NZj7HZgJkPNGCB5AFq4D6d9FXn0\"",
    "mtime": "2023-03-16T05:06:48.082Z",
    "size": 256,
    "path": "../public/_nuxt/mbr-1900x1268.5af22972.js"
  },
  "/_nuxt/mbr-1900x1425.9ba3541c.jpg": {
    "type": "image/jpeg",
    "etag": "\"9138f-UFdeSaGhIuUo8bsexalCI8NmLE4\"",
    "mtime": "2023-03-16T05:06:47.226Z",
    "size": 594831,
    "path": "../public/_nuxt/mbr-1900x1425.9ba3541c.jpg"
  },
  "/_nuxt/mbr-1920x1080.aa6705c7.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d7ed-EnWOEFnRcx2aK7mkjNDLmC7yOe8\"",
    "mtime": "2023-03-16T05:06:47.106Z",
    "size": 317421,
    "path": "../public/_nuxt/mbr-1920x1080.aa6705c7.jpg"
  },
  "/_nuxt/mbr-1920x1080.ccf1e473.png": {
    "type": "image/png",
    "etag": "\"55519-3Du21gK/QySiAaRYpJ1BJAh7cdE\"",
    "mtime": "2023-03-16T05:06:47.176Z",
    "size": 349465,
    "path": "../public/_nuxt/mbr-1920x1080.ccf1e473.png"
  },
  "/_nuxt/mbr-1920x1096.7ef01d89.jpg": {
    "type": "image/jpeg",
    "etag": "\"67b23-SuBY3QosfhSL8ggc6Doikx8thOU\"",
    "mtime": "2023-03-16T05:06:47.139Z",
    "size": 424739,
    "path": "../public/_nuxt/mbr-1920x1096.7ef01d89.jpg"
  },
  "/_nuxt/mbr-1920x1102.d7afe71f.jpg": {
    "type": "image/jpeg",
    "etag": "\"83681-jXNiJ2/Jb7Yca3XrCA5BzgFdrSo\"",
    "mtime": "2023-03-16T05:06:47.226Z",
    "size": 538241,
    "path": "../public/_nuxt/mbr-1920x1102.d7afe71f.jpg"
  },
  "/_nuxt/mbr-1920x1238.5b405f2a.jpg": {
    "type": "image/jpeg",
    "etag": "\"28239-1VDiDKqCnigMbrZxnrlYviVelHA\"",
    "mtime": "2023-03-16T05:06:47.221Z",
    "size": 164409,
    "path": "../public/_nuxt/mbr-1920x1238.5b405f2a.jpg"
  },
  "/_nuxt/mbr-1920x1271.9f51339c.jpg": {
    "type": "image/jpeg",
    "etag": "\"cce9d-xOkD3dDCSE76wt0/l9yjBi4ouq0\"",
    "mtime": "2023-03-16T05:06:47.226Z",
    "size": 839325,
    "path": "../public/_nuxt/mbr-1920x1271.9f51339c.jpg"
  },
  "/_nuxt/mbr-1920x1281.7a2881c7.jpg": {
    "type": "image/jpeg",
    "etag": "\"580d7-L57NZCzDsHlLNCiamebuOXXdu8s\"",
    "mtime": "2023-03-16T05:06:47.205Z",
    "size": 360663,
    "path": "../public/_nuxt/mbr-1920x1281.7a2881c7.jpg"
  },
  "/_nuxt/mbr-1920x1385.4bea11a7.jpg": {
    "type": "image/jpeg",
    "etag": "\"5c691-iWrU3K2RHO/ccSs329BVHL7mOT0\"",
    "mtime": "2023-03-16T05:06:47.112Z",
    "size": 378513,
    "path": "../public/_nuxt/mbr-1920x1385.4bea11a7.jpg"
  },
  "/_nuxt/mbr-1920x1693.6288c87c.jpg": {
    "type": "image/jpeg",
    "etag": "\"7ad83-mC0GGIF6h+JHBBfJPF2k1SwUi6o\"",
    "mtime": "2023-03-16T05:06:47.106Z",
    "size": 503171,
    "path": "../public/_nuxt/mbr-1920x1693.6288c87c.jpg"
  },
  "/_nuxt/mbr-1920x1893.5f574a8c.png": {
    "type": "image/png",
    "etag": "\"7cb3-7HBDcbhaCMclElOJMqB5z85HgxA\"",
    "mtime": "2023-03-16T05:06:47.115Z",
    "size": 31923,
    "path": "../public/_nuxt/mbr-1920x1893.5f574a8c.png"
  },
  "/_nuxt/mbr-2-1920x1280.b4c7c609.jpg": {
    "type": "image/jpeg",
    "etag": "\"3cd83-p8tcjkmQVo+mt/RdM8N3C3QJrek\"",
    "mtime": "2023-03-16T05:06:47.115Z",
    "size": 249219,
    "path": "../public/_nuxt/mbr-2-1920x1280.b4c7c609.jpg"
  },
  "/_nuxt/mbr-2-676x451.f5c02b98.jpg": {
    "type": "image/jpeg",
    "etag": "\"6bc8-sgHp3vQmVEaghwdhPBXc05CMmmY\"",
    "mtime": "2023-03-16T05:06:47.662Z",
    "size": 27592,
    "path": "../public/_nuxt/mbr-2-676x451.f5c02b98.jpg"
  },
  "/_nuxt/mbr-2-696x464.435b6e38.jpg": {
    "type": "image/jpeg",
    "etag": "\"12a04-SYHwImWUW6FKDF/ZbsyLTWoO2mE\"",
    "mtime": "2023-03-16T05:06:47.487Z",
    "size": 76292,
    "path": "../public/_nuxt/mbr-2-696x464.435b6e38.jpg"
  },
  "/_nuxt/mbr-2-696x696.1588edb1.jpg": {
    "type": "image/jpeg",
    "etag": "\"14151-mp+YL2VISTefdrM0PKceUgmQfdk\"",
    "mtime": "2023-03-16T05:06:47.565Z",
    "size": 82257,
    "path": "../public/_nuxt/mbr-2-696x696.1588edb1.jpg"
  },
  "/_nuxt/mbr-2.411b995b.jpg": {
    "type": "image/jpeg",
    "etag": "\"53476-51vrnWm1A7Mrwk9Y0svLCqI4rLk\"",
    "mtime": "2023-03-16T05:06:47.663Z",
    "size": 341110,
    "path": "../public/_nuxt/mbr-2.411b995b.jpg"
  },
  "/_nuxt/mbr-3-696x464.c9d6c83d.jpg": {
    "type": "image/jpeg",
    "etag": "\"1aa27-46eQPT1zyXuaNuiz9dOfBiK6Yqs\"",
    "mtime": "2023-03-16T05:06:47.487Z",
    "size": 109095,
    "path": "../public/_nuxt/mbr-3-696x464.c9d6c83d.jpg"
  },
  "/_nuxt/mbr-4-1920x1280.854ef396.jpg": {
    "type": "image/jpeg",
    "etag": "\"724a6-d2D6r9RUF/pFwI+PSpCbVmz+Q20\"",
    "mtime": "2023-03-16T05:06:47.106Z",
    "size": 468134,
    "path": "../public/_nuxt/mbr-4-1920x1280.854ef396.jpg"
  },
  "/_nuxt/mbr-4-696x464.1c6f3d07.jpg": {
    "type": "image/jpeg",
    "etag": "\"eab2-U4bxS59cRkManc1sYV/vl2bujnY\"",
    "mtime": "2023-03-16T05:06:47.488Z",
    "size": 60082,
    "path": "../public/_nuxt/mbr-4-696x464.1c6f3d07.jpg"
  },
  "/_nuxt/mbr-5-1920x1280.96581f11.jpg": {
    "type": "image/jpeg",
    "etag": "\"39fb0-kztmtbVeugkbKlx5qhBy/46foPU\"",
    "mtime": "2023-03-16T05:06:47.106Z",
    "size": 237488,
    "path": "../public/_nuxt/mbr-5-1920x1280.96581f11.jpg"
  },
  "/_nuxt/mbr-5-696x464.95e73bd5.jpg": {
    "type": "image/jpeg",
    "etag": "\"16565-i3Ja1I5AJTXUGLybX8K4TDeSs/Q\"",
    "mtime": "2023-03-16T05:06:47.487Z",
    "size": 91493,
    "path": "../public/_nuxt/mbr-5-696x464.95e73bd5.jpg"
  },
  "/_nuxt/mbr-502x324.e53caf24.jpg": {
    "type": "image/jpeg",
    "etag": "\"57df-4DMZ+IZZ+rPSboAG/FkWlLYCqfw\"",
    "mtime": "2023-03-16T05:06:47.227Z",
    "size": 22495,
    "path": "../public/_nuxt/mbr-502x324.e53caf24.jpg"
  },
  "/_nuxt/mbr-502x335.4ad0c401.png": {
    "type": "image/png",
    "etag": "\"1ad0-H9Cxr/ClJVwtpxu//XW2JKP6U9Y\"",
    "mtime": "2023-03-16T05:06:47.222Z",
    "size": 6864,
    "path": "../public/_nuxt/mbr-502x335.4ad0c401.png"
  },
  "/_nuxt/mbr-6-1920x1280.9439698f.jpg": {
    "type": "image/jpeg",
    "etag": "\"4a74e-Tvi2i+rVVhQ5+8zmp9vRAZYSjY4\"",
    "mtime": "2023-03-16T05:06:47.114Z",
    "size": 304974,
    "path": "../public/_nuxt/mbr-6-1920x1280.9439698f.jpg"
  },
  "/_nuxt/mbr-676x412.5c5dff5e.jpg": {
    "type": "image/jpeg",
    "etag": "\"b691-jsJ9Lbwc6aXtKF95eyZA4ww9Cp8\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 46737,
    "path": "../public/_nuxt/mbr-676x412.5c5dff5e.jpg"
  },
  "/_nuxt/mbr-676x447.11a3158c.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a732-FZvorIGlx3K2qcmlEn4tWGPIzsc\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 108338,
    "path": "../public/_nuxt/mbr-676x447.11a3158c.jpg"
  },
  "/_nuxt/mbr-676x451.9eb2cc6c.jpg": {
    "type": "image/jpeg",
    "etag": "\"c6e9-j9mmaQqaJq3pTtBaTPeazNZXSNk\"",
    "mtime": "2023-03-16T05:06:47.662Z",
    "size": 50921,
    "path": "../public/_nuxt/mbr-676x451.9eb2cc6c.jpg"
  },
  "/_nuxt/mbr-676x459.db030c69.jpg": {
    "type": "image/jpeg",
    "etag": "\"d6f3-0BdQbK+GarrYRE7tkfttUdUOMdU\"",
    "mtime": "2023-03-16T05:06:47.552Z",
    "size": 55027,
    "path": "../public/_nuxt/mbr-676x459.db030c69.jpg"
  },
  "/_nuxt/mbr-676x459.e16287be.js": {
    "type": "application/javascript",
    "etag": "\"70-XBJSO8DCHKgBHzPbSKPAKNZpsmM\"",
    "mtime": "2023-03-16T05:06:48.249Z",
    "size": 112,
    "path": "../public/_nuxt/mbr-676x459.e16287be.js"
  },
  "/_nuxt/mbr-696x298.aa083622.jpg": {
    "type": "image/jpeg",
    "etag": "\"5506-j6DL/+aqi/FWuRFI8g9LcWTClQM\"",
    "mtime": "2023-03-16T05:06:47.565Z",
    "size": 21766,
    "path": "../public/_nuxt/mbr-696x298.aa083622.jpg"
  },
  "/_nuxt/mbr-696x392.1f9ed14e.png": {
    "type": "image/png",
    "etag": "\"2077-l48cLixnjIPqZXE7Py/pcLcOdB0\"",
    "mtime": "2023-03-16T05:06:47.552Z",
    "size": 8311,
    "path": "../public/_nuxt/mbr-696x392.1f9ed14e.png"
  },
  "/_nuxt/mbr-696x392.a1beb36a.js": {
    "type": "application/javascript",
    "etag": "\"70-drUlNMhUog7R5AH0L/W8kgAMCh4\"",
    "mtime": "2023-03-16T05:06:48.255Z",
    "size": 112,
    "path": "../public/_nuxt/mbr-696x392.a1beb36a.js"
  },
  "/_nuxt/mbr-696x464.10e72912.jpg": {
    "type": "image/jpeg",
    "etag": "\"e2df-aT5WCmOGUyQGUqCj7UMmldurKTA\"",
    "mtime": "2023-03-16T05:06:47.576Z",
    "size": 58079,
    "path": "../public/_nuxt/mbr-696x464.10e72912.jpg"
  },
  "/_nuxt/mbr-696x557.f7fb2681.jpg": {
    "type": "image/jpeg",
    "etag": "\"21882-/j4g9xDddn/wRCwFVXOSmlcxWqQ\"",
    "mtime": "2023-03-16T05:06:47.574Z",
    "size": 137346,
    "path": "../public/_nuxt/mbr-696x557.f7fb2681.jpg"
  },
  "/_nuxt/mbr-696x690.f3719756.jpg": {
    "type": "image/jpeg",
    "etag": "\"17b3f-+KZGHn5QhMJMqcklHlZsYOCdqyE\"",
    "mtime": "2023-03-16T05:06:47.573Z",
    "size": 97087,
    "path": "../public/_nuxt/mbr-696x690.f3719756.jpg"
  },
  "/_nuxt/mbr-696x696.d8fed002.jpg": {
    "type": "image/jpeg",
    "etag": "\"6b0b-D5Vqgtg4leus99A+Fi7KXFp759Q\"",
    "mtime": "2023-03-16T05:06:47.554Z",
    "size": 27403,
    "path": "../public/_nuxt/mbr-696x696.d8fed002.jpg"
  },
  "/_nuxt/mbr-696x889.5fffadcc.jpg": {
    "type": "image/jpeg",
    "etag": "\"2a1de-FmBE3a1FisdFT5yOXYrJje732uA\"",
    "mtime": "2023-03-16T05:06:47.575Z",
    "size": 172510,
    "path": "../public/_nuxt/mbr-696x889.5fffadcc.jpg"
  },
  "/_nuxt/mbr-7-1920x1280.a7508bb5.jpg": {
    "type": "image/jpeg",
    "etag": "\"84bc9-GaTQOio5o91IedWJa80HffINz90\"",
    "mtime": "2023-03-16T05:06:47.226Z",
    "size": 543689,
    "path": "../public/_nuxt/mbr-7-1920x1280.a7508bb5.jpg"
  },
  "/_nuxt/mbr-7-696x464.eb47b302.jpg": {
    "type": "image/jpeg",
    "etag": "\"e5ce-ZCQ4G0QaSgvM/O78VC44+bO/9Ao\"",
    "mtime": "2023-03-16T05:06:47.488Z",
    "size": 58830,
    "path": "../public/_nuxt/mbr-7-696x464.eb47b302.jpg"
  },
  "/_nuxt/mbr-712x474.52b701d0.jpg": {
    "type": "image/jpeg",
    "etag": "\"affd-eq8dqcBbBRyZdUKJaibKGyercag\"",
    "mtime": "2023-03-16T05:06:47.468Z",
    "size": 45053,
    "path": "../public/_nuxt/mbr-712x474.52b701d0.jpg"
  },
  "/_nuxt/mbr-712x475.5ca0a1f4.jpg": {
    "type": "image/jpeg",
    "etag": "\"101de-u8YTvEdFo6oPW2iKi7JkpWZRiHU\"",
    "mtime": "2023-03-16T05:06:47.467Z",
    "size": 66014,
    "path": "../public/_nuxt/mbr-712x475.5ca0a1f4.jpg"
  },
  "/_nuxt/mbr-8-1920x1280.52929ffe.jpg": {
    "type": "image/jpeg",
    "etag": "\"2e837-LBHDJ2qN+7IdM+Nv44DwKIhR0NI\"",
    "mtime": "2023-03-16T05:06:47.192Z",
    "size": 190519,
    "path": "../public/_nuxt/mbr-8-1920x1280.52929ffe.jpg"
  },
  "/_nuxt/mbr-8-696x464.2e6a3911.jpg": {
    "type": "image/jpeg",
    "etag": "\"c5b3-oMP/4oW8t6Hm+Y8k9GAuRZpNIo4\"",
    "mtime": "2023-03-16T05:06:47.488Z",
    "size": 50611,
    "path": "../public/_nuxt/mbr-8-696x464.2e6a3911.jpg"
  },
  "/_nuxt/mbr-9-696x464.32e949f0.jpg": {
    "type": "image/jpeg",
    "etag": "\"c886-+WI29q2Lhp1KGJKu3uezzW1iULs\"",
    "mtime": "2023-03-16T05:06:47.488Z",
    "size": 51334,
    "path": "../public/_nuxt/mbr-9-696x464.32e949f0.jpg"
  },
  "/_nuxt/mbr-950x633.b10fe6fc.jpg": {
    "type": "image/jpeg",
    "etag": "\"194fd-3fohL9xWxFiID0jma9izgsGBhEg\"",
    "mtime": "2023-03-16T05:06:47.495Z",
    "size": 103677,
    "path": "../public/_nuxt/mbr-950x633.b10fe6fc.jpg"
  },
  "/_nuxt/mbr.d6a89871.jpg": {
    "type": "image/jpeg",
    "etag": "\"7b99b-zc8lfBpvjnaPr8YUL8ITT3wPpgU\"",
    "mtime": "2023-03-16T05:06:47.670Z",
    "size": 506267,
    "path": "../public/_nuxt/mbr.d6a89871.jpg"
  },
  "/_nuxt/members.7a764486.js": {
    "type": "application/javascript",
    "etag": "\"e0-7w2RwTG7cBLkJXAYPEZry97ordg\"",
    "mtime": "2023-03-16T05:06:48.081Z",
    "size": 224,
    "path": "../public/_nuxt/members.7a764486.js"
  },
  "/_nuxt/mobirise2.523854ac.ttf": {
    "type": "font/ttf",
    "etag": "\"62c0-TFT267vL4TQK0vQ8z98a7FEHqoY\"",
    "mtime": "2023-03-16T05:06:47.206Z",
    "size": 25280,
    "path": "../public/_nuxt/mobirise2.523854ac.ttf"
  },
  "/_nuxt/mobirise2.5f2b50f6.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"637c-mKpJ1U7iyjWUHdfYEVTTmPs3ROw\"",
    "mtime": "2023-03-16T05:06:47.075Z",
    "size": 25468,
    "path": "../public/_nuxt/mobirise2.5f2b50f6.eot"
  },
  "/_nuxt/mobirise2.f19cba98.svg": {
    "type": "image/svg+xml",
    "etag": "\"11c8d-y9MUDoUt/4twOZaUgJ0HdNCfP00\"",
    "mtime": "2023-03-16T05:06:47.208Z",
    "size": 72845,
    "path": "../public/_nuxt/mobirise2.f19cba98.svg"
  },
  "/_nuxt/mobirise2.ff49e449.woff": {
    "type": "font/woff",
    "etag": "\"630c-DOsAm1YobJ0yjHW9IwJyPKYFOLo\"",
    "mtime": "2023-03-16T05:06:47.207Z",
    "size": 25356,
    "path": "../public/_nuxt/mobirise2.ff49e449.woff"
  },
  "/_nuxt/Music.418fca92.js": {
    "type": "application/javascript",
    "etag": "\"33d7-J21llV1b72STQWG5lSIT607d1Ek\"",
    "mtime": "2023-03-16T05:06:47.828Z",
    "size": 13271,
    "path": "../public/_nuxt/Music.418fca92.js"
  },
  "/_nuxt/my-uploads.a2be79f7.js": {
    "type": "application/javascript",
    "etag": "\"56e-Hh4RenewjGMItdxHl5y2TxTiZ6Y\"",
    "mtime": "2023-03-16T05:06:48.057Z",
    "size": 1390,
    "path": "../public/_nuxt/my-uploads.a2be79f7.js"
  },
  "/_nuxt/new.c3eb3d6e.js": {
    "type": "application/javascript",
    "etag": "\"a0c-fdUxHnzsYwEJOJJa+hRWBp3dP/U\"",
    "mtime": "2023-03-16T05:06:48.098Z",
    "size": 2572,
    "path": "../public/_nuxt/new.c3eb3d6e.js"
  },
  "/_nuxt/newsfeed.717b246e.js": {
    "type": "application/javascript",
    "etag": "\"e2-BVT/mxaksTYuNiwEMAoSeyHAqPA\"",
    "mtime": "2023-03-16T05:06:47.883Z",
    "size": 226,
    "path": "../public/_nuxt/newsfeed.717b246e.js"
  },
  "/_nuxt/notifications.ccf45bb7.js": {
    "type": "application/javascript",
    "etag": "\"400-YYYCSDmUr/EF0xPdg4hdiiHxHlU\"",
    "mtime": "2023-03-16T05:06:48.029Z",
    "size": 1024,
    "path": "../public/_nuxt/notifications.ccf45bb7.js"
  },
  "/_nuxt/nuxt-link.a8e086c2.js": {
    "type": "application/javascript",
    "etag": "\"f42-ZWIJZVtDIPvokiogwA5qoaixwcQ\"",
    "mtime": "2023-03-16T05:06:48.254Z",
    "size": 3906,
    "path": "../public/_nuxt/nuxt-link.a8e086c2.js"
  },
  "/_nuxt/orders.acc143dc.js": {
    "type": "application/javascript",
    "etag": "\"10f9-sEfIbw3q/9JS+SRuRlXh6jGCADQ\"",
    "mtime": "2023-03-16T05:06:48.042Z",
    "size": 4345,
    "path": "../public/_nuxt/orders.acc143dc.js"
  },
  "/_nuxt/payments.2d174087.png": {
    "type": "image/png",
    "etag": "\"2c64-TBHwJF3Tykn+K17IUwCc01QkbOk\"",
    "mtime": "2023-03-16T05:06:47.467Z",
    "size": 11364,
    "path": "../public/_nuxt/payments.2d174087.png"
  },
  "/_nuxt/payments.8dfeee2a.js": {
    "type": "application/javascript",
    "etag": "\"583-11Qw/0lC+Z2qJ3XIQnOVaqpHFl4\"",
    "mtime": "2023-03-16T05:06:48.157Z",
    "size": 1411,
    "path": "../public/_nuxt/payments.8dfeee2a.js"
  },
  "/_nuxt/payments.9cc6d2da.js": {
    "type": "application/javascript",
    "etag": "\"10ff-eYP2rfgaShywFN8wVQGzi93bFNw\"",
    "mtime": "2023-03-16T05:06:48.115Z",
    "size": 4351,
    "path": "../public/_nuxt/payments.9cc6d2da.js"
  },
  "/_nuxt/Pharmacy.7bbc470a.js": {
    "type": "application/javascript",
    "etag": "\"2c1e-MVoJ1BthCSAb81+8MXCeR3cT3gg\"",
    "mtime": "2023-03-16T05:06:48.105Z",
    "size": 11294,
    "path": "../public/_nuxt/Pharmacy.7bbc470a.js"
  },
  "/_nuxt/Podcasts.f34870e9.js": {
    "type": "application/javascript",
    "etag": "\"2dd3-jn56x3ySTkC++Cei0zIAcRUSD4c\"",
    "mtime": "2023-03-16T05:06:47.862Z",
    "size": 11731,
    "path": "../public/_nuxt/Podcasts.f34870e9.js"
  },
  "/_nuxt/policies.fb472bb5.js": {
    "type": "application/javascript",
    "etag": "\"56f-cdfRkXQ06Qvd8r1INO1mysgdEVk\"",
    "mtime": "2023-03-16T05:06:48.188Z",
    "size": 1391,
    "path": "../public/_nuxt/policies.fb472bb5.js"
  },
  "/_nuxt/press.24236566.js": {
    "type": "application/javascript",
    "etag": "\"bce-QVyNrPzFgB3nb3e7s/tlwiziom4\"",
    "mtime": "2023-03-16T05:06:48.123Z",
    "size": 3022,
    "path": "../public/_nuxt/press.24236566.js"
  },
  "/_nuxt/product2.557815d0.js": {
    "type": "application/javascript",
    "etag": "\"6d-gHK2DvhNqjmjcMYJa8Gw085HJ2w\"",
    "mtime": "2023-03-16T05:06:48.167Z",
    "size": 109,
    "path": "../public/_nuxt/product2.557815d0.js"
  },
  "/_nuxt/product2.7ee78ec8.jpg": {
    "type": "image/jpeg",
    "etag": "\"86fe-ZG84V0W8svvudGzMN62Xv7OdtuE\"",
    "mtime": "2023-03-16T05:06:47.520Z",
    "size": 34558,
    "path": "../public/_nuxt/product2.7ee78ec8.jpg"
  },
  "/_nuxt/product3.6db48bd7.jpg": {
    "type": "image/jpeg",
    "etag": "\"4b92-WnCOhTdaOzptSRvvZcM6Sks1pD8\"",
    "mtime": "2023-03-16T05:06:47.288Z",
    "size": 19346,
    "path": "../public/_nuxt/product3.6db48bd7.jpg"
  },
  "/_nuxt/product3.a867bedc.js": {
    "type": "application/javascript",
    "etag": "\"6d-WTZJbDKJaoBanSSvTnPNijma5Ng\"",
    "mtime": "2023-03-16T05:06:47.760Z",
    "size": 109,
    "path": "../public/_nuxt/product3.a867bedc.js"
  },
  "/_nuxt/product4.103fca61.jpg": {
    "type": "image/jpeg",
    "etag": "\"5197-jMql4nSEF1TwrZK4yLQQNXHC2o0\"",
    "mtime": "2023-03-16T05:06:47.282Z",
    "size": 20887,
    "path": "../public/_nuxt/product4.103fca61.jpg"
  },
  "/_nuxt/product4.cad3aa45.js": {
    "type": "application/javascript",
    "etag": "\"af-yk679bb8cl/mX5g+cnAaXdE2o7w\"",
    "mtime": "2023-03-16T05:06:47.752Z",
    "size": 175,
    "path": "../public/_nuxt/product4.cad3aa45.js"
  },
  "/_nuxt/product5.ef01bbfb.jpg": {
    "type": "image/jpeg",
    "etag": "\"bdfe-7ttJOeVQLmE3OLuvpApkRBCgKXc\"",
    "mtime": "2023-03-16T05:06:47.289Z",
    "size": 48638,
    "path": "../public/_nuxt/product5.ef01bbfb.jpg"
  },
  "/_nuxt/profile.b565a976.js": {
    "type": "application/javascript",
    "etag": "\"1967-i+mdtg1EXNs5doAxVOIcIIe2a+Q\"",
    "mtime": "2023-03-16T05:06:48.026Z",
    "size": 6503,
    "path": "../public/_nuxt/profile.b565a976.js"
  },
  "/_nuxt/ProseA.38142315.js": {
    "type": "application/javascript",
    "etag": "\"18b-RDjhxjuhbiOoCt8j+Pfpp1DtP3E\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 395,
    "path": "../public/_nuxt/ProseA.38142315.js"
  },
  "/_nuxt/ProseBlockquote.4aabd519.js": {
    "type": "application/javascript",
    "etag": "\"c2-wVng2PZbysjzElIgK/4R1trj5B0\"",
    "mtime": "2023-03-16T05:06:48.042Z",
    "size": 194,
    "path": "../public/_nuxt/ProseBlockquote.4aabd519.js"
  },
  "/_nuxt/ProseCode.0a2d992c.js": {
    "type": "application/javascript",
    "etag": "\"183-d0MOqo5nG9/0yiQqEF2VIKQ7bfk\"",
    "mtime": "2023-03-16T05:06:48.066Z",
    "size": 387,
    "path": "../public/_nuxt/ProseCode.0a2d992c.js"
  },
  "/_nuxt/ProseCode.e63e49c6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"2e-GbvrqT5j9gSWlpa8e36U/Kv6Zx0\"",
    "mtime": "2023-03-16T05:06:47.676Z",
    "size": 46,
    "path": "../public/_nuxt/ProseCode.e63e49c6.css"
  },
  "/_nuxt/ProseCodeInline.d2336b37.js": {
    "type": "application/javascript",
    "etag": "\"bc-U5RBml4D6c/obycxmrTja1V/dm8\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 188,
    "path": "../public/_nuxt/ProseCodeInline.d2336b37.js"
  },
  "/_nuxt/ProseEm.2b85e490.js": {
    "type": "application/javascript",
    "etag": "\"ba-ulU2EjiJdOc2Wy5DcidRDiL6q5Y\"",
    "mtime": "2023-03-16T05:06:48.042Z",
    "size": 186,
    "path": "../public/_nuxt/ProseEm.2b85e490.js"
  },
  "/_nuxt/ProseH1.109b6cb8.js": {
    "type": "application/javascript",
    "etag": "\"1a0-KVhid+uFRBSEuRvBGDlu6UVwod4\"",
    "mtime": "2023-03-16T05:06:47.943Z",
    "size": 416,
    "path": "../public/_nuxt/ProseH1.109b6cb8.js"
  },
  "/_nuxt/ProseH2.ffc244db.js": {
    "type": "application/javascript",
    "etag": "\"1a0-zfqgj0jKQrT8ZFgq8PViL8KLYco\"",
    "mtime": "2023-03-16T05:06:47.699Z",
    "size": 416,
    "path": "../public/_nuxt/ProseH2.ffc244db.js"
  },
  "/_nuxt/ProseH3.424bb756.js": {
    "type": "application/javascript",
    "etag": "\"1a0-9emSQH9z/6g7tvGI6UeK/Fze6hs\"",
    "mtime": "2023-03-16T05:06:47.732Z",
    "size": 416,
    "path": "../public/_nuxt/ProseH3.424bb756.js"
  },
  "/_nuxt/ProseH4.25856afe.js": {
    "type": "application/javascript",
    "etag": "\"1a0-UdEbQLi0DXkf2QruOpnt+Vhij5o\"",
    "mtime": "2023-03-16T05:06:47.707Z",
    "size": 416,
    "path": "../public/_nuxt/ProseH4.25856afe.js"
  },
  "/_nuxt/ProseH5.e1269dd5.js": {
    "type": "application/javascript",
    "etag": "\"1a0-/YLQsLE2U2762wcS443AIOPTbmU\"",
    "mtime": "2023-03-16T05:06:47.750Z",
    "size": 416,
    "path": "../public/_nuxt/ProseH5.e1269dd5.js"
  },
  "/_nuxt/ProseH6.35ba4a58.js": {
    "type": "application/javascript",
    "etag": "\"1a0-RBMSYdLw7sQni2y5e33cEb0ZZiY\"",
    "mtime": "2023-03-16T05:06:47.732Z",
    "size": 416,
    "path": "../public/_nuxt/ProseH6.35ba4a58.js"
  },
  "/_nuxt/ProseHr.0c1b7d52.js": {
    "type": "application/javascript",
    "etag": "\"96-ZFLZy8fnsi5+KV0NFinXEzraryc\"",
    "mtime": "2023-03-16T05:06:47.732Z",
    "size": 150,
    "path": "../public/_nuxt/ProseHr.0c1b7d52.js"
  },
  "/_nuxt/ProseImg.36338af9.js": {
    "type": "application/javascript",
    "etag": "\"21c-gkh3aIy2azwdS7Ismdk4gfTGzL0\"",
    "mtime": "2023-03-16T05:06:47.733Z",
    "size": 540,
    "path": "../public/_nuxt/ProseImg.36338af9.js"
  },
  "/_nuxt/ProseLi.0e6e5ca4.js": {
    "type": "application/javascript",
    "etag": "\"ba-sbO6cLIJ0P11z2UiHdFxMplnl8Q\"",
    "mtime": "2023-03-16T05:06:47.732Z",
    "size": 186,
    "path": "../public/_nuxt/ProseLi.0e6e5ca4.js"
  },
  "/_nuxt/ProseOl.b10cc23d.js": {
    "type": "application/javascript",
    "etag": "\"ba-GpZ8De+1MvcLcG2XKSYaIUwzYtw\"",
    "mtime": "2023-03-16T05:06:47.951Z",
    "size": 186,
    "path": "../public/_nuxt/ProseOl.b10cc23d.js"
  },
  "/_nuxt/ProseP.9abaa979.js": {
    "type": "application/javascript",
    "etag": "\"b9-5VAsgjOPTZ1XTO1SLPq6VR+R7PA\"",
    "mtime": "2023-03-16T05:06:47.750Z",
    "size": 185,
    "path": "../public/_nuxt/ProseP.9abaa979.js"
  },
  "/_nuxt/ProseStrong.09add4a7.js": {
    "type": "application/javascript",
    "etag": "\"be-O1UzagPPAFynYXA7Est9z6xR3Jw\"",
    "mtime": "2023-03-16T05:06:47.751Z",
    "size": 190,
    "path": "../public/_nuxt/ProseStrong.09add4a7.js"
  },
  "/_nuxt/ProseTable.5f8819a8.js": {
    "type": "application/javascript",
    "etag": "\"bd-kmqLWsXmF+LynENMnVIbMGyCFwo\"",
    "mtime": "2023-03-16T05:06:47.705Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTable.5f8819a8.js"
  },
  "/_nuxt/ProseTbody.070d6fdc.js": {
    "type": "application/javascript",
    "etag": "\"bd-Hovbr2V+I+0oZ7j4715HWZUAwr0\"",
    "mtime": "2023-03-16T05:06:48.116Z",
    "size": 189,
    "path": "../public/_nuxt/ProseTbody.070d6fdc.js"
  },
  "/_nuxt/ProseTd.9233df29.js": {
    "type": "application/javascript",
    "etag": "\"ba-6rHYWixBuHvJSuE3LICaY9kpX0M\"",
    "mtime": "2023-03-16T05:06:48.075Z",
    "size": 186,
    "path": "../public/_nuxt/ProseTd.9233df29.js"
  },
  "/_nuxt/ProseTh.1429e13f.js": {
    "type": "application/javascript",
    "etag": "\"ba-zhWHAL71hM13NqRz4JZMYrrkuxU\"",
    "mtime": "2023-03-16T05:06:48.040Z",
    "size": 186,
    "path": "../public/_nuxt/ProseTh.1429e13f.js"
  },
  "/_nuxt/ProseThead.561fbba7.js": {
    "type": "application/javascript",
    "etag": "\"bd-cyyP/WWc2bwLEF+oxbv16y2oi1w\"",
    "mtime": "2023-03-16T05:06:47.905Z",
    "size": 189,
    "path": "../public/_nuxt/ProseThead.561fbba7.js"
  },
  "/_nuxt/ProseTr.37c0811d.js": {
    "type": "application/javascript",
    "etag": "\"b5-3WmFeywu0qdzdXQJJFp7cm2GqqE\"",
    "mtime": "2023-03-16T05:06:48.074Z",
    "size": 181,
    "path": "../public/_nuxt/ProseTr.37c0811d.js"
  },
  "/_nuxt/ProseUl.2b41b954.js": {
    "type": "application/javascript",
    "etag": "\"ba-j9/Q4YJYC63q3fHxWxAoFDEkgEo\"",
    "mtime": "2023-03-16T05:06:47.926Z",
    "size": 186,
    "path": "../public/_nuxt/ProseUl.2b41b954.js"
  },
  "/_nuxt/query.fcefa948.js": {
    "type": "application/javascript",
    "etag": "\"3545-Ehia+gIJKzICSCC6prECiAkiq9E\"",
    "mtime": "2023-03-16T05:06:48.156Z",
    "size": 13637,
    "path": "../public/_nuxt/query.fcefa948.js"
  },
  "/_nuxt/Radio.a1e5a73e.js": {
    "type": "application/javascript",
    "etag": "\"b5f-csize+AKCqe0KVey+6X4TDqx4+o\"",
    "mtime": "2023-03-16T05:06:47.835Z",
    "size": 2911,
    "path": "../public/_nuxt/Radio.a1e5a73e.js"
  },
  "/_nuxt/receipts.7fc72c9a.js": {
    "type": "application/javascript",
    "etag": "\"10ff-PSX4rcRQjnV062fX4VxLS1EXIvg\"",
    "mtime": "2023-03-16T05:06:48.096Z",
    "size": 4351,
    "path": "../public/_nuxt/receipts.7fc72c9a.js"
  },
  "/_nuxt/recommendations.f13fff05.js": {
    "type": "application/javascript",
    "etag": "\"57d-W5NNWhZCVZdmCXBi79XbYtiJ2sQ\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 1405,
    "path": "../public/_nuxt/recommendations.f13fff05.js"
  },
  "/_nuxt/register.009860bb.js": {
    "type": "application/javascript",
    "etag": "\"613-DiJig2ptSzHA5cmuXMqQPA4Xdeo\"",
    "mtime": "2023-03-16T05:06:47.969Z",
    "size": 1555,
    "path": "../public/_nuxt/register.009860bb.js"
  },
  "/_nuxt/reset-password.9d038788.js": {
    "type": "application/javascript",
    "etag": "\"4f4-YM6vXdeFerP5IYLNT/6zTap02gc\"",
    "mtime": "2023-03-16T05:06:48.146Z",
    "size": 1268,
    "path": "../public/_nuxt/reset-password.9d038788.js"
  },
  "/_nuxt/results.0efd2bf5.js": {
    "type": "application/javascript",
    "etag": "\"3a5d-fp2r6LKzlCMB/GBFuD49yOXFmBU\"",
    "mtime": "2023-03-16T05:06:48.254Z",
    "size": 14941,
    "path": "../public/_nuxt/results.0efd2bf5.js"
  },
  "/_nuxt/returns.69009c6f.js": {
    "type": "application/javascript",
    "etag": "\"10fc-rX5ZCSSxfQQmdJUL2CbR+HuPaz8\"",
    "mtime": "2023-03-16T05:06:48.146Z",
    "size": 4348,
    "path": "../public/_nuxt/returns.69009c6f.js"
  },
  "/_nuxt/returns.82bd9864.js": {
    "type": "application/javascript",
    "etag": "\"568-Ms+y8leifsN+UHAQQ4+mmtMuiJM\"",
    "mtime": "2023-03-16T05:06:48.116Z",
    "size": 1384,
    "path": "../public/_nuxt/returns.82bd9864.js"
  },
  "/_nuxt/shop0.a1910dff.jpg": {
    "type": "image/jpeg",
    "etag": "\"387ba-p81UxsOsQpqZyT1ghOmtSI0kPHk\"",
    "mtime": "2023-03-16T05:06:47.597Z",
    "size": 231354,
    "path": "../public/_nuxt/shop0.a1910dff.jpg"
  },
  "/_nuxt/shop1.1859a533.jpg": {
    "type": "image/jpeg",
    "etag": "\"31a24-GcLwjfdW8MBLpvlRtgpN7Jkv/LQ\"",
    "mtime": "2023-03-16T05:06:47.596Z",
    "size": 203300,
    "path": "../public/_nuxt/shop1.1859a533.jpg"
  },
  "/_nuxt/shop2.2f65b0f0.jpg": {
    "type": "image/jpeg",
    "etag": "\"3816b-7NaH4K/n/4MhQBoIZaV2lU/L1WU\"",
    "mtime": "2023-03-16T05:06:47.605Z",
    "size": 229739,
    "path": "../public/_nuxt/shop2.2f65b0f0.jpg"
  },
  "/_nuxt/shop3.af7f630f.jpg": {
    "type": "image/jpeg",
    "etag": "\"3e151-sehHPuYlGh6kI9g4RUeb7NaUtsg\"",
    "mtime": "2023-03-16T05:06:47.617Z",
    "size": 254289,
    "path": "../public/_nuxt/shop3.af7f630f.jpg"
  },
  "/_nuxt/shop4.51520938.jpg": {
    "type": "image/jpeg",
    "etag": "\"1b295-lNdArTBIW2ADOPrl0xRe6Tpgnew\"",
    "mtime": "2023-03-16T05:06:47.632Z",
    "size": 111253,
    "path": "../public/_nuxt/shop4.51520938.jpg"
  },
  "/_nuxt/shop5.b05adafe.jpg": {
    "type": "image/jpeg",
    "etag": "\"370a2-BW2Au43N3YUlFjrf77/115+JBoI\"",
    "mtime": "2023-03-16T05:06:47.639Z",
    "size": 225442,
    "path": "../public/_nuxt/shop5.b05adafe.jpg"
  },
  "/_nuxt/shop6.d25a9eb5.jpg": {
    "type": "image/jpeg",
    "etag": "\"32bc1-gPuTmdzzW5hnKxhvhBND5zI+9+g\"",
    "mtime": "2023-03-16T05:06:47.639Z",
    "size": 207809,
    "path": "../public/_nuxt/shop6.d25a9eb5.jpg"
  },
  "/_nuxt/shop7.03f3fe95.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e841-/C+kKo/m5d7ArAQ/I4lfEFUKCnQ\"",
    "mtime": "2023-03-16T05:06:47.639Z",
    "size": 124993,
    "path": "../public/_nuxt/shop7.03f3fe95.jpg"
  },
  "/_nuxt/SportsFitness.2f4fdfd7.js": {
    "type": "application/javascript",
    "etag": "\"59bd-VFtXeEYHRJLpiX8psM3FEAEGKAk\"",
    "mtime": "2023-03-16T05:06:47.835Z",
    "size": 22973,
    "path": "../public/_nuxt/SportsFitness.2f4fdfd7.js"
  },
  "/_nuxt/sq4.f59a4d4b.jpg": {
    "type": "image/jpeg",
    "etag": "\"a9f8-wUQTSG2enhBLbPdyp+ZoGmIA3UY\"",
    "mtime": "2023-03-16T05:06:47.295Z",
    "size": 43512,
    "path": "../public/_nuxt/sq4.f59a4d4b.jpg"
  },
  "/_nuxt/sq4.f6c4efd7.js": {
    "type": "application/javascript",
    "etag": "\"68-S27ALlboqVcs7vP5cF599Trx/oc\"",
    "mtime": "2023-03-16T05:06:47.813Z",
    "size": 104,
    "path": "../public/_nuxt/sq4.f6c4efd7.js"
  },
  "/_nuxt/stations.3502d4a4.js": {
    "type": "application/javascript",
    "etag": "\"1383-KE+L8LftdPb8IA5g27hBQEfLVn8\"",
    "mtime": "2023-03-16T05:06:48.142Z",
    "size": 4995,
    "path": "../public/_nuxt/stations.3502d4a4.js"
  },
  "/_nuxt/subscriptions.00cf9a00.js": {
    "type": "application/javascript",
    "etag": "\"110e-3DFYeeinpwmPKFW8co9gY/NvgvQ\"",
    "mtime": "2023-03-16T05:06:48.180Z",
    "size": 4366,
    "path": "../public/_nuxt/subscriptions.00cf9a00.js"
  },
  "/_nuxt/terms.e81cb2cd.js": {
    "type": "application/javascript",
    "etag": "\"573-GvKOXKRumdDkitSNxYGaZ/O0g6E\"",
    "mtime": "2023-03-16T05:06:48.041Z",
    "size": 1395,
    "path": "../public/_nuxt/terms.e81cb2cd.js"
  },
  "/_nuxt/Theater.2e62e1fc.js": {
    "type": "application/javascript",
    "etag": "\"33e3-OKTGh9tvzFVEfT6a81VBFZwSPxk\"",
    "mtime": "2023-03-16T05:06:48.251Z",
    "size": 13283,
    "path": "../public/_nuxt/Theater.2e62e1fc.js"
  },
  "/_nuxt/upload.6c188e5b.js": {
    "type": "application/javascript",
    "etag": "\"e5-OMPeek+500+7f0O2DHrIcdkE46g\"",
    "mtime": "2023-03-16T05:06:48.043Z",
    "size": 229,
    "path": "../public/_nuxt/upload.6c188e5b.js"
  },
  "/_nuxt/utils.95439fbb.js": {
    "type": "application/javascript",
    "etag": "\"5c6-3ivdw7wbKekqhLa+KHRmCOGVIPY\"",
    "mtime": "2023-03-16T05:06:47.925Z",
    "size": 1478,
    "path": "../public/_nuxt/utils.95439fbb.js"
  },
  "/_nuxt/_...404_.6dcb0eb3.js": {
    "type": "application/javascript",
    "etag": "\"305-B3MMyE8oz+SYy8c3Xvze5YK4ncI\"",
    "mtime": "2023-03-16T05:06:48.041Z",
    "size": 773,
    "path": "../public/_nuxt/_...404_.6dcb0eb3.js"
  },
  "/_nuxt/_id_.1399be1c.js": {
    "type": "application/javascript",
    "etag": "\"e5-Z7NSEbKVpTfoJR+v4/YfLtAqcts\"",
    "mtime": "2023-03-16T05:06:47.884Z",
    "size": 229,
    "path": "../public/_nuxt/_id_.1399be1c.js"
  },
  "/_nuxt/_id_.470e6aad.js": {
    "type": "application/javascript",
    "etag": "\"1645-sLR/gr0uJKPluaQmB9lLtInJHF0\"",
    "mtime": "2023-03-16T05:06:48.123Z",
    "size": 5701,
    "path": "../public/_nuxt/_id_.470e6aad.js"
  },
  "/_nuxt/_id_.4913322c.js": {
    "type": "application/javascript",
    "etag": "\"1a76-IERuwO0bTLOYHX/axz0eBZii+CE\"",
    "mtime": "2023-03-16T05:06:48.081Z",
    "size": 6774,
    "path": "../public/_nuxt/_id_.4913322c.js"
  },
  "/_nuxt/_id_.6ee942ea.js": {
    "type": "application/javascript",
    "etag": "\"10cf-1gLBfm02orh+qCXD9LDjEfE1hwI\"",
    "mtime": "2023-03-16T05:06:47.790Z",
    "size": 4303,
    "path": "../public/_nuxt/_id_.6ee942ea.js"
  },
  "/_nuxt/_id_.a25c6da7.js": {
    "type": "application/javascript",
    "etag": "\"60f-qrR2NjXam7QpDlyAPGgnbYG4Gz8\"",
    "mtime": "2023-03-16T05:06:48.253Z",
    "size": 1551,
    "path": "../public/_nuxt/_id_.a25c6da7.js"
  },
  "/_nuxt/_id_.a786299d.js": {
    "type": "application/javascript",
    "etag": "\"83a-Arrlwa3tlw3SHext71MW/qEkU8w\"",
    "mtime": "2023-03-16T05:06:48.082Z",
    "size": 2106,
    "path": "../public/_nuxt/_id_.a786299d.js"
  },
  "/_nuxt/_id_.c1e5030f.js": {
    "type": "application/javascript",
    "etag": "\"627-uHfA4GuFm4IOTsuXYrTX8KNlzBQ\"",
    "mtime": "2023-03-16T05:06:48.254Z",
    "size": 1575,
    "path": "../public/_nuxt/_id_.c1e5030f.js"
  },
  "/_nuxt/_id_.dd3ccf21.js": {
    "type": "application/javascript",
    "etag": "\"3f87-Vy5vQTmBBtAfakcFQbyt6q50BaE\"",
    "mtime": "2023-03-16T05:06:48.166Z",
    "size": 16263,
    "path": "../public/_nuxt/_id_.dd3ccf21.js"
  },
  "/_nuxt/_id_.e9e989e7.js": {
    "type": "application/javascript",
    "etag": "\"a7b-a/niUqqVD19R/nWwmQrhovCzevk\"",
    "mtime": "2023-03-16T05:06:48.164Z",
    "size": 2683,
    "path": "../public/_nuxt/_id_.e9e989e7.js"
  },
  "/_nuxt/_id_.f2c1dfbf.js": {
    "type": "application/javascript",
    "etag": "\"1a7e-BHoCrvUZ6KqYQwJ9ZjvDqcLJfx4\"",
    "mtime": "2023-03-16T05:06:48.123Z",
    "size": 6782,
    "path": "../public/_nuxt/_id_.f2c1dfbf.js"
  },
  "/_nuxt/_id_.f81ce632.js": {
    "type": "application/javascript",
    "etag": "\"140c-iOc1EUKyi36VyZzTmNKTgjWZKjY\"",
    "mtime": "2023-03-16T05:06:48.115Z",
    "size": 5132,
    "path": "../public/_nuxt/_id_.f81ce632.js"
  },
  "/_nuxt/_id_.fd5a9e8b.js": {
    "type": "application/javascript",
    "etag": "\"abf-zLiceg+RLFGCa0wzi21yQ/NpdNg\"",
    "mtime": "2023-03-16T05:06:48.123Z",
    "size": 2751,
    "path": "../public/_nuxt/_id_.fd5a9e8b.js"
  },
  "/api/_content/cache.1678943073320.json": {
    "type": "application/json",
    "etag": "\"4d-kLQx9xw6d7EObcz9P+2MzPMLu8E\"",
    "mtime": "2023-03-16T05:10:03.624Z",
    "size": 77,
    "path": "../public/api/_content/cache.1678943073320.json"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":2592000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const useConfig = () => useRuntimeConfig().serverMeilisearchClient;

const _d1eaGg = defineEventHandler(async (event) => {
  const { hostUrl, adminApiKey } = useConfig();
  if (!event.context.serverMeilisearchClient) {
    event.context.serverMeilisearchClient = new MeiliSearch({
      host: hostUrl,
      apiKey: adminApiKey
    });
  }
  event.context.serverMeilisearchClient;
});

const get = (obj, path) => path.split(".").reduce((acc, part) => acc && acc[part], obj);
const _pick = (obj, condition) => Object.keys(obj).filter(condition).reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
const apply = (fn) => (data) => Array.isArray(data) ? data.map((item) => fn(item)) : fn(data);
const detectProperties = (keys) => {
  const prefixes = [];
  const properties = [];
  for (const key of keys) {
    if (["$", "_"].includes(key)) {
      prefixes.push(key);
    } else {
      properties.push(key);
    }
  }
  return { prefixes, properties };
};
const withoutKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => !properties.includes(key) && !prefixes.includes(key[0]));
};
const withKeys = (keys = []) => (obj) => {
  if (keys.length === 0 || !obj) {
    return obj;
  }
  const { prefixes, properties } = detectProperties(keys);
  return _pick(obj, (key) => properties.includes(key) || prefixes.includes(key[0]));
};
const sortList = (data, params) => {
  const comperable = new Intl.Collator(params.$locale, {
    numeric: params.$numeric,
    caseFirst: params.$caseFirst,
    sensitivity: params.$sensitivity
  });
  const keys = Object.keys(params).filter((key) => !key.startsWith("$"));
  for (const key of keys) {
    data = data.sort((a, b) => {
      const values = [get(a, key), get(b, key)].map((value) => {
        if (value === null) {
          return void 0;
        }
        if (value instanceof Date) {
          return value.toISOString();
        }
        return value;
      });
      if (params[key] === -1) {
        values.reverse();
      }
      return comperable.compare(values[0], values[1]);
    });
  }
  return data;
};
const assertArray = (value, message = "Expected an array") => {
  if (!Array.isArray(value)) {
    throw new TypeError(message);
  }
};
const ensureArray = (value) => Array.isArray(value) ? value : value ? [value] : [];

const arrayParams = ["sort", "where", "only", "without"];
const createQuery = (fetcher, intitialParams) => {
  const queryParams = {
    ...intitialParams
  };
  for (const key of arrayParams) {
    if (queryParams[key]) {
      queryParams[key] = ensureArray(queryParams[key]);
    }
  }
  const $set = (key, fn = (v) => v) => {
    return (...values) => {
      queryParams[key] = fn(...values);
      return query;
    };
  };
  const query = {
    params: () => queryParams,
    only: $set("only", ensureArray),
    without: $set("without", ensureArray),
    where: $set("where", (q) => [...ensureArray(queryParams.where), q]),
    sort: $set("sort", (sort) => [...ensureArray(queryParams.sort), ...ensureArray(sort)]),
    limit: $set("limit", (v) => parseInt(String(v), 10)),
    skip: $set("skip", (v) => parseInt(String(v), 10)),
    // find
    find: () => fetcher(query),
    findOne: () => {
      queryParams.first = true;
      return fetcher(query);
    },
    findSurround: (surroundQuery, options) => {
      queryParams.surround = { query: surroundQuery, ...options };
      return fetcher(query);
    },
    // locale
    locale: (_locale) => query.where({ _locale })
  };
  return query;
};

function createMatch(opts = {}) {
  const operators = createOperators(match, opts.operators);
  function match(item, conditions) {
    if (typeof conditions !== "object" || conditions instanceof RegExp) {
      return operators.$eq(item, conditions);
    }
    return Object.keys(conditions || {}).every((key) => {
      const condition = conditions[key];
      if (key.startsWith("$") && operators[key]) {
        const fn = operators[key];
        return typeof fn === "function" ? fn(item, condition) : false;
      }
      return match(get(item, key), condition);
    });
  }
  return match;
}
function createOperators(match, operators = {}) {
  return {
    $match: (item, condition) => match(item, condition),
    /**
     * Match if item equals condition
     **/
    $eq: (item, condition) => condition instanceof RegExp ? condition.test(item) : item === condition,
    /**
     * Match if item not equals condition
     **/
    $ne: (item, condition) => condition instanceof RegExp ? !condition.test(item) : item !== condition,
    /**
     * Match is condition is false
     **/
    $not: (item, condition) => !match(item, condition),
    /**
     * Match only if all of nested conditions are true
     **/
    $and: (item, condition) => {
      assertArray(condition, "$and requires an array as condition");
      return condition.every((cond) => match(item, cond));
    },
    /**
     * Match if any of nested conditions is true
     **/
    $or: (item, condition) => {
      assertArray(condition, "$or requires an array as condition");
      return condition.some((cond) => match(item, cond));
    },
    /**
     * Match if item is in condition array
     **/
    $in: (item, condition) => ensureArray(condition).some(
      (cond) => Array.isArray(item) ? match(item, { $contains: cond }) : match(item, cond)
    ),
    /**
     * Match if item contains every condition or math every rule in condition array
     **/
    $contains: (item, condition) => {
      item = Array.isArray(item) ? item : String(item);
      return ensureArray(condition).every((i) => item.includes(i));
    },
    /**
     * Ignore case contains
     **/
    $icontains: (item, condition) => {
      if (typeof condition !== "string") {
        throw new TypeError("$icontains requires a string, use $contains instead");
      }
      item = String(item).toLocaleLowerCase();
      return ensureArray(condition).every((i) => item.includes(i.toLocaleLowerCase()));
    },
    /**
     * Match if item contains at least one rule from condition array
     */
    $containsAny: (item, condition) => {
      assertArray(condition, "$containsAny requires an array as condition");
      item = Array.isArray(item) ? item : String(item);
      return condition.some((i) => item.includes(i));
    },
    /**
     * Check key existence
     */
    $exists: (item, condition) => condition ? typeof item !== "undefined" : typeof item === "undefined",
    /**
     * Match if type of item equals condition
     */
    $type: (item, condition) => typeof item === String(condition),
    /**
     * Provides regular expression capabilities for pattern matching strings.
     */
    $regex: (item, condition) => {
      if (!(condition instanceof RegExp)) {
        const matched = String(condition).match(/\/(.*)\/([dgimsuy]*)$/);
        condition = matched ? new RegExp(matched[1], matched[2] || "") : new RegExp(condition);
      }
      return condition.test(String(item || ""));
    },
    /**
     * Check if item is less than condition
     */
    $lt: (item, condition) => {
      return item < condition;
    },
    /**
     * Check if item is less than or equal to condition
     */
    $lte: (item, condition) => {
      return item <= condition;
    },
    /**
     * Check if item is greater than condition
     */
    $gt: (item, condition) => {
      return item > condition;
    },
    /**
     * Check if item is greater than or equal to condition
     */
    $gte: (item, condition) => {
      return item >= condition;
    },
    ...operators || {}
  };
}

function createPipelineFetcher(getContentsList) {
  const match = createMatch();
  const surround = (data, { query, before, after }) => {
    const matchQuery = typeof query === "string" ? { _path: query } : query;
    const index = data.findIndex((item) => match(item, matchQuery));
    before = before || 1;
    after = after || 1;
    const slice = new Array(before + after).fill(null, 0);
    return index === -1 ? slice : slice.map((_, i) => data[index - before + i + Number(i >= before)] || null);
  };
  const pipelines = [
    // Conditions
    (data, params) => data.filter((item) => ensureArray(params.where).every((matchQuery) => match(item, matchQuery))),
    // Sort data
    (data, params) => ensureArray(params.sort).forEach((options) => sortList(data, options)),
    // Surround logic
    (data, params) => params.surround ? surround(data, params.surround) : data,
    // Skip first items
    (data, params) => params.skip ? data.slice(params.skip) : data,
    // Pick first items
    (data, params) => params.limit ? data.slice(0, params.limit) : data,
    // Remove unwanted fields
    (data, params) => apply(withoutKeys(params.without))(data),
    // Select only wanted fields
    (data, params) => apply(withKeys(params.only))(data)
  ];
  return async (query) => {
    const data = await getContentsList();
    const params = query.params();
    const filteredData = pipelines.reduce(($data, pipe) => pipe($data, params) || $data, data);
    if (params.first) {
      return filteredData[0];
    }
    return filteredData;
  };
}

const defineTransformer = (transformer) => {
  return transformer;
};
const createSingleton = (fn) => {
  let instance;
  return (...args) => {
    if (!instance) {
      instance = fn(...args);
    }
    return instance;
  };
};

function createTokenizer(parser, initialize, from) {
  let point = Object.assign(
    from ? Object.assign({}, from) : {
      line: 1,
      column: 1,
      offset: 0
    },
    {
      _index: 0,
      _bufferIndex: -1
    }
  );
  const columnStart = {};
  const resolveAllConstructs = [];
  let chunks = [];
  let stack = [];
  const effects = {
    consume,
    enter,
    exit,
    attempt: constructFactory(onsuccessfulconstruct),
    check: constructFactory(onsuccessfulcheck),
    interrupt: constructFactory(onsuccessfulcheck, {
      interrupt: true
    })
  };
  const context = {
    previous: null,
    code: null,
    containerState: {},
    events: [],
    parser,
    sliceStream,
    sliceSerialize,
    now,
    defineSkip,
    write
  };
  let state = initialize.tokenize.call(context, effects);
  if (initialize.resolveAll) {
    resolveAllConstructs.push(initialize);
  }
  return context;
  function write(slice) {
    chunks = push(chunks, slice);
    main();
    if (chunks[chunks.length - 1] !== null) {
      return [];
    }
    addResult(initialize, 0);
    context.events = resolveAll(resolveAllConstructs, context.events, context);
    return context.events;
  }
  function sliceSerialize(token, expandTabs) {
    return serializeChunks(sliceStream(token), expandTabs);
  }
  function sliceStream(token) {
    return sliceChunks(chunks, token);
  }
  function now() {
    return Object.assign({}, point);
  }
  function defineSkip(value) {
    columnStart[value.line] = value.column;
    accountForPotentialSkip();
  }
  function main() {
    let chunkIndex;
    while (point._index < chunks.length) {
      const chunk = chunks[point._index];
      if (typeof chunk === "string") {
        chunkIndex = point._index;
        if (point._bufferIndex < 0) {
          point._bufferIndex = 0;
        }
        while (point._index === chunkIndex && point._bufferIndex < chunk.length) {
          go(chunk.charCodeAt(point._bufferIndex));
        }
      } else {
        go(chunk);
      }
    }
  }
  function go(code) {
    state = state(code);
  }
  function consume(code) {
    if (markdownLineEnding(code)) {
      point.line++;
      point.column = 1;
      point.offset += code === -3 ? 2 : 1;
      accountForPotentialSkip();
    } else if (code !== -1) {
      point.column++;
      point.offset++;
    }
    if (point._bufferIndex < 0) {
      point._index++;
    } else {
      point._bufferIndex++;
      if (point._bufferIndex === chunks[point._index].length) {
        point._bufferIndex = -1;
        point._index++;
      }
    }
    context.previous = code;
  }
  function enter(type, fields) {
    const token = fields || {};
    token.type = type;
    token.start = now();
    context.events.push(["enter", token, context]);
    stack.push(token);
    return token;
  }
  function exit(type) {
    const token = stack.pop();
    token.end = now();
    context.events.push(["exit", token, context]);
    return token;
  }
  function onsuccessfulconstruct(construct, info) {
    addResult(construct, info.from);
  }
  function onsuccessfulcheck(_, info) {
    info.restore();
  }
  function constructFactory(onreturn, fields) {
    return hook;
    function hook(constructs, returnState, bogusState) {
      let listOfConstructs;
      let constructIndex;
      let currentConstruct;
      let info;
      return Array.isArray(constructs) ? (
        /* c8 ignore next 1 */
        handleListOfConstructs(constructs)
      ) : "tokenize" in constructs ? handleListOfConstructs([constructs]) : handleMapOfConstructs(constructs);
      function handleMapOfConstructs(map) {
        return start;
        function start(code) {
          const def = code !== null && map[code];
          const all = code !== null && map.null;
          const list = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(def) ? def : def ? [def] : [],
            ...Array.isArray(all) ? all : all ? [all] : []
          ];
          return handleListOfConstructs(list)(code);
        }
      }
      function handleListOfConstructs(list) {
        listOfConstructs = list;
        constructIndex = 0;
        if (list.length === 0) {
          return bogusState;
        }
        return handleConstruct(list[constructIndex]);
      }
      function handleConstruct(construct) {
        return start;
        function start(code) {
          info = store();
          currentConstruct = construct;
          if (!construct.partial) {
            context.currentConstruct = construct;
          }
          if (construct.name && context.parser.constructs.disable.null.includes(construct.name)) {
            return nok();
          }
          return construct.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            fields ? Object.assign(Object.create(context), fields) : context,
            effects,
            ok,
            nok
          )(code);
        }
      }
      function ok(code) {
        onreturn(currentConstruct, info);
        return returnState;
      }
      function nok(code) {
        info.restore();
        if (++constructIndex < listOfConstructs.length) {
          return handleConstruct(listOfConstructs[constructIndex]);
        }
        return bogusState;
      }
    }
  }
  function addResult(construct, from2) {
    if (construct.resolveAll && !resolveAllConstructs.includes(construct)) {
      resolveAllConstructs.push(construct);
    }
    if (construct.resolve) {
      splice(
        context.events,
        from2,
        context.events.length - from2,
        construct.resolve(context.events.slice(from2), context)
      );
    }
    if (construct.resolveTo) {
      context.events = construct.resolveTo(context.events, context);
    }
  }
  function store() {
    const startPoint = now();
    const startPrevious = context.previous;
    const startCurrentConstruct = context.currentConstruct;
    const startEventsIndex = context.events.length;
    const startStack = Array.from(stack);
    return {
      restore,
      from: startEventsIndex
    };
    function restore() {
      point = startPoint;
      context.previous = startPrevious;
      context.currentConstruct = startCurrentConstruct;
      context.events.length = startEventsIndex;
      stack = startStack;
      accountForPotentialSkip();
    }
  }
  function accountForPotentialSkip() {
    if (point.line in columnStart && point.column < 2) {
      point.column = columnStart[point.line];
      point.offset += columnStart[point.line] - 1;
    }
  }
}
function sliceChunks(chunks, token) {
  const startIndex = token.start._index;
  const startBufferIndex = token.start._bufferIndex;
  const endIndex = token.end._index;
  const endBufferIndex = token.end._bufferIndex;
  let view;
  if (startIndex === endIndex) {
    view = [chunks[startIndex].slice(startBufferIndex, endBufferIndex)];
  } else {
    view = chunks.slice(startIndex, endIndex);
    if (startBufferIndex > -1) {
      view[0] = view[0].slice(startBufferIndex);
    }
    if (endBufferIndex > 0) {
      view.push(chunks[endIndex].slice(0, endBufferIndex));
    }
  }
  return view;
}
function serializeChunks(chunks, expandTabs) {
  let index = -1;
  const result = [];
  let atTab;
  while (++index < chunks.length) {
    const chunk = chunks[index];
    let value;
    if (typeof chunk === "string") {
      value = chunk;
    } else
      switch (chunk) {
        case -5: {
          value = "\r";
          break;
        }
        case -4: {
          value = "\n";
          break;
        }
        case -3: {
          value = "\r\n";
          break;
        }
        case -2: {
          value = expandTabs ? " " : "	";
          break;
        }
        case -1: {
          if (!expandTabs && atTab)
            continue;
          value = " ";
          break;
        }
        default: {
          value = String.fromCharCode(chunk);
        }
      }
    atTab = chunk === -2;
    result.push(value);
  }
  return result.join("");
}

function initializeDocument(effects) {
  const self = this;
  const delimiter = (this.parser.delimiter || ",").charCodeAt(0);
  return enterRow;
  function enterRow(code) {
    return effects.attempt(
      { tokenize: attemptLastLine },
      (code2) => {
        effects.consume(code2);
        return enterRow;
      },
      (code2) => {
        effects.enter("row");
        return enterColumn(code2);
      }
    )(code);
  }
  function enterColumn(code) {
    effects.enter("column");
    return content(code);
  }
  function content(code) {
    if (code === null) {
      effects.exit("column");
      effects.exit("row");
      effects.consume(code);
      return content;
    }
    if (code === 34) {
      return quotedData(code);
    }
    if (code === delimiter) {
      if (self.previous === delimiter || markdownLineEnding(self.previous) || self.previous === null) {
        effects.enter("data");
        effects.exit("data");
      }
      effects.exit("column");
      effects.enter("columnSeparator");
      effects.consume(code);
      effects.exit("columnSeparator");
      effects.enter("column");
      return content;
    }
    if (markdownLineEnding(code)) {
      effects.exit("column");
      effects.enter("newline");
      effects.consume(code);
      effects.exit("newline");
      effects.exit("row");
      return enterRow;
    }
    return data(code);
  }
  function data(code) {
    effects.enter("data");
    return dataChunk(code);
  }
  function dataChunk(code) {
    if (code === null || markdownLineEnding(code) || code === delimiter) {
      effects.exit("data");
      return content(code);
    }
    if (code === 92) {
      return escapeCharacter(code);
    }
    effects.consume(code);
    return dataChunk;
  }
  function escapeCharacter(code) {
    effects.consume(code);
    return function(code2) {
      effects.consume(code2);
      return content;
    };
  }
  function quotedData(code) {
    effects.enter("quotedData");
    effects.enter("quotedDataChunk");
    effects.consume(code);
    return quotedDataChunk;
  }
  function quotedDataChunk(code) {
    if (code === 92) {
      return escapeCharacter(code);
    }
    if (code === 34) {
      return effects.attempt(
        { tokenize: attemptDoubleQuote },
        (code2) => {
          effects.exit("quotedDataChunk");
          effects.enter("quotedDataChunk");
          return quotedDataChunk(code2);
        },
        (code2) => {
          effects.consume(code2);
          effects.exit("quotedDataChunk");
          effects.exit("quotedData");
          return content;
        }
      )(code);
    }
    effects.consume(code);
    return quotedDataChunk;
  }
}
function attemptDoubleQuote(effects, ok, nok) {
  return startSequence;
  function startSequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.enter("quoteFence");
    effects.consume(code);
    return sequence;
  }
  function sequence(code) {
    if (code !== 34) {
      return nok(code);
    }
    effects.consume(code);
    effects.exit("quoteFence");
    return (code2) => ok(code2);
  }
}
function attemptLastLine(effects, ok, nok) {
  return enterLine;
  function enterLine(code) {
    if (!markdownSpace(code) && code !== null) {
      return nok(code);
    }
    effects.enter("emptyLine");
    return continueLine(code);
  }
  function continueLine(code) {
    if (markdownSpace(code)) {
      effects.consume(code);
      return continueLine;
    }
    if (code === null) {
      effects.exit("emptyLine");
      return ok(code);
    }
    return nok(code);
  }
}
const parse$1 = (options) => {
  return createTokenizer(
    { ...options },
    { tokenize: initializeDocument },
    void 0
  );
};

const own = {}.hasOwnProperty;
const initialPoint = {
  line: 1,
  column: 1,
  offset: 0
};
const fromCSV = function(value, encoding, options) {
  if (typeof encoding !== "string") {
    options = encoding;
    encoding = void 0;
  }
  return compiler$1()(
    postprocess(
      parse$1(options).write(preprocess()(value, encoding, true))
    )
  );
};
function compiler$1() {
  const config = {
    enter: {
      column: opener(openColumn),
      row: opener(openRow),
      data: onenterdata,
      quotedData: onenterdata
    },
    exit: {
      row: closer(),
      column: closer(),
      data: onexitdata,
      quotedData: onexitQuotedData
    }
  };
  return compile;
  function compile(events) {
    const tree = {
      type: "root",
      children: []
    };
    const stack = [tree];
    const tokenStack = [];
    const context = {
      stack,
      tokenStack,
      config,
      enter,
      exit,
      resume
    };
    let index = -1;
    while (++index < events.length) {
      const handler = config[events[index][0]];
      if (own.call(handler, events[index][1].type)) {
        handler[events[index][1].type].call(
          Object.assign(
            {
              sliceSerialize: events[index][2].sliceSerialize
            },
            context
          ),
          events[index][1]
        );
      }
    }
    if (tokenStack.length > 0) {
      const tail = tokenStack[tokenStack.length - 1];
      const handler = tail[1] || defaultOnError;
      handler.call(context, void 0, tail[0]);
    }
    tree.position = {
      start: point(
        events.length > 0 ? events[0][1].start : initialPoint
      ),
      end: point(
        events.length > 0 ? events[events.length - 2][1].end : initialPoint
      )
    };
    return tree;
  }
  function point(d) {
    return {
      line: d.line,
      column: d.column,
      offset: d.offset
    };
  }
  function opener(create, and) {
    return open;
    function open(token) {
      enter.call(this, create(token), token);
      if (and) {
        and.call(this, token);
      }
    }
  }
  function enter(node, token, errorHandler) {
    const parent = this.stack[this.stack.length - 1];
    parent.children.push(node);
    this.stack.push(node);
    this.tokenStack.push([token, errorHandler]);
    node.position = {
      start: point(token.start)
    };
    return node;
  }
  function closer(and) {
    return close;
    function close(token) {
      if (and) {
        and.call(this, token);
      }
      exit.call(this, token);
    }
  }
  function exit(token, onExitError) {
    const node = this.stack.pop();
    const open = this.tokenStack.pop();
    if (!open) {
      throw new Error(
        "Cannot close `" + token.type + "` (" + stringifyPosition({
          start: token.start,
          end: token.end
        }) + "): it\u2019s not open"
      );
    } else if (open[0].type !== token.type) {
      if (onExitError) {
        onExitError.call(this, token, open[0]);
      } else {
        const handler = open[1] || defaultOnError;
        handler.call(this, token, open[0]);
      }
    }
    node.position.end = point(token.end);
    return node;
  }
  function resume() {
    return toString(this.stack.pop());
  }
  function onenterdata(token) {
    const parent = this.stack[this.stack.length - 1];
    let tail = parent.children[parent.children.length - 1];
    if (!tail || tail.type !== "text") {
      tail = text();
      tail.position = {
        start: point(token.start)
      };
      parent.children.push(tail);
    }
    this.stack.push(tail);
  }
  function onexitdata(token) {
    const tail = this.stack.pop();
    tail.value += this.sliceSerialize(token).trim().replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function onexitQuotedData(token) {
    const tail = this.stack.pop();
    const value = this.sliceSerialize(token);
    tail.value += this.sliceSerialize(token).trim().substring(1, value.length - 1).replace(/""/g, '"');
    tail.position.end = point(token.end);
  }
  function text() {
    return {
      type: "text",
      value: ""
    };
  }
  function openColumn() {
    return {
      type: "column",
      children: []
    };
  }
  function openRow() {
    return {
      type: "row",
      children: []
    };
  }
}
function defaultOnError(left, right) {
  if (left) {
    throw new Error(
      "Cannot close `" + left.type + "` (" + stringifyPosition({
        start: left.start,
        end: left.end
      }) + "): a different token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is open"
    );
  } else {
    throw new Error(
      "Cannot close document, a token (`" + right.type + "`, " + stringifyPosition({
        start: right.start,
        end: right.end
      }) + ") is still open"
    );
  }
}

function csvParse(options) {
  const parser = (doc) => {
    return fromCSV(doc, options);
  };
  Object.assign(this, { Parser: parser });
  const toJsonObject = (tree) => {
    const [header, ...rows] = tree.children;
    const columns = header.children.map((col) => col.children[0].value);
    const data = rows.map((row) => {
      return row.children.reduce((acc, col, i) => {
        acc[String(columns[i])] = col.children[0]?.value;
        return acc;
      }, {});
    });
    return data;
  };
  const toJsonArray = (tree) => {
    const data = tree.children.map((row) => {
      return row.children.map((col) => col.children[0]?.value);
    });
    return data;
  };
  const compiler = (doc) => {
    if (options.json) {
      return toJsonObject(doc);
    }
    return toJsonArray(doc);
  };
  Object.assign(this, { Compiler: compiler });
}
const csv = defineTransformer({
  name: "csv",
  extensions: [".csv"],
  parse: async (_id, content, options = {}) => {
    const stream = unified().use(csvParse, {
      delimiter: ",",
      json: true,
      ...options
    });
    const { result } = await stream.process(content);
    return {
      _id,
      _type: "csv",
      body: result
    };
  }
});

function flattenNodeText(node) {
  if (node.type === "text") {
    return node.value || "";
  } else {
    return (node.children || []).reduce((text, child) => {
      return text.concat(flattenNodeText(child));
    }, "");
  }
}
function flattenNode(node, maxDepth = 2, _depth = 0) {
  if (!Array.isArray(node.children) || _depth === maxDepth) {
    return [node];
  }
  return [
    node,
    ...node.children.reduce((acc, child) => acc.concat(flattenNode(child, maxDepth, _depth + 1)), [])
  ];
}

const TOC_TAGS = ["h2", "h3", "h4", "h5", "h6"];
const TOC_TAGS_DEPTH = TOC_TAGS.reduce((tags, tag) => {
  tags[tag] = Number(tag.charAt(tag.length - 1));
  return tags;
}, {});
const getHeaderDepth = (node) => TOC_TAGS_DEPTH[node.tag];
const getTocTags = (depth) => {
  if (depth < 1 || depth > 5) {
    console.log(`\`toc.depth\` is set to ${depth}. It should be a number between 1 and 5. `);
    depth = 1;
  }
  return TOC_TAGS.slice(0, depth);
};
function nestHeaders(headers) {
  if (headers.length <= 1) {
    return headers;
  }
  const toc = [];
  let parent;
  headers.forEach((header) => {
    if (!parent || header.depth <= parent.depth) {
      header.children = [];
      parent = header;
      toc.push(header);
    } else {
      parent.children.push(header);
    }
  });
  toc.forEach((header) => {
    if (header.children?.length) {
      header.children = nestHeaders(header.children);
    } else {
      delete header.children;
    }
  });
  return toc;
}
function generateFlatToc(body, options) {
  const { searchDepth, depth, title = "" } = options;
  const tags = getTocTags(depth);
  const headers = flattenNode(body, searchDepth).filter((node) => tags.includes(node.tag || ""));
  const links = headers.map((node) => ({
    id: node.props?.id,
    depth: getHeaderDepth(node),
    text: flattenNodeText(node)
  }));
  return {
    title,
    searchDepth,
    depth,
    links
  };
}
function generateToc(body, options) {
  const toc = generateFlatToc(body, options);
  toc.links = nestHeaders(toc.links);
  return toc;
}

function emphasis(h, node) {
  return h(node, "em", node.attributes, all(h, node));
}

function parseThematicBlock(lang) {
  if (!lang) {
    return {
      language: void 0,
      highlights: void 0,
      fileName: void 0
    };
  }
  const language = lang.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/);
  const highlightTokens = lang.match(/{([^}]+)}/);
  const filenameTokens = lang.match(/\[(.+)\]/);
  return {
    language: language ? language[0] : void 0,
    highlights: parseHighlightedLines(highlightTokens && highlightTokens[1]),
    filename: Array.isArray(filenameTokens) ? filenameTokens[1] : void 0
  };
}
function parseHighlightedLines(lines) {
  const lineArray = String(lines || "").split(",").filter(Boolean).flatMap((line) => {
    const [start, end] = line.trim().split("-").map((a) => Number(a.trim()));
    return Array.from({ length: (end || start) - start + 1 }).map((_, i) => start + i);
  });
  return lineArray.length ? lineArray : void 0;
}
const TAG_NAME_REGEXP = /^<\/?([A-Za-z0-9-_]+) ?[^>]*>/;
function getTagName(value) {
  const result = String(value).match(TAG_NAME_REGEXP);
  return result && result[1];
}
function wrap(nodes, loose = false) {
  const result = [];
  let index = -1;
  if (loose) {
    result.push(u("text", "\n"));
  }
  while (++index < nodes.length) {
    if (index) {
      result.push(u("text", "\n"));
    }
    result.push(nodes[index]);
  }
  if (loose && nodes.length > 0) {
    result.push(u("text", "\n"));
  }
  return result;
}

const code = (h, node) => {
  const lang = (node.lang || "") + " " + (node.meta || "");
  const { language, highlights, filename } = parseThematicBlock(lang);
  const code = node.value ? detab(node.value + "\n") : "";
  return h(
    node.position,
    "code",
    {
      language,
      filename,
      highlights,
      meta: node.meta,
      code
    },
    [h(node, "pre", {}, [h(node, "code", { __ignoreMap: "" }, [u("text", code)])])]
  );
};

function html(h, node) {
  const tagName = getTagName(node.value);
  if (tagName && /[A-Z]/.test(tagName)) {
    node.value = node.value.replace(tagName, kebabCase(tagName));
  }
  if (tagName === "code") {
    node.value = node.value.replace(tagName, "code-inline");
  }
  return h.dangerous ? h.augment(node, u("raw", node.value)) : null;
}

function heading(h, node) {
  return h(node, "h" + node.depth, all(h, node));
}

const SEMVER_REGEX = /^(\d+)(\.\d+)*(\.x)?$/;
const describeId = (_id) => {
  const [_source, ...parts] = _id.split(":");
  const [, filename, _extension] = parts[parts.length - 1].match(/(.*)\.([^.]+)$/);
  parts[parts.length - 1] = filename;
  const _path = parts.join("/");
  return {
    _source,
    _path,
    _extension,
    _file: _extension ? `${_path}.${_extension}` : _path
  };
};
const pathMeta = defineTransformer({
  name: "path-meta",
  extensions: [".*"],
  transform(content, options = {}) {
    const { locales = [], defaultLocale = "en" } = options;
    const { _source, _file, _path, _extension } = describeId(content._id);
    const parts = _path.split("/");
    const _locale = locales.includes(parts[0]) ? parts.shift() : defaultLocale;
    const filePath = generatePath(parts.join("/"));
    return {
      _path: filePath,
      _dir: filePath.split("/").slice(-2)[0],
      _draft: isDraft(_path),
      _partial: isPartial(_path),
      _locale,
      ...content,
      // TODO: move title to Markdown parser
      title: content.title || generateTitle(refineUrlPart(parts[parts.length - 1])),
      _source,
      _file,
      _extension
    };
  }
});
const isDraft = (path) => !!path.match(/\.draft(\/|\.|$)/);
const isPartial = (path) => path.split(/[:/]/).some((part) => part.match(/^_.*/));
const generatePath = (path, { forceLeadingSlash = true } = {}) => {
  path = path.split("/").map((part) => slugify(refineUrlPart(part), { lower: true })).join("/");
  return forceLeadingSlash ? withLeadingSlash(withoutTrailingSlash(path)) : path;
};
const generateTitle = (path) => path.split(/[\s-]/g).map(pascalCase).join(" ");
function refineUrlPart(name) {
  name = name.split(/[/:]/).pop();
  if (SEMVER_REGEX.test(name)) {
    return name;
  }
  return name.replace(/(\d+\.)?(.*)/, "$2").replace(/^index(\.draft)?$/, "").replace(/\.draft$/, "");
}

function link(h, node) {
  const props = {
    ...node.attributes || {},
    href: encode(normalizeLink(node.url))
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "a", props, all(h, node));
}
function normalizeLink(link2) {
  if (link2.endsWith(".md") && (isRelative(link2) || !/^https?/.test(link2) && !link2.startsWith("/"))) {
    return generatePath(link2.replace(/\.md$/, ""), { forceLeadingSlash: false });
  } else {
    return link2;
  }
}

function list(h, node) {
  const props = {};
  const name = `${node.ordered ? "ol" : "ul"}`;
  if (typeof node.start === "number" && node.start !== 1) {
    props.start = node.start;
  }
  if ((node.children || []).some((child) => typeof child.checked === "boolean")) {
    props.className = ["contains-task-list"];
  }
  return h(node, name, props, wrap(all(h, node), true));
}

function listItem(h, node, parent) {
  const result = all(h, node);
  const loose = parent ? listLoose(parent) : listItemLoose(node);
  const props = {};
  let wrapped = [];
  let index;
  let child;
  if (typeof node.checked === "boolean") {
    result.unshift(
      h({}, "input", {
        type: "checkbox",
        checked: node.checked,
        disabled: true
      })
    );
    props.className = ["task-list-item"];
  }
  const length = result.length;
  index = -1;
  while (++index < length) {
    child = result[index];
    if (child.tagName === "p" && !loose) {
      wrapped = wrapped.concat(child.children || []);
    } else {
      wrapped.push(child);
    }
  }
  return h(node, "li", props, wrapped);
}
function listLoose(node) {
  let loose = node.spread;
  const children = node.children;
  const length = children.length;
  let index = -1;
  while (!loose && ++index < length) {
    loose = listItemLoose(children[index]);
  }
  return loose;
}
function listItemLoose(node) {
  const spread = node.spread;
  const children = node.children || [];
  return spread === void 0 || spread === null ? children.length > 1 : spread;
}

function table(h, node) {
  const rows = node.children;
  const align = node.align || [];
  const result = rows.map((row, index) => {
    const childres = row.children;
    const name = index === 0 ? "th" : "td";
    let pos = node.align ? align.length : childres.length;
    const out = [];
    while (pos--) {
      const cell = childres[pos];
      out[pos] = h(cell, name, { align: align[pos] }, cell ? all(h, cell) : []);
    }
    return h(row, "tr", wrap(out, true));
  });
  const body = result[1] && h(
    {
      start: position(result[1]).start,
      end: position(result[result.length - 1]).end
    },
    "tbody",
    wrap(result.slice(1), true)
  );
  return h(node, "table", wrap([h(result[0].position, "thead", wrap([result[0]], true))].concat(body || []), true));
}

const htmlTags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];

function paragraph(h, node) {
  if (node.children && node.children[0] && node.children[0].type === "html") {
    const tagName = kebabCase(getTagName(node.children[0].value) || "div");
    if (!htmlTags.includes(tagName)) {
      return all(h, node);
    }
  }
  return h(node, "p", all(h, node));
}

function image(h, node) {
  const props = {
    ...node.attributes,
    src: encode(node.url),
    alt: node.alt
  };
  if (node.title !== null && node.title !== void 0) {
    props.title = node.title;
  }
  return h(node, "img", props);
}

function blockquote(h, node) {
  return h(node, "blockquote", wrap(all(h, node), true));
}

function strong(h, node) {
  return h(node, "strong", node.attributes, all(h, node));
}

function inlineCode(h, node) {
  return h(node, "code-inline", node.attributes, [
    // @ts-ignore
    u("text", node.value.replace(/\r?\n|\r/g, " "))
  ]);
}

function thematicBreak(h, node) {
  return h(node, "hr");
}

function containerComponent(h, node) {
  const hast = h(node, node.tagName, node.attributes, all(h, node));
  hast.attributes = node.attributes;
  hast.fmAttributes = node.fmAttributes;
  return hast;
}

const handlers$1 = {
  emphasis,
  code,
  paragraph,
  html,
  link,
  list,
  listItem,
  heading,
  table,
  image,
  blockquote,
  strong,
  inlineCode,
  thematicBreak,
  containerComponent
};

function compiler(_options) {
  function parseAsJSON(node) {
    if (Array.isArray(node)) {
      return node.map(parseAsJSON).filter(Boolean);
    }
    if (node.tagName?.startsWith("h") && node.properties.id) {
      node.properties.id = node.properties.id.replace(/-+/g, "-").replace(/-$/, "").replace(/^-/, "");
    }
    if (node.type === "element") {
      if (node.tagName === "li") {
        let hasPreviousParagraph = false;
        node.children = node.children.flatMap((child) => {
          if (child.tagName === "p") {
            if (hasPreviousParagraph) {
              child.children.unshift({
                type: "element",
                tagName: "br",
                properties: {}
              });
            }
            hasPreviousParagraph = true;
            return child.children;
          }
          return child;
        });
      }
      if (node.tagName === "component-slot") {
        node.tagName = "template";
      }
      return {
        type: "element",
        tag: node.tagName,
        props: node.properties,
        children: parseAsJSON(node.children || [])
      };
    }
    if (node.type === "text") {
      if (node.value === "\n") {
        return null;
      }
      return {
        type: "text",
        value: node.value
      };
    }
    if (node.type === "comment") {
      return null;
    }
    node.children = parseAsJSON(node.children || []);
    return node;
  }
  this.Compiler = function(root) {
    return {
      type: "root",
      children: parseAsJSON(root.children || [])
    };
  };
}

function isTag(vnode, tag) {
  if (vnode.type === tag) {
    return true;
  }
  if (typeof vnode.type === "object" && vnode.type.tag === tag) {
    return true;
  }
  if (vnode.tag === tag) {
    return true;
  }
  return false;
}
function isText(vnode) {
  return isTag(vnode, "text") || typeof vnode.children === "string";
}
function nodeChildren(node) {
  if (Array.isArray(node.children) || typeof node.children === "string") {
    return node.children;
  }
  if (typeof node.children.default === "function") {
    return node.children.default();
  }
  return [];
}
function nodeTextContent(node) {
  if (!node) {
    return "";
  }
  if (Array.isArray(node)) {
    return node.map(nodeTextContent).join("");
  }
  if (isText(node)) {
    return node.children || node.value;
  }
  const children = nodeChildren(node);
  if (Array.isArray(children)) {
    return children.map(nodeTextContent).join("");
  }
  return "";
}

const usePlugins = (plugins, stream) => {
  for (const plugin of Object.values(plugins)) {
    if (plugin) {
      const { instance, ...options } = plugin;
      stream.use(instance, options);
    }
  }
};
function generateBody(content, options) {
  const rehypeOptions = {
    handlers: handlers$1,
    allowDangerousHtml: true
  };
  return new Promise((resolve, reject) => {
    const stream = unified().use(remarkParse);
    if (options.mdc) {
      stream.use(remarkMDC);
    }
    usePlugins(options.remarkPlugins, stream);
    stream.use(remark2rehype, rehypeOptions);
    usePlugins(options.rehypePlugins, stream);
    stream.use(compiler, options);
    stream.process(
      {
        value: content,
        data: options.data
      },
      (error, file) => {
        if (error) {
          return reject(error);
        }
        Object.assign(options.data, file?.data || {});
        resolve(file?.result);
      }
    );
  });
}
function contentHeading(body) {
  let title = "";
  let description = "";
  const children = body.children.filter((node) => node.type !== "text" && node.tag !== "hr");
  if (children.length && children[0].tag === "h1") {
    const node = children.shift();
    title = nodeTextContent(node);
  }
  if (children.length && children[0].tag === "p") {
    const node = children.shift();
    description = nodeTextContent(node);
  }
  return {
    title,
    description
  };
}

const useDefaultOptions = () => ({
  mdc: true,
  toc: {
    depth: 2,
    searchDepth: 2
  },
  tags: {},
  remarkPlugins: {
    "remark-emoji": {
      instance: remarkEmoji
    },
    "remark-squeeze-paragraphs": {
      instance: remarkSqueezeParagraphs
    },
    "remark-gfm": {
      instance: remarkGfm
    }
  },
  rehypePlugins: {
    "rehype-slug": {
      instance: rehypeSlug
    },
    "rehype-external-links": {
      instance: rehypeExternalLinks
    },
    "rehype-sort-attribute-values": {
      instance: rehypeSortAttributeValues
    },
    "rehype-sort-attributes": {
      instance: rehypeSortAttributes
    },
    "rehype-raw": {
      instance: rehypeRaw,
      passThrough: ["element"]
    }
  }
});
async function parse(file, userOptions = {}) {
  const options = defu(userOptions, useDefaultOptions());
  const { content, data } = await parseFrontMatter(file);
  const body = await generateBody(content, { ...options, data });
  let toc;
  if (data.toc !== false) {
    const tocOption = defu(data.toc || {}, options.toc);
    toc = generateToc(body, tocOption);
  }
  const excerptString = useExcerpt(content);
  const excerpt = excerptString ? await generateBody(excerptString, { ...options, data }) : void 0;
  const heading = contentHeading(body);
  return {
    body: {
      ...body,
      toc
    },
    meta: {
      _empty: content.trim().length === 0,
      title: heading.title,
      description: heading.description,
      excerpt,
      ...data
    }
  };
}
function useExcerpt(content, delimiter = /<!--\s*?more\s*?-->/i) {
  if (!delimiter) {
    return "";
  }
  let idx = -1;
  const match = delimiter.exec(content);
  if (match) {
    idx = match.index;
  }
  if (idx !== -1) {
    return content.slice(0, idx);
  }
}

const markdown = defineTransformer({
  name: "markdown",
  extensions: [".md"],
  parse: async (_id, content, options = {}) => {
    const config = { ...options };
    config.rehypePlugins = await importPlugins(config.rehypePlugins);
    config.remarkPlugins = await importPlugins(config.remarkPlugins);
    const parsed = await parse(content, config);
    return {
      ...parsed.meta,
      body: parsed.body,
      _type: "markdown",
      _id
    };
  }
});
async function importPlugins(plugins = {}) {
  const resolvedPlugins = {};
  for (const [name, plugin] of Object.entries(plugins)) {
    if (plugin) {
      resolvedPlugins[name] = {
        instance: plugin.instance || await import(
          /* @vite-ignore */
          name
        ).then((m) => m.default || m),
        ...plugin
      };
    } else {
      resolvedPlugins[name] = false;
    }
  }
  return resolvedPlugins;
}

const yaml = defineTransformer({
  name: "Yaml",
  extensions: [".yml", ".yaml"],
  parse: async (_id, content) => {
    const { data } = await parseFrontMatter(`---
${content}
---`);
    let parsed = data;
    if (Array.isArray(data)) {
      console.warn(`YAML array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = { body: data };
    }
    return {
      ...parsed,
      _id,
      _type: "yaml"
    };
  }
});

const grammar = {
  "information_for_contributors": [
    "This file has been converted from https://github.com/docusgen/vscode-extension/blob/main/syntaxes/mdc.tmLanguage.json",
    "If you want to provide a fix or improvement, please create a pull request against the original repository.",
    "Once accepted there, we are happy to receive an update request."
  ],
  "version": "https://github.com/docusgen/vscode-extension/blob/1303abd16342880a42a4d143a660da049c79ea6c/syntaxes/mdc.tmLanguage.json",
  "name": "markdown",
  "injectionSelector": "L:text.html.markdown",
  "scopeName": "text.markdown.mdc",
  "patterns": [
    {
      "include": "text.html.markdown#frontMatter"
    },
    {
      "include": "#component_block"
    },
    {
      "include": "#block"
    }
  ],
  "repository": {
    "block": {
      "comment": "Same as `text.html.markdown#block`, but without `raw_block`",
      "patterns": [
        {
          "include": "#component_block"
        },
        {
          "include": "text.html.markdown#separator"
        },
        {
          "include": "#heading"
        },
        {
          "include": "#blockquote"
        },
        {
          "include": "#lists"
        },
        {
          "include": "#paragraph"
        },
        {
          "include": "text.html.markdown#fenced_code_block"
        },
        {
          "include": "text.html.markdown#link-def"
        },
        {
          "include": "text.html.markdown#html"
        }
      ]
    },
    "inline": {
      "patterns": [
        {
          "include": "#component_inline"
        },
        {
          "include": "#span"
        },
        {
          "include": "#markdown_attributes"
        }
      ]
    },
    "markdown_attributes": {
      "match": "(?x)([^ ])(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.component.attribute",
      "captures": {
        "4": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "span": {
      "match": "(?x)\n  (\\[)           # Open\n    ([^]]*)\n  (\\])\n  (               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )?",
      "name": "markup.component.span",
      "captures": {
        "2": {
          "name": "string.other.link.description.title.markdown"
        },
        "4": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "attributes": {
      "match": "(?x)(               # attributes\n    ({)\n      ([^{]*)\n    (})\n  )",
      "name": "markup.attributes",
      "captures": {
        "3": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      }
    },
    "component_inline": {
      "match": "(?x)\n  (^|\\G|\\s+)\n  (:)           # component colon\n  (?i:             # component name\n    (\\w[\\w\\d-]*)\n  )\n  (\n      ({[^}]*})        # attributes\n      (\\[[^\\]]*\\]?) # slot\n      # reverse order\n    | (\\[[^\\]]*\\])  # slot\n      ({[^}]*})?       # attributes\n  )?",
      "name": "markup.component.inline",
      "captures": {
        "2": {
          "name": "punctuation.definition.tag.start.component"
        },
        "3": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        },
        "6": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "7": {
          "patterns": [
            {
              "include": "#span"
            }
          ]
        },
        "8": {
          "patterns": [
            {
              "include": "#attributes"
            }
          ]
        }
      }
    },
    "component_block": {
      "begin": "(?x)\n  (^|\\G)(\\s*)\n  (:{2,})     # component colons\n  (?i:\n    (\\w[\\w\\d-]+)   # component name\n    (                 # folowing spaces or attributes\n        \\s*\n      | {([^{]*)}\n    )\n    $\n  )",
      "name": "markup.component.block",
      "end": "(^|\\G)(\\2)(\\3)\\s*$",
      "beginCaptures": {
        "4": {
          "name": "entity.name.tag.component"
        },
        "5": {
          "patterns": [
            {
              "include": "#attribute"
            }
          ]
        }
      },
      "patterns": [
        {
          "include": "#content"
        }
      ]
    },
    "content": {
      "begin": "(^|\\G)(\\s*)(.*)",
      "while": "(^|\\G)(?!\\s*([:]{2,})\\s*$)",
      "contentName": "meta.embedded.block.component",
      "patterns": [
        {
          "begin": "(^|\\G)(\\s*)(-{3})(\\s*)$",
          "end": "(^|\\G)(\\s*(-{3})(\\s*)$)",
          "patterns": [
            {
              "include": "source.yaml"
            }
          ]
        },
        {
          "match": "^(\\s*)(#[\\w\\-\\_]*)\\s*(<!--(.*)-->)?$",
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "name": "comment.block.html"
            }
          }
        },
        {
          "comment": "Block Repository created to disable 4-space raw block inside components",
          "include": "#block"
        }
      ]
    },
    "attribute": {
      "patterns": [
        {
          "match": `(?x)
  (
    ([^=><\\s]*)  # attribute name
    (             # attribute value
        =["]([^"]*)(["])|[']([^']*)(['])
      | =[^\\s'"]*
    )?
    \\s*
  )`,
          "captures": {
            "2": {
              "name": "entity.other.attribute-name.html"
            },
            "3": {
              "patterns": [
                {
                  "include": "#attribute-interior"
                }
              ]
            }
          }
        }
      ]
    },
    "attribute-interior": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L376",
      "patterns": [
        {
          "begin": "=",
          "beginCaptures": {
            "0": {
              "name": "punctuation.separator.key-value.html"
            }
          },
          "end": "(?<=[^\\s=])(?!\\s*=)|(?=/?>)",
          "patterns": [
            {
              "match": "([^\\s\"'=<>`/]|/(?!>))+",
              "name": "string.unquoted.html"
            },
            {
              "begin": '"',
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": '"',
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.double.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "begin": "'",
              "beginCaptures": {
                "0": {
                  "name": "punctuation.definition.string.begin.html"
                }
              },
              "end": "'",
              "endCaptures": {
                "0": {
                  "name": "punctuation.definition.string.end.html"
                }
              },
              "name": "string.quoted.single.html",
              "patterns": [
                {
                  "include": "#entities"
                }
              ]
            },
            {
              "match": "=",
              "name": "invalid.illegal.unexpected-equals-sign.html"
            }
          ]
        }
      ]
    },
    "entities": {
      "comment": "https://github.com/microsoft/vscode/blob/08d59c432609ae9306eb3889815977e93bb548de/extensions/html/syntaxes/html.tmLanguage.json#L532",
      "patterns": [
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "912": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "comment": "Yes this is a bit ridiculous, there are quite a lot of these",
          "match": "(?x)\n						(&)	(?=[a-zA-Z])\n						(\n							(a(s(ymp(eq)?|cr|t)|n(d(slope|d|v|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a(h|c|d|e|f|a|g|b))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|e|E|acir)?|elig|f(r)?|w(conint|int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))\n						  | (B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h(d|u|D|U)?|times|H(d|u|D|U)?|d(R|l|r|L)|u(R|l|r|L)|plus|D(R|l|r|L)|v(R|h|H|l|r|L)?|U(R|l|r|L)|V(R|h|H|l|r|L)?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1(2|4)|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))\n						  | (c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr(l|r)|p(s|c(up|ap)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w(conint|int)|lubs(uit)?|a(cute|p(s|c(up|ap)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly(DoubleQuote|Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))\n						  | (d(s(c(y|r)|trok|ol)|har(l|r)|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up(DownArrow|Arrow)|VerticalBar|L(ong(RightArrow|Left(RightArrow|Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))\n						  | (e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t(h|a)|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(ot|Dot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1(3|4))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty(SmallSquare|VerySmallSquare)|acr)))\n						  | (f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(ig|lig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1(2|8|3|4|5|6)|78|2(3|5)|3(8|4|5)|45|5(8|6)))))|F(scr|cy|illed(SmallSquare|VerySmallSquare)|o(uriertrf|pf|rAll)|fr))\n						  | (G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im(e|l)?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(qless|less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l(j|E|a)?|a(cute|p|mma(d)?)|rave|g(g)?|breve))\n						  | (h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok(leftarrow|rightarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks(earow|warow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))\n						  | (i(s(cr|in(s(v)?|dot|v|E)?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(nt|int)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f(f|r)|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))\n						  | (j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))\n						  | (k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))\n						  | (l(s(h|cr|trok|im(e|g)?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(il|dil)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i(e|f)?|Par))?|Har|o(ng(left(arrow|rightarrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r(dhar|ushar))|ur(dshar|uhar)|jcy|par(lt)?|e(s(s(sim|dot|eq(qgtr|gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left(arrow|rightarrow)|rightarrow|Left(RightArrow|Arrow))|pf|wer(RightArrow|LeftArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))\n						  | (M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u(ltimap|map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))\n						  | (n(s(hort(parallel|mid)|c(cue|e|r)?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|e|E)?|b(set(eq(q)?)?|e|E)?)|par|qsu(pe|be)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v(c|a|b))?|in(dot|v(c|a|b)|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g(t|e))|fr|w(near|ar(hk|r(ow)?)|Arr)|V(dash|Dash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft(arrow|rightarrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr(c|w)?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft(arrow|rightarrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes(SlantEqual|Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi(nSpace|ckSpace)|VeryThinSpace))|Jcy|fr|acute))\n						  | (o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|f|m)?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly(DoubleQuote|Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))\n						  | (p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d(o|u)|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))\n						  | (q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))\n						  | (R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(il|dil)|aron)|Barr|t(hree|imes|ri(e|f|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng(d|e|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl(d|u)|e)|ac(e|k))|brk)|A(tail|arr|rr)))\n						  | (s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma(v|f)?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot(e|b)?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n(e|E)|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u(p|b)|et(neq(q)?|eq(q)?)?)|n(e|E)|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar(e|f))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort(RightArrow|DownArrow|UpArrow|LeftArrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))\n						  | (t(s(hcy|c(y|r)|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead(leftarrow|rightarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i(nSpace|ckSpace)|e(ta|refore))|c(y|edil|aron)|S(cy|Hcy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a(u|b)|ripleDot))\n						  | (u(scr|h(ar(l|r)|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per(RightArrow|LeftArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))\n						  | (v(s(cr|u(pn(e|E)|bn(e|E)))|nsu(p|b)|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))\n						  | (w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))\n						  | (X(scr|i|opf|fr)|x(s(cr|qcup)|h(arr|Arr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l(arr|Arr)|r(arr|Arr)|map))\n						  | (y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))\n						  | (z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(nj|j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute))\n						)\n						(;)\n					",
          "name": "constant.character.entity.named.$2.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[0-9]+(;)",
          "name": "constant.character.entity.numeric.decimal.html"
        },
        {
          "captures": {
            "1": {
              "name": "punctuation.definition.entity.html"
            },
            "3": {
              "name": "punctuation.definition.entity.html"
            }
          },
          "match": "(&)#[xX][0-9a-fA-F]+(;)",
          "name": "constant.character.entity.numeric.hexadecimal.html"
        },
        {
          "match": "&(?=[a-zA-Z0-9]+;)",
          "name": "invalid.illegal.ambiguous-ampersand.html"
        }
      ]
    },
    "heading": {
      "match": "(?:^|\\G)[ ]*(#{1,6}\\s+(.*?)(\\s+#{1,6})?\\s*)$",
      "captures": {
        "1": {
          "patterns": [
            {
              "match": "(#{6})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.6.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{5})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.5.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{4})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.4.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{3})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.3.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{2})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.2.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            },
            {
              "match": "(#{1})\\s+(.*?)(?:\\s+(#+))?\\s*$",
              "name": "heading.1.markdown",
              "captures": {
                "1": {
                  "name": "punctuation.definition.heading.markdown"
                },
                "2": {
                  "name": "entity.name.section.markdown",
                  "patterns": [
                    {
                      "include": "text.html.markdown#inline"
                    },
                    {
                      "include": "text.html.derivative"
                    }
                  ]
                },
                "3": {
                  "name": "punctuation.definition.heading.markdown"
                }
              }
            }
          ]
        }
      },
      "name": "markup.heading.markdown",
      "patterns": [
        {
          "include": "text.html.markdown#inline"
        }
      ]
    },
    "heading-setext": {
      "patterns": [
        {
          "match": "^(={3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.1.markdown"
        },
        {
          "match": "^(-{3,})(?=[ \\t]*$\\n?)",
          "name": "markup.heading.setext.2.markdown"
        }
      ]
    },
    "lists": {
      "patterns": [
        {
          "begin": "(^|\\G)([ ]*)([*+-])([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "comment": "Currently does not support un-indented second lines.",
          "name": "markup.list.unnumbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        },
        {
          "begin": "(^|\\G)([ ]*)([0-9]+\\.)([ \\t])",
          "beginCaptures": {
            "3": {
              "name": "punctuation.definition.list.begin.markdown"
            }
          },
          "name": "markup.list.numbered.markdown",
          "patterns": [
            {
              "include": "#block"
            },
            {
              "include": "text.html.markdown#list_paragraph"
            }
          ],
          "while": "((^|\\G)([ ]*|\\t))|(^[ \\t]*$)"
        }
      ]
    },
    "paragraph": {
      "begin": "(^|\\G)[ ]*(?=\\S)",
      "name": "meta.paragraph.markdown",
      "patterns": [
        {
          "include": "#inline"
        },
        {
          "include": "text.html.markdown#inline"
        },
        {
          "include": "text.html.derivative"
        },
        {
          "include": "#heading-setext"
        }
      ],
      "while": "(^|\\G)((?=\\s*[-=]{3,}\\s*$)|[ ]{4,}(?=\\S))"
    },
    "blockquote": {
      "begin": "(^|\\G)[ ]*(>) ?",
      "captures": {
        "2": {
          "name": "punctuation.definition.quote.begin.markdown"
        }
      },
      "name": "markup.quote.markdown",
      "patterns": [
        {
          "include": "#block"
        }
      ],
      "while": "(^|\\G)\\s*(>) ?"
    }
  }
};
const mdcTMLanguage = grammar;

const logger = consola.withScope("@nuxt/content");
const resolveLang = (lang) => BUNDLED_LANGUAGES.find((l) => l.id === lang || l.aliases?.includes(lang));
const resolveTheme = (theme) => {
  if (!theme) {
    return;
  }
  if (typeof theme === "string") {
    theme = {
      default: theme
    };
  }
  return Object.entries(theme).reduce((acc, [key, value]) => {
    acc[key] = BUNDLED_THEMES.find((t) => t === value);
    return acc;
  }, {});
};
const useShikiHighlighter = createSingleton((opts) => {
  const { theme, preload } = opts || {};
  let promise;
  const getShikiHighlighter = () => {
    if (!promise) {
      promise = getHighlighter({
        theme: theme?.default || theme || "dark-plus",
        langs: [
          ...preload || [],
          "diff",
          "json",
          "js",
          "ts",
          "css",
          "shell",
          "html",
          "md",
          "yaml",
          "vue",
          {
            id: "md",
            scopeName: "text.markdown.mdc",
            path: "mdc.tmLanguage.json",
            aliases: ["markdown", "md", "mdc"],
            grammar: mdcTMLanguage
          }
        ]
      }).then((highlighter) => {
        const themes = Object.values(typeof theme === "string" ? { default: theme } : theme || {});
        if (themes.length) {
          return Promise.all(themes.map((theme2) => highlighter.loadTheme(theme2))).then(() => highlighter);
        }
        return highlighter;
      });
    }
    return promise;
  };
  const getHighlightedTokens = async (code, lang, theme2) => {
    const highlighter = await getShikiHighlighter();
    code = code.replace(/\n+$/, "");
    lang = resolveLang(lang || "")?.id || lang;
    theme2 = resolveTheme(theme2 || "") || { default: highlighter.getTheme() };
    if (!lang) {
      return [[{ content: code }]];
    }
    if (!highlighter.getLoadedLanguages().includes(lang)) {
      const languageRegistration = resolveLang(lang);
      if (languageRegistration) {
        await highlighter.loadLanguage(languageRegistration);
      } else {
        logger.warn(`Language '${lang}' is not supported by shiki. Skipping highlight.`);
        return [[{ content: code }]];
      }
    }
    const newThemes = Object.values(theme2).filter((t) => !highlighter.getLoadedThemes().includes(t));
    if (newThemes.length) {
      await Promise.all(newThemes.map(highlighter.loadTheme));
    }
    const coloredTokens = Object.entries(theme2).map(([key, theme3]) => {
      const tokens = highlighter.codeToThemedTokens(code, lang, theme3, { includeExplanation: false });
      return {
        key,
        theme: theme3,
        tokens
      };
    });
    const highlightedCode = [];
    for (const line in coloredTokens[0].tokens) {
      highlightedCode[line] = coloredTokens.reduce((acc, color) => {
        return mergeLines({
          key: coloredTokens[0].key,
          tokens: acc
        }, {
          key: color.key,
          tokens: color.tokens[line]
        });
      }, coloredTokens[0].tokens[line]);
    }
    return highlightedCode;
  };
  const getHighlightedAST = async (code, lang, theme2, opts2) => {
    const lines = await getHighlightedTokens(code, lang, theme2);
    const { highlights = [], colorMap = {} } = opts2 || {};
    return lines.map((line, lineIndex) => ({
      type: "element",
      tag: "span",
      props: { class: ["line", highlights.includes(lineIndex + 1) ? "highlight" : ""].join(" ").trim() },
      children: line.map(tokenSpan)
    }));
    function getColorProps(token) {
      if (!token.color) {
        return {};
      }
      if (typeof token.color === "string") {
        return { style: { color: token.color } };
      }
      const key = Object.values(token.color).join("");
      if (!colorMap[key]) {
        colorMap[key] = {
          colors: token.color,
          className: "ct-" + Math.random().toString(16).substring(2, 8)
          // hash(key)
        };
      }
      return { class: colorMap[key].className };
    }
    function tokenSpan(token) {
      return {
        type: "element",
        tag: "span",
        props: getColorProps(token),
        children: [{ type: "text", value: token.content }]
      };
    }
  };
  const getHighlightedCode = async (code, lang, theme2, opts2) => {
    const colorMap = opts2?.colorMap || {};
    const highlights = opts2?.highlights || [];
    const ast = await getHighlightedAST(code, lang, theme2, { colorMap, highlights });
    function renderNode(node) {
      if (node.type === "text") {
        return node.value.replace(/</g, "&lt;").replace(/>/g, "&gt;");
      }
      const children = node.children.map(renderNode).join("");
      return `<${node.tag} class="${node.props.class}">${children}</${node.tag}>`;
    }
    return {
      code: ast.map(renderNode).join(""),
      styles: generateStyles(colorMap)
    };
  };
  const generateStyles = (colorMap) => {
    const colors = [];
    for (const colorClass of Object.values(colorMap)) {
      Object.entries(colorClass.colors).forEach(([variant, color]) => {
        if (variant === "default") {
          colors.unshift(`.${colorClass.className}{color:${color}}`);
        } else {
          colors.push(`.${variant} .${colorClass.className}{color:${color}}`);
        }
      });
    }
    return colors.join("\n");
  };
  return {
    getHighlightedTokens,
    getHighlightedAST,
    getHighlightedCode,
    generateStyles
  };
});
function mergeLines(line1, line2) {
  const mergedTokens = [];
  const getColors = (h, i) => typeof h.tokens[i].color === "string" ? { [h.key]: h.tokens[i].color } : h.tokens[i].color;
  const right = {
    key: line1.key,
    tokens: line1.tokens.slice()
  };
  const left = {
    key: line2.key,
    tokens: line2.tokens.slice()
  };
  let index = 0;
  while (index < right.tokens.length) {
    const rightToken = right.tokens[index];
    const leftToken = left.tokens[index];
    if (rightToken.content === leftToken.content) {
      mergedTokens.push({
        content: rightToken.content,
        color: {
          ...getColors(right, index),
          ...getColors(left, index)
        }
      });
      index += 1;
      continue;
    }
    if (rightToken.content.startsWith(leftToken.content)) {
      const nextRightToken = {
        ...rightToken,
        content: rightToken.content.slice(leftToken.content.length)
      };
      rightToken.content = leftToken.content;
      right.tokens.splice(index + 1, 0, nextRightToken);
      continue;
    }
    if (leftToken.content.startsWith(rightToken.content)) {
      const nextLeftToken = {
        ...leftToken,
        content: leftToken.content.slice(rightToken.content.length)
      };
      leftToken.content = rightToken.content;
      left.tokens.splice(index + 1, 0, nextLeftToken);
      continue;
    }
    throw new Error("Unexpected token");
  }
  return mergedTokens;
}

const shiki = defineTransformer({
  name: "highlight",
  extensions: [".md"],
  transform: async (content, options = {}) => {
    const shikiHighlighter = useShikiHighlighter(options);
    await Promise.all([
      highlight(content.body),
      highlight(content.excerpt)
    ]);
    return content;
    async function highlight(document) {
      if (!document) {
        return;
      }
      const colorMap = {};
      const codeBlocks = [];
      const inlineCodes = [];
      visit(
        document,
        (node) => node?.tag === "code" && node?.props.code || node?.tag === "code-inline" && (node.props?.lang || node.props?.language),
        (node) => {
          if (node?.tag === "code") {
            codeBlocks.push(node);
          } else if (node?.tag === "code-inline") {
            inlineCodes.push(node);
          }
        }
      );
      await Promise.all(codeBlocks.map((node) => highlightBlock(node, colorMap)));
      await Promise.all(inlineCodes.map((node) => highlightInline(node, colorMap)));
      if (Object.values(colorMap).length) {
        document?.children.push({
          type: "element",
          tag: "style",
          children: [{ type: "text", value: shikiHighlighter.generateStyles(colorMap) }]
        });
      }
    }
    async function highlightInline(node, colorMap) {
      const code = node.children[0].value;
      const lines = await shikiHighlighter.getHighlightedAST(code, node.props.lang || node.props.language, options.theme, { colorMap });
      node.children = lines[0].children;
      node.props = Object.assign(node.props || {}, { class: "colored" });
      return node;
    }
    async function highlightBlock(node, colorMap) {
      const { code, language: lang, highlights = [] } = node.props;
      const innerCodeNode = node.children[0].children[0];
      innerCodeNode.children = await shikiHighlighter.getHighlightedAST(code, lang, options.theme, { colorMap, highlights });
      return node;
    }
  }
});

const json = defineTransformer({
  name: "Json",
  extensions: [".json", ".json5"],
  parse: async (_id, content) => {
    let parsed;
    if (typeof content === "string") {
      if (_id.endsWith("json5")) {
        parsed = (await import('json5').then((m) => m.default || m)).parse(content);
      } else if (_id.endsWith("json")) {
        parsed = destr(content);
      }
    } else {
      parsed = content;
    }
    if (Array.isArray(parsed)) {
      console.warn(`JSON array is not supported in ${_id}, moving the array into the \`body\` key`);
      parsed = {
        body: parsed
      };
    }
    return {
      ...parsed,
      _id,
      _type: "json"
    };
  }
});

const TRANSFORMERS = [
  csv,
  markdown,
  json,
  yaml,
  shiki,
  pathMeta
];
function getParser(ext, additionalTransformers = []) {
  let parser = additionalTransformers.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  if (!parser) {
    parser = TRANSFORMERS.find((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.parse);
  }
  return parser;
}
function getTransformers(ext, additionalTransformers = []) {
  return [
    ...additionalTransformers.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform),
    ...TRANSFORMERS.filter((p) => ext.match(new RegExp(p.extensions.join("|"), "i")) && p.transform)
  ];
}
async function transformContent(id, content, options = {}) {
  const { transformers = [] } = options;
  const file = { _id: id, body: content };
  const ext = extname(id);
  const parser = getParser(ext, transformers);
  if (!parser) {
    console.warn(`${ext} files are not supported, "${id}" falling back to raw content`);
    return file;
  }
  const parserOptions = options[camelCase(parser.name)] || {};
  const parsed = await parser.parse(file._id, file.body, parserOptions);
  const matchedTransformers = getTransformers(ext, transformers);
  const result = await matchedTransformers.reduce(async (prev, cur) => {
    const next = await prev || parsed;
    const transformOptions = options[camelCase(cur.name)];
    if (transformOptions === false) {
      return next;
    }
    return cur.transform(next, transformOptions || {});
  }, Promise.resolve(parsed));
  return result;
}

const isPreview = (event) => {
  const previewToken = getQuery(event).previewToken || getCookie(event, "previewToken");
  return !!previewToken;
};
const getPreview = (event) => {
  const key = getQuery(event).previewToken || getCookie(event, "previewToken");
  return { key };
};

async function getContentIndex(event) {
  const defaultLocale = useRuntimeConfig().content.defaultLocale;
  let contentIndex = await cacheStorage.getItem("content-index.json");
  if (!contentIndex) {
    const data = await getContentsList(event);
    contentIndex = data.reduce((acc, item) => {
      acc[item._path] = acc[item._path] || [];
      if (item._locale === defaultLocale) {
        acc[item._path].unshift(item._id);
      } else {
        acc[item._path].push(item._id);
      }
      return acc;
    }, {});
    await cacheStorage.setItem("content-index.json", contentIndex);
  }
  return contentIndex;
}
async function getIndexedContentsList(event, query) {
  const params = query.params();
  const path = params?.where?.find((wh) => wh._path)?._path;
  if (!isPreview(event) && (typeof path === "string" || path instanceof RegExp)) {
    const index = await getContentIndex(event);
    const keys = Object.keys(index).filter((key) => path.test ? path.test(key) : key === String(path)).flatMap((key) => index[key]);
    const contents = await Promise.all(keys.map((key) => getContent(event, key)));
    return contents;
  }
  return getContentsList(event);
}

const transformers = [];

const sourceStorage = prefixStorage(useStorage(), "content:source");
const cacheStorage = prefixStorage(useStorage(), "cache:content");
const cacheParsedStorage = prefixStorage(useStorage(), "cache:content:parsed");
const contentConfig = useRuntimeConfig().content;
const contentIgnores = contentConfig.ignores.map(
  (p) => typeof p === "string" ? new RegExp(`^${p}|:${p}`) : p
);
const invalidKeyCharacters = `'"?#/`.split("");
const contentIgnorePredicate = (key) => {
  if (key.startsWith("preview:") || contentIgnores.some((prefix) => prefix.test(key))) {
    return false;
  }
  if (invalidKeyCharacters.some((ik) => key.includes(ik))) {
    console.warn(`Ignoring [${key}]. File name should not contain any of the following characters: ${invalidKeyCharacters.join(", ")}`);
    return false;
  }
  return true;
};
const getContentsIds = async (event, prefix) => {
  let keys = [];
  {
    keys = await cacheParsedStorage.getKeys(prefix);
  }
  if (keys.length === 0) {
    keys = await sourceStorage.getKeys(prefix);
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewPrefix = `preview:${key}:${prefix || ""}`;
    const previewKeys = await sourceStorage.getKeys(previewPrefix);
    if (previewKeys.length) {
      const keysSet = new Set(keys);
      await Promise.all(
        previewKeys.map(async (key2) => {
          const meta = await sourceStorage.getMeta(key2);
          if (meta?.__deleted) {
            keysSet.delete(key2.substring(previewPrefix.length));
          } else {
            keysSet.add(key2.substring(previewPrefix.length));
          }
        })
      );
      keys = Array.from(keysSet);
    }
  }
  return keys.filter(contentIgnorePredicate);
};
const getContentsList = async (event, prefix) => {
  const keys = await getContentsIds(event, prefix);
  const contents = await Promise.all(keys.map((key) => getContent(event, key)));
  return contents;
};
const getContent = async (event, id) => {
  const contentId = id;
  if (!contentIgnorePredicate(id)) {
    return { _id: contentId, body: null };
  }
  if (isPreview(event)) {
    const { key } = getPreview(event);
    const previewId = `preview:${key}:${id}`;
    const draft = await sourceStorage.getItem(previewId);
    if (draft) {
      id = previewId;
    }
  }
  const cached = await cacheParsedStorage.getItem(id);
  if (cached) {
    return cached.parsed;
  }
  const meta = await sourceStorage.getMeta(id);
  const hash$1 = hash({
    meta,
    // Add Content version to the hash, to revalidate the cache on content update
    version: contentConfig.cacheVersion,
    integrity: contentConfig.cacheIntegrity
  });
  if (cached?.hash === hash$1) {
    return cached.parsed;
  }
  const body = await sourceStorage.getItem(id);
  if (body === null) {
    return { _id: contentId, body: null };
  }
  const parsed = await parseContent(contentId, body);
  await cacheParsedStorage.setItem(id, { parsed, hash: hash$1 }).catch(() => {
  });
  return parsed;
};
async function parseContent(id, content, opts = {}) {
  const nitroApp = useNitroApp();
  const options = defu(
    opts,
    {
      markdown: contentConfig.markdown,
      csv: contentConfig.csv,
      yaml: contentConfig.yaml,
      highlight: contentConfig.highlight,
      transformers: transformers,
      pathMeta: {
        defaultLocale: contentConfig.defaultLocale,
        locales: contentConfig.locales
      }
    }
  );
  const file = { _id: id, body: content };
  await nitroApp.hooks.callHook("content:file:beforeParse", file);
  const result = await transformContent(id, file.body, options);
  await nitroApp.hooks.callHook("content:file:afterParse", result);
  return result;
}
const createServerQueryFetch = (event) => (query) => {
  return createPipelineFetcher(() => getIndexedContentsList(event, query))(query);
};
function serverQueryContent(event, query, ...pathParts) {
  const queryBuilder = createQuery(createServerQueryFetch(event), typeof query !== "string" ? query || {} : {});
  let path;
  if (typeof query === "string") {
    path = withLeadingSlash(joinURL(query, ...pathParts));
  }
  const originalParamsFn = queryBuilder.params;
  queryBuilder.params = () => {
    const params = originalParamsFn();
    if (path) {
      params.where = params.where || [];
      if (params.first && (params.where || []).length === 0) {
        params.where.push({ _path: withoutTrailingSlash(path) });
      } else {
        params.where.push({ _path: new RegExp(`^${path.replace(/[-[\]{}()*+.,^$\s/]/g, "\\$&")}`) });
      }
    }
    if (!params.sort?.length) {
      params.sort = [{ _file: 1, $numeric: true }];
    }
    if (contentConfig.locales.length) {
      const queryLocale = params.where?.find((w) => w._locale)?._locale;
      if (!queryLocale) {
        params.where = params.where || [];
        params.where.push({ _locale: contentConfig.defaultLocale });
      }
    }
    return params;
  };
  return queryBuilder;
}

function jsonParse(value) {
  return JSON.parse(value, regExpReviver);
}
function regExpReviver(_key, value) {
  const withOperator = typeof value === "string" && value.match(/^--([A-Z]+) (.+)$/) || [];
  if (withOperator[1] === "REGEX") {
    const regex = withOperator[2].match(/\/(.*)\/([dgimsuy]*)$/);
    return regex ? new RegExp(regex[1], regex[2] || "") : value;
  }
  return value;
}

const parseJSONQueryParams = (body) => {
  try {
    return jsonParse(body);
  } catch (e) {
    throw createError({ statusCode: 400, message: "Invalid _params query" });
  }
};
const decodeQueryParams = (encoded) => {
  encoded = encoded.replace(/\//g, "");
  encoded = encoded.replace(/-/g, "+").replace(/_/g, "/");
  encoded = encoded.padEnd(encoded.length + (4 - encoded.length % 4) % 4, "=");
  return parseJSONQueryParams(typeof Buffer !== "undefined" ? Buffer.from(encoded, "base64").toString() : atob(encoded));
};
const memory = {};
const getContentQuery = (event) => {
  const { params } = event.context.params || {};
  if (params) {
    return decodeQueryParams(params.replace(/.json$/, ""));
  }
  const qid = event.context.params.qid?.replace(/.json$/, "");
  const query = getQuery(event) || {};
  if (qid && query._params) {
    memory[qid] = parseJSONQueryParams(decodeURIComponent(query._params));
    if (memory[qid].where && !Array.isArray(memory[qid].where)) {
      memory[qid].where = [memory[qid].where];
    }
    return memory[qid];
  }
  if (memory[qid]) {
    return memory[qid];
  }
  if (query._params) {
    return parseJSONQueryParams(decodeURIComponent(query._params));
  }
  if (typeof query.only === "string" && query.only.includes(",")) {
    query.only = query.only.split(",").map((s) => s.trim());
  }
  if (typeof query.without === "string" && query.without.includes(",")) {
    query.without = query.without.split(",").map((s) => s.trim());
  }
  const where = query.where || {};
  for (const key of ["draft", "partial", "empty"]) {
    if (query[key] && ["true", "false"].includes(query[key])) {
      where[key] = query[key] === "true";
      delete query[key];
    }
  }
  if (query.sort) {
    query.sort = String(query.sort).split(",").map((s) => {
      const [key, order] = s.split(":");
      return [key, +order];
    });
  }
  const reservedKeys = ["partial", "draft", "only", "without", "where", "sort", "limit", "skip"];
  for (const key of Object.keys(query)) {
    if (reservedKeys.includes(key)) {
      continue;
    }
    query.where = query.where || {};
    query.where[key] = query[key];
  }
  if (Object.keys(where).length > 0) {
    query.where = [where];
  } else {
    delete query.where;
  }
  return query;
};

const _9g8Tkl = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (query.first) {
    const content = await serverQueryContent(event, query).findOne();
    const path = content?._path || query.where?.find((w) => w._path)?._path;
    if (path) {
      const _dir = await serverQueryContent(event).where({ _path: join(path, "_dir") }).without("_").findOne();
      if (_dir && !Array.isArray(_dir)) {
        return {
          _path: path,
          ...content || {},
          _dir
        };
      }
    }
    if (!content) {
      throw createError({
        statusMessage: "Document not found!",
        statusCode: 404,
        data: {
          description: "Could not find document for the given query.",
          query
        }
      });
    }
    return content;
  }
  const contents = await serverQueryContent(event, query).find();
  return contents;
});

const _WdqZyi = defineEventHandler(async (event) => {
  const { content } = useRuntimeConfig();
  const now = Date.now();
  const contents = await serverQueryContent(event).find();
  await getContentIndex(event);
  const navigation = await $fetch(`${content.api.baseURL}/navigation`);
  await cacheStorage.setItem("content-navigation.json", navigation);
  return {
    generatedAt: now,
    generateTime: Date.now() - now,
    contents,
    navigation
  };
});

function createNav(contents, configs) {
  const { navigation } = useRuntimeConfig().content;
  const pickNavigationFields = (content) => ({
    ...pick(["title", ...navigation.fields])(content),
    ...isObject(content?.navigation) ? content.navigation : {}
  });
  const nav = contents.sort((a, b) => a._path.localeCompare(b._path)).reduce((nav2, content) => {
    const parts = content._path.substring(1).split("/");
    const idParts = content._id.split(":").slice(1);
    const isIndex = !!idParts[idParts.length - 1].match(/([1-9][0-9]*\.)?index.md/g);
    const getNavItem = (content2) => ({
      title: content2.title,
      _path: content2._path,
      _file: content2._file,
      children: [],
      ...pickNavigationFields(content2),
      ...content2._draft ? { _draft: true } : {}
    });
    const navItem = getNavItem(content);
    if (isIndex) {
      const dirConfig = configs[navItem._path];
      if (typeof dirConfig?.navigation !== "undefined" && !dirConfig?.navigation) {
        return nav2;
      }
      if (content._path !== "/") {
        const indexItem = getNavItem(content);
        navItem.children.push(indexItem);
      }
      Object.assign(
        navItem,
        pickNavigationFields(dirConfig)
      );
    }
    if (parts.length === 1) {
      nav2.push(navItem);
      return nav2;
    }
    const siblings = parts.slice(0, -1).reduce((nodes, part, i) => {
      const currentPathPart = "/" + parts.slice(0, i + 1).join("/");
      const conf = configs[currentPathPart];
      if (typeof conf?.navigation !== "undefined" && !conf.navigation) {
        return [];
      }
      let parent = nodes.find((n) => n._path === currentPathPart);
      if (!parent) {
        parent = {
          title: generateTitle(part),
          _path: currentPathPart,
          _file: content._file,
          children: [],
          ...pickNavigationFields(conf)
        };
        nodes.push(parent);
      }
      return parent.children;
    }, nav2);
    siblings.push(navItem);
    return nav2;
  }, []);
  return sortAndClear(nav);
}
const collator = new Intl.Collator(void 0, { numeric: true, sensitivity: "base" });
function sortAndClear(nav) {
  const sorted = nav.sort((a, b) => collator.compare(a._file, b._file));
  for (const item of sorted) {
    if (item.children.length) {
      sortAndClear(item.children);
    } else {
      delete item.children;
    }
    delete item._file;
  }
  return nav;
}
function pick(keys) {
  return (obj) => {
    obj = obj || {};
    if (keys && keys.length) {
      return keys.filter((key) => typeof obj[key] !== "undefined").reduce((newObj, key) => Object.assign(newObj, { [key]: obj[key] }), {});
    }
    return obj;
  };
}
function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

const _XTC2bo = defineEventHandler(async (event) => {
  const query = getContentQuery(event);
  if (!isPreview(event) && Object.keys(query).length === 0) {
    const cache = await cacheStorage.getItem("content-navigation.json");
    if (cache) {
      return cache;
    }
  }
  const contents = await serverQueryContent(event, query).where({
    /**
     * Partial contents are not included in the navigation
     * A partial content is a content that has `_` prefix in its path
     */
    _partial: false,
    /**
     * Exclude any pages which have opted out of navigation via frontmatter.
     */
    navigation: {
      $ne: false
    }
  }).find();
  const dirConfigs = await serverQueryContent(event).where({ _path: /\/_dir$/i, _partial: true }).find();
  const configs = dirConfigs.reduce((configs2, conf) => {
    if (conf.title?.toLowerCase() === "dir") {
      conf.title = void 0;
    }
    const key = conf._path.split("/").slice(0, -1).join("/") || "/";
    configs2[key] = {
      ...conf,
      // Extract meta from body. (non MD files)
      ...conf.body
    };
    return configs2;
  }, {});
  return createNav(contents, configs);
});

const _lazy_0bm7Da = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_0bm7Da, lazy: true, middleware: false, method: undefined },
  { route: '', handler: _d1eaGg, lazy: false, middleware: false, method: undefined },
  { route: '/api/_content/query/:qid/**:params', handler: _9g8Tkl, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query/:qid', handler: _9g8Tkl, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/query', handler: _9g8Tkl, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/cache.1678943073320.json', handler: _WdqZyi, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid/**:params', handler: _XTC2bo, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation/:qid', handler: _XTC2bo, lazy: false, middleware: false, method: "get" },
  { route: '/api/_content/navigation', handler: _XTC2bo, lazy: false, middleware: false, method: "get" },
  { route: '/**', handler: _lazy_0bm7Da, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
