const nama = ["A", "I", "U", "E", "O"];

nama.forEach( function(item, index, array) {
    console.log(item, index);
});

nama.push("X");

const namaOld = nama.slice();

nama.pop();

console.log(nama);

console.log(namaOld);