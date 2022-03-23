function showIncidentBuilding(results) {
  getDataBuildingAddress = results["hasAddress"];
  getDataConstructionType = results["hasConstructionType"];
  getDataOccupancy = results["hasOccupancy"];
  getDataOccupantLoad = results["hasOccupantLoad"];
  getDataBuildingArea = results["hasBuildingArea"];
  getDataBuildingAreaUnit = results["hasBuildingAreaUnit"];
  getDataBuildingHeight = results["hasBuildingHeight"];
  getDataBuildingHeightUnit = results["hasBuildingHeightUnit"];
  getDataBuildingPlan = results["hasBuildingPlan"];
  getDataCondition = results["hasCondition"];
  getDataNumberOfExit = results["hasNumberOfExit"];
  getDataNumberOfStory = results["hasNumberOfStory"];
  getDataNumberOfSublevel = results["hasNumberOfSublevel"];
  getDataHazardousOperation = results["includeHazardousOperation"];

  console.log(results);

  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Building address
  streetAddress = getDataBuildingAddress["hasStreetAddress"];
  postalCode = getDataBuildingAddress["hasPostalCode"];
  city = getDataBuildingAddress["hasCity"];

  buildingAddress = streetAddress + ", " + postalCode + " " + city;

  subjectLabel = "Building Address:";
  subjectValue = buildingAddress;
  containerID = "building-address-container";
  isMore = true;
  moreContent = "";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Construction type
  constructionType = getDataConstructionType["hasType"];
  constructionTypeDescription = getDataConstructionType["hasDescription"];

  subjectLabel = "Construction Type:";
  subjectValue = constructionType;
  containerID = "construction-type-container";
  isMore = true;
  moreContent = constructionTypeDescription;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Occupancy
  buildingOccupancyType = getDataOccupancy["hasOccupancy"];
  buildingOccupancyDescription = getDataOccupancy["hasDescription"];
  isBuildingAbandoned = getDataOccupancy["isAbandoned"];

  subjectLabel = "Building Occupancy Type:";
  subjectValue = buildingOccupancyType;
  containerID = "building-occupancy-type-container";
  isMore = true;
  moreContent = buildingOccupancyDescription;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // prettier-ignore
  buildingOccupancyTypeContainer = document.getElementById(containerID).querySelector(".subject-value");
  if (isBuildingAbandoned)
    buildingOccupancyTypeContainer.innerHTML += "<div>(Abandoned)</div>";
  else buildingOccupancyTypeContainer.innerHTML += "<div> (In Use) </div>";

  // Occupant Load

  subjectLabel = "Occupant Load:";
  subjectValue = getDataOccupantLoad + " People";
  containerID = "occupant-load-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Building Area

  subjectLabel = "Building Area:";
  subjectValue = getDataBuildingArea + " " + getDataBuildingAreaUnit;
  containerID = "building-area-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Building Height

  subjectLabel = "Building Height:";
  subjectValue = getDataBuildingHeight + " " + getDataBuildingHeightUnit;
  containerID = "building-height-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Number of storeys

  subjectLabel = "Number of Storeys:";
  subjectValue = getDataNumberOfStory;
  containerID = "number-of-storeys-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Number of Sublevels

  subjectLabel = "Number of Sublevels:";
  subjectValue = getDataNumberOfSublevel;
  containerID = "number-of-sublevel-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Number of Exits

  subjectLabel = "Number of Exits:";
  subjectValue = getDataNumberOfExit;
  containerID = "number-of-exit-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Hazardous Operations

  subjectLabel = "Hazardous Operations";
  subjectValue = getDataHazardousOperation;
  containerID = "hazardous-operations-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);
  // Toggle "More" button text
  moreButtons = document.querySelectorAll(".subject-parent-container a");
  for (i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener("click", function (event) {
      if (event.target.innerText == "More") event.target.innerText = "Less";
      else event.target.innerText = "More";
    });
  }
}

// prettier-ignore
function createContainer(mainView, subjectLabel, subjectValue, containerID, isMore=false, moreContent = "") {
  parentContainer = document.createElement("div");
  parentContainer.id = containerID;
  parentContainer.className = "subject-parent-container";

  labelContainer = document.createElement("div");
  labelContainer.className = "subject-label";
  labelContainer.innerHTML = subjectLabel;

  valueContainer = document.createElement("div");
  valueContainer.className = "subject-value";
  
  if (subjectValue != null)
  valueContainer.innerHTML = subjectValue;
  else 
  valueContainer.innerHTML = "N/A";

  parentContainer.appendChild(labelContainer);
  parentContainer.appendChild(valueContainer);
  mainView.appendChild(parentContainer);

  
  if (isMore) {
    moreLinkContainer = document.createElement("div");
    moreLinkContainer.className = "more-link";
    moreLinkContainer.innerHTML = ` 
  <a  data-toggle="collapse"  href="#more-${containerID}" role="button" aria-expanded="false" aria-controls="collapseExample">
    More
  </a>`;
    parentContainer.appendChild(moreLinkContainer);

    moreContentContainer = document.createElement("div");
    moreContentContainer.className = "more-content-container";
    moreContentContainer.innerHTML = `<div class="collapse" id="more-${containerID}">
  <div class="card card-body">     
  ${moreContent}
  </div>
</div>`;
    mainView.appendChild(moreContentContainer);
  }
}

