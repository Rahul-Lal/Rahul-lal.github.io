/*
  For Navigation bar
*/

window.onscroll = function() {myFunction()}; // When the user scrolls the page, execute myFunction 


var navbar = document.getElementById("navbar"); // Get the navbar
var sticky = navbar.offsetTop; // Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction()
{
  if (window.pageYOffset >= sticky)
  {
    navbar.classList.add("sticky")
  }
  else
  {
    navbar.classList.remove("sticky");
  }
}