//JS INTRO:

//html->content
//css-> adds styles ,handles presentation
//javascript->manipulates html,css 

//variables->containers   operators-> symbols used to perform some actions on variables                      
//ex:
console.clear();
   var num1 = 2;             //  plus,minus,multiply,divide,comprision etc.                   
   var num2 = 4;                                                                           
   var num3 = 6;

 var sum = num1 + num2 + num3;

  console.log(sum);  //prints wht we need in that paranthesis

//Camel case (Recommended for JS)
var firstNum;

// Pascal case
var FirstNum;

//Snake case
var first_num;


DATATYPES:

numbers
ex:
console.clear()

var num1 = 10 //Integer
var num2 = 10.9//Decimal

console.log(typeof(num1))
console.log(typeof(num2))

//Addition
var num3 = 15;
var sum = num3 + num1 + num2;
console.log(sum);

//Subtraction
var diff = num3 - num1;
console.log(diff);

//Multiplication
var mul = num3 * num1;
console.log(mul);

//Division
var div = num3 / num1;
console.log(div);

var divByZero = num3 / 0;
console.log(divByZero);
console.log(typeof(divByZero));

var mulByString = num3 * 'A';
console.log(mulByString);
console.log(type(mulByString));


IN-BUILT NUMBERS FUNCTIONS:

console.clear()
var num1 = 10;
var num2 = 20.3;

// toString() number as input and returns a string
console.log(num1.toString())             -------->"10"
console.log(num2.toString())             -------->"20.3"

var strNum1 = "10";
var strNum2 = "11.5";
var strNum3 = "ABC"
//parseInt() string numeral as input and returns a number
console.log(parseInt(strNum1));        
console.log(parseInt(strNum2));
console.log(parseInt(strNum3));

 //parseFloat()string numeral as input and returns a floating number 
console.log(parseFloat(strNum2));
console.log(parseFloat(strNum3));

//toFixed() takes floating number and rounds it off to given position

var strFloat = 87.987653;
console.log(strFloat.toFixed());
console.log(strFloat.toFixed(2));
console.log(strFloat.toFixed(5));
console.log(strFloat.toFixed(10));

STRINGS:
console.clear()
var myFirstString = "I love JavaScript"
console.log(typeof(myFirstString))
var mySecondString = 'We will learn JavaScript together'
console.log(typeof(mySecondString))

//double quote contains ina string
var doubleQuotesString = "This is a \"JavaScript\" string"
console.log(doubleQuotesString)

//single quote contains ina string
var singleQuotessString = 'This is a \'JavaScript\' string' 
console.log(singleQuoteString)

INBUILT FUNCTIONS-1:
var myFirstString = "This is a string for Javascript string Functions,Javascript"
//REturns leng of the string
console.log(myFirstString.length)
// Find index of a string inside another string      output:
console.log(myFirstString.indexof('Javascript'))   -------->21
console.log(myFirstString.indexof('This'))         -------->0
//Find LAST index of a string inside another string
console.log(myFirstString.lastindexof('Javascript'))-------->50
//get a part of our string slice(start,end)
console.log(myFirstString.slice(0,4))               --------->"Javascript"
console.log(myFirstString.slice(-10))               --------->"Javascript"
console.log(myFirstString.slice(5))                 --------->"is a string for Javascript string Functions,Javascript"
//get sub string functn - substr(startpos,length)
console.log(myFirstString.substr(0,4))              --------->"This"
console.log(myFirstString.substr(21,10))            --------->"Javascript"
console.log(myFirstString.substr(21))               --------->" Javascript string Functions,Javascript"
