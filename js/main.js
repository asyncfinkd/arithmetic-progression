const firstInput = document.getElementById("f");
const secondInput = document.getElementById("s");
const button = document.getElementById("b");

button.addEventListener("click", () => {
  let LENGTH = 0;
  let _LOOP = 0;
  let _EQUAL = 1;
  const msg = ["Please enter a input"];
  const structure = [firstInput.value, secondInput.value];
  if (!structure[0] && !structure[1]) {
    while (_LOOP <= structure[0]) {
      for (let _i = _LOOP; _i <= structure[0]; _i++) {
        if (_LOOP == structure[0]) {
          let _k = _LOOP + _EQUAL;
          console.log(msg[(LENGTH = _k - _EQUAL)]);
        }
      }
      _LOOP++;
    }
  }
});
