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
  "esri/symbols/LineSymbol3DLayer",
  "esri/symbols/LineSymbol3D",
  "esri/renderers/SimpleRenderer",
  "esri/geometry/Point",
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
  LineSymbol3DLayer,
  LineSymbol3D,
  SimpleRenderer,
  Point
) {

  function createFL(){

    const symbol = new LineSymbol3D({
      symbolLayers: [
          new LineSymbol3DLayer({
              size: 3,  // points
              material: { color: "green" },
              cap: "round",
              join: "round"
          })
      ]
    });

    const features = [
      {
        geometry:{
          "type": "polyline",
          "spatialReference": {
            "latestWkid": 3857,
            "wkid": 102100
          },
          "paths": [
            [
              [
                -9812965.51382896,
                5126595.515655971
              ],
              [
                -9812951.069774384,
                5126803.616640544
              ],
              [
                -9812965.792872831,
                5126846.743155667
              ],
              [
                -9813146.587265898,
                5127055.490376505
              ],
              [
                -9812761.394675104,
                5127094.863598561
              ]
            ]
          ]
        },
        attributes:{
          ObjectID: 1
        }
      }
    ];

    const pathsFL = new FeatureLayer({
      source: features,
      renderer: new SimpleRenderer({symbol:symbol}),
      objectIdField: "ObjectID",
      outFields: ["*"],
      geometryType: "polyline",
      spatialReference: {
          wkid: 102100
      },
      fields: [
          {
              name: "ObjectID",
              type: "oid"
          }
      ],
      //elevationInfo: {mode: "absolute-height"}//,
      elevationInfo: {mode: "relative-to-scene", offset: 2}//,
      //hasZ: true
    });
    return pathsFL;
  }
  const featureLayer = createFL();

  const map = new Map({
    basemap: "dark-gray-vector",
    ground: "world-elevation",
    layers:[
      featureLayer
    ]
  });

  var view = new SceneView({
      container: "viewDiv",
      map: map,
      camera:{
        position: {
          x: -9812446.41144896,
          y: 5126139.588084038,
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

  // client graphics layer
  var graphicsLayer = new GraphicsLayer({elevationInfo:{mode:"relative-to-scene"}});
  view.map.add(graphicsLayer);


  var start = null;
  var end = null;
  function createClientGraphics(){
    start = new Graphic({
      geometry: new Point({x: -9812965.51382896, y:5126595.515655971, spatialReference: {wkid:102100}}),
      symbol: {
        type: "point-3d",
        symbolLayers:[
          {
            type: "text",
            text: "start",
            size: 22,
            material:{ color: "red" }
          }
        ],
        verticalOffset:{
            screenLength: 20
        },
        callout:{
            type: "line",  // autocasts as new LineCallout3D()
            size: 1.5,
            color: [150, 150, 150]
        }
      }
    });
    end = new Graphic({
      geometry: new Point({x: -9812761.394675104, y:5127094.863598561, spatialReference: {wkid:102100}}),
      symbol: {
        type: "point-3d",
        symbolLayers:[
          {
            type: "text",
            text: "end",
            size: 22,
            material:{ color: "red" }
          }
        ],
        verticalOffset:{
            screenLength: 20
        },
        callout:{
            type: "line",  // autocasts as new LineCallout3D()
            size: 1.5,
            color: [150, 150, 150]
        }
      }
    });
    graphicsLayer.addMany([start, end]);
  }

  function synchronizeClientGraphicsFromFeature( feature ){
    const path = feature.geometry.paths[0];
    start.geometry = new Point({x:path[0][0], y:path[0][1], spatialReference:start.geometry.spatialReference});
    end.geometry = new Point({x:path[path.length-1][0], y:path[path.length-1][1], spatialReference:start.geometry.spatialReference});
  }

  function synchronizeClientGraphics( objectid ){
    const query = featureLayer.createQuery();
    query.returnZ = true;
    query.objectIds = [objectid];
    featureLayer.queryFeatures(query).then(function(featureSet){
      synchronizeClientGraphicsFromFeature(featureSet.features[0]);
    });
  }

  function enableClientGraphicSynchronization(){
    featureLayer.on("edits", function(edits){
      edits.updatedFeatures.forEach( function(feature){
        synchronizeClientGraphics(feature.objectId);
      });
    });
  }

  function enableClientGraphicSynchronization2(){
    editor.viewModel.sketchViewModel.on("update", function(e){
      if(e.state == "active"){
        synchronizeClientGraphicsFromFeature(e.graphics[0]);
      }
    });
  }


  onClick("sync0", createClientGraphics);
  onClick("sync1", enableClientGraphicSynchronization);
  onClick("sync2", enableClientGraphicSynchronization2);

  
  /*
  // create SketchViewModel
  const sketchViewModel = new SketchViewModel({
    view: view,
    layer: graphicsLayer
  });
  sketchViewModel.on("create", function(e){
    if(e.state == "complete"){
      //console.log(e);  
      console.log(JSON.stringify(e.graphic.geometry.toJSON()));

    }    
  });

  function sync0(){
    // create
    sketchViewModel.create("polyline", {hasZ: false});
  }
  onClick("sync0", sync0);
  */

  // Create the Editor 💥
  var editor = new Editor({ view: view });
  view.ui.add(editor, "top-right");


  /*
  function reset(){
    graphicsLayer.graphics.removeAll();
  }



  function create0(){
    reset();
    // create
    sketchViewModel.create("polygon");
  }
  onClick("create0", create0);

  function create1(){
    reset();
    graphicsLayer.elevationInfo = {mode: "relative-to-ground"};
        
    // create
    sketchViewModel.create("polygon", {defaultZ: 50});
  }
  onClick("create1", create1);

  function create2(){
    reset();
    graphicsLayer.elevationInfo = {mode: "relative-to-ground"};
        
    // create
    sketchViewModel.create("polygon", {hasZ: false});
  }
  onClick("create2", create2);
  */


});
