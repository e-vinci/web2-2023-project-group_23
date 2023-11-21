

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
`;
</section>`;

  const main = document.querySelector('main');
  main.innerHTML = page;

}


export default HomePage;
