console.log("Provera");
//#region Kreiranje header-a u HTML-u
var meni = document.getElementById("meni");

var meniSvojstva1 = document.createElement("div");
meniSvojstva1.setAttribute("class", "container-fluid position-fixed vv-z-index vv-header-bg");

var meniSvojstva2 = document.createElement("div");
meniSvojstva2.setAttribute("class", "container");
meniSvojstva1.appendChild(meniSvojstva2);

var meniSvojstva3 = document.createElement("div");
meniSvojstva3.setAttribute("class", "row");
meniSvojstva2.appendChild(meniSvojstva3);

var meniSvojstva4 = document.createElement("div");
meniSvojstva4.setAttribute("class", "col-12");
meniSvojstva3.appendChild(meniSvojstva4);

let navigacija = document.createElement("nav");
navigacija.setAttribute("class", "navbar navbar-expand-lg navbar-dark py-0");
meniSvojstva4.appendChild(navigacija);

var linkZaLogo = document.createElement("a");
linkZaLogo.setAttribute("class", "navbar-brand");
linkZaLogo.setAttribute("href", "#");
var logo = document.createElement("img");
logo.setAttribute("src", "assets/img/logo.png");
logo.setAttribute("alt", "Ovo je logo.");
linkZaLogo.appendChild(logo);
navigacija.appendChild(linkZaLogo);

let navSvojstva = document.createElement("div");
navSvojstva.setAttribute("id", "navbarNav");
navSvojstva.setAttribute("class", "collapse navbar-collapse");
navigacija.appendChild(navSvojstva);

let neuredjenaLista = document.createElement("ul");
neuredjenaLista.setAttribute("class", "navbar-nav ml-auto");

var dugme = document.createElement("button");
dugme.setAttribute("class", "navbar-toggler");
dugme.setAttribute("type", "button");
dugme.setAttribute("data-toggle", "collapse");
dugme.setAttribute("data-target", "#navbarNav");
dugme.setAttribute("aria-controls", "navbarNav");
dugme.setAttribute("aria-expanded", "false");
dugme.setAttribute("aria-label", "Toggle navigation");
navigacija.appendChild(dugme);

var toggler = document.createElement("span");
toggler.setAttribute("class","navbar-toggler-icon");
dugme.appendChild(toggler);

let nazivOblasti = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
let linkKaOblasti = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];

for(let i=0; i<nazivOblasti.length; i++)
{
  var promeniLi = document.createElement("li");
  promeniLi.setAttribute("class", "nav-item");
  var promeniA = document.createElement("a");
  var unos = document.createTextNode(`${nazivOblasti[i]}`);
  promeniA.appendChild(unos);
  promeniA.setAttribute("class", "nav-link");
  promeniA.setAttribute("href", `${linkKaOblasti[i]}`);
  promeniLi.appendChild(promeniA);
  neuredjenaLista.appendChild(promeniLi);
}
navSvojstva.appendChild(neuredjenaLista);

meni.appendChild(meniSvojstva1);
//#endregion

//#region Kreiranje slider-a u HTML-u
var sekcijaSlajder = document.getElementById("slajder");

var slajderSvojstva1 = document.createElement("div");
slajderSvojstva1.setAttribute("class", "vv-welcome row position-absolute d-flex align-items-center vv-z-index-min mx-auto mt-5");

var slajderSvojstva2 = document.createElement("div");
slajderSvojstva2.setAttribute("class", "offset-1 offset-xl-4 col-10 col-xl-4 vv-welcome-message text-center vv-cover-block px-0 mt-5");
slajderSvojstva1.appendChild(slajderSvojstva2);

var tagH1 = document.createElement("h1");
tagH1.setAttribute("class", "pt-sm-5 pt-md-3 pt-xl-4 pt-xl-2 py-4");
var tekstH1 = document.createTextNode("Pekara Vidak");
tagH1.appendChild(tekstH1);
slajderSvojstva2.appendChild(tagH1);

var slajder = document.createElement("div");
slajder.setAttribute("id", "carousel")
slajder.setAttribute("class", "offset-2 offset-xl-3 px-0 col-8 col-xl-6");
slajderSvojstva1.appendChild(slajder);

var pozicijaSlike = ["prva","druga","treca","cetvrta"];
var slikaSlajd = ["assets/img/slider1.png","assets/img/slider2.png","assets/img/slider3.png", "assets/img/slider4.png"];


for(let i=0;i<slikaSlajd.length;i++)
{
  var imgSlajda = document.createElement("img"); 
  imgSlajda.setAttribute("src", `${slikaSlajd[i]}`);
  imgSlajda.setAttribute("alt", `Ovo je ${pozicijaSlike[i]} slika u okviru slajdera.`);
  imgSlajda.setAttribute("class", "col-12 px-0");
  slajder.appendChild(imgSlajda);
}
sekcijaSlajder.appendChild(slajderSvojstva1);

//Upotrebljen je plugin slick
$(document).ready(function(){
  $("#carousel").slick({
    autoplay:true,
    speed:2000,
    dots: true,
    arrows:false,
    infinite: true,
    fade: true,
    cssEase: 'linear'
  });
});

var pozadina = document.createElement("div");
pozadina.setAttribute("class", "vv-vh-100 vv-cover-1");
sekcijaSlajder.appendChild(pozadina);
//#endregion

//#region Kreiranje main-a u HTML-u
var main = document.getElementById("main");

//#region Ukratko
var ukratko = document.createElement("article");
ukratko.setAttribute("id", "ukratko");
main.appendChild(ukratko);

var ukratkoH2 = document.createElement("h2");
var ukratkoH2Tekst = document.createTextNode("Ukratko");
ukratkoH2.appendChild(ukratkoH2Tekst);
ukratkoH2.setAttribute("class", "text-center vv-header-color mt-3");
ukratko.appendChild(ukratkoH2);

var ukratkoH2LinijaBlok = document.createElement("div");
ukratkoH2LinijaBlok.setAttribute("class","d-flex justify-content-center");
var ukratkoH2Linija = document.createElement("span");
ukratkoH2Linija.setAttribute("class","line");
ukratkoH2LinijaBlok.appendChild(ukratkoH2Linija);
ukratko.appendChild(ukratkoH2LinijaBlok);

var ukratkoSekcija = document.createElement("section")
ukratkoSekcija.setAttribute("class","row mx-2");
ukratko.appendChild(ukratkoSekcija);

var descRegion = document.createElement("article");
descRegion.setAttribute("id", "desc-region");
descRegion.setAttribute("class", "offset-sm-2 offset-0 col-sm-8 col-12 mt-3");
ukratkoSekcija.appendChild(descRegion);

var spremanje = document.createElement("section");
spremanje.setAttribute("id","spremanje");
spremanje.setAttribute("class","row mb-5 vv-desc-block");
descRegion.appendChild(spremanje);

var spremanjePic = document.createElement("div");
spremanjePic.setAttribute("id","spremanje-pic");
spremanjePic.setAttribute("class","vv-bg-image vv-h-450 col-12 col-xl-6 px-0");
spremanje.appendChild(spremanjePic);

var spremanjeDesc = document.createElement("div");
spremanjeDesc.setAttribute("id","spremanje-desc2");
spremanjeDesc.setAttribute("class","col-12 col-xl-6 row row-cols-1 mx-0 pb-4");
spremanje.appendChild(spremanjeDesc);

var spremanjeDescSvojstva = document.createElement("div");
spremanjeDescSvojstva.setAttribute("class","px-2 px-xl-5 px-md-2 mt-5 d-flex flex-column align-items-center");
spremanjeDesc.appendChild(spremanjeDescSvojstva);

