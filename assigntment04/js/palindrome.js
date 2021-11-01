let check = document.getElementById("check");
check.addEventListener("click", function () {
  let word = document.getElementById("word");

  let arrayword = word.value.split("").reverse().join("");
  if (word.value == arrayword) {
    alert("Result is " + arrayword + ". " + word.value + " is a palindrome");
  } else {
    alert(
      "Result is " + arrayword + ". " + word.value + " is a not palindrome"
    );
    location.reload();
  }
});