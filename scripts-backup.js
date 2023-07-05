const yesBtns = document.querySelectorAll("button.yes");
const noBtns = document.querySelectorAll("button.no");
const submitBtn = document.querySelector("#submit");

// Add event listeners for buttons
yesBtns.forEach(function(yesBtn) {
  yesBtn.addEventListener("click", function() {
    this.classList.add("selected");
    this.parentElement.querySelector("button.no").classList.remove("selected");
  });
});

noBtns.forEach(function(noBtn) {
  noBtn.addEventListener("click", function() {
    this.classList.add("selected");
    this.parentElement.querySelector("button.yes").classList.remove("selected");
  });
});

submitBtn.addEventListener("click", function() {
  const question1 = document.querySelector("#question1 button.selected").textContent.trim();
  const question2 = document.querySelector("#question2 button.selected").textContent.trim();
  const question3 = document.querySelector("#question3 button.selected").textContent.trim();

  if (question1 === "Yes" && question2 === "Yes" && question3 === "Yes") {
    window.location.href = "https://webresources-uat.com/nchrp1918/transitioning-and-growing-stage-result/";
  } else if (question1 === "Yes" && question2 === "No" && question3 === "No") {
    window.location.href = "https://webresources-uat.com/nchrp1918/setup-stage-result/";
  } else if (question1 === "Yes" && question2 === "Yes" && question3 === "No") {
    window.location.href = "https://webresources-uat.com/nchrp1918/ongoing-operations-stage-result/";
  } else {
    window.location.href = "https://webresources-uat.com/nchrp1918/research-and-planning-stage-result/";
  }
});

