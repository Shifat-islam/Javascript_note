// document.getElementById("h1").innerHTML = "noman";

// function link() {
//   document.querySelector("#para");
// }

// document.querySelector("#para");

// var king = document.querySelector("#one");
// function link() {
//   king.src = "img 2.jpg";
// }
// ///////////////////////////////////////////////////
// var photo = ["img 1.jpg", "img 2.jpg", "img 3.jpg"];
// var imgtag = document.querySelector("img");
// var count = 0;

// function Right() {
//   count++;
//   if (count >= photo.length) {
//     count = 0;
//   }
//   imgtag.src = photo[count];
// }

// function Left() {
//   count--;
//   if (count < 0) {
//     count = photo.length - 1;
//   }
//   imgtag.src = photo[count];
// }

// function addstyle() {
//   var mylink = document.querySelector("#paraid");
//   mylink.classList.add("para");
// }

// function removestyle() {
//   var mylink = document.querySelector("#paraid");
//   mylink.classList.remove("para");
// }

// document.querySelector("button").addEventListener("click", myfun);

// function myfun() {
//   alert("hello");
// }

// var my = document.querySelector("h1");

// my.addEventListener("mouseover", function () {
//   my.classList.add("list");
// });

// my.addEventListener("mouseout", function () {
//   my.classList.remove("list");
// });
// /

// /

// function on() {
//   var my = document.getElementById(".link");

//   document.addEventListener("click", function () {
//     my.classList.add("link");
//   });

//   document.addEventListener("click", function () {
//     my.classList.remove("link");
//   });
// }

// function on() {
//   document.getElementById("link").style.display = "block";
// }

// function closeForm() {
//   document.getElementById("link").style.display = "none";
// }

// for (var i = 0; i <= 3; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     var text = this.innerHTML;
//     document.querySelector("h1").innerHTML = text + " is click ";
//   });
// }

// var my = document.querySelectorAll("input");

// my.addEventListener("click", function () {
//   my.classList.add("amount1");
// });

// my.addEventListener("click", function () {
//   my.classList.remove("amount2");
// });

// const input = document.querySelector("input");
// input.addEventListener("changed", shifat);

// function shifat(e) {
//   console.log(e.target);
// }

// const program = document.querySelectorAll("input[name=shifat]");
// // console.log(program);

// Array.from(program).map((pro) => {
//   pro.addEventListener("change", prohand);
// });

// function prohand(lo) {
//   if (lo.target.checked) {
//     console.log(lo.target.value);
//   }
// }

// let all = document.querySelectorAll("input");

// Array.from(all).map((one) => {
//   one.addEventListener("change", (event) => {
//     if (event.target.checked) {
//       console.log(event.target.value);
//     }
//   });
// });

// let day = prompt("enter any date");

// switch (day) {
//   case "1":
//     console.log("Saturday");
//     break;
//   case "2":
//     console.log("Sunday");
//     break;
//   case "3":
//     console.log("Monday");
//     break;
//   default:
//     console.log("Invalid");
// }

//////-->contains() chak kora ja div ar vitora kono class asa ki na ar ai classa ar ki jaw sata valo vaba show kore/////

// document.querySelector("#btn").addEventListener("click", function () {
//   var box = document.querySelector("#line");

//   if (box.classList.contains("kind")) {
//     box.classList.remove("kind"); // show
//   } else {
//     box.classList.add("kind"); // hide
//   }
// });

// document.querySelector("#name").addEventListener("click", function () {
//   this.classList.toggle("logo");
// });

//////-->toggle add/remove ar ar kaj kora thaka

// document.querySelector("#btn").addEventListener("click", function () {
//   var box = document.querySelector("#line");
//   box.classList.toggle("kind");
// });

/////////// fiding the eliment///////////////

// const form = document.querySelector("form");
// const name = form.document.querySelector("div #name");

// console.log(name);

// let savebtn = document.querySelector(".save-btn");
// let message = document.querySelector(".message");

// savebtn.addEventListener("click", saveuser);

// function saveuser() {
//   message.textContent = "user registretion success";

//   setTimeout(() => {
//     message.textContent = "";
//   }, 2000);
// }

// \\\\\\\\\\\\\

// let savebtn = document.querySelector(".save-btn");
// let message = document.querySelector(".message");

// savebtn.addEventListener("click", display);

// function display() {
//   let count = 0;
//   message.textContent = count;
//   setInterval(() => {
//     count++;
//     message.textContent = count;
//   }, 1000);
// }

// savebtn.addEventListener("click", startclock);

// function startclock() {
//   let date = new Date();
//   let hours = date.getHours();
//   let minites = date.getMinutes();
//   let seconds = date.getSeconds();
//   let time = hours + ":" + minites + ":" + seconds;

//   message.textContent = time;

//   setInterval(startclock, 1000);
// }

// savebtn.addEventListener("click", startclock);

// let timer; // interval রাখার জন্য

// function startclock() {
//   if (timer) return; // একবারের বেশি start না হয়

//   timer = setInterval(function () {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     // 0 add করা (09, 08 etc)
//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     message.textContent = hours + ":" + minutes + ":" + seconds;
//   }, 1000);
// }


////////////////////// shardha khapra js cours ///////////////////////

// const product = {
//   titel: "Ball pen",
//   rating: 4,
//   offet: 5,
//   price: 270
// }

