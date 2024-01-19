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
// links