var spremanjeDescH3 = document.createElement("h3");
spremanjeDescH3.setAttribute("class","vv-h3");
var spremanjeDescH3Tekst = document.createTextNode("Proces spremanja");
spremanjeDescH3.appendChild(spremanjeDescH3Tekst);

var spremanjeDescP = document.createElement("p");
spremanjeDescP.setAttribute("class","vv-fs-22 mb-3");
var spremanjeDescPTekst = document.createTextNode("S ponosom možemo reći da naše pecivo spremamo sa najkvalitetnijim testom, začinima i sa, naravno, `pu`no ljubavi.");
spremanjeDescP.appendChild(spremanjeDescPTekst);

var spremanjeDescPNastavak = document.createElement("p");
spremanjeDescPNastavak.setAttribute("class","vv-fs-22");
var spremanjeDescPTekstNastavak = document.createTextNode("Takođe, moramo pohvaliti naše radnike koji spremaju najbolji hleb u gradu. Usrećili su mnogo ljudi. Više o nama možete pročitati ovde."); //"ovde" treba da bude link
spremanjeDescPNastavak.appendChild(spremanjeDescPTekstNastavak);

spremanjeDescSvojstva.appendChild(spremanjeDescH3);
spremanjeDescSvojstva.appendChild(spremanjeDescP);
spremanjeDescSvojstva.appendChild(spremanjeDescPNastavak);

var ukratkoOffset = document.createElement("article");
ukratkoOffset.setAttribute("class","offset-2");
ukratkoSekcija.appendChild(ukratkoOffset);
//#endregion

//#region Podrucje rada
var podrucjeRada = document.createElement("article");
podrucjeRada.setAttribute("id", "podrucje-rada");
main.appendChild(podrucjeRada);

var podrucjeRadaH2 = document.createElement("h2"); 
var podrucjeRadaH2Tekst = document.createTextNode("Područje rada");
podrucjeRadaH2.appendChild(podrucjeRadaH2Tekst);
podrucjeRadaH2.setAttribute("class", "text-center vv-header-color");
podrucjeRada.appendChild(podrucjeRadaH2);

var podrucjeRadaH2LinijaBlok = document.createElement("div");
podrucjeRadaH2LinijaBlok.setAttribute("class","d-flex justify-content-center");
var podrucjeRadaH2Linija = document.createElement("span");
podrucjeRadaH2Linija.setAttribute("class","line");
podrucjeRadaH2LinijaBlok.appendChild(podrucjeRadaH2Linija);
podrucjeRada.appendChild(podrucjeRadaH2LinijaBlok);

var podrucjeRadaSekcija = document.createElement("section");
podrucjeRadaSekcija.setAttribute("class", "row vv-cover-2");
podrucjeRada.appendChild(podrucjeRadaSekcija);

var podrucjeRadaBlokoviTekst = [
  "<p class=\"vv-ta-left vv-fs-26 vv-crna-slova\">U ponudi imamo različite vrste hlebova, mini pica, kiflica po kojima smo poznati, krofne, kao i druge pekarske proizvode i peciva. Kompletnu ponudu peciva možete da vidite <a class=\"vv-narandzasta-slova vv-fw-700\" href=\"#u-ponudi-peciva\">ovde</a>.</p>",
  
  "<p class=\"vv-ta-left vv-fs-26 vv-crna-slova\">U ponudi imamo nekoliko vrsta pica. Neke od njih su kaprićoza, gurmanska i vulkan za najveće ljubitelje ovog italijanskog specijaliteta. Kompletnu ponudu možete da vidite <a class=\"vv-narandzasta-slova vv-fw-700\" href=\"#u-ponudi-pice\">ovde</a>.</p>"];
var podrucjeRadaFontAwesome = ["bread","pizza"];
var podrucjeRadaDescId = ["bread", "pizza"];

var podrucjeRadaSvojstva1 = document.createElement("article");
podrucjeRadaSvojstva1.setAttribute("class", "offset-1 col-10 row mb-5 mt-3 px-0 py-5 d-flex justify-content-center"); 
podrucjeRadaSekcija.appendChild(podrucjeRadaSvojstva1);

for(let i=0;i<podrucjeRadaBlokoviTekst.length;i++)
{

  var podrucjeRadaSvojstva2I = document.createElement("section");
  podrucjeRadaSvojstva2I.setAttribute("class", "col-12 col-xl-5 mr-xl-2 mr-0 mb-2 mb-xl-0 px-0"); 
  podrucjeRadaSvojstva1.appendChild(podrucjeRadaSvojstva2I);
  var podrucjeRadaDesc = document.createElement("div");
  podrucjeRadaDesc.setAttribute("class","desc");
  podrucjeRadaSvojstva2I.appendChild(podrucjeRadaDesc);

  var podrucjeRadaDescSvojstva = document.createElement("div");
  podrucjeRadaDescSvojstva.setAttribute("class","d-flex justify-content-center");
  podrucjeRadaDesc.appendChild(podrucjeRadaDescSvojstva);

  var faBlock = document.createElement("div");
  faBlock.setAttribute("class","vv-fa-block mt-4");
  podrucjeRadaDescSvojstva.appendChild(faBlock);

  var podrucjeRadaFa = document.createElement("i");
  podrucjeRadaFa.setAttribute("class",`fas fa-${podrucjeRadaFontAwesome[i]}-slice`);
  faBlock.appendChild(podrucjeRadaFa);

  var podrucjeRadaPBlock = document.createElement("div");
  podrucjeRadaPBlock.setAttribute("id",`podrucje-rada-${podrucjeRadaDescId[i]}`);
  podrucjeRadaPBlock.setAttribute("class","pb-4 pt-2 px-4");
  podrucjeRadaDesc.appendChild(podrucjeRadaPBlock);

  document.getElementById(`podrucje-rada-${podrucjeRadaDescId[i]}`).innerHTML = `${podrucjeRadaBlokoviTekst[i]}`;
}
//#endregion

//#region O nama
var oNama = document.createElement("article");
oNama.setAttribute("id", "o-nama");
main.appendChild(oNama);

var oNamaH2 = document.createElement("h2"); 
var oNamaH2Tekst = document.createTextNode("O nama");
oNamaH2.appendChild(oNamaH2Tekst);
oNamaH2.setAttribute("class", "text-center vv-header-color");
oNama.appendChild(oNamaH2);

var oNamaH2LinijaBlok = document.createElement("div");
oNamaH2LinijaBlok.setAttribute("class","d-flex justify-content-center");
var oNamaH2Linija = document.createElement("span");
oNamaH2Linija.setAttribute("class","line");
oNamaH2LinijaBlok.appendChild(oNamaH2Linija);
oNama.appendChild(oNamaH2LinijaBlok);

var oNamaSekcija = document.createElement("section");
oNamaSekcija.setAttribute("class", "row mx-2");
oNama.appendChild(oNamaSekcija);

var oNamaRegion = document.createElement("article");
oNamaRegion.setAttribute("id","o-nama-region");
oNamaRegion.setAttribute("class","offset-sm-2 offset-0 col-sm-8 col-12 mt-3");
oNamaSekcija.appendChild(oNamaRegion);

var misija = document.createElement("section");
misija.setAttribute("id","misija");
misija.setAttribute("class","row vv-desc-block mb-4");
oNamaRegion.appendChild(misija);

var misijaDesc = document.createElement("div");
misijaDesc.setAttribute("id","misija-desc");
misijaDesc.setAttribute("class","col-12 col-xl-6 mt-4 row row-cols-1 d-xl-block d-none mx-0");
misija.appendChild(misijaDesc);

