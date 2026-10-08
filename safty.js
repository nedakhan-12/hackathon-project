
// HerShield Safety Plan JavaScript

const safetyForm = document.getElementById("safetyForm");
const safetyMessage = document.getElementById("safetyMessage");

safetyForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const safePlace = document.getElementById("safePlace").value;
    const emergencyPerson = document.getElementById("emergencyPerson").value;
    const planNotes = document.getElementById("planNotes").value;

    const safetyPlan = {
        safePlace: safePlace,
        emergencyPerson: emergencyPerson,
        planNotes: planNotes
    };

    localStorage.setItem(
        "safetyPlan",
        JSON.stringify(safetyPlan)
    );

    safetyMessage.textContent =
        "Safety plan saved successfully!";

});


// Load saved safety plan when page opens
const savedPlan = localStorage.getItem("safetyPlan");

if (savedPlan) {

    const plan = JSON.parse(savedPlan);

    document.getElementById("safePlace").value = plan.safePlace;
    document.getElementById("emergencyPerson").value =
        plan.emergencyPerson;
    document.getElementById("planNotes").value =
        plan.planNotes;
}
```
