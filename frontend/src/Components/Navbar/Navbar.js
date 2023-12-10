// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  renderNavbar();
  navbartip();
};
 

function renderNavbar() {
  const navbarshow = `
  <header class="header">

    <a href="#" data-uri="/" class="logo"> <i class="fas fa-utensils"></i> VINCI EATS </a>

    <form action="" class="search-form">
        <input type="search" name="" placeholder="search here..." id="searchBox">
        <label for="searchBox" class="fas fa-searchheader"></label>
    </form>

    
    <div class="icons">
        <div class="fas fa-search" id="search-btn"></div>
        
        
        
        <div class="fa-solid fa-envelope" href="#" data-uri="/contactpage" id="theme-btn"></div>
        
        <div class="fa-solid fa-person" href="#" data-uri="/profilepage" id="profil-btn"></div>
        <div class="fa-solid fa-cart-shopping"" href="#" data-uri="/cart" id="theme-btn"></div>
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

  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.innerHTML = navbarshow;
}

function navbartip() {
  const navbar = document.querySelector('.navbar');
  const searchForm = document.querySelector('.search-form');
  const menuBtn = document.querySelector('#menu-btn');

  menuBtn.onclick = () => {
      navbar.classList.toggle('active');
      searchForm.classList.remove('active');
  }

  document.querySelector('#search-btn').onclick = () => {
      searchForm.classList.toggle('active');
      navbar.classList.remove('active');
  }

  window.onscroll = () => {
      navbar.classList.remove('active');
      searchForm.classList.remove('active');
  }

  document.addEventListener('click', (event) => {
      const isClickInsideNavbar = navbar.contains(event.target);
      const isClickInsideSearchForm = searchForm.contains(event.target);
      const isClickInsideMenuBtn = menuBtn.contains(event.target);

      
      if (!isClickInsideNavbar && !isClickInsideSearchForm && !isClickInsideMenuBtn) {
          navbar.classList.remove('active');
          searchForm.classList.remove('active');
      }
  });
}

 
export default Navbar;


