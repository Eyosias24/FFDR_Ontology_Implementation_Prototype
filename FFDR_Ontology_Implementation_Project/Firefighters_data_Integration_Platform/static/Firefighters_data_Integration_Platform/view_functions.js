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
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = "";

  // Building address
  streetAddress = getDataBuildingAddress["hasStreetAddress"];
  postalCode = getDataBuildingAddress["hasPostalCode"];
  city = getDataBuildingAddress["hasCity"];

  buildingAddress = streetAddress + ", " + postalCode + " " + city;

  // Convert address to coordinate
  addressToCoordinate(buildingAddress);

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

  // More container

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "building-address-container") {
      allContainers[i].addEventListener("click", function (event) {
        additionalGraphicData = true;
        addMoreContentContainer(
          event,
          allContainers,
          additionalWrittenData,
          additionalGraphicData
        );

        // Get graphical data container
        graphicDataContainer = document.querySelector(
          "#graphic-data-container"
        );
        graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
        fetchMap(buildingAddress);
      });
    }

    if (allContainers[i].id == "number-of-exit-container") {
      allContainers[i].addEventListener("click", function (event) {
        additionalGraphicData = true;
        addMoreContentContainer(
          event,
          allContainers,
          additionalWrittenData,
          additionalGraphicData
        );
        // Get graphical data container
        graphicDataContainer = document.querySelector(
          "#graphic-data-container"
        );
        graphicDataContainer.innerHTML = `
<div class="image-container">
<img>
</div>
`;
        imageContainer = document.querySelector(".image-container img");
        imageContainer.src =
          "/static/Firefighters_data_Integration_Platform/media/first-floor-plan-exit.png";
      });
    }
  }
}

