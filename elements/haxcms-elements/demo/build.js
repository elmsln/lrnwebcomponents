window.process = { env: { NODE_ENV: "production" } };
var cdn = "./";
window.WCGlobalCDNPath && (cdn = window.WCGlobalCDNPath),
  window.__appCDN && (cdn = window.__appCDN);
var fname = "wc-registry.json";
window.WCGlobalRegistryFileName && (fname = window.WCGlobalRegistryFileName),
  (window.WCAutoloadRegistryFile = cdn + fname);
try {
  var def = document.getElementsByTagName("script")[0];
  if ((new Function("import('');"), !Element.prototype.animate)) {
    var ani = document.createElement("script");
    (ani.src =
      cdn +
      "build/es6/node_modules/web-animations-js/web-animations-next-lite.min.js"),
      def.parentNode.insertBefore(ani, def);
  }
  var build = document.createElement("script");
  (build.src =
    cdn + "build/es6/node_modules/@haxtheweb/wc-autoload/wc-autoload.js"),
    (build.type = "module"),
    def.parentNode.insertBefore(build, def);
} catch (err) {
  var buildLegacy = document.createElement("script");
  (buildLegacy.src = cdn + "assets/build-legacy.js"),
    def.parentNode.insertBefore(buildLegacy, def);
}
