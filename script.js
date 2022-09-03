/*
GCU AR Tour
Made by Paige Mabbitt
September 2nd, 2022
*/

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
