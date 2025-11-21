// document.getElementById("clubForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     // Collect values
//     const firstName = document.getElementById("firstName").value.trim();
//     const lastName = document.getElementById("lastName").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const phoneNumber = document.getElementById("phoneNumber").value.trim();
//     const country = document.getElementById("country").value.trim();
//     const dob = document.getElementById("dob").value;
//     const membershipType = document.getElementById("membershipType").value;
//     const emergencyName = document.getElementById("emergencyName").value.trim();
//     const emergencyPhone = document.getElementById("emergencyPhone").value.trim();
//     const aboutUs = document.getElementById("aboutUs").value;

//     // Email pattern
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Validation checks
//     if (!firstName) return alert("Please enter your First Name.");
//     if (!lastName) return alert("Please enter your Last Name.");
//     if (!emailPattern.test(email)) return alert("Please enter a valid Email Address.");
//     if (phoneNumber.length < 6) return alert("Please enter a valid Phone Number.");
//     if (!country) return alert("Please enter your Country.");
//     if (!dob) return alert("Please select your Date of Birth.");
//     if (!membershipType) return alert("Please choose a Membership Type.");
//     if (!emergencyName) return alert("Please enter an Emergency Contact Name.");
//     if (emergencyPhone.length < 6) return alert("Please enter a valid Emergency Contact Number.");
//     if (!aboutUs) return alert("Please choose how you heard about us.");

//     // Success message
//     alert("Form submitted successfully!");
// });

// function validateInput(input, condition) {
//     if (condition) {
//         input.classList.add("valid");
//         input.classList.remove("invalid");
//     } else {
//         input.classList.add("invalid");
//         input.classList.remove("valid");
//     }
// }

// /* Real-time fields */
// document.getElementById("firstName").addEventListener("input", function () {
//     validateInput(this, this.value.trim().length >= 2);
// });

// document.getElementById("lastName").addEventListener("input", function () {
//     validateInput(this, this.value.trim().length >= 2);
// });

// document.getElementById("email").addEventListener("input", function () {
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     validateInput(this, emailPattern.test(this.value.trim()));
// });

// document.getElementById("phoneNumber").addEventListener("input", function () {
//     validateInput(this, this.value.trim().length >= 6);
// });

// document.getElementById("country").addEventListener("input", function () {
//     validateInput(this, this.value.trim().length >= 2);
// });

// document.getElementById("dob").addEventListener("change", function () {
//     validateInput(this, this.value !== "");
// });

// document.getElementById("membershipType").addEventListener("change", function () {
//     validateInput(this, this.value !== "");
// });

// document.getElementById("emergencyName").addEventListener("input", function () {
//     validateInput(this, this.value.trim().length >= 2);
// });

// document.getElementById("emergencyPhone").addEventListener("input", function () {
//     validateInput(this, this.value.trim().length >= 6);
// });

// document.getElementById("aboutUs").addEventListener("change", function () {
//     validateInput(this, this.value !== "");
// });

// /* Submit validation */
// document.getElementById("clubForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     const allFields = document.querySelectorAll("input, select");
//     let isValid = true;

//     allFields.forEach(field => {
//         if (!field.classList.contains("valid")) {
//             isValid = false;
//             field.classList.add("invalid");
//         }
//     });

//     if (!isValid) {
//         alert("Please fill all fields correctly before submitting.");
//         return;
//     }

//     alert("Form submitted successfully!");
// });


