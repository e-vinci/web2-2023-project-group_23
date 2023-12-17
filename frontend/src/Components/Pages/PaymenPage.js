import Navigate from '../Router/Navigate';
import {deleteCart} from '../../models/cart';
import {getAuthenticatedUser } from '../../utils/auths';

const user = getAuthenticatedUser.username;

const PaymentPage = ()=>{
    renderpaymentPage(); 
    
  };
  
  function renderpaymentPage(){
const render = `
<section>
  <div class="row d-flex justify-content-center">
    <div class="col-md-10 col-lg-8 col-xl-5">
      <div class="card rounded-3">
        <div class="card-body p-4">
          <div class="text-center mb-4">
        
            <h1>Payment</h1>
          </div>
          <form action="">
            <p class="fw-bold mb-4 pb-2">ENTER YOUR CARD INFORMATIONS :</p>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid" src="https://img.icons8.com/color/48/000000/mastercard-logo.png" />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="text" id="formControlLgXc" class="form-control form-control-lg"
                  placeholder="**** **** **** 3193" />
                  <label class="form-label" for="formControlLgXc">Card Number</label>
                </div>
              </div>
        
            </div>

            <div class="d-flex flex-row align-items-center mb-4 pb-1">
              <img class="img-fluid" src="https://img.icons8.com/color/48/000000/visa.png" />
              <div class="flex-fill mx-3">
                <div class="form-outline">
                  <input type="text" id="formControlLgXs" class="form-control form-control-lg"
                  placeholder="**** **** **** 3193" />
                  <label class="form-label" for="formControlLgXs">Card Number</label>
                </div>
              </div>

            </div>

    
            <div class="form-outline mb-4">
              <input type="text" id="formControlLgXsd" class="form-control form-control-lg"
              placeholder="Your name" />
              <label class="form-label" for="formControlLgXsd">Cardholder's Name</label>
            </div>

            
              <div class="col-3">
                <div class="form-outline">
                  <input type="password" id="formControlLgExpk" class="form-control form-control-lg"
                    placeholder="MM/YYYY" />
                  <label class="form-label" for="formControlLgExpk">Expire</label>
                </div>
              </div>
              <div class="col-2">
                <div class="form-outline">
                  <input type="password" id="formControlLgcvv" class="form-control form-control-lg"
                    placeholder="Cvv" />
                  <label class="form-label" for="formControlLgcvv">Cvv</label>
                </div>
              </div>
            </div>

            <button id="paymentButton"class="btn btn-success btn-lg btn-block">PAY</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
          `;
  
  const main = document.querySelector("main");
  main.innerHTML = render;
  setupPaymentButton();
  
  };

  function setupPaymentButton() {
    const paymentButton = document.getElementById('paymentButton');
    if (paymentButton) {
      paymentButton.addEventListener('click', handlePaymentButtonClick);
    }
  }
  
  async function handlePaymentButtonClick() {
    const cardNumberInput1 = document.getElementById('formControlLgXc');
    const cardNumberInput2 = document.getElementById('formControlLgXs');
    const cardholderNameInput = document.getElementById('formControlLgXsd');
    const expireInput = document.getElementById('formControlLgExpk');
    const cvvInput = document.getElementById('formControlLgcvv');
    if (
      (!cardNumberInput1.value && !cardNumberInput2.value) ||
      !cardholderNameInput.value ||
      !expireInput.value ||
      !cvvInput.value
    ) {
      alert('Please fill in at least one credit card field and all other required fields.');
      return;
    }
    // Appel de la fonction deleteCart
    await deleteCart(user);
    Navigate('/animation'); 
  }
  
  export default PaymentPage;
  