var misijaDescSvojstvo = document.createElement("div");
misijaDescSvojstvo.setAttribute("class","px-2 pb-4 mt-2 px-xl-3 px-md-2 d-flex flex-column justify-content-center align-items-center");
misijaDesc.appendChild(misijaDescSvojstvo);

var misijaDescH3 = document.createElement("h3");
misijaDescH3.setAttribute("class","vv-h3");
var misijaDescH3Tekst = document.createTextNode("Naša misija");
misijaDescH3.appendChild(misijaDescH3Tekst);
misijaDescSvojstvo.appendChild(misijaDescH3);

var misijaDescPTekst = [
  "Težimo da svojom ponudom pekarskih proizvoda, kao i pica, zadovoljimo sve potrebe potrošača koji žele kvalitetan obrok.","Želimo da kupci u formatu pekare dobiju kvalitetnu i raznovrsnu ponudu proizvoda po niskim cenama. Takođe, želimo da prepoznatiljivim, prijatnim ambijentom naše mušterije osete komfort."];

for(let i=0; i<misijaDescPTekst.length;i++)
{
  var misijaDescP = document.createElement("p");
  misijaDescP.setAttribute("class","vv-fs-22 pt-2");
  var misijaDescP1Tekst = document.createTextNode(`${misijaDescPTekst[i]}`);
  misijaDescP.appendChild(misijaDescP1Tekst);
  misijaDescSvojstvo.appendChild(misijaDescP);
} 

var misijaPic = document.createElement("div");
misijaPic.setAttribute("id","misija-pic");
misijaPic.setAttribute("class","vv-bg-image vv-h-450 col-12 col-xl-6 px-0");
misija.appendChild(misijaPic);

var misijaDesc2 = document.createElement("div");
misijaDesc2.setAttribute("id","misija-desc2");
misijaDesc2.setAttribute("class","col-12 col-xl-6 row row-cols-1 d-xl-none d-block mx-0 pb-4 pb-md-0");
misija.appendChild(misijaDesc2);

var misijaDescSvojstvo2 = document.createElement("div");
misijaDescSvojstvo2.setAttribute("class","px-2 px-xl-5 px-md-2 mx-md-2 my-md-2 d-flex flex-column justify-content-center align-items-center");
misijaDesc2.appendChild(misijaDescSvojstvo2);

var misijaDescH32 = document.createElement("h3");
misijaDescH32.setAttribute("class","vv-h3 pt-3");
var misijaDescH3Tekst2 = document.createTextNode("Naša misija");
misijaDescH32.appendChild(misijaDescH3Tekst2);
misijaDescSvojstvo2.appendChild(misijaDescH32);

var misijaDescPTekst2 = [
  "Težimo da svojom ponudom pekarskih proizvoda, kao i pica, zadovoljimo sve potrebe potrošača koji žele kvalitetan obrok.","Želimo da kupci u formatu pekare dobiju kvalitetnu i raznovrsnu ponudu proizvoda po niskim cenama. Takođe, želimo da prepoznatiljivim, prijatnim ambijentom naše mušterije osete komfort."
];

for(let i=0; i<misijaDescPTekst2.length;i++)
{
  var misijaDescP2 = document.createElement("p");
  misijaDescP2.setAttribute("class","vv-fs-22 pt-2");
  var misijaDescP1Tekst2 = document.createTextNode(`${misijaDescPTekst2[i]}`);
  misijaDescP2.appendChild(misijaDescP1Tekst2);
  misijaDescSvojstvo2.appendChild(misijaDescP2);
} 

var vizija = document.createElement("section");
vizija.setAttribute("id","vizija");
vizija.setAttribute("class","row mb-5 vv-desc-block");
oNamaRegion.appendChild(vizija);

var vizijaPic = document.createElement("div");
vizijaPic.setAttribute("id","vizija-pic");
vizijaPic.setAttribute("class","vv-bg-image vv-h-450 col-12 col-xl-6 px-0");
vizija.appendChild(vizijaPic);

var vizijaDesc = document.createElement("div");
vizijaDesc.setAttribute("id","vizija-desc");
vizijaDesc.setAttribute("class","col-12 col-xl-6 mt-3 row row-cols-1 d-block mx-0 pb-3");
vizija.appendChild(vizijaDesc);

var vizijaDescSvojstvo = document.createElement("div");
vizijaDescSvojstvo.setAttribute("class","px-2 px-xl-3 px-md-2 d-flex flex-column justify-content-center align-items-center d-none");
vizijaDesc.appendChild(vizijaDescSvojstvo);

var vizijaDescH3 = document.createElement("h3");
vizijaDescH3.setAttribute("class","vv-h3");
var vizijaDescH3Tekst = document.createTextNode("Naša vizija");
vizijaDescH3.appendChild(vizijaDescH3Tekst);
vizijaDescSvojstvo.appendChild(vizijaDescH3);

var vizijaDescPTekst = [
  "Vizija organizacije je da „Pekara Vidak“ bude sinonim za kvalitetnu i ukusnu hranu.",
  "Takođe, želimo da imamo lidersku poziciju na tržištu i da stalnim rastom broja objekata budemo dostupni što većem broju stanovništva, a podizanjem kvaliteta i standarda poveća lojalnost kupaca."
];

for(let i=0; i<vizijaDescPTekst.length;i++)
{
  var vizijaDescP = document.createElement("p");
  vizijaDescP.setAttribute("class","vv-fs-22 pt-3");
  var vizijaDescP1Tekst = document.createTextNode(`${vizijaDescPTekst[i]}`);
  vizijaDescP.appendChild(vizijaDescP1Tekst);
  vizijaDescSvojstvo.appendChild(vizijaDescP);
} 

var oNamaOffset = document.createElement("article");
oNamaOffset.setAttribute("class","offset-sm-2 offset-0");
oNamaSekcija.appendChild(oNamaOffset);
//#endregion

//#region U ponudi
var uPonudi = document.createElement("article");
uPonudi.setAttribute("id","u-ponudi");
main.appendChild(uPonudi);

var uPonudiH2 = document.createElement("h2");
var uPonudiH2Tekst = document.createTextNode("Izdvajamo");
uPonudiH2.appendChild(uPonudiH2Tekst);
uPonudiH2.setAttribute("class", "text-center vv-header-color");
uPonudi.appendChild(uPonudiH2);

var uPonudiH2LinijaBlok = document.createElement("div");
uPonudiH2LinijaBlok.setAttribute("class","d-flex justify-content-center");
var uPonudiH2Linija = document.createElement("span");
uPonudiH2Linija.setAttribute("class","line mb-3");
uPonudiH2LinijaBlok.appendChild(uPonudiH2Linija);
uPonudi.appendChild(uPonudiH2LinijaBlok);

var uPonudiSekcija = document.createElement("section");
uPonudiSekcija.setAttribute("class","ponuda-cover pb-4 pt-2");
uPonudi.appendChild(uPonudiSekcija);

var uPonudiPeciva = document.createElement("article");
uPonudiPeciva.setAttribute("id","u-ponudi-peciva");
uPonudiPeciva.setAttribute("class","row mx-1 mt-3 d-flex justify-content-center");
uPonudiSekcija.appendChild(uPonudiPeciva);

var uPonudiPecivaSvojstva1 = document.createElement("section");
uPonudiPecivaSvojstva1.setAttribute("class","offset-0 col-12 row");
uPonudiPeciva.appendChild(uPonudiPecivaSvojstva1);

