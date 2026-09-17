const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
  let items = document.querySelectorAll('.item')
  document.querySelector('.slide').prepend(items[items.length - 1])
})

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = async (e) => {
  e.preventDefault();

  try {
    await emailjs.sendForm('service_v9o89oh', 'template_bc8gq6n', '#contact-form', 'Sy43nA7DMkZzK8ctf');
    contactMessage.textContent = 'Message sent successfully';
    contactForm.reset();
  } catch (error) {
    console.error('EmailJS error:', error);
    contactMessage.textContent = 'Message not sent (service error)';
  } finally {
    setTimeout(() => contactMessage.textContent = '', 5000);
  }
};

contactForm.addEventListener('submit', sendEmail);
