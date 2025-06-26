// ========== DARK MODE TOGGLE ==========
const toggle = document.getElementById('themeToggle');

// Cek apakah user pernah pilih dark mode sebelumnya
const userPref = localStorage.getItem('theme');
if (userPref === 'dark') {
  document.body.classList.add('dark-mode');
}

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Simpan preferensi user ke localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// ========== ANIMASI HOVER UNTUK TOMBOL RESUME ==========
const resumeBtn = document.querySelector('.resume-btn');
if (resumeBtn) {
  resumeBtn.addEventListener('mouseover', () => {
    resumeBtn.style.transform = 'scale(1.05)';
  });
  resumeBtn.addEventListener('mouseout', () => {
    resumeBtn.style.transform = 'scale(1)';
  });
}
