const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const roles = ['Python Full Stack Developer', 'AWS Cloud Trainee', 'Web Application Developer'];
const typing = document.querySelector('#typing');
let roleIndex = 0;
if (typing) {
  setInterval(() => {
    roleIndex = (roleIndex + 1) % roles.length;
    typing.classList.add('fade');
    setTimeout(() => {
      typing.textContent = roles[roleIndex];
      typing.classList.remove('fade');
    }, 180);
  }, 2600);
}

document.querySelector('#contactForm')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const data = new FormData(form);
  const name = String(data.get('name') || '').trim();
  const email = String(data.get('email') || '').trim();
  const subject = String(data.get('subject') || 'Portfolio enquiry').trim();
  const message = String(data.get('message') || '').trim();
  const body = `Name: ${name}%0AEmail: ${email}%0A%0A${encodeURIComponent(message)}`;
  const status = document.querySelector('#formStatus');
  status.textContent = 'Opening your email app…';
  window.location.href = `mailto:swathipalanisamy775@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
});
