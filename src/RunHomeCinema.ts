import { FacadeHomeCinema } from "./facade/FacadeHomeCinema";
import { Amplifier } from "./classes/Amplifier";
import { DvdPlayer } from "./classes/DvdPlayer";
import { Tuner } from "./classes/Tuner";
import { CdPlayer } from "./classes/CdPlayer";
import { Light } from "./classes/Light";
import { Display } from "./classes/Display";
import { PopCorMachine } from "./classes/PopCornMachine";
import { Projector } from "./classes/Projector";
export class RunHomeCinema {
  main() {
    const amp = new Amplifier();
    const dvd: DvdPlayer = new DvdPlayer(amp);
    const tuner = new Tuner(amp);
    const cd = new CdPlayer(amp);
    const light = new Light();
    const display = new Display();
    const popCorn = new PopCorMachine();
    const projector = new Projector(dvd);

    const homeCinema: FacadeHomeCinema = new FacadeHomeCinema(
      amp,
      tuner,
      dvd,
      cd,
      projector,
      light,
      display,
      popCorn
    );

    return homeCinema.showFilms();
  }

  main2() {
    const amp = new Amplifier();
    const dvd: DvdPlayer = new DvdPlayer(amp);
    const tuner = new Tuner(amp);
    const cd = new CdPlayer(amp);
    const light = new Light();
    const display = new Display();
    const popCorn = new PopCorMachine();
    const projector = new Projector(dvd);

    const homeCinema: FacadeHomeCinema = new FacadeHomeCinema(
      amp,
      tuner,
      dvd,
      cd,
      projector,
      light,
      display,
      popCorn
    );

    return homeCinema.stopFilm();
  }
}
