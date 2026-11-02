const IMAGES = {
    "img/galerie/galerie-01.png":"",
    "img/galerie/galerie-02.png":"",
    "img/galerie/galerie-03.png":"",
    "img/galerie/galerie-04.jpeg":"",
    "img/galerie/galerie-05.jpg":"",
    "img/galerie/galerie-06.png":"",
}

const MAX_IMAGES = 0;

function GenerateIndicator(slideNum){
    button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("data-bs-target", "#galerieCarousel");
    button.setAttribute("data-bs-slide-to", String(slideNum));
    if(slideNum==0){
        button.setAttribute("class", "active");
        button.setAttribute("aria-current","true");
    }
    document.getElementById("galleryIndicators").appendChild(button);
}

function GenerateImgDiv(src, alt, first=false){
    // Create div for img
    imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", first?"carousel-item active":"carousel-item")

    // Create img itself
    image = document.createElement("img");
    image.setAttribute("class", "d-block w-100 gallery-slide-img");
    image.setAttribute("src", src);
    image.setAttribute("alt", alt);

    // Append elements
    imgDiv.appendChild(image);
    document.getElementById("galleryImgs").appendChild(imgDiv);
}

function GenerateGallery(){
    var rawGalleryLen = Object.keys(IMAGES).length
    var usableImages = MAX_IMAGES==0?rawGalleryLen:MAX_IMAGES;
    for (let i = 0; i < usableImages; i++) {
        GenerateIndicator(i);
        GenerateImgDiv(Object.keys(IMAGES)[i], IMAGES[Object.keys(IMAGES)[i]], i==0?true:false)
    }
}