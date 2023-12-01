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
      
        <div class="fa-solid fa-address-book" href="#" data-uri="/contactpage" id="theme-btn"></div>
        <div class="fa-solid fa-house" href="#" data-uri="/" id="theme-btn"></div>
        <div class="fas fa-user" href="#" data-uri="/signinpage" id="login-btn"></div>
 
       
     
        
        
</a>
        <div class="fas fa-bars" id="menu-btn"></div>
    </div>


    <nav class="navbar">
      <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
      <a class="nav-link" href="#" data-uri="/loginpage">Login Page</a>
      <a class="nav-link" href="#" data-uri="/profilepage">Profile Page</a>
      
      
        <a href="#home">home</a>
        <a href="#packages">packages</a>
        <a href="#services">services</a>
        <a href="#pricing">pricing</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
        <a href="#blogs">blogs</a>
    </nav>
     
</header>
  `;

  const navbarWrapper = document.querySelector('#navbarWrapper');
  navbarWrapper.innerHTML = navbarshow;
}

function navbartip(){

  const navbar = document.querySelector('.navbar')
  const searchForm = document.querySelector('.search-form');

  document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}
 



document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
 
}

window.onscroll = () =>{
    navbar.classList.remove('active');

    searchForm.classList.remove('active');
}
 
}

 
export default Navbar;


 /* <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Add your brand here</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#" data-uri="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/game">Game</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" data-uri="/new">New Page</a>
              </li>   
              
              <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/loginpage">Login Page</a>
            </li> 

            <li class="nav-item">
              <a class="nav-link" href="#" data-uri="/contactpage">Contact Page</a>
            </li> 

            </ul>
          </div>
        </div>
      </nav>
      */