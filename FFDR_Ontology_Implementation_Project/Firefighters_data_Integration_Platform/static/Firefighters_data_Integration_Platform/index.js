document.addEventListener("DOMContentLoaded", function () {

  // Project title
  projectTitle = "Sample Project 01";

  // Load navigation panels
  loadNavPanels();

  // Incident building view
  document
    .querySelector("#incident-building")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getIncidentBuilding(projectTitle);
    });

  // Contact Addresses view
  document
    .querySelector("#contact-addresses")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getContactAddresses(projectTitle);
    });


  // building plans view
  document
    .querySelector("#building-plans")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getBuildingPlans(projectTitle);
    });




  // fire command center view
  document
    .querySelector("#fire-command-center")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireCommandCenter(projectTitle);
    });


  // Control panel view
  document
    .querySelector("#control-panels")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getControlPanels(projectTitle);
    });

  // Automatic fire extinguishing system view
  document
    .querySelector("#automatic-fire-extinguishing-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getAutomaticFireExtinguishingSystem(projectTitle);
    });

  // Portable fire extinguishers view
  document
    .querySelector("#portable-fire-extinguishers")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getPortableFireExtinguishers(projectTitle);
    });

  // Fire hydrant view
  document
    .querySelector("#fire-hydrant")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireHydrant(projectTitle);
    });

  // Building utility systems view
  document
    .querySelector("#building-utility-systems")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getBuildingUtilitySystems(projectTitle);
    });

  // Fire alarm system view
  document
    .querySelector("#fire-alarm-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);

      getFireAlarmSystem(projectTitle);
    });

  // Fire Department Connections view
  document
    .querySelector("#fire-department-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireDepartmentConnections(projectTitle);
    });

  // Fire hose connections view
  document
    .querySelector("#fire-hose-connections")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireHoseConnections(projectTitle);
    });

  // Standpipe system view
  document
    .querySelector("#standpipe-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getStandpipeSystem(projectTitle);
    });

  // Sensors and detectors view
  document
    .querySelector("#sensors-and-detectors")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSensorsAndDetectors(projectTitle);
    });

  // Fire and smoke protection elements view
  document
    .querySelector("#fire-and-smoke-protection-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireAndSmokeProtectionElements(projectTitle);
    });


  // Area of refuge view
  document
    .querySelector("#area-of-refuge")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getAreaOfRefuge(projectTitle);
    });


  // FARS fill stations view
  document
    .querySelector("#fars-fill-stations")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFarsFillStations(projectTitle);
    });

  // emergency power outlets view
  document
    .querySelector("#emergency-power-outlets")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getEmergencyPowerOutlets(projectTitle);
    });


  // smoke and heat removal system view
  document
    .querySelector("#smoke-and-heat-removal-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSmokeAndHeatRemovalSystem(projectTitle);
    });


  // Smoke control system view
  document
    .querySelector("#smoke-control-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSmokeControlSystem(projectTitle);
    });




  // fire pump view
  document
    .querySelector("#fire-pump")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFirePump(projectTitle);
    });

   

  // Mass notification system view
  document
    .querySelector("#mass-notification-system")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getMassNotificationSystem(projectTitle);
    });


  // Facade view
  document.querySelector("#facade").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getFacade(projectTitle);
  });

// Define result containers

contactAddressResults = {}
incidentBuildingResults = {}
BuildingPlansResults = {}
fireCommandCenterResults = {}
controlPanelResults = {}

fireExtinguishingSystemResults = {}
portableFireExtinguisherResults = {}
fireAlarmSystemResults={}
fireDepartmentConnectionsResults = {}
fireHoseConnectionResults = {}
standpipeSystemResults = {}
sensorsAndDetectorsResults = {}
fireAndSmokeProtectionElementsResults = {}
areaOfRefugeResults = {}
farsFillStationsResults = {}
EmergencyPowerOutletsResults = {}
smokeAndHeatRemovalSystemResults = {}
smokeControlSystemResults = {}
firePumpResults = {}
massNotificationSystemResults = {}

fireHydrantResults = {}
buildingUtilitySystemResults = {}
structuralElementsResults = {}
keyBoxResults = {}
hazardousMaterialResults = {}
concealedSpaceResults = {}
verticalOpeningResults = {}
roofTopElementResults = {}
extremelyValuableMaterialsResults  = {}
helipadResults  = {}

facadeResults = {}
weatherConditionResults= {}
surroundingsResults = {}
waterSourceResults= {}
fireLaneResults  = {}
roadToIncidentResults = {}
nonStructuralElementsResults= {}


  // non structural elements view
  // Define data containers
  doorData = []
  windowData = []
