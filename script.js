// // console.log("hello2")
// // alert("hello2")
// // confirm("hello2")
// // prompt("hello2")
// // variable declaration
// var number = 15;
// var string = "JavaScript";
// var bool = true;
// var arr = [12,33,"JS","HTML"];
// var obj = {
//     name: "Yvnd",
//     surname: "Brrr"
// }
// // use typeof for detecting variable type
// console.log("number: ", typeof(number))
// console.log("string: ", typeof(number))
// console.log("bool: ", typeof(arr))
// console.log("obj: ",typeof(obj))

// console.log( 5 < 2)
// console.log( 5 > 2)
// console.log( 5 <= 2)
// console.log( 5 >= 2)
// console.log( 5 == 2)
// console.log( 5 != 2)
// console.log( 5 === 5) //true
// // comparam si valoarea si tipul
// console.log( 5 === "5") //false pt tip diferit 

// console.log( 5 !== 2)
// var num1 = 0;
// var num2 = -9;
// if(num1 < num2){
//     console.log("num1 <./. num2")
// }else if(num1==num2){
//     console.log("num1 == num2")
// }else{
//     console.log("num1 > num2")
// }
// if(num1 > num2 && num1 > 0){
//     console.log("num1>2 si >0")
// }

// for (var i = 0; i <=10; i++) {
//  console.log(i);
// }
// function myFunction(){
//     console.log("test1")
// }
// // myFunction();
// var arr = [12,11,5,77, -6,0,"JS","C#"]
// console.log(arr[0])
// console.log(arr)
// var nums = [];
// var strs = [];
// for (let i = 0; i < array.length; i++) {
//     if(typeof (arr[i]) =="number"){
//     nums.push(arr[i]);}
//     else{
//         strs.push(arr[i]);
//     }
//     console.log("arr: ", arr);
//     console.log("nums: ",nums);
//     console.log("strs: ",strs);
// }
const yr = 2020;
const transfer = 0.84;
//1
var nume = prompt("introduceti numele");
console.log("Hello, your name is",nume+"!");
//2
var age = prompt("introduceti anul nasterii");
console.log("Hello, your age is",(yr-age)+"!");
//3
var latura = prompt("introduceti lungimea laturii");
console.log("Hello, perimetrul patratului cu latura de",latura,"este =",(latura*4)+"!"); 
//4
var radius = prompt("introduceti lungimea radiusului");
console.log("Hello, area cu radiusul de",radius,"este =",(3.14*radius**2)+"!"); 

var km = prompt("introduceti distanta pentru parcurgere (km)");
var time = prompt("introduceti timpul pentru parcurgere");
console.log("pentru a parcurge",km+"km","in",time+" ore","avem nevoie de viteza :",km/time+"km/h")

var dolari = prompt("introduceti val $$$");
console.log(dolari+" usd =",dolari*transfer+"EUR")

var size = prompt("introduceti spatiul stocare gb");
console.log("In",size+"gb","Incap",size/0.82+" fisiere")

var ban = prompt("introduceti suma de bani");
var cic = prompt("introduceti pretul ciocolatei");
console.log("In",ban+"lei","Incap",parseInt(ban/cic)+" ciocolate","cu restul de",(((ban/cic)-parseInt(ban/cic))*6.35)+"lei")

var cifra = prompt("introduceti cifra cu lungimea 3");

console.log(cifra.slice(-1))
console.log(cifra.slice(-2))
console.log(cifra.slice(-3))


var cifra = prompt("introduceti o cifra");
if(cifra%2!=1){
console.log("cifra este para")}
else console.log("cifra este impara")