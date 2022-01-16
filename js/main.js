
function gotoPrevImage () {
    
  // INFINITE GALLERY
    counter--;
    if (counter < 0) {
         counter = images.length - 1;
    }
    if (counter > 0) {
        counter --;
    } else {
    }
    updateImage();

}

function gotoNextImage() {

    // INFINITE GALLERY
    counter++;
    if (counter > images.length - 1) {
        counter = 0;
    }

    if (counter < images.length - 1) {
        counter ++;
    } else {
    }
    updateImage();
}

function updateImage() {
    gallery.src = `images/${images[counter]}`;
            
    console.log(counter);
    console.log(images[counter]);
}

const gallery = document.getElementById("gallery");
const galleryBanner = document.getElementById("galleryBanner");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", gotoPrevImage);
nextButton.addEventListener("click", gotoNextImage);

//change the perth pic so banner doesn't float, sri lanka doesn't show up
const images = [
    "emilio-lujan-OKWAtnEfN4M-unsplash.jpg",
    "eric-zhang-aJmmebD4NpE-unsplash.jpg",
    "hendrik-cornelissen-jpTT_SAU034-unsplash.jpg",
    "jamar-cromwell-CoAhY3rZwaE-unsplash.jpg",
    "mike-c-valdivia-kZokA2VTKn4-unsplash.jpg",
];
let counter = 0;
updateImage();
