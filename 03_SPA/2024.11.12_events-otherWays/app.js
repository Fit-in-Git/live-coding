//EXAMPLE-1: Inline
// Bad practice
function clickHandler() {
  alert("Hello");
}

//EXAMPLE-2: Event as property
const myBtn = document.querySelector("#btn");

function saySth (){
  prompt("Say something");

}
myBtn.onclick = saySth;


// myBtn.onclick = function () {
//   prompt("Say something");
// };

// 3. with addEventListener