const ProductPage = () => {
  renderProductPage(); 
};

function renderProductPage() {
  const render = `
  <section style="background-color: #eee;">
      <div class="container py-5">
          <div class="row">
              <div class="d-flex flex-row">
                  <div class="flex-grow-1 me-3" style="flex-basis: 0;"> <!-- Section Image avec marge à droite -->
                      <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                          style="width: 100%; height: auto; max-height: 600px; border-radius: 15px;" alt="Laptop" />
                  </div>
                  <div class="flex-grow-1" style="flex-basis: 0;"> <!-- Section Info -->
                      <div class="card h-100" style="border-radius: 15px;">
                          <div class="card-body d-flex flex-column">
                              <h3 style="font-size: 2em;">Dell Xtreme 270</h3>
                              <p class="small text-muted" style="font-size: 1.5em;">Laptops</p>
                              <div class="ratings mb-2">
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <i class="fas fa-star"></i>
                                  <p class="small text-muted" style="font-size: 1.5em;">Rated 4.0/5</p>
                              </div>
                              <p style="font-size: 1.7em;">Le Gentleman Du Burger Saura T´Ouvrir L´Appétit. 
                              Composé D´Un Steak Frais De Race, D´Oignons Caramélisés, De Tomate, De Salade, 
                              De Cornichons, De Cheddar Et De Son Appétissante Sauce Classic.</p>
                              <p class="price" style="font-size: 2em;">$3,999</p>
                              <p class="small text-muted" style="font-size: 1.5em;">VISA Platinum</p>
                              <div class="mt-auto">
                                  <button type="button" class="btn btn-secondary">Cancel</button>
                                  <button type="button" class="btn btn-primary">Add to Cart</button>
                                  <button type="button" class="btn btn-warning">Add to Favourite</button>
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
};

export default ProductPage;
