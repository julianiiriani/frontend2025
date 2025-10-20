//JavaScript Function//

//penting untuk functional programming, bagian dari program untuk jalankan suatu tugas tertentu, menerima input dan keluarkan output
//function sebagai mesin yang terima input dan keluarkan output, mis Blender(input buah-buah, jalankan, output butiran)

//Cara 1. Function Declaration
//function greetings(){
//    console.log("Hello World")
//}
//greetings() //call function

//Cara 2. Function Expression
//const greetings2 = function(){
//    console.log("Hello World")
//}
//greetings2() //call function

//Function with input (arguments dan parameter) & output (return value)

//dari Cara 1
//                 paramater
//function greetings(fullName){
//    return "Hello " + fullName
//}
//argument di bawah, karena fungsi ada output jadi otomatis harus ada tempat untuk simpan outputnya
//let output = greetings("Juliani Kalangie")
//console.log(output)

//dari Cara 2.
//const greetings2 = function(fullName){
//    return "Hello " + fullName
//}
//let output2 = greetings2("Lani Kalangie")
//console.log(output2)

//parameter bisa lebih dari 1, terserah berapa banyak baik di cara 1 ato di cara 2 tapi kalo parameter 2, fungsi harus sesuai parameter juga
//argumen menyesuaikan berapa banyak parameter
// function hoisting cuma berlaku pada cara 1, misalkan function calling di pindah di atas declaration, panggil dulu terus function di bawah
// tapi kalo cara kedua di pindahkan di atas bakal ERROR, tidak berlaku di cara kedua, hanya pada cara pertama. Tetap harus buat functionnya dulu baru call di bawah

//Global, Local, Block Scope Variable
//variable punya scobe atau ruanglingkup sejauh mana bisa di akses
//let x = 10 //Global Variable
//console.log(x)
//function f1(){
//    let y = 20 //Local Variable
//    console.log(x)
//    console.log(y)
//    if(true){
//        let z = 30 //Block Variable, apapun itu yang awalnya kurung kurawal
//        console.log(x)
//        console.log(y)
//        console.log(z)
//    }
//}
//    console.log(x) bakal ERROR karena di luar fungsi apalagi sudah keluar kurung kurawal
//f1()

//MIni excercise
//Modifikasi ME terakhir dengan menghitung BMI dengan menggunakan function di mana berat dan tinggi sebagai argument (input) dan BMI sebagai output
//let berat = 60
//let tinggi = 1.55
//console.log(berat)
//function hitungBMI(){
//    let bmi = berat / (tinggi * tinggi)
//    console.log(berat)
//    console.log(tinggi)
//    if(true){
//        let hasil = bmi > 25 ? "BMI anda adalah : " + bmi + ",kategori kelebihan berat badan" : "BMI anda adalah : " + bmi + ",kategori normal"
//        console.log(berat)
//        console.log(tinggi)
//        console.log(hasil)
//    }
//}
//hitungBMI()

function calculateBMI(berat, tinggi){
    let bmi = berat / (tinggi * tinggi)
    return bmi > 25 ? "BMI anda adalah : " + bmi + ",kategori kelebihan berat badan" : "BMI anda adalah : " + bmi + ",kategori normal"
}
let output = calculateBMI(60, 1.5)
console.log(output)

//Pelajari tententang IIFE & Call back function