elevatorData = []
stairwayData = []
rampData = []
wallData = []
floorAssemblyData = []
roofAssemblyData = []
balconyData = []
hallwayData = []

  document
    .querySelector("#non-structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getNonStructuralElements(projectTitle);
    });


  document
    .querySelector("#structural-elements")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      
      getStructuralElements(projectTitle);
    });

  // Hazardous materials view
  document
    .querySelector("#hazardous-materials")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getHazardousMaterials(projectTitle);
    });

  // Keybox view
  document.querySelector("#key-box").addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getKeybox(projectTitle);
  });

  // Concealed spaces view
  document
    .querySelector("#concealed-spaces")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getConcealedSpaces(projectTitle);
    });

  // Vertical openings view
  document
    .querySelector("#vertical-openings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getVerticalOpenings(projectTitle);
    });

  // Roof top element view
  document
    .querySelector("#roof-top-element")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getRoofTopElement(projectTitle);
    });



  // extremely valuable materials view
  document
    .querySelector("#extremely-valuable-materials")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getExtremelyValuableMaterials(projectTitle);
    });



  // helipad view
  document
    .querySelector("#helipad")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getHelipad(projectTitle);
    });


// Road to incident view
document
  .querySelector("#road-to-incident")
  .addEventListener("click", function (event) {
    changeActiveButton(event.target);
    getRoadToIncident(projectTitle);
  });

    
  // fire lane view
  document
    .querySelector("#fire-lane")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getFireLane(projectTitle);
    });


  // Water source view
  document
    .querySelector("#water-source")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getWaterSource(projectTitle);
    });

  // Weather Condition view
  document
    .querySelector("#weather-condition")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getWeatherCondition(projectTitle);
    });

    

  // Surrounding structures view
  document
    .querySelector("#surroundings")
    .addEventListener("click", function (event) {
      changeActiveButton(event.target);
      getSurroundings(projectTitle);
    });

  document.querySelector("#incident-building").click();


  

  // Search button
  searchButton = document.querySelector("#search-form button")
  searchButton.addEventListener("click", function (event) {
    // Get search item
    searchItem = document.querySelector("#search-form input").value

    searchForm(searchItem)

    });
});

function searchForm(searchItem){

    if(allNavItems.includes(searchItem)){
      searchItem = searchItem.toLowerCase().split(" ").join("-");
  document.querySelector("#" + searchItem).click();
    }
}

function changeActiveButton(newActiveButton) {
  currentActiveButton = document.getElementsByClassName("button active");
  if (currentActiveButton.length > 0)
    currentActiveButton[0].className = "button";
  newActiveButton.className += " active";
}

function loadNavPanels() {
  // Get the navigation panels
  topNav = document.querySelector("#top-nav-menu .navbar-nav");
  rightNav = document.querySelector("#right-nav-menu .navbar-nav");
  bottomNav = document.querySelector("#bottom-nav-menu .navbar-nav");
  leftNav = document.querySelector("#left-nav-menu .navbar-nav");

  // List of items to be placed on the navigation panels
  topNavItems = [
    "Incident Building",
    "Contact Addresses",
    "Building Plans",
    "Fire Command Center",
    "Control Panels"
  ];
  //Building components other than safety systems
  
  rightNavItems = [
    "Building Utility Systems",
    "Facade",
    "Non-Structural Elements",
    "Structural Elements",
    "Hazardous materials",
    "Key Box",
    "Concealed Spaces",
    "Vertical Openings",
    "Roof Top Element",
    "Extremely Valuable Materials",
    "Helipad",
  ];

  bottomNavItems = [
    "Road to Incident",
    "Fire Lane",
    "Water Source",
    "Fire Hydrant",
    "Weather Condition",
    "Surroundings",
  ];

  moreBottomNavItems = [
    "Surrounding Buildings",
    "Surrounding Terrain",
    "Vegetation",
    "Hazardous Materials",
    "Obstructions",
    "Parking Lot",
    "Pipeline",
    "PowerLine",
  ];

  // Building safety systems on the left panel
  leftNavItems = [
    "Automatic Fire Extinguishing System",
    "Portable Fire Extinguishers",
    "Fire Alarm System",
    "Fire Department Connections",
    "Fire Hose Connections",
    "Standpipe System",
    "Sensors and Detectors",
    "Fire and Smoke Protection Elements",
    "Area of Refuge",
    "FARS Fill Stations",
    "Emergency Power Outlets",
    "Smoke and Heat Removal System",
    "Smoke Control System",
    "Fire Pump",
    "Mass Notification System",
  ];
// List of all Navigation items
allNavItems = [...topNavItems , ...rightNavItems , ...bottomNavItems , ...leftNavItems]



  autocomplete(document.getElementById("search-input"), allNavItems);


  // Add heading to navigation panels
  // Right navigation panel
  var headingItem = document.createElement("p");
  headingItem.id = "right-nav-heading";
  headingItem.innerText = "Building Components";
  rightNav.appendChild(headingItem);

  var rightNavContentContainer = document.createElement("div");
  rightNavContentContainer.id = "right-nav-content";
  rightNav.appendChild(rightNavContentContainer);

  // Left navigation panel
  var headingItem = document.createElement("p");
  headingItem.id = "left-nav-heading";
  headingItem.innerText = "Building Safety Systems";
  leftNav.appendChild(headingItem);

  var leftNavContentContainer = document.createElement("div");
  leftNavContentContainer.id = "left-nav-content";
  leftNav.appendChild(leftNavContentContainer);

  // Add items to the navigation panels
  for (i = 0; i < topNavItems.length; i++) {
    addItemToNav(topNav, topNavItems[i]);
  }
  for (i = 0; i < rightNavItems.length; i++) {
    addItemToNav(rightNavContentContainer, rightNavItems[i]);
  }

  for (i = 0; i < bottomNavItems.length; i++) {
    addItemToNav(bottomNav, bottomNavItems[i]);
  }

  for (i = 0; i < leftNavItems.length; i++) {
    addItemToNav(leftNavContentContainer, leftNavItems[i]);
  }
}
function addItemToNav(nav, item) {
  var listItem = document.createElement("a");
  listItem.className = "nav-link";
  listItem.href = "#";

  id = item.toLowerCase().split(" ").join("-");
  listItem.id = id;
  listItem.className = "button";
  listItem.innerHTML = `${item}`;
  nav.appendChild(listItem);
}

