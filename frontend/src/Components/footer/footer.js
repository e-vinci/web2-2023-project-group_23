

const footerpage = () => {
    renderfooter();
}

function renderfooter() {
    const footertemplate = `
    <section class="footer">

        <div class="box-container">

            <div class="box" data-aos="fade-up">
                <h3 class="center-text">our branches</h3>
                <a href="#"> <i class="fas fa-map-marker-alt"></i>BELGIUM </a>
            </div>

            <div class="box" data-aos="fade-up">
                <h3 class="center-text">Quick Links</h3>
                <a href="/">Home</a>
            </div>

            <div class="box" data-aos="fade-up">
                <h3 class="center-text">contact info</h3>
                <a href="#"> <i class="fas fa-phone"></i>0492488970</a>
                <a href="mailto:muhammad.haziq@student.vinci.be"> <i class="fas fa-envelop"></i> muhammad.haziq@student.vinci.be</a>
                <a href="https://www.vinci.be/fr"> <i class="fas fa-map-marker-alt"></i>Pl. de l'Alma 3, 1200 Woluwe-Saint-Lambert</a>
            </div>

            <div class="box" data-aos="fade-up">
                <h3 class="center-text">follow us</h3>
                <a href="https://www.facebook.com/?locale=fr_FR"> <i class="fab fa-facebook-f"></i> facebook </a>
                <a href="https://twitter.com/?lang=fr"> <i class="fab fa-twitter"></i> twitter </a>
                <a href="https://www.instagram.com/"> <i class="fab fa-instagram"></i> instagram </a>
            </div>

        </div>

        <div class="credit">created by <span>VINCI EATS TEAM</span> | all rights reserved | <a href="/privaypolicy">Privacy Policy</a></div>


    </section>

    `;

    const footer = document.querySelector('footer');
    footer.innerHTML = footertemplate;

    
}


export default footerpage;