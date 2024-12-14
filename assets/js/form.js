document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Mencegah pengiriman default formulir

    // SweetAlert Konfirmasi
    Swal.fire({
      title: "Apakah Anda yakin?",
      text: "Pesan Anda akan dikirim!",
      icon: "info",
      showCancelButton: true,
      confirmButtonText: "Ya, kirim!",
      cancelButtonText: "Batal",
    }).then((result) => {
      if (result.isConfirmed) {
        // Tampilkan pesan sukses
        Swal.fire("Berhasil!", "Pesan Anda telah berhasil dikirim.", "success");

        // Reset form setelah submit
        document.getElementById("contact-form").reset();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        // Tampilkan pesan dibatalkan
        Swal.fire("Dibatalkan", "Pesan Anda tidak jadi dikirim.", "error");
      }
    });
  });
