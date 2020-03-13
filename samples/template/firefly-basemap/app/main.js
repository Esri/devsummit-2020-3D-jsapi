require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/Layer",
  "./../../support/widgets.js",
  "dojo/domReady!"
], function (
  Map,
  SceneView,
  Layer,
  widgetsSupport,
) {

  // Check what slide we are showing
  if (parent.Reveal.getCurrentSlide().dataset.title === "slide-where-we-add-firefly-basemap") {

    const map = new Map({
      basemap: "topo-vector",
    });

    const view = new SceneView({
      map,
      container: "viewDiv",
    });

    widgetsSupport.createFullscreen(view);
    window.view = view;

    var button = parent.document.getElementById("addFireflyBasemap");
    button.onclick = function() {
      Layer.fromPortalItem({
        portalItem: {
          id: "a66bfb7dd3b14228bf7ba42b138fe2ea"
        }
      }).then(function(layer) {
        map.add(layer);
      });
    };

  }

});
