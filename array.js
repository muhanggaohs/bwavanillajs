const nama = ["A", "I", "U", "E", "O"];

// nama.forEach( function(item, index, array) {
//     console.log(item, index);
// });

nama.push("X");

const namaOld = nama.slice();

nama.pop();

// console.log("nama", nama);

// console.log("namaOld", namaOld);  

// for (let index = 0; index < nama.length; index++){
//     const element = nama[index];
//     console.log(element);
// }

// let index = 0;
// while (index < nama.length) {
//     const element = nama[index];
//     console.log(element);
//     index++;
// }

console.log(
    nama.filter( function(namaa, ke) {
       return namaa == "A" 
    })
    .map( function(namaa, ke) {
        return `${namaa} ini ke ${ke+1}`;
    })
);