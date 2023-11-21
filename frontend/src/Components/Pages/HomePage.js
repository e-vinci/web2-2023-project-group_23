

const HomePage = () => {
  renderHomepage();
};

function renderHomepage() {
  const page = `
  <section class="home" id="home">

    <div class="image" data-aos="fade-down">
        <img src="https://cdn.vox-cdn.com/thumbor/8hZcUxUOBb4GV1JiDsz1USpT29w=/385x352:1561x1061/1200x800/filters:focal(831x620:1137x926)/cdn.vox-cdn.com/uploads/chorus_image/image/70609268/Burger_King_Plant_based_Double_Cheeezeburger.0.jpg" alt="">
    </div>

    <div class="content" data-aos="fade-up">
        <h3>Most Tasty Burger For You</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis explicabo eius inventore reprehenderit alias eos facilis, ipsa est asperiores repellendus!</p>
        <a href="#" class="btn">explore now</a>
    </div>

</section>

<!-- home section ends -->

<!-- filter form section starts  -->

<section class="form-container" data-aos="zoom-in">

    <form action="">

        <div class="inputBox">
            <span>where</span>
            <input type="text" placeholder="search places">
        </div>

        <div class="inputBox">
            <span>When</span>
            <input type="date">
        </div>

        <div class="inputBox">
            <span>Time</span>
            <input type="time">
        </div>

        <input type="submit" value="book now" class="btn">

    </form>

</section>


<!-- packages section starts  -->

<section class="packages" id="packages">

    <h1 class="heading"> our <span> MENUS </span> </h1>

    <div class="box-container">

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src="images/blog-1.jpg" alt="">
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src="images/blog-2.jpg" alt="">
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src="images/blog-3.jpg" alt="">
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src="images/blog-4.jpg" alt="">
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src="images/blog-5.jpg" alt="">
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

        <div class="box" data-aos="fade-up">
            <div class="image">
                <img src="images/blog-6.jpg" alt="">
                <h3> <i class="fas fa-utensils"></i> Burger </h3>
            </div>
            <div class="content">
                <div class="price"> 290.99 <span>350.99</span> </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, vitae.</p>
                <a href="#" class="btn"> Order now</a>
            </div>
        </div>

    </div>

</section>

<!-- packages section ends -->
`;


  const main = document.querySelector('main');
  main.innerHTML = page;

}


export default HomePage;
