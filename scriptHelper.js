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
    const div = document.getElementById("missionTarget");
    div.innerHTML += `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}" />` 
    console.log(imageUrl)
}

function validateInput(testInput) {
    console.log(typeof(testInput.value))
    if(testInput.value === null){
        return "Empty"
    }
    if((testInput.value) === ''){
        return "Empty"
    }
    if(isNaN(Number(testInput.value))){
        //console.log(typeof(testInput.value))
        return "Not a Number"
    }
    else{
        return "Is a Number"
    }
}

function formSubmission(document, /*list,*/ pilot, copilot, fuelLevel, cargoLevel) {
    console.log("the function has been called.")
    const status = document.getElementById("launchStatus")
    const div = document.getElementById("faultyItems")
    const pilotElement = document.getElementById("pilotStatus");
    const copilotElement = document.getElementById("copilotStatus");
    const fuel = document.getElementById("fuelStatus");
    const cargo = document.getElementById("cargoStatus")
    pilotElement.innerHTML = `Pilot ${pilot}.`;
    copilotElement.innerHTML = `CoPilot ${copilot}.`
    //console.log(fuelLevel)
    if(Number(fuelLevel) < 10000){
        console.log(Number(fuelLevel))
        div.style.visibility = "visible"
        if(Number(cargoLevel) > 10000){
            //div.style.visibility = "visible"
            cargo.innerHTML = "Too much cargo to take off."
        }
        fuel.innerHTML = "Not enough fuel for the journey."
        status.style.color = "red"
        return status.innerHTML = "Shuttle not ready for launch."
    }
    if(Number(cargoLevel) > 10000){
        div.style.visibility = "visible"
        cargo.innerHTML = "Too much cargo to take off."
        status.style.color = "red"
        return status.innerHTML = "Shuttle not ready for launch."
    }
    else{
        div.style.visibility = "hidden"
        status.style.color = "green"
        return status.innerHTML = "Shuttle is ready for launch!"
    }
   
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        //console.log(response)
        return response.json()
        });
    //console.log(planetsReturned)
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
