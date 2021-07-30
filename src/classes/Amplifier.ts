import { Tuner } from "./Tuner";
import { DvdPlayer } from "./DvdPlayer";
import { CdPlayer } from "./CdPlayer";
export class Amplifier {
  on() {
    return "amplificateur allumé";
  }

  off() {
    return "amplificateur arrété";
  }

  setCd(name: string) {
    return `le lecteur cd joue ${name}`;
  }

  setDvd(name: string) {
    return `Vous regarder le film ${name}`;
  }

  setSonStereo() {
    return 'changement de son stéreo au niveau de l"amplificateur';
  }

  setSonSurround() {
    return 'changement de son surround au niveau de l"amplificateur';
  }

  setTuner() {
    return "changement de tuner";
  }

  setVolume(num: number) {
    return `le volume est a ${num}`;
  }
}