function showContactAddresses(results) {
  console.log(results);

  // Get data
  // Building
  buildingContactAddress = results["buildingContactAddress"];

  buildingEngineerContactAddress =
    buildingContactAddress["buildingEngineerContactAddress"][0];
  buildingManagerContactAddress =
    buildingContactAddress["buildingManagerContactAddress"][0];
  ownerContactAddress = buildingContactAddress["ownerContactAddress"][0];

  ownerContactAddress.hasRole = "Building Owner";
  buildingManagerContactAddress.hasRole = "Building Manager";
  buildingEngineerContactAddress.hasRole = "Building Engineer";

  buildingContactAddress = [
    ownerContactAddress,
    buildingManagerContactAddress,
    buildingEngineerContactAddress,
  ];
  // Building utility

  buildingUtilityContactAddress =
    results["buildingUtilitySystemContactAddress"];

  primaryPowerSupplySystemContactAddress =
    buildingUtilityContactAddress["primaryPowerSupplySystem"][0]["hasAddress"];

  backUpPowerSupplySystemContactAddress =
    buildingUtilityContactAddress["backUpPowerSupplySystem"][0]["hasAddress"];

  gasSupplySystemContactAddress =
    buildingUtilityContactAddress["gasSupplySystem"][0]["hasAddress"];

  hvacSystemContactAddress =
    buildingUtilityContactAddress["hvacSystem"][0]["hasAddress"];

  waterSupplyandSewerageSystemContactAddress =
    buildingUtilityContactAddress["waterSupplyandSewerageSystem"][0][
      "hasAddress"
    ];

  primaryPowerSupplySystemContactAddress.hasRole =
    "Primary Power Supply System";
  backUpPowerSupplySystemContactAddress.hasRole = "Backup Power Supply System";
  gasSupplySystemContactAddress.hasRole = "Gas Supply System";
  hvacSystemContactAddress.hasRole = "HVAC System ";
  waterSupplyandSewerageSystemContactAddress.hasRole =
    "Water Supply And Sewerage System";

  buildingUtilityContactAddress = [
    primaryPowerSupplySystemContactAddress,
    backUpPowerSupplySystemContactAddress,
    gasSupplySystemContactAddress,
    hvacSystemContactAddress,
    waterSupplyandSewerageSystemContactAddress,
  ];

  // ESP
  emergencyServiceProviderContactAddress =
    results["emergencyServiceProviderContactAddress"];

  // public Safety Agency Contact Address
  publicSafetyAgencyContactAddress =
    results["publicSafetyAgencyContactAddress"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "contact-address";
  mainView.innerHTML = `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="building-contact-address">
      <a class="nav-link active" href="#">Building</a>
    </li>
    <li class="nav-item" id="emergency-service-provider-contact-address">
      <a class="nav-link" href="#">Emergency Service Providers</a>
    </li>  
    <li class="nav-item" id="public-safety-agency-contact-address">
      <a class="nav-link" href="#">Public Safety Agencies</a>
    </li>
    <li class="nav-item" id="utility-contact-address">
      <a class="nav-link" href="#">Building Utilities</a>
    </li>
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  buildingContactAddressContainer = document.querySelector(
    "#building-contact-address"
  );
  emergencyServiceProviderContainer = document.querySelector(
    "#emergency-service-provider-contact-address"
  );
  publicSafetyAgencyContainer = document.querySelector(
    "#public-safety-agency-contact-address"
  );
  utilityContactAddressContainer = document.querySelector(
    "#utility-contact-address"
  );

  allNavigationContainers = document.querySelectorAll(".nav a");

  // Building Contact Address Container
  buildingContactAddressContainer.addEventListener("click", function (event) {
    // Populate data
    type = "buildingContactAddress";
    populateContactAddressElements(
      event,
      allNavigationContainers,
      buildingContactAddress,
      type
    );
  });

  // Public Safety Agency Container Container
  publicSafetyAgencyContainer.addEventListener("click", function (event) {
    // Populate data
    type = "publicSafetyAgency";
    populateContactAddressElements(
      event,
      allNavigationContainers,
      publicSafetyAgencyContactAddress,
      type
    );
  });

  // utility Contact Address Container
  utilityContactAddressContainer.addEventListener("click", function (event) {
    // Populate data
    type = "utilityContactAddress";
    populateContactAddressElements(
      event,
      allNavigationContainers,
      buildingUtilityContactAddress,
      type
    );
  });

  // emergency Service Provider Container
  emergencyServiceProviderContainer.addEventListener("click", function (event) {
    // Populate data
    type = "utilityContactAddress";
    populateESPContactAddress(
      event,
      allNavigationContainers,
      emergencyServiceProviderContactAddress
    );
  });

  buildingContactAddressContainer.querySelector("a").click();
}
function populateESPContactAddress(
  event,
  allNavigationContainers,
  emergencyServiceProviderContactAddress
) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }
  // Get Data

  fireServiceOrganization =
    emergencyServiceProviderContactAddress["fireServiceOrganization"];
  hospital = emergencyServiceProviderContactAddress["hospital"];
  policeDepartment = emergencyServiceProviderContactAddress["policeDepartment"];

  // Get sub main view
  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="fire-service-organization">
      <a class="nav-link active" href="#">Fire Service Organizations</a>
    </li>
    <li class="nav-item" id="hospital">
      <a class="nav-link" href="#">Hospitals</a>
    </li>  
    <li class="nav-item" id="police-department">
      <a class="nav-link" href="#">Police Department</a>
    </li>
</ul>
  `;

  // Creat sub sub main view
  subSubMainView = document.createElement("div");
  subSubMainView.id = "sub-sub-main-view";
  subMainView.appendChild(subSubMainView);
  subSubMainView.innerHTML = "";

  fireServiceOrganizationContainer = document.querySelector(
    "#fire-service-organization"
  );
  hospitalContainer = document.querySelector("#hospital");
  policeDepartmentContainer = document.querySelector("#police-department");

  allSubNavigationContainers = document.querySelectorAll("#sub-main-view ul a");

  // fireServiceOrganizationContainer

  fireServiceOrganizationContainer.addEventListener("click", function (event) {
    // Populate data
    type = "Fire Service Organization";
    populateESPContactAddressElements(
      event,
      allSubNavigationContainers,
      fireServiceOrganization,
      type
    );
  });

  // hospitalContainer

  hospitalContainer.addEventListener("click", function (event) {
    // Populate data
    type = "Hospital";
    populateESPContactAddressElements(
      event,
      allSubNavigationContainers,
      hospital,
      type
    );
  });

  // policeDepartmentContainer

  policeDepartmentContainer.addEventListener("click", function (event) {
    // Populate data
    type = "police Department";
    populateESPContactAddressElements(
      event,
      allSubNavigationContainers,
      policeDepartment,
      type
    );
  });
  fireServiceOrganizationContainer.querySelector("a").click();
}

function populateESPContactAddressElements(
  event,
  allSubNavigationContainers,
  inputData
) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allSubNavigationContainers.length; i++) {
    if (allSubNavigationContainers[i] == event.target) continue;
    allSubNavigationContainers[i].className = "nav-link";
  }

  subSubMainView = document.querySelector("#sub-sub-main-view");
  subSubMainView.innerHTML = ``;

  // Set title
  firstTitle = "Emergency Service";
  secondTitle = "Name";
  thirdTitle = "Phone Number";

  containerClass = "contact-address";
  containerID = "header";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    subSubMainView,
    firstTitle,
    secondTitle,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  for (i = 0; i < inputData.length; i++) {
    // Get data

    hasRole = type;
    hasName = inputData[i]["hasName"];
    HasTelephoneNumber = inputData[i]["hasAddress"]["hasTelephoneNumber"];

    firstCell = hasRole;
    secondCell = hasName;
    thirdCell = "<a href='#'>" + HasTelephoneNumber + "</a>";

    containerID = i;

    createThreeColumnContainer(
      subSubMainView,
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
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );

      // Add additional data
    });
  }
}

