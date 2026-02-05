//  theme toggle button

const themeToggle = document.getElementById('theme-toggle');

const currentTheme = localStorage.getItem('theme') || 'light';

document.documentElement.setAttribute('data-theme', currentTheme);

function toggleTheme() {
    const theme = document.documentElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);

    themeToggle.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleTheme();
        }
    });
}

// form validation and feedback code

const form = document.querySelector("form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (firstName === "" || lastName === "" || email === "") {
    message.textContent = "⚠️ Please fill in all fields.";
    message.style.color = "red";
    return;
  }

  if (!email.includes("@")) {
    message.textContent = "⚠️ Please enter a valid email address.";
    message.style.color = "red";
    return;
  }

  message.textContent = "✅ Thank you! Your details have been submitted.";
  message.style.color = "lightgreen";
  form.reset();
});

//  dark or light mode doesnt change after refreshin the page

const toggleBtn = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode") ? "dark" : "light"
  );
});
