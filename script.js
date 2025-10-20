// script.js — simple interactivity + form validation
document.addEventListener('DOMContentLoaded', function (){
  // Simple navigation active link highlight (based on URL)
  const links = document.querySelectorAll('.nav a');
  links.forEach(a => {
    if(location.pathname.endsWith(a.getAttribute('href'))) a.classList.add('active');
  });

  // Contact form browser-only validation & UX
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const msg = form.message.value.trim();
      const status = document.getElementById('formStatus');

      if(name.length < 2){
        status.textContent = 'Please enter your name (min 2 characters).'; status.style.color='crimson'; return;
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        status.textContent = 'Please enter a valid email address.'; status.style.color='crimson'; return;
      }
      if(msg.length < 10){
        status.textContent = 'Message should be at least 10 characters.'; status.style.color='crimson'; return;
      }

      // Simulate a successful local-only submission (no backend)
      status.style.color = ''; // reset to CSS color
      status.textContent = 'Thanks — your message looks good! (This site does not send data.)';
      form.reset();
    });
  }
});