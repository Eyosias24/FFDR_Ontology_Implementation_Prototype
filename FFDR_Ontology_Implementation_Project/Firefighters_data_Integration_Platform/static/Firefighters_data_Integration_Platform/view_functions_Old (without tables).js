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

  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Incident Building"
  setTitleView(mainView, title)

  // Building address
  streetAddress = getDataBuildingAddress["hasStreetAddress"];
  postalCode = getDataBuildingAddress["hasPostalCode"];
  city = getDataBuildingAddress["hasCity"];

  buildingAddress = streetAddress + ", " + postalCode + " " + city;

  // Convert address to coordinate
  addressToCoordinate(buildingAddress);

  subjectLabel = "Building Address:";
  clickMoreText = " <div class = 'click-for-more'> (Click to see on map) <div>"
  subjectValue = buildingAddress + clickMoreText;
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
  clickMoreText = " <div class = 'click-for-more'> (Click to see on floor plan) <div>"
  subjectValue = getDataNumberOfExit + clickMoreText;
  containerID = "number-of-exit-container";
  isMore = false;

  // prettier-ignore
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Hazardous Operations

  subjectLabel = "Hazardous Operations";
  if(getDataHazardousOperation)
{  subjectValue = "Yes";
  containerID = "hazardous-operations-container-negative";}
  else{  subjectValue = "No";
  containerID = "hazardous-operations-container-negative";}
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

    if (allContainers[i].id == "header") continue;

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
        sources = "/static/Firefighters_data_Integration_Platform/media/typical-building-floor-plan-layout.pdf"
        add2DViewer(graphicDataContainer)
      });
    }
  }
  
enableNavigation()

}

function add2DViewer(graphicDataContainer){
//  graphicDataContainer.innerHTML = `
// <iframe src="${sources}#toolbar=0&view=fitH">
//     </iframe>
// `;
viewerContainer = document.getElementById("2d-viewer-container")

copyViewerContainer = viewerContainer.cloneNode(true)
copyViewerContainer.style.display = "block"
graphicDataContainer.appendChild(copyViewerContainer)
}

function showContactAddresses(results) {
  

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


  // Set view title
  title = "Contact Addresses"
  setTitleView(mainView, title)

// Add navigation
  mainView.innerHTML += `
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


enableNavigation()
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
  
  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    subSubMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subSubMainView.appendChild(contentView)

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
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
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
  secondCellStatus = "neutral",

    createThreeColumnContainer(
      subMainView,
      firstTitle,
      secondTitle,
      secondCellStatus,
      thirdTitle,
      thirdCellStatus,
      containerID,
      containerClass
    );
    

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


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
        contentView,
        firstCell,
        secondCell,
        secondCellStatus,
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

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

    for (i = 0; i < inputData.length; i++) {
      // Get data

      hasName = inputData[i]["hasName"];
      hasTelephoneNumber = inputData[i]["hasTelephoneNumber"];

      firstCell = hasName;
      secondCell = "<a href='#'>" + HasTelephoneNumber + "</a>";

      containerID = i;

      createTwoColumnContainer(
        contentView,
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

  
  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Fire Extinguishing Systems"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "System";
  secondTitle = "Coverage Zone";
  thirdTitle = "Status";

  containerClass = "automatic-fire-extinguishing-system";
  containerID = "header";
  thirdCellStatus = "neutral";
  secondCellStatus = "neutral",

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

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
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        // Add  additional data
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

  dataContainer = document.querySelector("#data-container");
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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
      
    });
  }

enableNavigation()
}

// Show fire hydrant
function showFireHydrant(unsortedResults) {
  results = sort_by_key(unsortedResults, "hasDistanceFromIncidentBuilding");
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns"

  // Set view title
  title = "Fire Hydrants"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Distance from building";
  secondTitle = "Fire flow";
  thirdTitle = "State";

  containerClass = "fire-hydrant";
  containerID = "header";
  thirdCellStatus = "neutral";
  secondCellStatus = "neutral",

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

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
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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

        dataContainer = document.querySelector("#data-container");
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
graphicDataContainer = document.querySelector("#graphic-data-container");
      
        

        graphicDataContainer.innerHTML = `
<div id="map"></div>
`;

         isRouting = true
        fetchMap(buildingAddress, hydrantCoordinate, isRouting);
        
          
        });
      }
  

enableNavigation()
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
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
}
// Show Building Utility System
function showBuildingUtilitySystem(results) {

  primaryPowerSupplySystem = results["primaryPowerSupplySystem"][0];
  backUpPowerSupplySystem = results["backUpPowerSupplySystem"][0];
  gasSupplySystem = results["gasSupplySystem"][0];
  hvacSystem = results["hvacSystem"][0];
  waterSupplyAndSewerageSystem = results["waterSupplyandSewerageSystem"][0];

  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Building Utility Systems"
  setTitleView(mainView, title)

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


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

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
    contentView,
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
    contentView,
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
    contentView,
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
    contentView,
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
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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

enableNavigation()
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
  secondCellStatus = "neutral",
  thirdCell,
  thirdCellStatus = "neutral",
  containerID
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
  secondChildContainer.id = secondCellStatus;

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

function createFourColumnContainer(
  mainView,
  firstCell,
  secondCell,
  secondCellStatus,
  thirdCell,
  thirdCellStatus,
  fourthCell,
  fourthCellStatus,
  containerID
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
  secondChildContainer.id = secondCellStatus;

  if (secondCell != null) secondChildContainer.innerText = secondCell;
  else secondChildContainer.innerText = "N/A";

  thirdChildContainer = document.createElement("div");
  thirdChildContainer.className = "third-child";
  thirdChildContainer.innerHTML = thirdCell;
  thirdChildContainer.id = thirdCellStatus;
  

  fourthChildContainer = document.createElement("div");
  fourthChildContainer.className = "fourth-child";
  fourthChildContainer.innerHTML = fourthCell;
  fourthChildContainer.id = fourthCellStatus;

  parentContainer.appendChild(firstChildContainer);
  parentContainer.appendChild(secondChildContainer);
  parentContainer.appendChild(thirdChildContainer);
  parentContainer.appendChild(fourthChildContainer);

  mainView.appendChild(parentContainer);
}
function createFiveColumnContainer(
  mainView,
  firstCell,
  secondCell,
  secondCellStatus,
  thirdCell,
  thirdCellStatus,
  fourthCell,
  fourthCellStatus,
  fifthCell,
  fifthCellStatus,
  containerID
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
  secondChildContainer.id = secondCellStatus;

  if (secondCell != null) secondChildContainer.innerText = secondCell;
  else secondChildContainer.innerText = "N/A";

  thirdChildContainer = document.createElement("div");
  thirdChildContainer.className = "third-child";
  thirdChildContainer.innerHTML = thirdCell;
  thirdChildContainer.id = thirdCellStatus;
  

  fourthChildContainer = document.createElement("div");
  fourthChildContainer.className = "fourth-child";
  fourthChildContainer.innerHTML = fourthCell;
  fourthChildContainer.id = fourthCellStatus;

  

  fifthChildContainer = document.createElement("div");
  fifthChildContainer.className = "fourth-child";
  fifthChildContainer.innerHTML =  fifthCell;
  fifthChildContainer.id =  fifthCellStatus;

  parentContainer.appendChild(firstChildContainer);
  parentContainer.appendChild(secondChildContainer);
  parentContainer.appendChild(thirdChildContainer);
  parentContainer.appendChild(fourthChildContainer);
  parentContainer.appendChild(fifthChildContainer);

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
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Portable Fire Extinguishers"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Fire Extinguisher Type";
  secondTitle = "Rating";
  thirdTitle = "Location";

  containerClass = "portable-fire-extinguisher";
  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
isTableTitle = true



  fancyTable(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    isTableTitle
  )

  // createThreeColumnContainer(
  //   mainView,
  //   firstTitle,
  //   secondTitle,
  //   secondCellStatus,
  //   thirdTitle,
  //   thirdCellStatus,
  //   containerID
  // );

  
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    fireExtinguisherType = results[i]["hasType"];
    fireExtinguisherRating = results[i]["hasFireExtinguisherRating"];
    distanceLocation = results[i]["hasLocation"];

    firstCell = fireExtinguisherType;
    secondCell = fireExtinguisherRating;
    thirdCell = distanceLocation;

    containerID = i;
    
isTableTitle = false
fancyTable(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      isTableTitle
    );

    // createThreeColumnContainer(
    //   contentView,
    //   firstCell,
    //   secondCell,
    //   secondCellStatus,
    //   thirdCell,
    //   thirdCellStatus,
    //   containerID,
    //   containerClass
    // );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)

  additionalWrittenData = false;
  additionalGraphicData = false;

  // allContainers = document.querySelectorAll(".parent-container");
  
  allContainers = document.querySelectorAll("tr");
  
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

      // index = event.target.id;
      index = event.target.parentNode.id;
      moreData = results[index];
console.log(moreData)
      
        // Create graphic data containers
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
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

    moreContainer = document.querySelector("#more-container");
    moreContainer.style.display = "block";

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
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Fire Alarm Systems"
  setTitleView(mainView, title)

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

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


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
      contentView,
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
  contentView.appendChild(moreContainer);

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

        // Create graphic data containers
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Fire Department Connection
function showFireDepartmentConnections(results) {
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Fire Department Connections"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Coverage Zone";
  secondTitle = "Hose Connection";
  thirdTitle = "State";

  containerClass = "fire-department-connection";
  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

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
        contentView,
        firstCell,
        secondCell,
        secondCellStatus,
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
  contentView.appendChild(moreContainer);

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Fire Hose Connection
function showFireHoseConnection(results) {
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Fire Hose Connections"
  setTitleView(mainView, title)

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

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

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
      contentView,
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
  contentView.appendChild(moreContainer);

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Standpipe Systems
function showStandpipeSystem(results) {
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""
  mainView.innerHTML = "";

  // Set view title
  title = "Standpipe Systems"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Name";
  secondTitle = "Coverage Zone";
  thirdTitle = "Isolation Valve State";

  containerClass = "standpipe-system";
  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

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
        contentView,
        firstCell,
        secondCell,
        secondCellStatus,
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
  contentView.appendChild(moreContainer);

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}
function showSensorsAndDetectors(results) {
  

  // Get data
  carbonMonoxideDetector = results["carbonMonoxideDetector"];
  cbrSensor = results["cbrSensor"];
  gasDetector = results["gasDetector"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "sensors-and-detectors"

  // Set view title
  title = "Sensors and Detectors"
  setTitleView(mainView, title)

// Add navigation
  mainView.innerHTML += `
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

enableNavigation()
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

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


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
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }
}

