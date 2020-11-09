
const instructions = prompt(`Please enter a number between 1 and 12.`);

if(instructions === `1` ){
    console.log(`Jan`);
}

else if(instructions === `2`){
    console.log(`Feb`);
}

else if(instructions === `3`){
    console.log(`Mar`);
}

else if(instructions === `4`){
    console.log(`Apr`);
}

else if(instructions === `5`){
    console.log(`May`);
}

else if(instructions === `6`){
    console.log(`Jun`);
}

else if(instructions === `7`){
    console.log(`Jul`);
}

else if(instructions === `8`){
    console.log(`Aug`);
}

else if(instructions === `9`){
    console.log(`Sep`);
}

else if(instructions === `10`){
    console.log(`Oct`);
}

else if(instructions === `11`){
    console.log(`Nov`);
}

else if(instructions === `12`){
    console.log(`Dec`);
}


else if( instructions <= `0`) {
    console.log(alert(`Nope! Only between 1 and 12!!`));
}


else if( instructions > `12`) {
    console.log(alert(`Nope! Only between 1 and 12!!`));
}
