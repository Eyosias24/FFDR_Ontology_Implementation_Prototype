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
  isMore = false;
  moreContent = "";
  containerClass = "";

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Construction type
  constructionType = getDataConstructionType["hasType"];
  constructionTypeDescription = getDataConstructionType["hasDescription"];

  subjectLabel = "Construction Type:";
  subjectValue = constructionType;
  containerID = "construction-type-container";
  isMore = true;
  moreContent = constructionTypeDescription;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

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
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

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
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Building Area

  subjectLabel = "Building Area:";
  subjectValue = getDataBuildingArea + " " + getDataBuildingAreaUnit;
  containerID = "building-area-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Building Height

  subjectLabel = "Building Height:";
  subjectValue = getDataBuildingHeight + " " + getDataBuildingHeightUnit;
  containerID = "building-height-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Number of storeys

  subjectLabel = "Number of Storeys:";
  subjectValue = getDataNumberOfStory;
  containerID = "number-of-storeys-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Number of Sublevels

  subjectLabel = "Number of Sublevels:";
  subjectValue = getDataNumberOfSublevel;
  containerID = "number-of-sublevel-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Number of Exits

  subjectLabel = "Number of Exits:";
  subjectValue = getDataNumberOfExit;
  containerID = "number-of-exit-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Hazardous Operations

  subjectLabel = "Hazardous Operations";
  subjectValue = getDataHazardousOperation;
  containerID = "hazardous-operations-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Toggle "More" button text
  moreButtons = document.querySelectorAll(".subject-parent-container a");
  for (i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener("click", function (event) {
      if (event.target.innerText == "More") event.target.innerText = "Less";
      else event.target.innerText = "More";
    });
  }
}

