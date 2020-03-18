require([
  "esri/WebScene",
  "esri/views/SceneView",
  "esri/widgets/Daylight",
  "esri/widgets/Slice",
  "esri/widgets/Measurement",
  "esri/widgets/LineOfSight",
  "./../../support/widgets.js",
  "dojo/domReady!"
], function (
  WebScene,
  SceneView,
  Daylight,
  Slice,
  Measurement,
  LineOfSight,
  widgetsSupport,
) {

  const map = new WebScene({
    portalItem: {
      id: "543648a92446497db8a92c06ce1ad0b1"
    }
  });

  const view = new SceneView({
    map,
    container: "viewDiv",
    qualityProfile: "high",
    camera: {"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":19217578.11079934,"y":-5392649.8960322905,"z":99.24815504532307},"heading":140.28793280945405,"tilt":80.19454149976157},
  });
  widgetsSupport.createFullscreen(view);
  window.view = view;

  const daylight = new Daylight({
    view: view,
    dateOrSeason: "season",
  });

  const slice = new Slice({
    view: view,
  });

  const measurement = new Measurement({
    view: view,
  });
  view.ui.add(measurement, "top-right");

  const lineOfSight = new LineOfSight({
    view: view
  });

  view.when().then(function() {
    map.basemap = "topo-vector";
    map.ground.opacity = 1;

    view.environment.lighting.directShadowsEnabled = false;
    view.environment.atmosphereEnabled = true;
    view.environment.atmosphere.quality = "high";

    function onClick(buttonId, onclick) {
      const button = parent.document.getElementById(buttonId);
      if (button && onclick) {
        button.onclick = onclick;
      }
    }

    function addDaylightWidget() {
      const date = view.environment.lighting.date;
      view.ui.add(daylight, "top-right");
      view.environment.lighting.date = date;
    }

    function addShadows() {
      view.environment.lighting.directShadowsEnabled = true;
    }

    const buildingLayer = view.map.layers.find(l => l.title === "Building: Turanga Library");
    buildingLayer.when(() => {
      slice.viewModel.excludeGroundSurface = true;
      slice.viewModel.excludedLayers = [buildingLayer.allSublayers.find(l => l.title === "Stairs")];
    });

    function startLineMeasurement() {
      measurement.activeTool = "direct-line";
      measurement.startMeasurement();
    }

    function startAreaMeasurement() {
      measurement.activeTool = "area";
      measurement.startMeasurement();
    }

    onClick("addDaylightWidget", addDaylightWidget);
    onClick("addShadows", addShadows);

    const cameraOne = document.getElementById("cameraOne");
    const cameraTwo = document.getElementById("cameraTwo");

    const lineMeasurement = document.getElementById("lineMeasurement");
    lineMeasurement.onclick = startLineMeasurement;

    const areaMeasurement = document.getElementById("areaMeasurement");
    areaMeasurement.onclick = startAreaMeasurement;

    // Check what slide we are showing
    const slide = parent && parent.Reveal && parent.Reveal.getCurrentSlide().dataset.title;
    if (slide === "slide-slice-measurements") {
      view.environment.lighting.directShadowsEnabled = true;
      view.camera = {"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":19217778.62775685,"y":-5392895.039659151,"z":71.40540040750057},"heading":139.27199906518092,"tilt":63.452233980544875};

      view.ui.add(slice, "bottom-left")

      lineMeasurement.classList.remove("hide");
      areaMeasurement.classList.remove("hide");
      view.ui.add([lineMeasurement, areaMeasurement], "bottom-right");
    } else if (slide === "slide-line-of-sight") {
      view.environment.lighting.directShadowsEnabled = true;
      cameraOne.onclick = function() {
        view.goTo({"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":19217630.184079826,"y":-5393267.139493612,"z":118.12452202942222},"heading":43.5462831648475,"tilt":69.90283663054065});
      }
      cameraOne.classList.remove("hide");

      cameraTwo.onclick = function() {
        view.goTo({"position":{"spatialReference":{"latestWkid":3857,"wkid":102100},"x":19217767.490178935,"y":-5392695.156415751,"z":174.34105286188424},"heading":168.41379799356275,"tilt":54.67178660621077});
      }
      cameraTwo.classList.remove("hide");

      view.ui.add([cameraOne, cameraTwo], "bottom-left");

      view.ui.add(lineOfSight, "top-right");
    }





  });

});
