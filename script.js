//const { fetch } = require('./scriptHelper');

//const { /*formSubmission,*/ validateInput } = require("./scriptHelper");



// Write your JavaScript code here!
window.addEventListener("load", function() {
    //const submit = this.document.getElementById("formSubmit");
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    //console.log(listedPlanetsResponse);
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        //console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let choice = pickPlanet(listedPlanets)
        console.log(choice);
        addDestinationInfo(this.document,choice.name, choice.diameter, choice.star, choice.distance, choice.moons, choice.image)
    })
    let form = this.document.querySelector("form");
    form.addEventListener("submit", event => {
        
        let name1 = validateInput(document.querySelector("input[name=pilotName]"));
        let name2 = validateInput(document.querySelector("input[name=copilotName]"));
        let fuelCheck = validateInput(document.querySelector("input[name=fuelLevel]"));
        let cargoCheck = validateInput(document.querySelector("input[name=cargoMass]"));
        
        let pname = (this.document.querySelector("input[name=pilotName]")).value
        let cname = (this.document.querySelector("input[name=copilotName]")).value
        let fname = (this.document.querySelector("input[name=fuelLevel]")).value
        let cgname = (this.document.querySelector("input[name=cargoMass]")).value
        /*console.log(name1);
        console.log(name2);
        console.log(fuelCheck);
        console.log(cargoCheck);
        console.log(typeof(Number(name1)));
        console.log(typeof(Number(name2)));*/

        if(name1 === "Empty" || name2 === "Empty" || fuelCheck === "Empty" || cargoCheck === "Empty" ){
            this.window.alert("All fields are required!")
            event.preventDefault();
        }
        if(name1 === "Is a Number"){
            this.window.alert("Invalid Pilot Name input!");
            event.preventDefault();
        }
        if(name2 === "Is a Number"){
            this.window.alert("Invalid CoPilot Name input!");
            event.preventDefault();
        }
        if(fuelCheck === "Not a Number" || cargoCheck === "Not a Number"){
            this.window.alert("Fuel or Cargo Level is not a numeric entry! Fix Please!")
            event.preventDefault();
        }


        formSubmission(this.document,
            pname,
            cname,
            fname,
            cgname)
        
        
        event.preventDefault();
    })
});