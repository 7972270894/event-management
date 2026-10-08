/* =========================
   COLLEGE EVENT MANAGEMENT
   JAVASCRIPT
   ========================= */


/* =========================
   SELECT EVENT
   ========================= */

function selectEvent(eventName) {

    // Select the event dropdown
    let eventDropdown =
        document.getElementById("event");

    // Automatically select the event
    eventDropdown.value = eventName;

    // Scroll to registration form
    document.getElementById("register")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   REGISTRATION
   ========================= */

function registerStudent(event) {

    // Prevent page refresh
    event.preventDefault();

    // Get form values
    let name =
        document.getElementById("studentName")
        .value.trim();

    let email =
        document.getElementById("email")
        .value.trim();

    let selectedEvent =
        document.getElementById("event")
        .value;

    let department =
        document.getElementById("department")
        .value.trim();


    // Check fields
    if (
        name === "" ||
        email === "" ||
        selectedEvent === "" ||
        department === ""
    ) {

        alert("Please fill all the fields.");

        return;
    }


    // Display successful registration
    let message =
        document.getElementById("message");

    message.innerHTML =
        "Registration successful! " +
        name +
        ", you have registered for " +
        selectedEvent +
        ".";


    // Confirmation popup
    alert(
        "Registration Successful!\n\n" +
        "Student Name: " + name + "\n" +
        "Event: " + selectedEvent + "\n" +
        "Department: " + department
    );


    // Clear form
    document.querySelector("form").reset();
}


/* =========================
   SEARCH EVENTS
   ========================= */

function searchEvents() {

    // Get search text
    let searchText =
        document.getElementById("search")
        .value
        .toLowerCase();


    // Get all event cards
    let cards =
        document.querySelectorAll(".event-card");


    // Search each event
    cards.forEach(function(card) {

        let eventName =
            card.querySelector("h3")
            .textContent
            .toLowerCase();


        if (eventName.includes(searchText)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";
        }

    });
}


/* =========================
   PAGE LOAD
   ========================= */

window.addEventListener("load", function() {

    console.log(
        "College Event Management System loaded successfully!"
    );

});