var pecivaPonuda = ["Krofne","Mini-pice","Kiflice sa viršlama","Hleb"];
var cenaPeciva = ["30 RSD/kom","80 RSD/100 gr.","100 RSD/100 gr.","40 RSD/kom"];
var pecivaId = ["\"kr\"","\"mi\"","\"ki\"","\"hl\""];
for(let i=0;i<pecivaPonuda.length;i++)
{
  var uPonudiPecivaSvojstva2 = document.createElement("article");
  uPonudiPecivaSvojstva2.setAttribute("class","col-12 col-md-6 col-xl-3 mb-xl-0 mb-3");
  uPonudiPecivaSvojstva1.appendChild(uPonudiPecivaSvojstva2);
 
  var uPonudiPecivaSvojstva3 = document.createElement("section");
  uPonudiPecivaSvojstva3.setAttribute("class","vv-b-grey-double");
  uPonudiPecivaSvojstva2.appendChild(uPonudiPecivaSvojstva3);

  var uPonudiPecivaSlika = document.createElement("div");
  uPonudiPecivaSlika.setAttribute("id",`pecivo${i+1}-pic`);
  uPonudiPecivaSlika.setAttribute("class","vv-bg-image vv-h-320");
  uPonudiPecivaSvojstva3.appendChild(uPonudiPecivaSlika);

  var uPonudiPecivaNaziv = document.createElement("div");
  uPonudiPecivaNaziv.setAttribute("class","vv-header-color naziv d-flex justify-content-center vv-bg-white vv-fw-700 vv-fs-22 py-2");
  var uPonudiPecivaNazivTekst = document.createTextNode(`${pecivaPonuda[i]}`);
  uPonudiPecivaNaziv.appendChild(uPonudiPecivaNazivTekst);
  uPonudiPecivaSvojstva3.appendChild(uPonudiPecivaNaziv);

  var ponudaBtn = document.createElement("div");
  ponudaBtn.setAttribute("class","ponuda-btn");
  uPonudiPecivaSvojstva3.appendChild(ponudaBtn);

  var ponudaBtnSvojstva = document.createElement("div");
  ponudaBtnSvojstva.setAttribute("class","d-flex align-items-center price row mx-0");
  ponudaBtn.appendChild(ponudaBtnSvojstva);

  var ponudaBtnDisabled = document.createElement("button");
  ponudaBtnDisabled.type = ("button");
  ponudaBtnDisabled.disabled = ("disabled");
  ponudaBtnDisabled.setAttribute("class","vv-fw-700 ponuda-fs btn-lg vv-br-0 col-sm-8 col-12 text-center px-0 mr-0 tx-b");
  ponudaBtnSvojstva.appendChild(ponudaBtnDisabled);
  var ponudaBtnDisabledTekst = document.createTextNode(`${cenaPeciva[i]}`);
  ponudaBtnDisabled.appendChild(ponudaBtnDisabledTekst);

  var ponudaBtnPoruci = document.createElement("button");
  ponudaBtnPoruci.type = ("button");
  ponudaBtnPoruci.setAttribute("class","btn-secondary vv-br-0 btn-lg col-sm-4 col-12 text-uppercase text-center px-0 mr-0 btn-bg");
  ponudaBtnPoruci.setAttribute("onclick",`poruci(${pecivaId[i]})`);
  ponudaBtnSvojstva.appendChild(ponudaBtnPoruci);
  
  var aPoruci = document.createElement("a");
  aPoruci.href = ("#kontakt");
  var aPoruciTekst = document.createTextNode("Poruči");
  aPoruci.appendChild(aPoruciTekst);
  ponudaBtnPoruci.appendChild(aPoruci);
}

var uPonudiPizza = document.createElement("article");
uPonudiPizza.setAttribute("id","u-ponudi-pice");
uPonudiPizza.setAttribute("class","row mx-1 mt-3 d-flex justify-content-center");
uPonudiSekcija.appendChild(uPonudiPizza);

var uPonudiPizzaSvojstva1 = document.createElement("section");
uPonudiPizzaSvojstva1.setAttribute("class","offset-0 col-12 row");
uPonudiPizza.appendChild(uPonudiPizzaSvojstva1);

var pizzaPonuda = ["Margarita","Capriciosa","Quattro Stagioni","Vegeteriana"];
var cenaPizza = ["100 RSD/parče","120 RSD/parče","140 RSD/parče","150 RSD/parče"];
var pizzeId = ["\"ma\"","\"ca\"","\"qu\"","\"ve\""];
for(let i=0;i<pizzaPonuda.length;i++)
{
  var uPonudiPizzaSvojstva2 = document.createElement("article");
  uPonudiPizzaSvojstva2.setAttribute("class","col-12 col-md-6 col-xl-3 mb-xl-0 mb-3");
  uPonudiPizzaSvojstva1.appendChild(uPonudiPizzaSvojstva2);
 
  var uPonudiPizzaSvojstva3 = document.createElement("section");
  uPonudiPizzaSvojstva3.setAttribute("class","vv-b-grey-double");
  uPonudiPizzaSvojstva2.appendChild(uPonudiPizzaSvojstva3);

  var uPonudiPizzaSlika = document.createElement("div");
  uPonudiPizzaSlika.setAttribute("id",`pizza${i+1}-pic`);
  uPonudiPizzaSlika.setAttribute("class","vv-bg-image vv-h-320");
  uPonudiPizzaSvojstva3.appendChild(uPonudiPizzaSlika);

  var uPonudiPizzaNaziv = document.createElement("div");
  uPonudiPizzaNaziv.setAttribute("class","vv-header-color naziv d-flex justify-content-center vv-bg-white vv-fw-700 vv-fs-22 py-2");
  var uPonudiPizzaNazivTekst = document.createTextNode(`${pizzaPonuda[i]}`);
  uPonudiPizzaNaziv.appendChild(uPonudiPizzaNazivTekst);
  uPonudiPizzaSvojstva3.appendChild(uPonudiPizzaNaziv);

  var ponudaBtn2 = document.createElement("div");
  ponudaBtn2.setAttribute("class","ponuda-btn");
  uPonudiPizzaSvojstva3.appendChild(ponudaBtn2);

  var ponudaBtnSvojstva2 = document.createElement("div");
  ponudaBtnSvojstva2.setAttribute("class","d-flex align-items-center price row mx-0");
  ponudaBtn2.appendChild(ponudaBtnSvojstva2);

  var ponudaBtnDisabled2 = document.createElement("button");
  ponudaBtnDisabled2.type = ("button");
  ponudaBtnDisabled2.disabled = ("disabled");
  ponudaBtnDisabled2.setAttribute("class","vv-fw-700 ponuda-fs btn-lg vv-br-0 col-sm-8 col-12 text-center px-0 mr-0 tx-b");
  ponudaBtnSvojstva2.appendChild(ponudaBtnDisabled2);
  var ponudaBtnDisabledTekst2 = document.createTextNode(`${cenaPizza[i]}`);
  ponudaBtnDisabled2.appendChild(ponudaBtnDisabledTekst2);

  var ponudaBtnPoruci2 = document.createElement("button");
  ponudaBtnPoruci2.type = ("button");
  ponudaBtnPoruci2.setAttribute("class","btn-secondary vv-br-0 btn-lg col-sm-4 col-12 text-uppercase text-center px-0 mr-0 btn-bg");
  ponudaBtnPoruci2.setAttribute("onclick",`poruci(${pizzeId[i]})`);
  ponudaBtnSvojstva2.appendChild(ponudaBtnPoruci2);
  
  var aPoruci2 = document.createElement("a");
  aPoruci2.href = ("#kontakt");
  var aPoruciTekst2 = document.createTextNode("Poruči");
  aPoruci2.appendChild(aPoruciTekst2);
  ponudaBtnPoruci2.appendChild(aPoruci2);
}
//#endregion

//#region Kontakt
var kontakt = document.createElement("article");
kontakt.setAttribute("id","kontakt");
main.appendChild(kontakt);

