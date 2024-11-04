const navMenuItems = document.querySelectorAll('#nav-menu a');

// 设置指示器的点击切换
function handleMenuItemClick(target) {
    navMenuItems.forEach(item => {
        item.classList.remove('active');
        item.style = '';

    });
    target.classList.add('active');

    //设置要展示的内容
    const cueerntSection = document.querySelector('.active-section');
    cueerntSection.classList.remove('active-section');
    gsap.to(cueerntSection, {
        duration: 2,
        opacity: 0
    });
    const newCurrentSection = document.querySelector(`.${target.getAttribute('data-rel')}`);
    newCurrentSection.classList.add('active-section');
    gsap.to(newCurrentSection, {
        duration: 2,
        opacity: 1
    });
}

navMenuItems.forEach(item => {
    item.addEventListener('click', e => handleMenuItemClick(e.target));
    item.classList.contains('active') && handleMenuItemClick(item);
});

function loop() {
    var i, n, s = '';

    for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4;

        s += String.fromCharCode(0x2581 + n);
    }

    window.location.hash = s;

    setTimeout(loop, 50);
}

function isMobileBrowser() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (!isMobileBrowser()) {
    loop();
}