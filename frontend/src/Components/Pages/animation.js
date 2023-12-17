import bodymovin from 'bodymovin';



const AnimationPage = () => {
    renderanimationPage();
};

function renderanimationPage() {
    const render = ` 
    <div id='delivery-container' style='display: flex; justify-content: center; align-items: center; height: 100vh;'>
    <div id='delivery'></div>
    </div>
    ` 
    ;

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
}

export default AnimationPage;