// Fire And Smoke Protection Elements
function showFireAndSmokeProtectionElements(results) {
  

  // Get data
  fireBarrier = results["fireBarrier"];
  firePartition = results["firePartition"];
  firewall = results["firewall"];
  shaftEnclosure = results["shaftEnclosure"];
  smokeBarrier = results["smokeBarrier"];
  smokePartition = results["smokePartition"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "fire-and-smoke-protection-elements"

  // Set view title
  title = " Fire And Smoke Protection Elements"
  setTitleView(mainView, title)

  mainView.innerHTML += `
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

enableNavigation()
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
  subMainView.className = "fire-and-smoke-protection-elements";

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor Location";
  thirdTitle = "Material";
  fourthTitle = "Fire Resistance Rating";

  containerID = "header";
  thirdCellStatus = "neutral";
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    floorLocation = inputData[i]["hasOnFloor"];
    hasMaterial = inputData[i]["hasMaterial"]["hasName"];
    fireResistanceRating =
      inputData[i]["hasFireResistanceRating"] +
      " " +
      inputData[i]["hasFireResistanceRatingUnit"];

    firstCell = hasName;
    secondCell = floorLocation;
    thirdCell = hasMaterial;
    fourthCell = fireResistanceRating;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }
}

function populateSurroundingBuilding(
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
  subMainView.className = "surrounding-building";

  // Set title
  firstTitle = "Name";
  secondTitle = "Type";
  thirdTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasType = inputData[i]["hasType"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = hasType;
    thirdCell = distanceFromBuilding;

    containerID = i;

    createThreeColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        surroundingBuildingCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         
         isRouting = false
        fetchMap(buildingAddress, surroundingBuildingCoordinate, isRouting);

    });
  }
}

function populateSurroundingTerrain(
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
  subMainView.className = "surrounding-building";

  // Set title
  firstTitle = "Location";
  secondTitle = "Slope";
  
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";

  createTwoColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasSlope = inputData[i]["hasSlope"];

    firstCell = hasName;
    secondCell = hasSlope;
    

    containerID = i;

    createTwoColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll(".parent-container");
  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;
    allContainers[i].addEventListener("click", function (event) {
     
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

function populateVegetation(
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
  subMainView.className = "vegetation";

  // Set title
  firstTitle = "Name";
  secondTitle = "Species";
  thirdTitle = "Flammability Level";
  fourthTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";


  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasSpecies = inputData[i]["hasSpecies"];
    flammabilityLevel = inputData[i]["hasFlammabilityLevel"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = hasSpecies;
    thirdCell = flammabilityLevel;
    fourthCell = distanceFromBuilding;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        vegetationCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, vegetationCoordinate, isRouting);

    });
  }
}


function populateHazardousMaterial(
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
  subMainView.className = "hazardous-material";

  // Set title
  firstTitle = "Name";
  secondTitle = "Hazard Level";
  thirdTitle = "Special Hazard";
  fourthTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";


  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hazardLevel = inputData[i]["hasHazardLevel"];
    specialHazard = inputData[i]["hasSpecialHazard"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = hazardLevel;
    thirdCell = specialHazard;
    fourthCell = distanceFromBuilding;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        HazardousMaterialCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, HazardousMaterialCoordinate, isRouting);

    });
  }
}

function populateObstruction(
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
  subMainView.className = "obstruction";

  // Set title
  firstTitle = "Name";
  secondTitle = "Type";
  thirdTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";


  createThreeColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasType = inputData[i]["hasType"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = hasType;
    thirdCell = distanceFromBuilding;

    containerID = i;

    createThreeColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        obstructionCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, obstructionCoordinate, isRouting);

    });
  }
}


function populateParkingLot(
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
  subMainView.className = "parking-lot";

  // Set title
  firstTitle = "Name";
  secondTitle = "Area";
  thirdTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";


  createThreeColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasArea = inputData[i]["hasArea"] +
      " " +
      inputData[i]["hasAreaUnit"];


    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = hasArea;
    thirdCell = distanceFromBuilding;

    containerID = i;

    createThreeColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        parkingLotCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, parkingLotCoordinate, isRouting);

    });
  }
}

function populatePipeline(
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
  subMainView.className = "pipeline";

  // Set title
  firstTitle = "Name";
  secondTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";


  createTwoColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = distanceFromBuilding;

    containerID = i;

    createTwoColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        pipelineCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, pipelineCoordinate, isRouting);

    });
  }
}

function populatePowerLine(
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
  subMainView.className = "power-line";

  // Set title
  firstTitle = "Name";
  secondTitle = "Distance from Building";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";


  createTwoColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];

    firstCell = hasName;
    secondCell = distanceFromBuilding;

    containerID = i;

    createTwoColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        powerLineCoordinate = moreData["hasLocation"];
        

        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, powerLineCoordinate, isRouting);

    });
  }
}



function populateExteriorDoor(event, allNavigationContainers, inputData) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "exterior-door";

  // Set title
  firstTitle = "Name";
  secondTitle = "Primary Fire Service Entry Point";
  thirdTitle = "Exit";
  fourthTitle = "Functional";

  containerID = "header";
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    isPrimaryFireServiceEntryPoint =
      inputData[i]["isPrimaryFireServiceEntryPoint"];
    isExit = inputData[i]["isExit"];
    isFunctional = inputData[i]["isFunctional"];

    firstCell = hasName;
    if (isPrimaryFireServiceEntryPoint) {
      secondCell = "Yes";
      secondCellStatus = "positive";
    } else {
      secondCell = "No";
      secondCellStatus = "negative";
    }

    if (isExit) {
      thirdCell = "Yes";
      thirdCellStatus = "positive";
    } else {
      thirdCell = "No";
      thirdCellStatus = "negative";
    }

    if (isFunctional) {
      fourthCell = "Yes";
      fourthCellStatus = "positive";
    } else {
      fourthCell = "No";
      fourthCellStatus = "negative";
    }

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
 
  additionalWrittenData = false;
  additionalGraphicData = false;
  
  allContainers = document.querySelectorAll(".parent-container");
  
  for (i = 0; i < allContainers.length; i++) {
   
    if (allContainers[i].id == "header") continue;
    
    allContainers[i].addEventListener("click", function (event) {
    
      additionalGraphicData = true;
      additionalWrittenData = true;
    
      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      hasMaterial = moreData["hasMaterial"]["hasName"];
      hasWidth = moreData["hasWidth"] + " " + moreData["hasWidthUnit"];
      openingDirection = moreData["hasOpeningDirection"];

      fireResistanceRating =
        moreData["hasFireResistanceRating"] +
        " " +
        moreData["hasFireResistanceRatingUnit"];

      controlPanel = moreData["hasControlPanel"]["hasName"];
      controlPanelLocation = moreData["hasControlPanel"]["hasLocation"];

      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="material">
          <div class = "data-item-label"> Material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="opening-direction">
          <div class = "data-item-label"> Opening Direction: </div> 
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

      dataContainer.querySelector("#material .data-item-value").innerText =
        hasMaterial;

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      dataContainer.querySelector(
        "#fire-resistance-rating .data-item-value"
      ).innerText = fireResistanceRating;

      dataContainer.querySelector(
        "#opening-direction .data-item-value"
      ).innerText = openingDirection;

      dataContainer.querySelector(
        "#control-panel .data-item-value a"
      ).innerText = controlPanel;

      dataContainer.querySelector(
        "#control-Panel-location .data-item-value"
      ).innerText = controlPanelLocation;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }
}

function populateExteriorWindow(event, allNavigationContainers, inputData) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "exterior-window";

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Shaftway";
  fourthTitle = "Functional";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasFloor = inputData[i]["hasOnFloor"];
    isShaftway = inputData[i]["isShaftway"];
    isFunctional = inputData[i]["isFunctional"];

    firstCell = hasName;
    secondCell = hasFloor;
    if (isShaftway) {
      thirdCell = "Yes";
      thirdCellStatus = "negative";
    } else {
      thirdCell = "No";
      thirdCellStatus = "positive";
    }

    if (isFunctional) {
      fourthCell = "Yes";
      fourthCellStatus = "positive";
    } else {
      fourthCell = "No";
      fourthCellStatus = "negative";
    }

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data

      hasWidth = moreData["hasWidth"] + " " + moreData["hasMeasurementUnit"];
      hasHeight = moreData["hasHeight"] + " " + moreData["hasMeasurementUnit"];
      openingDirection = moreData["hasOpeningDirection"];

      fireResistanceRating =
        moreData["hasFireResistanceRating"] +
        " " +
        moreData["hasFireResistanceRatingUnit"];

      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="height">
          <div class = "data-item-label"> Height: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="opening-direction">
          <div class = "data-item-label"> Opening Direction: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#height .data-item-value").innerText =
        hasHeight;

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      dataContainer.querySelector(
        "#fire-resistance-rating .data-item-value"
      ).innerText = fireResistanceRating;

      dataContainer.querySelector(
        "#opening-direction .data-item-value"
      ).innerText = openingDirection;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }
}

function populateExteriorWall(event, allNavigationContainers, inputData) {
  // Change active tab
  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "exterior-window";

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "FireResistanceRating";
  fourthTitle = "Material";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasFloor = inputData[i]["hasOnFloor"];
    fireResistanceRatingUnit =
      inputData[i]["hasFireResistanceRating"] +
      " " +
      inputData[i]["hasFireResistanceRatingUnit"];
    hasMaterial = inputData[i]["hasMaterial"]["hasName"];

    firstCell = hasName;
    secondCell = hasFloor;
    thirdCell = fireResistanceRatingUnit;
    fourthCell = hasMaterial;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data

      hasThickness =
        moreData["hasThickness"] + " " + moreData["hasThicknessUnit"];

      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="thickness">
          <div class = "data-item-label"> Thickness: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#thickness .data-item-value").innerText =
        hasThickness;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }
}
// Roof top Element
function showRoofTopElement(results) {
  
  
  mainView = document.querySelector(".main-view");
  mainView.id = "two-columns";

  // Set view title
  title = "Roof Top Elements"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Name";
  secondTitle = "Description";

  containerClass = "";
  containerID = "header";
  secondCellStatus = false


  createTwoColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    hasType = results[i]["hasType"];
    hasDescription = results[i]["hasDescription"];
    
    firstCell = hasType;
    secondCell = hasDescription;

    containerClass = "";
    containerID = i;

    createTwoColumnContainer(
      contentView,
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
  contentView.appendChild(moreContainer);
 

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Facade
function showFacade(results) {
  

  // Get data
  exteriorDoor = results["exteriorDoor"];
  exteriorWall = results["exteriorWall"];
  exteriorWindow = results["exteriorWindow"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns";

  // Set view title
  title = "Sensors and Detectors"
  setTitleView(mainView, title)

// Add navigation
  mainView.innerHTML += `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="exterior-door">
      <a class="nav-link active" href="#">Exterior Door</a>
    </li>
    <li class="nav-item" id="exterior-window">
      <a class="nav-link" href="#">Exterior Window</a>
    </li>
    <li class="nav-item" id="exterior-wall">
      <a class="nav-link" href="#">Exterior Wall</a>
    </li>  
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  exteriorDoorContainer = document.querySelector("#exterior-door");
  exteriorWindowContainer = document.querySelector("#exterior-window");
  exteriorWallContainer = document.querySelector("#exterior-wall");

  allNavigationContainers = document.querySelectorAll(".nav a");

  //  exteriorDoor Container
  exteriorDoorContainer.addEventListener("click", function (event) {
    // Populate data
    populateExteriorDoor(event, allNavigationContainers, exteriorDoor);
  });

  //  exterior Window Container
  exteriorWindowContainer.addEventListener("click", function (event) {
    // Populate data
    populateExteriorWindow(event, allNavigationContainers, exteriorWindow);
  });
  //  exterior Wall Container
  exteriorWallContainer.addEventListener("click", function (event) {
    // Populate data
    populateExteriorWall(event, allNavigationContainers, exteriorWall);
  });

  document.querySelector("#exterior-door a").click();

enableNavigation()
}


function populateDoor(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "door";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Distance to Exit";
  fourthTitle = "Fire Resistance Rating";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasFloor = inputData[i]["hasOnFloor"];
    
    if(inputData[i]["hasExitTravelDistances"] == "0")
      exitDistance = 0
    else
      exitDistance = inputData[i]["hasExitTravelDistances"] + " " +
                   inputData[i]["hasExitTravelDistancesUnit"];

    fireResistanceRating = inputData[i]["hasFireResistanceRating"] + " " +
                   inputData[i]["hasFireResistanceRatingUnit"];

    firstCell = hasName;
    secondCell = hasFloor;
    thirdCell = exitDistance;
    fourthCell = fireResistanceRating;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      hasMaterial = moreData["hasMaterial"]["hasName"];
      hasWidth = moreData["hasWidth"] + " " + moreData["hasWidthUnit"];
      openingDirection = moreData["hasOpeningDirection"];
      
      isFunctional = "No";
      if(moreData["isFunctional"])
      isFunctional = "Yes";

      isExit = "No";
      if(moreData["isExit"])
      isExit = "Yes";

      isShaftway = "No";
      if(moreData["isShaftway"])
      isShaftway = "Yes";

      primaryFireServiceEntryPoint = "No";
      if(moreData["isPrimaryFireServiceEntryPoint"])
      primaryFireServiceEntryPoint = "Yes";
      
      controlPanel = moreData["hasControlPanel"]["hasName"];
      controlPanelLocation = moreData["hasControlPanel"]["hasLocation"];


      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="material">
          <div class = "data-item-label"> Material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="opening-direction">
          <div class = "data-item-label"> Opening Direction: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="control-panel">
          <div class = "data-item-label"> Control Panel: </div> 
          <div class = "data-item-value"> <a href=""> </a>  </div> 
        </div>
        <div class = "data-item" id="control-panel-location">
          <div class = "data-item-label"> Control Panel Location: </div> 
          <div class = "data-item-value"> </div> 
        </div>
        <div class = "data-item" id="primary-fire-service-entry-point">
          <div class = "data-item-label"> Primary Fire Service Entry Point: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="exit">
          <div class = "data-item-label"> Exit: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="functional">
          <div class = "data-item-label"> Functional: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="Shaftway">
          <div class = "data-item-label"> Shaftway: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#material .data-item-value").innerText =
        hasMaterial;

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      dataContainer.querySelector(
        "#opening-direction .data-item-value"
      ).innerText = openingDirection;
      

      dataContainer.querySelector("#control-panel .data-item-value a").innerText =
        controlPanel;

      dataContainer.querySelector("#control-panel-location .data-item-value").innerText =
        controlPanelLocation;

      dataContainer.querySelector("#exit .data-item-value").innerText =
        isExit;

      dataContainer.querySelector("#primary-fire-service-entry-point .data-item-value").innerText =
        primaryFireServiceEntryPoint;

      dataContainer.querySelector("#functional .data-item-value").innerText =
        isFunctional;

      dataContainer.querySelector("#Shaftway .data-item-value").innerText =
        isShaftway;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)



    });
  }

