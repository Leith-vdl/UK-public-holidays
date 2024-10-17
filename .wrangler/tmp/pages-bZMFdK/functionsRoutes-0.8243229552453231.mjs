import { onRequest as __dynamic_display_js_onRequest } from "C:\\Users\\Leith.Green\\uk-public-holidays\\functions\\dynamic-display.js"
import { onRequest as __hello_liquid_js_onRequest } from "C:\\Users\\Leith.Green\\uk-public-holidays\\functions\\hello-liquid.js"

export const routes = [
    {
      routePath: "/dynamic-display",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__dynamic_display_js_onRequest],
    },
  {
      routePath: "/hello-liquid",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__hello_liquid_js_onRequest],
    },
  ]