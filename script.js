const button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log("clicked");
  document.body.classList.toggle("dark");
});
