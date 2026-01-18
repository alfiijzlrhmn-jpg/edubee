function cekJawaban() {
  let jawaban = prompt("Masukkan jawaban:");

  if (jawaban.toLowerCase() === "continuously variable transmission") {
    document.getElementById("hasil").innerText = "Benar ✅";
  } else {
    document.getElementById("hasil").innerText = "Salah ❌";
  }
}