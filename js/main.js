 
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

  // --------------------- Бургер меню ---------------------
  const burger = document.getElementById("burger");
  const nav = document.querySelector("nav");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("active");
      nav.classList.toggle("active");
    });
  }

  // --------------------- Новий елемент у main ---------------------
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

  // --------------------- Дата у футері ---------------------
  const footerEl = document.querySelector('footer');
  if (footerEl && !footerEl.querySelector('.site-date')) {
    const now = new Date();
    const dateStr = now.toLocaleDateString('uk-UA', { year: 'numeric', month: 'long', day: 'numeric' });
    const dateSpan = document.createElement('span');
    dateSpan.className = 'site-date';
    dateSpan.textContent = `Дата: ${dateStr}`;
    footerEl.appendChild(dateSpan);
  }

  // --------------------- Акордеон (Сторінка About) ---------------------
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
    content.innerHTML = "<p>Кухарія — це спільнота, де ми ділимося традиційними рецептами, порадами з приготування та історіями, пов'язаними з їжею.</p>";

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      content.classList.toggle('open');
      btn.textContent = expanded ? 'Показати більше' : 'Приховати';
    });

    accWrap.appendChild(btn);
    accWrap.appendChild(content);

    const aboutContent = aboutMain.querySelector('.about-content');
    if (aboutContent) {
      aboutContent.appendChild(accWrap);
    } else {
      aboutMain.appendChild(accWrap);
    }
  }
// --------------------- Контактна форма ---------------------
  const form = document.getElementById('contact-form');
  if (form) {
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const messageInput = form.querySelector('#message');

    const nameError = form.querySelector('#name-error');
    const emailError = form.querySelector('#email-error');
    const messageError = form.querySelector('#message-error');

    const successBox = document.getElementById('form-success');
    const outputBox = document.getElementById('form-output');

    function clearErrors() {
      [nameInput, emailInput, messageInput].forEach((input) => {
        if (input) input.classList.remove('input-error');
      });

      [nameError, emailError, messageError].forEach((el) => {
        if (el) el.textContent = '';
      });

      if (successBox) {
        successBox.textContent = '';
        successBox.classList.remove('visible');
      }
    }

    function isValidEmail(value) {
      return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value);
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // блокуємо стандартну відправку
      clearErrors();

      let isValid = true;

      const nameValue = nameInput ? nameInput.value.trim() : '';
      const emailValue = emailInput ? emailInput.value.trim() : '';
      const messageValue = messageInput ? messageInput.value.trim() : '';

      // Ім'я ≥ 3 символи
      if (nameInput && nameValue.length < 3) {
        isValid = false;
        nameInput.classList.add('input-error');
        if (nameError) {
          nameError.textContent = "Ім'я має містити мінімум 3 символи.";
        }
      }

      // Email
      if (emailInput && !isValidEmail(emailValue)) {
        isValid = false;
        emailInput.classList.add('input-error');
        if (emailError) {
          emailError.textContent = 'Введіть коректний email (має містити @ і домен).';
        }
      }

      // Повідомлення ≥ 10 символів
      if (messageInput && messageValue.length < 10) {
        isValid = false;
        messageInput.classList.add('input-error');
        if (messageError) {
          messageError.textContent = 'Повідомлення має містити не менше 10 символів.';
        }
      }

      // Вивід даних
      console.log('--- Дані форми ---');
      console.log("Ім'я:", nameValue);
      console.log('Email:', emailValue);
      console.log('Повідомлення:', messageValue);

      if (outputBox) {
        outputBox.innerHTML = `
          <p><strong>Ім'я:</strong> ${nameValue || '-'} </p>
          <p><strong>Email:</strong> ${emailValue || '-'} </p>
          <p><strong>Повідомлення:</strong> ${messageValue || '-'} </p>
        `;
      }

      // Якщо все пройшло
      if (isValid) {
        form.reset();
        if (successBox) {
          successBox.textContent = 'Форма успішно надіслана!';
          successBox.classList.add('visible');
        }
      }
    });
  }
  
  // підсвітка навігації
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach(link => {
      link.addEventListener("mouseenter", () => {
          link.classList.add("nav-hover");
      });

      link.addEventListener("mouseleave", () => {
          link.classList.remove("nav-hover");
      });
  });

  // зміна розміру шрифту (ArrowUp / ArrowDown)
  
   let fontSize = 16; // початковий розмір у пікселях

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
        e.preventDefault(); // запобігання прокрутці сторінки

        if (e.key === "ArrowUp") {
            fontSize += 2;
        } else if (e.key === "ArrowDown") {
            fontSize -= 2;
            if (fontSize < 10) fontSize = 10; // обмеження мінімального розміру
        }

        
        document.documentElement.style.fontSize = fontSize + "px";
        
        console.log("Новий базовий шрифт:", fontSize + "px");
    }
 });

 // кнопка зміни теми 
const themeBtn = document.createElement('button');
themeBtn.id = 'theme-toggle';
themeBtn.innerHTML = '🌙';


themeBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: none;
    background: #bd2c2c;
    color: white;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, background 0.3s;
`;

// ефект при наведенні
themeBtn.onmouseover = () => themeBtn.style.transform = 'scale(1.1)';
themeBtn.onmouseleave = () => themeBtn.style.transform = 'scale(1)';

document.body.appendChild(themeBtn);

// Завантаження збереженої теми з localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeBtn.innerHTML = '☀️';
    themeBtn.style.background = '#f1c40f';
    themeBtn.style.color = '#333';
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    
    // Збереження теми в localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    themeBtn.innerHTML = isDark ? '☀️' : '🌙';
    themeBtn.style.background = isDark ? '#f1c40f' : '#bd2c2c';
    themeBtn.style.color = isDark ? '#333' : '#fff';
});
});
