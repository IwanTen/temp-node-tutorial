const num1 = 5;
const num2 = 10;

function addValues() {
  console.log("the sum is " + (num1 + num2));
}

addValues();

//!when a node module is exported it is wrapped in a module this being envoked
//*this means that this "addValues" function will be envoked when imported into another file!