var kontaktH2 = document.createElement("h2");
var kontaktH2Tekst = document.createTextNode("Poručite ovde");
kontaktH2.appendChild(kontaktH2Tekst);
kontaktH2.setAttribute("class", "text-center vv-header-color mt-3");
kontakt.appendChild(kontaktH2);

var kontaktH2LinijaBlok = document.createElement("div");
kontaktH2LinijaBlok.setAttribute("class","d-flex justify-content-center");
var kontaktH2Linija = document.createElement("span");
kontaktH2Linija.setAttribute("class","line mb-3");
kontaktH2LinijaBlok.appendChild(kontaktH2Linija);
kontakt.appendChild(kontaktH2LinijaBlok);

var kontaktSekcija = document.createElement("section");
kontaktSekcija.setAttribute("id","kontakt-sekcija");
kontaktSekcija.setAttribute("class","container mb-5");
kontakt.appendChild(kontaktSekcija);

var kontaktSvojstvo = document.createElement("div");
kontaktSvojstvo.setAttribute("class","row");
kontaktSekcija.appendChild(kontaktSvojstvo);

var kontaktGifBlock = document.createElement("div");
kontaktGifBlock.setAttribute("class","col-12 col-lg-6");
kontaktSvojstvo.appendChild(kontaktGifBlock);
var kontaktGif = document.createElement("div");
kontaktGif.setAttribute("id","gif");
kontaktGif.setAttribute("class","vv-bg-image px-0");
kontaktGifBlock.appendChild(kontaktGif);

var kontaktFormaSekcija = document.createElement("section");
kontaktFormaSekcija.setAttribute("class","col-12 col-lg-6 py-3 d-flex justify-content-center align-items-center bg-orange");
kontaktSvojstvo.appendChild(kontaktFormaSekcija);

var kontaktForma = document.createElement("form");
kontaktForma.action = ("#kontakt");
kontaktFormaSekcija.appendChild(kontaktForma);
var poljeFormaIdIA = ["poljeImePrezime","poljeAdresa"];
var formaIdIA = ["imePrezime","adresa"];
var labelTekstIA = ["Ime i prezime:","Adresa:"];
var placeholderiIA = ["Marko Marković","Zdravka Čelara 16"];

for(let i=0;i<2;i++)
{
  var poljeFormaIA = document.createElement("div");
  poljeFormaIA.setAttribute("id",`${poljeFormaIdIA[i]}`);
  poljeFormaIA.setAttribute("class","form-group row px-4");
  kontaktForma.appendChild(poljeFormaIA);

  var labelFormeIA = document.createElement("label");
  labelFormeIA.setAttribute("class","col-12 px-0");
  labelFormeIA.setAttribute("for",`${formaIdIA[i]}`);
  var labelFormeTekstIA = document.createTextNode(`${labelTekstIA[i]}`);
  labelFormeIA.appendChild(labelFormeTekstIA);
  poljeFormaIA.appendChild(labelFormeIA);

  var inputFormaIA = document.createElement("input");
  inputFormaIA.setAttribute("id",`${formaIdIA[i]}`);
  inputFormaIA.setAttribute("class","col-12 py-1 vv-br-025");
  inputFormaIA.type = ("text");
  inputFormaIA.name = (`${formaIdIA[i]}`);
  inputFormaIA.placeholder = (`${placeholderiIA[i]}`);
  poljeFormaIA.appendChild(inputFormaIA);

  var pTagIA = document.createElement("p");
  poljeFormaIA.appendChild(pTagIA); 
}

var blokGradBroj = document.createElement("div");
blokGradBroj.setAttribute("class","form-group row px-2 d-sm-flex d-none");
kontaktForma.appendChild(blokGradBroj);

var poljeFormaIdGP = ["poljeGrad","poljePosBroj"];
var formaIdGP = ["grad","posBroj"];
var labelTekstGP = ["Grad:","Poš. broj:"];
var placeholderiGP = ["Beograd","11060"];

for(let i=0;i<poljeFormaIdGP.length;i++)
{
  var poljeFormaGP = document.createElement("div");
  poljeFormaGP.setAttribute("id",`${poljeFormaIdGP[i]}`);
  poljeFormaGP.setAttribute("class","col-6");
  blokGradBroj.appendChild(poljeFormaGP);

  var labelFormeGP = document.createElement("label");
  labelFormeGP.setAttribute("class","px-0 py-0 my-0 mb-1");
  labelFormeGP.setAttribute("for",`${formaIdGP[i]}`);
  var labelFormeTekstGP = document.createTextNode(`${labelTekstGP[i]}`);
  labelFormeGP.appendChild(labelFormeTekstGP);
  poljeFormaGP.appendChild(labelFormeGP);

  var brTag = document.createElement("br");
  poljeFormaGP.appendChild(brTag);

  var inputFormaGP = document.createElement("input");
  inputFormaGP.setAttribute("id",`${formaIdGP[i]}`);
  inputFormaGP.setAttribute("class","py-1 px-2 vv-br-025");
  inputFormaGP.type = ("text");
  inputFormaGP.name = (`${formaIdGP[i]}`);
  inputFormaGP.placeholder = (`${placeholderiGP[i]}`);
  poljeFormaGP.appendChild(inputFormaGP);

  var pTagGP = document.createElement("p");
  poljeFormaGP.appendChild(pTagGP); 
}

var poljeFormaIdGP2 = ["poljeGrad2","poljePosBroj2"];
var formaIdGP2 = ["grad2","posBroj2"];

for(let i=0;i<2;i++)
{
  var poljeFormaGP2 = document.createElement("div");
  poljeFormaGP2.setAttribute("id",`${poljeFormaIdGP2[i]}`);
  poljeFormaGP2.setAttribute("class","col-12 px-2 d-sm-none d-block mb-3 form-group row px-0 mx-0");
  kontaktForma.appendChild(poljeFormaGP2);

  var labelFormeGP2 = document.createElement("label");
  labelFormeGP2.setAttribute("class","col-12 px-0");
  labelFormeGP2.setAttribute("for",`${formaIdGP2[i]}`);
  var labelFormeTekstGP2 = document.createTextNode(`${labelTekstGP[i]}`);
  labelFormeGP2.appendChild(labelFormeTekstGP2);
  poljeFormaGP2.appendChild(labelFormeGP2);

  var inputFormaGP2 = document.createElement("input");
  inputFormaGP2.setAttribute("id",`${formaIdGP2[i]}`);
  inputFormaGP2.setAttribute("class","col-12 py-1 vv-br-025");
  inputFormaGP2.type = ("text");
  inputFormaGP2.name = (`${formaIdGP2[i]}`);
  inputFormaGP2.placeholder = (`${placeholderiGP[i]}`);
  poljeFormaGP2.appendChild(inputFormaGP2);

  var pTagGP2 = document.createElement("p");
  poljeFormaGP2.appendChild(pTagGP2);
}
var izbor = document.createElement("div");
izbor.setAttribute("id","izbor");
izbor.setAttribute("class","col-12 px-2");
kontaktForma.appendChild(izbor);

var labelPonuda = document.createElement("label");
labelPonuda.setAttribute("for","ponuda");
var labelPonudaTekst = document.createTextNode("Odaberite proizvod:");
labelPonuda.appendChild(labelPonudaTekst);
izbor.appendChild(labelPonuda);

var selectPonuda = document.createElement("select");
selectPonuda.setAttribute("id","ponuda");
selectPonuda.setAttribute("class","form-control");
izbor.appendChild(selectPonuda);

var izaberite = document.createElement("option");
izaberite.value = ("0");
var izaberiteTekst = document.createTextNode("Izaberite...");
izaberite.appendChild(izaberiteTekst);
selectPonuda.appendChild(izaberite);

