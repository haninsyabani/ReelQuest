// Toggle Navbar (untuk tampilan mobile)
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }
});

// Smooth Scroll saat klik menu
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }

        // Tutup menu di mobile setelah klik
        document.querySelector(".nav-links").classList.remove("active");
    });
});

// Notifikasi ketika film terbaru diklik
const filmTerbaru = document.querySelector(".film-item");
if (filmTerbaru) {
    filmTerbaru.addEventListener("click", function () {
        alert("Film terbaru telah dipilih! Cek deskripsinya untuk info lebih lanjut.");
    });
}

// Efek hover di daftar Top 5 Film
document.querySelectorAll(".top-film li").forEach(item => {
    item.addEventListener("mouseover", function () {
        this.style.backgroundColor = "#f5c518";
        this.style.color = "#121212";
        this.style.fontWeight = "bold";
    });

    item.addEventListener("mouseleave", function () {
        this.style.backgroundColor = "#222";
        this.style.color = "#fff";
        this.style.fontWeight = "normal";
    });
});
