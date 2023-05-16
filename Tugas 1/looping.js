// perulangan untuk menampilkan angka 1 - 10
for (let i = 1; i <= 10; i++)
{
    console.log(i); // output
}

console.log(); // hanya untuk new line :D

// perulangan untuk menampilkan angka 1 - 10 dan menentukan angka ganjil dan genap
for (let i = 1; i <= 10; i++)
{
    // jika angka adalah genap
    if (i % 2 === 0)
    {
        console.log(i + " Bilangan Genap");
    }
    // jika angka adalah ganjil
    else if (i % 2 === 1)
    {
        console.log(i + " Bilangan Ganjil");
    }
}