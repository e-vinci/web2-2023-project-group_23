const footerpage = () => {
    renderfooter();
}

function renderfooter() {
    const footertemplate = `
    <section class="footer">

    <div class="box-container">

        <div class="box" data-aos="fade-up">
            <h3>our branches</h3>
            <a href="#"> <i class="fas fa-map-marker-alt"></i>BELGIUM </a>
           
        </div>

        <div class="box" data-aos="fade-up">
            <h3>quick links</h3>
            <a href="#"> <i class="fas fa-chevron-right"></i> home </a>
            <a href="#"> <i class="fas fa-chevron-right"></i> packages </a>
            <a href="#"> <i class="fas fa-chevron-right"></i> services </a>
            <a href="#"> <i class="fas fa-chevron-right"></i> pricing </a>
            <a href="#"> <i class="fas fa-chevron-right"></i> review </a>
            <a href="#"> <i class="fas fa-chevron-right"></i> contact </a>
            <a href="#"> <i class="fas fa-chevron-right"></i> blogs </a>
        </div>

        <div class="box" data-aos="fade-up">
            <h3>contact info</h3>
            <a href="#"> <i class="fas fa-phone"></i>0492488970</a>
            <a href="#"> <i class="fas fa-envelop"></i> muhammad.haziq@student.vinci.be</a>
            <a href="https://www.vinci.be/fr"> <i class="fas fa-map-marker-alt"></i>Pl. de l'Alma 3, 1200 Woluwe-Saint-Lambert</a>
        </div>

        <div class="box" data-aos="fade-up">
            <h3>follow us</h3>
            <a href="https://www.facebook.com/?locale=fr_FR"> <i class="fab fa-facebook-f"></i> facebook </a>
            <a href="#"> <i class="fab fa-twitter"></i> twitter </a>
            <a href="#"> <i class="fab fa-instagram"></i> instagram </a>
        
        </div>

    </div>

    <div class="credit"> creadet by <span> VINCI EATS TEAM </span> | all rights reserved </div>

</section>
   
    `;

    const footer = document.querySelector('footer');
    footer.innerHTML = footertemplate;

    
}


export default footerpage;