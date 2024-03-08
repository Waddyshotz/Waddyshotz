// function showSection(sectionID) {
//   document.querySelectorAll("main-section").forEach((section) => {
//     section.classList.add("hidden");
//     document.getElementById(sectionID).classList.remove("hidden");
//   });
// }

// function openTab(evt, tabName) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tab-content");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablinks");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].classList.remove("active");
//   }
//   document.getElementById(tabName).style.display = "block";
//   evt.currentTarget.classList.add("active");
// }

// // Open the first tab by default
// document.getElementById("main-section").getElementsByTagName("a")[0].click();

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}

// Open the first tab by default
document.getElementById("main-section").getElementsByTagName("a")[0].click();

// this is for the contact filling Form
