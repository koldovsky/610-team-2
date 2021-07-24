const thumbnails = document.getElementsByClassName('thumbnail')
const activeImages = document.getElementsByClassName('active')

function showNextSlide(){
    for (let i = 0; i < thumbnails.length; i++){
        thumbnails[i].addEventListener('click', function(){
            console.log(activeImages);
            if (activeImages.length > 0){
                activeImages[0].classList.remove('active');
            }

            this.classList.add('active')
            document.getElementById('featured').src = this.src;
        })
    }
}

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.addEventListener('click', showNextSlide);
buttonLeft.addEventListener('click', showNextSlide);