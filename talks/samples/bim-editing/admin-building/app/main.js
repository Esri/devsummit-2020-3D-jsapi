require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/Layer",
  "esri/widgets/LayerList",
  "./../../support/widgets.js",
  "dojo/domReady!"
], function (
  Map,
  SceneView,
  Layer,
  LayerList,
  widgetsSupport,
) {

  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
  });

  const view = new SceneView({
    map,
    container: "viewDiv",
    // camera: {"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":19217739.314622313,"y":-5392869.574006113,"z":85.33910750970244},"heading":133.74224876471538,"tilt":63.801079199922754},
    camera: {"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":-13045079.449431838,"y":4036762.002486097,"z":446.70295623037964},"heading":315.63260562077835,"tilt":72.89304450457234},
    environment: {
      background: {
        type: "color",
        color: [92, 92, 92, 1]
      },
      starsEnabled: false,
      atmosphereEnabled: false
    }
  });
  widgetsSupport.createFullscreen(view);
  window.view = view;

  var layerList = new LayerList({
    view: view
  });
  // Adds widget below other elements in the top left corner of the view
  view.ui.add(layerList, {
    position: "bottom-right"
  });

  view.when().then(function() {
    map.ground.opacity = 0;
  });

  function onClick(buttonId, onclick) {
    var button = parent.document.getElementById(buttonId);
    if (button && onclick) {
      button.onclick = onclick;
    }
  }

  function addBSL() {
    Layer.fromArcGISServerUrl({
      url: "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/Admin_Building_v17/SceneServer",
    }).then(function(layer) {
      map.add(layer);
    });
  }

  onClick("addBuildingSceneLayer", addBSL);

  // Check what slide we are showing
  var slide = parent && parent.Reveal && parent.Reveal.getCurrentSlide().dataset.title;
  if (slide === "slide-where-we-add-firefly-basemap") {

  }

});
