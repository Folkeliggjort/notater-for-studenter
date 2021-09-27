import Notat from "./notat.js"; //link(str), tittel(str), forfatter(array), semester(str)
import Emne from "./emne.js";  //navn(str), emnekode(str)
import Universitet from "./universitet.js"; //navn(str), forkortelse(str)
import Notatsystem from "./notatsystem.js"; //
import notatsystem from "./jsInput.js";// objektet med all dataen fra notatsystemet

//funksjoner
function plasserKnapperUniversiteter() {
  //preparerer
  kolonneUniversiteterEl.innerHTML = "";
  kolonneEmnerEl.innerHTML = "";
  kolonneNotaterEl.innerHTML = "";
  //resetter og legger til
  for (var knapp of knapperUniversiteter) {
    if (knapp.className == "valgtKnapp") {
      knapp.className = "knapp";
    }
    kolonneUniversiteterEl.appendChild(knapp);
  }
}
function plasserKnapperEmner(forkortelse) {
  //preparerer
  kolonneEmnerEl.innerHTML = "";
  kolonneNotaterEl.innerHTML = "";
  //resetter og legger til
  var emner = notatsystem.hentUniversitet(forkortelse).hentEmner();
  for (var emnekode in emner) {
    var nøkkel = forkortelse + emnekode;
    var knapp = knapperEmner[nøkkel];
    if (knapp.className == "valgtKnapp") {
      knapp.className = "knapp";
    }
    kolonneEmnerEl.appendChild(knapp);
  }
}
function plasserKnapperNotater(forkortelse, emnekode) {
  //preparerer
  kolonneNotaterEl.innerHTML = "";
  //resetter og legger til
  var nøkkel = forkortelse + emnekode;
  var knapper = knapperNotater[nøkkel];
  for (var knapp of knapper) {
    if (knapp.className == "valgtKnapp") {
      knapp.className = "knapp";
    }
    kolonneNotaterEl.appendChild(knapp);
  }
}

console.log(notatsystem);
//yabbadabbadooooo!!!!!!

//henter utskriftselement
//document.getElementById("utskriftNotatsystem");//ikke i bruk?
var kolonneUniversiteterEl = document.getElementById("kolonneUniversiteter");
var kolonneEmnerEl = document.getElementById("kolonneEmner");
var kolonneNotaterEl = document.getElementById("kolonneNotater");

//variabler?
var feedbackfarge = "#ffffff";

//!Jeg kan bygge denne koden inn i objektene mine for mer sexy kode
//lager elementer (elementene må ha nøkler som data)
var knapperUniversiteter = [];
var knapperEmner = {};
var knapperNotater = {}; //hvordan skal jeg programmere denne?
//universiteter
var universiteter = notatsystem.hentUniversiteter();
for (var forkortelse in universiteter) {
  var universitet = universiteter[forkortelse];
  var knapp = document.createElement("div");
  knapp.innerHTML = universitet.toString();
  knapp.dataset.forkortelse = forkortelse;
  knapp.className = "knapp";
  //plasserer lytter
  knapp.addEventListener("click", klikkUniversitet);
  knapperUniversiteter.push(knapp);
  console.log("knapp for " + forkortelse + " er laget");
  //emner
  var emner = universitet.hentEmner();
  for (var emnekode in emner) {
    var emne = emner[emnekode];
    var knapp = document.createElement("div");
    knapp.innerHTML = emne.toString();
    knapp.dataset.forkortelse = forkortelse;
    knapp.dataset.emnekode = emnekode;
    knapp.className = "knapp";
    knapp.addEventListener("click", klikkEmne)
    var nøkkel = forkortelse + emnekode;
    knapperEmner[nøkkel] = knapp;
    console.log("knapp for " + forkortelse + " er laget");
    //notater
    var notater = emne.hentNotater();
    var mellomlagringKnapperNotater = [];
    for (var notat of notater) {
      var knapp = document.createElement("details");
      var sammendrag = document.createElement("summary");
      var tekstSammendrag = document.createElement("span");
      var linkNotat = document.createElement("a");
      tekstSammendrag.innerHTML = notat.toString();
      tekstSammendrag.innerHTML += "... ";
      tekstSammendrag.className = "tekstSammendrag"
      linkNotat.innerHTML = "(gå til notat)";
      linkNotat.href = notat.hentLink();
      linkNotat.target = "_blank";
      linkNotat.className = "linkNotat";
      sammendrag.appendChild(tekstSammendrag);
      sammendrag.appendChild(linkNotat);
      sammendrag.className = "peekaboo";
      knapp.appendChild(sammendrag);
      knapp.innerHTML += "|";
      knapp.innerHTML += (notat.hentBeskrivelse());
      //gi details borders og putt en div med top-border rundt beskrivelsen?
      knapp.dataset.forkortelse = forkortelse;
      knapp.dataset.emnekode = emnekode;
      knapp.className = "knapp";
      knapp.href = notat.hentLink();
      knapp.target = "_blank";
      knapp.addEventListener("click", klikkNotat);
      mellomlagringKnapperNotater.push(knapp);
    }
    knapperNotater[nøkkel] = mellomlagringKnapperNotater;
    console.log("knapper for notatene i " + forkortelse + " er laget");
  }
}
console.log(knapperUniversiteter);
console.log(knapperEmner);
console.log(knapperNotater);
plasserKnapperUniversiteter();
//funksjoner for lyttere
function klikkUniversitet(e) {
  var forkortelse = e.target.dataset.forkortelse;
  //feedback
  plasserKnapperUniversiteter();//resetter eventuell annen feedback
  e.target.className = "valgtKnapp";
  //nye knapper
  plasserKnapperEmner(forkortelse);
}
function klikkEmne(e) {
  var forkortelse = e.target.dataset.forkortelse;
  var emnekode = e.target.dataset.emnekode;
  //feedback
  plasserKnapperEmner(forkortelse);//resetter eventuelt valgte knapper
  e.target.className = "valgtKnapp";
  //nye knapper
  plasserKnapperNotater(forkortelse, emnekode);
}
function klikkNotat(e){
  var forkortelse = e.currentTarget.dataset.forkortelse;
  var emnekode = e.currentTarget.dataset.emnekode;
  //feedback
  plasserKnapperNotater(forkortelse, emnekode);//resetter eventuelt valgte knapper
  e.currentTarget.className="valgtKnapp";
}

//en fin liten test
//notatsystem.test();
