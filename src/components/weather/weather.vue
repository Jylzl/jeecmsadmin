<template>
  <div id="tp-weather-widget"></div>
</template>
<script>
export default {
  created: function () {
    this.aa();
  },
  mounted: function () {
    this.bb();
  },
  methods: {
    aa() {
      (function (T, h, i, n, k, P, a, g, e) {
        g = function () {
          P = h.createElement(i);
          a = h.getElementsByTagName(i)[0];
          P.src = k;
          P.charset = "utf-8";
          P.async = 1;
          a.parentNode.insertBefore(P, a);
        };
        T["ThinkPageWeatherWidgetObject"] = n;
        T[n] ||
          (T[n] = function () {
            (T[n].q = T[n].q || []).push(arguments);
          });
        T[n].l = +new Date();
        if (T.attachEvent) {
          T.attachEvent("onload", g);
        } else {
          T.addEventListener("load", g, false);
        }
      })(
        window,
        document,
        "script",
        "tpwidget",
        "//widget.seniverse.com/widget/chameleon.js"
      );
    },
    bb() {
      tpwidget("init", {
        flavor: "slim",
        location: "WT3Q0FW9ZJ3Q",
        geolocation: "disabled",
        language: "zh-chs",
        unit: "c",
        theme: "chameleon",
        container: "tp-weather-widget",
        bubble: "enabled",
        alarmType: "badge",
        uid: "UB387326D9",
        hash: "537fbad70bfa71621808c172fee230a0"
      });
      tpwidget("show");
    }
  }
}
</script>

