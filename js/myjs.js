document.addEventListener("click", function (event) {
    var x = document.getElementById("myNavbar");
    var icon = document.querySelector(".navIcon");

    if (x.className.includes("responsive") && !event.target.closest("#myNavbar")) {
        x.className = "myNavbar";
        if (window.innerWidth <= 600) {
            icon.style.display = "block"; // Show the icon when closing the menu on small screens
        }
    }
});

function myFunction() {
    var x = document.getElementById("myNavbar");
    var icon = document.querySelector(".navIcon");

    if (x.className === "myNavbar") {
        x.className += " responsive";
        if (window.innerWidth <= 600) {
            icon.style.display = "none"; // Hide the icon on small screens
        }
    } else {
        x.className = "myNavbar";
        if (window.innerWidth <= 600) {
            icon.style.display = "block"; // Show the icon on small screens when closing the menu
        }
    }
}
