//Slajder
var timer;
var slajdIndeks = 1;
clearTimeout(timer);
timer = setTimeout(() => plusSlides(1), 3000);

function plusSlides(n) {
  showSlides(slajdIndeks += n);
}

function showSlides(n) {
  var i;
  var slajd = document.getElementsByClassName("vv-slider");
 
  if (n > slajd.length) {slajdIndeks = 1}
  if (n < 1) {slajdIndeks= slajd.length}
  for (i = 0; i < slajd.length; i++) {
      slajd[i].style.display = "none";
  }
  slajd[slajdIndeks-1].style.display = "block";
  timer = setTimeout(() => plusSlides(1), 3000);
}
console.log("Provera slajdera");

//Forma -GLEDATI MILENU
document.querySelector("#btnPosalji").addEventListener("click",provera());

function provera(){
  var objImePrezime, objAdresa, objGrad, objPosBroj, objPonuda, objRadio, nizUspesno,nizGreske;
  objImePrezime = document.querySelector("#imePrezime");
  objAdresa = document.querySelector("#adresa");
  objGrad = document.querySelector("#grad");
  objPosBroj = document.querySelector("#posBroj");
  objPonuda = document.querySelector("#ponuda");
  objRadio = document.getElementsByName("radio1");
  nizUspesno = [];
  nizGreske = [];

  // Provera imePrezime
  if(objImePrezime.value.length < 4){
    nizGreske.push("Pogrešno popunjeno polje za ime i prezime.");
  }
  else{
    nizUspesno.push(objImePrezime.value);
  }

  // Provera adresa
  if(objAdresa.value.length < 4){
    nizGreske.push("Pogrešno popunjeno polje za ime i prezime.");
  }
  else{
    nizUspesno.push(objImePrezime.value);
  }

}
//Obrada forme
// function proveri(){
//   var imePrezime;
//   var vrImePrezime;
//   imePrezime = document.querySelector("#imePrezime");
//   vrImePrezime = imePrezime.value;
//   //Proveri ime i prezime
//   let regImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
//   if(regImePrezime.test(vrImePrezime)){
//     document.querySelector("#polje-ime-prezime > p").innerHTML = "Uspešno ste uneli ime i prezime";
//     document.querySelector("#polje-ime-prezime > p").style.color = "green";
//   }
//   else{
//     document.querySelector("#polje-ime-prezime > p").innerHTML = "Pogrešno uneto ime i prezime";
//     document.querySelector("#polje-ime-prezime > p").style.color = "red";
//   }
// }





// //forma
// let padajuci = id("padajuca_lista");

// var izbor(opcije) = [
//   "Izaberite...",
//   "Krofne",
//   "Mini-pice",
//   "Kiflice sa viršlama",
//   "Hleb",
//   "Margarita",
//   "Capriciosa",
//   "Quattro Stagioni",
//   "Vegeteriana",
// ];
// var vr(vrednosti) = [
//   "0",
//   "krofne",
//   "mini",
//   "kiflice",
//   "hleb",
//   "margarita",
//   "capriciosa",
//   "quattro",
//   "vegeteriana",
// ];

// let li = document.createElement("select");
// li.setAttribute("name", "problem");
// li.setAttribute("id", "problem");
// li.setAttribute("required", "required");

// for (let i = 0; i < izbor.length; i++) {
//   var noviIzbor = document.createElement("option");
//   noviIzbor.setAttribute("value", vr[i]);
//   noviIzbor.setAttribute("name", "izbor");
//   noviIzbor.innerHTML = izbor[i];
//   li.appendChild(noviIzbor);
// }
// let padajucaLista = id("padajuca_lista");
// padajucaLista.appendChild(lista);

// //provera forme
// let form = id("form"),
//   ime = id("name"),
//   email = id("email"),
//   telefon = id("tel"),
//   termin = id("termin"),
//   usluga = document.getElementsByName("izbor"), successIcon = classes("success-icon"),
//   failureIcon = classes("failure-icon");
//   greska = classes("greska");
// var brojGresaka;
// const regIme=/^[A-ZČĆŽŠĐ][a-zčćžšđ]{2,15}$/,regEmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
// form.addEventListener("submit", (e) => {
//   brojGresaka = 0;
//   e.preventDefault();
//   engine(ime, 0, "Ime i Prezime ne mogu biti prazni!");
//   engine(email, 1, "Email ne može biti prazan!");
//   engine(telefon, 2, "Telefon ne može biti prazan!");
//   engine(termin, 3, "Termin ne može biti prazan!");
//   if (brojGresaka == 0) {alert("Forma uspešno odrađena");  }
// });
// form.addEventListener("reset", (e) => {
//   e.preventDefault();
 
//   for(let i=0;i<4;i++){
//     reset(i);
//   }
// });
// let reset=(serial)=>{
//   failureIcon[serial].classList.add("prazno")
//   successIcon[serial].classList.add("prazno");
//   greska[serial].innerHTML = "";
// }
// let engine = (id, serial, poruka) => {
//   if (id.value.trim() == "") {
//     greska[serial].innerHTML = poruka;
//     failureIcon[serial].classList.remove("prazno")
//     successIcon[serial].classList.add("prazno");
//     brojGresaka++;

//   } else {
//     greska[serial].innerHTML = "";
//     failureIcon[serial].classList.add("prazno")
//     successIcon[serial].classList.remove("prazno");

//   }