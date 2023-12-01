import { clearPage, renderPageTitle } from '../../utils/render';
/* import Navigate from '../Router/Navigate' */

/* import Navbar from '../Navbar/Navbar'; */

/* import logo1 from '../../img/register.svg' */
/* import logo2 from '../../img/log.svg'; */

const loginpage = () => {
  clearPage();
  renderPageTitle('HOMEPAGE');
  loginpagefuntion();

  
};

function loginpagefuntion() {
  const login = `
   
  <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  

    `;
  const main = document.querySelector('main');
  main.innerHTML = login;
}



/*  
  <div class="containerlogin">
  <div class="forms-containerlogin">
    <div class="signin-signuplogin">
      <form action="#" class="sign-in-formlogin">
        <h2 class="titlelogin">Sign in</h2>
        <div class="input-fieldlogin">
          <i class="fas fa-userlogin"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div class="input-fieldlogin">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" value="Login" class="btnlogin solid" />
        <p class="social-textlogin">Or Sign in with social platforms</p>
        
        <div class="social-medialogin">
          <a href="#" class="social-iconlogin">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-iconlogin">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-iconlogin">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="social-iconlogin">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
      <form action="#" class="sign-up-formlogin">
        <h2 class="titlelogin">Sign up</h2>
        <div class="input-fieldlogin">
          <i class="fas fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div class="input-fieldlogin">
          <i class="fas fa-envelope"></i>
          <input type="email" placeholder="Email" />
        </div>
        <div class="input-fieldlogin">
          <i class="fas fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <input type="submit" class="btnlogin" value="Sign up" />
        <p class="social-textlogin">Or Sign up with social platforms</p>
        <div class="social-medialogin">
          <a href="#" class="social-iconlogin">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social-iconlogin">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="social-iconlogin">
            <i class="fab fa-google"></i>
          </a>
          <a href="#" class="social-iconlogin">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </form>
    </div>
  </div>

  <div class="panels-containerlogin">
    <div class="panel left-panel">
    
      <img src="${logo1}" class="imagelogin" alt="" />
    </div>
    <div class="panellogin right-panellogin">
    
      <img src="${logo2}" class="imagelogin" alt="" />
    </div>
  </div>
</div>
*/

/* <div class="panels-containerlogin">
    <div class="panellogin left-panellogin">
      <div class="content">
        <h3>New here ?</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
          ex ratione. Aliquid!
        </p>
        <button class="btn transparent" id="sign-up-btn">
          Sign up
        </button>
      </div>
      <img src="${logo1}" class="imagelogin" alt="" />
    </div>
    <div class="panellogin right-panellogin">
      <div class="content">
        <h3>One of us ?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam ad deleniti.
        </p>
        
      </div>
      <img src="${logo2}" class="imagelogin" alt="" />
    </div>
  </div>
</div>
*/


/*
function ad() {
// eslint-disable-next-line camelcase
const sign_in_btn = document.querySelector("#sign-in-btn");
// eslint-disable-next-line camelcase
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".containerlogin");

// eslint-disable-next-line camelcase
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

// eslint-disable-next-line camelcase
sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
};
*/

/*
function ad() {
  const signInBtn = document.querySelector('#sign-in-btn');
  const signUpBtn = document.querySelector('#sign-up-btn');
  const container = document.querySelector('.container');
  const loginBtn = document.querySelector('#loginButton');
  const registerBtn = document.querySelector('#registerButton')

  loginBtn.addEventListener('click', async (e) => {
    try {
      e.preventDefault();
      const emailField = document.querySelector('#emailField');
      const passwordField = document.querySelector('#passwordField');
      const alertDiv = document.querySelector("#alertL");

      if(!passwordField.value && !emailField.value){
        alertDiv.className ="alert alert-danger";
        alertDiv.innerHTML= "The e-mail adress & the password can't be empty";
        return;
      }
      if(!emailField.value){
        alertDiv.className ="alert alert-danger";
        alertDiv.innerHTML= "The e-mail adress can't be empty";
        return;
      }
      if(!passwordField.value){
        alertDiv.className ="alert alert-danger";
        alertDiv.innerHTML= "The password can't be empty";
        return;
      }
      
      const request = {
        method: 'POST',
        body: JSON.stringify(
          {
          email: emailField.value,
          password: passwordField.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        }
      };
        
      const response = await fetch(`api/members/login`, request);

      if(response.status !== 200){
        alertDiv.className ="alert alert-danger";
        alertDiv.innerHTML= 'Utilisateur inconnu';
      }
      if(response.status === 200){
        alertDiv.className ="alert alert-success";
        alertDiv.innerHTML= 'You are now connected';
        
      }
      const member = await response.json();
      window.localStorage.setItem('member', JSON.stringify(member));
      Navigate('/');
      Navbar();
    } catch (err) {
      console.error('LoginPage::error ', err);
    }
  });

  registerBtn.addEventListener('click', async (e) => {
    try {
      e.preventDefault();
      const firstnameField = document.querySelector('#firstnameFieldR');
      const lastnameField = document.querySelector('#lastnameFieldR');
      const phonenameField = document.querySelector('#phoneFieldR');
      const emailField = document.querySelector('#emailFieldR');
      const passwordField = document.querySelector('#passwordFieldR');
      const alertDiv = document.querySelector("#alertR");

      if(!passwordField.value || !emailField.value ||
         !firstnameField.value || !lastnameField.value || !phonenameField.value){
        alertDiv.className ="alert alert-danger";
        alertDiv.innerHTML= "Check that you've filled all the necessary informations";
        return;
      }
      
      const request = {
        method: 'POST',
        body: JSON.stringify({
          firstname: firstnameField.value,
          lastname: lastnameField.value,
          phone : phonenameField.value,
          email: emailField.value,
          password: passwordField.value,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      };
      const response = await fetch(`api/members/register`, request);

      if(response.status !== 200){
        alertDiv.className ="alert alert-danger";
        alertDiv.innerHTML= 'Utilisateur inconnu';
      }
      if(response.status === 200){
        alertDiv.className ="alert alert-success";
        alertDiv.innerHTML= 'You are now connected';
      }

      const member = await response.json();
      window.localStorage.setItem('member', JSON.stringify(member));
      Navigate('/');
      Navbar();
    } catch (err) {
      /* eslint no-console: ["error", { allow: ["error"] }] 
      console.error('LoginPage::error ', err);
    }
  });
  
  signUpBtn.addEventListener('click', () => {
    container.classList.add('sign-up-mode');
  });

  signInBtn.addEventListener('click', () => {
    container.classList.remove('sign-up-mode');
  });
}

*/;

export default loginpage;