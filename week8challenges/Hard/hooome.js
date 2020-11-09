var tomHeight = 9;
var jerryHeight = 10;

var tomMass = 8;
var jerryMass = 45;

const tBmi = tomMass/tomHeight^2;
const jBmi = jerryMass/jerryHeight^2;

let answer = false;

if(tBmi < jBmi) {
    console.log(`Is Tom's BMI higher than Jerry's? ${answer}.`);
}