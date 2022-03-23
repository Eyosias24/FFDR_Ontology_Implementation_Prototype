document.addEventListener("DOMContentLoaded", function () {
  projectTitle = "Sample Project 01";
  loadNavPanels();
  // Incident site view
  document
    .querySelector("#incident-site")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getIncidentSite;
    });

  // Incident building view
  document
    .querySelector("#incident-building")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getIncidentBuilding(projectTitle);
    });

  // Addresses view
  document
    .querySelector("#addresses")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getAddresses();
    });

  // Building Plans view
  document
    .querySelector("#building-plans")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getBuildingPlans;
    });

  // Fire command center view
  document
    .querySelector("#fire-command-center")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireCommandCenter;
    });

  // Road to incident view
  document
    .querySelector("#road-to-incident")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getRoadToIncident;
    });

  // Fire lane view
  document
    .querySelector("#fire-lane")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireLane;
    });

  // Water source view
  document
    .querySelector("#water-source")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getWaterSource;
    });

  // Fire hydrant view
  document
    .querySelector("#fire-hydrant")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireHydrant;
    });

  // Weather condition view
  document
    .querySelector("#weather-condition")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getWeatherCondition;
    });

  // Fire lane view
  document
    .querySelector("#fire-lane")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireLane;
    });

  // Surroundings view
  document
    .querySelector("#surroundings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSurroundings;
    });

  // Automatic fire extinguishing system view
  document
    .querySelector("#automatic-fire-extinguishing-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getAutomaticFireExtinguishingSystem;
    });

  // Portable fire extinguishers view
  document
    .querySelector("#portable-fire-extinguishers")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getPortableFireExtinguishers;
    });

  // Fire alarm system view
  document
    .querySelector("#fire-alarm-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireAlarmSystem;
    });

  // Fire Department Connections view
  document
    .querySelector("#fire-department-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireDepartmentConnections;
    });

  // Fire hose connections view
  document
    .querySelector("#fire-hose-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireHoseConnections;
    });

  // Standpipe system view
  document
    .querySelector("#standpipe-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getStandpipeSystem;
    });

  // Sensors and detectors view
  document
    .querySelector("#sensors-and-detectors")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSensorsAndDetectors;
    });

  // Fire and smoke protection elements view
  document
    .querySelector("#fire-and-smoke-protection-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireAndSmokeProtectionElements;
    });

  // Building utility systems view
  document
    .querySelector("#building-utility-systems")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getBuildingUtilitySystems;
    });

  // Facade view
  document.querySelector("#facade").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getFacade;
  });

  // Non-structural-elements view
  document
    .querySelector("#non-structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getNonStructuralElements;
    });

  // Structural elements view
  document
    .querySelector("#structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getStructuralElements;
    });

  // Hazardous materials view
  document
    .querySelector("#hazardous-materials")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getHazardousMaterials;
    });

  // Keybox view
  document.querySelector("#keybox").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getKeybox;
  });

  // Concealed spaces view
  document
    .querySelector("#concealed-spaces")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getConcealedSpaces;
    });

  // Vertical openings view
  document
    .querySelector("#vertical-openings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getVerticalOpenings;
    });

  // Roof top element view
  document
    .querySelector("#roof-top-element")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getRoofTopElement;
    });
});

function changeActiveButton(newActiveButton) {
  currentActiveButton = document.getElementsByClassName("active");
  if (currentActiveButton.length > 0)
    currentActiveButton[0].className = "button";
  newActiveButton.className += " active";
}

function showIncidentSite() {}
function showAddresses() {}
function showBuildingPlans() {}
function showFireCommandCenter() {}
function showRoadToIncident() {}
function showFireLane() {}
function showWaterSource() {}
function showFireHydrant() {}
function showWeatherCondition() {
  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";
}
function showFireLane() {}
function showSurroundings() {}
function showAutomaticFireExtinguishingSystem() {}
function showPortableFireExtinguishers() {}
function showFireAlarmSystem() {}
function showFireDepartmentConnections() {}
function showFireHoseConnections() {}
function showStandpipeSystem() {}
function showSensorsAndDetectors() {}
function showFireAndSmokeProtectionElements() {}
function showBuildingUtilitySystems() {}
function showFacade() {}
function showNonStructuralElements() {}
function showStructuralElements() {}
function showHazardousMaterials() {}
function showKeybox() {}
function showConcealedSpaces() {}
function showVerticalOpenings() {}
function showRoofTopElement() {}

function loadNavPanels() {
  // Get the navigation panels
  topNav = document.querySelector("#top-nav-menu .navbar-nav");
  rightNav = document.querySelector("#right-nav-menu .navbar-nav");
  bottomNav = document.querySelector("#bottom-nav-menu .navbar-nav");
  leftNav = document.querySelector("#left-nav-menu .navbar-nav");

  // List of items to be placed on the navigation panels
  topNavItems = [
    "Incident Site",
    "Incident Building",
    "Addresses",
    "Building Plans",
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
    "Surroundings",
  ];

  moreBottomNavItems = [
    "Surrounding Buildings",
    "Surrounding Terrain",
    "Vegetation",
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
    "Fire Department Connections",
    "Fire Hose Connections",
    "Standpipe System",
    "Sensors and Detectors",
    "Fire and Smoke Protection Elements",
  ];
  moreLeftNavItems = [
    "FARS Fill Stations",
    "Emergency Power Outlets",
    "Smoke and Heat Removal System",
    "Smoke Control System",
    "Fire Pump",
    "Mass Notification System",
  ];
  // Add heading to navigation panels
  // Right navigation panel
  var headingItem = document.createElement("p");
  headingItem.id = "right-nav-heading";
  headingItem.innerText = "Building Components";
  rightNav.appendChild(headingItem);
  // Left navigation panel
  var headingItem = document.createElement("p");
  headingItem.id = "left-nav-heading";
  headingItem.innerText = "Building Safety Systems";
  leftNav.appendChild(headingItem);

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
}
function addItemToNav(nav, item) {
  var listItem = document.createElement("a");
  listItem.className = "nav-link";
  listItem.href = "#";

  id = item.toLowerCase().split(" ").join("-");
  listItem.id = id;
  listItem.className = "button";
  listItem.innerHTML = `${item}`;
  nav.appendChild(listItem);
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
