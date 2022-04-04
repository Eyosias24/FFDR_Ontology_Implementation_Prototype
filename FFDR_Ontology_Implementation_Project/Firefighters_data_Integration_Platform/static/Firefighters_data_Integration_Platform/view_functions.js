function sort_by_key(array, key) {
  return array.sort(function (a, b) {
    var x = a[key];
    var y = b[key];
    return x < y ? -1 : x > y ? 1 : 0;
  });
}

// Show fire Incident Building
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
  buildingOccupancyTypeContainer = document.getElementById(containerID).querySelector(".second-child");
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
  moreButtons = document.querySelectorAll(".parent-container a");
  for (i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener("click", function (event) {
      if (event.target.innerText == "More") event.target.innerText = "Less";
      else event.target.innerText = "More";
    });
  }
}

// Show fire extinguishing system
function showFireExtinguishingSystem(results) {
  if (results["automaticSprinklerSystem"].length > 0)
    results = results["automaticSprinklerSystem"];
  else results = results["alternativeAutomaticFireExtinguishingSystem"];

  console.log(results);
  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "System";
  secondTitle = "Coverage Zone";
  thirdTitle = "Status";

  containerClass = "automatic-fire-extinguishing-system";
  containerID = "header";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  for (i = 0; i < results.length; i++) {
    // Get data
    systemType = results[i]["hasSystem"];
    getDataCoverageZone = results[i]["hasCoverageZone"];
    getDataLocationOfControlValve = results[i]["hasLocationOfControlValve"];
    getDataIsSystemActivated = results[i]["isSystemActivated"];

    firstCell = systemType;
    secondCell = getDataCoverageZone;
    if (getDataIsSystemActivated) {
      thirdCell = "Activated";
      thirdCellStatus = "negative";
    } else {
      thirdCell = "Not Activated";
      thirdCellStatus = "positive";
    }

    containerClass = "automatic-fire-extinguishing-system";
    containerID = i;

    createThreeColumnContainer(
      mainView,
      firstCell,
      secondCell,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  allContainers = document.querySelectorAll(".parent-container");

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
        document.querySelector("#more-container").style.display = "block";

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
            document.querySelector("#more-container").style.display = "none";
            document.querySelector("#more-container").innerHTML = "";
          }
        });
      }
    });
  }
}

