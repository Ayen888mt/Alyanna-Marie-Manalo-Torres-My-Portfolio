// Function para mag-toggle sa pagitan ng Light Mode at Dark Mode
function toggleTheme() {
  const body = document.getElementById('bodyTag');
  const themeIcon = document.getElementById('themeIcon');

  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    themeIcon.className = 'fa-solid fa-sun';
  } else {
    themeIcon.className = 'fa-solid fa-moon';
  }
}

// Function para sa Contact Form submission alert
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    contactForm.reset();
  });
}