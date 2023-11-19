// Get the header element
var header = document.getElementById("main-header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Function to add or remove the 'header-solid' class based on scroll position
function updateHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("header-solid");
    } else {
        header.classList.remove("header-solid");
    }
}

// Add scroll event listener
window.onscroll = function () {
    updateHeader();
};


