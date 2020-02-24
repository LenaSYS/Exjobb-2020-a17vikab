var testData = {
  max: 8,
  data: [
    {
      latitude: -4.6657,
      longitude: 143.865,
      acq_date: "2019-03-01",
      acq_time: "0101",
      brightness: 305.8,
      daynight: "D",
      bright_t31: 286.5,
      type: "0",
      version: "6.3",
      satellite: "Terra",
      confidence: "18",
      scan: 1.1,
      track: 1.1,
      frp: 4.7,
      instrument: "MODIS"
    },
    {
      latitude: -15.8191,
      longitude: 135.4216,
      acq_date: "2019-03-01",
      acq_time: "0104",
      brightness: 328.3,
      daynight: "D",
      bright_t31: 305.6,
      type: "0",
      version: "6.3",
      satellite: "Terra",
      confidence: "61",
      scan: 1.4,
      track: 1.2,
      frp: 13.4,
      instrument: "MODIS"
    },
    {
      latitude: -15.8294,
      longitude: 135.4197,
      acq_date: "2019-03-01",
      acq_time: "0104",
      brightness: 330.3,
      daynight: "D",
      bright_t31: 306.5,
      type: "0",
      version: "6.3",
      satellite: "Terra",
      confidence: "73",
      scan: 1.4,
      track: 1.2,
      frp: 16.7,
      instrument: "MODIS"
    }
  ]
};

var baseLayer = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "test",
    maxZoom: 18
  }
);

var cfg = {
  radius: 0.2,
  maxOpacity: 0.8,
  scaleRadius: true,
  useLocalExtrema: true,
  latField: "latitude",
  lngField: "longitude",
  valueField: "brightness"
};

var heatmapLayer = new HeatmapOverlay(cfg);

var map = new L.Map("map", {
  center: new L.LatLng(0, 0),
  zoom: 2,
  layers: [baseLayer, heatmapLayer]
});

heatmapLayer.setData(testData);