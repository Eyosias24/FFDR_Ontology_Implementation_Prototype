function getIncidentBuilding(projectTitle) {
  // Fetch IncidentBuilding
  fetch("/incident_building/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showIncidentBuilding(results);
      // do things
    });
}

function getContactAddresses() {
  // Fetch BuildingManagerContactAddress
  fetch("/contact_addresses/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showContactAddresses(results);
      // do things
    });
}

function getAutomaticFireExtinguishingSystem(projectTitle) {
  // Fetch AutomaticSprinklerSystem
  fetch("/automatic_fire_extinguishing_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFireExtinguishingSystem(results);
      // do things
    });
}

function getPortableFireExtinguishers(projectTitle) {
  // Fetch PortableFireExtinguisher
  fetch("/portable_fire_extinguisher/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showPortableFireExtinguisher(results);
      // do things
    });
}

function getFireAlarmSystem(projectTitle) {
  // Fetch FireAlarmSystem
  fetch("/fire_alarm_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFireAlarmSystem(results);
      // do things
    });
}

function getFireDepartmentConnections(projectTitle) {
  // Fetch FireDepartmentConnection
  fetch("/fire_department_connection/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFireDepartmentConnections(results);
      // do things
    });
}

function getFireHoseConnections(projectTitle) {
  // Fetch FireHoseConnection
  fetch("/fire_hose_connection/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFireHoseConnection(results);
      // do things
    });
}
function getStandpipeSystem(projectTitle) {
  // Fetch StandpipeSystem
  fetch("/standpipe_system/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showStandpipeSystem(results);
      // do things
    });
}

function getSensorsAndDetectors(projectTitle) {
  // Fetch CbrSensor
  fetch("/sensors_and_detectors/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showSensorsAndDetectors(results);
      // do things
    });
}

function getFireAndSmokeProtectionElements(projectTitle) {
  // Fetch FireBarrier
  fetch("/fire-and-smoke-protection-elements/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFireAndSmokeProtectionElements(results);
      // do things
    });
}

function getFireHydrant(projectTitle) {
  // Fetch FireHydrant
  fetch("/fire_hydrant/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFireHydrant(results);
      // do things
    });
}

function getBuildingUtilitySystems(projectTitle) {
  // Fetch Building Utility Systems
  fetch("/building_utility_systems/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showBuildingUtilitySystem(results);
      // do things
    });
}

function getFacade(projectTitle) {
  // Fetch SmokeControlSystem
  fetch("/facade/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showFacade(results);
      // do things
    });
}

function getNonStructuralElements(projectTitle) {
  // Fetch non structural elements

  showNonStructuralElements(projectTitle);
}

function getStructuralElements(projectTitle) {
  // Fetch structural elements

  // Fetch KeyBox
  fetch("/structural-elements/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showStructuralElements(results);
      // do things
    });
}
function getKeybox(projectTitle) {
  // Fetch KeyBox
  fetch("/key_box/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showKeyBox(results);
      // do things
    });
}

function getHazardousMaterials() {
  // Fetch HazardousMaterial
  fetch("/hazardous_material/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showHazardousMaterial(results);
      // do things
    });
}

function getConcealedSpaces(projectTitle) {
  // Fetch ConcealedSpace
  fetch("/concealed_space/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showConcealedSpace(results);
      // do things
    });
}

function getVerticalOpenings(projectTitle) {
  // Fetch VerticalOpening
  fetch("/vertical_opening/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showVerticalOpening(results);
      // do things
    });
}

function getRoofTopElement(projectTitle) {
  // Fetch RoofTopElement
  fetch("/roof_top_element/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showRoofTopElement(results);
      // do things
    });
}
