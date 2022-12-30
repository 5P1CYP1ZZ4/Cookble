function myFunction() {
    var x = document.getElementById("topnavi");
    if (x.className === "topnavi") {
      x.className += " responsive";
    } else {
      x.className = "topnavi";
    }
} 