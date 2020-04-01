require([
  "esri/Map",
  "esri/WebMap",
  "esri/views/SceneView",
  "esri/views/MapView",
  "esri/layers/BuildingSceneLayer",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",
  "esri/Graphic",
  "esri/widgets/LayerList",
  "esri/widgets/Editor",
  "esri/widgets/Sketch",
  "esri/widgets/Sketch/SketchViewModel",
  "dojo/domReady!"
], function (
  WebMap,
  Map,
  SceneView,
  MapView,
  BuildingSceneLayer,
  FeatureLayer,
  GraphicsLayer,
  Graphic,
  LayerList,
  Editor,
  Sketch,
  SketchViewModel
) {
  const layer = new GraphicsLayer({
    elevationInfo:
    {
      mode:"relative-to-ground",
      offset: 100
    }
  });

  const map = new Map({
    basemap: "dark-gray-vector",
    layers: []
  });

  const view = new SceneView({
    container: "viewDiv",
    ui:{
      components:[]
    },
    camera:{
      position: {
        x: -9811988.623320831,
        y: 5126044.744611156,
        z: 642.7415023585781,
        spatialReference: {
          wkid: 102100
        }
      },
      heading: 330.7715067935206,
      tilt: 59.48439877083919
    },
    map: map,
    zoom: 5,
    center: [90, 45]
  });


  function onClick(buttonId, onclick) {
    var button = parent.document.getElementById(buttonId);
    if (button && onclick) {
      button.onclick = onclick;
    }
  }

  function addSketch(){
    view.map.add(layer);
    const sketch = new Sketch({
      layer: layer,
      view: view,
      // graphic will be selected as soon as it is created
      creationMode: "update"
    });
    view.ui.add(sketch, "top-right");  
  }
  onClick("addSketch", addSketch);


});
