import Notat from "./notat.js";
import Emne from "./emne.js";
import Universitet from "./universitet.js";

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
