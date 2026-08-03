// let para = document.querySelector(".name");

// let oldName = para.innerText;
// para.innerText = oldName + " Islam";

// on click function start ////

// function showAlert(){
//     document.getElementById("popup").style.display = "block";
// }

// function hideAlert(){
//     document.getElementById("popup").style.display = "none";
// }


///on click function end ///

// let btn1 = document.querySelector("#btn1")

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }


////mode change function start ///////

// let mode = document.querySelector("#mode");
// let currmode = "light";

// mode.addEventListener("click", () => {

//     if (currmode === "light") {
//         currmode = "dark";

//         document.body.style.backgroundColor = "black";
//         document.body.style.color = "white";

//     } else {
//         currmode = "light"

//         document.body.style.backgroundColor = "white";
//         document.body.style.color = "black";
//     }

//     console.log(currmode);

// });


///mode change end///////


// let box = document.querySelectorAll(".box");
// let resetbtn = document.querySelector("#reset-btn");

// let turn0 = true;

// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ]
   

// box.forEach((box)=> {
//     box.addEventListener("click", () => {
//         console.log("clicked");
//         if(turn0){
//          box.innerHTML = "0"
//          turn0 = false
//         }else{
//          box.innerHTML = "x"
//          turn0 = true
//         }        
//     })
// })


//////////////////////////////////////////////


// const students = {
//     name: "shifat islam",
//     age: 25,
//     marks: 90,
// }


// class car{
//     start(){

//     }
// }
  
// set timeout function start ////

// const hello = () => {
//    console.log("hello world");
// }


// setTimeout(hello, 3000);

// nested function start ////

// let age = 18;

// if(age >= 17){
//     if(age >= 60){
//         console.log("senior");
//     }else{
//         console.log("middle age");
//     }
// } else{
//     console.log("child");
// }


// set time out and call back hell

//   function getData(dataId, getNextData) {
//     // 2s
//     setTimeout(() => {
//         console.log("data", dataId);

//         if (getNextData) {
//             getNextData();
//         }

//     }, 2000);
// }

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });


// new promise    

// let promise =  new Promise((resolve, reject) => {
//     console.log("Promise started");
//     resolve("123");
//  })


//  object propaty

// class Student {

//     name = "Shifat";
//     age = 18;

//     study() {
//         console.log("আমি পড়ছি");
//     }

// }

// let s1 = new Student();

// console.log(s1.name);
// console.log(s1.age);

// s1.study();

// callback function start ////


// function first(callback) {
//     console.log("First Function");
//     callback();
// }

// function second() {
//     console.log("Second Function");
// }

// first(second);


promise
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})