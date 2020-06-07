// question 1

var name = "Mark Mia";


// question 2

var person = {
    name: "Mark",
    surname: "Mia"
}


//question 3

var outOfStock = window.confirm ("Click ok, for true. Click cancel, for false")
  if (outOfStock === true){
    console.log("Out of stock")
} else{
    console.log("In stock");
} 

//question 4

var numbers = [14,17,23,80,81];
    console.log(numbers);

// question 5

for (var i=15; i <= 25; i ++)
    console.log(i);

// question 6

for (var i = 15; i <=25; i++){
    if (i === 20)
      console.log(i);
  }
    

// question 7

var brother = [
    {
      name: "Benedict",
      age: 34,
      married: false
    },
    {
      name: "Eric",
      age: 28,
      married: true   
    }
];

for (var i=0; i < brother.length; i++){
    console.log(brother[i].age);
    console.log(brother[i].married);               
}

// question 8

function whatIDontLike (weather){
    console.log("I dont like " + weather);
}
whatIDontLike("winter");

// question 9

function soldItem(item1,item2){
    var difference = item2 - item1;
    console.log(difference);
}
soldItem (91,188);

// question 10

function favoriteBeer(cervesa){
    var beer = ["cervesa"];
    beer.push("redhorse");
    console.log(beer);
    console.log(cervesa);
 }
 favoriteBeer("san "+" miguel");


 



