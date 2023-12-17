import { clearPage, renderPageTitle } from '../../utils/render';
 import Navigate from '../Router/Navigate'; 

 import Navbar from '../Navbar/Navbar'; 
 import { setAuthenticatedUser } from '../../utils/auths';




const signInPage = () => {
  clearPage();
  renderPageTitle('Sign-in');
  SignInpagefuntion();
  ad();
};

function SignInpagefuntion() {
  const signIn = `
  <section class="vh-1" style="background-color: ##FFFFFF;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">
        <div class="card" style="border-radius: 1rem;">
          <div class="row g-0">
            <div class="col-md-6 col-lg-5 d-none d-md-block">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                alt="login form" class="img-fluid" style="border-radius: 1rem 0 0 1rem;" />
            </div>
            <div class="col-md-6 col-lg-7 d-flex align-items-center">
              <div class="card-body p-4 p-lg-5 text-black">

                <form >

                  <div class="d-flex align-items-center mb-3 pb-1">
                  
                    <i class="far fa-address-card fa-5x me-3" style="color: #ff6219;"></i>
                    <span class="h1 fw-bold mb-0">VINCI EATS</span>
                  </div>

                  <h5 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign into your account</h5>

                  <div class="form-outline mb-4">
                    <input type="text" id="username" class="form-control form-control-lg" style="text-transform: none;" />
                    <label class="form-label" for="username">Username</label>
                  </div>

                  <div class="form-outline mb-4">
                      <input type="password" id="password" class="form-control form-control-lg" style="text-transform: none;" />
                      <label class="form-label" for="password">Password</label>
                  </div>


                  <div class="pt-1 mb-4">
                  <input type="submit" id="signINButton" class="btn" value="Sign IN" />
                  </div>
                  <div id="errorContainer" class="alert alert-danger" role="alert"></div>


                      <p class="mb-5 pb-lg-2" style="color: #393f81;">
                          <span style="font-size: 18px;">Don't have an account? </span>
                         <a class="nav-link" href="/signuppage" data-uri="/signuppage" style="color: #ff0000; font-weight: bold; font-size: 18px;">Register here</a>
                      </p>
                  <a href="/privaypolicy" class="small text-muted">Privacy policy</a>
                </form>
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
  main.innerHTML = signIn;

}

function ad (){
  const signInBtn = document.querySelector('#signINButton')
  const errorContainer = document.querySelector('#errorContainer');
  signInBtn.addEventListener('click', async(e)=>{
    e.preventDefault();
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value; 


    // Réinitialiser les erreurs précédentes
    errorContainer.innerHTML = '';
    errorContainer.style.display = 'none';

    const missingFields = [];
    if (!username) missingFields.push('Username');
    if (!password) missingFields.push('Password');


    if (missingFields.length > 0) {
      // Construire le message d'erreur
      const errorMessage = `Veuillez remplir les champs suivants : ${missingFields.join(', ')}.`;

      // Afficher le message d'erreur dans l'élément approprié
      errorContainer.innerHTML = errorMessage;
      errorContainer.style.display = 'block'; // Afficher le conteneur d'erreur

      return;
    }
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
  
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch('/api/auths/login', options);
    if (!response.ok) {
      // Si la réponse n'est pas OK, afficher un message d'erreur
      errorContainer.innerHTML = 'Username or Password Incorrect';
      errorContainer.style.display = 'block';
      return;
    }
  const authenticatedUser = await response.json();
  console.log('Newly registered & authenticated user : ', authenticatedUser);

  setAuthenticatedUser(authenticatedUser);

  Navbar();
  
  Navigate('/');
  
  })
}

export default signInPage;