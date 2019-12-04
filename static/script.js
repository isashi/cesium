Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiODNmMjQzNy1mNGI4LTQ2ZTItOWI0NS0yZDUzMzMyNWMxNzQiLCJpZCI6OSwiaWF0IjoxNDgxODI5ODU0fQ.4fmVtksZ1CAzjPBprJ47uIuK0vr-8CcuDKM7M8a0mF4";

// 45 - 10

//var west = 114.591; 31.27500000
//var south = -45.837; 34.80055556
//var east = 148.970; 69.03333333
//var north = -5.730; 81.80666667

var rectangle = Cesium.Rectangle.fromDegrees(-20, 75, 40, 15);

Cesium.Camera.DEFAULT_VIEW_FACTOR = 0;
Cesium.Camera.DEFAULT_VIEW_RECTANGLE = rectangle;

var viewer = new Cesium.Viewer("cesiumContainer", {
  animation: false,
  timeline: false,
  geocoder: false
});

//viewer.scene.screenSpaceCameraController.enableZoom = false;

/*
var cartographic = new Cesium.Cartographic();
var cartesian = new Cesium.Cartesian3();
var camera = viewer.scene.camera;
var ellipsoid = viewer.scene.mapProjection.ellipsoid;
var toolbar = document.getElementById('toolbar');
toolbar.innerHTML = '<div id="hud"></div>' +
    '<button type="button" class="cesium-button" id="h1km">1km height</button></br>' +
    '<button type="button" class="cesium-button" id="h2km">2km height</button></br>' +
    '<button type="button" class="cesium-button" id="h10km">10km height</button></br>' +
    '<button type="button" class="cesium-button" id="h100km">100km height</button></br>' +
    '<button type="button" class="cesium-button" id="h500km">500km height</button></br>' +
    '<button type="button" class="cesium-button" id="h1000km">1000km height</button></br>' + 
    '<button type="button" class="cesium-button" id="h2500km">2500km height</button></br>' +
    '<button type="button" class="cesium-button" id="h10000km">10000km height</button></br>' +
    '<button type="button" class="cesium-button" id="h25000km">25000km height</button>';

toolbar.setAttribute('style', 'background: rgba(42,42,42,0.9); border-radius: 5px;');

var hud = document.getElementById('hud');

viewer.clock.onTick.addEventListener(function(clock) {
    ellipsoid.cartesianToCartographic(camera.positionWC, cartographic);
    hud.innerHTML =
        'Lon: ' + Cesium.Math.toDegrees(cartographic.longitude).toFixed(3) + ' deg<br/>' +
        'Lat: ' + Cesium.Math.toDegrees(cartographic.latitude).toFixed(3) + ' deg<br/>' +
        'Alt: ' + (cartographic.height * 0.001).toFixed(1) + ' km';
});

function setHeightKm(heightInKilometers) {
    ellipsoid.cartesianToCartographic(camera.position, cartographic);
    cartographic.height = heightInKilometers * 1000;  // convert to meters
    ellipsoid.cartographicToCartesian(cartographic, cartesian);
    camera.position = cartesian;
}

/*document.getElementById('h1km').addEventListener('click', function() {
    setHeightKm(1);
}, false);

document.getElementById('h2km').addEventListener('click', function() {
    setHeightKm(2);
}, false);

document.getElementById('h10km').addEventListener('click', function() {
    setHeightKm(10);
}, false);

document.getElementById('h100km').addEventListener('click', function() {
    setHeightKm(100);
}, false);

document.getElementById('h500km').addEventListener('click', function() {
    setHeightKm(500);
}, false);

document.getElementById('h1000km').addEventListener('click', function() {
    setHeightKm(1000);
}, false);

document.getElementById('h2500km').addEventListener('click', function() {
    setHeightKm(2500);
}, false);

document.getElementById('h10000km').addEventListener('click', function() {
    setHeightKm(10000);
}, false);

document.getElementById('h25000km').addEventListener('click', function() {
    setHeightKm(25000);
}, false);
*/

viewer.dataSources.add(
  Cesium.KmlDataSource.load(
    "https://uploads.codesandbox.io/uploads/user/46dd466c-40b1-48f5-879b-2b596c6aaac4/pNfa-rete_commerciale.kml",
    {
      camera: viewer.scene.camera,
      canvas: viewer.scene.canvas
    }
  )
);

// Start off looking at Australia.
viewer.camera.setView({
  destination: Cesium.Rectangle.fromDegrees(-20, 75, 40, 15)
});
