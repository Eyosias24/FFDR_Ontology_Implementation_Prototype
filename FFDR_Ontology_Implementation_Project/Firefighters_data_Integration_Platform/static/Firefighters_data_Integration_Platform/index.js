document.addEventListener("DOMContentLoaded", function () {
  // Get the navigation panels
  topNav = document.querySelector("#top-nav-menu .navbar-nav");
  rightNav = document.querySelector("#right-nav-menu .navbar-nav");
  bottomNav = document.querySelector("#bottom-nav-menu .navbar-nav");
  leftNav = document.querySelector("#left-nav-menu .navbar-nav");

  // List of items to be placed on the navigation panels
  topNavItems = [
    "Incident Site",
    "Incident Building",
    "Building Occupancy",
    "Addresses",
    "Build Plans",
    "Construction Type",
    "Fire Command Center",
  ];
  //Building components other than safety systems
  rightNavItems = [
    "Building Utility Systems",
    "Facade",
    "Non-Structural Elements",
    "Structural Elements",
    "Hazardous materials",
    "KeyBox",
    "Concealed Spaces",
    "Vertical Openings",
    "Roof Top Element",
  ];
  moreRightNavItems = [
    "Extremely Valuable Materials",
    "Area of Refuge",
    "Helipad",
  ];

  bottomNavItems = [
    "Road to Incident",
    "Fire Lane",
    "Water Source",
    "Fire Hydrant",
    "Weather Condition",
    "Surrounding Terrain",
    "Vegetation",
    "Surrounding Structures",
  ];

  moreBottomNavItems = [
    "Surrounding Buildings",
    "Hazardous Materials",
    "Obstructions",
    "Fire Hydrant",
    "Parking Lot",
    "Pipeline",
    "PowerLine",
  ];
  // Building safety systems on the left panel
  leftNavItems = [
    "Automatic Fire Extinguishing System",
    "Portable Fire Extinguishers",
    "Fire Alarm System",
    "Fire Department Connections (FDC)",
    "Fire Hose Connections",
    "Standpipe System",
    "Sensors and Detectors",
    "Fire and Smoke Protection Elements",
    "FARS Fill Stations",
  ];
  moreLeftNavItems = [
    "Emergency Power Outlets",
    "Smoke and Heat Removal System",
    "Smoke Control System",
    "Fire Pump",
    "Mass Notification System",
  ];

  // Add items to the navigation panels
  for (i = 0; i < topNavItems.length; i++) {
    addItemToNav(topNav, topNavItems[i]);
  }
  for (i = 0; i < rightNavItems.length; i++) {
    addItemToNav(rightNav, rightNavItems[i]);
  }

  for (i = 0; i < bottomNavItems.length; i++) {
    addItemToNav(bottomNav, bottomNavItems[i]);
  }

  for (i = 0; i < leftNavItems.length; i++) {
    addItemToNav(leftNav, leftNavItems[i]);
  }

  document
    .querySelector("#vegetation")
    .addEventListener("click", getVegetation);
});

function addItemToNav(nav, item) {
  var listItem = document.createElement("a");
  listItem.className = "nav-link";
  listItem.href = "#";
  id = item.toLowerCase().replace(" ", "-");
  listItem.id = id;
  listItem.innerHTML = `${item}`;
  nav.appendChild(listItem);
}

function alarmSystemAnnunciatorPanelFun(result) {
  console.log(result);
}

function weatherCondition() {
  // Get main container
  WeatherConditionContainer = document.querySelector("#main_container");
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Portland&units=metric&appid=0fa663749dc11a9e6dcec438f2679b2d"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
      // hasPrecipitationValue = result.FloatField();
      hasRelativeHumidity = result["main"]["humidity"];
      hasTemperature = result["main"]["temp"];
      hasTimeMark = new Date(result["dt"] * 1000).toLocaleString();
      hasWindDirection = result["wind"]["deg"];
      hasWindSpeed = result["wind"]["speed"];

      console.log(hasRelativeHumidity);
      console.log(hasTemperature);
      console.log(hasTimeMark);
      console.log(hasWindDirection);
      console.log(hasWindSpeed);
    });
}
