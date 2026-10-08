
// HerShield Trusted Contact JavaScript

const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const contactName = document.getElementById("contactName").value;
    const contactPhone = document.getElementById("contactPhone").value;
    const relationship = document.getElementById("relationship").value;

    const trustedContact = {
        name: contactName,
        phone: contactPhone,
        relationship: relationship
    };

    localStorage.setItem(
        "trustedContact",
        JSON.stringify(trustedContact)
    );

    contactMessage.textContent =
        "Trusted contact saved successfully!";

    contactForm.reset();
});


// Load saved contact when page opens
const savedContact = localStorage.getItem("trustedContact");

if (savedContact) {

    const contact = JSON.parse(savedContact);

    document.getElementById("contactName").value = contact.name;
    document.getElementById("contactPhone").value = contact.phone;
    document.getElementById("relationship").value = contact.relationship;
}
```
