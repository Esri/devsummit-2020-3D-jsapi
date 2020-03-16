<!-- .slide: data-background="images/bg-1.png" data-title="add-scene-layer" class="title" -->

# ArcGIS API for JavaScript
## Create 3D planning web apps using <br />BIM- and editing capabilities



David Koerner, Esri R&D Center Zürich \
Arno Fiva, Esri R&D Center Zürich

2020 ESRI DEVELOPER SUMMIT​ | Palm Springs, CA

---

<!-- .slide: data-background="images/bg-2.png" -->

## Agenda

- Visualization
- Interactive Tools
- Editing

---

<!-- .slide: data-background="images/bg-2.png" -->

## 3D BIM data in the browser

* Intuitive <!-- .element class="fragment" -->
* Share with anyone <!-- .element class="fragment" -->
* Device support, no additional software required <!-- .element class="fragment" -->


---

<!-- .slide: data-background="images/bg-4.png" -->

# Visualizations

---

<!-- .slide: data-background="images/bg-2.png" -->

### BuildingSceneLayer Item

<a href="https://www.arcgis.com/home/item.html?id=64f68adf72474330b195ba2718a8d3e0" target="_blank">

![BuildingSceneLayer Portal Item](./images/bim-editing/portal-item.png)

</a>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Load BuildingSceneLayer

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="addBuildingSceneLayer"></button>

```ts
// Load using portal item
var buildingSceneLayer = new BuildingSceneLayer({
  portalItem: {
    id: "64f68adf72474330b195ba2718a8d3e0"
  }
});

// Add to scene
map.add(buildingSceneLayer);
```

```ts
// Load using service URL
var buildingSceneLayer = new BuildingSceneLayer({
  url: "https://tiles.arcgis.com/.../services/" +
   "Admin_Building_v17/SceneServer"
});

// Add to scene
map.add(buildingSceneLayer);
```

</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/bim-editing/admin-building/" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Sublayers


---

<!-- .slide: data-background="images/bg-2.png" -->

## Filter Blocks

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="addFireflyBasemap"></button>
<pre><code class="lang-ts">// Filter by floor
buildingSceneLayer.filterBlocks = ...</code></pre>
</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/template/firefly-basemap/" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Filter Modes

---

<!-- .slide: data-background="images/bg-2.png" -->

## Thank you
