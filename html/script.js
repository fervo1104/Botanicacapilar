document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('navMenu');
  const overlay = document.getElementById('overlay');

  if (toggle && nav && overlay) {
    function closeMenu() {
      nav.classList.remove('open');
      overlay.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      overlay.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    overlay.addEventListener('click', closeMenu);

    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
});


function sendMail() {

    let params = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("email").value,
        telefono: document.getElementById("telefono").value,
        comentario: document.getElementById("mensaje").value
    };

    console.log("Datos enviados:", params);

    emailjs.send(
        "valefervale",
        "gzay89y",
        params
    )
    .then(function (response) {
        console.log("Éxito:", response);
        alert("Mensaje enviado correctamente.");
        contactForm.reset();
    })
    .catch(function (error) {
        console.error("Error completo:", error);
        alert("Error: " + error.text);
    });

}