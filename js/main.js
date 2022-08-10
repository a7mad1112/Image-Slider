let sliderImages = Array.from(document.querySelectorAll(".slider-container img"));
let slidesCount = sliderImages.length;
let currentSlide = 1;
let sliderNumberElement = document.getElementById('slide-number');
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// Create ul Element
let paginationElement = document.createElement("ul");
paginationElement.setAttribute('id', 'pagination-ul');
// Create List Items Based On Slides Count
for(let i = 1; i <= slidesCount; i++) {
    let li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.appendChild(document.createTextNode(i));
    paginationElement.appendChild(li);
}// End Loop
// Add The Created ul To The Page
document.getElementById('indicators').appendChild(paginationElement);
// Get The New Created ul
let createdUl = document.getElementById("pagination-ul");
let Bullets = Array.from(document.querySelectorAll("#pagination-ul li"));
// Loop on All Bullets Item
for(let i = 0; i < Bullets.length; i++) {
    Bullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}// End Loop
theChecker();
function nextSlide() {
    if(nextButton.classList.contains("disabled"))
    return false;
    else {
        currentSlide++;
        theChecker();
    }
};
function prevSlide() {
    if(prevButton.classList.contains("disabled"))
        return false;
    else {
        currentSlide--;
        theChecker();
    }
};
function theChecker() {
    duration = 5;
    // Set Slide Number
    sliderNumberElement.textContent = `Slide #` + (currentSlide) + ` Of ` + (slidesCount);
    removeAllActive();
    // Set Active Class On Current Slide
    // sliderImages.forEach((slide, index) => {if(index === currentSlide - 1){slide.classList.add('active');}})
    sliderImages[currentSlide - 1].classList.add("active");
    // Set Active Class on Current Bullet
    createdUl.children[currentSlide - 1].classList.add('active');
    if(currentSlide == 1)
        prevButton.classList.add("disabled");
    else 
        prevButton.classList.remove("disabled");
    if(currentSlide == slidesCount)
        nextButton.classList.add("disabled");
    else 
        nextButton.classList.remove("disabled");
};
// Function to Remomve All Active Class From Images And Bullets
function removeAllActive () {
    sliderImages.forEach(ele => ele.classList.remove("active"))
    Bullets.forEach(ele => ele.classList.remove("active"))
};