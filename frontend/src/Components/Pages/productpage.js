
import {getMenuByid, addOnemenutofavourites} from '../../models/profils';

import { isAuthenticated, getAuthenticatedUser } from '../../utils/auths';
import Navigate from '../Router/Navigate';
import { addtopanier } from '../../models/cart';


const ProductPage = () => {
  renderProductPage(); 
};


async function renderProductPage() {
    const rating = generateRandomRating();
    const starsHTML = generateStarRating(rating);
    const urlParams = new URLSearchParams(window.location.search);
    const menuId = urlParams.get('id');

    // Récupérer les détails du menu par ID
  const menuDetails = await getMenuByid(menuId);

  const render = `
  <section style="background-color: #eee;">
      <div class="container py-5">
          <div class="row">
              <div class="d-flex flex-row">
                  <div class="flex-grow-1 me-3" style="flex-basis: 0;"> <!-- Section Image avec marge à droite -->
                      <img src="${menuDetails.imagelink}"
                          style="width: 100%; height: auto; max-height: 600px; border-radius: 15px;" alt="" />
                  </div>
                  <div class="flex-grow-1" style="flex-basis: 0;"> <!-- Section Info -->
                      <div class="card h-100" style="border-radius: 15px;">
                          <div class="card-body d-flex flex-column">
                              <h3 style="font-size: 5em;">${menuDetails.title}</h3>
                              <p class="small text-muted" style="font-size: 3em;">TYPE : ${menuDetails.type}</p>
                              <div class="ratings mb-2">
                              ${starsHTML}
                                  <p class="small text-muted" style="font-size: 2em;">Rated ${rating} / 5 </p>
                              </div>
                              <p style="font-size: 2em;">${menuDetails.description}</p>
                              <p class="price" style="font-size: 3em;">PRICE : ${menuDetails.price} €</p>
                    
                              <div class="mt-auto">
                          
                                  <button type="button" id= 'cartbutton' data-menuid="${menuDetails.id}" class="btn btn-warning">Add to Cart</button>
                                  ${
                                    isAuthenticated()
                                      ? `<button type="submit" id="likeme" data-menuid="${menuDetails.id}" class="btn favorite"><i class="fas fa-heart"></i></button>`
                                      : ''
                                  }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  `;

  const main = document.querySelector("main");
  main.innerHTML = render;
  const likeButton = document.getElementById('likeme');
    if (likeButton) {
    likeButton.addEventListener('click', async () => {
      const menuIdentity = likeButton.getAttribute('data-menuid');
      const user = getAuthenticatedUser.username;
      const result = await addOnemenutofavourites(user, menuIdentity);
      Navigate('/profilepage');
      // Faites quelque chose avec le résultat si nécessaire
      console.log(result);
    });
   
  }
  setupAddToCartButton();
  };


function generateRandomRating() {
    const randomRating = (Math.random() * (5 - 3) + 3).toFixed(1);
    return randomRating;
  }

function generateStarRating(rating) {
    const maxStars = 5;
    const starsHTML = [];
  
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        starsHTML.push('<i class="fas fa-star fa-2x"></i>'); 
      } else if (i - 1 < rating) {
        starsHTML.push('<i class="fas fa-star-half-alt fa-2x"></i>'); 
      } else {
        starsHTML.push('<i class="far fa-star fa-2x"></i>'); 
      }
    }
  
    return starsHTML.join('');
  }

  function setupAddToCartButton() {
    const cartButton = document.getElementById('cartbutton'); 
    if (cartButton) {
      cartButton.addEventListener('click', () => {
        handleAddToCartClick(cartButton);
      });
    }
  }
  
  async function handleAddToCartClick(cartButton) {
    // Vérifier si l'utilisateur est connecté
    if (!isAuthenticated()) {
      // Afficher un message demandant à l'utilisateur de se connecter
      alert('Veuillez vous connecter pour effectuer votre panier.');
    } else {
      const menuId = cartButton.getAttribute('data-menuid');
      const user = getAuthenticatedUser().username;
      const result = await addtopanier(user, menuId);
      console.log(result);
      Navigate('/cart')
      
    }
  }



export default ProductPage;