function showFireExtinguishingSystem(results) {
  if (results["automaticSprinklerSystem"].length > 0)
    results = results["automaticSprinklerSystem"];
  else results = results["alternativeAutomaticFireExtinguishingSystem"];

  console.log(results);
  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Set title
  subjectLabel = "System";
  subjectValue = "Coverage Zone";
  subjectStatus = "Status";
  containerClass = "automatic-fire-extinguishing-system";
  containerID = "header";
  // prettier-ignore
  createContainerFireExtinguishingSystem(mainView, subjectLabel, subjectValue,subjectStatus, containerID, containerClass);

  for (i = 0; i < results.length; i++) {
    // Get data
    systemType = results[i]["hasSystem"];
    getDataCoverageZone = results[i]["hasCoverageZone"];
    getDataLocationOfControlValve = results[i]["hasLocationOfControlValve"];
    getDataIsSystemActivated = results[i]["isSystemActivated"];

    subjectLabel = systemType;
    subjectValue = getDataCoverageZone;
    if (getDataIsSystemActivated) subjectStatus = "Activated";
    else subjectStatus = "Not Activated";

    moreContent = getDataLocationOfControlValve;
    containerClass = "automatic-fire-extinguishing-system";
    containerID = i;

    // prettier-ignore
    createContainerFireExtinguishingSystem(mainView, subjectLabel, subjectValue,subjectStatus, containerID, containerClass);
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "subject-more";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  allContainers = document.querySelectorAll(".subject-parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      if (event.target.getAttribute("status") == "less") {
        // Change container status
        event.target.setAttribute("status", "more");

        // Hide all items except the target item
        for (j = 0; j < allContainers.length; j++) {
          if (allContainers[j].id == "header") continue;
          if (allContainers[j] != event.target)
            allContainers[j].style.display = "none";
        }

        // Show more content
        document.querySelector("#subject-more").style.display = "block";

        // Add more content
        index = event.target.id;
        moreData = results[index];
        // Get data
        locationOfControlValve = moreData["hasLocationOfControlValve"];
        controlValveState = moreData["isControlValveOn"];
        requiredMaximumPressure = moreData["hasRequiredMaximumPressure"];
        requiredMinimumPressure = moreData["hasRequiredMinimumPressure"];
        pressureUnit = moreData["hasPressureUnit"];
        connectionWith = moreData["hasConnectionWith"];
        waterSource = moreData["hasWaterSource"]["hasName"];

        // Create data containers

        dataContainer = document.createElement("div");
        dataContainer.id = "data-container";
        moreContainer.appendChild(dataContainer);
        dataContainer.innerHTML = `
        <div class = "data-item" id="control-valve-state">
          <div class = "data-item-label"> Control Valve: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="control-valve-location">
          <div class = "data-item-label"> Control Valve Location: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="connected-with">
          <div class = "data-item-label"> Connected with: </div> 
          <div class = "data-item-value"> <a href="#"></a>  </div> 
        </div>
        <div class = "data-item" id="water-source">
          <div class = "data-item-label"> Water Source: </div> 
          <div class = "data-item-value"> <a href="#"></a> </div> 
        </div>
        <div class = "data-item" id="required-maximum-pressure">
          <div class = "data-item-label"> Required Maximum Pressure: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="required-minimum-pressure">
          <div class = "data-item-label"> Required Minimum Pressure: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

        // Insert values
        // Control Valve status
        // prettier-ignore
        if(controlValveState){
        dataContainer.querySelector("#control-valve-state .data-item-value").innerText = "On";
        dataContainer.querySelector("#control-valve-state .data-item-value").id = "on" 
      }else{
        dataContainer.querySelector("#control-valve-state .data-item-value").innerText = "Off";
        dataContainer.querySelector("#control-valve-state .data-item-value").id = "off" 
      }

        // Control Valve location

        dataContainer.querySelector(
          "#control-valve-location .data-item-value"
        ).innerText = locationOfControlValve;

        // required pressures
        dataContainer.querySelector(
          "#required-maximum-pressure .data-item-value"
        ).innerText = requiredMaximumPressure + " " + pressureUnit;

        dataContainer.querySelector(
          "#required-minimum-pressure .data-item-value"
        ).innerText = requiredMinimumPressure + " " + pressureUnit;

        // connection with
        if (Object.keys(connectionWith).length > 0)
          dataContainer.querySelector(
            "#connected-with .data-item-value a"
          ).innerText = "Alarm System";

        // Water sources
        dataContainer.querySelector(
          "#water-source .data-item-value a"
        ).innerText = waterSource;

        // Create graphic data containers

        graphicDataContainer = document.createElement("div");
        graphicDataContainer.id = "graphic-data-container";
        moreContainer.appendChild(graphicDataContainer);

        // Add a back button
        backButton = document.createElement("a");
        backButton.href = "#";
        backButton.id = "back-button";
        backButton.innerText = "Back";
        event.target.appendChild(backButton);

        // Event listener for back button
        backButton.addEventListener("click", function (event) {
          // Change container status
          event.target.parentNode.setAttribute("status", "less");
          backButton.innerText = "";
          for (j = 0; j < allContainers.length; j++) {
            // Show all items
            allContainers[j].style.display = "flex";
            // Clear and hide more content
            document.querySelector("#subject-more").style.display = "none";
            document.querySelector("#subject-more").innerHTML = "";
          }
        });
      }
    });
  }
}

// prettier-ignore
function createContainerFireExtinguishingSystem(mainView, subjectLabel, subjectValue,subjectStatus, containerID, containerClass, moreContent ) {
  parentContainer = document.createElement("div");
  parentContainer.id = containerID;
  parentContainer.className = containerClass;
  parentContainer.setAttribute("status","less")

  parentContainer.className = "subject-parent-container";

  labelContainer = document.createElement("div");
  labelContainer.className = "subject-label";
  labelContainer.innerText = subjectLabel;

  valueContainer = document.createElement("div");
  valueContainer.className = "subject-value";
  
  if (subjectValue != null)
  valueContainer.innerText = subjectValue;
  else 
  valueContainer.innerText = "N/A";


  statusContainer = document.createElement("div");
  statusContainer.className = "subject-status";
  if (subjectStatus == "Activated") 
  statusContainer.className = "subject-status-active";  
  statusContainer.innerText = subjectStatus;

  parentContainer.appendChild(labelContainer);
  parentContainer.appendChild(valueContainer);
  parentContainer.appendChild(statusContainer);

  mainView.appendChild(parentContainer);  
      
}

// prettier-ignore
function createContainer(mainView, subjectLabel, subjectValue, containerID="",containerClass="", isMore=false, moreContent = "") {
  parentContainer = document.createElement("div");
  if (containerID != "")
  parentContainer.id = containerID;
  else
  parentContainer.className = containerClass;

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
