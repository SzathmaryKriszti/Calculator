 document.addEventListener("DOMContentLoaded", () => {

     const input1 = document.getElementById("input1");
     const input2 = document.getElementById("input2");
     const result = document.getElementById("result");

     document.getElementById("add-button").onclick = () => {
         result.innerHTML = +input1.value + +input2.value;
     }

     document.getElementById("subtract-button").onclick = () => {
         result.innerHTML = input1.value - input2.value;
     }

     document.getElementById("multiply-button").onclick = () => {
         result.innerHTML = input1.value * input2.value;
     }

     document.getElementById("divide-button").onclick = () => {
         result.innerHTML = input1.value / input2.value;
     }

 });


