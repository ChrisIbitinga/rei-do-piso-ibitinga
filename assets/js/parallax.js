var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
    delay: .6,
    scale: 1.3,
    transition: 'cubic-bezier(0,0,0,1)'
});

const menuItems = document.querySelectorAll('.navbar-menu a[href^="#"], .footer_contact a[href^="#"]')

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

bloq = document.getElementById('active_image').click()


function toggleImage(idImage) {
    const itemChange = document.getElementById(idImage)
    // console.log(itemChange)
    const contents = document.querySelectorAll('.box_prod')
    
    for(let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('is-flex-tab')   
    }

    itemChange.classList.add('is-flex-tab')


}




document.getElementById('active').click()

function openTab(idTab) {
    const itemChange = document.getElementById(idTab)
    const contents = document.querySelectorAll('.tab_services')
    
    for(let i = 0; i < contents.length; i++) {
        contents[i].classList.remove('is-flex-tab')   
    }

    itemChange.classList.add('is-flex-tab')


}



let modalPolitic =   document.querySelector('#modal-politic')
let btnPolitic =     document.querySelector('#btnPolitic')


let menuMobile =   document.querySelector('.menu_mobile')
let btnCloseMenu   =     document.querySelector('#close_menu')
let btnToggle   =     document.querySelector('.toggle-button')
let linkCloseMenu   =     document.querySelectorAll('.menu_mobile ul li a.navbar-item ')

// console.log(linkCloseMenu)

let btnClose   =     document.querySelector('.is-my-danger')


let btnPoliticForm = document.querySelector('#btnPoliticForm')

let link;

for (link = 0;link < linkCloseMenu.length; link++){
    linkCloseMenu[link].addEventListener('click', (e) => {
        scrollToIdClick(e)
        menuMobile.classList.remove('is-visible')
        menuMobile.classList.add('is-hidden')
    })
    
}
     
let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let faq_answer = this.nextElementSibling;
    if (faq_answer.style.display === "block") {
        faq_answer.style.display = "none";
    } else {
        faq_answer.style.display = "block";
    }
  });
}




// btnFaq.addEventListener('click',  (e) => {
//     e.preventDefault()
//     // console.log("Função funcionando")
//     modalFaq.classList.add('is-visible')
//     modalFaq.classList.remove('is-hidden')
// })
// btnCloseFaq.addEventListener('click', (e) => {
//     e.preventDefault()
//     modalFaq.classList.remove('is-visible')
//     modalFaq.classList.add('is-hidden')
// })

btnPolitic.addEventListener('click',  (e) => {
    e.preventDefault()
    // console.log("Função funcionando")
    modalPolitic.classList.add('is-visible')
    modalPolitic.classList.remove('is-hidden')
})
btnClose.addEventListener('click', (e) => {
    e.preventDefault()
    modalPolitic.classList.remove('is-visible')
    modalPolitic.classList.add('is-hidden')
})
btnToggle.addEventListener('click', (e) => {
    e.preventDefault()
    menuMobile.classList.remove('is-hidden')
    menuMobile.classList.add('is-visible')
})
btnCloseMenu.addEventListener('click', (e) => {
    e.preventDefault()
    menuMobile.classList.remove('is-visible')
    menuMobile.classList.add('is-hidden')
})

btnPoliticForm.addEventListener('click',  (e) => {
    e.preventDefault()
    // console.log("Função funcionando")
    modalPolitic.classList.add('is-visible')
    modalPolitic.classList.remove('is-hidden')
})







