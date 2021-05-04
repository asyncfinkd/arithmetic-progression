const firstInput = document.getElementById("f");
const secondInput = document.getElementById("s");
const button = document.getElementById("b");

button.addEventListener("click", () => {
  let LENGTH = 0;
  let _LOOP = 0;
  const msg = ["Please enter a input"];
  if (!firstInput.value || !secondInput.value) {
    while (_LOOP <= firstInput.value) {
      for (let _i = _LOOP; _i <= firstInput.value; _i++) {
        if (_LOOP == firstInput.value) {
          console.log(msg[LENGTH]);
        }
      }
      _LOOP++;
    }
  }
});
