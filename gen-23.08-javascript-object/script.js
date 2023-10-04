// Membuat array of objects
const data = [
    { nama: 'John', usia: 30, kota: 'New York' },
    { nama: 'Alice', usia: 25, kota: 'Los Angeles' },
    { nama: 'Bob', usia: 35, kota: 'Chicago' },
    { nama: 'Eva', usia: 28, kota: 'Los Angeles' }
];

// Filter data berdasarkan properti 'kota'
const kotaYangDicari = 'Los Angeles';
const hasilFilter = data.filter(function (obj) {
    return obj.kota === kotaYangDicari;
});

// Tampilkan hasilnya di console
console.log('Hasil filter berdasarkan kota:', hasilFilter);

// Membuat array of objects
const presiden = [
    { nama: 'Soekarno', tahun: 1945 },
    { nama: 'Soeharto', tahun: 1967 },
    { nama: 'BJ Habibie', tahun: 1998 },
    { nama: 'Gus Dur', tahun: 1999 },
    { nama: 'Megawati', tahun: 2001 },
    { nama: 'SBY', tahun: 2004 },
    { nama: 'Jokowi', tahun: 2014 }
];

// Filter presiden berdasarkan tahun awal menjabat
const tahunYangDicari = 1998;
const presidenMenjabatPadaTahun = presiden.filter(function (presiden) {
    return presiden.tahun === tahunYangDicari;
});

// Tampilkan hasilnya di console
// console.log('Presiden yang menjabat pada tahun', tahunYangDicari, ':', presidenMenjabatPadaTahun);

if (presidenMenjabatPadaTahun.length == 0) {
    console.log('Tidak ada presiden yang menjabat dimulai pada tahun', tahunYangDicari);
} else {
    console.log('Presiden yang menjabat dimulai pada tahun', tahunYangDicari, ':', presidenMenjabatPadaTahun);
}


// tahunYangDicari adalah variabel yang berisi tahun yang digunakan sebagai kriteria pencarian.
// Nilai dari variabel ini akan dimasukkan ke dalam pesan untuk menampilkan tahun yang dicari.

// ':' adalah string teks yang digunakan untuk memisahkan antara tahun yang dicari dengan daftar
//  presiden yang sesuai dengan tahun tersebut.

// presidenMenjabatPadaTahun adalah variabel yang berisi hasil dari filter berdasarkan tahun menjabat.
// Hasil ini adalah array objek-objek buku yang sesuai dengan tahun yang dicari.