// console.log(product);


// let name = "shifat"

// let num  = 250

// let total = 250 + 20

// let string = "250"+50

// console.log(name +"\n" + num +"\n"+ total +"\n" + string);


// arithmetic operators




// console.log("a =", ++a );

// console.log("a =", a );

// console.log("a == b", a == b); man soman sole 
// console.log("a != b", a != b); man soman na sole 
// === value oo man chak kore 

// let con1 = a > b;
// let con2 = a === 15;

// console.log("con1 && con2", con1 && con2);

// ! er kaj jai man hobe tar ulta lika



// if statement

// let age = 16;

// if ( age >= 18){
//     console.log("you can vote");
    
// }

// if ( age < 18){
//     console.log("you can not vote");
    
// }


// let mode = "dark";
// let color;

// if(mode === "dark"){
//     color  = "black"
// }else{
//     color = "white"
// }

// console.log(color);



// let age = 25;

// if(age >= 18){
//    console.log("vote")
// }else{
//     console.log("can not vote")
// }


// odd or even

// / -> vag foll bar kore 
// % -> vag ses bar kore 

// let num = 11;

// if(num % 2 === 0 ){
//     console.log(num ," is even");
// }else{
//     console.log(num ," is odd");
// }


// let mode = "black";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

// user theke naw

// let mode = prompt("Enter a mode (dark, blue, pink):");
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

// let age = 25;

// let resule = age >= 18 ? "adult" : "not adult";

// console.log(resule);




// let age = prompt("enter your age");

// if(age >= 18){
//     console.log("adult");
// }else if (age >= 25){
//     console.log("midiam");
// }else{
//         console.log("not adult");

// }


// let age = Number(prompt("Enter your age"));

// if (age >= 18 && age <= 19) {
//     console.log("Adult");
// } else if (age >= 20 && age <= 21) {
//     console.log("Young Adult");
// } else if (age >= 22 && age <= 23) {
//     console.log("Medium Adult");
// } else if (age >= 24 && age <= 25) {
//     console.log("Senior Adult");
// } else if (age >= 26 && age <= 27) {
//     console.log("Old Adult");
// } else if (age === 28) {
//     console.log("Super Adult");
// } else {
//     console.log("Not Adult");
// }


// let mark = Number(prompt("Enter your mark (0-100):"));

// if (mark >= 80 && mark <= 100) {
//     console.log("Grade: A+");
// } else if (mark >= 70 && mark <= 79) {
//     console.log("Grade: A");
// } else if (mark >= 60 && mark <= 69) {
//     console.log("Grade: A-");
// } else if (mark >= 50 && mark <= 59) {
//     console.log("Grade: B");
// } else if (mark >= 40 && mark <= 49) {
//     console.log("Grade: C");
// } else if (mark >= 33 && mark <= 39) {
//     console.log("Grade: D");
// } else if (mark >= 0 && mark <= 32) {
//     console.log("Grade: F (Fail)");
// } else {
//     console.log("Invalid Mark");
// }



// for (let i = 1; i<=10; i++){
//     console.log("apna college");
    
// }


// let sum = 0;

// for(let i = 1; i <= 5; i++){
//     sum = sum + i;
// }

// console.log(sum);

// for-of loop

// let str = "apna college"

// let size =0

// for(let i of str){
//     console.log("i", i);
//     size++
    
// }

// console.log("string size =", size);


// for(let num = 0; num<=100; num++){
//     if(num% 2=== 0){
//         console.log(num);
//     } else if(num% 2!==0){
//                 console.log(num);
//     }
// }


// let gnum = 25;

// let unum = prompt("Guess the number");

// while (unum != gnum) {
//     unum = prompt("Your number is wrong. Try again:");
// }

// console.log("Congratulations!", unum);


// let str = "shifatislam"

// console.log(str);


// let marks = [91, 41, 84, 47, 69];
// console.log(marks);


// let marks = [91, 41, 84, 47, 69];

// for (let idx = 0; idx < marks.length; idx++ ){
//     console.log(marks[idx]);
    
// }


// of loop

// let town = ["talaimary", "bazar", "katakhali", "nowhota", "newmarket"];

// for(let city of town){
//     console.log(city.toUpperCase());
    
// }


// let items = [250, 452, 480, 654, 840];

// for(let i = 0; i < items.length; i++){
//     let offer = items[i] / 10;
//     items[i] -= offer;

// }

// console.log("value offer","=", items);


// let i = 0;
// for(let val of items){
//     console.log(`value at index ${i} = ${val}`);
//     let offer = val / 10;
//     items[i] = items[i] - offer;

//     console.log(`value offer = ${items[i]}`);
    
//     i++;
// }


// function shifat(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" || 
//             char === "o" || 
//             char === "u"
//         ) {
//             count++;
//         }
//     }

//     console.log(count);
// }


// let num = [2, 4, 5, 6, 5];

// num.forEach((num) => {
//     console.log(num*num);
// });


// let numbers = [2,4,6];

// let result = numbers.map((value)=>{
//     return value * 2;
// });

// console.log(result);



// let price = [50, 120, 80, 250, 90];

// let result = price.filter((value) => {
//     return value > 100;
// });

// console.log(result);


let numbers = [10, 20, 30, 40];

let total = numbers.reduce((sum, value) => {
    return sum + value;
}, 0);

console.log(total);