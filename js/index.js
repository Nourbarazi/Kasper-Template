
        //Navigation
    var openLinks = document.querySelector(".toggle-menu"),
    ul = document.getElementById("ul");

    openLinks.addEventListener("click", function(){
        ul.classList.toggle("show-nav");
        if(ul.classList.contains("show-nav")){
            openLinks.style.transform = "rotate(90deg)"
        }else{
            openLinks.style.transform = "rotate(0)"
        }
    });


    
    //Slideshow
    var imageIndex = 0;

    slider(imageIndex);

    function plusSlider(n){
        slider(imageIndex += n)
    }

    function currentSlider(n){
        slider(imageIndex = n)
    }

    function slider(n){
        let i;
        var images = ["Images/landing-1.jpg", "Images/landing-2.jpg", "Images/landing-3.jpg"];
        var landing = document.querySelector(".landing");
        var dots = document.querySelectorAll(".dot");

        if(n > images.length - 1){
            imageIndex = 0;
        }

        if(n < 0){
            imageIndex = images.length - 1
        }

        for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "")
        }

        landing.style.backgroundImage = `url(${images[imageIndex]})`;
        dots[imageIndex].className += " active";
        
    }

    var portfolioImages = document.querySelectorAll(".portfolio-image");
    console.log(portfolioImages)
    var modal = document.getElementById("modal");
    console.log(modal)
    var modalImage = document.querySelector(".modal-content");
    console.log(modalImage);
    var modalCaption = document.getElementById("caption");
    console.log(modalCaption)
    var modalClose = document.getElementById("close");
    console.log(modalClose)

    

    
    function theModal(){
        let i;
        for(i = 0; i < portfolioImages.length; i++){
            portfolioImages[i].onclick = function(){
                this.parentElement.parentElement.children[this.parentElement.parentElement.children.length - 1].style.display = "block";
                modalImage.src = this.src;
                modalClose.onclick = function(){
                    this.parentElement.parentElement.children[this.parentElement.parentElement.children.length - 1].style.display = "none";
                }
            }
        }
    }

    window.onload = theModal();

    

