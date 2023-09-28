document.addEventListener("DOMContentLoaded", function () {
    const openFormButton = document.getElementById("openForm");
    const closeFormButton = document.getElementById("closeForm");
    const enquiryForm = document.getElementById("enquiryForm");

    openFormButton.addEventListener("click", function () {
        enquiryForm.style.display = "block";
        setTimeout(function () {
            enquiryForm.style.right = "0";
        }, 10);
    });

    closeFormButton.addEventListener("click", function () {
        enquiryForm.style.right = "-350px"; // Adjust the distance from the right side
        setTimeout(function () {
            enquiryForm.style.display = "none";
        }, 300);
    });
});

setTimeout(function() {
    document.querySelector('.background').classList.add('show-background');
  }, 3000);
