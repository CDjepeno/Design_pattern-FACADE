import { DvdPlayer } from "./DvdPlayer";
export class Projector {
  dvd: DvdPlayer;

  constructor(d: DvdPlayer) {
    this.dvd = d;
  }

  on() {
    return "alumage projecteur";
  }

  off() {
    return "arrêt du projecteur";
  }

  tvMode() {
    return "mode tv du projecteur";
  }

  bigScreen() {
    return "mode grand écran du projecteur";
  }
}
