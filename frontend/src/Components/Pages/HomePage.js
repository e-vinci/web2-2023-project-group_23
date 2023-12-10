import logomain from '../../img/vinci-eats.png';
import delivryboy from '../../img/delivery-icon.svg';
import delivryboy2 from '../../img/delivery-guy-2.svg';
import meatimage from '../../img/meat-icon.svg';
import carlogo from '../../img/car-icon.svg'
import phonelogo from '../../img/phone-icon.svg';
import dollarimage from '../../img/dollar-icon.svg'
import mobileimage from '../../img/mobile.png';
import apple from '../../img/app-store.png';
import android from '../../img/google-play.png';
import securityicon from '../../img/security-icon.svg';

import readAllMenus from '../../models/menus';


/* BURGERS IMAGES */


const HomePage = async () => {
  
  let page = `
  <section class="home" id="home">

    <div class="image" data-aos="fade-down">
    <img src="${logomain}" href="#" data-uri="/" alt="">
    </div>


    <div class="content" data-aos="fade-up">
        <h3>Most tasty FOODS FOR YOU </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo eius inventore reprehenderit alias eos facilis, ipsa est asperiores repellendus!</p>
        <a href="#packages" class="btn">explore now</a>
    </div>

</section>

<!-- home section ends -->

<!-- filter form section starts  -->

<section class="form-container" data-aos="zoom-in">

    <form action="">

        <div class="inputBox">
            <span>where</span>
            <input type="text" id ="location" placeholder="search places">
        </div>

        <div class="inputBox">
            <span>When</span>
            <input type="date">
        </div>

        <div class="inputBox">
            <span>Time</span>
            <input type="time">
        </div>
        <div class="inputBox">
            <span>Menu</span>
            <input type="number">
        </div>

        <input type="submit" value="book now" class="btn">

    </form>
  

</section>


<!-- packages section starts  -->

<section class="packages" id="packages">
    <h1 class="heading"> our <span> Menus </span> </h1>
    <div class="box-container">
    `
  
    const infos = await readAllMenus();
    const items = infos;
    items.forEach(element => {
    const number = numberrandom();

      page += ` 
      
       
      <div class="box" data-aos="fade-up">
      
          <div class="image">
          <a href= "">
              <img src="${element.imagelink}" alt="">
              <h3> <i class="fas fa-utensils"></i> ${element.type} </h3>
          </div>
          <div class="content">
          <h1>  ${element.title}</h1>
              <div class="price"> ${element.price} €  <span>${number}€  </span> </div>
              <p>${element.description} </p>
              <a href="#" class="btn"> Order now</a>
              </a>
          </div>
         
      </div>
     
     ` 
    });

    page +=
    
    `
    </div>
    </section>
    <section class="section services" id="services">
      <div class="row container">
        <div class="col">
          <h2>Why we are Best in our Twon</h2>
          
        </div>
        <div class="col">
          <div class="card">
            <img src="${meatimage}" alt="" />
            <h3>
              Choose <br />
              your favorite <br />
              food
            </h3>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="${delivryboy}" alt="" />
            <h3>
              Get delivery <br />
              at your door <br />
              step
            </h3>
          </div>
        </div>
        
        <div class="col">
          <div class="card">
            <img src="${phonelogo}" alt="" />
            <h3>
              We have <br />
              400+ Review <br />
              On our app
            </h3>
          </div>
        </div>
      </div>
    </section>



    <section class="section about" id="about">
    <div class="row container">
      <div class="col">
        <img src="${delivryboy2}" alt="" />
      </div>
      <div class="col">
        <h1>Take a look at the benefits we offer for you</h1>
        
        <div class="d-grid">
          <div class="card">
            <img src="${carlogo}" alt="" />
            <h4>Free Home Delivary</h4>
            <span>For all orders over $50</span>
          </div>
          <div class="card">
            <img src="${dollarimage}" alt="" />
            <h4>Return & Refund</h4>
            <span>Money Back Guarantee</span>
          </div>

          <div class="card">
            <img src=${securityicon} alt="" />
            <h4>Secure Payment</h4>
            <span>100% Secure Payment</span>
          </div>
          
          <div class="card">
          <img src=${securityicon} alt="" />
          <h4>Secure Payment</h4>
          <span>100% Secure Payment</span>
        </div>
          
        </div>
      </div>
    </div>
  </section>



  <section class="section app">
  <div class="row container">
    <div class="col">
      <div class="circle">
        <div class="inner-circle"></div>
        <img src="${mobileimage}" alt="" />
      </div>
    </div>
    <div class="col">
      <h2>
        Never Feel Hungry! Download Our Mobile App Order Delicious Food
      </h2>
      <p>
        Online ordering has enabled many restaurants to manage their peak
        business hours very effectively.
      </p>
      <div class="d-flex">
        <img src="${apple}" alt="" />
        <img src="${android}" alt="" />
      </div>
    </div>
    
  </div>
</section>
<!-- packages section ends -->
`;
 

  const main = document.querySelector('main');
  main.innerHTML = page;

}

function numberrandom(){
  const nombre = Math.floor(Math.random() * 10) + 20;
  return nombre;
}

export default HomePage;
