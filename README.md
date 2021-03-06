# JAVASCRIPT-NOTES
Short notes for beginners to Java Script with examples
NOTES-1 

JS INTRO:
html->content css-> adds styles ,handles presentation javascript->manipulates html,css

variables->containers operators-> symbols used to perform some actions on variables
ex:console.clear(); var num1 = 2; plus,minus,multiply,divide,comprision etc.
var num2 = 4;
var num3 = 6;

var sum = num1 + num2 + num3;

console.log(sum); //prints wht we need in that paranthesis

//Camel case (Recommended for JS) var firstNum;

// Pascal case var FirstNum;

//Snake case var first_num;

DATATYPES:
numbers ex: console.clear()

var num1 = 10 //Integer var num2 = 10.9//Decimal

console.log(typeof(num1)) console.log(typeof(num2))

//Addition var num3 = 15; var sum = num3 + num1 + num2; console.log(sum);

//Subtraction var diff = num3 - num1; console.log(diff);

//Multiplication var mul = num3 * num1; console.log(mul);

//Division var div = num3 / num1; console.log(div);

var divByZero = num3 / 0; console.log(divByZero); console.log(typeof(divByZero));

var mulByString = num3 * 'A'; console.log(mulByString); console.log(type(mulByString));

IN-BUILT NUMBERS FUNCTIONS:
console.clear() var num1 = 10; var num2 = 20.3;

// toString() number as input and returns a string console.log(num1.toString()) -------->"10" console.log(num2.toString()) -------->"20.3"

var strNum1 = "10"; var strNum2 = "11.5"; var strNum3 = "ABC"

//parseInt() string numeral as input and returns a number console.log(parseInt(strNum1));
console.log(parseInt(strNum2)); console.log(parseInt(strNum3));

_//**parseFloat()**string numeral as input and returns a floating number _ console.log(parseFloat(strNum2)); console.log(parseFloat(strNum3));

//**toFixed() **takes floating number and rounds it off to given position var strFloat = 87.987653; console.log(strFloat.toFixed()); console.log(strFloat.toFixed(2)); console.log(strFloat.toFixed(5)); console.log(strFloat.toFixed(10));

STRINGS:
console.clear() var myFirstString = "I love JavaScript" console.log(typeof(myFirstString)) var mySecondString = 'We will learn JavaScript together' console.log(typeof(mySecondString))

//double quote contains in a string var doubleQuotesString = "This is a "JavaScript" string" console.log(doubleQuotesString)

//single quote contains ina string var singleQuotessString = 'This is a 'JavaScript' string' console.log(singleQuoteString)

INBUILT FUNCTIONS-1:
var myFirstString = "This is a string for Javascript string Functions,Javascript"

//REturns leng of the string console.log(myFirstString.length)

_// Find index of a string inside another string _ ** output:** console.log(myFirstString.indexof('Javascript')) -------->21 console.log(myFirstString.indexof('This')) -------->0

//Find LAST index of a string inside another string console.log(myFirstString.lastindexof('Javascript'))-------->50

//get a part of our string slice(start,end) console.log(myFirstString.slice(0,4)) --------->"Javascript" console.log(myFirstString.slice(-10)) --------->"Javascript" console.log(myFirstString.slice(5)) --------->"is a string for Javascript string Functions,Javascript"

//get sub string functn - substr(startpos,length) console.log(myFirstString.substr(0,4)) --------->"This" console.log(myFirstString.substr(21,10)) --------->"Javascript" console.log(myFirstString.substr(21)) --------->" Javascript string Functions,Javascript"


//JAVA SCRIPT - IN-BUILT STRING FUNCTIONS -PART 2:

var exampleString = "This is JavaScript tutorial"

//toUpperCase() - It converts our string ->uppercase characters
console.log(exampleString.toUpperCase())           // --------->"THIS IS JAVASCRIPT TUTORIAL"

//toLowerCase() - It converts our string ->lowrcase characters
console.log(exampleString.toLowerCase())           // --------->  "this is javascript tutorial"     

//concat() - It merges two or more strings
var firstName = "Javascript"
var lastName  = "Playground"
console.log(exampleString.concat())
console.log(exampleString.concat('',firstName,' ',lastName))

//we can also use '+' to concat two or more strings
console.log(firstName + ' ' + lastName + ' ' + exampleString)

