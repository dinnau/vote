document.addEventListener("DOMContentLoaded", function() {
    const siswaForm = document.getElementById("siswa-form");

    siswaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Ambil nilai dari input dan elemen lainnya
        const nama = document.getElementById("nama").value;
        const nisn = document.getElementById("nisn").value;
        const kelas = document.getElementById("kelas").value;
        const alamat = document.getElementById("alamat").value;
        const jenisKelamin = document.getElementById("jenis-kelamin").value;

        // Lakukan sesuatu dengan data siswa, misalnya tampilkan atau kirim ke server
        console.log("Data Siswa:");
        console.log("Nama: " + nama);
        console.log("NISN: " + nisn);
        console.log("Kelas: " + kelas);
        console.log("Alamat: " + alamat);
        console.log("Jenis Kelamin: " + jenisKelamin);

        // Reset formulir
        siswaForm.reset();

        submitButton.addEventListener("click", function() {
            if (selectedKetua) {
                result.textContent = `Terima kasih atas suara Anda! Anda memilih ${selectedKetua} sebagai Ketua OSIS.`;
    
                // Mengarahkan pengguna ke halaman lain setelah memilih
                window.location.href = "data_siswa.html"; // Ganti "hasil.html" dengan URL halaman hasil pemilihan
            } else {
                result.textContent = "Silakan pilih calon Ketua OSIS terlebih dahulu.";
            }
        });
    });
});
