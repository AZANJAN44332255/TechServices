const initSlider = () =>{
    const imagelist = document.querySelector(".slider .imglist");
    const slidebuttons = document.querySelectorAll(".slider .slide-button");
    const sliderScrollbar = document.querySelector(".contain-slide .scrollbar");
    const sliderthumb = document.querySelector(".thumb");
    const maxScrollLeft = imagelist.scrollWidth - imagelist.clientWidth;

    sliderthumb.addEventListener('mousedown', (e) => {
        const startx = e.clientX;
        const thumbposition = sliderthumb.offsetLeft;

        const handlemousemove = (e) => {
            const deltaX = e.clientX - startx;
            const newthumbpostion = thumbposition + deltaX;
            const maxthumbpostion = sliderScrollbar.getBoundingClientRect().width - sliderthumb.offsetWidth;
            const boundedPosition = Math.max(0, Math.min(maxthumbpostion, newthumbpostion)) 
           const scrollPosition = (boundedPosition / maxthumbpostion)  * maxScrollLeft;
            sliderthumb.style.left = `${boundedPosition}px`;
            imagelist.scrollLeft = scrollPosition;
        }

        const handlemouseup = () =>{
            document.addEventListener("mousemove", handlemousemove);
            document.addEventListener("mouseup", handlemouseup);

        }

        document.addEventListener("mousemove", handlemousemove);
        document.addEventListener("mousemove", handlemouseup);
    });

    slidebuttons.forEach(button =>{
        button.addEventListener("click", ()=>{
            const direction = button.id === "prev-slide" ? -1:1;
            const scrollAmount = imagelist.clientWidth * direction;
            imagelist.scrollBy({left: scrollAmount, behavior: "smooth"})
            
            
const handlebuttons = () => {
    slidebuttons[0].style.display = imagelist.scrollLeft <= 0 ? "none" : "block";
    slidebuttons[1].style.display = imagelist.scrollLeft >=  maxScrollLeft ? "none" : "block";
}

const updateThumb = () => {
    const scrollPosition = imagelist.scrollLeft;
    const thumbposition = (scrollPosition/ maxScrollLeft) * (sliderScrollbar.clientWidth - sliderthumb.offsetWidth);
    sliderthumb.style.left = `${thumbposition}px`;
}
            
 imagelist.addEventListener("scroll",()=>{
    handlebuttons();
    updateThumb();

    })           

  })
})
}

window.addEventListener('load', initSlider);

