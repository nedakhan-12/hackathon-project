
// HerShield Emergency SOS JavaScript

const sosButton = document.getElementById("sosButton");
const sosMessage = document.getElementById("sosMessage");

sosButton.addEventListener("click", function () {

    sosMessage.textContent =
        "SOS activated! Please contact emergency services if you are in immediate danger.";

});


// Check if trusted contact is saved
const savedContact = localStorage.getItem("trustedContact");

if (savedContact) {

    const contact = JSON.parse(savedContact);

    console.log("Trusted Contact:", contact.name);
    console.log("Phone Number:", contact.phone);

}
```
