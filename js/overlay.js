// JavaScript source code
//Code from W3Schools Overlay Tutorial


/* Open */
function openNav() {
    document.getElementById("nav").style.height = "100%";
    document.getElementById("debug").style.opacity = "0";
    document.getElementById("ar-open").style.opacity = "0";
}

/* Close */
function closeNav() {
    document.getElementById("nav").style.height = "0%";
    document.getElementById("debug").style.opacity = "1";
    document.getElementById("ar-open").style.opacity = "1";


}