var opcije = ["kr","mi","ki","hl","ma","ca","qu","ve"];
var opcijeTekst = ["Krofne","Mini-pice","Kiflice sa viršlama","Hleb","Margarita","Capriciosa","Quattro Stagioni","Vegeteriana"];

for(let i=0;i<opcije.length;i++)
{
  var opcija = document.createElement("option");
  opcija.setAttribute("id",`${opcije[i]}`);
  opcija.value = (`${opcije[i]}`);
  selectPonuda.appendChild(opcija);
  var opcijaTekst = document.createTextNode(`${opcijeTekst[i]}`);
  opcija.appendChild(opcijaTekst);
}

var pTagI = document.createElement("p");
izbor.appendChild(pTagI);

var preuzimanje = document.createElement("div");
preuzimanje.setAttribute("id","nacinPreuzimanja");
preuzimanje.setAttribute("class","form-group row px-0 mt-4 mb-0");
kontaktForma.appendChild(preuzimanje);

var preuzimanjeOffset = document.createElement("div");
preuzimanjeOffset.setAttribute("class","offset-1");
preuzimanje.appendChild(preuzimanjeOffset);

var preuzimanjaId = ["licno","dostava"];
var preuzimanjaValue = ["L","D"];
var preuzimanjaLabelTekst = ["Lično preuzimanje","Dostava"];

for(let i=0;i<preuzimanjaId.length;i++)
{
  var preuzimanjeBlock = document.createElement("div");
  preuzimanjeBlock.setAttribute("class","form-check col-5");
  preuzimanje.appendChild(preuzimanjeBlock);

  var preuzimanjeInput = document.createElement("input");
  preuzimanjeInput.setAttribute("class","form-check-input");
  preuzimanjeInput.setAttribute("id",`${preuzimanjaId[i]}`);
  preuzimanjeInput.type = ("radio");
  preuzimanjeInput.name = ("nacinPreuzimanja");
  preuzimanjeInput.value = (`${preuzimanjaValue[i]}`);
  preuzimanjeBlock.appendChild(preuzimanjeInput);

  var preuzimanjeLabel = document.createElement("label");
  preuzimanjeLabel.setAttribute("class","form-check-label");
  preuzimanjeLabel.setAttribute("for","dostava");
  var preuzimanjeLabelTekst = document.createTextNode(`${preuzimanjaLabelTekst[i]}`);
  preuzimanjeLabel.appendChild(preuzimanjeLabelTekst);
  preuzimanjeBlock.appendChild(preuzimanjeLabel);
}

var pTagPBlok = document.createElement("div");
pTagPBlok.setAttribute("class","col-12 row ml-3");
preuzimanje.appendChild(pTagPBlok);

var pTagP = document.createElement("p");
pTagP.setAttribute("class","col-12");
pTagPBlok.appendChild(pTagP);

var novaPonudaBlok = document.createElement("div");
novaPonudaBlok.setAttribute("class","form-group row px-0");
kontaktForma.appendChild(novaPonudaBlok);

var novaPonudaBlokOffset = document.createElement("div");
novaPonudaBlokOffset.setAttribute("class","offset-1");
novaPonudaBlok.appendChild(novaPonudaBlokOffset);

var novaPonuda = document.createElement("div");
novaPonuda.setAttribute("class","form-check col-11");
novaPonudaBlok.appendChild(novaPonuda);

var novaPonudaInput = document.createElement("input");
novaPonudaInput.setAttribute("class","form-check-input");
novaPonudaInput.setAttribute("id","novaPonuda");
novaPonudaInput.type = "checkbox";
novaPonudaInput.name = "novaPonuda";
novaPonudaInput.value = "novaPonuda";
novaPonuda.appendChild(novaPonudaInput);

var novaPonudaLabel = document.createElement("label");
novaPonudaLabel.setAttribute("class","form-check-label");
novaPonudaLabel.setAttribute("for","novaPonuda");
novaPonuda.appendChild(novaPonudaLabel);

var novaPonudaLabelText = document.createTextNode("Želim da budem obaveštenen o novim proizvodima i akcijama.");
novaPonudaLabel.appendChild(novaPonudaLabelText);

var posaljiBlok = document.createElement("div");
posaljiBlok.setAttribute("onclick","provera()");
posaljiBlok.setAttribute("class","form-group d-flex justify-content-center");
kontaktForma.appendChild(posaljiBlok);


var posaljiButton = document.createElement("input");
posaljiButton.setAttribute("id","btnPosalji");
posaljiButton.setAttribute("class","btn vv-br-025 vv-btn-grey");
posaljiButton.type = ("button");
posaljiButton.value = ("Pošalji");
posaljiBlok.appendChild(posaljiButton);
//#endregion

//#region O autoru
var oAutoru = document.createElement("article");
oAutoru.setAttribute("id","o-autoru");
oAutoru.setAttribute("class","ponuda-cover");
main.appendChild(oAutoru);
var oAutoruH2 = document.createElement("h2");
var oAutoruH2Tekst = document.createTextNode("O autoru");
oAutoruH2.appendChild(oAutoruH2Tekst);
oAutoruH2.setAttribute("class", "text-center vv-header-color mt-3");
oAutoru.appendChild(oAutoruH2);

var oAutoruH2LinijaBlok = document.createElement("div");
oAutoruH2LinijaBlok.setAttribute("class","d-flex justify-content-center");
var oAutoruH2Linija = document.createElement("span");
oAutoruH2Linija.setAttribute("class","line mb-3");
oAutoruH2LinijaBlok.appendChild(oAutoruH2Linija);
oAutoru.appendChild(oAutoruH2LinijaBlok);

var oAutoruSekcija = document.createElement("section");
oAutoruSekcija.setAttribute("class","row mx-1");
oAutoru.appendChild(oAutoruSekcija);

var oAutoruRegion = document.createElement("article");
oAutoruRegion.setAttribute("id","o-autoru-region");
oAutoruRegion.setAttribute("class","vv-b-orange-double offset-sm-2 offset-0 col-sm-8 col-12 mt-3 mb-4");
oAutoruSekcija.appendChild(oAutoruRegion);

var oAutoruRegionSvojstva = document.createElement("section");
oAutoruRegionSvojstva.setAttribute("class","row vv-desc-block");
oAutoruRegion.appendChild(oAutoruRegionSvojstva);

var oAutoruPic = document.createElement("div");
oAutoruPic.setAttribute("id","o-autoru-pic");
oAutoruPic.setAttribute("class","vv-bg-image vv-h-580 col-12 col-xl-6 px-0");
oAutoruRegionSvojstva.appendChild(oAutoruPic);

var oAutoruDesc = document.createElement("div");
oAutoruDesc.setAttribute("id","o-autoru-desc");
oAutoruDesc.setAttribute("class","col-12 col-xl-6 mt-3 row row-cols-1 mx-0");
oAutoruRegionSvojstva.appendChild(oAutoruDesc);

var oAutoruDescSvojstva = document.createElement("div");
oAutoruDescSvojstva.setAttribute("class","px-2 px-xl-5 px-md-2 d-flex flex-column justify-content-center align-items-center d-none");
oAutoruDesc.appendChild(oAutoruDescSvojstva);

var oAutoruTekst = [
  "Zovem se Viktor Vidaković. Nedavno sam završio tehničku školu „Mileta Nikolić“ u Aranđelovcu. Počeo sam da studiram informacione tehnologije i veb programiranje na Visokoj školi ICT.",
  "Programiranje mi je od početka bilo veoma fascinantno, jer imamo mogućnost da kreiramo mnogo solucija i programa kako bismo nekome olakšali život. Rekao bih da moram mnogo da istražujem da bih bio spreman za veće izazove, ali se nadam da ću u budućnosti naučiti mnogo toga."
];

