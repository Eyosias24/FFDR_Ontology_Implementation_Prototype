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