//trim() - It removes extra spaces
var extraSpaceString = '      mystring      '
console.log(extraSpaceString.trim())

var extraSpaceStringExample2 = '      mystring      '
console.log(extraSpaceStringExample2.trim())

//charAt() -> this take a position as an arguement and returns the character at that position
var charAtExampleString = 'This is my test string'
console.log(charAtExampleString.charAt(5))
console.log(charAtExampleString.charAt(11))

//split() -> splits our string on the basis of the arguements passed
var sampleString = "This is my sample string"
console.log(sampleString.split(' '))

var sampleString2 = "This,is,my,sample,string"
console.log(sampleString.split(','))

var sampleString3 = " This is awesome"
console.log(sampleString.split())


//JAVA SCRIPT- NULL AND UN DEFINED VALUES:

console.clear()

var mVar // mVAR HOLDS NO VALUE
console.log(mVar)      ---->undefined

mVar = null //mVar holds the value null
console.log(mVar)      ----->null


//SECTION -3 : CONDITIONAL STATEMENTS

//JAVASCRIPT - CONDTIONAL STATEMENT - if else

console.clear()

if(7>5){
console.log(true)
}

if(5 > 7){
console.log(true)
}else {
console.log(false)
}

if(5 > 7){
console.log('5>7')
}else if(7 > 8){
console.log('7 > 8')
}else {
console.log('Nothing')
}

//EX:console.clear()
var length=200;
var breadth=200;
if (length == breadth){
  console.log('It is a Square')
}else{
  console.log('It is not a Square')
}

//EX:console.clear() 
//MARKS GRADE
//Below 25 F
//25 to 45 E
//45 to 50 D
//50 to 60 C
//60 to 80 B
//Above 80 A
var enteredMarks = 45
if(enteredMarks < 25){
  grade = "F"
}else if( enteredMarks >= 25 && enteredMarks <= 45 ){
   grade = "E"
}else if( enteredMarks >= 46 && enteredMarks <= 50){
   grade = "D"
}else if( enteredMarks >= 51 && enteredMarks <= 60 ){
   grade = "C"
}else if( enteredMarks >= 61 && enteredMarks <= 80 ){
   grade = "B"
}else if(enteredMarks <= 100){
  grade = "A"
}else{
   grade = "incorrect marks"
}
 console.log(grade)

console.clear()
//MARKS GRADE
//Below 25 F
//25 to 45 E
//45 to 50 D
//50 to 60 C
//60 to 80 B
//Above 80 A
var enteredMarks = 100
if(enteredMarks < 25){
  console.log("F")
}else if( enteredMarks >= 25 && enteredMarks <= 45 ){
  console.log("E")
}else if( enteredMarks >= 46 && enteredMarks <= 50){
  console.log("D")
}else if( enteredMarks >= 51 && enteredMarks <= 60 ){
  console.log("C")
}else if( enteredMarks >= 61 && enteredMarks <= 80 ){
  console.log("B")
}else if(enteredMarks <= 100){
  console.log("A")
}else{
  console.log("incorrect marks")
}

//JAVASCRIPT - CONDTIONAL STATEMENT - Switch

console.clear()
var currentDay = 'Mon'
 if(currentDay === 'Mon'){
console.log('Timings: 10:00-06:00')
} else if(currentDay === 'Tue'){
console.log('Timings: 09:00-05:00')
}else if(currentDay === 'Wed'){
console.log('Timings: 09:30-05:00')
}else if(currentDay === 'Thu'){
console.log('Timings: 09:15-06:00')
}else if(currentDay === 'Fri'){
console.log('Timings: 09:05-05:00')
}else if(currentDay === 'Sat'){
console.log('Timings: 09:00-05:00')
}else if(currentDay === 'Sun'){
console.log('Timings: 09:00-01:00')
}

switch(currentDay){
case 'Mon':
console.log('Timings: 10:00-06:00')
break;
case 'Tue':
console.log('Timings: 09:00-05:00')
break;
case 'Wed':
console.log('Timings: 09:30-05:00')
break;
case 'Thu':
console.log('Timings: 09:15-06:00')
break;
case 'Fri':
console.log('Timings: 09:05-05:00')
break;
case 'Sat':
console.log('Timings: 09:00-05:00')
break;
case 'Sun':
console.log('Timings: 09:00-01:00')
break;
default:
console.log('Timings: 09:00-01:00')
break;
}
