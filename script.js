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

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;

            if (answer.style.display === "block") {
                answer.style.display = "none";
                this.querySelector(".plus").textContent = "+";
            } else {
                answer.style.display = "block";
                this.querySelector(".plus").textContent = "-";
            }
        });
    });
});

function limitB1Content() {
    // Get all elements with class "b1"
    const b1Elements = document.querySelectorAll(".b1");
  
    // Define the maximum count for each element
    const maxCounts = [12, 25, 50, 10, 1000];
  
    // Loop through each element and limit its content
    b1Elements.forEach((b1Element, index) => {
      const maxCount = maxCounts[index];
      const aElement = b1Element.querySelector("a");
  
      // Update the content based on the maximum count
      for (let i = 0; i <= maxCount; i++) {
        aElement.textContent = i;
      }
    });
  }
  
  // Call the function to limit the content
  limitB1Content();
  