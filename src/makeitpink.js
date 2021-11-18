// GLOBAL VARS
// To Be Defined
chrome.runtime.onMessage.addListener(() => {
  makeItPink();
});
document.body.addEventListener("click", () => {
  chrome.storage.sync.get("enabled", ({ enabled }) => {
    if (enabled) {
      makeItPink();
    }
  });
});
function makeItPink() {
  // GENERAL
  document.documentElement.style.setProperty("--primary-background", "#DB5A6B"); // make it pink
  document.documentElement.style.setProperty(
    "--secondary-background",
    "#C93756"
  ); // make it pink
  document.documentElement.style.setProperty("--background-1", "#F47983"); // make it pink
  document.querySelector(".head-bar").style.setProperty("color", "#DB5A6B"); // make it pink
  document
    .querySelector(".menu-footer")
    .style.setProperty("background", "#F47983"); // make it pink
  var blockh3 = document.querySelectorAll(".block h3"); // get all elements
  for (var i = 0; i < blockh3.length; i++) {
    blockh3[i].style.setProperty("color", "#C93756"); // make it pink
  }
  var tile = document.querySelectorAll(".head-bar div>a>i"); // get all elements
  for (var i = 0; i < tile.length; i++) {
    tile[i].style.setProperty("color", "#C93756"); // make it pink
    tile[i].style.setProperty("background", "#FCC9B9"); // make it pink
  }
  // END GENERAL

  // AGENDA
  var tests = document.querySelectorAll(
    '.agenda-text-icon[icon-type="information"]'
  ); // get all elements
  for (var i = 0; i < tests.length; i++) {
    tests[i].style.setProperty("background-color", "#C93756"); // make it pink
  }
  var tabs = document.querySelectorAll("aside .tabs li.active"); // get all elements
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.setProperty("border-bottom", "2px solid #DB5A6B"); // make it pink
  }
  // END AGENDA

  // HOME
  var al = document.querySelectorAll(".alert"); // get all elements
  var alnr = document.querySelectorAll(".alert span.nrblock"); // get all elements
  for (var i = 0; i < al.length; i++) {
    al[i].style.setProperty("border-left", "4px solid #C93756"); // make it pink
    alnr[i].style.setProperty("background-color", "#C93756"); // make it pink
  }
  var alRed = document.querySelectorAll(".alertRed"); // get all elements
  var alRednr = document.querySelectorAll(".alertRed span.nrblock"); // get all elements
  for (var i = 0; i < alRed.length; i++) {
    alRed[i].style.setProperty("border-left", "4px solid #F62459"); // make it pink
    alRednr[i].style.setProperty("background-color", "#F62459"); // make it pink
  }
  document
    .querySelector("#cijfers-leerling .last-grade")
    .style.setProperty("background-color", "#C93756"); // make it pink
  var links = document.querySelectorAll(".endlink a"); // get all elements
  for (var i = 0; i < links.length; i++) {
    links[i].style.setProperty("color", "#C93756"); // make it pink
  }
  // END HOME
}
