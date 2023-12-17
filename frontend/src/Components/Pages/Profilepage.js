import { clearPage, renderPageTitle } from '../../utils/render';
import { getAuthenticatedUser } from '../../utils/auths';

import {userinformation, getMenuByid} from '../../models/profils';

const profilepage = () => {
    clearPage();
    renderPageTitle('Profile Page ');
    Profilepagefuntion()
    
}

async function Profilepagefuntion() {
  const authenticatedUser = getAuthenticatedUser();
  const infos = await userinformation(authenticatedUser.username);

  
    let profile = `
    <div class="containerpanier p-5 px-5 py-5 ">
    <h1> My Profil </h1> <br> 
      <div class="row">
        <div class="col-lg-4">
        <div class="card mb-4">
            <div class="card-body text-center">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                class="rounded-circle img-fluid" style="width: 150px;">
                <h5 class="my-3"  display-4>${infos.username}</h5>
                <p class="text-muted mb-4 lead">STUDENT</p>
                
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
          <p class="mb-0 h4 font-weight-bold">Username:</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0 h5">${infos.username}</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0 h4 font-weight-bold">Email:</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0 h5">${infos.email}</p>
        </div>
      </div>
      <hr>
  
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0 h4 font-weight-bold">Phone:</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0 h5">${infos.phone}</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-3">
          <p class="mb-0 h4 font-weight-bold">Address:</p>
        </div>
        <div class="col-sm-9">
          <p class="text-muted mb-0 h5">${infos.adresse}</p>
        </div>
      </div>
    </div>
  </div>
  `;
  if(infos.menuslIKE >= 1 ){
    const menuinfos = await getMenuByid(infos.menuslIKE);
    if (menuinfos) {
    profile += `
  <section class="packages" id="packages">
  <h1 class="heading"> Your <span>  favourite Menu </span> </h1>
  <div class="box-container">
  <div class="box" data-aos="fade-up">
          <div class="image">
          <a href= "/productpage?id=${menuinfos.id}">
              <img src="${menuinfos.imagelink}" alt="">
              <h3> <i class="fas fa-utensils"></i> ${menuinfos.type} </h3>
          </div>
          <div class="content">
          <h1>  ${menuinfos.title}</h1>
              <div class="price"> ${menuinfos.price} €    </span> </div>
              <p>${menuinfos.description} </p>
          
              </a>
          </div>
      </div>
      </div>
    </section>

    `}else{
      profile += `<p>No favorite menu found.</p>`;
    }
  }
    const main = document.querySelector('main');
    if (main) {
        main.innerHTML = profile;
    } else {
        console.error('Main element not found');
    }
}



  


export default profilepage;

