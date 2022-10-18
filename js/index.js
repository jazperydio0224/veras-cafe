// navigation links
const navLinks = document.querySelectorAll(".target a");

const browseIcon = document.getElementById("browse-icon"); // submenu - browse icon
const dropdownListBrowse = document.querySelectorAll("#dropdownListBrowse"); // submenu - dropdown list browse mode
const normalMode = document.getElementById("normal"); // normal - browse mode dropdown choice
const voiceMode = document.getElementById("voice"); // voice - browse dropdown choice

const flagIcon = document.getElementById("language-icon"); // submenu - language icon
const dropdownListFlag = document.querySelectorAll("#dropdownListLanguage"); // submenu - dropdown list language
const englishLanguage = document.getElementById("english"); // normal - language dropdown choice
const maoriLanguage = document.getElementById("maori"); // voice - language dropdown choice

// set on page load
window.onload = () => {
  // set inital active menu on page load
  navLinks.forEach((link) => {
    const currentPage = "./" + window.location.pathname.split("/").pop();
    if (currentPage === link.getAttribute("href")) {
      link.classList.add("make-active");
    } else {
      link.classList.remove("make-active");
    }
  });

  // set initial active submenu on page load
  dropdownListBrowse.forEach((item) => {
    item.classList.remove("make-active");
  });
  normalMode.classList.add("make-active");

  dropdownListFlag.forEach((item) => {
    item.classList.remove("make-active");
  });
  englishLanguage.classList.add("make-active");
};

// hide and show the dropdown for browse mode
browseIcon.addEventListener("click", () => {
  dropdownListBrowse["0"].classList.toggle("show-dropdown");
});

// switch active browse mode
normalMode.addEventListener("click", () => {
  if (
    voiceMode.classList.contains("make-active") &&
    !normalMode.classList.contains("make-active")
  ) {
    voiceMode.classList.remove("make-active");
    normalMode.classList.add("make-active");
  }
});

voiceMode.addEventListener("click", () => {
  if (
    normalMode.classList.contains("make-active") &&
    !voiceMode.classList.contains("make-active")
  ) {
    normalMode.classList.remove("make-active");
    voiceMode.classList.add("make-active");
  }
});

// hide and show the dropdown for language selection
flagIcon.addEventListener("click", () => {
  dropdownListFlag["0"].classList.toggle("show-dropdown");
});

englishLanguage.addEventListener("click", () => {
  if (
    maoriLanguage.classList.contains("make-active") &&
    !englishLanguage.classList.contains("make-active")
  ) {
    maoriLanguage.classList.remove("make-active");
    englishLanguage.classList.add("make-active");
    flagIcon.src = "../assets/img/header/new_zealand_flag.png";
  }
});

maoriLanguage.addEventListener("click", () => {
  if (
    englishLanguage.classList.contains("make-active") &&
    !maoriLanguage.classList.contains("make-active")
  ) {
    englishLanguage.classList.remove("make-active");
    maoriLanguage.classList.add("make-active");
    flagIcon.src = "../assets/img/header/maori_flag.png";
  }
});

// functions for showing and hiding the chatbox
function openChat() {
  document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
  document.getElementById("chatBox").style.display = "none";
}
