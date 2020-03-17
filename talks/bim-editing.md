<!-- .slide: data-background="images/bg-1.png" data-title="add-scene-layer" class="title" -->

# ArcGIS API for JavaScript
## Create 3D planning web apps using <br />BIM- and editing capabilities



David Koerner, Esri R&D Center Zürich \
Arno Fiva, Esri R&D Center Zürich

2020 ESRI DEVELOPER SUMMIT​ | Palm Springs, CA

---

<!-- .slide: data-background="images/bg-3.png" -->

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

<!-- .slide: data-background="images/bg-2.png" -->

## i3s Specification

https://github.com/Esri/i3s-spec/blob/master/docs/1.7/BSL_ReadMe.md

<a href="https://github.com/Esri/i3s-spec/blob/master/docs/1.7/BSL_ReadMe.md" target="_blank">

![i3s BSL Spec](./images/bim-editing/i3s-spec.gif)

</a>


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
const buildingLayer = new BuildingSceneLayer({
  portalItem: {
    id: "64f68adf72474330b195ba2718a8d3e0"
  }
});

// Add to scene
map.add(buildingLayer);
```

```ts
// Load using service URL
const buildingLayer = new BuildingSceneLayer({
  url: "https://tiles.arcgis.com/.../services/" +
   "Admin_Building_v17/SceneServer"
});

// Add to scene
map.add(buildingLayer);
```

</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/bim-editing/visualization/" ></iframe>
  </div>
</div>


---

<!-- .slide: data-background="images/bg-2.png" data-title="slide-bsl-sublayers" -->

## Sublayers

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="filterBuildingSceneLayer"></button>

```ts
// Iterate through all sublayers
buildingLayer.allSublayers.forEach(l => {

  if (l.title === "Floors" || l.startWith("Structural")) {
    l.visible = true;
  } else {
    l.visible = l.type === "building-group";
  }
});
```

<div class="fragment">

```ts
// Exterior shell (simplified, no interior details)
const shell = buildingLayer.allSublayers.filter(l =>
  l.modelName === "Overview"
);

// Group layer containing all detailed model
const fullModel = buildingLayer.allSublayers.filter(l =>
  l.modelName === "Overview"
);

```

[i3s model names](https://github.com/Esri/i3s-spec/blob/master/docs/1.7/subLayerModelName.md)

</div>

</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/bim-editing/visualization/" ></iframe>
  </div>
</div>


---

<!-- .slide: data-background="images/bg-2.png" data-title="slide-bsl-renderer" -->

## Renderer

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="renderBuildingSceneLayer"></button>

```ts
// Color windows green
const windowLayer = buildingLayer
  .allSublayers.find(l => l.title === "Windows");

windowLayer.renderer = new SimpleRenderer({

  symbol: new MeshSymbol3D({
    symbolLayers: [
      new FillSymbol3DLayer({
        material: {
          color: [0, 255, 0, 0.8],
        },
        edges: new SolidEdges3D({
          color: [0, 120, 0],
          size: 1,
        })
      })
    ]
  })

});

```


</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/bim-editing/visualization/" ></iframe>
  </div>
</div>


---

<!-- .slide: data-background="images/bg-2.png" data-title="slide-bsl-filter-blocks" -->

## Attribute Filter

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="filterFloor"></button>

```ts
const buildingFilter = new BuildingFilter({
  filterBlocks: [
    {
      filterExpression: "BldgLevel = 3",
      filterMode: {
        type: "solid"
      }
    }
  ]
});

// set the filter in the filters array on the layer
buildingLayer.filters = [buildingFilter];
buildingLayer.activeFilterId = buildingFilter.id;

```


</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/bim-editing/visualization/" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" data-title="slide-bsl-filter-modes" -->

## Filter Modes

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet">
<button class="play" id="filterFloorXRay"></button>

```ts
buildingFilter.filterBlocks.add({
  filterExpression: "BldgLevel < 5",
  filterMode: {
    type: "x-ray"
  }
});
```

</div>
<div class="code-snippet">
<button class="play" id="filterFloorWireFrame"></button>

```ts
buildingFilter.filterBlocks.add({
  filterExpression: "BldgLevel < 5",
  filterMode: {
    type: "wire-frame",
    edges: {
      type: "solid",
      color: [105, 142, 179, 1]
    }
  }
});
```

</div>


  </div>
  <div class="right-column">
    <iframe data-src="./samples/bim-editing/visualization/" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-4.png" -->

# Interactive Tools

---

<!-- .slide: data-background="images/bg-2.png" -->

## Daylight

---


<!-- .slide: data-background="images/bg-2.png" -->

## Slice

---

<!-- .slide: data-background="images/bg-2.png" -->

## Measurements


---

<!-- .slide: data-background="images/bg-2.png" -->

## Line of Sight

---

<!-- .slide: data-background="images/bg-4.png" -->

# Editing



---

<!-- .slide: data-background="images/bg-2.png" -->

## Thank you