enableNavigation()


enableNavigation()
}

function populateWindow(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "window";

  
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Shaftway";
  fourthTitle = "Fire Resistance Rating";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasFloor = inputData[i]["hasOnFloor"];
    isShaftway = inputData[i]["isShaftway"];

    fireResistanceRating = inputData[i]["hasFireResistanceRating"] + " " +
                   inputData[i]["hasFireResistanceRatingUnit"];

    firstCell = hasName;
    secondCell = hasFloor;
    if (isShaftway) {
      thirdCell = "Yes";
      thirdCellStatus = "negative";
    } else {
      thirdCell = "No";
      thirdCellStatus = "positive";
    }

    fourthCell = fireResistanceRating;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      
      hasWidth = moreData["hasWidth"] + " " + moreData["hasMeasurementUnit"];
      hasHeight = moreData["hasHeight"] + " " + moreData["hasMeasurementUnit"];
      openingDirection = moreData["hasOpeningDirection"];
      
      isFunctional = "No";
      if(moreData["isFunctional"])
      isFunctional = "Yes";

      isOnExterior = "No";
      if(moreData["isOnExterior"])
      isOnExterior = "Yes";


      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="height">
          <div class = "data-item-label"> Height: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="opening-direction">
          <div class = "data-item-label"> Opening Direction: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="on-exterior">
          <div class = "data-item-label"> On Exterior: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="functional">
          <div class = "data-item-label"> Functional: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      dataContainer.querySelector("#height .data-item-value").innerText =
        hasHeight;

      dataContainer.querySelector(
        "#opening-direction .data-item-value"
      ).innerText = openingDirection;

      dataContainer.querySelector("#on-exterior .data-item-value").innerText =
        isOnExterior;

      dataContainer.querySelector("#functional .data-item-value").innerText =
        isFunctional;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}

function populateElevator(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "elevator";

  

  // Set title
  firstTitle = "Name";
  secondTitle = "Discharge Level";
  thirdTitle = "Functional";
  fourthTitle = "Qualified For Evacuation";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    dischargeLevel = inputData[i]["hasDischargeLevel"];
    isFunctional = inputData[i]["isFunctional"];
    isQualifiedForEvacuation = inputData[i]["isQualifiedForEvacuation"];

    firstCell = hasName;
    secondCell = dischargeLevel;
    
    if (isFunctional) {
      thirdCell = "Yes";
      thirdCellStatus = "positive";
    } else {
      thirdCell = "No";
      thirdCellStatus = "negative";
    }
    
    if (isQualifiedForEvacuation) {
      fourthCell = "Yes";
     fourthCellStatus = "positive";
    } else {
      fourthCell = "No";
     fourthCellStatus = "negative";
    }


    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.className = "elevator";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      hasMaterial = moreData["hasMaterial"]["hasName"];
      hasCapacity = moreData["hasCapacity"]
      floorsServed = moreData["hasFloorsServed"]
      distanceToExit = moreData["hasExitTravelDistances"] + " " + moreData["hasDistancesUnit"];
      fireResistanceRating = moreData["hasFireResistanceRating"] + " " + moreData["hasFireResistanceRatingUnit"];
      

      fireExtinguishingSystem = moreData["hasFireExtinguishingSystem"]["hasSystem"];
      controlPanel = moreData["hasControlPanel"]["hasName"];
      controlPanelLocation = moreData["hasControlPanel"]["hasLocation"];
      machineRoomLocation = moreData["hasMachineRoomLocation"]


      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="capacity">
          <div class = "data-item-label"> Capacity: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="material">
          <div class = "data-item-label"> Material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="distance-to-exit">
          <div class = "data-item-label"> Distance to Exit: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="control-panel">
          <div class = "data-item-label"> Control Panel: </div> 
          <div class = "data-item-value"> <a href=""> </a>  </div> 
        </div>
        <div class = "data-item" id="control-panel-location">
          <div class = "data-item-label"> Control Panel Location: </div> 
          <div class = "data-item-value"> </div> 
        </div>
        <div class = "data-item" id="machine-room-location">
          <div class = "data-item-label"> Machine Room Location: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-extinguishing-system">
          <div class = "data-item-label"> fireExtinguishingSystem: </div> 
          <div class = "data-item-value"> <a href=""> </a> </div> 
        </div>
        <div class = "data-item" id="floors-served">
          <div class = "data-item-label"> Floors Served: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#capacity .data-item-value").innerText =
        hasCapacity;

      dataContainer.querySelector("#material .data-item-value").innerText =
        hasMaterial;

      dataContainer.querySelector("#control-panel .data-item-value a").innerText =
        controlPanel;

      dataContainer.querySelector("#control-panel-location .data-item-value").innerText =
        controlPanelLocation;

      dataContainer.querySelector("#fire-resistance-rating .data-item-value").innerText =
        fireResistanceRating;

      dataContainer.querySelector("#distance-to-exit .data-item-value").innerText =
        distanceToExit;

      dataContainer.querySelector("#machine-room-location .data-item-value").innerText =
        machineRoomLocation;

      dataContainer.querySelector("#fire-extinguishing-system .data-item-value a").innerText =
        fireExtinguishingSystem;

      dataContainer.querySelector("#floors-served .data-item-value").innerText =
        floorsServed;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}


function populateStairway(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "stairway";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Discharge Level";
  thirdTitle = "Leads to Exit";
  fourthTitle = "Roof Access";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)


  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    dischargeLevel = inputData[i]["hasDischargeLevel"];
    isExit = inputData[i]["isExit"];
    isRoofAccess = inputData[i]["isRoofAccess"];

    firstCell = hasName;
    secondCell = dischargeLevel;
    
    if (isExit) {
      thirdCell = "Yes";
      thirdCellStatus = "positive";
    } else {
      thirdCell = "No";
      thirdCellStatus = "negative";
    }
    
    if (isRoofAccess) {
      fourthCell = "Yes";
     fourthCellStatus = "positive";
    } else {
      fourthCell = "No";
     fourthCellStatus = "negative";
    }


    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.className = "stairway";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      hasMaterial = moreData["hasMaterial"]["hasName"];
      directionToExit = moreData["hasDirectionToExit"]
      distanceToExit = moreData["hasExitTravelDistances"] + " " + moreData["hasDistancesUnit"];
      fireExtinguishingSystem = moreData["hasFireExtinguishingSystem"]["hasSystem"];
      fireResistanceRating = moreData["hasFireResistanceRating"] + " " + moreData["hasFireResistanceRatingUnit"];
      floorsServed = moreData["hasFloorsServed"]
      hasWidth = moreData["hasWidth"]+ " " + moreData["hasWidthUnit"];


      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="material">
          <div class = "data-item-label"> Material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="distance-to-exit">
          <div class = "data-item-label"> Distance to Exit: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="direction-to-exit">
          <div class = "data-item-label"> Discharge Direction: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-extinguishing-system">
          <div class = "data-item-label"> Fire Extinguishing System: </div> 
          <div class = "data-item-value"> <a href=""> </a> </div> 
        </div>
        <div class = "data-item" id="floors-served">
          <div class = "data-item-label"> Floors Served: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      dataContainer.querySelector("#material .data-item-value").innerText =
        hasMaterial;

      dataContainer.querySelector("#fire-resistance-rating .data-item-value").innerText =
        fireResistanceRating;

      dataContainer.querySelector("#distance-to-exit .data-item-value").innerText =
        distanceToExit;

      dataContainer.querySelector("#direction-to-exit .data-item-value").innerText =
        directionToExit;

      dataContainer.querySelector("#fire-extinguishing-system .data-item-value a").innerText =
        fireExtinguishingSystem;

      dataContainer.querySelector("#floors-served .data-item-value").innerText =
        floorsServed;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}

