document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("footerYil");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  