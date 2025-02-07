/*function enter() {
  let input = document.getElementById("numberInput").value;
  document.getElementById("output").textContent = `Your input is ${input} `;
}*/
function square() {
  let input = document.getElementById("numberInput").value;
  let answer = input * input;
  document.getElementById(
    "output"
  ).textContent = `The square of ${input} is ${answer}`;
}
