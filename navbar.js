// navbar.js

// Function to generate the navigation bar
function generateNavbar() {
  var navbar = document.createElement('nav');
  navbar.setAttribute('id', 'navbar');
  
  navbar.innerHTML = `
  <div id='logo-line'>
    <div id="logo">
      <img src="img/logo2.png" alt="WeAssureSecurity.com" />
    </div>
    <div class="vertical-line"></div>
    <div class="logo-text">
      <h3>WE ASSURE SECURITY</h3>
    </div>
    <ul>
      <li class="item"><a href="index.html">Home</a></li>
      <li class="item"><a href="#services-container">Services</a></li>
      <li class="item"><a href="careers.html">Careers</a></li>
      <li class="item"><a href="#contact">Contact Us</a></li>
    </ul>
    </div>
  `;
  document.body.insertBefore(navbar, document.body.firstChild);
}

// Call the generateNavbar function when the DOM is loaded
document.addEventListener('DOMContentLoaded', generateNavbar);
var favicon = document.createElement('link');
  favicon.rel = 'icon';
  favicon.type = 'image/png';
  favicon.href = 'img/logo.png';
  document.head.appendChild(favicon);
