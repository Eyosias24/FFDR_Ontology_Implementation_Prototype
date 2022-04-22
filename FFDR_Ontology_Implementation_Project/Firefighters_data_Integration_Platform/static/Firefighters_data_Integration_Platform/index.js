document.addEventListener("DOMContentLoaded", function () {
  // Project title
  projectTitle = "Sample Project 01";

  // Load navigation panels
  loadNavPanels();

  // Incident building view
  document
    .querySelector("#incident-building")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getIncidentBuilding(projectTitle);
    });

  // Contact Addresses view
  document
    .querySelector("#contact-addresses")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getContactAddresses(projectTitle);
    });


  // building plans view
  document
    .querySelector("#building-plans")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getBuildingPlans(projectTitle);
    });




  // fire command center view
  document
    .querySelector("#fire-command-center")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireCommandCenter(projectTitle);
    });


  // Automatic fire extinguishing system view
  document
    .querySelector("#automatic-fire-extinguishing-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getAutomaticFireExtinguishingSystem(projectTitle);
    });

  // Portable fire extinguishers view
  document
    .querySelector("#portable-fire-extinguishers")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getPortableFireExtinguishers(projectTitle);
    });

  // Fire hydrant view
  document
    .querySelector("#fire-hydrant")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireHydrant(projectTitle);
    });

  // Building utility systems view
  document
    .querySelector("#building-utility-systems")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getBuildingUtilitySystems(projectTitle);
    });

  // Fire alarm system view
  document
    .querySelector("#fire-alarm-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);

      getFireAlarmSystem(projectTitle);
    });

  // Fire Department Connections view
  document
    .querySelector("#fire-department-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireDepartmentConnections(projectTitle);
    });

  // Fire hose connections view
  document
    .querySelector("#fire-hose-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireHoseConnections(projectTitle);
    });

  // Standpipe system view
  document
    .querySelector("#standpipe-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getStandpipeSystem(projectTitle);
    });

  // Sensors and detectors view
  document
    .querySelector("#sensors-and-detectors")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSensorsAndDetectors(projectTitle);
    });

  // Fire and smoke protection elements view
  document
    .querySelector("#fire-and-smoke-protection-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireAndSmokeProtectionElements(projectTitle);
    });


  // Area of refuge view
  document
    .querySelector("#area-of-refuge")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getAreaOfRefuge(projectTitle);
    });


  // FARS fill stations view
  document
    .querySelector("#fars-fill-stations")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFarsFillStations(projectTitle);
    });

  // emergency power outlets view
  document
    .querySelector("#emergency-power-outlets")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getEmergencyPowerOutlets(projectTitle);
    });


  // smoke and heat removal system view
  document
    .querySelector("#smoke-and-heat-removal-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSmokeAndHeatRemovalSystem(projectTitle);
    });


  // Smoke control system view
  document
    .querySelector("#smoke-control-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSmokeControlSystem(projectTitle);
    });




  // fire pump view
  document
    .querySelector("#fire-pump")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFirePump(projectTitle);
    });

   

  // Mass notification system view
  document
    .querySelector("#mass-notification-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getMassNotificationSystem(projectTitle);
    });


  // Facade view
  document.querySelector("#facade").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getFacade(projectTitle);
  });

// Define result containers

contactAddressResults = {}
incidentBuildingResults = {}
BuildingPlansResults = {}
fireCommandCenterResults = {}

fireExtinguishingSystemResults = {}
portableFireExtinguisherResults = {}
fireAlarmSystemResults={}
fireDepartmentConnectionsResults = {}
fireHoseConnectionResults = {}
standpipeSystemResults = {}
sensorsAndDetectorsResults = {}
fireAndSmokeProtectionElementsResults = {}
areaOfRefugeResults = {}
farsFillStationsResults = {}
EmergencyPowerOutletsResults = {}
smokeAndHeatRemovalSystemResults = {}
smokeControlSystemResults = {}
firePumpResults = {}
massNotificationSystemResults = {}

fireHydrantResults = {}
buildingUtilitySystemResults = {}
structuralElementsResults = {}
keyBoxResults = {}
hazardousMaterialResults = {}
concealedSpaceResults = {}
verticalOpeningResults = {}
roofTopElementResults = {}
extremelyValuableMaterialsResults  = {}
helipadResults  = {}

