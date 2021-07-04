const PocClass = require("./pocClass");

function init() {
  const pocClass = new PocClass();
  const getWithArg = pocClass.get("first-value");
  const getWithArgs = pocClass.get("first-value", "secode-value");

  console.log(getWithArg); // fn2: first-value undefined
  console.log(getWithArgs); // fn2: first-value secode-value
}

init();
