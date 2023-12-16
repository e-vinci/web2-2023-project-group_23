import { clearPage, renderPageTitle } from '../../utils/render';
import { getAuthenticatedUser } from '../../utils/auths';
import { getMenuByid } from '../../models/profils';
import { readcarteFromUsername} from '../../models/cart';

const CartPage = async () => {
  clearPage();
  renderPageTitle('Cart page');
  await renderCartPage();
};

async function renderCartPage() {
  const authenticatedUser = getAuthenticatedUser();
  const infoscart = await readcarteFromUsername(authenticatedUser.username);
  const cartItemsHTML = [];
  let prix = 0;

 
  if (infoscart.menuid && infoscart.menuid.length > 0) {
  
    await Promise.all(infoscart.menuid.map(async (menuId) => {
      const menu = await getMenuByid(menuId);

      // Utiliser chaque menuId pour générer le HTML de l'élément de panier
      const cartItemHTML = `
      <div class="row border p-3 mb-3">
  <div class="col-lg-3 col-md-12 mb-4 mb-lg-0 border-end">
    <!-- Image -->
    <div class="bg-image hover-overlay hover-zoom ripple rounded border" data-mdb-ripple-color="light">
      <img src="${menu.imagelink}" class="w-100" />
      <a href="#!">
        <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
      </a>
    </div>
    <!-- Image -->
  </div>

  <div class="col-lg-5 col-md-6 mb-4 mb-lg-0 border-end">
    <!-- Data -->
    <p class="mb-0"><strong>${menu.title}</strong></p>
    <p class="mb-0">${menu.type}</p>
    <p class="mb-0">${menu.description}</p>
    <!-- Data -->
  </div>

  <!-- Nouvelle colonne pour le prix et les boutons -->
  <div class="col-lg-4 text-md-end d-flex flex-column justify-content-between"> <!-- Ajout de flex-column et justify-content-between pour aligner les éléments -->
    <div class="text-center mb-2">
      <p class="mb-0 fs-5">Le prix :</p>
      <p class="text-start text-md-center mb-0">
        <strong>${menu.price} €</strong>
      </p>
    </div>
    <!-- Boutons -->
    <div class="d-flex justify-content-end">
      <button type="button" class="btn btn-primary btn-sm me-1" data-mdb-toggle="tooltip" title="Remove item">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    <!-- Fin des boutons -->
  </div>
  <!-- Fin de la nouvelle colonne pour le prix et les boutons -->
</div>
<!-- Single item -->
      `;
      prix = menu.price + prix;
      cartItemsHTML.push(cartItemHTML);

    }));
  } else {
    console.log('Aucun menu trouvé dans le panier.');
  }

  // Le HTML de tous les éléments de panier
  const cartItemsContainerHTML = cartItemsHTML.join('');
  const render = `
    <section class="h-100 gradient-custom">
      <div class="container py-5">
        <div class="row d-flex justify-content-center my-4">
          <div class="col-md-8">
            <div class="card mb-4">
              <div class="card-header py-3">
                <h5 class="mb-0">Cart - ${infoscart.menuid.length} items</h5>
              </div>
              <div class="card-body">
                ${cartItemsContainerHTML}
              </div>
            </div>

           
        <div class="card mb-4">
          <div class="card-body">
            <p><strong>Expected shipping delivery</strong></p>
            <p class="mb-0">12.10.2020 - 14.10.2020</p>
          </div>
        </div>
        <div class="card mb-4 mb-lg-0">
          <div class="card-body">
            <p><strong>We accept</strong></p>
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
            <img class="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
              alt="PayPal acceptance mark" />
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Summary</h5>
          </div>
          <div class="card-body">
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                Products
                <span>${prix}</span>
              </li>
              <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                Shipping
                <span>Gratis</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                <div>
                  <strong>Total amount</strong>
                  <strong>
                    <p class="mb-0">(including VAT)</p>
                  </strong>
                </div>
                <span><strong>${prix}</strong></span>
              </li>
            </ul>
            <a href="/payment"  class="btn btn-primary btn-lg btn-block">
            <button type="button">
              Go to checkout
            </button>
          </a>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
          `;
  
  const main = document.querySelector("main");
  main.innerHTML = render;
  
  };

 
  
  export default CartPage;
  