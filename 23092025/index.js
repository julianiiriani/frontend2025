//Rest Parameter and Spread Operator

//adalah penggabungan semua parameter menjadi satu dengan notasi 3 buah titik (...) diikuti dengan nama variable yang akan di gunakan
// semua argument yang di kirimkan di kirim ke rest. Bisa di gabungkan dengan parameter biasa.
//____________________________________

//1. Rest Parameter

//a. Rest Parameter bertipe data array
//contoh 1.
const funct1 = (param1, param2, param3) => {
    console.log(param1, param2, param3);
};
funct1(1, 2, 3);
//karena 3 param, jadi kasi 3 argument = balanced.

const funct2 = (...rest) => {
    console.log(rest);
};
funct2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

const funct3 = (param1, param2, param3, ...rest) => {
    console.log(param1, param2, param3);
    console.log(rest);
};
funct3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//ini funct3 yang sudah di gabung

//____________________________________
//Mini Excercise
//Buatlah fungsi yang dapar menjumlahkan semua nilai pada argument fungsi (berapa pun argumen, akan di tambahkan)
const jumlahkan = (...angka) => {
    let total = 0;
    for(let i = 0; i < angka.length; i++) {
        total += angka[i];
    }
    console.log(total);
};

jumlahkan(1, 2, 3, 4, 5);

//dari sir:


//____________________________________
//2. Spread Operator ---------------

//berkaitan dengan array dan object
const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(...numbers);
//gunakan simbol 3 titik di ikuti dengan rest. 
//Kegunaan pada array itu untuk-----------

//1. Duplikasi Array
//misalnya:
const numbers2 = [...numbers]
console.log(numbers2);

//2. Menggabungkan array
//misalnya:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let combinedArr1 = arr1.concat(arr2, arr3);
console.log(combinedArr1);
//kalau cara yang lebih gampang, buat array baru yang mana isinya adalah arr1, arr2, arr3 tapi harus pakai simbol titik
let combinedArr2 = [...arr1, ...arr2, ...arr3];
console.log(combinedArr2);

//Kegunaan Spread Operator pada object
//1. Duplikasi Array
//misalnya:
const student1 = {
    fullName: "Julia",
    status: "non-active",
};
const student2 = { ...student1, address: "Langowan"};
console.log(student2);

//2. Menggabungkan array
//misalnya:
let obj1 = {a: 1, b:2};
let obj2 = {a: 3, b:4};
let combinedObject = {...obj1, ...obj2};
console.log(combinedObject);