function populateRamp(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "ramp";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Discharge Level";
  thirdTitle = "Leads to Exit";
  fourthTitle = "Roof Access";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    dischargeLevel = inputData[i]["hasDischargeLevel"];
    isExit = inputData[i]["isExit"];
    isRoofAccess = inputData[i]["isRoofAccess"];

    firstCell = hasName;
    secondCell = dischargeLevel;
    
    if (isExit) {
      thirdCell = "Yes";
      thirdCellStatus = "positive";
    } else {
      thirdCell = "No";
      thirdCellStatus = "negative";
    }
    
    if (isRoofAccess) {
      fourthCell = "Yes";
     fourthCellStatus = "positive";
    } else {
      fourthCell = "No";
     fourthCellStatus = "negative";
    }


    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.className = "stairway";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      hasMaterial = moreData["hasMaterial"]["hasName"];
      directionToExit = moreData["hasDirectionToExit"]
      distanceToExit = moreData["hasExitTravelDistances"] + " " + moreData["hasDistancesUnit"];
      fireExtinguishingSystem = moreData["hasFireExtinguishingSystem"]["hasSystem"];
      fireResistanceRating = moreData["hasFireResistanceRating"] + " " + moreData["hasFireResistanceRatingUnit"];
      floorsServed = moreData["hasFloorsServed"]
      hasWidth = moreData["hasWidth"]+ " " + moreData["hasWidthUnit"];


      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="material">
          <div class = "data-item-label"> Material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="distance-to-exit">
          <div class = "data-item-label"> Distance to Exit: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="direction-to-exit">
          <div class = "data-item-label"> Discharge Direction </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="fire-extinguishing-system">
          <div class = "data-item-label"> Fire Extinguishing System: </div> 
          <div class = "data-item-value"> <a href=""> </a> </div> 
        </div>
        <div class = "data-item" id="floors-served">
          <div class = "data-item-label"> Floors Served: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      dataContainer.querySelector("#material .data-item-value").innerText =
        hasMaterial;

      dataContainer.querySelector("#fire-resistance-rating .data-item-value").innerText =
        fireResistanceRating;

      dataContainer.querySelector("#distance-to-exit .data-item-value").innerText =
        distanceToExit;

      dataContainer.querySelector("#direction-to-exit .data-item-value").innerText =
        directionToExit;

      dataContainer.querySelector("#fire-extinguishing-system .data-item-value a").innerText =
        fireExtinguishingSystem;

      dataContainer.querySelector("#floors-served .data-item-value").innerText =
        floorsServed;


      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }


enableNavigation()
}

function populateWall(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "wall";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Material";
  fourthTitle = "Fire Resistance Rating";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasFloor = inputData[i]["hasOnFloor"];
    hasMaterial = inputData[i]["hasMaterial"]["hasName"];

    fireResistanceRating = inputData[i]["hasFireResistanceRating"] + " " +
                   inputData[i]["hasFireResistanceRatingUnit"];

    firstCell = hasName;
    secondCell = hasFloor;
    thirdCell = hasMaterial
    fourthCell = fireResistanceRating;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      
      hasThickness = moreData["hasThickness"] + " " + moreData["hasThicknessUnit"];
     
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="thickness">
          <div class = "data-item-label"> Thickness: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#thickness .data-item-value").innerText =
        hasThickness;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}

function populateFloorAssembly(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "floor-assembly";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Type";
  fourthTitle = "Lightweight";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasFloor = inputData[i]["hasOnFloor"];
    hasType = inputData[i]["hasType"];
    isLightweightConstruction = inputData[i]["isLightweightConstruction"];

    firstCell = hasName;
    secondCell = hasFloor;
    thirdCell = hasType
    
    if (isLightweightConstruction) {
      fourthCell = "Yes";
     fourthCellStatus = "negative";
    } else {
      fourthCell = "No";
     fourthCellStatus = "positive";
    }

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      
   
    fireResistanceRating = moreData["hasFireResistanceRating"] + " " +
                   moreData["hasFireResistanceRatingUnit"]; 
    hasMaterial = moreData["hasMaterial"]["hasName"];

      hasThickness = moreData["hasThickness"] + " " + moreData["hasThicknessUnit"];
     
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="material">
          <div class = "data-item-label"> Material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="thickness">
          <div class = "data-item-label"> Thickness: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#fire-resistance-rating .data-item-value").innerText =
        fireResistanceRating;

      dataContainer.querySelector("#material .data-item-value").innerText =
        hasMaterial;

      dataContainer.querySelector("#thickness .data-item-value").innerText =
        hasThickness;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}

function populateRoofAssembly(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "roof-assembly";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Material";
  thirdTitle = "Accessible";
  fourthTitle = "Lightweight";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    
    // Get data
    hasName = inputData[i]["hasId"];
    hasMaterial = inputData[i]["hasMaterial"]["hasName"];
    isAccessible = inputData[i]["isAccessible"];
    isLightweightConstruction = inputData[i]["isLightweightConstruction"];

    firstCell = hasName;
    secondCell = hasMaterial;

    if (isAccessible) {
      thirdCell = "Yes";
     thirdCellStatus = "positive";
    } else {
      thirdCell = "No";
     thirdCellStatus = "negative";
    }

    
    if (isLightweightConstruction) {
      fourthCell = "Yes";
     fourthCellStatus = "negative";
    } else {
      fourthCell = "No";
     fourthCellStatus = "positive";
    }

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      
   
    fireResistanceRating = moreData["hasFireResistanceRating"] + " " +
                   moreData["hasFireResistanceRatingUnit"]; 
    
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="fire-resistance-rating">
          <div class = "data-item-label"> Fire Resistance Rating: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#fire-resistance-rating .data-item-value").innerText =
        fireResistanceRating;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}

function populateBalcony(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "balcony";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Material";
  fourthTitle = "Fire Resistance Rating";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasMaterial = inputData[i]["hasMaterial"]["hasName"];
    hasOnFloor = inputData[i]["hasOnFloor"];
    fireResistanceRating = inputData[i]["hasFireResistanceRating"] + " " +
                   inputData[i]["hasFireResistanceRatingUnit"]; 
    
    firstCell = hasName;
    secondCell = hasMaterial;
      thirdCell = hasOnFloor;
      fourthCell = fireResistanceRating;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;
      additionalWrittenData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      );
      // Add additional data

      index = event.target.id;
      moreData = inputData[index];

      // Get data
      
   
    hasWidth = moreData["hasWidth"] + " " +
                   moreData["hasWidthUnit"]; 
    
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#width .data-item-value").innerText =
        hasWidth;

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)


    });
  }


enableNavigation()
}

function populateHallway(inputData){
// Add view

  subMainView = document.querySelector("#sub-main-view");
  subMainView.innerHTML = ``;
  subMainView.className = "hallway";

 
  

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Width";
  fourthTitle = "Fire Resistance Rating";

  containerID = "header";

  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasId"];
    hasWidth = inputData[i]["hasWidth"]+ " " + inputData[i]["hasWidthUnit"]; 
    hasOnFloor = inputData[i]["hasOnFloor"];
    fireResistanceRating = inputData[i]["hasFireResistanceRating"] + " " +
                   inputData[i]["hasFireResistanceRatingUnit"]; 
    
    firstCell = hasName;
    secondCell = hasOnFloor;
      thirdCell = hasWidth;
      fourthCell = fireResistanceRating;

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
  additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

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
      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)

    });
  }


enableNavigation()
}


// Non structural elements
function showNonStructuralElements(results) {

console.log(results)

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns";

  // Set view title
  title = "Non Structural Elements"
  setTitleView(mainView, title)

// Add navigation
  mainView.innerHTML += `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="door">
      <a class="nav-link active" href="#">Doors</a>
    </li>
    <li class="nav-item" id="window">
      <a class="nav-link" href="#">Windows</a>
    </li>
    <li class="nav-item" id="elevator">
      <a class="nav-link" href="#">Elevators</a>
    </li>
    <li class="nav-item" id="stairway">
      <a class="nav-link" href="#">Stairways</a>
    </li>
    <li class="nav-item" id="ramp">
      <a class="nav-link" href="#">Ramps</a>
    </li>
    <li class="nav-item" id="Wall">
      <a class="nav-link" href="#">Walls</a>
    </li>  
    <li class="nav-item" id="floor-assembly">
      <a class="nav-link" href="#">Floor Assembly</a>
    </li>  
    <li class="nav-item" id="roof-assembly">
      <a class="nav-link" href="#">Roof Assembly</a>
    </li>
    <li class="nav-item" id="balcony">
      <a class="nav-link" href="#">Balconies</a>
    </li>
    <li class="nav-item" id="hallway">
      <a class="nav-link" href="#">Hallways</a>
    </li>  
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  LoadingNonStructuralPage()

  doorContainer = document.querySelector("#door");
  windowContainer = document.querySelector("#window");
  elevatorContainer = document.querySelector("#elevator");
  stairwayContainer = document.querySelector("#stairway");
  rampContainer = document.querySelector("#ramp");
  WallContainer = document.querySelector("#Wall");
  floorAssemblyContainer = document.querySelector("#floor-assembly");
  roofAssemblyContainer = document.querySelector("#roof-assembly");
  balconyContainer = document.querySelector("#balcony");
  hallwayContainer = document.querySelector("#hallway");

  allNavigationContainers = document.querySelectorAll(".nav a");

  //  Door Container
  doorContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (doorData.length > 0)
      populateDoor(doorData)
  else
   fetch("/door/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      doorData = results
      
      populateDoor(doorData)
      
    });

  });

//  Window Container
  windowContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()

  if (windowData.length > 0)
      populateWindow(windowData)
  else
   fetch("/windows/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      windowData = results
      
      populateWindow(windowData)
      
    });

  });


//  Elevator Container
  elevatorContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (elevatorData.length > 0)
      populateElevator(elevatorData)
  else
   fetch("/elevator/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      elevatorData = results
      
      populateElevator(elevatorData)
      
    });

  });

//  Stairway Container
  stairwayContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (stairwayData.length > 0)
      populateStairway(stairwayData)
  else
   fetch("/stairway/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      stairwayData = results
      
      populateStairway(stairwayData)
      
    });

  });


//  Ramp Container
  rampContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (rampData.length > 0)
      populateRamp(rampData)
  else
   fetch("/ramp/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      rampData = results
      
      populateRamp(rampData)
      
    });

  });



//  Wall Container
  WallContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (wallData.length > 0)
      populateWall(wallData)
  else
   fetch("/wall/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      wallData = results
      
      populateWall(wallData)
      
    });

  });



//  floor Assembly Container
  floorAssemblyContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (floorAssemblyData.length > 0)
      populateFloorAssembly(floorAssemblyData)
  else
   fetch("/floor-assembly/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      floorAssemblyData = results
      
      populateFloorAssembly(floorAssemblyData)
      
    });

  });



//  Roof Assembly Container
  roofAssemblyContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (roofAssemblyData.length > 0)
      populateRoofAssembly(roofAssemblyData)
  else
   fetch("/roof-assembly/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      roofAssemblyData = results
      
      populateRoofAssembly(roofAssemblyData)
      
    });

  });


//  Balcony  Container
  balconyContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (balconyData.length > 0)
      populateBalcony(balconyData)
  else
   fetch("/balcony/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      balconyData = results
      
      populateBalcony(balconyData)
      
    });

  });


//  hallway  Container
  hallwayContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  LoadingNonStructuralPage()
  
  if (hallwayData.length > 0)
      populateHallway(hallwayData)
  else
   fetch("/hallway/" + projectTitle)
    .then((response) => response.json())
    .then((results) => {
      hallwayData = results
      
      populateHallway(hallwayData)
      
    });

  });


  document.querySelector("#door a").click();



}



// Non structural elements
function showNonStructuralElementss(results) {

console.log(results)

  // Get data
  doorData = results["door"];
  windowData = results["windows"];
  elevatorData = results["elevators"];
  stairwayData = results["stairway"];
  rampData = results["ramp"];
  wallData = results["wall"];
  floorAssemblyData = results["floorAssembly"];
  roofAssemblyData = results["roofAssembly"];
  balconyData = results["balcony"];
  hallwayData = results["hallway"];


  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns";

  // Set view title
  title = "Non Structural Elements"
  setTitleView(mainView, title)

// Add navigation
  mainView.innerHTML += `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="door">
      <a class="nav-link active" href="#">Doors</a>
    </li>
    <li class="nav-item" id="window">
      <a class="nav-link" href="#">Windows</a>
    </li>
    <li class="nav-item" id="elevator">
      <a class="nav-link" href="#">Elevators</a>
    </li>
    <li class="nav-item" id="stairway">
      <a class="nav-link" href="#">Stairways</a>
    </li>
    <li class="nav-item" id="ramp">
      <a class="nav-link" href="#">Ramps</a>
    </li>
    <li class="nav-item" id="Wall">
      <a class="nav-link" href="#">Walls</a>
    </li>  
    <li class="nav-item" id="floor-assembly">
      <a class="nav-link" href="#">Floor Assembly</a>
    </li>  
    <li class="nav-item" id="roof-assembly">
      <a class="nav-link" href="#">Roof Assembly</a>
    </li>
    <li class="nav-item" id="balcony">
      <a class="nav-link" href="#">Balconies</a>
    </li>
    <li class="nav-item" id="hallway">
      <a class="nav-link" href="#">Hallways</a>
    </li>  
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  doorContainer = document.querySelector("#door");
  windowContainer = document.querySelector("#window");
  elevatorContainer = document.querySelector("#elevator");
  stairwayContainer = document.querySelector("#stairway");
  rampContainer = document.querySelector("#ramp");
  WallContainer = document.querySelector("#Wall");
  floorAssemblyContainer = document.querySelector("#floor-assembly");
  roofAssemblyContainer = document.querySelector("#roof-assembly");
  balconyContainer = document.querySelector("#balcony");
  hallwayContainer = document.querySelector("#hallway");

  allNavigationContainers = document.querySelectorAll(".nav a");

  //  Door Container
  doorContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  populateDoor(doorData)

  });

