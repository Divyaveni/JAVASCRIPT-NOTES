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

