var prevScrollpos = 0;
window.onscroll = function() {
  var currentScrollPos = window.scrollY;

  // for navbar and hero text
  if ( currentScrollPos > prevScrollpos) {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("section-1-text").style.visibility = "visible";
    document.getElementById("section-1-text").style.animation = "slide 1s both";
  } else if ( currentScrollPos <= 0 ) {
    document.getElementById("navbar").style.background = "rgba(0, 0, 0, 0)";
  }  else if (currentScrollPos < prevScrollpos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.background = "#1B1947";
  } 
  //   for hero text 
  if (currentScrollPos < 100) {
    document.getElementById("hero-text-title").style.opacity = "1";
    } else if (currentScrollPos > 100) {
    document.getElementById("hero-text-title").style.opacity = "0";
    }
  if (currentScrollPos < 200) {
    document.getElementById("hero-text-desc").style.opacity = "1";
    } else if (currentScrollPos > 100) {
    document.getElementById("hero-text-desc").style.opacity = "0";
    }
//   disable navbar animation when toggler is checked
    if (document.getElementById("toggler").checked) {
    document.getElementById("navbar").style.top = "0"
    }
  prevScrollpos = currentScrollPos;
}
