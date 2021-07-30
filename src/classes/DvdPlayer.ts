import { Amplifier } from "./Amplifier";
export class DvdPlayer {
  amp: Amplifier;

  constructor(a: Amplifier) {
    this.amp = a;
  }

  on() {
    return "alumage du lecteur dvd";
  }

  off() {
    return "arrêt du lecteur dvd";
  }

  eject() {
    return "ejection du dvd";
  }

  pause() {
    return "pause du lecteur dvd";
  }

  play() {
    return "lecture du lecteur dvd";
  }

  stop() {
    return "stop du lecteur cd";
  }

  setAudioSurround() {
    return "changement du son audio";
  }

  setAudioStereo() {
    return "changement du son stéréo";
  }
}
