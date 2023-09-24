//Q 1
var userInput = prompt("Where do you live?");
userInput = userInput.toLowerCase();
var cityArr = ["karachi","lahore","islamabad","peshawar","Multan"]
for (var i=0;i<cityArr.length;i++){
    if(userInput ===cityArr[i]){
        alert("match")
    }
}

//Q 2
var userInput = prompt("Write some animal names you know?");
userInput = userInput.toLowerCase();
var animalArr = ["lion","tiger","cow"]
for (var i=0;i<animalArr.length;i++){
    if(userInput ===animalArr[i]){
        alert("correct")
    }
}

//Q 3
var userInput = prompt("Write some fruit names you know?");
userInput = userInput.toUpperCase();
var fruitArr = ["APPLE","BANANA","COCONUT"]
for (var i=0;i<fruitArr.length;i++){
    if(userInput ===fruitArr[i]){
        alert("nice")
    }
}

// Q 4
var userInput = prompt("Write some animal names you know?");
userInput = userInput.toLowerCase();
var animalArr = ["lion","tiger","cow"]
for (var i=0;i<animalArr.length;i++){
    if(userInput ===animalArr[i]){
        alert("correct")
    }
}

// Q 5
var userInput = prompt("Write some animal names you know?");
userInput = userInput.toLowerCase();
var animalArr = ["lion","tiger","cow"]
for (var i=0;i<animalArr.length;i++){
    if(userInput ===animalArr[i]){
        alert("correct")
    }
}

// Q 6
var cityName = "kaRacHi";
cityName = cityName.toUpperCase();
if(cityName ==="KARACHI"){
    alert("Match")
}

// Q 7
var userinput = prompt("Enter where do you live");

var firstChar = userinput.slice(0, 1).toUpperCase();

var RemainChar = userinput.slice(1).toLowerCase();

var combineInput = firstChar + RemainChar;

var CityArr = ["Karachi", "Islamabad", "Lahore", "Peshawar"];

for (var i = 0; i < CityArr.length; i++) {
  if (combineInput === CityArr[i]) {
    console.log("match");
  }
}

// Chp 2

// Q 1
var text = "Captain";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 2) === "ap") {
    text = text.slice(0, i) + "sq" + text.slice(i + 2);
  }
}

console.log(text);

// Q 2
var text = "Elephant";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 4 ) === "epha") {
    text = text.slice(0, i) + "" + text.slice(i + 4);
  }
}

console.log(text);

// Q 3
var useInfo = "My name is Sami"
var indx = useInfo.indexOf("Sami")
console.log(indx)

// Q 4
var text = "To be or not to be."
var indxbe = text.indexOf("be")
console.log(indxbe)

// Q 5
var text = "To be or not to be."
var indxlastbe = text.lastIndexOf("be")
console.log(indxlastbe)

// Q 6
var sen = "Ready steady go!!!"
var indxgo = sen.indexOf("go")
console.log(indxgo)

// Q 7
var str = "abcde";
console.log(str.charAt(2));

// Q 8
var str = "THe value of the cha is 2020"
var indxcha = str.indexOf("cha")
console.log(indxcha)


// Q 9
var str = "The value of x is 2020"
var indxx = str.indexOf("x")
console.log(indxx)

// Q 10
var userInfo = prompt("Where you do live")
var Arr = ["I live in Karachi"]
var indxUser = userInfo.indexOf("live")
    if (userInfo === Arr[i] ){
        alert(indxUser)
    }

// Q 11

var text = "No I am a developer";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 2) === "No") {
    text = text.slice(0, i) + "Yes" + text.slice(i + 2);
  }
}
console.log(text);


// Q 12
var text = "Sir Faraz is 1 of the best developer";

for (var i = 0; i < text.length; i++) {
  if (text.slice(i, i + 1) === "1") {
    text = text.slice(0, i) + "One" + text.slice(i + 1);
  }
}
console.log(text);

// CHP 3
// Q 1
var num = 213.8;
console.log(Math.round(num));

// Q 2
var num = 185.9;
console.log(Math.ceil(num));

// Q 3
var num = 2.9;
console.log(Math.floor(num));

// Q 4
var num = 0.5;
console.log(Math.floor(num))


// Q 1
var randomNumber = Math.random() * 50;
console.log(randomNumber);

// Q 2
var randomNumber = Math.random();
console.log(randomNumber);

// Q 3(Dice)
var randomNumber = Math.random() * 6;
console.log(randomNumber.toFixed(0));

// Q 4

var headUser = prompt("Enter head username");

var tailUser = prompt("Enter tail username");

var toss = Math.random() * 2;

var floor = Math.floor(toss);

if (floor === 0) {
  alert(headUser + " " + " win the toss");
} else {
  alert(tailUser + " " + "win the toss");
}
 
// Q 1
var UserName = "Sami"
console.log(UserName)

// Q 2
var Num = 191139
console.log(Num.toString())

// Q 3
var num = 1.8596364;
console.log(num.toFixed(0));

// Q 4
var num1 = Number(prompt("Enter first value"));

var num2 = Number(prompt("Enter second value"));

var num1 = 20;
var num2 = 18;

var add = num1 + num2;
console.log(typeof add);
console.log(add.toString())

// Q 5
var Num = 42
console.log(Num.toString())

// Q 6
var ff = 3.14
console.log(ff.toFixed(0))