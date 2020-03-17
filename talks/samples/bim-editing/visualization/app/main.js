require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/BuildingSceneLayer",
  "esri/layers/support/BuildingFilter",
  "esri/widgets/LayerList",
  "./../../support/widgets.js",
  "dojo/domReady!"
], function (
  Map,
  SceneView,
  BuildingSceneLayer,
  BuildingFilter,
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
    qualityProfile: "high",
    // camera: {"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":19217739.314622313,"y":-5392869.574006113,"z":85.33910750970244},"heading":133.74224876471538,"tilt":63.801079199922754},
    camera: {"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":-13045079.449431838,"y":4036762.002486097,"z":446.70295623037964},"heading":315.63260562077835,"tilt":72.89304450457234},
    alphaCompositingEnabled: true,
    environment: {
      background: {
        type: "color",
        color: [0, 0, 0, 0]
      },
      lighting: {
        directShadowsEnabled: true,
      },
      starsEnabled: false,
      atmosphereEnabled: false
    }
  });
  widgetsSupport.createFullscreen(view);
  window.view = view;

  const buildingLayer = new BuildingSceneLayer({
    url: "https://tiles.arcgis.com/tiles/z2tnIkrLQ2BRzr6P/arcgis/rest/services/Admin_Building_v17/SceneServer"
  });
  const bslLoad = buildingLayer.load();

  const layerList = new LayerList({
    view: view
  });

  view.when().then(function() {
    map.ground.opacity = 0;
  });

  function onClick(buttonId, onclick) {
    const button = parent.document.getElementById(buttonId);
    if (button && onclick) {
      button.onclick = onclick;
    }
  }

  function addBSL() {
    map.add(buildingLayer);
  }

  function addLayerList() {
    view.ui.add(layerList, {
      position: "bottom-right"
    });
  }

  function filterStructural() {

    bslLoad.then(() => {
      buildingLayer.allSublayers.forEach(l => {

        if (l.title === "Floors" || l.title.startsWith("Structural")) {
          l.visible = true;
        } else {
          l.visible = l.type === "building-group";
        }
      });
    });
  }

  function filterWindows() {

    bslLoad.then(() => {
      buildingLayer.allSublayers.forEach(l => {

        if (l.title === "Floors" || l.title === "Windows" || l.title.startsWith("Structural")) {
          l.visible = true;
        } else {
          l.visible = l.type === "building-group";
        }
      });
    });
  }

  function filterWalls() {
    bslLoad.then(() => {
      buildingLayer.allSublayers.forEach(l => {

        if (
          l.title === "Walls" || l.title === "Rooms" ||
          l.title.startsWith("Structural") ||
          l.modelName === "Overview") {
          l.visible = false;
        } else {
          l.visible = true;
        }
      });
    });
  }

  function paintWindowsGreen() {
    bslLoad.then(() => {

      const windowLayer = buildingLayer.allSublayers.find(l => l.title === "Windows");

      windowLayer.renderer = {
        type: "simple",
        symbol: {
          type: "mesh-3d",
          symbolLayers: [
            {
              type: "fill",
              material: {
                color: [0, 255, 0, 0.8],
              },
              edges: {
                type: "solid",
                color: [0, 120, 0],
                size: 1,
              }
            }
          ]
        }

      };

    });
  }

  let floor = 3;
  function setFloorFilter(mode) {
    const filterBlocks = [{
      filterExpression:
        `BldgLevel = ${floor}`,
      filterMode: {
        type: "solid"
      }
    }];

    if (mode === "x-ray" || mode === "wire-frame") {
      filterBlocks.push({
          filterExpression:
          `BldgLevel < ${floor}`,
          filterMode: {
            type: mode,
            edges: {
              type: "solid",
              color: [105, 142, 179, 1]
            }
          }
      });
    }

    const buildingFilter = new BuildingFilter({
      filterBlocks
    });

    // set the filter in the filters array on the layer
    buildingLayer.filters = [buildingFilter];
    // specify which filter is the one that should be applied
    buildingLayer.activeFilterId = buildingFilter.id;
  }

  onClick("addBuildingSceneLayer", addBSL);

  onClick("filterBuildingSceneLayer", filterStructural);

  onClick("renderBuildingSceneLayer", paintWindowsGreen);

  onClick("filterFloor", setFloorFilter);

  onClick("filterFloorXRay", () => setFloorFilter("x-ray"));
  onClick("filterFloorWireFrame", () => setFloorFilter("wire-frame"));

  // Check what slide we are showing
  const slide = parent && parent.Reveal && parent.Reveal.getCurrentSlide().dataset.title;
  if (slide === "slide-bsl-sublayers") {
    addBSL();
    addLayerList();
  } else if (slide === "slide-bsl-renderer") {
    addBSL();
    filterWindows();
  } else if (slide === "slide-bsl-filter-blocks") {
    addBSL();
    filterWalls();
  } else if (slide === "slide-bsl-filter-modes") {
    floor = 4;
    addBSL();
    filterWalls();
    setFloorFilter();
  }

});
