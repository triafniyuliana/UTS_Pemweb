function submitkomentar() {
    var komentar = document.getElementById("komentar").value;
    if (komentar.trim() === "") {
        alert("Komentar tidak boleh kosong.");
    } else {
        console.log("Komentar: " + komentar);
        document.getElementById("komentar").value = "";
        alert("Komentar Anda telah terkirim!");
    }
}
