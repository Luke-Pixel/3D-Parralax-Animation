//Animation 

const card = document.querySelector('.card')
const container = document.querySelector('.container')

//Items
const title = document.querySelector('.title')
const sneaker = document.querySelector('.sneaker img')
const purchase = document.querySelector('.purchase')
const description = document.querySelector('.info h3')
const sizes = document.querySelector('.sizes')

//Animation moving event using mouse position and page size
container.addEventListener('mousemove', (e) => {
    console.log(e.pageX, e.PageY)
    let xAxis = (window.innerWidth / 2 - e.pageX) /25
    let yAxis = (window.innerHeight / 2 - e.pageY) /25
    //set transform of card with values
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

//remove transition on mouse enter
container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none'
    //push out title on mouse enter
    title.style.transform = 'translateZ(250px)'
    sneaker.style.transform = 'translateZ(250px) rotateZ(-45deg)'
    purchase.style.transform = 'translateZ(150px)'
    description.style.transform = 'translateZ(150px)'
    sizes.style.transform = 'translateZ(150px)'

})

//reset card and add transition when mouse leaves
container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
    //reset tite animation
    title.style.transform = 'translateZ(0)'
    sneaker.style.transform = 'translateZ(0)'
    purchase.style.transform = 'translateZ(0)'
    description.style.transform = 'translateZ(0)'
    sizes.style.transform = 'translateZ(0)'
})