facadeResults = {}
weatherConditionResults= {}
surroundingsResults = {}
waterSourceResults= {}
fireLaneResults  = {}
roadToIncidentResults = {}
  // non structural elements view
  // Define data containers
  doorData = []
  windowData = []
elevatorData = []
stairwayData = []
rampData = []
wallData = []
floorAssemblyData = []
roofAssemblyData = []
balconyData = []
hallwayData = []

  document
    .querySelector("#non-structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getNonStructuralElements(projectTitle);
    });


  document
    .querySelector("#structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      
      getStructuralElements(projectTitle);
    });

  // Hazardous materials view
  document
    .querySelector("#hazardous-materials")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getHazardousMaterials(projectTitle);
    });

  // Keybox view
  document.querySelector("#keybox").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getKeybox(projectTitle);
  });

  // Concealed spaces view
  document
    .querySelector("#concealed-spaces")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getConcealedSpaces(projectTitle);
    });

  // Vertical openings view
  document
    .querySelector("#vertical-openings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getVerticalOpenings(projectTitle);
    });

  // Roof top element view
  document
    .querySelector("#roof-top-element")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getRoofTopElement(projectTitle);
    });



  // extremely valuable materials view
  document
    .querySelector("#extremely-valuable-materials")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getExtremelyValuableMaterials(projectTitle);
    });



  // helipad view
  document
    .querySelector("#helipad")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getHelipad(projectTitle);
    });


// Road to incident view
document
  .querySelector("#road-to-incident")
  .addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getRoadToIncident(projectTitle);
  });

    
  // fire lane view
  document
    .querySelector("#fire-lane")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireLane(projectTitle);
    });


  // Water source view
  document
    .querySelector("#water-source")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getWaterSource(projectTitle);
    });

  // Weather Condition view
  document
    .querySelector("#weather-condition")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getWeatherCondition(projectTitle);
    });

    

  // Surrounding structures view
  document
    .querySelector("#surroundings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSurroundings(projectTitle);
    });

  document.querySelector("#incident-building").click();
});

function changeActiveButton(newActiveButton) {
  currentActiveButton = document.getElementsByClassName("button active");
  if (currentActiveButton.length > 0)
    currentActiveButton[0].className = "button";
  newActiveButton.className += " active";
}

function loadNavPanels() {
  // Get the navigation panels
  topNav = document.querySelector("#top-nav-menu .navbar-nav");
  rightNav = document.querySelector("#right-nav-menu .navbar-nav");
  bottomNav = document.querySelector("#bottom-nav-menu .navbar-nav");
  leftNav = document.querySelector("#left-nav-menu .navbar-nav");

  // List of items to be placed on the navigation panels
  topNavItems = [
    "Incident Building",
    "Contact Addresses",
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
    "Extremely Valuable Materials",
    "Helipad",
  ];
  moreRightNavItems = [
    "Extremely Valuable Materials",
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
    "Area of Refuge",
    "FARS Fill Stations",
    "Emergency Power Outlets",
    "Smoke and Heat Removal System",
    "Smoke Control System",
    "Fire Pump",
    "Mass Notification System",
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

  var rightNavContentContainer = document.createElement("div");
  rightNavContentContainer.id = "right-nav-content";
  rightNav.appendChild(rightNavContentContainer);

  // Left navigation panel
  var headingItem = document.createElement("p");
  headingItem.id = "left-nav-heading";
  headingItem.innerText = "Building Safety Systems";
  leftNav.appendChild(headingItem);

  var leftNavContentContainer = document.createElement("div");
  leftNavContentContainer.id = "left-nav-content";
  leftNav.appendChild(leftNavContentContainer);

  // Add items to the navigation panels
  for (i = 0; i < topNavItems.length; i++) {
    addItemToNav(topNav, topNavItems[i]);
  }
  for (i = 0; i < rightNavItems.length; i++) {
    addItemToNav(rightNavContentContainer, rightNavItems[i]);
  }

  for (i = 0; i < bottomNavItems.length; i++) {
    addItemToNav(bottomNav, bottomNavItems[i]);
  }

  for (i = 0; i < leftNavItems.length; i++) {
    addItemToNav(leftNavContentContainer, leftNavItems[i]);
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
var buildingCoordinate = [];
var buildingAddress;
