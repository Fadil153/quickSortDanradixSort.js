//TUGAS1
function quickSort(arr){
    // Jika array memiliki panjang 0 atau 1, maka sudah terurut
 if(arr.length <= 1){
     return arr;
 }
  // Pilih poros angka (dalam contoh ini, elemen terakhir yang diambilnya)
 const porosAngka = arr[arr.length-1];
 // buat Variabel untuk menampung array untuk menyimpan elemen-elemen yang lebih kecil dan lebih besar dari porosAngka
 const arrayKiri = [];
 const arrayKanan = [];
 // Loop melalui semua elemen kecuali porosAngka
 for (let i = 0; i < arr.length-1; i++){
     if(arr[i] < porosAngka){
          // Jika elemen lebih kecil dari porosAngka, tambahkan ke Variabel arrayKiri
         arrayKiri.push(arr[i]);
     } else {
          // Jika elemen lebih besar dari porosAngka, tambahkan ke Variabel arrayKanan
         arrayKanan.push(arr[i]);
     }
 }
 // kemudian kita panggil kembali functionnya (Rekursif) untuk bagian arrayKiri dan arrayKanan, lalu gabungkan dengan porosAngka
 return [...quickSort(arrayKiri), porosAngka, ...quickSort(arrayKanan)]
}
//Contoh Penggunaan
const array = [10, 8, 9, 5, 6, 3];
const totalArray = quickSort(array);
console.log("Array yang diurutkan :", totalArray);

//TUGAS 2
// Fungsi untuk menemukan elemen terbesar dalam array
function getMax(arr) {
 return Math.max(...arr); // Menggunakan spread operator untuk mencari maksimum
}

// Fungsi Counting Sort untuk digit tertentu
function countingSort(arr, exp) {
 const n = arr.length;
 const output = new Array(n).fill(0); // Array untuk menyimpan hasil sementara
 const count = new Array(10).fill(0); // Array untuk menghitung kemunculan digit (0-9)

 // Hitung jumlah kemunculan digit tertentu
 for (let i = 0; i < n; i++) {
   const digit = Math.floor(arr[i] / exp) % 10; // Ambil digit sesuai ekspansi (satuan, puluhan, dan ratusan)
   count[digit]++;
 }

 // Modifikasi count[] sehingga setiap nilai menyimpan posisi akhir digit
 for (let i = 1; i < 10; i++) {
   count[i] += count[i - 1];
 }

 // Bangun array output berdasarkan urutan digit
 for (let i = n - 1; i >= 0; i--) { // Iterasi dari belakang untuk menjaga stabilitas
   const digit = Math.floor(arr[i] / exp) % 10;
   output[count[digit] - 1] = arr[i];
   count[digit]--;
 }

 // Salin array output ke array asli
 for (let i = 0; i < n; i++) {
   arr[i] = output[i];
 }
}

// Fungsi utama Radix Sort
function radixSort(arr) {
 // Temukan elemen maksimum dalam array
 const max = getMax(arr);

 // Lakukan counting sort untuk setiap digit
 for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
   countingSort(arr, exp);
 }

 return arr;
}

// Contoh Penggunaan
const array2 = [170, 45, 75, 90, 802, 24, 2, 66];
const urutanArray = radixSort(array2);

console.log("Array asli:", array);
console.log("Array yang diurutkan:", urutanArray);
