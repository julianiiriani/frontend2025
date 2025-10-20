//Array and Object in JS

//1. Array (variable yang bisa simpan banyak data)
// cara mendeklarasikan array

// Cara 1. Array Literal 
let students = ["Juliani", "Charles", "Carlos", "Lando"];
let j = ["Juliani", 21, true, [80, 90, 100]];

//Cara 2. Kata Kunci "new"
let employees = new Array("Juliani", "Charles", "Carlos", "Lando");

//Menampilkan semua element array sekaligus
console.log(students);
//menampilkan element array berdasarkan index (agar bisa di akses/tampil/rubah)
console.log(students[2]);
//merubah element array berdasarkan index
j[2] = false;
//menampilkan element terakhir di dalam array
console.log(j.length); //panjang array
console.log(students[students.length - 1]);

//Array Method
let array = [1, 2, 3, "Hello", false, true]
//1. to string() 0 merubah array menjadi string yg membatasi dengan koma
console.log(array.toString())
//2. Join()
console.log(array.join("-"));
console.log(array.join(" "));
console.log(array.join("#"));
//3. pop() - menghapus elemen terakhir
array.pop();
console.log(array);
//5. 
array.shift();
console.log(array);
//6. 
array.unshift("Selamat sore");
console.log(array);
//7. splice() - tambah hapus element di tengah
array.splice(3,0, 4);
console.log(array);
//8. slice() - ambill beberap dari aRRAY UNTUK SISTEM KE ARAH YANG BARU
let numbers = array.slice(1, )
console.log(numbers);
//9. concat() - menggabungkan array
let num1 = [1,2,3];
let num2 = [4,5,6];
let num3 = [7,8,9];
let combineNumbers = num1.concat(num2, num3)
console.log(combineNumbers
)


//2. Object - memiliki property & nilai
let LanObj = {
    fullName: "Lani Kalangie",
    age : "21",
    isActivity: true, 
    grade : [70,80, 100],
    city: "Minahasa Utara",
    address: {
        province: "Sulawesi Utara",
    },
    sayHello: function() {
        console.log("Hello my name is " + this.fullName);
    },
};

//Cara mengakses element dalam object
//Cara 1. Dot notation
console.log(LanObj.fullName);
console.log(LanObj.grade[1]);
console.log(LanObj.address.street);
LanObj.sayHello();
//Cara 2. Bracket notation
console.log(LanObj["fullName"]);
console.log(LanObj["grade"][1]);
console.log(LanObj["address"]["street"]);
LanObj["sayHello"]();

LanObj.job = "Programmer" //jika property tak ada maka akan di tambahkan\
delete LanObj.isActive; //hapus property
console.log(LanObj);