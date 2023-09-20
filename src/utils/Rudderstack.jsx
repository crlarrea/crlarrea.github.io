export const Rudderstack = 
  !(function () {
    "use strict";
    var sdkBaseUrl = "https://cdn.rudderlabs.com/beta/3.0.0-beta";
    var sdkName = "rsa.min.js";
    var asyncScript = true;
    (window.rudderAnalyticsBuildType = "legacy"), (window.rudderanalytics = []);
    var e = [
      "setDefaultInstanceKey",
      "load",
      "ready",
      "page",
      "track",
      "identify",
      "alias",
      "group",
      "reset",
      "setAnonymousId",
      "startSession",
      "endSession",
    ];
    for (var n = 0; n < e.length; n++) {
      var d = e[n];
      window.rudderanalytics[d] = (function (e) {
        return function () {
          window.rudderanalytics.push(
            [e].concat(Array.prototype.slice.call(arguments))
          );
        };
      })(d);
    }
    try {
      new Function('return import("")'),
        (window.rudderAnalyticsBuildType = "modern");
    } catch (a) {}
    if (
      ((window.rudderAnalyticsMount = function () {
        var e = document.createElement("script");
        (e.src = ""
          .concat(sdkBaseUrl, "/")
          .concat(window.rudderAnalyticsBuildType, "/")
          .concat(sdkName)),
          (e.async = asyncScript),
          document.head
            ? document.head.appendChild(e)
            : document.body.appendChild(e);
      }),
      "undefined" == typeof Promise)
    ) {
      var t = document.createElement("script");
      (t.src =
        "https://polyfill.io/v3/polyfill.min.js?features=globalThis%2CPromise&callback=rudderAnalyticsMount"),
        (t.async = asyncScript),
        document.head
          ? document.head.appendChild(t)
          : document.body.appendChild(t);
    } else {
      window.rudderAnalyticsMount();
    }
    window.rudderanalytics.load(
      "2VcjfZhDBDBT2xyipEaM1die1F1",
      "https://protonmailxdnl.dataplane.rudderstack.com",
      {}
    );
  })();
;
