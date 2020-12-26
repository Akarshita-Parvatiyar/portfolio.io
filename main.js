const bodyelement = document.querySelector('body');
const mediatoggle = document.querySelector('.hamburger-menu');
const heroelement = document.querySelector('.hero');
const navList = document.querySelector('.nav-list');

mediatoggle.addEventListener('click',function(){
    bodyelement.classList.toggle('is-open');
    heroelement.classList.add('is-open');
});

navList.addEventListener('click',function(e){
     let clickedElement = e.target;

     if(clickedElement.classList[0]==="nav-link"){
         bodyelement.classList.remove('is-open');
     }
});

window.addEventListener('click',function(e){
    let clickedElement = e.target;
    if(clickedElement.matches('.is-open')){
        bodyelement.classList.remove('is-open');
        heroelement.classList.remove('is-open');
    }

});