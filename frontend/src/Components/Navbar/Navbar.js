// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import { getAuthenticatedUser, isAuthenticated } from '../../utils/auths';
import {userinformation} from '../../models/profils';



/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
  
};
 

async function renderNavbar() {
  const authenticatedUser = getAuthenticatedUser();
   // Add a null check for authenticatedUser
   


  const anonymousUserNavbar = `
  <header class="header">
  <a href="#" data-uri="/" class="logo"> <i class="fas fa-utensils"></i> VINCI EATS </a>
  <div class="icons">
  
      <div class="fas fa-user" href="#" data-uri="/signinpage" id="login-btn"></div>
      <div class="fa-solid fa-house" href="#" data-uri="/" id="theme-btn"></div>
  </a>
      <div class="fas fa-bars" id="menu-btn"></div>
  </div>

  <nav class="navbar">
    <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
    <a class="nav-link" href="#" data-uri="/signinpage">Login Page</a>
    <a class="nav-link" href="#" data-uri="/signuppage">Signup</a>
  </nav>

</header>

  `;
 let authenticatedUserNavbar = `

 <header class="header">

    <a href="#" data-uri="/" class="logo"> <i class="fas fa-utensils"></i> VINCI EATS </a>
    <div class="icons">
  
        <div class="fa-solid fa-envelope" href="#" data-uri="/contactpage" id="theme-btn"></div>
        <div class="fa-solid fa-person" href="#" data-uri="/profilepage" id="profil-btn"></div>
        <div class="fa-solid fa-cart-shopping"" href="#" data-uri="/cart" id="theme-btn"></div>
        <div class="fa-solid fa-house" href="#" data-uri="/" id="theme-btn"></div>
        <div class="fa-sharp fa-regular fa-right-from-bracket" href="#" data-uri="/logout" id="theme-btn"></div>
    </a>
        <div class="fas fa-bars" id="menu-btn"></div>
    </div>

    <nav class="navbar"
      
    <p style="font-size: 15px;">CONNECTÉ EN TANT QUE : ${authenticatedUser?.username}</p>
  `;
  if (authenticatedUser) {
  const infos = await userinformation(authenticatedUser.username);
  if(infos.isAdmin === true){
    authenticatedUserNavbar += `
      <a class="nav-link" aria-current="page" href="#" data-uri="/adminpage">View menu</a>
      <a class="nav-link" aria-current="page" href="#" data-uri="/addmenu">Add a menu </a>
      <a class="nav-link" aria-current="page" href="#" data-uri="">SEE ORDERS</a>`
  };
};
  authenticatedUserNavbar += `
    </nav>
</header>
  `;
  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.innerHTML = isAuthenticated() ? authenticatedUserNavbar : anonymousUserNavbar;
  navbartip();
}

// ...
function navbartip() {
  const navbar = document.querySelector('.navbar');
  const menuBtn = document.querySelector('#menu-btn');

  if (navbar && menuBtn) {
    menuBtn.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    window.onscroll = () => {
      navbar.classList.remove('active');
    }

    document.addEventListener('click', (event) => {
      const isClickInsideNavbar = navbar.contains(event.target);
      const isClickInsideMenuBtn = menuBtn.contains(event.target);

      if (!isClickInsideNavbar && !isClickInsideMenuBtn) {
        navbar.classList.remove('active');
      }
    });
  }
}


// ...


 
export default Navbar;


