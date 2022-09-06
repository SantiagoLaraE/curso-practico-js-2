const menuEmailBtn = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIconBtn = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

const toggleDesktopMenu = () => {
  const isCartMenuClosed = aside.classList.contains('inactive');
  if(!isCartMenuClosed){
    aside.classList.add('inactive')
  }
  desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
  const isCartMenuClosed = aside.classList.contains('inactive');
  if(!isCartMenuClosed){
    aside.classList.add('inactive')
  }
  mobileMenu.classList.toggle('inactive');
}

const toogleCartMenu = () => {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
  
  if(!isMobileMenuClosed){
    mobileMenu.classList.add('inactive')
  }
  if(!isDesktopMenuClosed){
    desktopMenu.classList.add('inactive')
  }

  aside.classList.toggle('inactive');

}

menuEmailBtn.addEventListener('click', toggleDesktopMenu);
burguerIconBtn.addEventListener('click', toggleMobileMenu);
shoppingCartBtn.addEventListener('click', toogleCartMenu);

