function create(tag, attr) {
  var elem = document.createElement(tag);

  for (var k in attr) {
    elem[k] = attr[k];
  }

  return elem;
}

document.head.appendChild(create("link", {
  rel: "stylesheet",
  href: "//js.arcgis.com/4.15/esri/css/main.css"
}));

document.head.appendChild(create("link", {
  rel: "stylesheet",
  href: "./support/style.css"
}));

document.head.appendChild(create("script", {
  src: "//js.arcgis.com/4.15/"
}));

(function(snippet, settings) {

  window.addEventListener("load", function() {
    require([
      "dojo/dom-construct",
      "dojo/on",

      "esri/core/declare",
      "esri/core/scheduling",
      "esri/Map",
      "esri/views/MapView",

      "dojo/domReady!"
      ], function(
        domCtr, on,

        declare,
        Scheduler,
        Map,
        MapView
      ) {

      var containers = {};

      // provide default functionality
      // (to be redefined according to settings)
      var interlinks = {
        log: function() { console.log(Array.prototype.join.call(arguments, " ")); },
        playButton: function() {},
        overviewDiv: {},
      };

      if (!settings.disableViewDiv) {
        containers.viewDiv = create("div", {
          id: "viewDiv"
        });


        document.body.appendChild(containers.viewDiv);
      }

      snippet(containers, interlinks);

      window.addEventListener("message", function(m) {
        if (m.data && m.data.play) {
          interlinks.playButton(m.data.arguments);
        }
      }, false);
    });
  });
})(window.snippet, window.settings || {});
