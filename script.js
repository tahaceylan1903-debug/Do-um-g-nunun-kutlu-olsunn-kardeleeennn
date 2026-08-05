const btn = document.getElementById("btn");
const mesaj = document.getElementById("mesaj");

btn.onclick = function () {
    mesaj.style.display = "block";
    btn.style.display = "none";
};