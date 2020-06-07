// question 1

for (i=15; i <= 25; i++){
    if (i % 2===0){
      console.log(i);
    }
  }
  

// question 2

var innerFunction = function () {
  console.log ("I am a function");
}
innerFunction(); 

function outerFunction (myFunction){
  console.log(myFunction);
}
outerFunction("My Function"); 

outerFunction(innerFunction);




