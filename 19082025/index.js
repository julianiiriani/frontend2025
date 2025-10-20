//JS Variable and Operators
//1. JS Variable

//let=variable yang mana data bisa di ganti ganti
//const variable yang mana data tidak bisa di rubah isinya

//deklarasi variable harus isi nilai pakai =, pake tipe data string/gabungan karakter

//istilah penulisan variable
// let fullName = "Juliani Iriani" //often use untuk javascript atau konvensi(tatacara) camel case
// let FullName = "Juliani Kalangie" //pascalcase
// let full_name = "Julia Iriangie" //snake case

//Tipe-tipe data
// const gender = "male" // string
// let age = 21 // number tidak pakai tanda petik - integer bisa pakai string bisa ganti2
// let weight = 55.16 //Number float
// let isMarried = true //Boolean - harus pakai huruf kecil
// let grade = null //masih kosong belum ada isi
// let address //belum tau tipe data apa atau undefined

// console.log(gender, age, weight, isMarried. grade, address)

//2. JS operator

//a. Aritmetic Operator
//let bil1 = 20
//let bil2 = 5
//console.log(bil1 + bil2)
//console.log(bil1 - bil2)
//console.log(bil1 * bil2)
//console.log(bil1 / bil2)
//console.log(bil1 % bil2)
//console.log(bil1 ** bil2)

//Mini Excercsie
//Membuat program yang menghitung luas lingkungan, r/jari2 tentukan sendiri dan tampilkan hasil

//const PHI = 3.14
//let r = 24
//let luas = PHI * (r * r)
//console.log(luas)

//b. Assignment Operator (=, +=, -=, *=, /=)
let bilangan = 5
bilangan = bilangan + 10 //15
bilangan += 5 // 20

//c. string operator (+) atau concatination penggabungan
const firstName = "Juliani "
const lastName = "Kalangie"
const fullName = firstName + lastName
console.log(fullName)

//d. Relational Opeartor (==, ===, >, <, >=, <=, !=)
//output pasti itu boolean
//contoh
let bil1 = 10
let bil2 = 20
let bil3 = "10"
console.log(bil1 == bil3)
console.log(bil1 === bil3)
console.log(bil1 > bil2)
console.log(bil1 < bil2)
console.log(bil2 >= bil3)
console.log(bil2 <= bil3)
console.log(bil3 != bil1)

//e. logical operator (&&, ||, !)
console.log(true && true) //true
console.log(true && false) // false
console.log(false && true) // false
console.log(false && false) // false
console.log(true || true) // true
console.log(true || false) // true
console.log(false || true) // true
console.log(false || false) // false
console.log(!true) //false

//f. Ternary Operator (? :)
let age = 21
let isEligible = age >= 22 ? "Bisa drink drink" : "Belum bisa drink drink"
console.log(isEligible)

//Mini Excercise 
//Buat program yang dapat hitung BMI (Body Mass Index) rumusnya BMI : berat (kg) / (tinggi (m) * tinggi)) dan tampilkan hasil
// jika BMI > 25 -> "BMI anda adalah ____, kategori kelebihan berat badan"
// Jika BMI < 25 -> "BMI anda adalah ____, kategori normal"
//let berat = 60
let tinggi = 1.55
let bmi = berat / (tinggi * tinggi)
let hasil = bmi > 25 ? "BMI anda adalah : " + bmi + ",kategori kelebihan berat badan" : "BMI anda adalah : " + bmi + ",kategori normal"
console.log(hasil)
