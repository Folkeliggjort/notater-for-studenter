import Emne from "./emne.js";
import Notat from "./notat.js";

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
