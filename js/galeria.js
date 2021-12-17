let images = document.querySelectorAll('.card-img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal-img');
let btnClose = document.querySelector('#btn-close');
let btnRight = document.querySelector('#btn-right');
let btnLeft = document.querySelector('#btn-left');
let index = 0;
let srcImg = '';

for(let i = 0; i<images.length; i++){
    images[i].addEventListener('click', function(){
        index = 0;
        srcImg = images[i].getAttribute('src');
        modalImg.setAttribute('src', 'img/'+srcImg[4]+'/'+index+'.png');
        modal.classList.toggle('modal-visible');
        test();
    });
};

btnClose.addEventListener('click', function(){
    modal.classList.toggle('modal-visible');
});

btnRight.addEventListener('click', function(){
    if(index<3){
        index++;        
        modalImg.setAttribute('src', 'img/'+srcImg[4]+'/'+index+'.png');
    }
});

btnLeft.addEventListener('click', function(){
    if(index>0){
        index--;        
        modalImg.setAttribute('src', 'img/'+srcImg[4]+'/'+index+'.png');
    }
});