const menuBtn = document.getElementById('header-btn')
const headerNav = document.getElementById('header-nav')
const topBtn = document.getElementById('header-btn-top')
const header = document.getElementById('header')

menuBtn.addEventListener('click', function () {
    headerNav.classList.toggle('header__nav--open')
    if (headerNav.classList.contains('header__nav--open')) {
        menuBtn.classList.add('header__menu--close')
        document.querySelector('.header__links').style.display = 'flex'
    } else {
        menuBtn.classList.remove('header__menu--close')
        document.querySelector('.header__links').style.display = 'none'
    }
})

topBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.onscroll = () => {
    let scrollPos = window.pageYOffset
    checkScroll(scrollPos)
}

function checkScroll(scrollPos) {
    if (header.clientHeight < scrollPos) {
        topBtn.classList.add('header__btn-top--active')
    } else {
        topBtn.classList.remove('header__btn-top--active')
    }
}

document.querySelectorAll('[data-scroll]').forEach(elem => {
    elem.addEventListener('click', event => {
        event.preventDefault()

        let elemId = elem.dataset.scroll
        let elementOffset = document.querySelector(elemId).offsetTop

        window.scrollTo({
            top: elementOffset - 50,
            behavior: 'smooth'
        })
    })
})

const testimonialsSlider = new Swiper('.testimonials-slider', {
    loop: true,
    slidesPerViews: 1,
    pagination: {
        el: '.testimonials-pag',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        
    }
})


//inputmask
let inputs = document.querySelectorAll('input[type="tel"]')
let inputMask = new Inputmask('+7 (999) 999-99-99')
inputMask.mask(inputs)

//validate

function validateForms(selector, rules, successModal, yaGoal) {
    new window.JustValidate(selector, {
        rules: rules,
        submitHandler: function (form, values, ajax) {
            let formData=new FormData(form)

            let xhr=new XMLHttpRequest()

            xhr.onreadystatechange=function() {
                if(xhr.readyState===4) {
                    if(xhr.status===200) {
                        console.log('отправлено')
                    }
                }
            }

            xhr.open('POST', 'mail.php', true)
            xhr.send(formData)

            form.reset()
        }
    })
}

validateForms('.contact__form',{
    email:{
        required:true,
        email:true
    },
    name:{
        required:true
    },
    tel: {
        required:true
    },
    message: {
        required:true
    }
},'.thanks-popup','send goal')
