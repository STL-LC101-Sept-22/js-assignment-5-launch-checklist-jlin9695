// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  
}

function validateInput(testInput) {
   if((testInput.value) === ''){
    return "Empty"
   }
   if(typeof(testInput.value) === 'number'){
    return "Is a Number"
   }
   else{
    return "Not a number"
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const status = document.getElementById("launchStatus")
    const div = document.getElementById("faultyItems")
    const pilotElement = document.getElementById("pilotStatus");
    const copilotElement = document.getElementById("copilotStatus");
    const fuel = document.getElementById("fuelStatus");
    const cargo = document.getElementById("cargoStatus")
    pilotElement.innerHTML = `Pilot ${pilot}.`;
    copilotElement.innerHTML = `CoPilot ${copilot}.`
    if(fuelLevel < 10000){
        div.style.visibility = "visible"
        fuel.innerHTML = "Not enough fuel for the journey."
        status.style.color = "red"
        status.innerHTML = "Shuttle not ready for launch."
    }
    if(cargoLevel > 10000){
        div.style.visibility = "visible"
        cargo.innerHTML = "Too much cargo to take off."
        status.style.color = "red"
        status.innerHTML = "Shuttle not ready for launch."
    }
    else{
        status.style.color = "green"
        status.innerHTML = "Shuttle is ready for launch!"
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json()
        });
    console.log(planetsReturned)
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * (6))]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
