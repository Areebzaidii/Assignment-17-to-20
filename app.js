// ~`~`~`~`~`~`~`~`~`~Chapter 17 to 20~`~`~`~`~`~`~`~`~`~

// QUE #01
// [
//     [, ,],
//     [, ,],
//     [, ,]
// ];
// document.write(matrix[0]+"<br>"+matrix[1]+"<br>"+matrix[2]+"<br>")




// QUE #02

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];
// document.write(matrix[0]+"<br>"+matrix[1]+"<br>"+matrix[2]+"<br>")



// QUE #03

// for (let i = 1; i <= 10; i++) {
//     document.write(i+"<br>")
// }



// QUE #03

// var tableNumber = +prompt("Enter the Number thats the table you need")
// var tableNumberLenght = +prompt("Enter the lenghth of the table")

// for (let i=1;i<=tableNumberLenght;i++)
// {
//     document.write(tableNumber+"x"+i+"="+i*tableNumber+"<br>")
// }

// // QUE #04

// fruit =["apple","banana","mango","orange","strawberry"]

// for(i=0;i<fruit.length;i++)
// {
//     document.write("element at "+i+" index "+ fruit[i]+"<br>")
// }


// // QUE #05

// a)
// counting

// for(let i=1;i<=15;i++){
//     document.write(i+"<br>")
// }

// b)
// Reverse counting

// for(let i=10;i>=1;i--){
//     document.write(i+"<br>")
// }


// c)
// even

// for (i=0;i<20;i=i+2){
//     document.write(i+"<br>")
// }


// d)
//odd

// for (i=1;i<20;i=i+2){
//     document.write(i+"<br>")
// }

// e)
// //series

// for (i=2;i<20;i=i+2){
//         document.write(i+"k"+"<br>")
//     }

// QUE #07 

var foodArray = ["car", "alto", "mehran", "farari"]
var findingCar = prompt("Enter food name")
var carname = findingCar.slice(0).toLowerCase()
var newfood = foodArray.indexOf(findingCar)
var match = false

for (let i = 0; i < foodArray.length; i++) {

    if (carname === foodArray[i]) {
        match = true
        alert(findingCar + " is Available at " + newfood + "index")
        break

    }
}
if (!match) {
    alert("we are sorry " + findingCar + " not available")

}

// QUE #08
// QUE #09





// QUE #10

// for(i=5;i<=100;i=i+5){
//     document.write(i+" ")
// }



// Class assignment

// 1
// 12
// 123
// 1234
// 12345

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++)
//     document.write(j+" ")
// document.write("<br>")
// }

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1

// for (i=500;i>=1;i--){
//     for(j=500;j>=i;j--)
//     document.write(j+" ")
// document.write("<br>")
// }

// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6
// 1 2 3 4 5 6

// for (i=1;i<5;i++){
//     for (j=1;j<=6;j++)
//     document.write(j+"")
// document.write("<br>")
// }


// *
// **
// ***
// ****
// *****

// for(i=1;i<=5;i++){
//     for(j=1;j<=i;j++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// write a program to calculate fictorial by using prompt

// var numberThatNeed = +prompt("")
// for (i=numberThatNeed;i>=1;i--){
//     document.write(i+"x")
// }
// if(numberThatNeed === 0){
//     document.write("1")}
