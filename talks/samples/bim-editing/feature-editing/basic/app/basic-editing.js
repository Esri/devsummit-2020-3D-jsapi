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

  const map = new Map({
    basemap: "dark-gray-vector",
    ground: "world-elevation",
    layers:[
      new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Police_routes/FeatureServer/0"
      }),
      new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Crime_Map_Demo/FeatureServer/0"
      })
    ]
  });

  var view = new SceneView({
      container: "viewDiv",
      map: map,
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
      ui:{
        components: []
      },
      popup: {
          autoOpenEnabled: false //disable popups
      }
  });
  parent.window.view = view;

  
  function onClick(buttonId, onclick) {
    var button = parent.document.getElementById(buttonId);
    if (button && onclick) {
      button.onclick = onclick;
    }
  }

  function addEditor(){
    // Create the Editor 💥
    var editor = new Editor({ view: view });
    view.ui.add(editor, "top-right");
  }
  onClick("addEditor", addEditor);
});