function populateContactAddressElements(
  event,
  allNavigationContainers,
  inputData,
  type
) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  if (type == "buildingContactAddress" || type == "utilityContactAddress") {
    // Set title
    if (type == "buildingContactAddress") firstTitle = "Role";
    else if (type == "utilityContactAddress") firstTitle = "Utility";
    secondTitle = "Name";
    thirdTitle = "Phone Number";

    containerClass = "contact-address";
    containerID = "header";
    thirdCellStatus = "neutral";

    createThreeColumnContainer(
      subMainView,
      firstTitle,
      secondTitle,
      thirdTitle,
      thirdCellStatus,
      containerID,
      containerClass
    );
    console.log(inputData);
    for (i = 0; i < inputData.length; i++) {
      // Get data
      hasRole = inputData[i]["hasRole"];
      hasName = inputData[i]["hasName"];
      HasTelephoneNumber = inputData[i]["hasTelephoneNumber"];

      firstCell = hasRole;
      secondCell = hasName;
      thirdCell = "<a href='#'>" + HasTelephoneNumber + "</a>";

      containerID = i;

      createThreeColumnContainer(
        subMainView,
        firstCell,
        secondCell,
        thirdCell,
        thirdCellStatus,
        containerID,
        containerClass
      );
    }
  } else {
    // Set title
    firstTitle = "Name";
    secondTitle = "Phone Number";

    containerClass = "contact-address";
    containerID = "header";
    secondCellStatus = "neutral";

    createTwoColumnContainer(
      subMainView,
      firstTitle,
      secondTitle,
      secondCellStatus,
      containerID,
      containerClass
    );

    for (i = 0; i < inputData.length; i++) {
      // Get data

      hasName = inputData[i]["hasName"];
      hasTelephoneNumber = inputData[i]["hasTelephoneNumber"];

      firstCell = hasName;
      secondCell = "<a href='#'>" + HasTelephoneNumber + "</a>";

      containerID = i;

      createTwoColumnContainer(
        subMainView,
        firstCell,
        secondCell,
        secondCellStatus,
        containerID,
        containerClass
      );
    }
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );

      // Add additional data
    });
  }
}

function setInnerHtml(elm, html) {
  elm.innerHTML = html;
  Array.from(elm.querySelectorAll("script")).forEach((oldScript) => {
    const newScript = document.createElement("script");
    Array.from(oldScript.attributes).forEach((attr) =>
      newScript.setAttribute(attr.name, attr.value)
    );
    newScript.appendChild(document.createTextNode(oldScript.innerHTML));
    oldScript.parentNode.replaceChild(newScript, oldScript);
  });
}

