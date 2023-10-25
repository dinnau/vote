<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["ketua"])) {
    // Ambil nilai yang dipilih dari formulir
    $ketua = $_POST["ketua"];

    // Koneksi ke database (gantilah dengan pengaturan database yang sesuai)
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $database = "vote_osis";

    $conn = new mysqli($servername, $username, $password, $database);

    // Periksa koneksi database
    if ($conn->connect_error) {
        die("Koneksi database gagal: " . $conn->connect_error);
    }

    // Periksa apakah calon yang dipilih adalah "Calon 1" atau "Calon 2"
    if ($ketua === "Calon 1" || $ketua === "Calon 2") {
        // Lakukan penyimpanan hasil vote ke dalam tabel hasil_vote
        $sql = "INSERT INTO hasil_vote (calon1, calon2) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);

        if ($stmt) {
            $calon1_vote = 0;
            $calon2_vote = 0;

            if ($ketua === "Calon 1") {
                $calon1_vote = 1;
            } else {
                $calon2_vote = 1;
            }

            $stmt->bind_param("ii", $calon1_vote, $calon2_vote);

            if ($stmt->execute()) {
                echo "Sukses memasukkan data vote ke database.";
            } else {
                echo "Gagal memasukkan data vote ke database: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Gagal menyiapkan pernyataan SQL: " . $conn->error;
        }
    } else {
        echo "Pilihan ketua tidak valid.";
    }

    $conn->close();
}
?>
