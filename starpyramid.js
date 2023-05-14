// piramid bintang menggunakan looping for...of
let star_for_of = ""; // inisialisasi variabel star_for_of dan string kosong sebagai nilai awal (untuk baris)
for (let char of "*".repeat(6)) // pengulangan untuk karakter pada string (*)
{
    star_for_of += char; // nambahin "*" ke dalam string kosong pada variabel star_for_of
    console.log(star_for_of); // menampilkan output variabel star_for_of
}

// new line
console.log();

// piramid bintang menggunakan standard for
for (let i = 1; i <= 6; i++) // perulangan sebanyak 6 kali
{
    let star_standard = ""; // inisialisasi variabel star_standard dan string kosong sebagai nilai awal (untuk baris)
    for (let j = 1; j <= i; j++) // perulangan untuk variabel j dan berhenti sampai sebanyak i
    {
        star_standard += "*"; // nambahin "*" ke dalam string kosong pada variabel star_standard
    }
    console.log(star_standard); // menampilkan output variabel star_standard
}

// new line
console.log();

// piramid bintang menggunakan
let i = 1; // inisialisasi variabel i dengan nilai 1
while (i <= 6) // perulangan selama nilai i <= 6
{
    let star_while = ''; // inisialisasi variabel star_while dan string kosong sebagai nilai awal (untuk baris)
    let j = 1; // inisialisasi variabel j dengan nilai 1

    while (j <= i) // perulangan selama nilai j <= i
    {
        star_while += '*'; // ambahin "*" ke dalam string kosong pada variabel star_while
        j++; // nambah 1 pada variabel j
    }
    console.log(star_while); // menampilkan output variabel star_while
    i++; // nambah 1 pada variabel i
}