export class Light {
  on() {
    return "allumage de la lumière";
  }

  off() {
    return "exticion de la lumière";
  }

  mitigate(num: number) {
    return `mode tamisé ${num}%`;
  }
}
