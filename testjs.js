document.addEventListener("DOMContentLoaded", function() {
    var my_images = document.querySelectorAll("img");

    for (let i = 0; i < my_images.length; i++) {
        my_images[i].setAttribute("onfocus", "upDate(this)");
        my_images[i].setAttribute("onblur", "unDo()");
        my_images[i].setAttribute("tabindex", i + 1);
    }

    window.addEventListener("load", addTabFocus);
});

function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Document loaded! Adding tabindex attributes for keyboard access.");

    var my_images = document.querySelectorAll("img");

    for (let i = 0; i < my_images.length; i++) {
        my_images[i].setAttribute("tabindex", i + 1);
    }
}
