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
  "esri/symbols/ExtrudeSymbol3DLayer",
  "esri/symbols/PathSymbol3DLayer",
  "esri/symbols/LineSymbol3D",
  "esri/symbols/PolygonSymbol3D",
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
  ExtrudeSymbol3DLayer,
  PathSymbol3DLayer,
  LineSymbol3D,
  PolygonSymbol3D,
  SimpleRenderer,
  Point
) {
  function createPathSymbol(color){
    const symbol = new LineSymbol3D({
      symbolLayers: [
          new PathSymbol3DLayer({
              width: 10,  // points
              material: { color: color },
              cap: "round",
              join: "round"
          })
      ]
    });
    return symbol;
  }

  function createLineSymbol( color ){
    const symbol = new LineSymbol3D({
      symbolLayers: [
          new LineSymbol3DLayer({
              size: 3,  // points
              material: { color: color },
              cap: "round",
              join: "round"
          })
      ]
    });
    return symbol;
  }
  function createExtrudedPolygonSymbol(color){
    const symbol = new PolygonSymbol3D({
      symbolLayers: [
          new ExtrudeSymbol3DLayer({
              size: 50,  // points
              material: { color: color }
          })
      ]
    });
    return symbol;
  }

  function createFL( hasZ, title, symbol ){


    /*
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
    */
    var geometryType = "line-3d";
    if( symbol.type == "line-3d" ){
      geometryType = "polyline";
    }else
    if( symbol.type == "polygon-3d" ){
      geometryType = "polygon";
    }


    const fl = new FeatureLayer({
      source: [],
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
      title: title,
      //elevationInfo: {mode: "absolute-height"},
      //elevationInfo: {mode: "relative-to-scene", offset: 2},
      elevationInfo: {mode: "relative-to-ground", offset: 2},
      hasZ: hasZ
    });
    return fl;
  }
  //const featureLayer = createFL(true, "hasZ=true", "lightgreen");
  //const featureLayer2 = createFL(false, "hasZ=false", "green");

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
      //featureLayer,
      //featureLayer2
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

  var graphicsLayer = new GraphicsLayer({elevationInfo:{
    mode: "relative-to-ground"
  }});

  // add layer to view
  view.map.add(graphicsLayer);
  



  var featureLayerWithoutZ = null;
  function create0(){
    featureLayerWithoutZ = createFL(false, "hasZ=false", createLineSymbol("green"));
    view.map.add(featureLayerWithoutZ);
    //reset();
    // create
    //sketchViewModel.create("polygon");
  }
  onClick("create0", create0);

  function create1(){
    //view.map.removeAll();
    const featureLayer2 = createFL(true, "hasZ=true", createLineSymbol("lightgreen"));
    view.map.add(featureLayer2);

    //reset();
    //graphicsLayer.elevationInfo = {mode: "relative-to-ground"};
        
    // create
    //sketchViewModel.create("polygon", {defaultZ: 50});
  }
  onClick("create1", create1);

  function create2(){
    //view.map.removeAll();
    const featureLayer = createFL(false, "extrudedPolygon", createExtrudedPolygonSymbol("lightgreen"));
    /*
    editor.supportingWidgetDefaults = {
      sketch:{
        polygonSymbol: featureLayer.renderer.symbol
      }
    };
    */
    view.map.add(featureLayer);
  }
  onClick("create2", create2);

  function create3(){
    editor.supportingWidgetDefaults = {
      sketch:{
        polygonSymbol: createExtrudedPolygonSymbol("lightgreen")
      }
    };
  }
  onClick("create3", create3);

  function create4(){
    featureLayerWithoutZ.elevationInfo = {mode: "relative-to-scene"};
  }
  onClick("create4", create4);

  function create5(){
    var clonedRenderer = featureLayerWithoutZ.renderer.clone();
    clonedRenderer.symbol = new LineSymbol3D({
      symbolLayers: [
          new PathSymbol3DLayer({
              width: 15,
              height: 30,
              material: { color: "green" },
              profile: "quad",
              join: "round",
              anchor: "bottom",
              profileRotation: "heading"
          })
      ]
    });
    featureLayerWithoutZ.renderer = clonedRenderer;
  }
  onClick("create5", create5);

  /*
  const polygonAnnotations = new FeatureLayer({
    source: features,
    geometryType: "polygon",
    spatialReference: {
        wkid: 102100
    },
    renderer: new SimpleRenderer({symbol:getPolygonAnnotationSymbol()}),
    objectIdField: "ObjectID",
    outFields: ["*"],
    fields: [
        {
            name: "ObjectID",
            type: "oid"
        },
        {
            name: "label",
            type: "string",
            defaultValue: ""
        },
        {
            name: "payload",
            type: "string",
            defaultValue: "{}"
        }
    ],
    elevationInfo: {mode: "absolute-height"},
    hasZ: true
});
*/
var editor = new Editor({ view: view });
view.ui.add(editor, "top-right");



});
