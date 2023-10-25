document.getElementById('osis-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah formulir mengirimkan permintaan langsung

    var selectedCandidate = document.querySelector('input[name="ketua"]:checked');
    if (selectedCandidate) {
        var ketua = selectedCandidate.value;

        // Kirim data vote ke server
        fetch('process_vote.php', {
            method: 'POST',
            body: JSON.stringify({ ketua: ketua }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('result').textContent = "Sukses memasukkan vote!";
            } else {
                document.getElementById('result').textContent = "Gagal memasukkan vote.";
            }
        });
    } else {
        alert("Pilih calon sebelum menekan tombol Vote.");
    }
});