function nodeScriptIs(node) {
  return node.tagName === "SCRIPT";
}
// Show fire extinguishing system
function showFireExtinguishingSystem(results) {
  if (results["automaticSprinklerSystem"].length > 0)
    results = results["automaticSprinklerSystem"];
  else results = results["alternativeAutomaticFireExtinguishingSystem"];

  console.log(results);
  // Get main view
  mainView = document.querySelector(".main-view");
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
  mainView = document.querySelector(".main-view");
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

        hydrantCoordinate = moreData["hasLocation"];

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
        console.log(buildingCoordinate);

        graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
        fetchMap(buildingAddress, hydrantCoordinate);
        console.log(hydrantCoordinate);
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
  mainView = document.querySelector(".main-view");
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
  secondChildContainer.innerHTML = secondCell;
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
  thirdChildContainer.innerHTML = thirdCell;
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
  parentContainer.setAttribute("status", "less");

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
  mainView = document.querySelector(".main-view");
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
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = results[index];
    });
  }
}

function addMoreContentContainer(
  event,
  allContainers,
  additionalWrittenData = false,
  additionalGraphicData = false
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

    // Create data containers
    if (additionalWrittenData) {
      dataContainer = document.createElement("div");
      dataContainer.id = "data-container";
      moreContainer.appendChild(dataContainer);
    }

    // Create graphic data containers
    if (additionalGraphicData) {
      graphicDataContainer = document.createElement("div");
      graphicDataContainer.id = "graphic-data-container";
      moreContainer.appendChild(graphicDataContainer);
    }
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
      }
      // Clear and hide more content
      document.querySelector("#more-container").style.display = "none";
      document.querySelector("#more-container").innerHTML = "";
      event.target.remove();
    });
  }
}

// showFireAlarmSystem
function showFireAlarmSystem(results) {
  console.log(results);

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Coverage Zone";
  secondTitle = "State";

  containerClass = "fire-alarm-system";
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
  for (i = 0; i < results.length; i++) {
    // Get data
    coverageZone = results[i]["hasCoverageZone"];
    isSystemActivated = results[i]["isSystemActivated"];

    firstCell = coverageZone;

    if (isSystemActivated) {
      secondCell = "Activated";
      secondCellStatus = "negative";
    } else {
      secondCell = "Not Activated";
      secondCellStatus = "positive";
    }
    containerID = i;

    // Create container
    createTwoColumnContainer(
      mainView,
      firstCell,
      secondCell,
      secondCellStatus,
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
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalWrittenData = true;
      additionalGraphicData = true;
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );

      // Add additional data

      index = event.target.id;
      moreData = results[index];

      // Get data
      typeOfSignalInitiator = moreData["hasTypeOfSignalInitiator"];
      controlPanel = moreData["hasControlPanel"]["hasName"];
      controlPanelLocation = moreData["hasControlPanel"]["hasLocation"];
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="type-of-signal-initiator">
          <div class = "data-item-label"> Type of Signal Initiator: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="control-panel">
          <div class = "data-item-label"> Control Panel: </div> 
          <div class = "data-item-value">  <a href="#"></a> </div> 
        </div>
        <div class = "data-item" id="control-Panel-location">
          <div class = "data-item-label"> Control Panel Location: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector(
        "#type-of-signal-initiator .data-item-value"
      ).innerText = typeOfSignalInitiator;

      dataContainer.querySelector(
        "#control-panel .data-item-value a"
      ).innerText = controlPanel;

      dataContainer.querySelector(
        "#control-Panel-location .data-item-value"
      ).innerText = controlPanelLocation;
    });
  }
}

