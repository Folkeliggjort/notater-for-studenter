import Notat from "./notat.js";

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
