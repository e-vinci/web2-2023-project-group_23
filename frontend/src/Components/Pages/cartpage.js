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

 
  if (infoscart.menuid && infoscart.menuid.length > 0) {
  
    await Promise.all(infoscart.menuid.map(async (menuId) => {
      const menu = await getMenuByid(menuId);

      // Utiliser chaque menuId pour générer le HTML de l'élément de panier
      const cartItemHTML = `
        <!-- Single item -->
        <div class="row">
          <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <!-- Image -->
            <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
              <img src="${menu.imagelink}" class="w-100" />
              <a href="#!">
                <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
              </a>
            </div>
            <!-- Image -->
          </div>

          <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <!-- Data -->
            <p><strong>${menu.title}</strong></p>
            <p>${menu.type}</p>
            <p>${menu.description}</p>
            <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip" title="Remove item">
              <i class="fas fa-trash"></i>
            </button>
            <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip" title="Move to the wish list">
              <i class="fas fa-heart"></i>
            </button>
            <!-- Data -->
          </div>

          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <!-- Quantity -->
            <div class="d-flex mb-4" style="max-width: 300px">
              <button class="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
              </button>

              <div class="form-outline">
                <input id="form1" min="0" name="quantity" value="1" type="number" class="form-control" />
                <label class="form-label" for="form1">Quantity</label>
              </div>

              <button class="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <!-- Quantity -->

            <!-- Price -->
            <p class="text-start text-md-center">
              <strong>${menu.price} €</strong>
            </p>
            <!-- Price -->
          </div>
        </div>
        <!-- Single item -->
      `;

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
                <span>$53.98</span>
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
                <span><strong>$53.98</strong></span>
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
  