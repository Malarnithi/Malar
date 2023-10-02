// Get references to the buttons, form, and close button
const openFormButton = document.getElementById("openForm");
const closeFormButton = document.getElementById("closeFormButton");
const enquiryForm = document.getElementById("enquiryForm");

// Function to show the form
function openEnquiryForm() {
    enquiryForm.style.display = "block";
}

// Function to hide the form
function closeEnquiryForm() {
    enquiryForm.style.display = "none";
}

// Event listener for clicking the "Quick Enquiry" button
openFormButton.addEventListener("click", openEnquiryForm);

// Event listener for clicking the "Close" button within the form
closeFormButton.addEventListener("click", closeEnquiryForm);
