function getIncidentBuilding(projectTitle) {
  // Fetch IncidentBuilding
  fetch("/incident_building/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showIncidentBuilding(results);
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
