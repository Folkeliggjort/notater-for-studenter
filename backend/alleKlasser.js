export class Notat {

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
export class Emne {
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

export class Universitet {

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
export class Notatsystem {

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
