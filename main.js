

function myFunction() {

    var x = document.getElementById("myMobileLinks");
    if (x.style.display === "block") {
        console.log("block");
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }