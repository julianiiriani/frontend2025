//Kalangie, Juliani Iriani

//Excercise #01
//Buat program untuk menghitung BMI dengan menggunakan IIFE and Callback Function

//1. IIFE

let output = (function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    let kategori = bmi > 25 ? "kelebihan berat badan" : "normal";
    return "BMI anda adalah : " + bmi + ", kategori " + kategori;
})(60, 1.5);

console.log(output);


//2. Callback Function
function hitungBMI(callback) {
    let result = callback(60, 1.5)
    console.log(result)
}
hitungBMI(function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi)
    return bmi > 25 ?
        "BMI anda adalah : " + bmi + ",kategori kelebihan berat badan" :
        "BMI anda adalah : " + bmi + ",kategori normal"
})
console.log(output)
