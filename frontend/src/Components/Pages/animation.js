import bodymovin from 'bodymovin';

const AnimationPage = () => {
    renderanimationPage();
};

function renderanimationPage() {
    const orderNumber = getRandomOrderNumber();
    const render = `
        <div style='text-align: center;'>
            <p style='font-size: 28px; font-weight: bold; margin-top: 40px;'>Your order  (#${orderNumber}) has been successfully processed</p>
            <div id='delivery-container' style='display: flex; flex-direction: column; align-items: center; height: 50vh; margin: 20px 0;'>
                <div id='delivery'>
                    <p style='font-size: 15px; margin-bottom: 10px;'>Your order will arrive shortly, you will be automaticaly redirected to homepage </p>
                    <a href="/" style='text-decoration: none; color: #f79f1f;'><i class="fa-solid fa-door-open" style="color: #f79f1f; font-size: 300%;"></i></a>
                </div>
            </div>
        </div>
    `;

    const main = document.querySelector("main");
    main.innerHTML = render;

    const container = document.getElementById('delivery');

    if (container) {
        const animData = {
            container,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'https://raw.githubusercontent.com/robbdiazz/uianims/master/delivery.json'
        };

        const anim = bodymovin.loadAnimation(animData);
        console.log(anim);
    } else {
        console.error("Container not found");
    }
    setTimeout(() => {
        window.location.href = '/';
    }, 10000); 
}

function getRandomOrderNumber() {
    return Math.floor(Math.random() * 1000000); 
}

export default AnimationPage;
