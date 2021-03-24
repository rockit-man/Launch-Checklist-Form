// Write your JavaScript code here!

window.addEventListener("load", () => {

   let form = document.getElementById("launchForm");
   
   form.addEventListener("submit", (event) => {

      let pilotNameInput = document.querySelector("input[name=pilotName]").value;
      let copilotNameInput = document.querySelector("input[name=copilotName]").value;
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
      let cargoMassInput = document.querySelector("input[name=cargoMass]").value;
   
      if (pilotNameInput === "" || copilotNameInput === "" || fuelLevelInput === "" || cargoMassInput === "") {
         event.preventDefault();
         alert("All fields are required!");
      }
      if (!isNaN(pilotNameInput)) {
         event.preventDefault();
         alert("'Pilot Name' entry is invalid. Please validate 'Pilot Name' is a string of letters.");
      }
      if (!isNaN(copilotNameInput)) {
         event.preventDefault();
         alert("'Co-pilot Name' entry is invalid. Please validate 'Co-pilot Name' is a string of letters.");
      }
      if (isNaN(fuelLevelInput)) {
         event.preventDefault();
         alert("'Fuel Level' must be a number or string of numbers containing only digits from 0-9.");
      }
      if (isNaN(cargoMassInput)) {
         event.preventDefault();
         alert("'Cargo Mass' must be a number or string of numbers containing only digits from 0-9.");
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
