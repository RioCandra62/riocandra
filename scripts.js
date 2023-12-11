
var backs = document.getElementById("back");
var fronts = document.getElementById("front")
var backlangs = document.getElementById("backlang");
var frontlangs = document.getElementById("frontlang");

function backend(){
    backs.classList.add("text-2xl");
    backs.classList.add("border-b-4")
    backs.classList.add("border-slate-600")
    // backs.classList.remove("text-sm")
    // fronts.classList.add("text-sm");
    fronts.classList.remove("text-2xl")
    fronts.classList.remove("border-b-4")
    fronts.classList.remove("border-slate-600")
    backlangs.classList.remove("hidden")
    frontlangs.classList.add("hidden")
}
function frontend(){
    fronts.classList.add("text-2xl");
    fronts.classList.add("border-b-4")
    fronts.classList.add("border-slate-600")
    // fronts.classList.remove("text-sm");
    // backs.classList.add("text-sm")
    backs.classList.remove("text-2xl")
    backs.classList.remove("border-b-4")
    backs.classList.remove("border-slate-600")
    backlangs.classList.add("hidden")
    frontlangs.classList.remove("hidden")
}
