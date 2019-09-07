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

function warnUserOfResume()
{
  alert("You have downloaded a copy of my resume\n\n Enjoy!");
}


function testSum()
{
  var expected = 7;
  var actual = sum(5, 2)
  
  if (actual != expected)
  {
    console.log("It's broken..");
  }
  else
  {
    console.log("It works!");
  }
}


function secondTestSum(hopefullyTrue)
{
  if(typeof hopefullyTrue === "boolean")
  {
    if (hopefullyTrue === true)
    {
      console.log("It works!");
    }
    else
    {
      console.log("It's broken..");
    }
  }
  else
  {
    console.log("IT HAS TO BE A BOOLEAN!!!!");
  }
}
