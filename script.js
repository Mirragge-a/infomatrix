
// navigation bar + button up
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("nav").style.top = "0px";
    document.getElementById("bup").style.opacity = ".99";
    document.getElementById("up").style.cursor = "pointer";
} else {
    document.getElementById("bup").style.opacity = ".0";
    document.getElementById("nav").style.top = "-80px";
    document.getElementById("up").style.cursor = "default";
}
}

// button scroll up
function topFunction() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}
//video pause/play
video = document.getElementById("video1")
stop_vid = document.getElementById("p1")
play_vid = document.getElementById("p2")

function vidFunction() {
    if (video.paused) {
        video.play();
        play_vid.style.display = "none";
        stop_vid.style.display = "block";

    }
    else {
        video.pause();
        stop_vid.style.display = "none";
        play_vid.style.display = "block";
    }
}


//gallery js
var modal = document.getElementById('myModal');               
var modalImg = document.getElementById("modalct");
var captionText = document.getElementById("caption");

document.addEventListener("click", function(e) {
    if (e.target.className=="myImg") {
        modal.style.display = "block";
        modalImg.src = e.target.src;
        captionText.innerHTML = e.target.alt;
    }
});

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}


