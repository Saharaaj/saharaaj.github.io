let calculate = document.getElementById("cal");

calculate.addEventListener("click", function () {
  let num = document.getElementById("num");
  let f_ans = 1;

  for (let i = 1; i <= num.value; i++) {
    f_ans *= i;
  }
  alert("Factorial (" + num.value + ") = " + f_ans);
});