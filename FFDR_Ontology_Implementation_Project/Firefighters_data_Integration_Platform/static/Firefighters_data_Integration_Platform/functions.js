function getIncidentBuilding(projectTitle) {
  LoadingPage()


  if(Object.keys(incidentBuildingResults).length > 0)

   showIncidentBuilding(incidentBuildingResults);
   
  else
  // Fetch IncidentBuilding
  fetch("/incident_building/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      incidentBuildingResults = results
      showIncidentBuilding(incidentBuildingResults);
      // do things
    });
}

function getContactAddresses() {
  LoadingPage()


  if(Object.keys(contactAddressResults).length > 0)

   showContactAddresses(contactAddressResults);

  else

  // Fetch BuildingManagerContactAddress
  fetch("/contact_addresses/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      contactAddressResults = results
      
      showContactAddresses(contactAddressResults);
      // do things
    });
}

function getBuildingPlans() {
  LoadingPage()


  if(Object.keys(BuildingPlansResults).length > 0)

   showBuildingPlans(BuildingPlansResults);

  else

  // Fetch Building Plans
  fetch("/building_plans/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      BuildingPlansResults = results
      
      showBuildingPlans(BuildingPlansResults);
      // do things
    });
}

function getFireCommandCenter() {
  LoadingPage()


  if(Object.keys(fireCommandCenterResults).length > 0)

   showFireCommandCenter(fireCommandCenterResults);

  else

  // Fetch Building Plans
  fetch("/fire_command_center/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      fireCommandCenterResults = results
      
      showFireCommandCenter(fireCommandCenterResults);
      // do things
    });
}


function getControlPanels() {
  LoadingPage()


  if(Object.keys(controlPanelResults).length > 0)

   showControlPanel(controlPanelResults);

  else

  // Fetch Building Plans
  fetch("/control_panels/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      controlPanelResults = results
      
      showControlPanel(controlPanelResults);
      // do things
    });
}

function getAutomaticFireExtinguishingSystem(projectTitle) {
  LoadingPage()

  if(Object.keys(fireExtinguishingSystemResults).length > 0)
   showFireExtinguishingSystem(fireExtinguishingSystemResults);
  else

  // Fetch AutomaticSprinklerSystem
  fetch("/automatic_fire_extinguishing_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {

      fireExtinguishingSystemResults = results

      showFireExtinguishingSystem(results);
      // do things
    });
}

function getPortableFireExtinguishers(projectTitle) {
  LoadingPage()

  if(Object.keys(portableFireExtinguisherResults).length > 0)
   showPortableFireExtinguisher(portableFireExtinguisherResults);
  else
  // Fetch PortableFireExtinguisher
  fetch("/portable_fire_extinguisher/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {

      portableFireExtinguisherResults = results
      showPortableFireExtinguisher(results);
      // do things
    });
}

function getFireAlarmSystem(projectTitle) {
  LoadingPage()

  if(Object.keys(fireAlarmSystemResults).length > 0)
   showFireAlarmSystem(fireAlarmSystemResults);
  else
  // Fetch FireAlarmSystem
  fetch("/fire_alarm_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {

      fireAlarmSystemResults = results
      showFireAlarmSystem(results);
      // do things
    });
}

function getFireDepartmentConnections(projectTitle) {
  LoadingPage()

  if(Object.keys(fireDepartmentConnectionsResults).length > 0)
   showFireDepartmentConnections(fireDepartmentConnectionsResults);
  else
  // Fetch FireDepartmentConnection
  fetch("/fire_department_connection/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {

      fireDepartmentConnectionsResults = results
      showFireDepartmentConnections(results);
      // do things
    });
}

function getFireHoseConnections(projectTitle) {
  LoadingPage()

  if(Object.keys(fireHoseConnectionResults).length > 0)
   showFireHoseConnection(fireHoseConnectionResults);
  else
  // Fetch FireHoseConnection
  fetch("/fire_hose_connection/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      fireHoseConnectionResults = results
      showFireHoseConnection(results);
      // do things
    });
}
function getStandpipeSystem(projectTitle) {
  LoadingPage()

  if(Object.keys(standpipeSystemResults).length > 0)
   showStandpipeSystem(standpipeSystemResults);
  else
  // Fetch StandpipeSystem
  fetch("/standpipe_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      standpipeSystemResults = results
      showStandpipeSystem(results);
      // do things
    });
}

function getSensorsAndDetectors(projectTitle) {
  LoadingPage()

  if(Object.keys(sensorsAndDetectorsResults).length > 0)
   showSensorsAndDetectors(sensorsAndDetectorsResults);
  else
  // Fetch CbrSensor
  fetch("/sensors_and_detectors/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      sensorsAndDetectorsResults = results
      showSensorsAndDetectors(results);
      // do things
    });
}

