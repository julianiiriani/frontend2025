//Asynchronous JavaScript

//Synchronous -> single thread -> blocking
// console.log("Proses 1");
// console.log("Proses 2");
// console.log("Proses 3"); //Proses yg memakan waktu yg lama
// console.log("Proses 4");

//Asynchronous -> multi thread -> non blocking
//1. Parallel
// setTimeout(() => {
//   console.log("Proses 1");
// }, 4000);
// setTimeout(() => {
//   console.log("Proses 2");
// }, 2000);
// setTimeout(() => {
//   console.log("Proses 3");
// }, 5000);
// setTimeout(() => {
//   console.log("Proses 4");
// }, 1000);

//2. Concurrent
// setTimeout(() => {
//   console.log("Proses 1");
//   setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//       console.log("Proses 3");
//       setTimeout(() => {
//         console.log("Proses 4");
//         setTimeout(() => {
//           console.log("Proses 5");
//           setTimeout(() => {
//             console.log("Proses 6");
//             setTimeout(() => {
//               console.log("Proses 7");
//             }, 4000);
//           }, 4000);
//         }, 4000);
//       }, 4000);
//     }, 4000);
//   }, 4000);
// }, 4000);

//Promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Berhasil");
  } else {
    reject("Gagal");
  }
});

//Cara menggunakan Promise
//1. then - catch
// newPromise
//   .then((result) => `${result} !!!`) //Proses 1
//   .then((result2) => console.log(result2)) //Proses 2
//   .catch((error) => console.log(error));

//2. async/await
//Buat didalam fungsi

// const getData = async () => {
//   try {
//     const result = await newPromise;
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();

//Get data dari API menggunakan fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((result) => result.json())
//   .then((json) => console.log(json));

// //Mini Exercise
// //Ubah then-catch diatas dengan menggunakan async/await
// //dan tampilkan field name saja

// const getUsers = async () => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/users"); //Proses 1
//   const json = await result.json(); //Proses 2
//   json.forEach(({ name }) => console.log(name));
// };
// getUsers();