function weatherCondition() {
  
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Portland&units=metric&appid=0fa663749dc11a9e6dcec438f2679b2d"
  )
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      
      // hasPrecipitationValue = result.FloatField();
      hasRelativeHumidity = result["main"]["humidity"];
      hasTemperature = result["main"]["temp"];
      hasTimeMark = new Date(result["dt"] * 1000).toLocaleString();
      hasWindDirection = result["wind"]["deg"];
      hasWindSpeed = result["wind"]["speed"];

      
    });
}
var buildingCoordinate = [];
var buildingAddress;


function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "search-auto-complete-list");
      a.setAttribute("class", "search-auto-complete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {

        // Split words
        splitItemList = arr[i].split(' ')

        for(k = 0; k < splitItemList.length; k++)
        {
splitItem = splitItemList[k]
          if(splitItem != "And" || splitItem != "and" || splitItem != "")
          {
            
        /*check if the item starts with the same letters as the text field value:*/
        if (splitItem.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/

          foundItem = arr[i].split(splitItem)

          
          console.log(foundItem)
b.innerHTML =foundItem.join("<strong>" + splitItem.substr(0, val.length) + "</strong>" + splitItem.substr(val.length))
          // b.innerHTML = "<strong>" + splitItem.substr(0, val.length) + "</strong>";
          // b.innerHTML += arr[i].substr(val.length);

          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
              b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });

          a.appendChild(b);

    // Get search item
    searchItem = b.querySelector("input").value

          // Click on item
           b.addEventListener("click",  searchForm.bind(this,searchItem) )
    //   b.addEventListener("click", function (event) {
    //     console.log(b)
        

    // searchForm(searchItem)
    // });

        }
          }
        }

    //     /*check if the item starts with the same letters as the text field value:*/
    //     if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    //       /*create a DIV element for each matching element:*/
    //       b = document.createElement("DIV");
    //       /*make the matching letters bold:*/
    //       b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
    //       b.innerHTML += arr[i].substr(val.length);
    //       /*insert a input field that will hold the current array item's value:*/
    //       b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
    //       /*execute a function when someone clicks on the item value (DIV element):*/
    //           b.addEventListener("click", function(e) {
    //           /*insert the value for the autocomplete text field:*/
    //           inp.value = this.getElementsByTagName("input")[0].value;
    //           /*close the list of autocompleted values,
    //           (or any other open lists of autocompleted values:*/
    //           closeAllLists();
    //       });

    //       a.appendChild(b);

    // // Get search item
    // searchItem = b.querySelector("input").value

    //       // Click on item
    //        b.addEventListener("click",  searchForm.bind(this,searchItem) )
    // //   b.addEventListener("click", function (event) {
    // //     console.log(b)
        

    // // searchForm(searchItem)
    // // });

    //     }



      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "search-auto-complete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("search-auto-complete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("search-auto-complete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("search-auto-complete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
/*execute a function when someone clicks in the document:*/
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}