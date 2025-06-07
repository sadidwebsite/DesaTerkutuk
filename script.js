document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    // Toggle navigation menu on hamburger click
    hamburger.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close navigation menu when a link is clicked (for smooth scrolling)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function () {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // ===============================================
    // Fungsionalitas Pop-up untuk Unduhan Mac
    // ===============================================
    const downloadMacBtn = document.getElementById('downloadMacBtn');
    const macUnavailableModal = document.getElementById('macUnavailableModal');
    const closeButtons = macUnavailableModal.querySelectorAll('.close-button, .close-modal-btn');

    // Fungsi untuk menampilkan modal
    function showModal() {
        macUnavailableModal.classList.add('active');
        // Optional: tambahkan class untuk animasi masuk
        macUnavailableModal.querySelector('.modal-content').style.animation = 'fadeIn 0.3s ease-out';
    }

    // Fungsi untuk menyembunyikan modal
    function hideModal() {
        macUnavailableModal.querySelector('.modal-content').style.animation = 'fadeOut 0.3s ease-in forwards';
        // Tunggu animasi selesai sebelum menyembunyikan display
        setTimeout(() => {
            macUnavailableModal.classList.remove('active');
        }, 300); // Sesuaikan dengan durasi animasi fadeOut
    }

    // Ketika tombol "Unduh untuk Mac" diklik
    if (downloadMacBtn) { // Pastikan elemen ada
        downloadMacBtn.addEventListener('click', function (e) {
            e.preventDefault(); // Mencegah default behaviour (misal: scroll ke atas jika href="#")
            showModal();
        });
    }

    // Ketika tombol close (X atau Oke) di dalam modal diklik
    closeButtons.forEach(button => {
        button.addEventListener('click', hideModal);
    });

    // Ketika pengguna mengklik di luar area modal (di latar belakang gelap)
    if (macUnavailableModal) {
        macUnavailableModal.addEventListener('click', function (e) {
            if (e.target === macUnavailableModal) { // Hanya jika klik langsung di latar belakang modal
                hideModal();
            }
        });
    }

    // Opsional: Tutup modal dengan tombol ESC
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && macUnavailableModal.classList.contains('active')) {
            hideModal();
        }
    });

});