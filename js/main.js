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
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // --------------------- Додавання нового елемента в кінець main ---------------------
  const mainElement = document.querySelector("main");
  if (mainElement && !mainElement.classList.contains("about") && !mainElement.classList.contains("contacts") && !mainElement.classList.contains("account-page") && !mainElement.classList.contains("recipe-page") && !mainElement.classList.contains("login-page")) {
    const newSection = document.createElement("section");
    newSection.style.padding = "40px";
    newSection.style.textAlign = "center";
    newSection.style.marginTop = "30px";
    newSection.style.borderRadius = "12px";
    
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "🍳 Дякуємо за відвідування! Надіємося, ви знайшли щось смачне для себе. Приходьте ще!";
    newParagraph.style.fontSize = "18px";
    newParagraph.style.color = "#bd2c2c";
    newParagraph.style.fontWeight = "bold";
    newParagraph.style.margin = "0";
    
    newSection.appendChild(newParagraph);
    mainElement.appendChild(newSection);
  }
    // --------------------- Поточна дата ---------------------
    const footerEl = document.querySelector('footer');
    if (footerEl && !footerEl.querySelector('.site-date')) {
      const now = new Date();
      const dateStr = now.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' });
      const dateSpan = document.createElement('span');
      dateSpan.className = 'site-date';
      dateSpan.textContent = `Дата: ${dateStr}`;
      footerEl.appendChild(dateSpan);
    }

    // --------------------- Акордеон ---------------------
    const aboutMain = document.querySelector('main.about');
    if (aboutMain && !aboutMain.querySelector('.accordion')) {
      const accWrap = document.createElement('div');
      accWrap.className = 'accordion';

      const btn = document.createElement('button');
      btn.className = 'accordion-toggle';
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = 'Показати більше';

      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.innerHTML = "<p>Кухарія — це спільнота, де ми ділимося традиційними рецептами, порадами з приготування та історіями, пов'язаними з їжею. Приєднуйтесь та надсилайте свої рецепти!</p>";

      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        content.classList.toggle('open');
        btn.textContent = expanded ? 'Показати більше' : 'Приховати';
      });

      accWrap.appendChild(btn);
      accWrap.appendChild(content);

      // Розмістити акордеон під основним вмістом about-content
      const aboutContent = aboutMain.querySelector('.about-content');
      if (aboutContent) {
        aboutContent.appendChild(accWrap);
      } else {
        aboutMain.appendChild(accWrap);
      }
    }
  });