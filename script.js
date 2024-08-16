// Write your JavaScript code here!
window.addEventListener("load", function () {
    let button = document.getElementById("formSubmit")
    let faultyItems = document.getElementById("faultyItems");
    faultyItems.style.visibility = "hidden";
   
    button.addEventListener("click", function (event) {
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoLevel === "") {
            alert("ALL FIELDS REQUIRED");
            event.preventDefault();
        } else if (!isNaN(pilotName) || !isNaN(copilotName) || isNaN(fuelLevel) || isNaN(cargoLevel)) {
            alert("VALID INPUT TYPES REQUIRED")
            event.preventDefault();
        } else {
            formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoLevel)
            event.preventDefault();
        }
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanets);
        addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image)
    })

});