
mapboxgl.accessToken =
  "pk.eyJ1Ijoic29tc3ViaHJhMSIsImEiOiJja2hkbDhuNGcwNnZnMnNuMGkwcjU3d3UwIn0.ZAeP5aPO4JkxNGD7dIEZtw";

document.addEventListener("DOMContentLoaded", () => {
  const successLocation = (position) => {
    setupMap([position.coords.longitude, position.coords.latitude]);
  };

  const errorLocation = () => {
    setupMap([78.0322, 30.3165]); // Dehradun, India coordinates
  };


  

  const setupMap = (center) => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 16,
      center,
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });

    map.addControl(directions, "top-left");
  };  




  navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
  });
});

