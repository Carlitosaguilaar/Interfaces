function cambiodisplay() {

    var dedo = document.querySelector("section");

    var dedo2 = document.getElementById("Cajabase")

    if (dedo.style.display == "none" && dedo2.style.display == "block") {
        dedo.style.display = "block";
        dedo2.style.display = "none";
    }

    if (dedo.style.display == "block" || dedo2.style.display == "none") {
        dedo.style.display = "none";
        dedo2.style.display = "block";
    }
}