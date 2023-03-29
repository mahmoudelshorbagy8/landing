// navbar
let btnMobile = document.querySelector('#bar');
let navBar = document.querySelector('.navbar');
// form search
let btnSearch = document.querySelector('#search');
let form = document.querySelector('form');
// ////////////////////////////////////

// navbar
btnMobile.onclick=()=>{
 btnMobile.classList.toggle('fa-times');
 navBar.classList.toggle('active');
 // remove search box...
 btnSearch.classList.remove('fa-times');
 form.classList.remove('active');
}

btnSearch.onclick=()=>{
 btnSearch.classList.toggle('fa-times');
 form.classList.toggle('active');
 // remove navbar..
 btnMobile.classList.remove('fa-times');
 navBar.classList.remove('active');
}

//  window remove navbar + searchbox by scroll
window.onscroll = ()=>{
 btnMobile.classList.remove('fa-times');
 navBar.classList.remove('active');
 btnSearch.classList.remove('fa-times');
 form.classList.remove('active');
}