//  Window Container
  windowContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
  populateWindow(windowData)

  });


//  Elevator Container
  elevatorContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateElevator(elevatorData)

  });

//  Stairway Container
  stairwayContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateStairway(stairwayData)

  });


//  Ramp Container
  rampContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateRamp(rampData)

  });



//  Wall Container
  WallContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateWall(wallData)

  });



//  floor Assembly Container
  floorAssemblyContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateFloorAssembly(floorAssemblyData)

  });



//  Roof Assembly Container
  roofAssemblyContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateRoofAssembly(roofAssemblyData)

  });


//  Balcony  Container
  balconyContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateBalcony(balconyData)

  });


//  hallway  Container
  hallwayContainer.addEventListener("click", function (event) {
     // Change active tab
  changeActiveTab(event, allNavigationContainers)

  //Fetch data
      populateHallway(hallwayData)

  });


  document.querySelector("#door a").click();




enableNavigation()
}

function  showStructuralElements(results){
  
  
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns";

  // Set view title
  title = "Structural Elements"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Elements";
  secondTitle = "Floor";
  thirdTitle = "Type";
  fourthTitle = "Fire Resistance Rating";

  containerClass = "structural-elements";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasName = results[i]["hasName"];
    hasLocation = results[i]["hasLocation"];
    hasType = results[i]["hasType"];
    fireResistanceRating = results[i]["hasFireResistanceRating"] + " " +
                                    results[i]["hasFireResistanceRatingUnit"]
    
    firstCell = hasName;
    secondCell = hasLocation;
      thirdCell =hasType;
      fourthCell = fireResistanceRating;

    containerClass = "structural-elements";
    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

  // Toggle click on container (Show more information)
   additionalWrittenData = false;
  additionalGraphicData = false;
  allContainers = document.querySelectorAll("#sub-main-view .parent-container");

  for (i = 0; i < allContainers.length; i++) {
    if (allContainers[i].id == "header") continue;

    allContainers[i].addEventListener("click", function (event) {
      additionalGraphicData = true;

      addMoreContentContainer(
        event,
        allContainers,
        additionalWrittenData,
        additionalGraphicData
      )
    
    
      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    })
  }

enableNavigation()
}

function  changeActiveTab(event, allNavigationContainers){

  event.target.className = "nav-link active";

  for (i = 0; i < allNavigationContainers.length; i++) {
    if (allNavigationContainers[i] == event.target) continue;
    allNavigationContainers[i].className = "nav-link";
  }
}

// KeyBox
function showKeyBox(results) {
  
  
  mainView = document.querySelector(".main-view");
  mainView.id = "Key-box";

  // Set view title
  title = "Key Box"
  setTitleView(mainView, title)

  keyBoxLocation = results[0]["hasLocation"];

  subjectLabel = "KeyBox Location:";
  subjectValue = keyBoxLocation;
  containerID = "keybox-location-container";
  isMore = false;
  moreContent = "";
  containerClass = "";

  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);



  keysInsideKeyBox = results[0]["hasKey"];

  subjectLabel = "Keys Inside KeyBox:";
  subjectValue = keysInsideKeyBox;
  containerID = "keys-inside-keyBox-container";
  isMore = false;
  moreContent = "";
  containerClass = "";

  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);


enableNavigation()
}

