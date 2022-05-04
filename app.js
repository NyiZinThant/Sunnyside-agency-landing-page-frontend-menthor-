let navbtn = document.getElementsByClassName('navbar-toggler');
let navbar = document.getElementsByClassName('navbar-custom');

navbtn[0].addEventListener('click', function(){
    navbar[0].classList.toggle('active');
    console.log("active");
})