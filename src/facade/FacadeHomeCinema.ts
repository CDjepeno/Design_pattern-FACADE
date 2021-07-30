import { Amplifier } from "../classes/Amplifier";
import { Tuner } from "../classes/Tuner";
import { DvdPlayer } from "../classes/DvdPlayer";
import { CdPlayer } from "../classes/CdPlayer";
import { Projector } from "../classes/Projector";
import { Light } from "../classes/Light";
import { Display } from "../classes/Display";
import { PopCorMachine } from "../classes/PopCornMachine";
export class FacadeHomeCinema {
  amp: Amplifier;
  tuner: Tuner;
  dvd: DvdPlayer;
  cd: CdPlayer;
  projector: Projector;
  light: Light;
  display: Display;
  popCorn: PopCorMachine;

  constructor(
    a: Amplifier,
    t: Tuner,
    dvd: DvdPlayer,
    c: CdPlayer,
    p: Projector,
    l: Light,
    d: Display,
    pop: PopCorMachine
  ) {
    this.amp = a;
    this.tuner = t;
    this.dvd = dvd;
    this.cd = c;
    this.projector = p;
    this.light = l;
    this.display = d;
    this.popCorn = pop;
  }

  showFilms() {
    return `Vous allez voir un bon film' 
            ${this.popCorn.on()}
            ${this.popCorn.burst()}
            ${this.light.mitigate(10)}
            ${this.display.lower()}
            ${this.projector.on()}
            ${this.projector.bigScreen()}
            ${this.amp.on()}
            ${this.amp.setDvd("Design Pattern")}
            ${this.amp.setSonStereo()}
            ${this.amp.setVolume(5)}
            ${this.dvd.on()}
            ${this.dvd.play()}
    `;
  }

  stopFilm() {
    return `C'est la fin du film
            ${this.popCorn.off()}
            ${this.light.on()}
            ${this.display.raise()}
            ${this.projector.off()}
            ${this.amp.off()}
            ${this.dvd.stop()}
            ${this.dvd.eject()}
            ${this.dvd.off()}
    `;
  }
}
