// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.

    document.getElementById("missionTarget").innerHTML =
        ` <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter} </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">`

}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilot) === "Not a Number") {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        pilotStatus.style.visibility = "visibile";
        launchStatus.style.color = "green"
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
    }
    if (validateInput(copilot) === "Not a Number") {
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        copilotStatus.style.visibility = "visibile";
        launchStatus.style.color = "green"
        launchStatus.innerHTML = "Shuttle is Ready for Launch"
    }
    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red"
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        list.style.visibility = "visible";
    }
    if (validateInput(cargoLevel) === "Is a Number" && cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch"
        launchStatus.style.color = "red"
    } else {
        cargoStatus.innerHTML = "Cargo mass low enough for launch";
        list.style.visibility = "visible";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json()
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * 6)]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;