require([
  "esri/Map",
  "esri/WebMap",
  "esri/views/SceneView",
  "esri/views/MapView",
  "esri/layers/BuildingSceneLayer",
  "esri/layers/FeatureLayer",
  "esri/layers/GraphicsLayer",
  "esri/renderers/SimpleRenderer",
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
  SimpleRenderer,
  Graphic,
  LayerList,
  widgetsSupport,
  Editor,
  Sketch,
  SketchViewModel
) {

  function scatterPoints(){
    const center = [
      -9812953.813463394,
      5126791.178243398,
      250.0
    ];
    const points = [];
    const numElements = 10;
    for(let i=0;i<numElements; ++i){
      const t = i/numElements;
      const x = t*1000;
      const y = 0;
      const size = Math.random();
      const point = {
        type: "point",
        x: center[0] + x,
        y: center[1] + y,
        z: center[2],
        spatialReference: { wkid: 102100 }
      };
      points.push({
        geometry:point,
        symbol: null,
        attributes:{
          ObjectID: i,
          size: 20+t*50,
          rotation: t*90
        }
      });
    }
    return points;
  }

  function getCubeSymbol(){
    return {
      type: "point-3d",
      symbolLayers:[
        {
          type: "object",
          width: 70,
          resource:{ primitive: "cube" },
          material:{ color: "green" }
        }
      ]
    };
  }

  function createCubesFL(){
    const cubes = new FeatureLayer({
      source: scatterPoints(),
      geometryType: "point",
      spatialReference: {
          wkid: 102100
      },
      renderer: new SimpleRenderer({
        symbol:getCubeSymbol()
      }),
      objectIdField: "ObjectID",
      outFields: ["*"],
      fields: [
          {
              name: "ObjectID",
              type: "oid"
          },
          {
              name: "size",
              type: "double",
              defaultValue: 20
          },
          {
            name: "rotation",
            type: "double",
            defaultValue: 0
          }
      ],
      elevationInfo: {mode: "on-the-ground"},
      hasZ: false
    });
    return cubes;
  }

  const cubesFeatureLayer = createCubesFL();
  const map = new Map({
    basemap: "dark-gray-vector",
    ground: "world-elevation",
    layers:[
      cubesFeatureLayer
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

  var editor = null;
  function addEditor(){
    // Create the Editor 💥
    editor = new Editor({ view: view });
    view.ui.add(editor, "top-right");
  }
  addEditor();

  function applySizeVisualVariable(){
    const renderer = cubesFeatureLayer.renderer.clone();
    renderer.visualVariables = [
      {
        type: "size",
        field: "size",
        valueUnit: "meters"
      }
    ];
    cubesFeatureLayer.renderer = renderer;
  }
  onClick("applySizeVisualVariable", applySizeVisualVariable);

  function applyRotationVisualVariable(){
    const renderer = cubesFeatureLayer.renderer.clone();
    renderer.visualVariables = [
      {
        type: "rotation",
        field: "rotation",
        rotationType: "geographic"
      }
    ];
    cubesFeatureLayer.renderer = renderer;
  }
  onClick("applyRotationVisualVariable", applyRotationVisualVariable);

  function visualVariableUpdate(){
    editor.supportingWidgetDefaults = {
      sketch:{
        defaultUpdateOptions:{
          enableRotation: false,
          enableScaling: false
        }
      }
    };
  }
  onClick("visualVariableUpdate", visualVariableUpdate);


  /*
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
  */

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
  /*
  createSVM();

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
  */

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
