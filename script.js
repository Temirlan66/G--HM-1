const innInput = document.getElementById("innInput");
const innCheck = document.getElementById("innCheck");
const result = document.getElementById("result");

const regExp = /\d{3}-\d{3}-\d{3}-\d{5}/;

innCheck.addEventListener("click", () => {
  if (regExp.test(innInput.value)) {
    result.innerHTML = "Success";
    result.style.color = "green";
    result.style.border = "2px solid green";
  } else {
    result.innerHTML = "Error";
    result.style.color = "red";
    result.style.border = "2px solid red";
  }
});

let position = 0;
const recursionBlock = () => {
  position = position + 4;
  if (position > 450) return;
  document.getElementById("box").style.marginLeft = position + "px";

  timeFunc();
};

const timeFunc = () => {
  setTimeout(recursionBlock, 100);
};
timeFunc();
