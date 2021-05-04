let firstInput = document.getElementById("f");
let secondInput = document.getElementById("s");
let button = document.getElementById("b");
let paragraph = document.getElementById("demo");

button.addEventListener("click", () => {
  let LENGTH = 0;
  let _LOOP = 0;
  let _EQUAL = 1;
  const msg = ["Please enter a input", "system error", "this is dummie number"];
  let structure = [firstInput.value, secondInput.value];
  if (!structure[LENGTH] && !structure[_EQUAL]) {
    structure.map((i) => {
      if (i != "") {
        console.log("structure is working");
      }
    });
    while (_LOOP <= structure[LENGTH]) {
      for (let _i = _LOOP; _i <= structure[LENGTH]; _i++) {
        if (_LOOP == structure[LENGTH]) {
          let _k = _LOOP + _EQUAL;
          alert(msg[(LENGTH = _k - _EQUAL)]);
        }
      }
      _LOOP++;
    }
  } else {
    if (!structure[_EQUAL]) {
      alert(msg[LENGTH]);
    } else {
      if (_LOOP != LENGTH && LENGTH != LENGTH) {
        console.log(msg[_EQUAL]);
      } else {
        if (structure[LENGTH] <= LENGTH || structure[_EQUAL] <= LENGTH) {
          if (msg[2]) alert(msg[2]);
        } else {
          let _LENGTH_INPUT = 2;
          let _l = (+structure[LENGTH] + +structure[_EQUAL]) / _LENGTH_INPUT;
          paragraph.innerHTML = _l;
          console.log(_l);
        }
      }
    }
  }
});
