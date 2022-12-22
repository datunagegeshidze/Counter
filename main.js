let zero = document.querySelector(".zero");
let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".incrase");

let count = 0;

decrease.addEventListener("click", function () {
  count--;
  zero.innerHTML = count;
  zero.style.color = "red";
});

reset.addEventListener("click", function () {
  count = 0;
  zero.innerHTML = count;
  zero.style.color = "black";
});

increase.addEventListener("click", function () {
  count++;
  zero.innerHTML = count;
  zero.style.color = "green";
});
