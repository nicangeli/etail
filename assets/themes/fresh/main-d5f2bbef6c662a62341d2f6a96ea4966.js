/*
 * iosSlider - http://iosscripts.com/iosslider/
 *
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser
 * content slider into your web presence. Designed for use as a content slider, carousel,
 * scrolling website banner, or image gallery.
 *
 * Copyright (c) 2013 Marc Whitbread
 *
 * Version: v1.3.41 (04/16/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *    Attribution is not required but always appreciated. For commercial projects, you
 *    must purchase a license. You may download and play with the script before deciding to
 *    fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *    is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 */
!function(e) {
var t = 0, o = 0, n = 0, i = 10, r = 0, a = "ontouchstart" in window || navigator.msMaxTouchPoints > 0, s = "onorientationchange" in window, l = !1, c = !1, u = !1, d = !1, p = !1, g = !1, h = !1, m = "pointer", f = "pointer", w = new Array(), v = new Array(), y = new Array(), b = new Array(), _ = new Array(), k = new Array(), S = new Array(), x = new Array(), T = new Array(), M = new Array(), $ = new Array(), C = new Array(), L = new Array(), E = {
showScrollbar:function(t, o) {
t.scrollbarHide && e("." + o).css({
opacity:t.scrollbarOpacity,
filter:"alpha(opacity:" + 100 * t.scrollbarOpacity + ")"
});
},
hideScrollbar:function(e, t, o, n, r, a, s, l, c, u) {
if (e.scrollbar && e.scrollbarHide) for (var d = o; o + 25 > d; d++) t[t.length] = E.hideScrollbarIntervalTimer(i * d, n[o], (o + 24 - d) / 24, r, a, s, l, c, u, e);
},
hideScrollbarInterval:function(t, o, n, i, a, s, l, c, u) {
r = -1 * t / $[c] * (a - s - l - i), E.setSliderOffset("." + n, r), e("." + n).css({
opacity:u.scrollbarOpacity * o,
filter:"alpha(opacity:" + u.scrollbarOpacity * o * 100 + ")"
});
},
slowScrollHorizontalInterval:function(t, o, n, i, a, s, l, c, u, d, p, g, h, m, f, w, v, y, b) {
if (b.infiniteSlider) {
if (n <= -1 * $[w] || n <= -1 * C[w]) {
var _ = e(t).width();
if (n <= -1 * C[w]) {
var k = -1 * p[0];
e(o).each(function(t) {
E.setSliderOffset(e(o)[t], k + v), t < g.length && (g[t] = -1 * k), k += f[t];
}), n += -1 * g[0], M[w] = -1 * g[0] + v, $[w] = M[w] + _ - s, T[w] = 0;
}
for (;n <= -1 * $[w]; ) {
var L = 0, D = E.getSliderOffset(e(o[0]), "x");
e(o).each(function(e) {
E.getSliderOffset(this, "x") < D && (D = E.getSliderOffset(this, "x"), L = e);
});
var I = M[w] + _;
E.setSliderOffset(e(o)[L], I), M[w] = -1 * g[1] + v, $[w] = M[w] + _ - s, g.splice(0, 1), 
g.splice(g.length, 0, -1 * I + v), T[w]++;
}
}
if (n >= -1 * M[w] || n >= 0) {
var _ = e(t).width();
if (n > 0) {
var k = -1 * p[0];
for (e(o).each(function(t) {
E.setSliderOffset(e(o)[t], k + v), t < g.length && (g[t] = -1 * k), k += f[t];
}), n -= -1 * g[0], M[w] = -1 * g[0] + v, $[w] = M[w] + _ - s, T[w] = m; -1 * g[0] - _ + v > 0; ) {
var B = 0, O = E.getSliderOffset(e(o[0]), "x");
e(o).each(function(e) {
E.getSliderOffset(this, "x") > O && (O = E.getSliderOffset(this, "x"), B = e);
});
var I = M[w] - f[B];
E.setSliderOffset(e(o)[B], I), g.splice(0, 0, -1 * I + v), g.splice(g.length - 1, 1), 
M[w] = -1 * g[0] + v, $[w] = M[w] + _ - s, T[w]--, S[w]++;
}
}
for (;n > -1 * M[w]; ) {
var B = 0, O = E.getSliderOffset(e(o[0]), "x");
e(o).each(function(e) {
E.getSliderOffset(this, "x") > O && (O = E.getSliderOffset(this, "x"), B = e);
});
var I = M[w] - f[B];
E.setSliderOffset(e(o)[B], I), g.splice(0, 0, -1 * I + v), g.splice(g.length - 1, 1), 
M[w] = -1 * g[0] + v, $[w] = M[w] + _ - s, T[w]--;
}
}
}
var A = !1, Y = E.calcActiveOffset(b, n, g, s, T[w], m, d, w), I = (Y + T[w] + m) % m;
if (b.infiniteSlider ? I != x[w] && (A = !0) :Y != S[w] && (A = !0), A) {
var j = new E.args("change", b, t, e(t).children(":eq(" + I + ")"), I, y);
e(t).parent().data("args", j), "" != b.onSlideChange && b.onSlideChange(j);
}
if (S[w] = Y, x[w] = I, n = Math.floor(n), E.setSliderOffset(t, n), b.scrollbar) {
r = Math.floor((-1 * n - M[w] + v) / ($[w] - M[w] + v) * (l - c - a));
var H = a - u;
n >= -1 * M[w] + v ? (H = a - u - -1 * r, E.setSliderOffset(e("." + i), 0), e("." + i).css({
width:H + "px"
})) :n <= -1 * $[w] + 1 ? (H = l - c - u - r, E.setSliderOffset(e("." + i), r), 
e("." + i).css({
width:H + "px"
})) :(E.setSliderOffset(e("." + i), r), e("." + i).css({
width:H + "px"
}));
}
},
slowScrollHorizontal:function(t, o, n, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y, b, _, C) {
var L = E.getSliderOffset(t, "x"), D = new Array(), I = new Array(), B = 0, O = 25 / 1024 * c;
frictionCoefficient = C.frictionCoefficient, elasticFrictionCoefficient = C.elasticFrictionCoefficient, 
snapFrictionCoefficient = C.snapFrictionCoefficient, a > C.snapVelocityThreshold && C.snapToChildren && !b ? B = 1 :a < -1 * C.snapVelocityThreshold && C.snapToChildren && !b && (B = -1), 
-1 * O > a ? a = -1 * O :a > O && (a = O), e(t)[0] !== e(y)[0] && (B = -1 * B, a = -2 * a);
var A = T[f];
if (C.infiniteSlider) var Y = M[f], j = $[f];
for (var H = new Array(), N = new Array(), P = 0; P < h.length; P++) H[P] = h[P], 
P < o.length && (N[P] = E.getSliderOffset(e(o[P]), "x"));
for (;a > 1 || -1 > a; ) {
if (a *= frictionCoefficient, L += a, (L > -1 * M[f] || L < -1 * $[f]) && !C.infiniteSlider && (a *= elasticFrictionCoefficient, 
L += a), C.infiniteSlider) {
if (-1 * j >= L) {
for (var z = e(t).width(), F = 0, R = N[0], P = 0; P < N.length; P++) N[P] < R && (R = N[P], 
F = P);
var q = Y + z;
N[F] = q, Y = -1 * H[1] + _, j = Y + z - c, H.splice(0, 1), H.splice(H.length, 0, -1 * q + _), 
A++;
}
if (L >= -1 * Y) {
for (var z = e(t).width(), W = 0, U = N[0], P = 0; P < N.length; P++) N[P] > U && (U = N[P], 
W = P);
var q = Y - m[W];
N[W] = q, H.splice(0, 0, -1 * q + _), H.splice(H.length - 1, 1), Y = -1 * H[0] + _, 
j = Y + z - c, A--;
}
}
D[D.length] = L, I[I.length] = a;
}
var V = !1, G = E.calcActiveOffset(C, L, H, c, A, v, S[f], f), J = (G + A + v) % v;
if (C.snapToChildren && (C.infiniteSlider ? J != x[f] && (V = !0) :G != S[f] && (V = !0), 
0 > B && !V ? (G++, G >= h.length && !C.infiniteSlider && (G = h.length - 1)) :B > 0 && !V && (G--, 
0 > G && !C.infiniteSlider && (G = 0))), C.snapToChildren || (L > -1 * M[f] || L < -1 * $[f]) && !C.infiniteSlider) {
for ((L > -1 * M[f] || L < -1 * $[f]) && !C.infiniteSlider ? D.splice(0, D.length) :(D.splice(.1 * D.length, D.length), 
L = D.length > 0 ? D[D.length - 1] :L); L < H[G] - .5 || L > H[G] + .5; ) L = (L - H[G]) * snapFrictionCoefficient + H[G], 
D[D.length] = L;
D[D.length] = H[G];
}
var Q = 1;
D.length % 2 != 0 && (Q = 0);
for (var K = 0; K < n.length; K++) clearTimeout(n[K]);
for (var X = (G + A + v) % v, Z = 0, K = Q; K < D.length; K += 2) (K == Q || Math.abs(D[K] - Z) > 1 || K >= D.length - 2) && (Z = D[K], 
n[n.length] = E.slowScrollHorizontalIntervalTimer(i * K, t, o, D[K], r, l, c, u, d, p, G, g, h, w, v, m, f, _, X, C));
var V = !1, J = (G + T[f] + v) % v;
C.infiniteSlider ? J != x[f] && (V = !0) :G != S[f] && (V = !0), "" != C.onSlideComplete && D.length > 1 && (n[n.length] = E.onSlideCompleteTimer(i * (K + 1), C, t, e(t).children(":eq(" + J + ")"), X, f)), 
n[n.length] = E.updateBackfaceVisibilityTimer(i * (K + 1), o, f, v, C), k[f] = n, 
E.hideScrollbar(C, n, K, D, r, l, c, d, p, f);
},
onSlideComplete:function(t, o, n, i, r) {
var a = (w[r] != i ? !0 :!1, new E.args("complete", t, e(o), n, i, i));
e(o).parent().data("args", a), "" != t.onSlideComplete && t.onSlideComplete(a), 
w[r] = i;
},
getSliderOffset:function(t, o) {
var n = 0;
if (o = "x" == o ? 4 :5, !c || u || d) n = parseInt(e(t).css("left"), 10); else {
for (var i, r = new Array("-webkit-transform", "-moz-transform", "transform"), a = 0; a < r.length; a++) if (void 0 != e(t).css(r[a]) && e(t).css(r[a]).length > 0) {
i = e(t).css(r[a]).split(",");
break;
}
n = void 0 == i[o] ? 0 :parseInt(i[o], 10);
}
return n;
},
setSliderOffset:function(t, o) {
o = parseInt(o, 10), !c || u || d ? e(t).css({
left:o + "px"
}) :e(t).css({
msTransform:"matrix(1,0,0,1," + o + ",0)",
webkitTransform:"matrix(1,0,0,1," + o + ",0)",
MozTransform:"matrix(1,0,0,1," + o + ",0)",
transform:"matrix(1,0,0,1," + o + ",0)"
});
},
setBrowserInfo:function() {
null != navigator.userAgent.match("WebKit") ? (l = !0, m = "-webkit-grab", f = "-webkit-grabbing") :null != navigator.userAgent.match("Gecko") ? (h = !0, 
m = "move", f = "-moz-grabbing") :null != navigator.userAgent.match("MSIE 7") ? (u = !0, 
g = !0) :null != navigator.userAgent.match("MSIE 8") ? (d = !0, g = !0) :null != navigator.userAgent.match("MSIE 9") && (p = !0, 
g = !0);
},
has3DTransform:function() {
var t = !1, o = e("<div />").css({
msTransform:"matrix(1,1,1,1,1,1)",
webkitTransform:"matrix(1,1,1,1,1,1)",
MozTransform:"matrix(1,1,1,1,1,1)",
transform:"matrix(1,1,1,1,1,1)"
});
return "" == o.attr("style") ? t = !1 :h && parseInt(navigator.userAgent.split("/")[3], 10) >= 21 ? t = !1 :void 0 != o.attr("style") && (t = !0), 
t;
},
getSlideNumber:function(e, t, o) {
return (e - T[t] + o) % o;
},
calcActiveOffset:function(e, t, o, n, i, r) {
var a, s = !1, l = new Array();
t > o[0] && (a = 0), t < o[o.length - 1] && (a = r - 1);
for (var c = 0; c < o.length; c++) o[c] <= t && o[c] > t - n && (s || o[c] == t || (l[l.length] = o[c - 1]), 
l[l.length] = o[c], s = !0);
0 == l.length && (l[0] = o[o.length - 1]);
for (var u = n, d = 0, c = 0; c < l.length; c++) {
var p = Math.abs(t - l[c]);
u > p && (d = l[c], u = p);
}
for (var c = 0; c < o.length; c++) d == o[c] && (a = c);
return a;
},
changeSlide:function(t, o, n, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y) {
E.autoSlidePause(m);
for (var b = 0; b < r.length; b++) clearTimeout(r[b]);
var _ = Math.ceil(y.autoSlideTransTimer / 10) + 1, M = E.getSliderOffset(o, "x"), $ = g[t], C = $ - M, L = t - (S[m] + T[m] + w) % w;
if (y.infiniteSlider) {
t = (t - T[m] + 2 * w) % w;
var D = !1;
0 == t && 2 == w && (t = w, g[t] = g[t - 1] - e(n).eq(0).outerWidth(!0), D = !0), 
$ = g[t], C = $ - M;
var I = new Array(g[t] - e(o).width(), g[t] + e(o).width());
D && g.splice(g.length - 1, 1);
for (var B = 0; B < I.length; B++) Math.abs(I[B] - M) < Math.abs(C) && (C = I[B] - M);
}
0 > C && -1 == L ? C += e(o).width() :C > 0 && 1 == L && (C -= e(o).width());
var O, A, Y = new Array();
E.showScrollbar(y, a);
for (var B = 0; _ >= B; B++) O = B, O /= _, O--, A = M + C * (Math.pow(O, 5) + 1), 
Y[Y.length] = A;
for (var j = (t + T[m] + w) % w, H = 0, B = 0; B < Y.length; B++) if ((0 == B || Math.abs(Y[B] - H) > 1 || B >= Y.length - 2) && (H = Y[B], 
r[B] = E.slowScrollHorizontalIntervalTimer(i * (B + 1), o, n, Y[B], a, s, l, c, u, d, t, p, g, f, w, h, m, v, j, y)), 
0 == B && "" != y.onSlideStart) {
var N = (S[m] + T[m] + w) % w;
y.onSlideStart(new E.args("start", y, o, e(o).children(":eq(" + N + ")"), N, t));
}
var P = !1;
y.infiniteSlider ? j != x[m] && (P = !0) :t != S[m] && (P = !0), P && "" != y.onSlideComplete && (r[r.length] = E.onSlideCompleteTimer(i * (B + 1), y, o, e(o).children(":eq(" + j + ")"), j, m)), 
k[m] = r, E.hideScrollbar(y, r, B, Y, a, s, l, u, d, m), E.autoSlide(o, n, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y);
},
changeOffset:function(t, o, n, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y) {
E.autoSlidePause(m);
for (var b = 0; b < r.length; b++) clearTimeout(r[b]);
y.infiniteSlider || (t = t > -1 * M[m] + v ? -1 * M[m] + v :t, t = t < -1 * $[m] ? -1 * $[m] :t);
var _ = Math.ceil(y.autoSlideTransTimer / 10) + 1, C = E.getSliderOffset(o, "x"), L = (E.calcActiveOffset(y, t, g, l, T, w, S[m], m) + T[m] + w) % w, D = g.slice();
if (y.snapToChildren && !y.infiniteSlider) t = g[L]; else if (y.infiniteSlider && y.snapToChildren) {
for (;t >= D[0]; ) D.splice(0, 0, D[w - 1] + e(o).width()), D.splice(w, 1);
for (;t <= D[w - 1]; ) D.splice(w, 0, D[0] - e(o).width()), D.splice(0, 1);
L = E.calcActiveOffset(y, t, D, l, T, w, S[m], m), t = D[L];
}
var I, B, O = t - C, A = new Array();
E.showScrollbar(y, a);
for (var Y = 0; _ >= Y; Y++) I = Y, I /= _, I--, B = C + O * (Math.pow(I, 5) + 1), 
A[A.length] = B;
for (var j = (L + T[m] + w) % w, H = 0, Y = 0; Y < A.length; Y++) if ((0 == Y || Math.abs(A[Y] - H) > 1 || Y >= A.length - 2) && (H = A[Y], 
r[Y] = E.slowScrollHorizontalIntervalTimer(i * (Y + 1), o, n, A[Y], a, s, l, c, u, d, L, p, g, f, w, h, m, v, j, y)), 
0 == Y && "" != y.onSlideStart) {
var j = (S[m] + T[m] + w) % w;
y.onSlideStart(new E.args("start", y, o, e(o).children(":eq(" + j + ")"), j, L));
}
var N = !1;
y.infiniteSlider ? j != x[m] && (N = !0) :L != S[m] && (N = !0), N && "" != y.onSlideComplete && (r[r.length] = E.onSlideCompleteTimer(i * (Y + 1), y, o, e(o).children(":eq(" + j + ")"), j, m)), 
k[m] = r, E.hideScrollbar(y, r, Y, A, a, s, l, u, d, m), E.autoSlide(o, n, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y);
},
autoSlide:function(e, t, o, n, i, r, a, s, l, c, u, d, p, g, h, m, f) {
return b[p].autoSlide ? (E.autoSlidePause(p), v[p] = setTimeout(function() {
!f.infiniteSlider && S[p] > u.length - 1 && (S[p] = S[p] - h);
var w = S[p] + T[p] + 1;
E.changeSlide(w, e, t, o, n, i, r, a, s, l, c, u, d, p, g, h, m, f), E.autoSlide(e, t, o, n, i, r, a, s, l, c, u, d, p, g, h, m, f);
}, f.autoSlideTimer + f.autoSlideTransTimer), void 0) :!1;
},
autoSlidePause:function(e) {
clearTimeout(v[e]);
},
isUnselectable:function(t, o) {
return "" != o.unselectableSelector && 1 == e(t).closest(o.unselectableSelector).length ? !0 :!1;
},
slowScrollHorizontalIntervalTimer:function(e, t, o, n, i, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y) {
var b = setTimeout(function() {
E.slowScrollHorizontalInterval(t, o, n, i, r, a, s, l, c, u, d, p, g, h, m, f, w, v, y);
}, e);
return b;
},
onSlideCompleteTimer:function(e, t, o, n, i, r) {
var a = setTimeout(function() {
E.onSlideComplete(t, o, n, i, r);
}, e);
return a;
},
hideScrollbarIntervalTimer:function(e, t, o, n, i, r, a, s, l, c) {
var u = setTimeout(function() {
E.hideScrollbarInterval(t, o, n, i, r, a, s, l, c);
}, e);
return u;
},
updateBackfaceVisibilityTimer:function(e, t, o, n, i) {
var r = setTimeout(function() {
E.updateBackfaceVisibility(t, o, n, i);
}, e);
return r;
},
updateBackfaceVisibility:function(t, o, n, i) {
for (var r = (S[o] + T[o] + n) % n, a = Array(), s = 0; s < 2 * i.hardwareAccelBuffer; s++) {
var l = E.mod(r + s - i.hardwareAccelBuffer, n);
if ("visible" == e(t).eq(l).css("-webkit-backface-visibility")) {
a[a.length] = l;
var c = E.mod(l + 2 * i.hardwareAccelBuffer, n), u = E.mod(l - 2 * i.hardwareAccelBuffer, n);
e(t).eq(l).css("-webkit-backface-visibility", "hidden"), -1 == a.indexOf(u) && e(t).eq(u).css("-webkit-backface-visibility", ""), 
-1 == a.indexOf(c) && e(t).eq(c).css("-webkit-backface-visibility", "");
}
}
},
mod:function(e, t) {
var o = e % t;
return 0 > o ? o + t :o;
},
args:function(t, o, n, i, r, a) {
this.prevSlideNumber = void 0 == e(n).parent().data("args") ? void 0 :e(n).parent().data("args").prevSlideNumber, 
this.prevSlideObject = void 0 == e(n).parent().data("args") ? void 0 :e(n).parent().data("args").prevSlideObject, 
this.targetSlideNumber = a + 1, this.targetSlideObject = e(n).children(":eq(" + a + ")"), 
this.slideChanged = !1, "load" == t ? (this.targetSlideNumber = void 0, this.targetSlideObject = void 0) :"start" == t ? (this.targetSlideNumber = void 0, 
this.targetSlideObject = void 0) :"change" == t ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == e(n).parent().data("args") ? o.startAtSlide :e(n).parent().data("args").currentSlideNumber, 
this.prevSlideObject = e(n).children(":eq(" + this.prevSlideNumber + ")")) :"complete" == t && (this.slideChanged = e(n).parent().data("args").slideChanged), 
this.settings = o, this.data = e(n).parent().data("iosslider"), this.sliderObject = n, 
this.sliderContainerObject = e(n).parent(), this.currentSlideObject = i, this.currentSlideNumber = r + 1, 
this.currentSliderOffset = -1 * E.getSliderOffset(n, "x");
},
preventDrag:function(e) {
e.preventDefault();
},
preventClick:function(e) {
return e.stopImmediatePropagation(), !1;
},
enableClick:function() {
return !0;
}
};
E.setBrowserInfo();
var D = {
init:function(i, l) {
c = E.has3DTransform();
var p = e.extend(!0, {
elasticPullResistance:.6,
frictionCoefficient:.92,
elasticFrictionCoefficient:.6,
snapFrictionCoefficient:.92,
snapToChildren:!1,
snapSlideCenter:!1,
startAtSlide:1,
scrollbar:!1,
scrollbarDrag:!1,
scrollbarHide:!0,
scrollbarPaging:!1,
scrollbarLocation:"top",
scrollbarContainer:"",
scrollbarOpacity:.4,
scrollbarHeight:"4px",
scrollbarBorder:"0",
scrollbarMargin:"5px",
scrollbarBackground:"#000",
scrollbarBorderRadius:"100px",
scrollbarShadow:"0 0 0 #000",
scrollbarElasticPullResistance:.9,
desktopClickDrag:!1,
keyboardControls:!1,
tabToAdvance:!1,
responsiveSlideContainer:!0,
responsiveSlides:!0,
navSlideSelector:"",
navPrevSelector:"",
navNextSelector:"",
autoSlideToggleSelector:"",
autoSlide:!1,
autoSlideTimer:5e3,
autoSlideTransTimer:750,
autoSlideHoverPause:!0,
infiniteSlider:!1,
snapVelocityThreshold:5,
slideStartVelocityThreshold:0,
horizontalSlideLockThreshold:5,
verticalSlideLockThreshold:3,
hardwareAccelBuffer:5,
stageCSS:{
position:"relative",
top:"0",
left:"0",
overflow:"hidden",
zIndex:1
},
unselectableSelector:"",
onSliderLoaded:"",
onSliderUpdate:"",
onSliderResize:"",
onSlideStart:"",
onSlideChange:"",
onSlideComplete:""
}, i);
return void 0 == l && (l = this), e(l).each(function(i) {
function l() {
E.autoSlidePause(c), ft = e(at).find("a"), wt = e(at).find("[onclick]"), vt = e(at).find("*"), 
e(X).css("width", ""), e(X).css("height", ""), e(at).css("width", ""), R = e(at).children().not("script").get(), 
q = new Array(), W = new Array(), p.responsiveSlides && e(R).css("width", ""), $[c] = 0, 
F = new Array(), A = e(X).parent().width(), j = e(X).outerWidth(!0), p.responsiveSlideContainer && (j = e(X).outerWidth(!0) > A ? A :e(X).width()), 
e(X).css({
position:p.stageCSS.position,
top:p.stageCSS.top,
left:p.stageCSS.left,
overflow:p.stageCSS.overflow,
zIndex:p.stageCSS.zIndex,
webkitPerspective:1e3,
webkitBackfaceVisibility:"hidden",
msTouchAction:"pan-y",
width:j
}), e(p.unselectableSelector).css({
cursor:"default"
});
for (var t = 0; t < R.length; t++) {
q[t] = e(R[t]).width(), W[t] = e(R[t]).outerWidth(!0);
var o = W[t];
p.responsiveSlides && (W[t] > j ? (o = j + -1 * (W[t] - q[t]), q[t] = o, W[t] = j) :o = q[t], 
e(R[t]).css({
width:o
})), e(R[t]).css({
overflow:"hidden",
position:"absolute"
}), F[t] = -1 * $[c], $[c] = $[c] + o + (W[t] - q[t]);
}
p.snapSlideCenter && (K = .5 * (j - W[0]), p.responsiveSlides && W[0] > j && (K = 0)), 
C[c] = 2 * $[c];
for (var t = 0; t < R.length; t++) E.setSliderOffset(e(R[t]), -1 * F[t] + $[c] + K), 
F[t] = F[t] - $[c];
if (!p.infiniteSlider && !p.snapSlideCenter) {
for (var n = 0; n < F.length && !(F[n] <= -1 * (2 * $[c] - j)); n++) ct = n;
F.splice(ct + 1, F.length), F[F.length] = -1 * (2 * $[c] - j);
}
for (var n = 0; n < F.length; n++) tt[n] = F[n];
if (Z && (b[c].startAtSlide = b[c].startAtSlide > F.length ? F.length :b[c].startAtSlide, 
p.infiniteSlider ? (b[c].startAtSlide = (b[c].startAtSlide - 1 + st) % st, S[c] = b[c].startAtSlide) :(b[c].startAtSlide = b[c].startAtSlide - 1 < 0 ? F.length - 1 :b[c].startAtSlide, 
S[c] = b[c].startAtSlide - 1), x[c] = S[c]), M[c] = $[c] + K, e(at).css({
position:"relative",
cursor:m,
webkitPerspective:"0",
webkitBackfaceVisibility:"hidden",
width:$[c] + "px"
}), mt = $[c], $[c] = 2 * $[c] - j + 2 * K, pt = j > mt + K || 0 == j ? !0 :!1, 
pt && e(at).css({
cursor:"default"
}), Y = e(X).parent().outerHeight(!0), H = e(X).height(), p.responsiveSlideContainer && (H = H > Y ? Y :H), 
e(X).css({
height:H
}), E.setSliderOffset(at, F[S[c]]), p.infiniteSlider && !pt) {
for (var i = E.getSliderOffset(e(at), "x"), r = (T[c] + st) % st * -1; 0 > r; ) {
var a = 0, s = E.getSliderOffset(e(R[0]), "x");
e(R).each(function(e) {
E.getSliderOffset(this, "x") < s && (s = E.getSliderOffset(this, "x"), a = e);
});
var l = M[c] + mt;
E.setSliderOffset(e(R)[a], l), M[c] = -1 * F[1] + K, $[c] = M[c] + mt - j, F.splice(0, 1), 
F.splice(F.length, 0, -1 * l + K), r++;
}
for (;-1 * F[0] - mt + K > 0 && p.snapSlideCenter && Z; ) {
var u = 0, d = E.getSliderOffset(e(R[0]), "x");
e(R).each(function(e) {
E.getSliderOffset(this, "x") > d && (d = E.getSliderOffset(this, "x"), u = e);
});
var l = M[c] - W[u];
E.setSliderOffset(e(R)[u], l), F.splice(0, 0, -1 * l + K), F.splice(F.length - 1, 1), 
M[c] = -1 * F[0] + K, $[c] = M[c] + mt - j, T[c]--, S[c]++;
}
for (;i <= -1 * $[c]; ) {
var a = 0, s = E.getSliderOffset(e(R[0]), "x");
e(R).each(function(e) {
E.getSliderOffset(this, "x") < s && (s = E.getSliderOffset(this, "x"), a = e);
});
var l = M[c] + mt;
E.setSliderOffset(e(R)[a], l), M[c] = -1 * F[1] + K, $[c] = M[c] + mt - j, F.splice(0, 1), 
F.splice(F.length, 0, -1 * l + K), T[c]++, S[c]--;
}
}
return E.setSliderOffset(at, F[S[c]]), E.updateBackfaceVisibility(R, c, st, p), 
p.desktopClickDrag || e(at).css({
cursor:"default"
}), p.scrollbar && (e("." + J).css({
margin:p.scrollbarMargin,
overflow:"hidden",
display:"none"
}), e("." + J + " ." + Q).css({
border:p.scrollbarBorder
}), N = parseInt(e("." + J).css("marginLeft")) + parseInt(e("." + J).css("marginRight")), 
P = parseInt(e("." + J + " ." + Q).css("borderLeftWidth"), 10) + parseInt(e("." + J + " ." + Q).css("borderRightWidth"), 10), 
B = "" != p.scrollbarContainer ? e(p.scrollbarContainer).width() :j, O = j / mt * (B - N), 
p.scrollbarHide || (ot = p.scrollbarOpacity), e("." + J).css({
position:"absolute",
left:0,
width:B - N + "px",
margin:p.scrollbarMargin
}), "top" == p.scrollbarLocation ? e("." + J).css("top", "0") :e("." + J).css("bottom", "0"), 
e("." + J + " ." + Q).css({
borderRadius:p.scrollbarBorderRadius,
background:p.scrollbarBackground,
height:p.scrollbarHeight,
width:O - P + "px",
minWidth:p.scrollbarHeight,
border:p.scrollbarBorder,
webkitPerspective:1e3,
webkitBackfaceVisibility:"hidden",
position:"relative",
opacity:ot,
filter:"alpha(opacity:" + 100 * ot + ")",
boxShadow:p.scrollbarShadow
}), E.setSliderOffset(e("." + J + " ." + Q), Math.floor((-1 * F[S[c]] - M[c] + K) / ($[c] - M[c] + K) * (B - N - O))), 
e("." + J).css({
display:"block"
}), v = e("." + J + " ." + Q), I = e("." + J)), p.scrollbarDrag && !pt && e("." + J + " ." + Q).css({
cursor:m
}), p.infiniteSlider && (U = ($[c] + j) / 3), "" != p.navSlideSelector && e(p.navSlideSelector).each(function(t) {
e(this).css({
cursor:"pointer"
}), e(this).unbind(_t).bind(_t, function(o) {
"touchstart" == o.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = o.type + ".iosSliderEvent", E.changeSlide(t, at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p);
});
}), "" != p.navPrevSelector && (e(p.navPrevSelector).css({
cursor:"pointer"
}), e(p.navPrevSelector).unbind(_t).bind(_t, function(t) {
"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = t.type + ".iosSliderEvent";
var o = (S[c] + T[c] + st) % st;
(o > 0 || p.infiniteSlider) && E.changeSlide(o - 1, at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p);
})), "" != p.navNextSelector && (e(p.navNextSelector).css({
cursor:"pointer"
}), e(p.navNextSelector).unbind(_t).bind(_t, function(t) {
"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = t.type + ".iosSliderEvent";
var o = (S[c] + T[c] + st) % st;
(o < F.length - 1 || p.infiniteSlider) && E.changeSlide(o + 1, at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p);
})), p.autoSlide && !pt && "" != p.autoSlideToggleSelector && (e(p.autoSlideToggleSelector).css({
cursor:"pointer"
}), e(p.autoSlideToggleSelector).unbind(_t).bind(_t, function(t) {
"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") :e(this).unbind("touchstart.iosSliderEvent"), 
_t = t.type + ".iosSliderEvent", gt ? (E.autoSlide(at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p), 
gt = !1, e(p.autoSlideToggleSelector).removeClass("on")) :(E.autoSlidePause(c), 
gt = !0, e(p.autoSlideToggleSelector).addClass("on"));
})), E.autoSlide(at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p), e(X).bind("mouseleave.iosSliderEvent", function() {
return gt ? !0 :(E.autoSlide(at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p), 
void 0);
}), e(X).bind("touchend.iosSliderEvent", function() {
return gt ? !0 :(E.autoSlide(at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p), 
void 0);
}), p.autoSlideHoverPause && e(X).bind("mouseenter.iosSliderEvent", function() {
E.autoSlidePause(c);
}), e(X).data("iosslider", {
obj:kt,
settings:p,
scrollerNode:at,
slideNodes:R,
numberOfSlides:st,
centeredSlideOffset:K,
sliderNumber:c,
originalOffsets:tt,
childrenOffsets:F,
sliderMax:$[c],
scrollbarClass:Q,
scrollbarWidth:O,
scrollbarStageWidth:B,
stageWidth:j,
scrollMargin:N,
scrollBorder:P,
infiniteSliderOffset:T[c],
infiniteSliderWidth:U,
slideNodeOuterWidths:W,
shortContent:pt
}), Z = !1, !0;
}
t++;
var c = t, h = new Array();
b[c] = e.extend({}, p), M[c] = 0, $[c] = 0;
var v, I, B, O, A, Y, j, H, N, P, z, F, R, q, W, U, V = new Array(0, 0), G = new Array(0, 0), J = "scrollbarBlock" + t, Q = "scrollbar" + t, K = 0, X = e(this), Z = !0, et = -1, tt = (new Array(), 
new Array()), ot = 0, nt = 0, it = 0, rt = 0, at = e(this).children(":first-child"), st = e(at).children().not("script").length, lt = !1, ct = 0, ut = !1, dt = void 0;
T[c] = 0;
var pt = !1;
w[c] = -1;
var gt = !1;
y[c] = X, _[c] = !1;
var ht, mt, ft, wt, vt, yt = !1, bt = !1, _t = "touchstart.iosSliderEvent click.iosSliderEvent";
L[c] = !1, k[c] = new Array(), p.scrollbarDrag && (p.scrollbar = !0, p.scrollbarHide = !1);
var kt = e(this), St = kt.data("iosslider");
if (void 0 != St) return !0;
for (var xt = [ "d", "e", "m", "o", " ", "v", "e", "r", "s", "i", "o", "n" ], Tt = Math.floor(12317 * Math.random()), i = 0; i < xt.length; i++) e(".i" + Tt).html(e(".i" + Tt).html() + xt[i]);
if (parseInt(e().jquery.split(".").join(""), 10) >= 14.2 ? e(this).delegate("img", "dragstart.iosSliderEvent", function(e) {
e.preventDefault();
}) :e(this).find("img").bind("dragstart.iosSliderEvent", function(e) {
e.preventDefault();
}), p.infiniteSlider && (p.scrollbar = !1), p.infiniteSlider && 1 == st && (p.infiniteSlider = !1), 
p.scrollbar && ("" != p.scrollbarContainer ? e(p.scrollbarContainer).append("<div class = '" + J + "'><div class = '" + Q + "'></div></div>") :e(at).parent().append("<div class = '" + J + "'><div class = '" + Q + "'></div></div>")), 
!l()) return !0;
e(this).find("a").bind("mousedown", E.preventDrag), e(this).find("[onclick]").bind("click", E.preventDrag).each(function() {
e(this).data("onclick", this.onclick);
});
var et = E.calcActiveOffset(p, E.getSliderOffset(e(at), "x"), F, j, T[c], st, void 0, c), Mt = (et + T[c] + st) % st, $t = new E.args("load", p, at, e(at).children(":eq(" + Mt + ")"), Mt, Mt);
if (e(X).data("args", $t), "" != p.onSliderLoaded && p.onSliderLoaded($t), w[c] = Mt, 
p.scrollbarPaging && p.scrollbar && !pt && (e(I).css("cursor", "pointer"), e(I).bind("click.iosSliderEvent", function(t) {
this == t.target && (t.pageX > e(v).offset().left ? D.nextPage(X) :D.prevPage(X));
})), b[c].responsiveSlides || b[c].responsiveSlideContainer) {
var Ct = s ? "orientationchange" :"resize", Lt = $B.debounce(function() {
if (!l()) return !0;
var t = e(X).data("args");
"" != p.onSliderResize && p.onSliderResize(t);
}, 50);
e(window).bind(Ct + ".iosSliderEvent-" + c, Lt);
}
if (!p.keyboardControls && !p.tabToAdvance || pt || e(document).bind("keydown.iosSliderEvent", function(e) {
if (!u && !d) var e = e.originalEvent;
if (L[c]) return !0;
if (37 == e.keyCode && p.keyboardControls) {
e.preventDefault();
var t = (S[c] + T[c] + st) % st;
(t > 0 || p.infiniteSlider) && E.changeSlide(t - 1, at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p);
} else if (39 == e.keyCode && p.keyboardControls || 9 == e.keyCode && p.tabToAdvance) {
e.preventDefault();
var t = (S[c] + T[c] + st) % st;
(t < F.length - 1 || p.infiniteSlider) && E.changeSlide(t + 1, at, R, h, Q, O, j, B, N, P, tt, F, W, c, U, st, K, p);
}
}), a || p.desktopClickDrag) {
var Et = !1, Dt = !1, It = e(at), Bt = e(at), Ot = !1;
p.scrollbarDrag && (It = It.add(v), Bt = Bt.add(I)), e(It).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function(t) {
if (e(window).one("scroll.iosSliderEvent", function() {
Et = !1;
}), Et) return !0;
if (Et = !0, Dt = !1, "touchstart" == t.type ? e(Bt).unbind("mousedown.iosSliderEvent") :e(Bt).unbind("touchstart.iosSliderEvent"), 
L[c] || pt) return Et = !1, lt = !1, !0;
if (Ot = E.isUnselectable(t.target, p)) return Et = !1, lt = !1, !0;
if (ht = e(this)[0] === e(v)[0] ? v :at, !u && !d) var t = t.originalEvent;
if (E.autoSlidePause(c), vt.unbind(".disableClick"), "touchstart" == t.type) eventX = t.touches[0].pageX, 
eventY = t.touches[0].pageY; else {
if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() :window.getSelection().removeAllRanges && window.getSelection().removeAllRanges(); else if (document.selection) if (d) try {
document.selection.empty();
} catch (t) {} else document.selection.empty();
eventX = t.pageX, eventY = t.pageY, ut = !0, dt = at, e(this).css({
cursor:f
});
}
V = new Array(0, 0), G = new Array(0, 0), o = 0, lt = !1;
for (var n = 0; n < h.length; n++) clearTimeout(h[n]);
var i = E.getSliderOffset(at, "x");
i > -1 * M[c] + K + mt ? (i = -1 * M[c] + K + mt, E.setSliderOffset(e("." + Q), i), 
e("." + Q).css({
width:O - P + "px"
})) :i < -1 * $[c] && (i = -1 * $[c], E.setSliderOffset(e("." + Q), B - N - O), 
e("." + Q).css({
width:O - P + "px"
}));
var r = e(this)[0] === e(v)[0] ? M[c] :0;
nt = -1 * (E.getSliderOffset(this, "x") - eventX - r), it = -1 * (E.getSliderOffset(this, "y") - eventY), 
V[1] = eventX, G[1] = eventY, bt = !1;
}), e(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function(t) {
if (!u && !d) var t = t.originalEvent;
if (L[c] || pt || Ot || !Et) return !0;
var i = 0;
if ("touchmove" == t.type) eventX = t.touches[0].pageX, eventY = t.touches[0].pageY; else {
if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges(); else if (document.selection) if (d) try {
document.selection.empty();
} catch (t) {} else document.selection.empty();
if (eventX = t.pageX, eventY = t.pageY, !ut) return !0;
if (!g && ("undefined" != typeof t.webkitMovementX || "undefined" != typeof t.webkitMovementY) && 0 === t.webkitMovementY && 0 === t.webkitMovementX) return !0;
}
if (V[0] = V[1], V[1] = eventX, o = (V[1] - V[0]) / 2, G[0] = G[1], G[1] = eventY, 
n = (G[1] - G[0]) / 2, !lt) {
var a = (S[c] + T[c] + st) % st, s = new E.args("start", p, at, e(at).children(":eq(" + a + ")"), a, void 0);
e(X).data("args", s), "" != p.onSlideStart && p.onSlideStart(s);
}
if ((n > p.verticalSlideLockThreshold || n < -1 * p.verticalSlideLockThreshold) && "touchmove" == t.type && !lt && (yt = !0), 
(o > p.horizontalSlideLockThreshold || o < -1 * p.horizontalSlideLockThreshold) && "touchmove" == t.type && t.preventDefault(), 
(o > p.slideStartVelocityThreshold || o < -1 * p.slideStartVelocityThreshold) && (lt = !0), 
lt && !yt) {
var l = E.getSliderOffset(at, "x"), h = e(ht)[0] === e(v)[0] ? M[c] :K, m = e(ht)[0] === e(v)[0] ? (M[c] - $[c] - K) / (B - N - O) :1, f = e(ht)[0] === e(v)[0] ? p.scrollbarElasticPullResistance :p.elasticPullResistance, w = p.snapSlideCenter && e(ht)[0] === e(v)[0] ? 0 :K, y = p.snapSlideCenter && e(ht)[0] === e(v)[0] ? K :0;
if ("touchmove" == t.type && (rt != t.touches.length && (nt = -1 * l + eventX), 
rt = t.touches.length), p.infiniteSlider) {
if (l <= -1 * $[c]) {
var b = e(at).width();
if (l <= -1 * C[c]) {
var _ = -1 * tt[0];
e(R).each(function(t) {
E.setSliderOffset(e(R)[t], _ + K), t < F.length && (F[t] = -1 * _), _ += W[t];
}), nt -= -1 * F[0], M[c] = -1 * F[0] + K, $[c] = M[c] + b - j, T[c] = 0;
} else {
var k = 0, D = E.getSliderOffset(e(R[0]), "x");
e(R).each(function(e) {
E.getSliderOffset(this, "x") < D && (D = E.getSliderOffset(this, "x"), k = e);
});
var I = M[c] + b;
E.setSliderOffset(e(R)[k], I), M[c] = -1 * F[1] + K, $[c] = M[c] + b - j, F.splice(0, 1), 
F.splice(F.length, 0, -1 * I + K), T[c]++;
}
}
if (l >= -1 * M[c] || l >= 0) {
var b = e(at).width();
if (l >= 0) {
var _ = -1 * tt[0];
for (e(R).each(function(t) {
E.setSliderOffset(e(R)[t], _ + K), t < F.length && (F[t] = -1 * _), _ += W[t];
}), nt += -1 * F[0], M[c] = -1 * F[0] + K, $[c] = M[c] + b - j, T[c] = st; -1 * F[0] - b + K > 0; ) {
var A = 0, Y = E.getSliderOffset(e(R[0]), "x");
e(R).each(function(e) {
E.getSliderOffset(this, "x") > Y && (Y = E.getSliderOffset(this, "x"), A = e);
});
var I = M[c] - W[A];
E.setSliderOffset(e(R)[A], I), F.splice(0, 0, -1 * I + K), F.splice(F.length - 1, 1), 
M[c] = -1 * F[0] + K, $[c] = M[c] + b - j, T[c]--, S[c]++;
}
} else {
var A = 0, Y = E.getSliderOffset(e(R[0]), "x");
e(R).each(function(e) {
E.getSliderOffset(this, "x") > Y && (Y = E.getSliderOffset(this, "x"), A = e);
});
var I = M[c] - W[A];
E.setSliderOffset(e(R)[A], I), F.splice(0, 0, -1 * I + K), F.splice(F.length - 1, 1), 
M[c] = -1 * F[0] + K, $[c] = M[c] + b - j, T[c]--;
}
}
} else {
var b = e(at).width();
l > -1 * M[c] + K && (i = (M[c] + -1 * (nt - h - eventX + w) * m - h) * f * -1 / m), 
l < -1 * $[c] && (i = ($[c] + y + -1 * (nt - h - eventX) * m - h) * f * -1 / m);
}
if (E.setSliderOffset(at, -1 * (nt - h - eventX - i) * m - h + y), p.scrollbar) {
E.showScrollbar(p, Q), r = Math.floor((nt - eventX - i - M[c] + w) / ($[c] - M[c] + K) * (B - N - O) * m);
var H = O;
0 >= r ? (H = O - P - -1 * r, E.setSliderOffset(e("." + Q), 0), e("." + Q).css({
width:H + "px"
})) :r >= B - N - P - O ? (H = B - N - P - r, E.setSliderOffset(e("." + Q), r), 
e("." + Q).css({
width:H + "px"
})) :E.setSliderOffset(e("." + Q), r);
}
"touchmove" == t.type && (z = t.touches[0].pageX);
var q = !1, U = E.calcActiveOffset(p, -1 * (nt - eventX - i), F, j, T[c], st, void 0, c), J = (U + T[c] + st) % st;
if (p.infiniteSlider ? J != x[c] && (q = !0) :U != S[c] && (q = !0), q) {
S[c] = U, x[c] = J, bt = !0;
var s = new E.args("change", p, at, e(at).children(":eq(" + J + ")"), J, J);
e(X).data("args", s), "" != p.onSlideChange && p.onSlideChange(s), E.updateBackfaceVisibility(R, c, st, p);
}
}
});
var At = e(window);
if (d || u) var At = e(document);
e(It).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function(e) {
var e = e.originalEvent;
if (Dt) return !1;
if (Dt = !0, L[c] || pt) return !0;
if (Ot) return !0;
if (0 != e.touches.length) for (var t = 0; t < e.touches.length; t++) e.touches[t].pageX == z && E.slowScrollHorizontal(at, R, h, Q, o, n, O, j, B, N, P, tt, F, W, c, U, st, ht, bt, K, p); else E.slowScrollHorizontal(at, R, h, Q, o, n, O, j, B, N, P, tt, F, W, c, U, st, ht, bt, K, p);
return yt = !1, Et = !1, !0;
}), e(At).bind("mouseup.iosSliderEvent-" + c, function() {
if (lt ? ft.unbind("click.disableClick").bind("click.disableClick", E.preventClick) :ft.unbind("click.disableClick").bind("click.disableClick", E.enableClick), 
wt.each(function() {
this.onclick = function(t) {
return lt ? !1 :(e(this).data("onclick") && e(this).data("onclick").call(this, t || window.event), 
void 0);
}, this.onclick = e(this).data("onclick");
}), parseFloat(e().jquery) >= 1.8 ? vt.each(function() {
var t = e._data(this, "events");
if (void 0 != t && void 0 != t.click && "iosSliderEvent" != t.click[0].namespace) {
if (!lt) return !1;
e(this).one("click.disableClick", E.preventClick);
var o = e._data(this, "events").click, n = o.pop();
o.splice(0, 0, n);
}
}) :parseFloat(e().jquery) >= 1.6 && vt.each(function() {
var t = e(this).data("events");
if (void 0 != t && void 0 != t.click && "iosSliderEvent" != t.click[0].namespace) {
if (!lt) return !1;
e(this).one("click.disableClick", E.preventClick);
var o = e(this).data("events").click, n = o.pop();
o.splice(0, 0, n);
}
}), !_[c]) {
if (pt) return !0;
if (p.desktopClickDrag && e(at).css({
cursor:m
}), p.scrollbarDrag && e(v).css({
cursor:m
}), ut = !1, void 0 == dt) return !0;
E.slowScrollHorizontal(dt, R, h, Q, o, n, O, j, B, N, P, tt, F, W, c, U, st, ht, bt, K, p), 
dt = void 0;
}
yt = !1, Et = !1;
});
}
});
},
destroy:function(t, o) {
return void 0 == o && (o = this), e(o).each(function() {
var o = e(this), n = o.data("iosslider");
if (void 0 == n) return !1;
void 0 == t && (t = !0), E.autoSlidePause(n.sliderNumber), _[n.sliderNumber] = !0, 
e(window).unbind(".iosSliderEvent-" + n.sliderNumber), e(document).unbind(".iosSliderEvent-" + n.sliderNumber), 
e(document).unbind("keydown.iosSliderEvent"), e(this).unbind(".iosSliderEvent"), 
e(this).children(":first-child").unbind(".iosSliderEvent"), e(this).children(":first-child").children().unbind(".iosSliderEvent"), 
e(n.settings.scrollbarBlockNode).unbind(".iosSliderEvent"), t && (e(this).attr("style", ""), 
e(this).children(":first-child").attr("style", ""), e(this).children(":first-child").children().attr("style", ""), 
e(n.settings.navSlideSelector).attr("style", ""), e(n.settings.navPrevSelector).attr("style", ""), 
e(n.settings.navNextSelector).attr("style", ""), e(n.settings.autoSlideToggleSelector).attr("style", ""), 
e(n.settings.unselectableSelector).attr("style", "")), n.settings.scrollbar && e(".scrollbarBlock" + n.sliderNumber).remove();
for (var i = k[n.sliderNumber], r = 0; r < i.length; r++) clearTimeout(i[r]);
o.removeData("iosslider"), o.removeData("args");
});
},
update:function(t) {
return void 0 == t && (t = this), e(t).each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o) return !1;
o.settings.startAtSlide = t.data("args").currentSlideNumber, D.destroy(!1, this), 
1 != o.numberOfSlides && o.settings.infiniteSlider && (o.settings.startAtSlide = (S[o.sliderNumber] + 1 + T[o.sliderNumber] + o.numberOfSlides) % o.numberOfSlides), 
D.init(o.settings, this);
var n = new E.args("update", o.settings, o.scrollerNode, e(o.scrollerNode).children(":eq(" + (o.settings.startAtSlide - 1) + ")"), o.settings.startAtSlide - 1, o.settings.startAtSlide - 1);
e(o.stageNode).data("args", n), "" != o.settings.onSliderUpdate && o.settings.onSliderUpdate(n);
});
},
addSlide:function(t, o) {
return this.each(function() {
var n = e(this), i = n.data("iosslider");
return void 0 == i ? !1 :(0 == e(i.scrollerNode).children().length ? (e(i.scrollerNode).append(t), 
n.data("args").currentSlideNumber = 1) :i.settings.infiniteSlider ? (1 == o ? e(i.scrollerNode).children(":eq(0)").before(t) :e(i.scrollerNode).children(":eq(" + (o - 2) + ")").after(t), 
T[i.sliderNumber] < -1 && S[i.sliderNumber]--, n.data("args").currentSlideNumber >= o && S[i.sliderNumber]++) :(o <= i.numberOfSlides ? e(i.scrollerNode).children(":eq(" + (o - 1) + ")").before(t) :e(i.scrollerNode).children(":eq(" + (o - 2) + ")").after(t), 
n.data("args").currentSlideNumber >= o && n.data("args").currentSlideNumber++), 
n.data("iosslider").numberOfSlides++, D.update(this), void 0);
});
},
removeSlide:function(t) {
return this.each(function() {
var o = e(this), n = o.data("iosslider");
return void 0 == n ? !1 :(e(n.scrollerNode).children(":eq(" + (t - 1) + ")").remove(), 
S[n.sliderNumber] > t - 1 && S[n.sliderNumber]--, o.data("iosslider").numberOfSlides--, 
D.update(this), void 0);
});
},
goToSlide:function(t, o) {
return void 0 == o && (o = this), e(o).each(function() {
var o = e(this), n = o.data("iosslider");
return void 0 == n || n.shortContent ? !1 :(t = t > n.childrenOffsets.length ? n.childrenOffsets.length - 1 :t - 1, 
E.changeSlide(t, e(n.scrollerNode), e(n.slideNodes), k[n.sliderNumber], n.scrollbarClass, n.scrollbarWidth, n.stageWidth, n.scrollbarStageWidth, n.scrollMargin, n.scrollBorder, n.originalOffsets, n.childrenOffsets, n.slideNodeOuterWidths, n.sliderNumber, n.infiniteSliderWidth, n.numberOfSlides, n.centeredSlideOffset, n.settings), 
void 0);
});
},
prevSlide:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o || o.shortContent) return !1;
var n = (S[o.sliderNumber] + T[o.sliderNumber] + o.numberOfSlides) % o.numberOfSlides;
(n > 0 || o.settings.infiniteSlider) && E.changeSlide(n - 1, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings), 
S[o.sliderNumber] = n;
});
},
nextSlide:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o || o.shortContent) return !1;
var n = (S[o.sliderNumber] + T[o.sliderNumber] + o.numberOfSlides) % o.numberOfSlides;
(n < o.childrenOffsets.length - 1 || o.settings.infiniteSlider) && E.changeSlide(n + 1, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings), 
S[o.sliderNumber] = n;
});
},
prevPage:function(t) {
return void 0 == t && (t = this), e(t).each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o) return !1;
var n = E.getSliderOffset(o.scrollerNode, "x") + o.stageWidth;
E.changeOffset(n, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings);
});
},
nextPage:function(t) {
return void 0 == t && (t = this), e(t).each(function() {
var t = e(this), o = t.data("iosslider");
if (void 0 == o) return !1;
var n = E.getSliderOffset(o.scrollerNode, "x") - o.stageWidth;
E.changeOffset(n, e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings);
});
},
lock:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(e(o.scrollerNode).css({
cursor:"default"
}), L[o.sliderNumber] = !0, void 0);
});
},
unlock:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(e(o.scrollerNode).css({
cursor:m
}), L[o.sliderNumber] = !1, void 0);
});
},
getData:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :o;
});
},
autoSlidePause:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(b[o.sliderNumber].autoSlide = !1, E.autoSlidePause(o.sliderNumber), 
o);
});
},
autoSlidePlay:function() {
return this.each(function() {
var t = e(this), o = t.data("iosslider");
return void 0 == o || o.shortContent ? !1 :(b[o.sliderNumber].autoSlide = !0, E.autoSlide(e(o.scrollerNode), e(o.slideNodes), k[o.sliderNumber], o.scrollbarClass, o.scrollbarWidth, o.stageWidth, o.scrollbarStageWidth, o.scrollMargin, o.scrollBorder, o.originalOffsets, o.childrenOffsets, o.slideNodeOuterWidths, o.sliderNumber, o.infiniteSliderWidth, o.numberOfSlides, o.centeredSlideOffset, o.settings), 
o);
});
}
};
e.fn.iosSlider = function(t) {
return D[t] ? D[t].apply(this, Array.prototype.slice.call(arguments, 1)) :"object" != typeof t && t ? (e.error("invalid method call!"), 
void 0) :D.init.apply(this, arguments);
};
}(jQuery), function() {
var e, t, o, n, i, r;
r = $B.TH.isSmallScreen(), t = !1, o = function() {
return !$B.TH.isSmallScreen() && !$B.TH.isAndroid() && $("#header-container").is(":visible");
}, e = function() {
return $("#header-container .logo").height() + 18;
}, n = function() {
var t, i, a, s, l, c, u;
return r = Bobcat.TH.isSmallScreen(), t = $("#header-container"), i = $("#header-spacer"), 
u = $("li.slide").first().find(".spacer"), o() ? (s = t.height() - 0, i.show().css("height", s), 
l = $("#header-container .logo").height(), $("a.section-anchor").css("top", -s + l + 20), 
$("a.section-anchor").first().css("top", -s)) :($(".spacer").hide(), i.hide()), 
$("#header-container .logo img").load(n), c = $(".header .logo img").first().attr("src"), 
r && (!c || c.indexOf("assets/icons/transparent.png") > -1) ? ($(".header .power").hide(), 
t.css("height", 0)) :($(".header .power").show(), t.css("height", "auto")), $(".strikingly-slider .container").each(function() {
var e, t;
return t = $(this), e = t.find(".valign"), e.css({
margin:"0"
});
}), $(".strikingly-slider .container").each(function() {
var e, t, o, n;
return t = $(this), n = t.height(), e = t.find(".valign"), o = n - e.height(), 0 > o && (o = 0), 
e.css({
"margin-top":o / 2 + "px"
});
}), $(".subtitle").each(function() {
var e;
return e = $(this).find(".line"), 2 === e.length && e.eq(0).offset().top !== e.eq(1).offset().top ? (e.eq(0).hide(), 
e.eq(1).css({
display:"block",
margin:"20px auto 0 auto"
})) :void 0;
}), a = $(window).height(), $(".resize, li.slide:first-child .wide.cta-section").each(function(o) {
var n, i, s, l, c, u, d;
return d = $(this), n = d.find(".container").first(), u = a, 0 === o && d.parent().is(":first-child") ? r ? u -= t.outerHeight() :t.is(":visible") && (u -= t.height()) :t.is(":visible") && (u -= t.height() - e()), 
i = d.outerHeight(), Math.abs(i - u) < 64 && $B.TH.isSmallScreen() ? void 0 :n.outerHeight(!1) < u ? (s = .5 * (u - n.outerHeight(!1)), 
c = Math.min(400, Math.floor(s)), l = Math.min(400, Math.ceil(s)), d.stop().animate({
"padding-top":c,
"padding-bottom":l
})) :void 0;
}), $B.TH.isIpad() ? $("#header-container").addClass("no-flicker") :void 0;
}, i = function() {
var n, i, r, a, s;
if (o()) if (n = $("#header-container"), s = $(window).scrollTop(), r = -parseInt(n.css("margin-top"), 10), 
r > s - 15) a = -(s - 15), a > 0 && (a = 0), n.stop().css("margin-top", a); else {
if (t) return;
if (i = e(), s > n.height()) return n.stop().animate({
"margin-top":-i + "px"
}, 500, "swing");
}
}, window.runAfterDomBinding.add("fresh", function() {
var e;
return Bobcat.TH.applyTouchNav(), Bobcat.TH.enableSlider({
fullscreen:!1,
padding:0
}), n(), setTimeout(n, 1e3), window.edit_page.Event.subscribe("Slide.afterAdd", function() {
return n();
}), $(window).resize(n), $("#navbar-top-button img").click(function() {
return window.location = "#1";
}), window.edit_page.Event.subscribe("Menu.beforeChange", function() {
return t = !0;
}), window.edit_page.Event.subscribe("Menu.afterChange", function() {
return t = !1, i();
}), $(window).scroll(i), $(window).scroll(), window.edit_page.isShowPage && (e = $(".wide"), 
e.each(function(t, o) {
var n, i;
return i = $(o), n = e.eq(t + 1), i.hasClass("image") || i.hasClass("gray") || !n.length || n.hasClass("image") || n.hasClass("gray") ? i.removeClass("white-next") :i.addClass("white-next");
})), $(".signup-form-container, .email-form").each(function() {
return $(this).find(".input").each(function() {
var e, t, o;
return o = $(this).find("label.outside"), "none" !== o.css("display") ? (t = $(this).find("input, textarea"), 
e = function() {
return "" === t.val() ? o.show() :o.hide();
}, t.keypress(function() {
return "" === t.val() ? o.hide() :void 0;
}), t.keyup(e), t.blur(e), t.focus(function() {
return o.hide();
}), o.click(function() {
return t.focus();
})) :void 0;
});
});
});
}.call(this);