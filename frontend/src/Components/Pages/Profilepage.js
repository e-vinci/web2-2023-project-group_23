import { clearPage, renderPageTitle } from '../../utils/render';

const profilepage = () => {
    clearPage();
    renderPageTitle('Profile Page ');
    Profilepagefuntion()
    
  
}
function Profilepagefuntion() {
    const profile = `
    <div class="containerpanier p-5 px-5 py-5 ">
    <h1> My Profil </h1> <br> 
      <div class="row">
        <div class="col-lg-4">
        <div class="card mb-4">
            <div class="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                class="rounded-circle img-fluid" style="width: 150px;">
                <h5 class="my-3" >MUHMMAD HAZIQ</h5>
                <p class="text-muted mb-1">STUDENT</p>
                <p class="text-muted mb-4">BRUXELLES</p>
                
            </div>
            </div>
            <div class="card mb-4 mb-lg-0">
              <div class="card-body p-0">
                <ul class="list-group list-group-flush rounded-3">
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fas fa-globe fa-lg text-warning"></i>
                    <p class="mb-0"></p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                    <p class="mb-0">@</p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                    <p class="mb-0"></p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                    <p class="mb-0"></p>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                    <p class="mb-0"></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Full Name</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"></p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Email</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"></p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">TOTALS MENUS CREATED </p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"></p>
                </div>
              </div>
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">TOTALS MENUS COMMANDER </p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"></p>
                </div>
              </div>
               <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Phone</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"></p>
                </div>
              </div>
              
              <hr>
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">adresse</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0"> </p>
                </div>
              </div>
            </div>
          </div>

        <section class="packages" id="packages">
          <h1 class="heading"> YOUR FAVOURITES <span> Menus </span> </h1>
          <div class="box-container">
          <div class="box" data-aos="fade-up">
          <div class="image">
              <img src="" alt="">
              <h3> <i class="fas fa-utensils"></i> </h3>
          </div>
          <div class="content">
          <h1>  </h1>
              <div class="price"> $ <span>350.99</span> </div>
              <p> </p>
              <a href="#" class="btn"> Order now</a>
          </div>
          
      </div>
      </div>
      </section>

    `;

    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = profile;
    } else {
        console.error('Main element not found');
    }
}
  


export default profilepage;

