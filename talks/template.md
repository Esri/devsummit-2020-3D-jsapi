<!-- .slide: data-background="images/bg-1.png" data-title="add-scene-layer" class="title" -->

# ArcGIS API for JavaScript
## Presentation title having an arbitrary length this time


Presenter #1, Esri R&D Center Zürich \
Presenter #2, Esri R&D Center Zürich

2020 ESRI DEVELOPER SUMMIT​ | Palm Springs, CA

---

<!-- .slide: data-background="images/bg-2.png" -->

## Preface

Browser requirements
- Any _modern_ browser will work (IE 11+)
- Mobile: _latest_ Samsung & Apple devices
- Desktop: dedicated graphics card recommended

---

<!-- .slide: data-background="images/bg-3.png" data-title="slide-where-we-add-firefly-basemap" -->

## Section Header

---

<!-- .slide: data-background="images/bg-2.png" data-title="slide-where-we-add-firefly-basemap" -->

## Source Code

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="addFireflyBasemap"></button>
<pre><code class="lang-ts">// Add Firefly basemap
Layer.fromPortalItem({
  portalItem: {
    id: "a66bfb7dd3b14228bf7ba42b138fe2ea"
  }
}).then(function(layer) {
  map.add(layer);
});</code></pre>
</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/template/firefly-basemap/" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-survey.png" -->

---

<!-- .slide: data-background="images/bg-2.png" -->

## Thank you


