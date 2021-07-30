import { RunHomeCinema } from '../src/RunHomeCinema';
describe('RunHomeCinema', () => {
  it('should be return good string for run show film', () => {
    const runHomeCinema = new RunHomeCinema
    const result = runHomeCinema.main()

    expect(result).toBe(`Vous allez voir un bon film' 
            allumage de la machine a pop corn
            mode éclaté de la machine a pop corn
            mode tamisé 10%
            descente écran
            alumage projecteur
            mode grand écran du projecteur
            amplificateur allumé
            Vous regarder le film Design Pattern
            changement de son stéreo au niveau de l"amplificateur
            le volume est a 5
            alumage du lecteur dvd
            lecture du lecteur dvd
    `)
  })
  it('should be return good string for run stop film', () => {
    const runHomeCinema = new RunHomeCinema
    const result = runHomeCinema.main2()

    expect(result).toBe(`C'est la fin du film
            arrêt de la machine a pop corn
            allumage de la lumière
            monter écran
            arrêt du projecteur
            amplificateur arrété
            stop du lecteur cd
            ejection du dvd
            arrêt du lecteur dvd
    `)
  })
})