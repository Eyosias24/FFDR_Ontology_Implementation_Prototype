function getIncidentBuilding(projectTitle) {
  // Fetch IncidentBuilding
  fetch("/incident_building/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      showIncidentBuilding(results);
      // do things
    });
}
