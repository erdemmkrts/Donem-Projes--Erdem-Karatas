//  Gece Modu Aktifleştirici
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

 
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerText = "Gündüz Modu";
  } else {
    toggleBtn.innerText = "Gece Modu";
  }
});

// Otomatik footer yılı
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("footerYil");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
