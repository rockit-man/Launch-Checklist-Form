// Write your JavaScript code here!

window.addEventListener("load", () => {

   const form = document.getElementById("launchForm");
   
   form.addEventListener("submit", (event) => {

      event.preventDefault();

      const pilotNameInput = document.querySelector("input[name=pilotName]").value;
      const copilotNameInput = document.querySelector("input[name=copilotName]").value;
      const fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
      const cargoMassInput = document.querySelector("input[name=cargoMass]").value

      
      let pilotStatus = document.getElementById("pilotStatus");
      let copilotStatus = document.getElementById("copilotStatus");
      let fuelStatus = document.getElementById("fuelStatus");
      let cargoStatus = document.getElementById("cargoStatus");
      let launchStatus = document.getElementById("launchStatus");

      document.getElementById("faultyItems").style.visibility = "visible"

      if (pilotNameInput === ""
         || copilotNameInput === ""
         || fuelLevelInput === ""
         || cargoMassInput === "") {
         alert("All fields are required!");
      }

      if (isNaN(fuelLevelInput) || isNaN(cargoMassInput)) {
         alert("Both 'Fuel Level' & 'Cargo Mass' must be a number or string of numbers containing only digits from 0-9.");
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      } 
      
      if (!isNaN(pilotNameInput) || !isNaN(copilotNameInput)) {
         alert("'Pilot' or 'Co-pilot' name entry is invalid. Please validate entry is a string of letters.");
         pilotStatus.innerHTML = "Pilot not ready"
         copilotStatus.innerHTML = "Co-pilot not ready"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      }
      
      if (Number(fuelLevelInput) < 10000) {
         fuelStatus.innerHTML = "There isn't enough fuel for the journey"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      }
      
      if (Number(cargoMassInput) > 10000) {
         cargoStatus.innerHTML = "Too much mass on board, Shuttle cannot takeoff"
         launchStatus.innerHTML = "Shuttle not ready for launch"
         launchStatus.style.color = "red"
      } 
      
      if (isNaN(pilotNameInput)
         && isNaN(copilotNameInput)
         && Number(fuelLevelInput) >= 10000
         && Number(cargoMassInput) <= 10000) {
         pilotStatus.innerHTML = `${pilotNameInput} Ready`
         copilotStatus.innerHTML = `${copilotNameInput} Ready`
         fuelStatus.innerHTML = "Fuel level high enough for launch"
         cargoStatus.innerHTML = "Cargo mass low enough for launch"
         launchStatus.innerHTML = "Shuttle is ready for launch"
         launchStatus.style.color = "green"
      }



   });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