function showIncidentBuilding(results) {
  console.log(results);
  getDataBuildingAddress = results["hasAddress"];
  getDataConstructionType = results["hasConstructionType"];
  getDataOccupancy = results["hasOccupancy"];
  getDataOccupantLoad = results["hasOccupantLoad"];
  getDataBuildingArea = results["hasBuildingArea"];
  getDataBuildingAreaUnit = results["hasBuildingAreaUnit"];
  getDataBuildingHeight = results["hasBuildingHeight"];
  getDataBuildingHeightUnit = results["hasBuildingHeightUnit"];
  getDataBuildingPlan = results["hasBuildingPlan"];
  getDataCondition = results["hasCondition"];
  getDataNumberOfExit = results["hasNumberOfExit"];
  getDataNumberOfStory = results["hasNumberOfStory"];
  getDataNumberOfSublevel = results["hasNumberOfSublevel"];
  getDataHazardousOperation = results["includeHazardousOperation"];

  console.log(results);

  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Building address
  streetAddress = getDataBuildingAddress["hasStreetAddress"];
  postalCode = getDataBuildingAddress["hasPostalCode"];
  city = getDataBuildingAddress["hasCity"];

  buildingAddress = streetAddress + ", " + postalCode + " " + city;

  subjectLabel = "Building Address:";
  subjectValue = buildingAddress;
  containerID = "building-address-container";
  isMore = true;
  moreContent = "";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Construction type
  constructionType = getDataConstructionType["hasType"];
  constructionTypeDescription = getDataConstructionType["hasDescription"];

  subjectLabel = "Construction Type:";
  subjectValue = constructionType;
  containerID = "construction-type-container";
  isMore = true;
  moreContent = constructionTypeDescription;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Occupancy
  buildingOccupancyType = getDataOccupancy["hasOccupancy"];
  buildingOccupancyDescription = getDataOccupancy["hasDescription"];
  isBuildingAbandoned = getDataOccupancy["isAbandoned"];

  subjectLabel = "Building Occupancy Type:";
  subjectValue = buildingOccupancyType;
  containerID = "building-occupancy-type-container";
  isMore = true;
  moreContent = buildingOccupancyDescription;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // prettier-ignore
  buildingOccupancyTypeContainer = document.getElementById(containerID).querySelector(".subject-value");
  if (isBuildingAbandoned)
    buildingOccupancyTypeContainer.innerHTML += "<div>(Abandoned)</div>";
  else buildingOccupancyTypeContainer.innerHTML += "<div> (In Use) </div>";

  // Occupant Load

  subjectLabel = "Occupant Load:";
  subjectValue = getDataOccupantLoad + " People";
  containerID = "occupant-load-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Building Area

  subjectLabel = "Building Area:";
  subjectValue = getDataBuildingArea + " " + getDataBuildingAreaUnit;
  containerID = "building-area-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Building Height

  subjectLabel = "Building Height:";
  subjectValue = getDataBuildingHeight + " " + getDataBuildingHeightUnit;
  containerID = "building-height-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Number of storeys

  subjectLabel = "Number of Storeys:";
  subjectValue = getDataNumberOfStory;
  containerID = "number-of-storeys-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Number of Sublevels

  subjectLabel = "Number of Sublevels:";
  subjectValue = getDataNumberOfSublevel;
  containerID = "number-of-sublevel-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Number of Exits

  subjectLabel = "Number of Exits:";
  subjectValue = getDataNumberOfExit;
  containerID = "number-of-exit-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);

  // Hazardous Operations

  subjectLabel = "Hazardous Operations";
  subjectValue = getDataHazardousOperation;
  containerID = "hazardous-operations-container";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID, isMore, moreContent);
  // Toggle "More" button text
  moreButtons = document.querySelectorAll(".subject-parent-container a");
  for (i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener("click", function (event) {
      if (event.target.innerText == "More") event.target.innerText = "Less";
      else event.target.innerText = "More";
    });
  }
}
