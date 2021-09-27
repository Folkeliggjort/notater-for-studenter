class Notat {

  constructor(link, tittel, forfatter, semester, beskrivelse) {
    this._link = link; //str
    this._tittel = tittel; //str
    this._forfatter = forfatter; //list
    this._semester = semester; //str
    this._beskrivelse = beskrivelse;
  }

  hentLink(){
    return this._link;
  }

  hentTittel(){
    return this._tittel;
  }

  hentForfatter(){
    return this._forfatter;
  }

  hentSemester(){
    return this._semester;
  }

  hentBeskrivelse(){
    return this._beskrivelse;
  }

  toString(){
    let forfatter = this._forfatter[0]
    if (this._forfatter.length > 1) {
      forfatter += " m.f.";
    }
    return this._tittel + ", av " + forfatter + ", skrevet " + this._semester;
  }
  //__eq__ finnes ikke i js
  erLik(notat) {
    if (this._link == notat._link) {
      return true
    } else {
      return false
    }
  }

}
class Emne {
  constructor(navn,emnekode) {
    this._navn = navn; //str
    this._emnekode = emnekode; //str
    this._notater = []; //array (liste)
  }

  hentNavn(){
    return this._navn;
  }

  hentEmnekode(){
    return this._emnekode;
  }
  hentNotater(){
    return this._notater;
  }

  leggTilNotat(notat){
    this._notater.push(notat);
  }

  toString(){
    return this._emnekode + ": " + this._navn;
  }

}
class Universitet {

  constructor(navn, forkortelse) {
    this._navn = navn; //str
    this._forkortelse = forkortelse; //str
    this._emner = {}; //obj, emnekode nøkkel, Emne-objekt innhold
  }

  hentNavn(){
    return this._navn;
  }

  hentForkortelse(){
    return this._forkortelse;
  }

  hentEmne(emnekode){
    return this._emner[emnekode];
  }

  hentEmner(){
    return this._emner;
  }

  leggTilEmne(emne){
    this._emner[emne.hentEmnekode()] = emne;
  }

  toString(){
    return this._forkortelse + ": " + this._navn;
  }

}
class Notatsystem {

constructor(){
  this._universiteter = {}; //obj, forkortelse nøkkel, Universitet-objekt innhold
}

hentUniversiteter(){
  return this._universiteter;
}

hentUniversitet(forkortelse){
  return this._universiteter[forkortelse];
}

leggTilUniversitet(universitet){
  this._universiteter[universitet.hentForkortelse()] = universitet;
}

test(){
  let universitet = this.hentUniversitet("UiO");
  console.log(universitet);
  let emne = universitet.hentEmne("IN1000");
  console.log(emne);
  console.log(emne.hentNotater());
  let notat = new Notat("https://test.no/1234", "Notater i IN1000", "Tobias Rade Evensen,Person nr 2,Person nr 3".split(","), "2020H", "aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  console.log(notat);
}

}
var notatsystem = new Notatsystem();
var universitet; var emne; var notat;
universitet = new Universitet('Universitetet i Oslo', 'UiO');
notatsystem.leggTilUniversitet(universitet);
emne = new Emne('Introduksjon til objektorientert programmering', 'IN1000');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1ciQ_2sOwDm6-UpkNGEWTevt7Q1ba6FLT/view', 'Notater i IN1000 Introduksjon til objektorientert programmering', ['Tobias Rade Evensen'], '2020H', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Til sammen brukte jeg 70 timer på faget, og jeg fikk A på eksamen. Notatene er skrevet for hånd på en Onyx Boox Max 3.');
emne.leggTilNotat(notat);
emne = new Emne('Objektorientert programmering', 'IN1010');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1RBte2SoyXeR_M-OvG4eJ3R18ucgZnl7y/view?usp=sharing', 'Notater i IN1010 Objektorientert programmering', ['Tobias Rade Evensen'], '2021V', 'Totalt brukte jeg 150 timer på emnet, og jeg fikk A på eksamen. Notatet er skrevet for hånd på en Onyx Boox Max 3.');
emne.leggTilNotat(notat);
emne = new Emne('Introduksjon til datateknologi', 'IN1020');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1dXCk0wC1LNjdeefXfBcXaXQk5E-py1T2/view?usp=sharing', 'Notater i IN1020 Introduksjon til datateknologi', ['Tobias Rade Evensen'], '2020H', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Totatl brukte jeg 70 timer på emnet, og jeg fikk bestått på eksamen.');
emne.leggTilNotat(notat);
emne = new Emne('Systemer, krav og konsekvenser', 'IN1030');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/10YeOk8o__kI5cY4ZZ1RF-nMJSk4KNVtE/view', 'Notater i IN1030 Systemer, krav og konsekvenser', ['Tobias Rade Evensen'], '2021V', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Totalt brukte jeg 120 timer på emnet, og jeg fikk bestått på eksamen.');
emne.leggTilNotat(notat);
emne = new Emne('Introduksjon til design, bruk, interaksjon', 'IN1050');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/file/d/1aSAf6KPzMzDjBVBbJ1-oXalHEn9K7vfc/view?usp=sharing', 'Notater i IN1050 Introduksjon til design, bruk, interaksjon', ['Tobias Rade Evensen'], '2020H', 'Jeg var ikke blant de som brukte mest tid på studiene, men jeg tror likevel mange kan ha nytte av å se på arbeidet mitt. Totalt brukte jeg 120 timer på emnet, og jeg fikk C på eksamen.');
emne.leggTilNotat(notat);
emne = new Emne('Bruksorientert design', 'IN1060');
universitet.leggTilEmne(emne);
notat = new Notat('https://drive.google.com/drive/folders/1nmhNlQhdKjkt3VXAQXb6RoE2odcovAZE', 'Notater i IN1060 Bruksorientert design', ['Tobias Rade Evensen'], '2021V', 'Totalt brukte jeg 160 timer på emnet, og vi fikk en D på eksamen. Jeg har notert på pc til pensum, og for hånd til forelesninger.');
emne.leggTilNotat(notat);
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
