import { Amplifier } from "./Amplifier";
export class CdPlayer {
  amp: Amplifier;

  constructor(a: Amplifier) {
    this.amp = a;
  }

  on() {
    return "alumage du lecteur cd";
  }

  off() {
    return "arrêt du lecteur cd";
  }

  eject() {
    return "ejection du cd";
  }

  pause() {
    return "pause du lecteur cd";
  }

  play() {
    return "lecture du lecteur cd";
  }

  stop() {
    return "stop du lecteur cd";
  }
}
