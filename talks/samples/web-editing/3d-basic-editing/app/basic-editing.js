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
  "./../../support/widgets.js",
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
  widgetsSupport,
  Editor,
  Sketch,
  SketchViewModel
) {

  const map = new Map({
    basemap: "topo-vector",
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
          x: -9812953.813463394,
          y: 5126791.178243398,
          z: 2044.6466244487092,
          spatialReference: {
            wkid: 102100
          }
        }
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

  function addSketch(){
    var graphicsLayer = new GraphicsLayer();

    // add layer to view
    view.map.add(graphicsLayer);

    // create SketchViewModel
    const sketchViewModel = new SketchViewModel({
     view: view,
     layer: graphicsLayer
    });

    // create
    sketchViewModel.create("polygon");
  }
  onClick("addSketch", addSketch);

  function addSketch2(){
    var graphicsLayer = new GraphicsLayer({elevationInfo:{
      mode: "relative-to-ground"
    }});
    
    // add layer to view
    view.map.add(graphicsLayer);
    
    // create SketchViewModel
    const sketchViewModel = new SketchViewModel({
      view: view,
      layer: graphicsLayer
    });
    
    // create
    sketchViewModel.create("polyline", {defaultZ: 50});
  }
  onClick("addSketch2", addSketch2);

  var graphic = null;
  var sketchViewModel = null;

  function createSVM(){
    var graphicsLayer = new GraphicsLayer();

    graphic = new Graphic({
      geometry: {
        type: "point",
        x: -9812953.813463394, y: 5126791.178243398, z: 250.0,
        spatialReference: { wkid: 102100 }
    },
      symbol: {
        type: "point-3d",
        symbolLayers:[
          {
            type: "object",
            width: 50,
            resource:{ primitive: "cube" },
            material:{ color: "green" }
          }
        ]
      }
    });
    graphicsLayer.add(graphic);
    
    // add layer to view
    view.map.add(graphicsLayer);
    
    // create SketchViewModel
    sketchViewModel = new SketchViewModel({
      view: view,
      layer: graphicsLayer
    });
  }
  //createSVM();

  function updateSketch(){
    // update
    sketchViewModel.update(graphic);
  }
  onClick("updateSketch", updateSketch);


  function updateSketch2(){
    sketchViewModel.update(graphic, {enableZ: false});
  }
  onClick("updateSketch2", updateSketch2);

  function updateSketch3(){
    sketchViewModel.update(graphic, {enableZ: false});
  }
  onClick("updateSketch3", updateSketch3);

  function updateSketch4(){
    sketchViewModel.update(graphic, {enableZ: false, enableRotation: false, enableScaling: false});
  }
  onClick("updateSketch4", updateSketch4);

  //*/
  /*
  var layerList = new LayerList({
    view: view
  });
  */

  /*
  view.when().then(function() {
    map.ground.opacity = 0;
  });
  */

  /*
  function onClick(buttonId, onclick) {
    var button = parent.document.getElementById(buttonId);
    if (button && onclick) {
      button.onclick = onclick;
    }
  }

  function addBSL() {
    map.add(buildingSceneLayer);
  }

  function addLayerList() {
    view.ui.add(layerList, {
      position: "bottom-right"
    });
  }
  */

  /*
  function filterStructural() {

    buildingSceneLayer.allSublayers.forEach(l => {

      if (l.title === "Floors" || l.startWith("Structural")) {
        l.visible = true;
      } else {
        l.visible = l.type === "building-group";
      }
    });
  }

  onClick("addBuildingSceneLayer", addBSL);

  onClick("filterBuildingSceneLayer", filterStructural);

  // Check what slide we are showing
  var slide = parent && parent.Reveal && parent.Reveal.getCurrentSlide().dataset.title;
  if (slide === "slide-bsl-sublayers") {
    addBSL();
    addLayerList();
  }
  */

});
