const button = document.querySelector("button");
const svg = document.querySelector("#onSwitch");
// const offSwitch = document.querySelector("#offSwitch");
let svgDisplayOn = true;
let buttonText = true;

button.addEventListener("click", (e) => {
  console.log("clicked");
  document.body.classList.toggle("dark");
  if (svgDisplayOn) {
    svg.innerHTML =
      '<path d="M17,7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7M17,15A3,3 0 0,1 14,12A3,3 0 0,1 17,9A3,3 0 0,1 20,12A3,3 0 0,1 17,15Z" />';
  } else {
    svg.innerHTML =
      '<path d="M17 6H7c-3.31 0-6 2.69-6 6s2.69 6 6 6h10c3.31 0 6-2.69 6-6s-2.69-6-6-6zm0 10H7c-2.21 0-4-1.79-4-4s1.79-4 4-4h10c2.21 0 4 1.79 4 4s-1.79 4-4 4zM7 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />';
  }

  //   if (buttonText) {
  //     button.innerHTML = "Switch to Light Mode";
  //   } else {
  //     button.innerHTML = "Switch to Dark Mode";
  //   }
  svgDisplayOn = !svgDisplayOn;
  //   buttonText = !buttonText;
});