// Show fire hydrant
function showFireHydrant(unsortedResults) {
  results = sort_by_key(unsortedResults, "hasDistanceFromIncidentBuilding");
  console.log(results);

  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Distance from building";
  secondTitle = "Fire flow";
  thirdTitle = "State";

  containerClass = "fire-hydrant";
  containerID = "header";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  for (i = 0; i < results.length; i++) {
    // Get data
    distanceUnit = results[i]["hasDistanceUnit"];
    distanceFromBuilding = results[i]["hasDistanceFromIncidentBuilding"];
    fireFlowUnit = results[i]["hasFireFlowUnit"];
    fireFlow = results[i]["hasFireFlow"];
    isFunctional = results[i]["isFunctional"];

    firstCell = distanceFromBuilding + " " + distanceUnit;
    secondCell = fireFlow + " " + fireFlowUnit;

    if (isFunctional) {
      thirdCell = "Functional";
      thirdCellStatus = "positive";
    } else {
      thirdCell = "Not Functional";
      thirdCellStatus = "negative";
    }

    containerID = i;

    createThreeColumnContainer(
      mainView,
      firstCell,
      secondCell,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  allContainers = document.querySelectorAll(".parent-container");

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
        document.querySelector("#more-container").style.display = "block";

        // Add more content
        index = event.target.id;
        moreData = results[index];
        // Get data
        hoseConnectionSize =
          moreData["hasHoseConnection"]["hasSize"] +
          " " +
          moreData["hasHoseConnection"]["hasSizeUnit"];

        hoseConnectionType = moreData["hasHoseConnection"]["hasType"];
        numberOfOutlet = moreData["hasNumberOfOutlet"];
        hydrantPosition = moreData["hasPosition"];
        hydrantType = moreData["hasType"];
        waterSource = moreData["hasWaterSource"]["hasName"];

        // Create data containers

        dataContainer = document.createElement("div");
        dataContainer.id = "data-container";
        moreContainer.appendChild(dataContainer);
        dataContainer.innerHTML = `
        <div class = "data-item" id="hose-connection-size">
          <div class = "data-item-label"> Hose Connection Size: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="hose-connection-type">
          <div class = "data-item-label"> Hose Connection Type: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="number-of-outlet">
          <div class = "data-item-label"> Number of Outlet: </div> 
          <div class = "data-item-value"> <a href="#"></a>  </div> 
        </div>
        <div class = "data-item" id="water-source">
          <div class = "data-item-label"> Water Source: </div> 
          <div class = "data-item-value"> <a href="#"></a> </div> 
        </div>
        <div class = "data-item" id="hydrant-position">
          <div class = "data-item-label"> Hydrant Position: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="hydrant-type">
          <div class = "data-item-label"> Hydrant Type: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

        // Insert values
        // Hose Connection Size

        dataContainer.querySelector(
          "#hose-connection-size .data-item-value"
        ).innerText = hoseConnectionSize;

        dataContainer.querySelector(
          "#hose-connection-type .data-item-value"
        ).innerText = hoseConnectionType;

        dataContainer.querySelector(
          "#number-of-outlet .data-item-value"
        ).innerText = numberOfOutlet;

        dataContainer.querySelector(
          "#hydrant-position .data-item-value"
        ).innerText = hydrantPosition;

        dataContainer.querySelector(
          "#hydrant-type .data-item-value"
        ).innerText = hydrantType;

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
            document.querySelector("#more-container").style.display = "none";
            document.querySelector("#more-container").innerHTML = "";
          }
        });
      }
    });
  }
}

// Populate more building utility data
function populateMoreBuildingUtilityData(dataCollection) {
  // Get data
  serviceProvider = dataCollection["hasAddress"]["hasName"];
  contactAddress = dataCollection["hasAddress"]["hasTelephoneNumber"];
  controlPanelName = dataCollection["hasControlPanel"]["hasName"];
  controlPanelLocation = dataCollection["hasControlPanel"]["hasLocation"];
  // Create data containers

  dataContainer = document.querySelector("#data-container");
  dataContainer.innerHTML = `
        <div class = "data-item" id="service-provider">
          <div class = "data-item-label"> Service Provider: </div> 
          <div class = "data-item-value"> <a href="#"></a> </div> 
        </div>
        <div class = "data-item" id="contact-address">
          <div class = "data-item-label"> Contact Address: </div> 
          <div class = "data-item-value"> <a href="#"></a>  </div> 
        </div>
        <div class = "data-item" id="blank" style=" height:20px">
          <div class = "data-item-label">  </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="control-panel-name">
          <div class = "data-item-label"> Control: </div> 
          <div class = "data-item-value"> <a href="#"></a> </div> 
        </div>
        <div class = "data-item" id="control-panel-location">
          <div class = "data-item-label"> Control Location: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        
        `;

  // Insert values
  dataContainer.querySelector(
    "#service-provider .data-item-value a"
  ).innerText = serviceProvider;

  dataContainer.querySelector("#contact-address .data-item-value a").innerText =
    contactAddress;

  dataContainer.querySelector(
    "#control-panel-name .data-item-value a"
  ).innerText = controlPanelName;

  dataContainer.querySelector(
    "#control-panel-location .data-item-value"
  ).innerText = controlPanelLocation;

  // Create graphic data containers
}
// Show Building Utility System
function showBuildingUtilitySystem(results) {
  primaryPowerSupplySystem = results["primaryPowerSupplySystem"][0];
  backUpPowerSupplySystem = results["backUpPowerSupplySystem"][0];
  gasSupplySystem = results["gasSupplySystem"][0];
  hvacSystem = results["hvacSystem"][0];
  waterSupplyAndSewerageSystem = results["waterSupplyandSewerageSystem"][0];

  console.log(results);

  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Building Utility";
  secondTitle = "State";

  containerClass = "building-utility-system";
  containerID = "header";
  secondCellStatus = "neutral";

  createTwoColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    containerID,
    containerClass
  );

  // primary Power Supply System
  // Get data
  isUtilityRunning = primaryPowerSupplySystem["isUtilityRunning"];
  firstCell = "Primary Power Supply System";

  if (isUtilityRunning) {
    secondCell = "Running";
    secondCellStatus = "positive";
  } else {
    secondCell = "Not Running";
    secondCellStatus = "negative";
  }
  containerID = "primary-power-supply-system";

  // Create container
  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  // Backup Power Supply System
  // Get data
  isUtilityRunning = backUpPowerSupplySystem["isUtilityRunning"];
  firstCell = "Backup Power Supply System";

  if (isUtilityRunning) {
    secondCell = "Running";
    secondCellStatus = "positive";
  } else {
    secondCell = "Not Running";
    secondCellStatus = "negative";
  }
  containerID = "backup-power-supply-system";

  // Create container
  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  // Gas Supply System
  // Get data
  isUtilityRunning = gasSupplySystem["isUtilityRunning"];
  firstCell = "Gas Supply System";

  if (isUtilityRunning) {
    secondCell = "Running";
    secondCellStatus = "positive";
  } else {
    secondCell = "Not Running";
    secondCellStatus = "negative";
  }
  containerID = "gas-supply-system";

  // Create container
  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  // HVAC System
  // Get data
  isUtilityRunning = hvacSystem["isUtilityRunning"];
  firstCell = "HVAC System";

  if (isUtilityRunning) {
    secondCell = "Running";
    secondCellStatus = "positive";
  } else {
    secondCell = "Not Running";
    secondCellStatus = "negative";
  }
  containerID = "hvac-System";

  // Create container
  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  // Water Supply and Sewerage System
  // Get data
  isUtilityRunning = waterSupplyAndSewerageSystem["isUtilityRunning"];
  firstCell = "Water Supply and Sewerage System";

  if (isUtilityRunning) {
    secondCell = "Running";
    secondCellStatus = "positive";
  } else {
    secondCell = "Not Running";
    secondCellStatus = "negative";
  }
  containerID = "water-supply-and-sewerage-system";

  // Create container
  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  allContainers = document.querySelectorAll(".parent-container");

  // Add more content
  // primary Power Supply System
  selectedContainer = document.querySelector("#primary-power-supply-system");
  selectedContainer.addEventListener("click", function (event) {
    if (event.target.getAttribute("status") == "less") {
      addMoreContentTwoColumnContainer(event.target, allContainers);
      populateMoreBuildingUtilityData(primaryPowerSupplySystem);
    }
  });
  // Backup Power Supply System
  selectedContainer = document.querySelector("#backup-power-supply-system");
  selectedContainer.addEventListener("click", function (event) {
    if (event.target.getAttribute("status") == "less") {
      addMoreContentTwoColumnContainer(event.target, allContainers);
      populateMoreBuildingUtilityData(backUpPowerSupplySystem);
    }
  });
  // Gas Supply System
  selectedContainer = document.querySelector("#gas-supply-system");
  selectedContainer.addEventListener("click", function (event) {
    if (event.target.getAttribute("status") == "less") {
      addMoreContentTwoColumnContainer(event.target, allContainers);
      populateMoreBuildingUtilityData(gasSupplySystem);
    }
  });
  selectedContainer = document.querySelector("#hvac-System");
  selectedContainer.addEventListener("click", function (event) {
    if (event.target.getAttribute("status") == "less") {
      addMoreContentTwoColumnContainer(event.target, allContainers);
      populateMoreBuildingUtilityData(hvacSystem);
    }
  });
  // Water Supply and Sewerage System
  selectedContainer = document.querySelector(
    "#water-supply-and-sewerage-system"
  );
  selectedContainer.addEventListener("click", function (event) {
    if (event.target.getAttribute("status") == "less") {
      addMoreContentTwoColumnContainer(event.target, allContainers);
      populateMoreBuildingUtilityData(waterSupplyAndSewerageSystem);
    }
  });
}

function addMoreContentTwoColumnContainer(selectedContainer, allContainers) {
  // Change container status
  selectedContainer.setAttribute("status", "more");

  // Hide all items except the target item
  for (j = 0; j < allContainers.length; j++) {
    if (allContainers[j].id == "header") continue;
    if (allContainers[j] != selectedContainer)
      allContainers[j].style.display = "none";
  }

  // Show more content
  document.querySelector("#more-container").style.display = "block";

  // Create data containers

  dataContainer = document.createElement("div");
  dataContainer.id = "data-container";
  moreContainer.appendChild(dataContainer);

  // Create graphic data containers

  graphicDataContainer = document.createElement("div");
  graphicDataContainer.id = "graphic-data-container";
  moreContainer.appendChild(graphicDataContainer);

  // Add a back button
  backButton = document.createElement("a");
  backButton.href = "#";
  backButton.id = "back-button";
  backButton.innerText = "Back";
  selectedContainer.appendChild(backButton);

  // Event listener for back button
  backButton.addEventListener("click", function (event) {
    event.stopPropagation();
    // Change container status

    event.target.innerText = "";
    for (j = 0; j < allContainers.length; j++) {
      // Show all items
      allContainers[j].style.display = "flex";
    }
    // Clear and hide more content
    document.querySelector("#more-container").style.display = "none";
    document.querySelector("#more-container").innerHTML = "";
    event.target.parentNode.setAttribute("status", "less");
  });
}

function createTwoColumnContainer(
  mainView,
  firstCell,
  secondCell,
  secondCellStatus,
  containerID,
  containerClass
) {
  parentContainer = document.createElement("div");
  parentContainer.id = containerID;
  parentContainer.className = containerClass;
  parentContainer.setAttribute("status", "less");

  parentContainer.className = "parent-container";

  firstChildContainer = document.createElement("div");
  firstChildContainer.className = "first-child";
  firstChildContainer.innerText = firstCell;

  secondChildContainer = document.createElement("div");
  secondChildContainer.className = "second-child";
  secondChildContainer.innerText = secondCell;
  secondChildContainer.id = secondCellStatus;

  parentContainer.appendChild(firstChildContainer);
  parentContainer.appendChild(secondChildContainer);

  mainView.appendChild(parentContainer);
}
// prettier-ignore
function createThreeColumnContainer(
  mainView,
  firstCell,
  secondCell,
  thirdCell,
  thirdCellStatus = "neutral",
  containerID,
  containerClass,
) {
  parentContainer = document.createElement("div");
  parentContainer.id = containerID;
  parentContainer.className = containerClass;
  parentContainer.setAttribute("status", "less");

  parentContainer.className = "parent-container";

  firstChildContainer = document.createElement("div");
  firstChildContainer.className = "first-child";
  firstChildContainer.innerText = firstCell;

  secondChildContainer = document.createElement("div");
  secondChildContainer.className = "second-child";

  if (secondCell != null) secondChildContainer.innerText = secondCell;
  else secondChildContainer.innerText = "N/A";

  thirdChildContainer = document.createElement("div");
  thirdChildContainer.className = "third-child";
  thirdChildContainer.innerText = thirdCell;
  thirdChildContainer.id = thirdCellStatus;
   

  parentContainer.appendChild(firstChildContainer);
  parentContainer.appendChild(secondChildContainer);
  parentContainer.appendChild(thirdChildContainer);

  mainView.appendChild(parentContainer);
}

// prettier-ignore
function createContainer(mainView, subjectLabel, subjectValue, containerID="",containerClass="", isMore=false, moreContent = "") {
  parentContainer = document.createElement("div");
  if (containerID != "")
  parentContainer.id = containerID;
  else
  parentContainer.className = containerClass;

  parentContainer.className = "parent-container";

  labelContainer = document.createElement("div");
  labelContainer.className = "first-child";
  labelContainer.innerHTML = subjectLabel;

  valueContainer = document.createElement("div");
  valueContainer.className = "second-child";
  
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

function showPortableFireExtinguisher(results) {
  console.log(results);

  // Get main view
  mainView = document.querySelector("#main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Fire Extinguisher Type";
  secondTitle = "Fire flow";
  thirdTitle = "Location";

  containerClass = "portable-fire-extinguisher";
  containerID = "header";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  for (i = 0; i < results.length; i++) {
    // Get data
    fireExtinguisherType = results[i]["hasType"];
    fireExtinguisherRating = results[i]["hasFireExtinguisherRating"];
    distanceLocation = results[i]["hasLocation"];

    firstCell = fireExtinguisherType;
    secondCell = fireExtinguisherRating;
    thirdCell = distanceLocation;

    containerID = i;

    createThreeColumnContainer(
      mainView,
      firstCell,
      secondCell,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      addMoreContentThreeColumnContainer(
        event,
        allContainers,
        additionalWrittenData
      );

      // Add additional data

      index = event.target.id;
      moreData = results[index];
    });
  }
}

function addMoreContentThreeColumnContainer(
  event,
  allContainers,
  additionalWrittenData = false
) {
  selectedContainer = event.target;
  if (selectedContainer.getAttribute("status") == "less") {
    // Change container status
    selectedContainer.setAttribute("status", "more");

    // Hide all items except the target item
    for (j = 0; j < allContainers.length; j++) {
      if (allContainers[j].id == "header") continue;
      if (allContainers[j] != selectedContainer)
        allContainers[j].style.display = "none";
    }

    // Show more content
    document.querySelector("#more-container").style.display = "block";
    if (additionalWrittenData) {
      // Create data containers

      dataContainer = document.createElement("div");
      dataContainer.id = "data-container";
      moreContainer.appendChild(dataContainer);
    }

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
        document.querySelector("#more-container").style.display = "none";
        document.querySelector("#more-container").innerHTML = "";
      }
    });
  }
}
