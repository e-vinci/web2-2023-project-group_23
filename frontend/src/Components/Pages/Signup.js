import { clearPage, renderPageTitle } from '../../utils/render';
import Navigate from '../Router/Navigate';
import usersignup from '../../models/users';
/* import Navigate from '../Router/Navigate' */

/* import Navbar from '../Navbar/Navbar'; */

/* import logo1 from '../../img/register.svg' */
/* import logo2 from '../../img/log.svg'; */

const signUpPage = () => {
  clearPage();
  renderPageTitle('SiginPAGE');
  Signuppagefuntion();
};

function Signuppagefuntion() {
  const Signup = `
  <section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up Form</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="username" class="form-control" placeholder="WILL BE USE TO SIGN IN "/>
                      <label class="form-label" for="form3Example1c">Your Username</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="mail" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
          
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="passeword" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="passeword" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-mobile fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input type="password" id="number" class="form-control" />
                    <label class="form-label" for="form3Example4cd">Your phone number</label>
                  </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                  <i class="fas fa-house fa-lg me-3 fa-fw"></i>
                  <div class="form-outline flex-fill mb-0">
                    <input type="password" id="adress" class="form-control" />
                    <label class="form-label" for="form3Example4cd">Street Number</label>
                  </div>
                  </div>

                  <div class="row mb-4">
                  
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="adress" class="form-control input-custom" />
                      <label class="form-label" for="form9Example3">City</label>
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-outline">
                      <input type="text" id="adress" class="form-control input-custom" />
                      <label class="form-label" for="form9Example4">Zip</label>
                    </div>
                  </div>
                </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                    
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                  <input type="submit" class="btn btn-primary" value="Sign-Up" />
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
  main.innerHTML = Signup;
  const myform = document.querySelector('form');
  const name =  document.querySelector('#username');
  const email = document.querySelector('#mail');
  const password = document.querySelector('#passeword');
  const phone = document.querySelector('#number');
  const adresse = document.querySelector('#adress');

  myform.addEventListener('submit', async(e)=> {
    e.preventDefault();
    const userTobeCreated = {
      name : name.value,
      email : email.value,
      password : password.value,
      phone : phone.value,
      adresse : adresse.value,

    };
    await(usersignup(userTobeCreated));
    Navigate('/');
  })
}





export default signUpPage ;