// FireDepartmentConnection
function showFireDepartmentConnections(results) {
  console.log(results);

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Coverage Zone";
  secondTitle = "Hose Connection";
  thirdTitle = "State";

  containerClass = "fire-department-connection";
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
    coverageZoneCollection = results[i]["hasCoverageZone"];
    hoseConnectionData = results[i]["hasHoseConnection"];
    hoseConnection =
      hoseConnectionData["hasSize"] +
      " " +
      hoseConnectionData["hasSizeUnit"] +
      " " +
      hoseConnectionData["hasType"];

    isFunctional = results[i]["isFunctional"];

    coverageZones = coverageZoneCollection.split(",");
    for (j = 0; j < coverageZones.length; j++) {
      firstCell = coverageZones[j];
      secondCell = hoseConnection;
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
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalWrittenData = true;
      additionalGraphicData = true;
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = results[index];

      // Get data
      coverageZone = moreData["hasCoverageZone"];
      numberOfInlet = moreData["hasNumberOfInlet"];
      waterSource = moreData["hasWaterSource"]["hasName"];
      distanceFromWaterSource = moreData["hasDistanceFromWaterSource"];

      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="coverage-zone">
          <div class = "data-item-label"> Coverage Zone: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="number-of-inlet">
          <div class = "data-item-label"> Number Of Inlet: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="water-source">
          <div class = "data-item-label"> Water Source: </div> 
          <div class = "data-item-value">  <a href="#"></a> </div> 
        </div>
        <div class = "data-item" id="distance-from-water-source">
          <div class = "data-item-label"> Distance From Water Source: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#coverage-zone .data-item-value").innerText =
        coverageZone;

      dataContainer.querySelector(
        "#number-of-inlet .data-item-value"
      ).innerText = numberOfInlet;

      dataContainer.querySelector(
        "#water-source .data-item-value a"
      ).innerText = waterSource;

      dataContainer.querySelector(
        "#distance-from-water-source .data-item-value"
      ).innerText = distanceFromWaterSource;
    });
  }
}
function showFireHoseConnection(results) {
  console.log(results);

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Floor Location";
  secondTitle = "Hose Connection";

  containerClass = "fire-hose-connection";
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

  for (i = 0; i < results.length; i++) {
    // Get data
    floorLocation = results[i]["hasFloorsServed"];
    hoseConnectionData = results[i]["hasHoseConnection"];
    hoseConnection =
      hoseConnectionData["hasSize"] +
      " " +
      hoseConnectionData["hasSizeUnit"] +
      " " +
      hoseConnectionData["hasType"];

    firstCell = floorLocation;
    secondCell = hoseConnection;

    containerID = i;

    createTwoColumnContainer(
      mainView,
      firstCell,
      secondCell,
      secondCellStatus,
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
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalWrittenData = true;
      additionalGraphicData = true;
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = results[index];
      console.log(moreData);

      // Get data
      waterSource = moreData["hasWaterSource"]["hasName"];

      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="water-source">
          <div class = "data-item-label"> Water Source: </div> 
          <div class = "data-item-value">  <a href="#"></a> </div> 
        </div>
        `;

      // Insert values
      dataContainer.querySelector(
        "#water-source .data-item-value a"
      ).innerText = waterSource;
    });
  }
}

function showStandpipeSystem(results) {
  console.log(results);

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = "";

  // Set title
  firstTitle = "Name";
  secondTitle = "Coverage Zone";
  thirdTitle = "Isolation Valve State";

  containerClass = "standpipe-system";
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
    hasName = results[i]["hasName"];
    coverageZoneCollection = results[i]["hasCoverageZone"];
    isIsolationValveOpen = results[i]["isIsolationValveOpen"];

    coverageZones = coverageZoneCollection.split(",");
    for (j = 0; j < coverageZones.length; j++) {
      firstCell = hasName;
      secondCell = coverageZones[j];
      if (isIsolationValveOpen) {
        thirdCell = "Open";
        thirdCellStatus = "positive";
      } else {
        thirdCell = "Closed";
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
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  mainView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalWrittenData = true;
      additionalGraphicData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = results[index];
      console.log(moreData);

      // Get data
      hasClass = results[index]["hasClass"];
      type = results[index]["hasType"];
      isolationValveLocation = results[index]["hasIsolationValveLocation"];
      requiredMaximumPressure = results[index]["hasRequiredMaximumPressure"];
      requiredMinimumPressure = results[index]["hasRequiredMinimumPressure"];
      pressureUnit = results[index]["hasPressureUnit"];
      waterSource = results[index]["hasWaterSource"]["hasName"];

      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="has-class">
          <div class = "data-item-label"> Class: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="type">
          <div class = "data-item-label"> Type: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="isolation-valve-location">
          <div class = "data-item-label"> Isolation Valve Location: </div> 
          <div class = "data-item-value"> </div> 
        </div>
        <div class = "data-item" id="required-maximum-pressure">
          <div class = "data-item-label"> Required Maximum Pressure: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="required-minimum-pressure">
          <div class = "data-item-label"> Required Minimum Pressure: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="water-source">
          <div class = "data-item-label"> Water Source: </div> 
          <div class = "data-item-value">   <a href="#"></a> </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#has-class .data-item-value").innerText =
        hasClass;

      dataContainer.querySelector("#type .data-item-value").innerText = type;

      dataContainer.querySelector(
        "#isolation-valve-location .data-item-value"
      ).innerText = isolationValveLocation;

      dataContainer.querySelector(
        "#required-maximum-pressure .data-item-value"
      ).innerText = requiredMaximumPressure + " " + pressureUnit;

      dataContainer.querySelector(
        "#required-minimum-pressure .data-item-value"
      ).innerText = requiredMinimumPressure + " " + pressureUnit;

      dataContainer.querySelector(
        "#water-source .data-item-value a"
      ).innerText = waterSource;
    });
  }
}
function showSensorsAndDetectors(results) {
  console.log(results);

  // Get data
  carbonMonoxideDetector = results["carbonMonoxideDetector"];
  cbrSensor = results["cbrSensor"];
  gasDetector = results["gasDetector"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="carbon-monoxide-detectors">
      <a class="nav-link active" href="#">Carbon Monoxide Detectors</a>
    </li>
    <li class="nav-item" id="gas-detectors">
      <a class="nav-link" href="#">Gas Detectors</a>
    </li>
    <li class="nav-item" id="cbr-sensors">
      <a class="nav-link" href="#">CBR Sensors</a>
    </li>  
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  carbonMonoxideDetectorContainer = document.querySelector(
    "#carbon-monoxide-detectors"
  );
  cbrSensorContainer = document.querySelector("#gas-detectors");
  gasDetectorContainer = document.querySelector("#cbr-sensors");
  allNavigationContainers = document.querySelectorAll(".nav a");

  // Carbon Monoxide Detector Container
  carbonMonoxideDetectorContainer.addEventListener("click", function (event) {
    // Populate data
    populateSensorAndDetector(
      event,
      allNavigationContainers,
      carbonMonoxideDetector
    );
  });
  // CBR Sensor Container
  cbrSensorContainer.addEventListener("click", function (event) {
    // Populate data
    populateSensorAndDetector(event, allNavigationContainers, cbrSensor);
  });

  // Gas Detector Container
  gasDetectorContainer.addEventListener("click", function (event) {
    // Populate data
    populateSensorAndDetector(event, allNavigationContainers, gasDetector);
  });

  document.querySelector("#carbon-monoxide-detectors a").click();
}

function populateSensorAndDetector(event, allNavigationContainers, inputData) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor Location";
  thirdTitle = "Status";

  containerClass = "sensors-and-detectors";
  containerID = "header";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    floorLocation = inputData[i]["hasOnFloor"];
    isInAlarm = inputData[i]["isInAlarm"];

    firstCell = hasName;
    secondCell = floorLocation;
    if (isInAlarm) {
      thirdCell = "Activated";
      thirdCellStatus = "negative";
    } else {
      thirdCell = "Off";
      thirdCellStatus = "positive";
    }

    containerID = i;

    createThreeColumnContainer(
      subMainView,
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
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data
    });
  }
}

// Fire And Smoke Protection Elements
function showFireAndSmokeProtectionElements(results) {
  console.log(results);

  // Get data
  fireBarrier = results["fireBarrier"];
  firePartition = results["firePartition"];
  firewall = results["firewall"];
  shaftEnclosure = results["shaftEnclosure"];
  smokeBarrier = results["smokeBarrier"];
  smokePartition = results["smokePartition"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.innerHTML = `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="fire-barrier">
      <a class="nav-link active" href="#">Fire Barrier</a>
    </li>
    <li class="nav-item" id="fire-partition">
      <a class="nav-link" href="#">Fire Partition</a>
    </li>
    <li class="nav-item" id="firewall">
      <a class="nav-link" href="#">Firewall</a>
    </li>  
    <li class="nav-item" id="shaft-enclosure">
      <a class="nav-link" href="#">Shaft Enclosure</a>
    </li>
    <li class="nav-item" id="smoke-barrier">
      <a class="nav-link" href="#">Smoke Barrier</a>
    </li>
    <li class="nav-item" id="smoke-partition">
      <a class="nav-link" href="#">Smoke Partition</a>
    </li>  
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  fireBarrierContainer = document.querySelector("#fire-barrier");
  firePartitionContainer = document.querySelector("#fire-partition");
  firewallContainer = document.querySelector("#firewall");
  shaftEnclosureContainer = document.querySelector("#shaft-enclosure");
  smokeBarrierContainer = document.querySelector("#smoke-barrier");
  smokePartitionContainer = document.querySelector("#smoke-partition");

  allNavigationContainers = document.querySelectorAll(".nav a");

  // Fire Barrier Container
  fireBarrierContainer.addEventListener("click", function (event) {
    // Populate data
    populateFireAndSmokeProtectionElements(
      event,
      allNavigationContainers,
      fireBarrier
    );
  });

  // Fire Barrier Container
  firePartitionContainer.addEventListener("click", function (event) {
    // Populate data
    populateFireAndSmokeProtectionElements(
      event,
      allNavigationContainers,
      firePartition
    );
  });

  // firewall Container
  firewallContainer.addEventListener("click", function (event) {
    // Populate data
    populateFireAndSmokeProtectionElements(
      event,
      allNavigationContainers,
      firewall
    );
  });

  // shaft Enclosure Container
  shaftEnclosureContainer.addEventListener("click", function (event) {
    // Populate data
    populateFireAndSmokeProtectionElements(
      event,
      allNavigationContainers,
      shaftEnclosure
    );
  });

  // smoke Barrier Container
  smokeBarrierContainer.addEventListener("click", function (event) {
    // Populate data
    populateFireAndSmokeProtectionElements(
      event,
      allNavigationContainers,
      smokeBarrier
    );
  });

  // smoke Partition Container
  smokePartitionContainer.addEventListener("click", function (event) {
    // Populate data
    populateFireAndSmokeProtectionElements(
      event,
      allNavigationContainers,
      smokePartition
    );
  });

  document.querySelector("#fire-barrier a").click();
}

function populateFireAndSmokeProtectionElements(
  event,
  allNavigationContainers,
  inputData
) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor Location";
  thirdTitle = "Status";

  containerClass = "sensors-and-detectors";
  containerID = "header";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    floorLocation = inputData[i]["hasOnFloor"];
    isInAlarm = inputData[i]["isInAlarm"];

    firstCell = hasName;
    secondCell = floorLocation;
    if (isInAlarm) {
      thirdCell = "Activated";
      thirdCellStatus = "negative";
    } else {
      thirdCell = "Off";
      thirdCellStatus = "positive";
    }

    containerID = i;

    createThreeColumnContainer(
      subMainView,
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
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data
    });
  }
}

