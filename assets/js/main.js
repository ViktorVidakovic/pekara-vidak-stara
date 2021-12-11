
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

//Forma - provera
function provera(){
  var imePrezime;
  var vrImePrezime;
  imePrezime = document.querySelector("#imePrezime");
  vrImePrezime = imePrezime.value;

  var adresa;
  var vrAdresa;
  adresa = document.querySelector("#adresa");
  vrAdresa = adresa.value;

  var grad;
  var vrGrad;
  grad = document.querySelector("#grad");
  vrGrad = grad.value;

  var posBroj;
  var vrPosBroj;
  posBroj = document.querySelector("#posBroj");
  vrPosBroj = posBroj.value;

  var ponuda;
  ponuda = document.querySelector("#ponuda");

  var nacinPreuzimanja
  nacinPreuzimanja=document.getElementsByName("nacinPreuzimanja");

  //Proveri ime i prezime
  let regImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  if(!(regImePrezime.test(vrImePrezime))){
    document.querySelector("#poljeImePrezime > p").innerHTML = "Pogrešno uneto ime i prezime";
    document.querySelector("#poljeImePrezime > p").style.color = "white";
    document.querySelector("#poljeImePrezime > p").style.fontSize = "14px";
  }

  //Proveri adresu
  let regAdresa=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[0-9]{1,4}$/;
  let regAdresa2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[0-9]{1,4}$/;
  if(!(regAdresa.test(vrAdresa)) || !(regAdresa2.test(vrAdresa))){
    document.querySelector("#poljeAdresa > p").innerHTML = "Pogrešno uneta adresa";
    document.querySelector("#poljeAdresa > p").style.color = "white";
    document.querySelector("#poljeAdresa > p").style.fontSize = "14px";
  }

  //Proveri grad
  let regGrad=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  let regGrad2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{0,1}[a-zčćšđž]{2,15}$/;
  if(!(regGrad.test(vrGrad)) || !(regGrad2.test(vrGrad))){
    document.querySelector("#poljeGrad > p").innerHTML = "Pogrešno uneta opština";
    document.querySelector("#poljeGrad > p").style.color = "white";
    document.querySelector("#poljeGrad > p").style.fontSize = "14px";
  }

  //Proveri postanski broj
  let regPosBroj=/^[0-9]{5}$/;
  if(!(regPosBroj.test(vrPosBroj))){
    document.querySelector("#poljePosBroj > p").innerHTML = "Pogrešno unet poš. broj";
    document.querySelector("#poljePosBroj > p").style.color = "white";
    document.querySelector("#poljePosBroj > p").style.fontSize = "14px";
  }

  //Provera padajuce 
  if(ponuda.options[ponuda.options.selectedIndex].value=="0"){
    document.querySelector("#izbor > p").innerHTML="Morate izabrati proizvod";
    document.querySelector("#izbor > p").style.color="white";
    document.querySelector("#izbor > p").style.fontSize = "14px";
  }

  //Provera radio button-a
  var vrNacinPreuzimanja=" ";
  for(let i=0;i<nacinPreuzimanja.length;i++){
    if(nacinPreuzimanja[i].checked){
      vrNacinPreuzimanja=nacinPreuzimanja[i].value;
      break;
    }
  }
  if(vrNacinPreuzimanja==" "){
    document.querySelector("#nacinPreuzimanja > div > p").innerHTML="Morate izabrati nacin isporuke";
    document.querySelector("#nacinPreuzimanja > div > p").style.color="white";
    document.querySelector("#nacinPreuzimanja > div > p").style.fontSize = "14px";
  }
}