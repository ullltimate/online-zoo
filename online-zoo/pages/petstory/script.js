(function (){
    const burgerItem = document.querySelector('.header_burger');
    const menu = document.querySelector('.header_wrap_menu');
    const menuCloseItem = document.querySelector('.nav_menu_close');
    const bgMain = document.querySelector('.main_open');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_wrap_menu_active');
        bgMain.classList.add('main_open_menu');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_wrap_menu_active');
        bgMain.classList.remove('main_open_menu');
    })
    bgMain.addEventListener('click', () => {
        menu.classList.remove('header_wrap_menu_active');
        bgMain.classList.remove('main_open_menu');
    })
}());

(function (){
    var btn_prev = document.querySelector('.button_arrow_left');
    var btn_next = document.querySelector('.button_arrow_right');
    var cards = [...document.querySelectorAll('.pets_card')];
    var cardsTop = cards.slice(0,5);
    var cardsBottom = cards.slice(5);
    for(var i=0; i<3; i++){
        cardsTop[i].style.display = 'block';
    }
    for(var i=3; i<cardsTop.length; i++){
        cardsTop[i].style.display = 'none';
    }
    for(var i=0; i<3; i++){
        cardsBottom[i].style.display = 'block';
    }
    for(var i=3; i<cardsBottom.length; i++){
        cardsBottom[i].style.display = 'none';
    }
    var i = 0;
    btn_next.addEventListener('click', ()=>{
        if (cardsTop[i].style.display === 'block' & cardsBottom[i].style.display === 'block'){
            cardsTop[i].style.display = 'none';
            cardsBottom[i].style.display = 'none';
            cardsTop[i+3].style.display = 'block';
            cardsBottom[i+3].style.display = 'block';
        } else {
            cardsTop[i].style.display = 'block';
            cardsBottom[i].style.display = 'block';
            cardsTop[i+3].style.display = 'none';
            cardsBottom[i+3].style.display = 'none';
        }
        i++;
        if( i === 2){
            i=0;
        }
    })
    btn_prev.addEventListener('click', ()=>{
        if (cardsTop[i].style.display === 'none' & cardsBottom[i].style.display === 'none'){
            cardsTop[i].style.display = 'block';
            cardsBottom[i].style.display = 'block';
            cardsTop[i+3].style.display = 'none';
            cardsBottom[i+3].style.display = 'none';
        } else {
            cardsTop[i].style.display = 'none';
            cardsBottom[i].style.display = 'none';
            cardsTop[i+3].style.display = 'block';
            cardsBottom[i+3].style.display = 'block';
        }
        i++;
        if( i === 2){
            i=0;
        }
    })
}())




