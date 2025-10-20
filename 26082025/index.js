//IIFE & Callback Function//
//_____________________________________________________________//

//1. IIFE (Immediately Invoked Fuction Expression)
//fungsi yang langsung di panggil atau di jalankan istilah lainnya adalah self-excetuing anonymous function
//cara buat
//(function  (){
//    console.log("Hanging in there, Lani")
//})();

//tidak ada parameter atau return valuenya but what if
//IIFE with parameter & return value
//(function (fullName){
//    console.log("I am " + fullName)
//})("Juliani Kalangie");
//console.log(output);

//_____________________________________________________________//

//2. Callback Function
//function passsed into another function as an argument
//function greetings(Callback){ //greetings terima input sebagai function
//    Callback();
//}
//greetings(function() {
//    console.log("Hello Callback");
//}); //function selalu "tidak ada nama"

//Callback with parameter and return value
//function greetings(Callback){ //greetings terima input sebagai function
//    let result = Callback("Lani Kalangie");
//    console.log(result);
//}
//greetings(function(fullName) {
//    console.log("Hello " + fullName);
//});
//let output = greetings(function(fullName) {
//    return("Hello " + fullName);
//});
//console.log(output);
//callback return value yaitu string hasil result dari callback function
//biasanya outer function return juga bisa terima di sebelha greetings (let output = greeting)

//_____________________________________________________________//
//Excercise #01
//Buat program untuk menghitung BMI dengan menggunakan IIFE and Callback Function
