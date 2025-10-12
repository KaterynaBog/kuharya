document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".recipe-card");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("liked");
    });
  });
});

// --------------------- Вхід / Реєстрація ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const showRegister = document.getElementById("show-register");
  const showLogin = document.getElementById("show-login");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const title = document.getElementById("form-title");

  if (showRegister && showLogin && loginForm && registerForm && title) {
    showRegister.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.style.display = "none";
      registerForm.style.display = "block";
      title.textContent = "Реєстрація";
    });

    showLogin.addEventListener("click", (e) => {
      e.preventDefault();
      registerForm.style.display = "none";
      loginForm.style.display = "block";
      title.textContent = "Вхід";
    });
  }
});

