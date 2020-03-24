const dropMenu = document.querySelector('.dropMenu').classList;

document.querySelector('.menuIconWrapper').onclick = function () {
    document.querySelector('.forMobile').classList.toggle('mobileHamburgerMenu');
    document.querySelector('.menuIcon').classList.toggle('menuIconActive');
    document.querySelector('body').classList.toggle('lock');
    document.querySelector('.navbar.part3').classList.remove('navActive');
    dropMenu.remove('dropActive');
    dropMenu.remove('p3');
}

document.querySelector('.navbar:nth-child(3)').onclick = function () {
    this.classList.toggle('navActive');
    dropMenu.remove('p3');
    dropMenu.toggle('dropActive');
    document.querySelector('.navSearch').classList.toggle('navSearchActive');
}