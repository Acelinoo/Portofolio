const contactForm = document.getElementById("contact");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const url = e.target.action;
  const formData = new FormData(contactForm);

  fetch(url, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  })
    .then(() => {
      window.location.href = "/pages/thankyou.html";
    })
    .catch((e) => alert("Error"));
});

// Alert ketika tombol "Send Message" ditekan
function send() {
  alert("Pesan telah terkirim");
}