// Roof top Element
function showRoofTopElement(results) {
  console.log(results);
}

// Facade
function showFacade(results) {
  console.log(results);
}

// KeyBox
function showKeyBox(results) {
  console.log(results);
}
function showConcealedSpace(results) {
  console.log(results);
}

function showVerticalOpening(results) {
  console.log(results);
}

function showHazardousMaterial(results) {
  console.log(results);
}

function fetchMap(buildingAddress, addMarker = "none") {
  console.log(addMarker);
  if (buildingCoordinate.length > 0) {
    createMap(addMarker);
  } else {
    fetch(
      "https://nominatim.openstreetmap.org/?addressdetails=1&q=" +
        buildingAddress +
        "&format=json"
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        lon = result[0]["lon"];
        lat = result[0]["lat"];
        buildingCoordinate = [result[0]["lon"], result[0]["lat"]];

        createMap(addMarker);
      });
  }
}

function addressToCoordinate(buildingAddress) {
  fetch(
    "https://nominatim.openstreetmap.org/?addressdetails=1&q=" +
      buildingAddress +
      "&format=json"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      buildingCoordinate = [result[0]["lon"], result[0]["lat"]];
    });
}
function createMap(addMarker) {
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXlvc2lhczEwMSIsImEiOiJjbDFuOHB6MXEwcnNhM3BrcW55ZGh1ZGo4In0.Iq_eA8HIPymBe2LAfWETcw";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [buildingCoordinate[0], buildingCoordinate[1]], // starting position [lng, lat]
    zoom: 16, // starting zoom
  });

  // add object to the map
  lon = addMarker.split(",")[1];
  lat = addMarker.split(",")[0];

  // create the popup
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Construction on the Washington Monument began in 1848."
  );
  // create DOM element for the marker
  const el = document.createElement("div");
  el.id = "marker";

  const waypoint1 = new mapboxgl.Marker({ color: "red" })
    .setPopup(popup)
    .setLngLat([buildingCoordinate[0], buildingCoordinate[1]])
    .addTo(map);
  const waypoint2 = new mapboxgl.Marker({ color: "blue" })
    .setLngLat([lon, lat])
    .addTo(map);

  accessToken =
    "pk.eyJ1IjoiZXlvc2lhczEwMSIsImEiOiJjbDFuOHB6MXEwcnNhM3BrcW55ZGh1ZGo4In0.Iq_eA8HIPymBe2LAfWETcw";
  fetch(
    `https://api.mapbox.com/directions/v5/mapbox/walking/${buildingCoordinate[0]},${buildingCoordinate[1]};${lon},${lat}?steps=true&geometries=geojson&access_token=${accessToken}`,
    { method: "GET" }
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      const data = json.routes[0];

      const route = data.geometry.coordinates;
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };

      // add line as geojson
      // geometry is in routes variable imported above in script
      map.on("load", () => {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#ff0000",
            "line-width": 8,
          },
        });
      });
    });
}
function createMaps(addMarker) {
  console.log(addMarker);
  lon = buildingCoordinate[0];
  lat = buildingCoordinate[1];
  let mapOptions = {
    center: [lat, lon],
    // zoom: 16,
    zoom: 17,
  };

  let map = new L.map("map", mapOptions);
  // add the OpenStreetMap tiles
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
  }).addTo(map);

  // show the scale bar on the lower left corner
  L.control.scale({ imperial: true, metric: true }).addTo(map);

  // show a marker on the map

  marker = new L.Marker([lat, lon]);
  marker.bindPopup("Incident Building");
  marker.addTo(map);
  if (addMarker != "none") {
    lon = addMarker.split(",")[1];
    lat = addMarker.split(",")[0];
    var myIcon = L.icon({
      iconUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41],
    });

    lon = addMarker.split(",")[1];
    lat = addMarker.split(",")[0];
    L.marker([lat, lon], { icon: myIcon }).bindPopup("Fire hydrant").addTo(map);

    myApi = "d19490bd-c0df-47c4-9547-7027ef76c329";
    // route = L.routing
    //   .control({
    //     waypoints: [(lat, lon), (buildingCoordinate[1], buildingCoordinate[0])],
    //     router: L.routing.GraphHopper(myApi, {
    //       urlParameters: {
    //         vehicle: "foot",
    //       },
    //     }),
    //   })
    //   .addTo(map);
    console.log(lat);
    console.log(buildingCoordinate[1]);
    apiCall =
      "https://api.mapbox.com/directions/v5/mapbox/cycling/-84.518641,39.134270;-84.512023,39.102779?geometries=geojson&access_token=pk.eyJ1IjoiZXlvc2lhczEwMSIsImEiOiJjbDFuOHB6MXEwcnNhM3BrcW55ZGh1ZGo4In0.Iq_eA8HIPymBe2LAfWETcw";
    fetch(apiCall).then((result) => {
      console.log(result);
      L.geoJSON(result["routes"][0]).addTo(map);
    });

    // var ghRouting = new GraphHopper.Routing({
    //   key: myApi,
    //   vehicle: "car",
    //   elevation: false,
    // });

    // ghRouting.addPoint(new GHInput(lat, lon));
    // ghRouting.addPoint(
    //   new GHInput(buildingCoordinate[1], buildingCoordinate[0])
    // );

    // ghRouting
    //   .doRequest()
    //   .then(function (json) {
    //     // Add your own result handling here
    //     console.log(json);
    //     L.geoJSON(json["paths"]).addTo(map);
    //   })
    //   .catch(function (err) {
    //     console.error(err.message);
    //   });

    /* L.Routing.control({
      waypoints: [
        L.latLng(lat, lon),
        L.latLng(buildingCoordinate[1], buildingCoordinate[0]),
      ],
    }).addTo(map); */
  }
}

function addMarkerToMap(lon, lat) {
  fetchMap(buildingAddress);
  lon = coordinates[0];
  lat = coordinates[1];

  marker = L.Marker([lat, lon]);
  marker.bindPopup("Incident Building");
  marker.addTo(map);
}