function showConcealedSpace(results) {
  
  
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns";

  // Set view title
  title = "Concealed Spaces"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Fire Extinguishing System";

  containerClass = "";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasName = results[i]["hasName"];
    hasLocation = results[i]["hasLocation"];
    fireExtinguishingSystem = results[i]["hasFireExtinguishingSystem"]["hasSystem"];
    
    firstCell = hasName;
    secondCell = hasLocation;
    thirdCell = "<a href = '#'>" + fireExtinguishingSystem + "</a>";
    

    containerClass = "";
    containerID = i;

    createThreeColumnContainer(
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

 

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
      hasDescription = moreData["hasDescription"];
       
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="description">
          <div class = "data-item-label"> Description: </div> 
          <div class = "data-item-value"> </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#description .data-item-value").innerText = hasDescription;


      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}


function showVerticalOpening(results) {
  
  
  mainView = document.querySelector(".main-view");
  mainView.id = "two-columns";

  // Set view title
  title = "Vertical Openings"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Name";
  secondTitle = "Location";

  containerClass = "";
  containerID = "header";
  secondCellStatus = false


  createTwoColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    containerID,
    containerClass
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasName = results[i]["hasName"];
    hasLocation = results[i]["hasLocation"];
    
    firstCell = hasName;
    secondCell = hasLocation;

    containerClass = "";
    containerID = i;

    createTwoColumnContainer(
      contentView,
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
  contentView.appendChild(moreContainer);

 

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

      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

function  showHazardousMaterial(results){
  
  
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns";

  // Set view title
  title = "Hazardous Materials"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Name";
  secondTitle = "Floor";
  thirdTitle = "Decontamination";

  containerClass = "";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasName = results[i]["hasName"];
    hasLocation = results[i]["hasLocation"];
    isDecontaminationRequired = results[i]["isDecontaminationRequired"];
    
    firstCell = hasName;
    secondCell = hasLocation;

      if (isDecontaminationRequired) {
        thirdCell = "Required";
        thirdCellStatus = "negative";
      } else {
        thirdCell = "Not Required";
        thirdCellStatus = "positive";
      }

    containerClass = "";
    containerID = i;

    createThreeColumnContainer(
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

 

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
      hazardLevel = moreData["hasHazardLevel"];
      specialHazard = moreData["hasSpecialHazard"];
      hasDescription = moreData["hasDescription"];
      
      // Get data container
      dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="hazard-level">
          <div class = "data-item-label"> Hazard Level: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="special-hazard">
          <div class = "data-item-label"> Special Hazard: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="description">
          <div class = "data-item-label"> Description: </div> 
          <div class = "data-item-value">  <a href="#"></a> </div> 
        </div>
        `;

      // Insert values

      dataContainer.querySelector("#hazard-level .data-item-value").innerText = hazardLevel;

      dataContainer.querySelector("#special-hazard .data-item-value").innerText = specialHazard;

      dataContainer.querySelector("#description .data-item-value").innerText = hasDescription;


      // Create graphic data containers      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}



function fetchMap(buildingAddress, addMarker = "none", isRouting = "false") {
  
  if (buildingCoordinate.length > 0) {
    createMap(addMarker, isRouting);
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
        
        lon = result[0]["lon"];
        lat = result[0]["lat"];
        buildingCoordinate = [ parseFloat(result[0]["lon"]), parseFloat(result[0]["lat"])];

        createMap(addMarker, isRouting);
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
      buildingCoordinate = [ parseFloat(result[0]["lon"]), parseFloat(result[0]["lat"])];
 });
}
function createMap(addMarker, isRouting) {
  
// Create map
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXlvc2lhczEwMSIsImEiOiJjbDFuOHB6MXEwcnNhM3BrcW55ZGh1ZGo4In0.Iq_eA8HIPymBe2LAfWETcw";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [buildingCoordinate[0], buildingCoordinate[1]], // starting position [lng, lat]
    zoom: 16, // starting zoom
  });


  // create the popup
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Construction on the Washington Monument began in 1848."
  );
  

  // create DOM element for the marker
  const el = document.createElement("div");
  el.id = "marker";

// Add marker
  const waypoint1 = new mapboxgl.Marker({ color: "red" })
    .setPopup(popup)
    .setLngLat([buildingCoordinate[0], buildingCoordinate[1]])
    .addTo(map);

    if (addMarker != "none")
 { 
   // add object to the map
  lon = addMarker.split(",")[1];
  lat = addMarker.split(",")[0];
  // Add marker
  const waypoint2 = new mapboxgl.Marker({ color: "blue" })
    .setLngLat([lon, lat])
    .addTo(map);
if(isRouting)
  {
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

buildingCoordinateEdge = [0,0]
markerLocationEdge = [0,0]

addMarker = [parseFloat(addMarker.split(",")[1]), parseFloat(addMarker.split(",")[0])]

if( buildingCoordinate[0] > addMarker[0]){
buildingCoordinateEdge[0] = buildingCoordinate[0] + 0.001
markerLocationEdge[0] = addMarker[0] - 0.001
}
else{
buildingCoordinateEdge[0] = buildingCoordinate[0] - 0.001
markerLocationEdge[0] = addMarker[0] - 0.001
}


if( buildingCoordinate[1] > addMarker[1]){
buildingCoordinateEdge[1] = buildingCoordinate[1] + 0.001
markerLocationEdge[1] = addMarker[1] - 0.001
}
else{
buildingCoordinateEdge[1] = buildingCoordinate[1] - 0.001
markerLocationEdge[1] = addMarker[1] + 0.001
}

console.log(buildingCoordinate)
console.log(addMarker)
console.log(buildingCoordinateEdge)
console.log(markerLocationEdge)
      
      map.fitBounds([
buildingCoordinateEdge,
markerLocationEdge 
]);

}

}


function showSurroundings(results){
  

  // Get data
  surroundingBuilding = results["surroundingBuilding"];
  surroundingTerrain = results["surroundingTerrain"];
  vegetation = results["vegetation"];
  hazardousMaterial = results["hazardousMaterial"];
  obstruction = results["obstruction"];
  parkingLot = results["parkingLot"];
  pipeline = results["pipeline"];
  powerLine = results["powerLine"];
  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Surrounding Structures"
  setTitleView(mainView, title)

  mainView.innerHTML += `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="surrounding-building">
      <a class="nav-link active" href="#">Buildings and Structures</a>
    </li>  
    <li class="nav-item" id="surrounding-terrain">
      <a class="nav-link" href="#">Surrounding Terrain</a>
    </li>  
    <li class="nav-item" id="vegetation">
      <a class="nav-link" href="#">Vegetation</a>
    </li>  
    <li class="nav-item" id="hazardous-material">
      <a class="nav-link" href="#">Hazardous Material</a>
    </li>
    <li class="nav-item" id="obstruction">
      <a class="nav-link" href="#">Obstruction</a>
    </li>
    <li class="nav-item" id="parking-lot">
      <a class="nav-link" href="#">Parking Lot</a>
    </li>  
    <li class="nav-item" id="pipeline">
      <a class="nav-link" href="#">Pipeline</a>
    </li>
    <li class="nav-item" id="powerLine">
      <a class="nav-link" href="#">Power Line</a>
    </li>
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  hazardousMaterialContainer = document.querySelector("#hazardous-material");
  obstructionContainer = document.querySelector("#obstruction");
  parkingLotContainer = document.querySelector("#parking-lot");
  pipelineContainer = document.querySelector("#pipeline");
  powerLineContainer = document.querySelector("#powerLine");
  surroundingBuildingContainer = document.querySelector("#surrounding-building");
  surroundingTerrainContainer = document.querySelector("#surrounding-terrain");
  vegetationContainer = document.querySelector("#vegetation");

  allNavigationContainers = document.querySelectorAll(".nav a");

  

  // surrounding Building Container
  surroundingBuildingContainer.addEventListener("click", function (event) {
    // Populate data
    populateSurroundingBuilding(
      event,
      allNavigationContainers,
      surroundingBuilding
    );
  });


  // surrounding Terrain Container
  surroundingTerrainContainer.addEventListener("click", function (event) {
    // Populate data
    populateSurroundingTerrain(
      event,
      allNavigationContainers,
      surroundingTerrain
    );
  });

  // vegetation Container
  vegetationContainer.addEventListener("click", function (event) {
    // Populate data
    populateVegetation(
      event,
      allNavigationContainers,
      vegetation
    );
  });

  // hazardous Material Container
  hazardousMaterialContainer.addEventListener("click", function (event) {
    // Populate data
    populateHazardousMaterial(
      event,
      allNavigationContainers,
      hazardousMaterial
    );
  });

  // obstruction Container
  obstructionContainer.addEventListener("click", function (event) {
    // Populate data
    populateObstruction(
      event,
      allNavigationContainers,
      obstruction
    );
  });

  // parking Lot Container
  parkingLotContainer.addEventListener("click", function (event) {
    // Populate data
    populateParkingLot(
      event,
      allNavigationContainers,
      parkingLot
    );
  });

  // pipeline Container
  pipelineContainer.addEventListener("click", function (event) {
    // Populate data
    populatePipeline(
      event,
      allNavigationContainers,
      pipeline
    );
  });

  // power Line Container
  powerLineContainer.addEventListener("click", function (event) {
    // Populate data
    populatePowerLine(
      event,
      allNavigationContainers,
      powerLine
    );
  });
  document.querySelector("#surrounding-building a").click();

enableNavigation()
}


function showWeatherCondition(results){

results = results.getElementsByTagName("current")[0]

      
      
      // hasPrecipitationValue = result.FloatField();


      getLastUpdate = results.getElementsByTagName("lastupdate")[0]
      hasLastUpdate = getLastUpdate.getAttribute("value").split("T")[1]
 
      getTemperature = results.getElementsByTagName("temperature")[0]
      hasTemperature = getTemperature.getAttribute("value") +
                        " " + getTemperature.getAttribute("unit")
      
                        
     getRelativeHumidity = results.getElementsByTagName("humidity")[0]
     hasRelativeHumidity = getRelativeHumidity.getAttribute("value") +
                        " " + getRelativeHumidity.getAttribute("unit")
      
                        
     getPressure = results.getElementsByTagName("pressure")[0]
     hasPressure = getPressure.getAttribute("value") +
                        " " + getPressure.getAttribute("unit")
      
                        
     getWindSpeed = results.getElementsByTagName("wind")[0].getElementsByTagName("speed")[0]

     hasWindSpeed = getWindSpeed.getAttribute("name") +
                        " (" + getWindSpeed.getAttribute("value") +
                        " " + getWindSpeed.getAttribute("unit") + ")"
      
                        
     getWindDirection = results.getElementsByTagName("wind")[0].getElementsByTagName("direction")[0]

     hasWindDirection = getWindDirection.getAttribute("name") +
                        " (" + getWindDirection.getAttribute("value") +
                        " " + getWindDirection.getAttribute("code") + ")"
      
                        
     getClouds = results.getElementsByTagName("clouds")[0]

     hasClouds = getClouds.getAttribute("name") +
                        " (" + getClouds.getAttribute("value") +
                        ")" 
      
hasClouds = hasClouds.charAt(0).toUpperCase() + hasClouds.slice(1);



     getPrecipitation = results.getElementsByTagName("precipitation")[0]

     hasSnow = "No Snow"
     hasRain = "No Rain"
     if(getPrecipitation.getAttribute("mode") == "snow")
     hasSnow = getPrecipitation.getAttribute("mode") +
                        " (" + getPrecipitation.getAttribute("value") +
                        " mm for last " + getPrecipitation.getAttribute("unit") + ")"
      else  if(getPrecipitation.getAttribute("mode") == "rain")
     hasRain = getPrecipitation.getAttribute("mode") +
                        " (" + getPrecipitation.getAttribute("value") +
                        " mm for last " + getPrecipitation.getAttribute("unit") + ")"
      

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Weather Condition"
  setTitleView(mainView, title)

  // Time Mark

  subjectLabel = "Last Update:";
  subjectValue = hasLastUpdate;
  containerID = "last-update-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);


  // Wind Speed

  subjectLabel = "Wind Speed:";
  subjectValue = hasWindSpeed;
  containerID = "wind-speed-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);


  // Wind Speed

  subjectLabel = "Wind Direction:";
  subjectValue = hasWindDirection;
  containerID = "wind-direction-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Relative Humidity

  subjectLabel = "Relative Humidity:";
  subjectValue = hasRelativeHumidity;
  containerID = "relative-humidity-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Pressure

  subjectLabel = "Pressure:";
  subjectValue = hasPressure;
  containerID = "pressure-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Temperature

  subjectLabel = "Temperature:";
  subjectValue = hasTemperature;
  containerID = "temperature-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Cloud
  subjectLabel = "Cloud:";
  subjectValue = hasClouds 
  containerID = "cloud-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);
  
  // Rain

  subjectLabel = "Rain:";
  subjectValue = hasRain;
  containerID = "rain-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Snow

  subjectLabel = "Snow:";
  subjectValue = hasSnow;
  containerID = "snow-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

enableNavigation()

    }


function showWaterSource(results) {
  

  // Get data
  
  staticWaterSource = results["staticWaterSource"];
  municipalDistributionSystem = results["municipalDistributionSystem"];

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns";

  // Set view title
  title = "Sensors and Detectors"
  setTitleView(mainView, title)

// Add navigation
  mainView.innerHTML += `
  <ul class="nav nav-tabs">
    <li class="nav-item" id="municipal-distribution-system">
      <a class="nav-link active" href="#">Municipal Distribution System</a>
    </li>
    <li class="nav-item" id="static-water-source">
      <a class="nav-link" href="#">Static Water Source</a>
    </li>  
</ul>
  `;

  // Creat sub main view
  subMainView = document.createElement("div");
  subMainView.id = "sub-main-view";
  mainView.appendChild(subMainView);
  subMainView.innerHTML = "";

  municipalDistributionSystemContainer = document.querySelector(
    "#municipal-distribution-system"
  );
  staticWaterSourceContainer = document.querySelector(
    "#static-water-source"
  );
  

  allNavigationContainers = document.querySelectorAll(".nav a");

  // Municipal Distribution System Container
  municipalDistributionSystemContainer.addEventListener("click", function (event) {
    // Populate data
    
    populateMunicipalDistributionSystem(
      event,
      allNavigationContainers,
      municipalDistributionSystem
    );
  });

  // static Water Source Container
  staticWaterSourceContainer.addEventListener("click", function (event) {
    // Populate data
    
    populateStaticWaterSource(
      event,
      allNavigationContainers,
      staticWaterSource
    );
  });


  municipalDistributionSystemContainer.querySelector("a").click();
enableNavigation()
}


function populateMunicipalDistributionSystem(
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
  subMainView.className = "municipal-distribution-system";

  // Set title
  firstTitle = "Name";
  secondTitle = "Pressure";
  thirdTitle = "FireFlow";
  fourthTitle = "State";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";


  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasPressure =
      inputData[i]["hasPressure"] +
      " " +
      inputData[i]["hasPressureUnit"];
    
      fireFlow =
      inputData[i]["hasFireFlow"] +
      " " +
      inputData[i]["hasFireFlowUnit"];
    isFunctional = inputData[i]["isFunctional"];

    firstCell = hasName;
    secondCell = hasPressure;
    thirdCell = fireFlow;
    if (isFunctional) {
      fourthCell = "Functional";
      fourthCellStatus = "positive";
    } else {
      fourthCell = "Not Functional";
      fourthCellStatus = "negative";
    }


    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

}




function populateStaticWaterSource(
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
  subMainView.className = "static-water-source";

  // Set title
  firstTitle = "Name";
  secondTitle = "Type";
  thirdTitle = "Distance from Building";
  fourthTitle = "State";
  
  containerID = "header";
  
  
  secondCellStatus = "neutral";
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";


  createFourColumnContainer(
    subMainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  subMainView.appendChild(contentView)

  for (i = 0; i < inputData.length; i++) {
    // Get data
    hasName = inputData[i]["hasName"];
    hasType = inputData[i]["hasType"];
    distanceFromBuilding =
      inputData[i]["hasDistanceFromIncidentBuilding"] +
      " " +
      inputData[i]["hasDistanceUnit"];
    isFunctional = inputData[i]["isFunctional"];

    firstCell = hasName;
    secondCell = hasType;
    thirdCell = distanceFromBuilding;
    if (isFunctional) {
      fourthCell = "Usable";
      fourthCellStatus = "positive";
    } else {
      fourthCell = "Not Usable";
      fourthCellStatus = "negative";
    }


    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
      secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
        moreData = inputData[index];

        // Get data
        
        staticWaterCoordinate = moreData["hasLocation"];
        fireFlow = moreData["hasFireFlow"] + 
                  " " + moreData["hasFireFlowUnit"]
        

        // Create data containers

        dataContainer = document.querySelector("#data-container");
      dataContainer.innerHTML = `
        <div class = "data-item" id="fire-flow">
          <div class = "data-item-label"> Fire Flow: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

        // Insert values
        
        dataContainer.querySelector(
          "#fire-flow .data-item-value"
        ).innerText = fireFlow;



        // Create graphic data containers

        graphicDataContainer = document.querySelector("#graphic-data-container");
      graphicDataContainer.innerHTML = `
<div id="map"></div>
`;
         isRouting = false
        fetchMap(buildingAddress, staticWaterCoordinate, isRouting);

    });
  }
}


function showFireLane(results){
results = results[0]
  

  // Get data 
  
  hasType = results["hasType"];
  hasMaterial = results["hasMaterial"]["hasName"];
  hasCondition = results["hasCondition"];
  hasWidth = results["hasWidth"] + " " + results["hasWidthUnit"];
  hasSlope = results["hasSlope"];
  turningRadius = results["hasTurningRadius"] + " " + results["hasTurningRadiusUnit"];
  verticalClearance = results["hasVerticalClearance"] + " " + results["hasVerticalClearanceUnit"];
  angleOfApproach = results["hasAngleOfApproach"] + " degrees"
  accessBarrierType = results["hasAccessBarrierType"]

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Fire Lane"
  setTitleView(mainView, title)

  // Road type
  subjectLabel = "Type:";
  subjectValue = hasType;
  containerID = "type-container";
  isMore = false;
  moreContent = "";
  containerClass = "";

  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Material
  subjectLabel = "Material:";
  subjectValue = hasMaterial;
  containerID = "material-container";
  isMore = false;

  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Road Condition
  subjectLabel = "Road Condition:";
  subjectValue = hasCondition;
  containerID = "road-condition-container";
  isMore = false;

  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Road width

  subjectLabel = "Road width:";
  subjectValue = hasWidth ;
  containerID = "road-width-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Road Slope

  subjectLabel = "Road Slope:";
  subjectValue = hasSlope ;
  containerID = "road-slope-container";
  isMore = false;

  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Turning Radius

  subjectLabel = "Turning Radius:";
  subjectValue = turningRadius;
  containerID = "turning-radius-container";
  isMore = false;

  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Vertical Clearance

  subjectLabel = "Vertical Clearance:";
  subjectValue = verticalClearance;
  containerID = "vertical-clearance-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Angles of Approach

  subjectLabel = "Angle of Approach:";
  subjectValue = angleOfApproach;
  containerID = "angle-of-approach-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Access Barrier Type

  subjectLabel = "Access Barrier Type:";
  subjectValue = accessBarrierType;
  containerID = "access-barrier-type-container";
  isMore = false;
  
  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  
enableNavigation()

}


function showRoadToIncident(results){
  
  currentLocation = [24.94530997613723, 60.16532759718519]


  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns"

  // Set view title
  title = "Roads to Incident"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Route";
  secondTitle = "Distance";
  thirdTitle = "Duration";
  fourthTitle = "Traffic Level";

  containerClass = "road-to-incident";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";

  createFourColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    fourthTitle,
    fourthCellStatus,
    containerID,
    containerClass
  );
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasTrafficLevel = results[i]["hasTrafficLevel"];
        hasDistance = results[i]["hasDistance"] + " " + results[i]["hasDistanceUnit"]
        hasDuration = results[i]["hasDuration"] + " " + results[i]["hasDurationUnit"]

    firstCell = i + 1;
    secondCell = hasDistance;
      thirdCell = hasDuration;
      fourthCell = hasTrafficLevel;
      

    containerID = i;

    createFourColumnContainer(
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      fourthCell,
      fourthCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
        // Add more content
        index = event.target.id;
        moreData = results[index];


        // Get data
    hasType = moreData["hasType"];
    hasCondition = moreData["hasCondition"];
        hasMaterial = moreData["hasMaterial"]["hasName"];
        hasWidth = moreData["hasWidth"] + " " + moreData["hasWidthUnit"]
        hasSlope = moreData["hasSlope"] 
    

      // Get data container
      dataContainer = document.querySelector("#data-container");
        dataContainer.innerHTML = `
        <div class = "data-item" id="type">
          <div class = "data-item-label"> Type: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="road-condition">
          <div class = "data-item-label"> Road Condition: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="material">
          <div class = "data-item-label"> material: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="width">
          <div class = "data-item-label"> Width: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        <div class = "data-item" id="slope">
          <div class = "data-item-label"> Slope: </div> 
          <div class = "data-item-value">  </div> 
        </div>
        `;

        // Insert values

        dataContainer.querySelector(
          "#material .data-item-value"
        ).innerText = hasMaterial;

        dataContainer.querySelector(
          "#road-condition .data-item-value"
        ).innerText = hasCondition;

        dataContainer.querySelector(
          "#width .data-item-value"
        ).innerText = hasWidth;

        dataContainer.querySelector(
          "#type .data-item-value"
        ).innerText = hasType;

        dataContainer.querySelector(
          "#slope .data-item-value"
        ).innerText = hasSlope;

      // Get data container
      dataContainer = document.querySelector("#graphic-data-container");

        graphicDataContainer.innerHTML = `
<div id="map"></div>
`;

         isRouting = true
  mapRoadToIncident(buildingAddress, currentLocation, index)
        
    });
  }
  
       

enableNavigation()
}

function mapRoadToIncident(buildingAddress, currentLocation, index){

  if (buildingCoordinate.length > 0) {
    drawMapToIncident(buildingCoordinate, currentLocation, index);
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
        
        lon = result[0]["lon"];
        lat = result[0]["lat"];
        buildingCoordinate = [result[0]["lon"], result[0]["lat"]];

    drawMapToIncident(buildingCoordinate, currentLocation, index);
      });
  }

}

function drawMapToIncident(buildingCoordinate, currentLocation, index){

// Create map
  mapboxgl.accessToken =
    "pk.eyJ1IjoiZXlvc2lhczEwMSIsImEiOiJjbDFuOHB6MXEwcnNhM3BrcW55ZGh1ZGo4In0.Iq_eA8HIPymBe2LAfWETcw";
  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/streets-v11", // style URL
    center: [buildingCoordinate[0], buildingCoordinate[1]], // starting position [lng, lat]
    zoom: 16, // starting zoom
  });


  // create the popup
  const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    "Construction on the Washington Monument began in 1848."
  );
  
// Add marker
  const waypoint1 = new mapboxgl.Marker({ color: "red" })
    .setPopup(popup)
    .setLngLat([buildingCoordinate[0], buildingCoordinate[1]])
    .addTo(map);

  // add current location to the map
  lon = currentLocation[0];
  lat = currentLocation[1];

  // create DOM element for the marker
  const el = document.createElement("div");
  el.id = "marker";

  // Add marker
  const waypoint2 = new mapboxgl.Marker({ color: "blue" })
    .setLngLat([lon, lat])
    .addTo(map);

    // Get route

    accessToken =
    "pk.eyJ1IjoiZXlvc2lhczEwMSIsImEiOiJjbDFuOHB6MXEwcnNhM3BrcW55ZGh1ZGo4In0.Iq_eA8HIPymBe2LAfWETcw";
  fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${buildingCoordinate[0]},${buildingCoordinate[1]};${lon},${lat}?steps=true&geometries=geojson&alternatives=true&access_token=${accessToken}`,
    { method: "GET" }
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      
      const data = json.routes[index];

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

buildingCoordinateEdge = [0,0]
currentLocationEdge = [0,0]

if( buildingCoordinate[0] > currentLocation[0]){
buildingCoordinateEdge[0] = buildingCoordinate[0] + 0.01
currentLocationEdge[0] = currentLocation[0] - 0.01
}
else{
buildingCoordinateEdge[0] = buildingCoordinate[0] - 0.01
currentLocationEdge[0] = currentLocation[0] - 0.01
}


if( buildingCoordinate[1] > currentLocation[1]){
buildingCoordinateEdge[1] = buildingCoordinate[1] + 0.01
currentLocationEdge[1] = currentLocation[1] - 0.01
}
else{
buildingCoordinateEdge[1] = buildingCoordinate[1] - 0.01
currentLocationEdge[1] = currentLocation[1] + 0.01
}

      
      map.fitBounds([
buildingCoordinateEdge,
currentLocationEdge 
]);

    });
    }

// Area of refuge

function showAreaOfRefuge(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = ""

  // Set view title
  title = "Area Of Refuge"
  setTitleView(mainView, title)

  // Set title
  firstTitle = "Name";
  secondTitle = "Capacity";
  thirdTitle = "Location";

  containerClass = "area-of-refuge";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";

  createThreeColumnContainer(
    mainView,
    firstTitle,
    secondTitle,
    secondCellStatus,
    thirdTitle,
    thirdCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasName = results[i]["hasName"];
    hasCapacity = results[i]["hasCapacity"] + " People";
    hasLocation = results[i]["hasLocation"];

    firstCell = hasName
    secondCell = hasCapacity
    thirdCell = hasLocation
console.log(firstCell)

    containerID = i;

    createThreeColumnContainer(
      contentView,
      firstCell,
      secondCell,
    secondCellStatus,
      thirdCell,
      thirdCellStatus,
      containerID,
      containerClass
    );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}



// FARS Fill Stations

function showFarsFillStations(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "five-columns"

  // Set view title
  title = "FARS Fill Stations"
  setTitleView(mainView, title)

  // Set title
  firstCell = "FARS Fill Station";
  secondCell = "Floor";
  thirdCell = "Fill Pressure";
  fourthCell = "Fill Time";
 fifthCell = "Simultaneous Fills";

  containerClass = "area-of-refuge";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral";
  fourthCellStatus = "neutral";
  fifthCellStatus = "neutral";

  createFiveColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    fourthCell,
    fourthCellStatus,
    fifthCell,
    fifthCellStatus,
    containerID,
    containerClass
  );

  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)

  for (i = 0; i < results.length; i++) {
    // Get data
    hasName = i + 1;
    hasOnFloor = results[i]["hasOnFloor"] ;
    fillPressure = results[i]["hasFillPressure"] + 
                      " " + results[i]["hasFillPressureUnit"]
 
    fillTime = results[i]["hasFillTime"] + 
                      " " + results[i]["hasFillTimeUnit"]
    numberOfSimultaneousFill = results[i]["hasNumberOfSimultaneousFill"] ;

    firstCell = hasName
    secondCell = hasOnFloor
    thirdCell = fillPressure
    fourthCell = fillTime
    fifthCell = numberOfSimultaneousFill
    

    containerID = i;

    
  createFiveColumnContainer(
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    fourthCell,
    fourthCellStatus,
    fifthCell,
    fifthCellStatus,
    containerID,
    containerClass
  );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Emergency Power Outlets

function showEmergencyPowerOutlets(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "two-columns"

  // Set view title
  title = "Emergency Power Outlets"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Floor";
  secondCell = "Outlet Type";

  containerClass = "area-of-refuge";
  containerID = "header";

  secondCellStatus = "neutral",

  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasLocation = results[i]["hasLocation"] ;
    hasType = results[i]["hasType"] 

    firstCell = hasLocation
    secondCell = hasType
    

    containerID = i;
    
  createTwoColumnContainer(
    contentView,
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
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}


// Smoke And Heat Removal System

function showSmokeAndHeatRemovalSystem(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns"

  // Set view title
  title = "Smoke And Heat Removal Systems"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Floor";
  secondCell = "System Type";
  thirdCell = "State";

  containerClass = "area-of-refuge";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral",

  createThreeColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    containerID,
    containerClass
  );



  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasLocation = results[i]["hasLocation"] 
    hasType = results[i]["hasType"] 
    isSystemActivated = results[i]["isSystemActivated"] 

    firstCell = hasLocation
    secondCell = hasType
    if (isSystemActivated) {
      thirdCell = "Activated";
      thirdCellStatus = "positive";
    } else {
      thirdCell = "Not Activated";
      thirdCellStatus = "negative";
    }
    

    containerID = i;
    
  createThreeColumnContainer(
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    containerID,
    containerClass
  );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Smoke Control System

function showSmokeControlSystem(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "four-columns"

  // Set view title
  title = "Smoke Control System"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Coverage Zone";
  secondCell = "System Type";
  thirdCell = "Control Panel";
  fourthCell = "State";

  containerClass = "area-of-refuge";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral",
  fourthCellStatus = "neutral",

  createFourColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    fourthCell,
    fourthCellStatus,
    containerID,
    containerClass
  );



  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    coverageZone = results[i]["hasCoverageZone"] 
    hasType = results[i]["hasType"] 
    isSystemActivated = results[i]["isSystemActivated"] 
    controlPanel =  results[i]["hasControlPanel"]["hasName"] 

    firstCell = coverageZone
    secondCell = hasType
    thirdCell = "<a href '#'>"+ controlPanel + "<a/>"

    if (isSystemActivated) {
      fourthCell = "Activated";
      fourthCellStatus = "negative";
    } else {
      fourthCell = "Not Activated";
      fourthCellStatus = "positive";
    }
    

    containerID = i;
    
  createFourColumnContainer(
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    fourthCell,
    fourthCellStatus,
    containerID,
    containerClass
  );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Fire Pump

function showFirePump(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "two-columns"

  // Set view title
  title = "Fire Pump"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Fire Pumps";
  secondCell = "Location";

  containerClass = "fire-pump";
  containerID = "header";

  secondCellStatus = "neutral",

  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );



  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasLocation = results[i]["hasLocation"] 

    firstCell = i + 1
    secondCell = hasLocation
    

    containerID = i;
    
  createTwoColumnContainer(
    contentView,
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
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}


// Mass Notification System

function showMassNotificationSystem(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns"

  // Set view title
  title = "Mass Notification Systems"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Coverage Zone";
  secondCell = "System Type";
  thirdCell = "Control Panel";

  containerClass = "mass-notification-system";
  containerID = "header";

  secondCellStatus = "neutral",
  thirdCellStatus = "neutral",

  createThreeColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    containerID,
    containerClass
  );

  
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    coverageZone = results[i]["hasCoverageZone"] 
    hasType = results[i]["hasType"] 
    controlPanel =  results[i]["hasControlPanel"]["hasName"] 

    firstCell = coverageZone
    secondCell = hasType
    thirdCell = "<a href '#'>"+ controlPanel + "<a/>"


    containerID = i;
    
  createThreeColumnContainer(
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    thirdCell,
    thirdCellStatus,
    containerID,
    containerClass
  );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}


// Extremely Valuable Materials

function showExtremelyValuableMaterials(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "two-columns"

  // Set view title
  title = "Extremely Valuable Materials"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Location";
  secondCell = "Description";

  containerClass = "extremely-valuable-materials";
  containerID = "header";

  secondCellStatus = "neutral",

  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );


  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasLocation = results[i]["hasLocation"] 
    hasDescription = results[i]["hasDescription"] 

    firstCell = hasLocation
    secondCell = hasDescription


    containerID = i;
    
  createTwoColumnContainer(
    contentView,
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
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}


// Helipad

function showHelipad(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "two-columns"

  // Set view title
  title = "Helipads"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Location";
  secondCell = "Description";

  containerClass = "extremely-valuable-materials";
  containerID = "header";

  secondCellStatus = "neutral",

  createTwoColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    containerID,
    containerClass
  );

  
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasLocation = results[i]["hasLocation"] 
    hasDescription = "N/A" 

    firstCell = hasLocation
    secondCell = hasDescription


    containerID = i;
    
  createTwoColumnContainer(
    contentView,
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
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

function setTitleView(mainView, title){

  mainView.innerHTML = "";
  titleView = document.createElement("div");
  titleView.className = "title-view"
  titleView.innerHTML  = title
  mainView.appendChild(titleView)
}

// Building Plans 

function showBuildingPlans(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns"

  // Set view title
  title = "Building Plans"
  setTitleView(mainView, title)


  // Set title
  firstCell = "Floor";
  secondCell = "Plan Type";
  threeCell = "Location of Plan";

  containerClass = "building-plans";
  containerID = "header";

    secondCellStatus = "neutral"
  threeCellStatus = "neutral"

  createThreeColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    threeCell,
    threeCellStatus,
    containerID,
    containerClass
  );

  
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasFloor = results[i]["hasFloor"] 
    hasType = results[i]["hasType"] 
    planLocation = results[i]["hasPlanLocation"] 

    firstCell = hasFloor
    secondCell = hasType
    threeCell = planLocation


    containerID = i;
    
  createThreeColumnContainer(
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    threeCell,
    threeCellStatus,
    containerID,
    containerClass
  );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}

// Fire Command Center

function showFireCommandCenter(results){
  
  

  // Get main view
  mainView = document.querySelector(".main-view");
  mainView.id = "three-columns"
  mainView.innerHTML = "";


  // Set title
  firstCell = "Floor";
  secondCell = "Plan Type";
  threeCell = "Location of Plan";

  containerClass = "building-plans";
  containerID = "header";

    secondCellStatus = "neutral"
  threeCellStatus = "neutral"

  createThreeColumnContainer(
    mainView,
    firstCell,
    secondCell,
    secondCellStatus,
    threeCell,
    threeCellStatus,
    containerID,
    containerClass
  );

  
  // content container
  contentView = document.createElement("div")
  contentView.className = "content-view"
  mainView.appendChild(contentView)


  for (i = 0; i < results.length; i++) {
    // Get data
    
    hasFloor = results[i]["hasFloor"] 
    hasType = results[i]["hasType"] 
    planLocation = results[i]["hasPlanLocation"] 

    firstCell = hasFloor
    secondCell = hasType
    threeCell = planLocation


    containerID = i;
    
  createThreeColumnContainer(
    contentView,
    firstCell,
    secondCell,
    secondCellStatus,
    threeCell,
    threeCellStatus,
    containerID,
    containerClass
  );
  }

  moreContainer = document.createElement("div");
  moreContainer.id = "more-container";
  moreContainer.style.display = "none";
  contentView.appendChild(moreContainer);

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
      
      graphicDataContainer = document.querySelector("#graphic-data-container");
      add2DViewer(graphicDataContainer)
    });
  }

enableNavigation()
}



// Show fire Incident Building
function showFireCommandCenter(results) {
  
  // Get data

  keyLocated = results["fireCommandCenter"][0]["hasKeyLocated"];
  hasLocation = results["fireCommandCenter"][0]["hasLocation"];
  contains = results["contains"];

  // Get main view
  mainView = document.querySelector(".main-view");
  
  mainView.id = ""
  mainView.innerHTML = "";

  // Location
  subjectLabel = "Location:";
  subjectValue = hasLocation;
  containerID = "location-container";
  isMore = false;

  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // key Located
  subjectLabel = "Location of Key:";
  subjectValue = keyLocated;
  containerID = "key-located-container";
  isMore = false;

  createContainer(mainView, subjectLabel, subjectValue, containerID,containerClass, isMore, moreContent);

  // Contain list
  
  containContainer = document.createElement("div");
  containContainer.id = "contain-container";
  containContainer.className = "parent-container";
  mainView.appendChild(containContainer);
  
  labelContainer = document.createElement("div");
  labelContainer.id = "label-container";
  labelContainer.innerText = "Contains:"
  containContainer.appendChild(labelContainer);
  
  contentContainer = document.createElement("div");
  contentContainer.id = "content-container";
  containContainer.appendChild(contentContainer);

  for (i = 0; i < contains.length; i++)
  {
  itemContainer = document.createElement("a");
  itemContainer.href = "#"
  itemContainer.className = "content-item";
  itemContainer.innerHTML = contains[i]["hasName"]
  contentContainer.appendChild(itemContainer);

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

    if (allContainers[i].id == "location-container") {
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
        
        add2DViewer(graphicDataContainer)
      });
    }
  }
  
enableNavigation()

}