for(let i=0;i<oAutoruTekst.length;i++)
{
  var oAutoruDescP = document.createElement("p");
  oAutoruDescP.setAttribute("class","vv-fs-22 mb-3");
  var oAutoruDescPTekst = document.createTextNode(`${oAutoruTekst[i]}`);
  oAutoruDescP.appendChild(oAutoruDescPTekst);
  oAutoruDescSvojstva.appendChild(oAutoruDescP);
}
//#endregion

//#endregion

//#region Kreiranje footer-a u HTML-u
var footer = document.getElementById("footer");

var footerSvojstva1 = document.createElement("section");
footerSvojstva1.setAttribute("class","d-flex justify-content-center row mx-0");
footer.appendChild(footerSvojstva1);

var footerSvojstva2 = document.createElement("article");
footerSvojstva2.setAttribute("class","container-md col-10 row d-flex justify-content-center px-0 mx-0");
footerSvojstva1.appendChild(footerSvojstva2);

var footerSvojstva3 = document.createElement("section");
footerSvojstva3.setAttribute("class","col-10 px-0");
footerSvojstva2.appendChild(footerSvojstva3);

var footerLinkovi = document.createElement("article");
footerLinkovi.setAttribute("id","footer-links");
footerLinkovi.setAttribute("class","d-flex justify-content-center col-12 row my-3 mx-0");
footerSvojstva3.appendChild(footerLinkovi);

var footerLinkoviSvojstva1 = document.createElement("section");
footerLinkoviSvojstva1.setAttribute("class","col-12 col-xl-6 row pr-0");
footerLinkovi.appendChild(footerLinkoviSvojstva1);

var linksFooter = document.createElement("article");
linksFooter.setAttribute("id","links");
linksFooter.setAttribute("class","col-12 col-sm-6 px-0 py-3");
footerLinkoviSvojstva1.appendChild(linksFooter);

var linksFooterH3 = document.createElement("h3");
var linksFooterH3Tekst = document.createTextNode("Linkovi:");
linksFooterH3.appendChild(linksFooterH3Tekst);
linksFooter.appendChild(linksFooterH3);

var linksFooterUl = document.createElement("ul");
linksFooterUl.setAttribute("class","navbar-nav");
linksFooter.appendChild(linksFooterUl);

var linksFooterAHref = ["#","#o-nama","#u-ponudi","#kontakt","#o-autoru"];
var linksFooterAText = ["Početna","O nama","U ponudi","Kontakt","O autoru"];
for(let i=0;i<linksFooterAHref.length;i++)
{
  var linksFooterLi = document.createElement("li");
  linksFooterLi.setAttribute("class","nav-item");
  linksFooterUl.appendChild(linksFooterLi);

  var linksFooterA = document.createElement("a");
  linksFooterA.setAttribute("class","nav-link d-flex align-items-center");
  linksFooterA.href = (`${linksFooterAHref[i]}`);
  linksFooterLi.appendChild(linksFooterA);

  var linksFooterAI = document.createElement("i");
  linksFooterAI.setAttribute("class","fas fa-angle-right pr-1");
  linksFooterA.appendChild(linksFooterAI);

  var linksFooterAP = document.createElement("p");
  linksFooterA.appendChild(linksFooterAP);

  var linksFooterAPTekst = document.createTextNode(`${linksFooterAText[i]}`);
  linksFooterAP.appendChild(linksFooterAPTekst);
}

var filesFooter = document.createElement("article");
filesFooter.setAttribute("id","files"); 
filesFooter.setAttribute("class","col-12 col-sm-6 px-0 py-3"); 
footerLinkoviSvojstva1.appendChild(filesFooter);

var filesFooterH3 = document.createElement("h3");
var filesFooterH3Tekst = document.createTextNode("Fajlovi:");
filesFooterH3.appendChild(filesFooterH3Tekst);
filesFooter.appendChild(filesFooterH3);

var filesFooterUl = document.createElement("ul");
filesFooterUl.setAttribute("class","navbar-nav");
filesFooter.appendChild(filesFooterUl);

var filesFooterAHref = ["assets/js/main.js","assets/css/style.css","assets/css/responsive.css","sitemap.xml","robots.txt","dokumentacija.pdf"];
var filesFooterATekstovi = ["JavaScript","CSS","Responsive","Sitemap","Robots.txt","Dokumentacija"];
for(let i=0;i<filesFooterAHref.length;i++)
{
  var filesFooterLi = document.createElement("li");
  filesFooterLi.setAttribute("class","nav-item");
  filesFooterUl.appendChild(filesFooterLi);

  var filesFooterA = document.createElement("a");
  filesFooterA.setAttribute("class","nav-link d-flex align-items-center");
  filesFooterA.href = (`${filesFooterAHref[i]}`);
  filesFooterA.target = "_blank";
  filesFooterLi.appendChild(filesFooterA);

  var filesFooterAI = document.createElement("i");
  filesFooterAI.setAttribute("class","fas fa-angle-right pr-1");
  filesFooterA.appendChild(filesFooterAI);

  var filesFooterAP = document.createElement("p");
  filesFooterA.appendChild(filesFooterAP);

  var filesFooterAPTekst = document.createTextNode(`${filesFooterATekstovi[i]}`);
  filesFooterAP.appendChild(filesFooterAPTekst);
}

var footerLinkoviSvojstva2 = document.createElement("section");
footerLinkoviSvojstva2.setAttribute("class","col-12 col-xl-6 row pr-0");
footerLinkovi.appendChild(footerLinkoviSvojstva2);

var footerInfo = document.createElement("article");
footerInfo.setAttribute("id","footer-info");
footerInfo.setAttribute("class","col-12 col-sm-6 px-0 py-3");
footerLinkoviSvojstva2.appendChild(footerInfo);

var footerInfoH3 = document.createElement("h3");
var footerInfoH3Tekst = document.createTextNode("Kontakt:");
footerInfoH3.appendChild(footerInfoH3Tekst);
footerInfo.appendChild(footerInfoH3);

var footerInfoUl = document.createElement("ul");
footerInfoUl.setAttribute("class","navbar-nav");
footerInfo.appendChild(footerInfoUl);

var footerInfoPTekstovi = ["+381 62 232 32 32","Zdravka Čelara 16","viktor\u002evidakovic\u002e15\u002e20\u0040ict\u002eedu\u002ers"];
for(let i=0;i<footerInfoPTekstovi.length;i++)
{
  var footerInfoLi = document.createElement("li");
  footerInfoLi.setAttribute("class","nav-item");
  footerInfoUl.appendChild(footerInfoLi);
  var footerInfoLiP = document.createElement("p");
  footerInfoLiP.setAttribute("id",`info-${i+1}`);
  var footerInfoLiPTekst = document.createTextNode(`${footerInfoPTekstovi[i]}`);
  footerInfoLiP.appendChild(footerInfoLiPTekst);
  footerInfoLi.appendChild(footerInfoLiP);
}
footerInfoLiP.setAttribute("class","text-break");

var footerSocial = document.createElement("article");
footerSocial.setAttribute("id","footer-social");
footerSocial.setAttribute("class","col-12 col-sm-6 mr-0 px-0");
footerLinkoviSvojstva2.appendChild(footerSocial);

var footerSocialSekcija = document.createElement("section");
footerSocialSekcija.setAttribute("class","pddng py-3");
footerSocial.appendChild(footerSocialSekcija);

var footerSocialH3 = document.createElement("h3");
footerSocialH3.setAttribute("class","mb-1");
var footerSocialH3Tekst = document.createTextNode("Društvene mreže:");
footerSocialH3.appendChild(footerSocialH3Tekst);
footerSocialSekcija.appendChild(footerSocialH3);

