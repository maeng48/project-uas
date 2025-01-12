let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function autoSlide() {
    slideIndex++;
    if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    showSlides(slideIndex);
}

setInterval(autoSlide, 3000);

function goHome() {
    document.getElementById("message").innerText = "Welcome to Home page!";
    document.getElementById("family-images").style.display = "none";
    document.getElementById("about-images").style.display = "none";
}

function goEducation() {
    document.getElementById("message").innerHTML = 
        '<span style="font-size: 20px;">Pendidikan saya dimulai di TK Singasari 1</span><br>' + 
        '<span style="font-size: 20px;">Setelah itu, saya melanjutkan ke SD N 2 Blahkiuh.</span><br>' +
        '<span style="font-size: 20px;">Setelah itu, saya melanjutkan ke SMP N 1 Abiansemal.</span><br>' + 
        '<span style="font-size: 20px;">Setelah itu, saya melanjutkan ke SMA N 1 Abiansemal.</span>'; 
    document.getElementById("family-images").style.display = "none"; 
    document.getElementById("about-images").style.display = "none";
}

function goFamily() {
    document.getElementById("message").innerText = "Ini adalah keluarga saya";
    document.getElementById("family-images").style.display = "block";  
    document.getElementById("about-images").style.display = "none";
}

function goAbout() {
    document.getElementById("message").innerHTML = 
        '<span style="font-size: 20px;">I Putu Agustia Susila Darma</span><br>' +
        '<span style="font-size: 20px;">Nim: 2401010451</span><br>' +
        '<span style="font-size: 20px;">Jurusan: MTI</span>';
    document.getElementById("family-images").style.display = "none";  
    document.getElementById("about-images").style.display = "block";
}