function fancyTable(
  mainView,
  firstCell,
  secondCell,
  secondCellStatus = "neutral",
  thirdCell,
  thirdCellStatus = "neutral",
  containerID,
  isTableTitle
){

  console.log(isTableTitle)
  if(document.querySelectorAll("#table-view").length == 0)
{tableView = document.createElement("table");
tableView.id = "table-view"
tableView.className = "display"

tableView.innerHTML = `
<thead>
        <tr>
            <th id = "first-heading"></th>
            <th id = "second-heading"></th>
            <th id = "third-heading"></th>
        </tr>
    </thead>
    <tbody>
    </tbody>
`

mainView.appendChild(tableView)
}

if (isTableTitle)
{
  // Set headings
  document.querySelector("#first-heading").innerHTML =firstCell 
  document.querySelector("#second-heading").innerHTML =secondCell 
  document.querySelector("#third-heading").innerHTML =thirdCell 
}
else{
  // Add data 
  tableBody = document.querySelector("tbody")

  // Add rows
  dataRow = document.createElement("tr")
  dataRow.id = containerID

  // Add data cells
  firstDataCell = document.createElement("td")
  firstDataCell.innerHTML = firstCell
  
  secondDataCell = document.createElement("td")
  secondDataCell.innerHTML = secondCell
  
  thirdDataCell = document.createElement("td")
  thirdDataCell.innerHTML = thirdCell

  // Add data cells to row
dataRow.appendChild(firstDataCell)
dataRow.appendChild(secondDataCell)
dataRow.appendChild(thirdDataCell)

// Add row to table
tableBody.appendChild(dataRow)

}

}


///Create dataTable
function createTable(){
      let table = new DataTable(document.querySelector("#table-view"), {
    // options
    "columnDefs": [
    { "width": "33%", "targets": 0 }
  ],
    "autoWidth": true
});
}