var footerSocialUl = document.createElement("ul");
footerSocialUl.setAttribute("class","navbar-nav");
footerSocial.appendChild(footerSocialUl);

var footerSocialIKlase = ["instagram","facebook-square","youtube"];
var footerSocialPTekstovi = ["pekara_vidak","Pekar Vidak","Pekara Vidak"];
var footerSocialAHref = ["instagram.com/pekara_vidak/","facebook.com/channel/PekaraVidak/","youtube.com/c/pekara_vidak/"];
for(let i=0;i<footerSocialPTekstovi.length;i++)
{
  var footerSocialLi = document.createElement("li");
  footerSocialLi.setAttribute("class","nav-item mt-2 h-47");
  footerSocialUl.appendChild(footerSocialLi);

  var footerSocialA = document.createElement("a");
  footerSocialA.setAttribute("class","nav-link d-flex align-items-center");
  footerSocialA.target = ("_blank");
  footerSocialA.href = (`https://www.${footerSocialAHref[i]}`);
  footerSocialLi.appendChild(footerSocialA);

  var footerSocialAI = document.createElement("i");
  footerSocialAI.setAttribute("class",`fab fa-${footerSocialIKlase[i]} pr-2`);
  footerSocialA.appendChild(footerSocialAI);
  var footerSocialATekst = document.createTextNode(`${footerSocialPTekstovi[i]}`);
  footerSocialA.appendChild(footerSocialATekst);
}

var footerBottom = document.createElement("section");
footerBottom.setAttribute("id","bottom");
footerBottom.setAttribute("class","p-3 d-flex justify-content-center align-items-center");
footer.appendChild(footerBottom);

var footerBottomP = document.createElement("p");
var footerBottomPTekst = document.createTextNode("\u00a9Pekara Vidak 2021. Sva prava zadržana");
footerBottomP.appendChild(footerBottomPTekst);
footerBottom.appendChild(footerBottomP);
//#endregion

//#region Forma - provera
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
  var grad2;
  var vrGrad;
  var vrGrad2;
  grad = document.querySelector("#grad");
  grad2 = document.querySelector("#grad2");
  vrGrad = grad.value;
  vrGrad2 = grad2.value;

  var posBroj;
  var posBroj2;
  var vrPosBroj;
  var vrPosBroj2;
  posBroj = document.querySelector("#posBroj");
  posBroj2 = document.querySelector("#posBroj2");
  vrPosBroj = posBroj.value;
  vrPosBroj2 = posBroj2.value;

  var ponuda;
  ponuda = document.querySelector("#ponuda");

  var nacinPreuzimanja;
  nacinPreuzimanja=document.getElementsByName("nacinPreuzimanja");

  //Provera imena i prezimena
  let regImePrezime=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  if(!(regImePrezime.test(vrImePrezime))){
    document.querySelector("#poljeImePrezime > p").innerHTML = "Pogrešno uneto ime i prezime";
    document.querySelector("#poljeImePrezime > p").style.color = "white";
    document.querySelector("#poljeImePrezime > p").style.fontSize = "14px";
  }
  else{
    document.querySelector("#poljeImePrezime > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#poljeImePrezime > p").style.color = "#62c94d";
  }

  //Provera adrese
  let regAdresa=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[0-9]{1,4}$/;
  let regAdresa2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[0-9]{1,4}$/;
  if((regAdresa.test(vrAdresa)) || (regAdresa2.test(vrAdresa))){
    document.querySelector("#poljeAdresa > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#poljeAdresa > p").style.color = "#62c94d";
  }
  else{
    document.querySelector("#poljeAdresa > p").innerHTML = "Pogrešno uneta adresa";
    document.querySelector("#poljeAdresa > p").style.color = "white";
    document.querySelector("#poljeAdresa > p").style.fontSize = "14px";
  }


  //Provera grada
  let regGrad=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}$/;
  let regGrad2=/^[A-ZČĆŠĐŽ]{1}[a-zčćšđž]{2,15}\s[A-ZČĆŠĐŽ]{0,1}[a-zčćšđž]{2,15}$/;
  if((regGrad.test(vrGrad)) || (regGrad2.test(vrGrad)) || (regGrad.test(vrGrad2)) || (regGrad2.test(vrGrad2))){
    document.querySelector("#poljeGrad > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#poljeGrad > p").style.color = "#62c94d";
    document.querySelector("#poljeGrad2 > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#poljeGrad2 > p").style.color = "#62c94d";
  }
  else{
    document.querySelector("#poljeGrad > p").innerHTML = "Pogrešno unet grad";
    document.querySelector("#poljeGrad > p").style.color = "white";
    document.querySelector("#poljeGrad > p").style.fontSize = "14px";
    document.querySelector("#poljeGrad2 > p").innerHTML = "Pogrešno unet grad";
    document.querySelector("#poljeGrad2 > p").style.color = "white";
    document.querySelector("#poljeGrad2 > p").style.fontSize = "14px";
  }


  //Provera postanskog broja
  let regPosBroj=/^[0-9]{5}$/;
  if((regPosBroj.test(vrPosBroj)) || (regPosBroj.test(vrPosBroj2))){
    document.querySelector("#poljePosBroj > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#poljePosBroj2 > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#poljePosBroj > p").style.color = "#62c94d";
    document.querySelector("#poljePosBroj2 > p").style.color = "#62c94d";
  }
  else{
    document.querySelector("#poljePosBroj > p").innerHTML = "Pogrešno unet poš. broj";
    document.querySelector("#poljePosBroj > p").style.color = "white";
    document.querySelector("#poljePosBroj > p").style.fontSize = "14px";
    document.querySelector("#poljePosBroj2 > p").innerHTML = "Pogrešno unet poš. broj";
    document.querySelector("#poljePosBroj2 > p").style.color = "white";
    document.querySelector("#poljePosBroj2 > p").style.fontSize = "14px";

  }

  
  //Provera padajuce liste
  if(ponuda.options[ponuda.options.selectedIndex].value=="0"){
    document.querySelector("#izbor > p").innerHTML="Morate izabrati proizvod";
    document.querySelector("#izbor > p").style.color="white";
    document.querySelector("#izbor > p").style.fontSize = "14px";
  }
  else{
    document.querySelector("#izbor > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#izbor > p").style.color = "#62c94d";
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
  else{
    document.querySelector("#nacinPreuzimanja > div > p").innerHTML = "&nbsp;&nbsp;<i class=\"fas fa-check\"></i>";
    document.querySelector("#nacinPreuzimanja > div > p").style.color = "#62c94d";
  }
}
//#endregion

//#region Dropdown - Poruci dugme
var kr = document.getElementById("kr");
var mi = document.getElementById("mi");
var ki = document.getElementById("ki");
var hl = document.getElementById("hl");
var ma = document.getElementById("ma");
var ca = document.getElementById("ca");
var qu = document.getElementById("qu");
var ve = document.getElementById("ve");
var nizPonuda = ["kr","mi","ki","hl","ma","ca","qu","ve"];
function poruci(string){
  for(let i = 0; i<nizPonuda.length;i++){
    let poruciProizvod = document.getElementById(`${nizPonuda[i]}`);
    poruciProizvod.removeAttribute("selected", "");
  }
  for(let i = 0; i<nizPonuda.length;i++)
  {
    let poruciProizvod = document.getElementById(string);
    if(poruciProizvod == kr)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == mi)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ki)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == hl)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ma)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ca)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == qu)return poruciProizvod.setAttribute("selected", "");
    else if(poruciProizvod == ve)return poruciProizvod.setAttribute("selected", "");
  }
}
//#endregion