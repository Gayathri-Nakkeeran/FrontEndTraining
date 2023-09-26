//Assignment: Create a JavaScript file to demonstrate all the above-mentioned topics with an example

/* Topic 1 -->Syntax***********************************************************************************************/

// let num = 5;
// console.log(num);
// // let y == 5 ;  (This will result in syntax error)



/* Topic2 -->Variables(var , let , const)************************************************************************
var -- global scope dont use anymore
let -- block scope --> declare variable
Const -- block scope --> declare constant */



// if(num == 5){
//     let name = "company";
//     name = "changedCompany";
//     const constantName = "travel";
//     //constantName = "tour"; // will result in error
//     console.log(constantName);
//     var nameByVar = "car";
//     console.log("within block" + name);
//     console.log("within block"  +nameByVar);
// }

// //console.log('Outside block' + name);  // reference error for name
// console.log("Outside Block" + nameByVar);




/* Topic3 --> DataTypes **************************************************************************************** */



// //Number
// let numberType = 5;
// let concatCheck = 45;
// console.log(typeof(numberType));
// console.log(numberType+concatCheck);

// //String
// let stringType = "Work";
// console.log(typeof(stringType));
// console.log(stringType+concatCheck);

// //Boolean
// console.log(5==7);

// //Null
// let nullDemo = null;
// console.log(typeof(nullDemo));

// //Undefined
// let undefinedType;
// console.log(typeof(undefinedType));




/* Topic4 --> Conditional Statement ********************************************************************* */



// const check = 7;
// if(check >10){
//     console.log("if block");
// }
// else if(check<10){
//     console.log("else if block");
// }
// else{
//     console.log("else block");
// }

// switch(check){
//     case 5:
//         console.log("Case5");
//         break;

//     case 10:
//         console.log("case10");
//         break;

//     default:
//     console.log("default");
// }



/* Topic5 -->Loops *****************************************************************************************/



// for(let i=0 ; i< 5 ; i++){
//     console.log("for loop i = " + i);
// } 

// let i = 0;
// while(i<5){
//     console.log("While loop i = "+ i);
//     i++;
// }

// do{console.log("do while loop i= " + i);
//    i++;}
// while(i<0);



/*Topic6 --> Function declaration and expression************************************************************ */



// console.log(isNumber('Gayu'));
// //console.log(isString('Gayu')); //This will result in error


// function isNumber(i){
//     console.log(typeof(i));
//     return typeof(i) == "number";
// }

// let isString  = function(name){
//     return typeof(name)=="string";
// }


/* Topic7 --> Array functions ********************************************************************************** */



 //const carArray = ['audi' , 'lambo' , 'benz' , 'rr'];
// console.log(carArray.length);
// carArray.push('morris');
// let c = carArray.pop();
// console.log(carArray.length);
// console.log(c);

// //slice
// c= carArray.slice(2);
// console.log(c);
// console.log(carArray);

// //splice
// c= carArray.splice(2 , 0 , 'ford');
// console.log(c);
// console.log(carArray);

// let numArray = [1,3,5,7];

// //reduce
// let result = numArray.reduce(function(total , loopVal){
//     return total+loopVal;
// } , 0);
// console.log(result);

// //map
// result = numArray.map(function(loopVal){
//     return loopVal+1;
// })
// console.log(result);

// //filter
// result = numArray.filter(function(loopVal){
//     return loopVal>5;
// })
// console.log(result);




/* Topic8 --> Objects************************************************************************************************ */



// function person() {
//     this.firstName='Dooby';
//     this.lastName='Doo';
//     this.age =  34;
//     this.fullName= function(){
//         return this.firstName + " "+ this.lastName;
//     };
//     this.older = function(){
//         return this.age>30;
//     }
// }

// const person1 = new person();
// person1.firstName = "gayu";
// console.log(person1.fullName());


/* Topic9 --> JSON************************************************************************************************ */



// console.log(person1);
// console.log(JSON.stringify(person1));
// person1.fullName = person1.fullName.toString();
// let personString = JSON.stringify(person1);
// console.log(personString);
// console.log(typeof(personString));
// console.log(typeof(JSON.parse(personString)));