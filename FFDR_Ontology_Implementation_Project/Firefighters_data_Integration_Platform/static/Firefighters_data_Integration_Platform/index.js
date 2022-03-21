document.addEventListener("DOMContentLoaded", function () {
  loadNavPanels();
  // Incident site view
  document
    .querySelector("#incident-site")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewIncidentSite;
    });

  // Incident building view
  document
    .querySelector("#incident-building")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewIncidentBuilding;
    });

  // Addresses view
  document
    .querySelector("#addresses")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewAddresses;
    });

  // Building Plans view
  document
    .querySelector("#building-plans")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewBuildingPlans;
    });

  // Fire command center view
  document
    .querySelector("#fire-command-center")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireCommandCenter;
    });

  // Road to incident view
  document
    .querySelector("#road-to-incident")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewRoadToIncident;
    });

  // Fire lane view
  document
    .querySelector("#fire-lane")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireLane;
    });

  // Water source view
  document
    .querySelector("#water-source")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewWaterSource;
    });

  // Fire hydrant view
  document
    .querySelector("#fire-hydrant")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireHydrant;
    });

  // Weather condition view
  document
    .querySelector("#weather-condition")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewWeatherCondition;
    });

  // Fire lane view
  document
    .querySelector("#fire-lane")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireLane;
    });

  // Surroundings view
  document
    .querySelector("#surroundings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewSurroundings;
    });

  // Automatic fire extinguishing system view
  document
    .querySelector("#automatic-fire-extinguishing-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewAutomaticFireExtinguishingSystem;
    });

  // Portable fire extinguishers view
  document
    .querySelector("#portable-fire-extinguishers")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewPortableFireExtinguishers;
    });

  // Fire alarm system view
  document
    .querySelector("#fire-alarm-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireAlarmSystem;
    });

  // Fire Department Connections view
  document
    .querySelector("#fire-department-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireDepartmentConnections;
    });

  // Fire hose connections view
  document
    .querySelector("#fire-hose-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireHoseConnections;
    });

  // Standpipe system view
  document
    .querySelector("#standpipe-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewStandpipeSystem;
    });

  // Sensors and detectors view
  document
    .querySelector("#sensors-and-detectors")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewSensorsAndDetectors;
    });

  // Fire and smoke protection elements view
  document
    .querySelector("#fire-and-smoke-protection-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewFireAndSmokeProtectionElements;
    });

  // Building utility systems view
  document
    .querySelector("#building-utility-systems")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewBuildingUtilitySystems;
    });

  // Facade view
  document.querySelector("#facade").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    openViewFacade;
  });

  // Non-structural-elements view
  document
    .querySelector("#non-structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewNonStructuralElements;
    });

  // Structural elements view
  document
    .querySelector("#structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewStructuralElements;
    });

  // Hazardous materials view
  document
    .querySelector("#hazardous-materials")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewHazardousMaterials;
    });

  // Keybox view
  document.querySelector("#keybox").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    openViewKeybox;
  });

  // Concealed spaces view
  document
    .querySelector("#concealed-spaces")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewConcealedSpaces;
    });

  // Vertical openings view
  document
    .querySelector("#vertical-openings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewVerticalOpenings;
    });

  // Roof top element view
  document
    .querySelector("#roof-top-element")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      openViewRoofTopElement;
    });
});

function changeActiveButton(newActiveButton) {
  console.log(newActiveButton);
  currentActiveButton = document.getElementsByClassName("active");
  if (currentActiveButton.length > 0)
    currentActiveButton[0].className = "button";
  newActiveButton.className += " active";
}

function openViewIncidentSite() {}
function openViewIncidentBuilding() {}
function openViewAddresses() {}
function openViewBuildingPlans() {}
function openViewFireCommandCenter() {}
function openViewRoadToIncident() {}
function openViewFireLane() {}
function openViewWaterSource() {}
function openViewFireHydrant() {}
function openViewWeatherCondition() {}
function openViewFireLane() {}
function openViewSurroundings() {}
function openViewAutomaticFireExtinguishingSystem() {}
function openViewPortableFireExtinguishers() {}
function openViewFireAlarmSystem() {}
function openViewFireDepartmentConnections() {}
function openViewFireHoseConnections() {}
function openViewStandpipeSystem() {}
function openViewSensorsAndDetectors() {}
function openViewFireAndSmokeProtectionElements() {}
function openViewBuildingUtilitySystems() {}
function openViewFacade() {}
function openViewNonStructuralElements() {}
function openViewStructuralElements() {}
function openViewHazardousMaterials() {}
function openViewKeybox() {}
function openViewConcealedSpaces() {}
function openViewVerticalOpenings() {}
function openViewRoofTopElement() {}

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
