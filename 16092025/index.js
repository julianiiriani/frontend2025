// String Literal, Arrow Function, Default Parameter
//__________________________________________________

//1. String Literal
//ada kaitan dengan string contanination
//contoh 1.
let fullName = "Juliani Kalangie";
let age = 21;
let address = "Langowan"
//Hello, my name is Juliani kalangie, i am 21 years old and i live in Langowan
//mis ----------
let kalimat = "Hello, my name is " + fullName + ", i am " + age + "old and i am live at " + address;
console.log(kalimat);
//masalahnya adalah ketiga ini kalo pake contanination, ubah otomatis ubah jadi string. Age tipe number, kasih masuk di dalam kalimat
// age akan di convert pada string, coding perlu logic, expresif
//mis cara 2 ----------
let kalimat2 = `Hello, my name is ${fullName}, i am ${age} years old, and i live at ${address}`
//string di bungkus pakai ''(backtick) ada miring sedikit beda dengan single quotes
//kalau di atas di convert pakai string, kalau di kalimat2 itu tidak

//_______________________
//2. Arrow Function
//merupakan bentuk lain dalam menulis function
function sayGreetings(fullName) {
    return `Hi, my name is ${fullName}`;
}
console.log(sayGreetings("Juliani Kalangie"))
//caranya kalau ubah bentuk, tidak ada pengaruh, cuma ubah cara penulisan saja.
const sayGreetings2 = (fullName) => {
    return `Hi, my name is ${fullName}`;
}
console.log(sayGreetings("Juliani Kalangie"))
//ini yang namanya arrow function. Function isi cuma 1 baris dan baris tersebut di return
//saygreetings2 return, secara implicit, return, tidak perlu capek-capek ketik.
//kalau gunakan arrow function pada IIFE ---------
let output1 = (function(){
    return `Hello`;
})();
console.log(output1);
let output2 = (() => `Hello`)();
console.log(output2);
//arrow function pada callback -------------------
let numbers = [1, 2, 3, 4, 5];
//coba motif, tambah 2 masing-masing
let output3 = numbers.map((item) => item + 2); //jagonya di sini, karena lebih pendek
console.log(output3);

//_______________________
//3. Default Paramater
const sayGreetings3 = (fullName, age, address) =>
    `Hello, my name is ${fullName}, i am ${age} old and i am live at ${address}`; 
console.log(sayGreetings3());
//malah jadi undefined. What we do is, buat kondisi
const sayGreetings4 = (fullName, age, address) => {
    if(fullName === undefined) {
        fullName = "Julia"
    }
    if(age === undefined) {
        age = "21"
    }
    if(address === undefined) {
        address = "Julia"
    }
    return `Hello, my name is ${fullName}, i am ${age} old and i am live at ${address}`;
};
console.log(sayGreetings4());
//cara baru
const sayGreetings5 = (fullName = "Juliani", age = 30, address = "Langowan") =>
    `Hello, my name is ${fullName}, i am ${age} old and i am live at ${address}`;
console.log(sayGreetings5());

//_______________________
//Mini excercise
//Dengan menggunakan arrow function cari index negara Taiwan
//clue menggunakan: findIndex()
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
let output = countries.findIndex((item)) ==> item === "Italy");
console.log(output);