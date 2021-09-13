const foo = 1;

function pilihBuah(nomor) {
    switch (nomor) {
        case 1:
        case 2:
            return "Salak";
            // return "Apel";
        case 3:
            return "Jeruk";
        case 4:
            return "Durian";
        
        default:
            return "Semangka";
    }
}

console.log(pilihBuah(2));