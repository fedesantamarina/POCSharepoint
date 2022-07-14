function gadorch(t, e, n) {
  "use strict";
  (function (e) {
    var r =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
          }
          return t;
        },
      i = n(/*! d3 */ 0),
      o = n(/*! ../utils */ 1),
      a = o.collapse,
      s = (o.wrapText, o.helpers, n(/*! ../defs/defineBoxShadow */ 11)),
      l = n(/*! ../defs/defineAvatarClip */ 12),
      c = n(/*! ./render */ 13),
      u = n(/*! ./config */ 22);
    t.exports = {
      init: function (t) {
        var n = r({}, u, t, { treeData: t.data });
        if (!n.id)
          return void console.error("react-org-chart: missing id for svg root");
        var o = n.id,
          h = n.treeData,
          f = n.lineType,
          d = n.margin,
          p = n.nodeWidth,
          g = n.nodeHeight,
          m = n.nodeSpacing,
          y = n.shouldResize,
          v = n.zoomInId,
          w = n.zoomOutId,
          b = n.zoomExtentId,
          x = n.loadConfig;
        n.lineDepthY = "angle" == f ? g + 40 : g + 60;
        var L = document.querySelector(o);
        if (!L)
          return void console.error(
            "react-org-chart: svg root DOM node not found (id: " + o + ")"
          );
        L.innerHTML = "";
        var A = L.offsetWidth,
          N = L.offsetHeight;
        n.tree = i.layout.tree().nodeSize([p + m, g + m]);
        var S = parseInt((h.children.length * p) / 2),
          _ = i
            .select(o)
            .append("svg")
            .attr("id", "svg")
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .attr("xmlns:xlink", "http://www.w3.org/1999/xlink")
            .attr("x", "0px")
            .attr("y", "0px")
            .attr("xml:space", "preserve")
            .attr("viewBox", "0 0 " + A + " " + N)
            .attr("enable-background", " new 0 0 " + A + " " + N)
            .attr("width", A)
            .attr("height", N),
          k = _.append("g").attr(
            "transform",
            "translate(" + parseInt(S + (A - 2 * S) / 2 - d.left / 2) + ",48)"
          );
        s(_, "boxShadow"),
          l(_, "avatarClip", { borderRadius: 40 }),
          (h.x0 = 0),
          (h.y0 = N / 2),
          h.children.forEach(a),
          (n.svg = k),
          (n.svgroot = _),
          (n.elemWidth = A),
          (n.elemHeight = N),
          (n.render = c);
        var P = i.behavior
          .zoom()
          .scaleExtent([0.1, 2])
          .duration(50)
          .on("zoom", C);
        function C() {
          k.attr(
            "transform",
            "translate(" + P.translate() + ")scale(" + P.scale() + ")"
          );
        }
        function I(t, e) {
          return (
            i.event.preventDefault(),
            i
              .transition()
              .duration(350)
              .tween("zoom", function () {
                var n = i.interpolate(P.translate(), t),
                  r = i.interpolate(P.scale(), e);
                return function (t) {
                  P.scale(r(t)).translate(n(t)), C();
                };
              })
          );
        }
        function F() {
          if (this.id !== b) {
            i.event.target;
            var t,
              e,
              n,
              r,
              o = [A / 2, N / 2],
              a = P.scaleExtent(),
              s = P.translate(),
              l = { x: s[0], y: s[1], k: P.scale() };
            if (
              (i.event.preventDefault(),
              (t = this.id === v ? 1 : -1),
              (e = P.scale() * (1 + 0.2 * t)) < a[0] || e > a[1])
            )
              return !1;
            (n = [(o[0] - l.x) / l.k, (o[1] - l.y) / l.k]),
              (l.k = e),
              (r = [n[0] * l.k + l.x, n[1] * l.k + l.y]),
              (l.x += o[0] - r[0]),
              (l.y += o[1] - r[1]),
              I([l.x, l.y], l.k);
          } else {
            var c = x(),
              u = c.nodeLeftX,
              h = c.nodeRightX,
              f = c.nodeY,
              p = c.elemHeight,
              m = c.elemWidth,
              y = u + h,
              w = f + 2 * g + 48,
              L = m / y - 0.03,
              S = p / w - 0.06,
              _ = y > m || w > p ? (L < S ? L : S) : 1,
              k = u * _ + d.left / 2;
            y > m || w > p
              ? L < S
                ? I([k, 48], _)
                : L > S && I([(k = m / 2 - d.left / 2), 48], _)
              : I([(k = m / 2 - d.left / 2), 48], _);
          }
        }
        _.call(P),
          P.translate([parseInt(S + (A - 2 * S) / 2 - d.left / 2), 20]),
          i.select("#" + v).on("click", F),
          i.select("#" + w).on("click", F),
          i.select("#" + b).on("click", F);
        y &&
          e.addEventListener("resize", function t() {
            L
              ? _.attr("width", L.offsetWidth).attr("height", L.offsetHeight)
              : e.removeEventListener("resize", t);
          });
        c(n), i.select(o).style("height", N + d.top + d.bottom);
        var B = document.createElement("div");
        B.setAttribute("id", o + "-canvas-container"),
          B.setAttribute("style", "display:none;");
        var E = document.createElement("div");
        E.setAttribute("id", o + "-svg-container"),
          E.setAttribute("style", "display:none;");
        var j = document.getElementById("root");
        j.append(B), j.append(E);
      },
    };
  }.call(this, n(/*! ./../../node_modules/webpack/buildin/global.js */ 3)));
}
