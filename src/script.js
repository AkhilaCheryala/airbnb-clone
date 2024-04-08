 document.addEventListener("DOMContentLoaded", function () {
     var scrollbar = document.getElementById("scrollbar");
    var scrollLeftButton = document.getElementById("scrollLeftButton");
     var scrollRightButton = document.getElementById("scrollRightButton");
     var scrollAmount = 50;

     
     scrollLeftButton.addEventListener("click", function () {
       
       var newScrollLeft = scrollbar.scrollLeft - scrollAmount;

       scrollbar.scrollLeft = Math.max(newScrollLeft, 0);
     });
     
     scrollRightButton.addEventListener("click", function () {
       
       var newScrollLeft = scrollbar.scrollLeft + scrollAmount;

      
      scrollbar.scrollLeft = Math.min(newScrollLeft, scrollbar.scrollWidth - scrollbar.clientWidth);
    });
 });

function openIframe() {
  document.getElementById("overlay").style.display = "block";
  document.getElementById("iframeContainer").style.display = "block";
}

function closeIframe() {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("iframeContainer").style.display = "none";
}
function openIframeAgain(){
  document.getElementById("overlayAgain").style.display = "block";
  document.getElementById("iframeContainerAgain").style.display ="block";
}
function iframeClose() {
  console.log("iframeClose() called");
  document.getElementById("overlayAgain").style.display = "none";
  document.getElementById("iframeContainerAgain").style.display = "none";
}
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
 
    document.getElementById("nav-bar-4").style.transform = "translateY(100%)";
  } else {
  
    document.getElementById("nav-bar-4").style.transform = "translateY(0)";
  }

  lastScrollTop = scrollTop;
});
