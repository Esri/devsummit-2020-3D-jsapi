
<!-- .slide: data-background="images/bg-1.png" -->

## ArcGIS API for JavaScript<br/> <span style="color:#D9BA6F">Fundamentals for Building 3D Web Apps</span>

<!--<p></p>-->
<p style="font-size: 80%"><br/>
  Javier Gutierrez, Esri R&amp;D Center Z&uuml;rich<br/>
  Thomas Other, Esri R&amp;D Center Z&uuml;rich
</p>

<span style="font-size: 70%">https://esri.github.io/devsummit-2020-3D-jsapi/fundamentals-3d-web-apps.html</span>

---

<!-- .slide: data-background="images/bg-2.png" -->


## Preface

- This session is about the <span style="color:#D9BA6F">fundamentals of 3D in the Web</span><br>
using the ArcGIS API for JavaScript
- And about <span style="color:#D9BA6F">writing JavaScript & HTML!</span>

<!-- Esri provides configurable applications
  - [SceneViewer](https://www.esri.com/en-us/arcgis/products/3d-scene-viewer)
  - [Story Maps](https://storymaps.arcgis.com/en/)
  - [Web AppBuilder](https://www.esri.com/en-us/arcgis/products/web-appbuilder/overview)
-->

---

<!-- .slide: data-background="images/bg-3.png" -->
### <b>Agenda</b>
- 3D Platform | Data | API | WebScene
- Create a simple 3D app
- Core concepts of the API
- Working with the 3D SceneView
- Feature highlights

<br>

---

<!-- .slide: data-background="images/bg-2.png" -->

### The ArcGIS <span style="color:#D9BA6F">3D</span> Platform

<img class="plain" src="./images/fundamentals-3d-web-apps/platform-3d.png" height=500 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Out-of-the-box</span> 3D Web Apps

<img class="plain" src="./images/fundamentals-3d-web-apps/ootb-appsamples.png" height=500 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Building Apps</span> with the ArcGIS 3D Platform

<img class="plain" src="./images/fundamentals-3d-web-apps/platform-3d-js.png" height=500 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Custom 3D</span> Web Apps

<img class="plain" src="./images/fundamentals-3d-web-apps/custom-samples.png" height=500 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### ArcGIS API for JavaScript

<span style="font-size: 75%">https://js.arcgis.com</span>
<br>
<img class="plain" src="./images/fundamentals-3d-web-apps/js-api-home.png" height="550" background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <b>ArcGIS API for JavaScript</b>

- Visual mapping (2D & 3D), components and widgets
- Support for various different layer types (data sources)
- Integration with the ArcGIS platform
<br/>(security, sign-in, premium services, …)

<br/>

<b><span style="color:#D9BA6F">Get it today</span></b><br>
<span style="font-size: 75%">Find doc & samples to get started at https://js.arcgis.com</span>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Desktop browser </span>3D Requirements

- Modern hardware, especially Graphics Card
- Latest web browsers with WebGL support
  - Chrome
  - Firefox
  - Safari
  - Edge
<br>
<small>Internet Explorer 11 is not recommended</small>


---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Mobile browser </span>3D Requirements

- Officially supported devices
  - iOS — iPhone 8/XS/11, iPad Pro (Safari)
  - Android — Samsung S8/S9/S10, Tab S3/S4 (Chrome)

   <span style="font-size: 75%">*Other devices/browsers may work, use modern devices with > 2GB memory</span>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Data</span> considerations

- <span style="color:#D9BA6F"><b>2D data<b></span>
  - Features
  - Maps
  - Tiles (raster, vector)
  - Elevation
<br>

- <span style="color:#D9BA6F"><b>3D data as Scene Layers (open i3s format)</b></span>
  - 3D Object
  - Integrated Mesh
  - Point Cloud
  - Point
  - Building

---

<!-- .slide: data-background="images/bg-2.png" -->

### <span style="color:#D9BA6F">Content </span>for your apps

<img class="plain" src="./images/fundamentals-3d-web-apps/content-for-apps.png" background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Publish a layer in ArcGIS Pro

<img class="plain" src="./images/fundamentals-3d-web-apps/publish-pro-layer.png" height=600 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Publish a web scene in ArcGIS Pro

<img class="plain" src="./images/fundamentals-3d-web-apps/publish-pro.png" height=600 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <b>Web Scene Concept</b>

- <span style="color:#D9BA6F">Vehicle </span> for cross platform 3D capabilities
  - <span style="color:#D9BA6F">Collection </span>of layers, environment settings, slides
  - Defines the <span style="color:#D9BA6F">content </span>of a 3D scene
- <span style="color:#D9BA6F">Stored</span> in <span style="color:#D9BA6F">ArcGIS Online or Enterprise</span> as `portal-item`
  - Read and write Web Scenes across the ArcGIS platform<br>
(ArcGIS Pro, Web Apps, ArcGIS Runtime)
  - Serialized as <span style="color:#D9BA6F">JSON</span>
<p></p>

<img class="plain" style="margin-top: 50px" height=185px src="./images/fundamentals-3d-web-apps/platform-webscene.png" background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Coordinate System Support for Scenes

|              |     |              |
|--------------|-----|--------------|
| One Scene | -> | One coordiante system |
| Cached data | -> | must match defined system |
| Feature & dynamic data | -> | projected on-the-fly |

<p class="fragment" data-fragment-index="1">Global vs. Local Scenes</p>

<!--
- One scene -> One coordiante system
- Cached data -> must match defined system
- Feature & dynamic data -> projected on-the-fly
- Coordiante systems -> type of scenes & capabilities

- Each scene has its coordinate system defined.
- Cached data needs to be provided in the defined system.
- Feature and dynamic data is projected on the fly.
- Coordinate systems define the type of scenes and its capabilities.
-->

---

<!-- .slide: data-background="images/bg-2.png" -->

### <b>Global scenes</b>

Visualize data on the globe

<img class="plain" src="./images/fundamentals-3d-web-apps/globalscene.png" height=500 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Global scenes

Choose one of the geographic coordinate systems:
  - WebMercator (wkid: 3857) <span style="font-size:75%">- default</span>
  - WGS84 (wkid: 4326)
  - CGCS2000 (wkid: 4490) <span style="font-size:75%">**- China Geodetic Coordinate System 2000*</span>

---

<!-- .slide: data-background="images/bg-2.png" -->

### <b>Local scenes</b>

Visualize data in a local planar way

<img class="plain" src="./images/fundamentals-3d-web-apps/localscene.png" height=500 background=none>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Local scenes

Choose one of the following options
- WebMercator (wkid: 3857)
- Any Projected Coordinate System

Clip to your area of interest

---

<!-- .slide: data-background="images/bg-2.png" -->

### Web scene specification

<img class="plain" src="./images/fundamentals-3d-web-apps/webscene-spec.png" height=450 background=none><br>
<span style="font-size: 80%; margin-top: 0px">https://developers.arcgis.com/web-scene-specification</span>

---

<!-- .slide: data-background="images/bg-3.png" -->

## <b>Create a 3D App</b>

<br/>

<!--<div style="margin-top: -50px; font-size: 80%; font-style: italic;">with the ArcGIS API for JavaScript</div>-->

---

<!-- .slide: data-background="images/bg-2.png" -->

### Steps

1. Create basic HTML
2. Load API
3. Add Web Scene
4. Go!

---

<!-- .slide: data-background="images/bg-2.png" -->
<!--

## Presenter Note ##

my-styles.css is not explained in detail, but users need to know that
they have to set the size of the view, otherwise it will not render.
The minimum setting is to make the html, body and viewDiv all 100%, i.e.:

      html, body, #viewDiv {
        padding: 0;
        margin:0;
        width: 100%;
        height: 100%
      }
-->



## Creating basic HTML

<div class="code-snippet" style="max-width: 700px; font-size: 115%; float: none; margin: auto;">
    <pre><code style="margin-bottom: -30px;" class="lang-html">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;my-styles.css&quot;&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;link rel=&quot;stylesheet&quot; href=&quot;//js.arcgis.com/4.15/esri/css/main.css&quot;&gt;
    &lt;script src=&quot;//js.arcgis.com/4.15/&quot;&gt;&lt;/script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="lang-html">
    &lt;title&gt;My first 3D web app&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;viewDiv&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
      require([
        "esri/WebScene",
        "esri/views/SceneView"
      ], function(WebScene, SceneView) {
        var scene = new WebScene({
          portalItem: {
            id: "69af87076d884670995217536d60f150"
          }
        });
        var view = new SceneView({
          container: "viewDiv",
          map: scene
        });
      });
  </code>
  <code class="lang-html">
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
    </code></pre>
</div>


---

<!-- .slide: data-background="images/bg-2.png" -->

## Load API

<div class="code-snippet" style="max-width: 700px; font-size: 115%; float: none; margin: auto;">
    <pre><code style="margin-bottom: -30px;" class="grey">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;my-styles.css&quot;&gt;
  </code>
  <code style="margin-bottom: -30px;" class="lang-html">
    &lt;link rel=&quot;stylesheet&quot; href=&quot;//js.arcgis.com/4.15/esri/css/main.css&quot;&gt;
    &lt;script src=&quot;//js.arcgis.com/4.15/&quot;&gt;&lt;/script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;title&gt;My first 3D web app&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;viewDiv&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
      require([
        "esri/WebScene",
        "esri/views/SceneView"
      ], function(WebScene, SceneView) {
        var scene = new WebScene({
          portalItem: {
            id: "69af87076d884670995217536d60f150"
          }
        });
        var view = new SceneView({
          container: "viewDiv",
          map: scene
        });
      });
  </code>
  <code class="grey">
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
    </code></pre>
    </div>


---

<!-- .slide: data-background="images/bg-2.png" -->

## Load modules

<div class="code-snippet" style="max-width: 700px; font-size: 115%; float: none; margin: auto;">
    <pre><code style="margin-bottom: -30px;" class="grey">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;link rel=&quot;stylesheet&quot; href=&quot;my-styles.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;//js.arcgis.com/4.15/esri/css/main.css&quot;&gt;
    &lt;script src=&quot;//js.arcgis.com/4.15/&quot;&gt;&lt;/script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;title&gt;My first 3D web app&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;viewDiv&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="lang-js">
      require([
        "esri/WebScene",
        "esri/views/SceneView"
      ], function(WebScene, SceneView) {
  </code>
  <code style="margin-bottom: -30px;" class="grey">
        var scene = new WebScene({
          portalItem: {
            id: "69af87076d884670995217536d60f150"
          }
        });
        var view = new SceneView({
          container: "viewDiv",
          map: scene
        });
  </code>
  <code style="margin-bottom: -30px;" class="lang-js">
      });
  </code>
  <code class="grey">
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
    </code></pre>
    </div>


---

<!-- .slide: data-background="images/bg-2.png" -->

## Load the Webscene

<div class="code-snippet" style="max-width: 700px; font-size: 115%; float: none; margin: auto;">
    <pre><code style="margin-bottom: -30px;" class="grey">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;link rel=&quot;stylesheet&quot; href=&quot;my-styles.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;//js.arcgis.com/4.15/esri/css/main.css&quot;&gt;
    &lt;script src=&quot;//js.arcgis.com/4.15/&quot;&gt;&lt;/script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;title&gt;My first 3D web app&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;viewDiv&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
      require([
        "esri/WebScene",
        "esri/views/SceneView"
      ], function(WebScene, SceneView) {
  </code>
  <code style="margin-bottom: -30px;" class="lang-js">
        var scene = new WebScene({
          portalItem: {
            id: "69af87076d884670995217536d60f150"
          }
        });
  </code>
  <code style="margin-bottom: -30px;" class="grey">
        var view = new SceneView({
          container: "viewDiv",
          map: scene
        });
      });
  </code>
  <code class="grey">
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
    </code></pre>
</div>
<p class="fragment" data-fragment-index="1" style="position: absolute; top: 100px; max-width: 800px; margin-left: -50%; left: 70%;">
  <img src="./images/fundamentals-3d-web-apps/webscene-portalitem.png" alt="">
</p>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Create the view

<div class="code-snippet" style="max-width: 700px; font-size: 115%; float: none; margin: auto;">
    <pre><code style="margin-bottom: -30px;" class="grey">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;link rel=&quot;stylesheet&quot; href=&quot;my-styles.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;//js.arcgis.com/4.15/esri/css/main.css&quot;&gt;
    &lt;script src=&quot;//js.arcgis.com/4.15/&quot;&gt;&lt;/script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
    &lt;title&gt;My first 3D web app&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;viewDiv&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="grey">
      require([
        "esri/WebScene",
        "esri/views/SceneView"
      ], function(WebScene, SceneView) {
  </code>
  <code style="margin-bottom: -30px;" class="grey">
        var scene = new WebScene({
          portalItem: {
            id: "69af87076d884670995217536d60f150"
          }
        });
  </code>
  <code style="margin-bottom: -30px;" class="lang-js">
        var view = new SceneView({
          container: "viewDiv",
          map: scene
        });
  </code>
  <code class="grey">
      });
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
    </code></pre>
    </div>


---

<!-- .slide: data-background="images/bg-2.png" -->

### Your 3D app is ready to go

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet"  style="font-size:90%">
    <pre style="padding: 0.5em"><code style="margin-bottom: -30px;" class="lang-html">
  &lt;!DOCTYPE html&gt;
  &lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;utf-8&quot;&gt;
  </code>
  <code style="margin-bottom: -30px;" class="lang-html">
    &lt;link rel=&quot;stylesheet&quot; href=&quot;my-styles.css&quot;&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;//js.arcgis.com/4.15/esri/css/main.css&quot;&gt;
    &lt;script src=&quot;//js.arcgis.com/4.15/&quot;&gt;&lt;/script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="lang-html">
    &lt;title&gt;My first 3D web app&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;viewDiv&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
  </code>
  <code style="margin-bottom: -30px;" class="lang-js">
      require([
        "esri/WebScene",
        "esri/views/SceneView"
      ], function(WebScene, SceneView) {
        var scene = new WebScene({
          portalItem: {
            id: "69af87076d884670995217536d60f150"
          }
        });
        var view = new SceneView({
          container: "viewDiv",
          map: scene
        });
      });
  </code>
  <code class="lang-html">
    &lt;/script&gt;
  &lt;/body&gt;
  &lt;/html&gt;
    </code></pre>
    </div>


  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/setup-snippet-1.html" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-3.png" -->

## <b>Core concepts of the API</b>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Basics

- Unified 2D and 3D [`Map`](https://developers.arcgis.com/javascript/latest/api-reference/esri-Map.html) data model:
  - [`Layer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html) &mdash; Fundamental Map component
  - [`Renderer`](https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-Renderer.html) &mdash; Visualization Methods
  - [`Symbol`](https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-Symbol.html) &mdash; Symbolization Instructions
- Common [`View`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-View.html) subclass between 2D and 3D:
  - [`MapView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-MapView.html) &mdash; 2D Visualization
  - [`SceneView`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html) &mdash; 3D Visualization

---

<!-- .slide: data-background="images/bg-2.png" -->

## Architecture
<br/>
<img src="./images/fundamentals-3d-web-apps/concepts-architecture.png" width="60%" style="border: none; background: none; box-shadow: none"/>

---


<!-- .slide: data-background="images/bg-2.png" -->

## MapView & SceneView

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet" style="font-size: 120%;">
  <pre><code class="lang-ts" style="margin-bottom: -20px;">
  const map = new Map({
    basemap: "streets",
    </code>
    <code class="lang-ts" style="margin-bottom: -20px;">
    layers: [new FeatureLayer({
      url: "...USA_States/FeatureServer/0"
    })]
  });
  </code>
  <code class="lang-ts" style="margin-bottom: -20px;">
  const viewLeft = new MapView({
    container: "viewDivLeft",
    </code>
    <code class="lang-ts" style="margin-bottom: -20px;">
    map: map
  });
  </code>
  <code class="lang-ts" style="margin-bottom: -20px;">
  const viewRight = new SceneView({
    container: "viewDivRight",
    </code>
    <code class="lang-ts" style="margin-bottom: -20px;">
    map: map
  });
  </code>
</div>
  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/concepts-2d-3d-parallel.html"></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->


## Object Construction

- Unified object construction
- &ldquo;Auto-casting&rdquo; implicitly calls constructor of corresponding type


<div class="code-snippet" style="font-size: 140%; max-width: 600px; float: none; margin: auto;">
  <pre><code class="lang-ts">
  var view = new SceneView({
    map: {
      basemap: "topo"
    },
    </code>
    <code class="lang-ts">
    extent: {
      xmin: -180, xmax: 180, ymin: -90, ymax: 90,
      spatialReference: 120100
    },
    </code>
    <code class="lang-ts">
    environment: {
      lighting: {
        date: "Sun Mar 15 2020 18:00:00 GMT-8"
      }
    }
  });
  </code></pre>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Object Properties

- Properties can be observed and watchers receive change notifications

<div class="two-columns">
  <div class="left-column" style="width: unset;">

  <div class="code-snippet" style="font-size: 100%;">
  <button class="play" id="scene-view-watches-button01"></button>
  <pre><code class="lang-ts">
  view.watch("center", (value) => {
    // Called whenever the center property value has changed
    console.log("center set to:", value.longitude, value.latitude);
  });
  </code>
  <code class="lang-ts">
  // Auto-cast allows omitting constructing a new Point instance
  view.center = {
    x: -115.94,
    y: 33.8
  };
  </code></pre>
  </div>

  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/concepts-watches.html"></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Promises

- All asynchronous operations are modeled as a `Promise`
- `Promises` are chainable and allow writing sequential asynchronous code
- Many classes signal readiness through promises ([`SceneView.when()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html), [`Layer.load()`](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-Layer.html))

<div class="code-snippet" style="font-size: 140%; max-width: 600px; float: none; margin: auto;">
  <pre style="padding: 0 0.75em 0 0"><code class="lang-ts">
  view
    .when(() => {
      // View is ready to be interacted with, load the layer
      return layer.load();
    })
    .then(() => {
      // Layer is now loaded, project using geometry service
      return geometryService.project([layer.fullExtent]);
    })
    .then((projected) => {
      // Extent has been projected, we can now go to it
      return view.goTo(projected[0]);
    })
    .then(() => {
      // Here the gotTo animation has finished
    });
  </code></pre>
</div>

---

<!-- .slide: data-background="images/bg-3.png" -->

## <b>Data Model</b>

- Layers
- Filtering
- Querying

---


<!-- .slide: data-background="images/bg-2.png" -->

## Layers

|              |  |
|--------------|--|
| `FeatureLayer` | <small>2D & 3D</small> |
| `CSVLayer` | <small>2D & 3D</small> |
| `StreamLayer` | <small>2D & 3D</small> |
| `MapImageLayer` | <small>2D & 3D</small> |
| `ImageryLayer` | <small>2D & 3D</small> |
| `WMSLayer` | <small>2D & 3D</small> |
| `OpenStreetMapLayer` | <small>2D & 3D</small> |
| `TileLayer` | <small>2D & 3D</small> |
| `WebTileLayer` | <small>2D & 3D</small> |
| `WMTSLayer` | <small>2D & 3D</small> |
| `VectorTileLayer` | <small>2D & 3D</small> |
| `ElevationLayer` | <small> 3D only</small> |
| `SceneLayer` | <small> 3D only</small> |
| `IntegratedMeshLayer` | <small> 3D only</small> |
| `PointCloudLayer` | <small> 3D only</small> |
| `BuildingSceneLayer` | <small> 3D only</small> |

---

<!-- .slide: data-background="images/bg-2.png" -->

## Adding a `Layer`

<div class="code-snippet" style="font-size: 140%; max-width: 600px; float: none; margin: auto;">
  <pre><code style="margin-bottom: -20px;" class="lang-js">
  require([
    "esri/views/SceneView",
    "esri/layers/SceneLayer",
    "dojo/domReady!"
  ], function(SceneView, SceneLayer) {
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    var view = new SceneView({
      container: "viewDiv",
      map: {
        basemap: "topo"
      }
    });
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    var layer = new SceneLayer({
      url: "...services/NYCatt/SceneServer",
    });
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    map.add(layer);
  });
  </code></pre>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Working with layers

<div class="code-snippet" style="max-width: 800px; font-size: 140%; float: none; margin: auto;">
  <pre><code class="lang-ts">
class SceneLayer {
  // Filtering
  definitionExpression: string;
</code><code class="lang-ts">
  // Renderer assigns each feature a color and style
  renderer: Renderer;
</code><code class="lang-ts">
  // Querying
  queryFeatures(params: Query): FeatureSet;
  queryExtent(params: Query): Extent;
  ...
}
  </code></pre>
</div>

---



<!-- .slide: data-background="images/bg-2.png" -->

## Server side filtering

<div class="two-columns">
  <div class="left-column">
<div class="code-snippet" style="font-size: 140%;">
<button class="play" id="mesh-filtering-button01"></button>
<pre><code class="lang-js">// only show buildings
// constructed before 1900
sceneLayer.definitionExpression =
  "CNSTRCT_YR < 1900 AND CNSTRCT_YR > 0";
</code></pre>
</div>

<div class="code-snippet" style="font-size: 140%;">
<button class="play" id="mesh-filtering-button03"></button>
<pre><code class="lang-js">// reset filter
sceneLayer.definitionExpression = null;
</code></pre>
</div>

<div class="code-snippet" style="font-size: 140%;">
<button class="play" id="mesh-filtering-button02"></button>
<pre><code class="lang-js">// only show tall buildings
sceneLayer.definitionExpression =
  "HEIGHTROOF > 300";
</code></pre>
</div>

  </div>
  <div class="right-column">
    <iframe id="scene-layer-mesh2" data-src="./samples/fundamentals-3d-web-apps/concepts-definitionExpression.html" ></iframe>
  </div>
</div>

---


<!-- .slide: data-background="images/bg-2.png" -->

## Client side filtering

<div class="two-columns">
  <div class="left-column">

  <div class="code-snippet" style="font-size: 100%;">
  <pre><code style="margin-bottom: -20px;" class="lang-js">
  require([
    "esri/geometry/Polygon",
    "esri/layers/SceneLayer",
    "esri/views/SceneView",
    "esri/views/layers/support/FeatureFilter",
    "dojo/domReady!"
  ], function(Polygon, SceneLayer, SceneView, FeatureFilter) {
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    var layer = new SceneLayer({
      url: "...services/NYCatt/SceneServer",
    });
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    var view = new SceneView({
      container: "viewDiv",
      map: {
        basemap: "topo",
        layers: [ layer ]
      }
    });
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    view.whenLayerView(layer).then((layerView) => {
      layer.filter = new FeatureFilter({
        geometry: new Polygon({ ... }),
        spatialRelationship: "contains"
      });
    });
  });
  </code></pre>
  </div>

  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/scenelayerview-filter.html"></iframe>
  </div>
</div>


---

<!-- .slide: data-background="images/bg-2.png" -->

## Client side querying

<div class="two-columns">
  <div class="left-column">

  <div class="code-snippet" style="font-size: 100%;">
  <pre><code style="margin-bottom: -20px;" class="lang-js">
  require([
    "esri/geometry/Polygon",
    "esri/layers/SceneLayer",
    "esri/views/SceneView"
    "dojo/domReady!"
  ], function(Polygon, SceneLayer, SceneView) {
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    var layer = new SceneLayer({
      url: "...services/NYCatt/SceneServer",
    });
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    var view = new SceneView({
      container: "viewDiv",
      map: {
        basemap: "topo",
        layers: [ layer ]
      }
    });
  </code>
  <code style="margin-bottom: -20px;" class="lang-js">
    view.whenLayerView(layer).then((layerView) => {
      var query = layerView.createQuery();
      query.geometry = new Polygon({ ... });
      layerView.queryFeatures(query).then((result) {
        ...
      });
    });
  });
  </code></pre>
  </div>

  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/scenelayerview-query-stats.html"></iframe>
  </div>
</div>


---

<!-- .slide: data-background="images/bg-2.png" -->

## Setting Layer style

<div class="two-columns">
  <div class="left-column">
<div class="code-snippet" style="font-size: 100%;">
<button class="play" id="mesh-renderer-button01"></button>
<pre><code class="lang-js">// draw buildings in transparent green
sceneLayer.renderer = {
  type: "simple",
  symbol: {
    type: "mesh-3d",
    symbolLayers: [{
      type: "fill",
      material: {
        color: [144, 238, 144, 0.3]
      }
    }]
  }
};
</code></pre>
</div>

<div class="code-snippet" style="font-size: 100%;">
<button class="play" id="mesh-renderer-button02"></button>
<pre><code class="lang-js">// color buildings by construction year
sceneLayer.renderer = {
 type: "simple",
 visualVariables: [{
   type: "color",
   field: "CNSTRCT_YR",
   stops: [{
       value: 1867,
       color: [69, 83, 122]
     },
     ...
   ]
 }]
};
</code></pre>
</div>

  </div>
  <div class="right-column">
    <iframe id="scene-layer-mesh2" data-src="./samples/fundamentals-3d-web-apps/concepts-renderer.html" ></iframe>
  </div>
</div>

---



<!-- .slide: data-background="images/bg-2.png" -->

## [Underground](https://developers.arcgis.com/javascript/latest/api-reference/esri-Ground.html)

<div class="two-columns">
  <div class="left-column">
<div class="code-snippet" style="font-size: 130%;">
<button class="play" id="underground-button01"></button>
<pre><code class="lang-ts">// Ground object is part of Map/WebScene
const ground = map.ground;</code><code class="lang-ts">
// Set ground to 50% transparent
ground.opacity = 0.5;
</code></pre>
</div>

<div class="code-snippet" style="font-size: 130%;">
<button class="play" id="underground-button02"></button>
<pre><code class="lang-ts">// allow camera to go underground
ground.navigationConstraint = {
  type: "none"
};
</code></pre>
</div>

  </div>
  <div class="right-column">
    <iframe id="scene-layer-mesh2" data-src="./samples/fundamentals-3d-web-apps/concepts-underground.html" ></iframe>
  </div>
</div>

---


<!-- .slide: data-background="images/bg-2.png" -->

## Details about the `WebScene` class

- `Layers`, `Presentation`, ...
- `Basemap` is exactly the same concept as in 2D
- `Ground` defines the ground surface of the scene

<div>
  <img src="./images/fundamentals-3d-web-apps/concepts-architecture2.png" width="50%" style="border: none; background: none; box-shadow: none"/>
</div>

---

<!-- .slide: data-background="images/bg-3.png" -->

## <b>View Concepts</b>

- SceneView
- Camera
- Popups
- Widgets

---

<!-- .slide: data-background="images/bg-2.png" -->

## Working with the [SceneView](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html)

<div class="code-snippet"  style="max-width: 700px; font-size: 140%; float: none; margin: auto;">
  <pre><code class="lang-ts">
  class SceneView {
    // Camera specifies the view
    camera: Camera;
    </code>
    <code class="lang-ts">
    // Animations, framing
    goTo(...);
    </code>
    <code class="lang-ts">
    // Converting coordinate systems
    toScreen(mapPoint: Point): ScreenPoint;
    toMap(screenPoint: ScreenPoint): Point;
    </code>
    <code class="lang-ts">
    // Quality profile
    qualityProfile: string;
  }
  </code></pre>
</div>

---


<!-- .slide: data-background="images/bg-2.png" -->

## [Camera](https://developers.arcgis.com/javascript/latest/api-reference/esri-Camera.html)

- Primary specification of the view is the [`Camera`](https://developers.arcgis.com/javascript/beta/api-reference/esri-Camera.html)


<div class="code-snippet" style="max-width: 800px; font-size: 140%; float: none; margin: auto;">
  <pre ><code class="lang-ts">
class Camera {
  // The position of the camera eye in 3D space (x, y + z elevation)
  position: Point;
  </code><code class="lang-ts">
  // The heading angle (towards north in degrees, [0, 360]°)
  heading: number;
  </code><code class="lang-ts">
  // The tilt angle ([0, 180]°, with 0° straight down, 90° horizontal)
  tilt: number;
}
  </code></pre>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## [Camera](https://developers.arcgis.com/javascript/latest/api-reference/esri-Camera.html)

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet" style="font-size: 130%;">
<button class="play" id="scene-view-camera-button01"></button>
<pre ><code class="lang-ts">
const camera = view.camera.clone();
</code><code class="lang-ts">
// Increment heading of the camera by 5 degrees
camera.heading += 5;
</code><code class="lang-ts">
// Set the modified camera on the view
view.camera = camera;
</code></pre>
</div>


  </div>
  <div class="right-column">
    <iframe id="camera-demo" data-src="./samples/fundamentals-3d-web-apps/concepts-camera.html" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## [goTo](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#goTo)

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet" style="font-size: 140%;">
<button class="play" id="scene-view-go-to-button01"></button>
<pre><code class="lang-ts">
  // target heading = current heading + 30
  var newHeading = view.camera.heading + 30;
</code><code class="lang-ts">
  // go to heading preserves view.center
  view.goTo({
  &nbsp;&nbsp;heading: newHeading
  },{
  &nbsp;&nbsp;speedFactor: 0.5
  });</code></pre>
</div>

<div class="code-snippet" style="font-size: 140%;">
<button class="play" id="scene-view-go-to-button02"></button>
<pre><code class="lang-ts">
  // coordinates (lon, lat) of Mount Fuji
  var newCenter = [138.729050, 35.360638];
  view.goTo({
  &nbsp;&nbsp;center: newCenter,
  &nbsp;&nbsp;zoom: 13
  });</code></pre>
</div>

  </div>
  <div class="right-column">
    <iframe id="go-to-demo" data-src="./samples/fundamentals-3d-web-apps/concepts-goTo.html" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## [toMap](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#toMap)

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet" style="font-size: 130%;">
<pre><code class="lang-js" >// Every time the user clicks on the map...
view.on("click", function(event) {
</code><code class="lang-js">
  // convert the screen position to
  // map coordinates
  var position = view.toMap(event.x, event.y);
</code><code class="lang-js">
  // add a cone symbol at that location
  view.graphics.add(new Graphic({
    geometry: position,
    symbol: coneSymbol
  });
});</code></pre>
</div>

  </div>
  <div class="right-column">
    <iframe id="to-map-to-screen-demo" data-src="./samples/fundamentals-3d-web-apps/concepts-toMap.html" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Quality Profile

- Use [`qualityProfile`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#constraints) and [`quality`](https://developers.arcgis.com/javascript/latest/api-reference/esri-views-SceneView.html#constraints) to control performance and quality of the visualizations
- Affects: Map resolution, scene level detail, anti-aliasing, atmosphere

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet" style="font-size: 100%;">
<pre><code class="lang-ts">
  var view = new SceneView({
    view: "viewDiv",
    map: {
      basemap: "hybrid"
    }
  });
</code></pre>
</div>

<div class="code-snippet" style="font-size: 100%;">
<button class="play" id="scene-view-quality-button01"></button>
<pre><code class="lang-ts">
  view.qualityProfile = "low";
  view.environment.atmosphere.quality = "low";
</code></pre>
</div>

<div class="code-snippet" style="font-size: 100%;">
<button class="play" id="scene-view-quality-button02"></button>
<pre><code class="lang-ts">
  view.qualityProfile = "high";
  view.environment.atmosphere.quality = "high";
</code></pre>
</div>

  </div>
  <div class="right-column">
    <iframe id="go-to-demo" data-src="./samples/fundamentals-3d-web-apps/sceneview-quality.html" ></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Popups

<div class="two-columns">
  <div class="left-column">
<div>
Open it programmatically:
</div>
      <div class="code-snippet" style="font-size: 140%;margin-top: 30px;">
        <pre><code class="lang-js">
  view.on("click", function(event) {
    event.stopPropagation();
    view.popup.open({
      title: "Reverse geocode: ["
        + event.mapPoint.longitude
        + ", " + event.mapPoint.latitude
        + "]",
      location: event.mapPoint
    });
  });
        </code></pre>
      </div>

  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/setup-snippet-3.html"></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Popup templates

<div class="two-columns">
  <div class="left-column">
<div>Enable on a layer:</div>
  <div class="code-snippet" style="font-size: 120%;margin-top: 20px;">
    <pre style="padding: 0.5em;"><code class="lang-js" style="margin-bottom: 20px;">
  layer.popupEnabled = true;
</code></pre></div>

<br><br>
<div>Configure popup:</div>
    <div class="code-snippet" style="font-size: 120%;">
      <pre style="padding: 0.5em;"><code class="lang-js">
  var template = {
    title: "Building <b>{NAME}</b>",
    content: "This building has an enery consumption<br/>"
      + "of <b>{ElectricUse}</b> kBTU, with a score "
      + "of <b>{StarScore}</b>."
  };
  layer.popupTemplate = template;
      </code></pre>
    </div>
  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/setup-snippet-4.html"></iframe>
  </div>
</div>

---

<!-- .slide: data-background="images/bg-2.png" -->

## Widgets

<div style="max-width:70%;margin: auto; margin-bottom: 50px;">Widgets are UI components that add functionalities to your scene.<br/><br/> The API provides ready-to-use widgets, for example:</div>

- `Legend`
- `LayerList`
- `Search`
- `LineOfSight`
- ...


---

<!-- .slide: data-background="images/bg-2.png" -->

## Adding a widget

<div class="two-columns">
  <div class="left-column">

<div class="code-snippet" style="font-size: 140%;">
  <pre><code style="margin-bottom: -20px;" class="lang-js">
  require([
    // ...
    "esri/widgets/Search",
    "dojo/domReady!"
  ], function(
    WebScene,
    SceneView,
    FeatureLayer,
    Search
  ) {
    // ...
    </code>
    <code style="margin-bottom: -20px;" class="lang-js">
    var searchWidget = new Search({
      view: view
    });
    </code>
    <code style="margin-bottom: -20px;" class="lang-js">
    view.ui.add(searchWidget, {
      position: "top-right"
    });
  });
  </code></pre>
</div>


  </div>
  <div class="right-column">
    <iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/setup-snippet-5.html"></iframe>
  </div>
</div>

---

<!-- .slide: data-background="./images/bg-3.png" -->

## <b>Feature Highlights</b>

- 3D Editing
- Integrated Mesh draping
- Line of sight widget

---

<!-- .slide: data-background="images/bg-2.png" -->

### 3D Editing

<iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/features-editing.html"></iframe>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Integrated Mesh draping

<iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/features-im-draping.html"></iframe>

<table>
<tr><td><small>Data provided by:</small></td></tr>
<tr><td><img src ="./images/fundamentals-3d-web-apps/vricon.png"></td></tr>
</table>

---

<!-- .slide: data-background="images/bg-2.png" -->

### Line of sight

<iframe id="scene-view-map-view" data-src="./samples/fundamentals-3d-web-apps/features-los.html"></iframe>

---

<!-- .slide: data-background="images/bg-3.png" -->

<img class="plain" src="./images/fundamentals-3d-web-apps/esri-science-logo-white.png" background=none>
