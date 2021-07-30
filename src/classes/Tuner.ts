import { Amplifier } from "./Amplifier";
export class Tuner {
  amp: Amplifier;

  constructor(a: Amplifier) {
    this.amp = a;
  }

  on() {
    return "alumage du lecteur tuner";
  }

  off() {
    return "arrêt du lecteur tuner";
  }

  setAm() {
    return "changement de bande am";
  }

  setFm() {
    return "changement de bande fm";
  }

  setFrequence() {
    return "changement de fréquence";
  }
}
