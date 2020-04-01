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
  "esri/symbols/PointSymbol3D",
  "esri/symbols/ObjectSymbol3DLayer",
  "esri/renderers/SimpleRenderer",
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
  SketchViewModel,
  PointSymbol3D,
  ObjectSymbol3DLayer,
  SimpleRenderer
) {

  function createCubeSymbol(){
    return new PointSymbol3D({
      symbolLayers:[
        new ObjectSymbol3DLayer({
          width: 50,
          resource:{ primitive: "cube" },
          material:{ color: "green" }
        })
      ]
    });
    /*
    {
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
    */
  }

  function createFL( symbol ){

    const features = [
      {
        geometry: {
          type: "point",
          x: -9812953.813463394,
          y: 5126791.178243398,
          z: 50.0,
          spatialReference: { wkid: 102100 }
        },
        symbol: null
      }
    ];

    var geometryType = "line-3d";
    if( symbol.type == "line-3d" ){
      geometryType = "polyline";
    }else
    if( symbol.type == "polygon-3d" ){
      geometryType = "polygon";
    }else
    if( symbol.type == "point-3d" ){
      geometryType = "point";
    }

    const fl = new FeatureLayer({
      source: features,
      renderer: new SimpleRenderer({symbol:symbol}),
      objectIdField: "ObjectID",
      outFields: ["*"],
      geometryType: geometryType,
      spatialReference: {
          wkid: 102100
      },
      fields: [
          {
              name: "ObjectID",
              type: "oid"
          }
      ],
      title: "cube",
      //elevationInfo: {mode: "absolute-height"},
      //elevationInfo: {mode: "relative-to-scene", offset: 2},
      elevationInfo: {mode: "relative-to-ground"},
      hasZ: true
    });
    return fl;
  }
  const cubeFL = createFL(createCubeSymbol());

  const map = new Map({
    basemap: "dark-gray-vector",
    ground: "world-elevation",
    layers:[
      /*
      new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Police_routes/FeatureServer/0"
      }),
      new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Crime_Map_Demo/FeatureServer/0"
      })
      */
     cubeFL
    ]
  });

  var view = new SceneView({
      container: "viewDiv",
      map: map,
      camera:{
        position: {
          x: -9812547.702012355,
          y: 5126068.6066822875,
          z: 514.9837682340294,
          spatialReference: {
            wkid: 102100
          }
        },
        heading: 331.23414060189447,
        tilt: 65.83406880789356
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

  var editor = new Editor({ view: view });
  view.ui.add(editor, "top-right");

  function updateSketch(){
    editor.supportingWidgetDefaults = {
      sketch:{
        defaultUpdateOptions:{
          enableZ: false
        }
      }
    };
  }
  onClick("updateSketch", updateSketch);


  /*
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
  createSVM();

  function updateSketch(){
    // update
    sketchViewModel.update(graphic);
  }
  onClick("updateSketch", updateSketch);


  function updateSketch2(){
    sketchViewModel.update(graphic, {
      enableZ: false
    });
  }
  onClick("updateSketch2", updateSketch2);

  function updateSketch3(){
    sketchViewModel.update(graphic, {
      enableZ: false,
      enableRotation: false
    });
  }
  onClick("updateSketch3", updateSketch3);

  function updateSketch4(){
    sketchViewModel.update(graphic, {
      enableZ: false,
      enableRotation: false,
      enableScaling: false
    });
  }
  onClick("updateSketch4", updateSketch4);
  */
});