function getFireAndSmokeProtectionElements(projectTitle) {
  LoadingPage()

  if(Object.keys(fireAndSmokeProtectionElementsResults).length > 0)
   showFireAndSmokeProtectionElements(fireAndSmokeProtectionElementsResults);
  else
  // Fetch FireBarrier
  fetch("/fire_and_smoke_protection_elements/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      fireAndSmokeProtectionElementsResults = results
      showFireAndSmokeProtectionElements(results);
      // do things
    });
}

function getAreaOfRefuge(projectTitle) {
  LoadingPage()

  if(Object.keys(areaOfRefugeResults).length > 0)
   showAreaOfRefuge(areaOfRefugeResults);
  else
  // Fetch FireHydrant
  fetch("/area_of_refuge/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      areaOfRefugeResults = results
      showAreaOfRefuge(results);
      // do things
    });
}

function getFarsFillStations(projectTitle) {
  LoadingPage()

  if(Object.keys(farsFillStationsResults).length > 0)
   showFarsFillStations(farsFillStationsResults);
  else
  // Fetch FireHydrant
  fetch("/fars_fill_stations/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      farsFillStationsResults = results
      showFarsFillStations(results);
      // do things
    });
}


function getEmergencyPowerOutlets(projectTitle) {
  LoadingPage()

  if(Object.keys(EmergencyPowerOutletsResults).length > 0)
   showEmergencyPowerOutlets(EmergencyPowerOutletsResults);
  else
  // Fetch FireHydrant
  fetch("/emergency_power_outlets/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      EmergencyPowerOutletsResults = results
      showEmergencyPowerOutlets(results);
      // do things
    });
}



function getSmokeAndHeatRemovalSystem(projectTitle) {
  LoadingPage()

  if(Object.keys(smokeAndHeatRemovalSystemResults).length > 0)
   showSmokeAndHeatRemovalSystem(smokeAndHeatRemovalSystemResults);
  else
  // Fetch FireHydrant
  fetch("/smoke_and_heat_removal_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      smokeAndHeatRemovalSystemResults = results
      showSmokeAndHeatRemovalSystem(results);
      // do things
    });
}

function getSmokeControlSystem(projectTitle) {
  LoadingPage()

  if(Object.keys(smokeControlSystemResults).length > 0)
   showSmokeControlSystem(smokeControlSystemResults);
  else
  // Fetch FireHydrant
  fetch("/smoke_control_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      smokeControlSystemResults = results
      showSmokeControlSystem(results);
      // do things
    });
}


function getFirePump(projectTitle) {
  LoadingPage()

  if(Object.keys(firePumpResults).length > 0)
   showFirePump(firePumpResults);
  else
  // Fetch FireHydrant
  fetch("/fire_pump/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      firePumpResults = results
      showFirePump(results);
      // do things
    });
}



function getMassNotificationSystem(projectTitle) {
  LoadingPage()

  if(Object.keys(massNotificationSystemResults).length > 0)
   showMassNotificationSystem(massNotificationSystemResults);
  else
  // Fetch FireHydrant
  fetch("/mass_notification_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      massNotificationSystemResults = results
      showMassNotificationSystem(results);
      // do things
    });
}


function getFireHydrant(projectTitle) {
  LoadingPage()

  if(Object.keys(fireHydrantResults).length > 0)
   showFireHydrant(fireHydrantResults);
  else
  // Fetch FireHydrant
  fetch("/fire_hydrant/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      fireHydrantResults = results
      showFireHydrant(results);
      // do things
    });
}

function getBuildingUtilitySystems(projectTitle) {
  LoadingPage()

  if(Object.keys(buildingUtilitySystemResults).length > 0)
   showBuildingUtilitySystem(buildingUtilitySystemResults);
  else
  // Fetch Building Utility Systems
  fetch("/building_utility_systems/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      buildingUtilitySystemResults = results
      showBuildingUtilitySystem(results);
      // do things
    });
}

function getFacade(projectTitle) {
  LoadingPage()

  if(Object.keys(facadeResults).length > 0)
   showFacade(facadeResults);
  else
  // Fetch SmokeControlSystem
  fetch("/facade/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      facadeResults = results
      showFacade(results);
      // do things
    });
}

function getNonStructuralElements(projectTitle) {
  LoadingPage()
  // Fetch non structural elements

  showNonStructuralElements(projectTitle);
}


// function getNonStructuralElements(projectTitle) {
//   LoadingPage()
//   // Fetch non structural elements


//   if(Object.keys(nonStructuralElementsResults).length > 0)
//    showNonStructuralElements(nonStructuralElementsResults);
//   else
//   // Fetch structural elements
//   fetch("/non_structural_elements/" + projectTitle)
//     .then((response) => response.json())
//     .then((results) => {
//       nonStructuralElementsResults = results
//       showNonStructuralElements(nonStructuralElementsResults);
//       // do things
//     });

// }

