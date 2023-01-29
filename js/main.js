//banner slide
let sliderImg=document.querySelector('#slider').children,
arrowRight=document.querySelector('#arrow-right'),
arrowLeft=document.querySelector('#arrow-left'),
current=0;
function startSlide(){
    sliderImg[0].classList.add('active1')
   
}
startSlide()
arrowLeft.addEventListener("click", function(){
    prevSlide()
    resetTimer()
})
function prevSlide(){
    if(current==0){
        current=sliderImg.length-1;
    }
    else{
        current--
    }
    changeSlide()
}

arrowRight.addEventListener("click", function(){
    nextSlide()
    resetTimer()
})

function nextSlide(){
    if(current==sliderImg.length-1){
        current=0;
    }
    else{
        current++
    }
    changeSlide();
}

function changeSlide(){
    for(let i=0; i<sliderImg.length;i++){
        sliderImg[i].classList.remove('active1')
    }
    sliderImg[current].classList.add('active1')
}
function resetTimer(){
    clearInterval(timer)
    timer=setInterval(autoPlay,3000)
}
function autoPlay(){
    nextSlide();
}
let timer=setInterval(autoPlay, 3000)