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
