const hambugarBtn = document.querySelector('.hambugar');
const menuBar = document.querySelector(".responsive-nav");

hambugarBtn.addEventListener('click',function(){
    menuBar.classList.toggle("active");
})