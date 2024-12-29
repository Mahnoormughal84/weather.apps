function toggletheme() {
  const displayref = document.getElementById("theme-display");
  console.log();
  // already black we have to go light
  const bodycolor = document.body.style.backgroundColor;
  const isdark = bodycolor === "black";

  if (document.body.style.backgroundColor === "black") {
    console.log("i am dark theme");
    document.body.style.backgroundColor === "white";
    document.body.style.backgroundColor === "black";
  } else {
    // it is light and we have to go to dark
    console.log("i am light theme");
    // bg
    document.body.style.backgroundColor = "black";
    // text color
    document.body.style.color = "white";
    displayref.innertext = "dark";
  }
}

const themebtnref = document.getElementById("theme-btn");
themebtnref.addEventListener("click", () => {
  toggletheme();
});

// set timeout
// set interval

//only 1 execution after interval

setTimeout(() => {
  console.log("terminating set interval");
}, 15000);

const intervalid = setInterval (() => {
    console.log("set interval called");
    toggletheme();

}, 5000);
