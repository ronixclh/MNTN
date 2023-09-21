const navBtn = document.querySelector('.nav-button') //nahodim knopku po klassu
const mobileNav = document.querySelector('.mobile-nav')
const body = document.body

//Click po knopke
navBtn.addEventListener('click', function (event) {
  event.stopPropagation()
  toggleMobileNav()
}) //pri klike dobalvaet klass mobile-nav-active i nav-button-close

//Click po oknu za predelami Navigacii
window.addEventListener('click', function () {
  if (body.classList.contains('no-scroll')) {
    toggleMobileNav()
  }
})

//Ostanavlivaem click pri otkritoj mobilnoj navigacii
mobileNav.addEventListener('click', function (event) {
  event.stopPropagation()
})

function toggleMobileNav() {
  mobileNav.classList.toggle('mobile-nav-active')
  navBtn.classList.toggle('nav-button-close')
  body.classList.toggle('no-scroll')
}
