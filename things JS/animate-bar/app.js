const progressBar = document.querySelector('#progress-bar');
const section = document.querySelector('section');

const animateProgressBar = () =>{
    let scrollDistance = -section.getBoundingClientRect().top;
    let progresswidth = 
    (scrollDistance / 
        (section.getBoundingClientRect().height - 
        document.documentElement.clientHeight))*
        100 ;
    let value = Math.floor(progresswidth);
    
    progressBar.style.width = value + '%';
    

};

window.addEventListener("scroll", animateProgressBar);