function getStructuralElements(projectTitle) {
  LoadingPage()

  if(Object.keys(structuralElementsResults).length > 0)
   showStructuralElements(structuralElementsResults);
  else
  // Fetch structural elements
  fetch("/structural_elements/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      structuralElementsResults = results
      showStructuralElements(results);
      // do things
    });
}
function getKeybox(projectTitle) {
  LoadingPage()

  if(Object.keys(keyBoxResults).length > 0)
   showKeyBox(keyBoxResults);
  else
  // Fetch KeyBox
  fetch("/key_box/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     keyBoxResults = results
      showKeyBox(results);
      // do things
    });
}

function getHazardousMaterials() {
  LoadingPage()

  if(Object.keys(hazardousMaterialResults).length > 0)
   showHazardousMaterial(hazardousMaterialResults);
  else
  // Fetch HazardousMaterial
  fetch("/hazardous_material/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     hazardousMaterialResults = results
      showHazardousMaterial(results);
      // do things
    });
}

function getConcealedSpaces(projectTitle) {
  LoadingPage()

  if(Object.keys(concealedSpaceResults).length > 0)
   showConcealedSpace(concealedSpaceResults);
  else
  // Fetch ConcealedSpace
  fetch("/concealed_space/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     concealedSpaceResults = results
      showConcealedSpace(results);
      // do things
    });
}

function getVerticalOpenings(projectTitle) {
  LoadingPage()

  if(Object.keys(verticalOpeningResults).length > 0)
   showVerticalOpening(verticalOpeningResults);
  else
  // Fetch VerticalOpening
  fetch("/vertical_opening/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     verticalOpeningResults = results
      showVerticalOpening(results);
      // do things
    });
}

function getRoofTopElement(projectTitle) {
  LoadingPage()

  if(Object.keys(roofTopElementResults).length > 0)
   showRoofTopElement(roofTopElementResults);
  else
  // Fetch RoofTopElement
  fetch("/roof_top_element/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     roofTopElementResults = results
      showRoofTopElement(results);
      // do things
    });
}


function getExtremelyValuableMaterials(projectTitle) {
  LoadingPage()

  if(Object.keys(extremelyValuableMaterialsResults).length > 0)
   showExtremelyValuableMaterials(extremelyValuableMaterialsResults);
  else
  // Fetch extremely Valuable Materials
  fetch("/extremely_valuable_materials/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     extremelyValuableMaterialsResults = results
      showExtremelyValuableMaterials(results);
      // do things
    });
}


function getHelipad(projectTitle) {
  LoadingPage()

  if(Object.keys(helipadResults).length > 0)
   showHelipad(helipadResults);
  else
  // Fetch extremely Valuable Materials
  fetch("/helipad/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     helipadResults = results
      showHelipad(results);
      // do things
    });
}


function getRoadToIncident(){
  
  LoadingPage()

  if(Object.keys(roadToIncidentResults).length > 0)
   showRoadToIncident(roadToIncidentResults);
  else
  
// Fetch RoadToIncident
fetch('/road_to_incident/' + projectTitle).then((response) => response.json()).then((results) => {
     roadToIncidentResults = results
showRoadToIncident(roadToIncidentResults)
// do things
});
}


function getFireLane(projectTitle){
  LoadingPage()

  if(Object.keys(fireLaneResults).length > 0)
   showFireLane(fireLaneResults);
  else
// Fetch FireLane
fetch('/fire_lane/' + projectTitle).then((response) => response.json()).then((results) => {
     fireLaneResults = results
showFireLane(results)
// do things
});
}



function getWaterSource(projectTitle) {
  LoadingPage()

  if(Object.keys(waterSourceResults).length > 0)
   showWaterSource(waterSourceResults);
  else
  // Fetch water Source 
  fetch("/water_source/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     waterSourceResults = results
      showWaterSource(results);
      // do things
    });
}


function getWeatherCondition(projectTitle) {
  LoadingPage()

  if(Object.keys(weatherConditionResults).length > 0)
   showWeatherCondition(weatherConditionResults);
  else
  // Fetch Weather data
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Espoo&units=metric&mode=xml&appid=0fa663749dc11a9e6dcec438f2679b2d"
  )
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then((results) => {
     weatherConditionResults = results
      showWeatherCondition(weatherConditionResults);
    });
}

function getSurroundings(projectTitle) {
  LoadingPage()

  if(Object.keys(surroundingsResults).length > 0)
   showSurroundings(surroundingsResults);
  else
  // Fetch Surroundings
  fetch("/surroundings/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
     surroundingsResults = results
      showSurroundings(results);
      // do things
    });
}

function LoadingPage(){

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = `<div id="container">
  <div id="loader"></div>  
</div>
<h4>Loader #4</h4>`

document.querySelector("#body-container").className = "disabled-view";

}


function LoadingNonStructuralPage(){

  // Get main view
  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = `<div id="container">
  <div id="loader"></div>  
</div>
<h4>Loader #4</h4>`

document.querySelector("#body-container").className = "disabled-view";

}

function enableNavigation(){
  if(document.querySelectorAll("#table-view").length > 0)
  createTable()
document.querySelector("#body-container").className = "enabled-view";
}