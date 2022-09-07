document.getElementById("portfolio").addEventListener("click", function () {
  let nav = document.querySelectorAll(".navicon");
  nav[0].style.display = "inline-block";
  nav[1].style.display = "inline-block";
  nav[2].style.display = "inline-block";
  nav[3].style.display = "inline-block";
  nav[4].style.display = "inline-block";
  nav[5].style.display = "inline-block";
  nav[6].style.display = "inline-block";
  nav[7].style.display = "inline-block";
  document.querySelector(".portfolio").style.display = "none";
});

document.getElementById("backward").addEventListener("click", function () {
  let nav = document.querySelectorAll(".navicon");
  nav[0].style.display = "none";
  nav[1].style.display = "none";
  nav[2].style.display = "none";
  nav[3].style.display = "none";
  nav[4].style.display = "none";
  nav[5].style.display = "none";
  nav[6].style.display = "none";
  nav[7].style.display = "none";
  document.querySelector(".portfolio").style.display = "inline";
});

document.getElementById("contactbutton").addEventListener("click", function () {
  document.querySelector(".dropdownul").style.opacity = 1;
  document.querySelector(".dropdownul").style.pointerEvents = "all";
  document.querySelector("#blank-background-dropdown").style.display = "flex";
});

document.getElementById("contactclose").addEventListener("click", function () {
  document.querySelector(".dropdownul").style.opacity = 0;
  document.querySelector(".dropdownul").style.pointerEvents = "none";
  document.querySelector("#blank-background-dropdown").style.display = "none";
});

document.getElementById("dropdown1").addEventListener("click", function () {
  document.querySelector(".modal-content").style.display = "inline";
  document.querySelector("#blank-background-dropdown").style.display = "none";
});

document
  .getElementById("modal-content-button-close")
  .addEventListener("click", function () {
    document.querySelector(".modal-content").style.display = "none";
    document.querySelector(".dropdownul").style.opacity = 0;
    document.querySelector(".dropdownul").style.pointerEvents = "none";
    document.querySelector("#blank-background-modal").style.display = "none";
  });

document
  .getElementById("modal-content-button-proceed")
  .addEventListener("click", function () {
    document.querySelector(".modal-content").style.display = "none";
    document.querySelector(".job-info").style.display = "inline";
  });

document
  .getElementById("job-info-button-close")
  .addEventListener("click", function () {
    document.querySelector(".job-info").style.display = "none";
    document.querySelector(".dropdownul").style.opacity = 0;
    document.querySelector(".dropdownul").style.pointerEvents = "none";
    document.querySelector("#blank-background-modal").style.display = "none";
  });

document.getElementById("dropdown2").addEventListener("click", function () {
  document.querySelector(".contact-info").style.display = "inline";
  document.querySelector("#blank-background-dropdown").style.display = "none";
});

document
  .getElementById("contact-info-button-close")
  .addEventListener("click", function () {
    document.querySelector(".contact-info").style.display = "none";
    document.querySelector(".dropdownul").style.opacity = 0;
    document.querySelector(".dropdownul").style.pointerEvents = "none";
    document.querySelector("#blank-background-modal").style.display = "none";
  });

document.getElementById("dropdown1").addEventListener("click", function () {
  document.querySelector("#blank-background-modal").style.display = "flex";
});

document
  .getElementById("blank-background-modal")
  .addEventListener("click", function () {
    document.querySelector(".modal-content").style.display = "none";
    document.querySelector(".dropdownul").style.opacity = 0;
    document.querySelector(".dropdownul").style.pointerEvents = "none";
    document.querySelector("#blank-background-modal").style.display = "none";
    document.querySelector(".job-info").style.display = "none";
    document.querySelector(".contact-info").style.display = "none";
  });

document.getElementById("dropdown2").addEventListener("click", function () {
  document.querySelector("#blank-background-modal").style.display = "flex";
});

document
  .getElementById("blank-background-dropdown")
  .addEventListener("click", function () {
    document.querySelector(".dropdownul").style.opacity = 0;
    document.querySelector(".dropdownul").style.pointerEvents = "none";
    document.querySelector("#blank-background-dropdown").style.display = "none";
  });
