const firstInput = document.getElementById("f");
const secondInput = document.getElementById("s");
const button = document.getElementById("b");

button.addEventListener("click", () => {
  let LENGTH = 0;
  let _LOOP = 0;
  let _EQUAL = 1;
  const msg = ["Please enter a input"];
  let structure = [firstInput.value, secondInput.value];
  if (!structure[LENGTH] && !structure[1]) {
    structure.map((i) => {
      if (i != "") {
        console.log("structure is working");
      }
    });
    while (_LOOP <= structure[LENGTH]) {
      for (let _i = _LOOP; _i <= structure[LENGTH]; _i++) {
        if (_LOOP == structure[LENGTH]) {
          let _k = _LOOP + _EQUAL;
          console.log(msg[(LENGTH = _k - _EQUAL)]);
        }
      }
      _LOOP++;
    }
  }
});
