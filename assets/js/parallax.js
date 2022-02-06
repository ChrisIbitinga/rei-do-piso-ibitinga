var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(0,0,0,1)'
});

const menuItems = document.querySelectorAll('.navbar-menu a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdClick)
    // console.log(item)
})

function getScrollTopHref(element) {
    const id = element.getAttribute('href')
    return document.querySelector(id).offsetTop
}

function scrollToIdClick(event) {
    event.preventDefault()
    const to = getScrollTopHref(event.target) - 70
    scrollToPosition(to)
}


function scrollToPosition(to) {
    // window.scroll({
    //     top: to,
    //     behavior: "smooth",
    // })
    smoothScrollTo(0, to);
}


//   Smooth scroll animation
//   @param {int} endX: destination x coordinate
//  @param {int} endY: destination y coordinate
//  @param {int} duration: animation duration in ms

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 800;

    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
};

document.getElementById('active').click()

function openTab(idTab) {
    const itemChange = document.getElementById(idTab)
    const contents = document.querySelectorAll('.tab_services')
    
    for(let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('is-flex')   
    }

    itemChange.classList.add('is-flex')


}







