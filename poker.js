let palos = ['picas','corazones','treboles','diamantes'];

let valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, As]

// 2, 3, 4, 5, 6, 7, 8, 9, T (10/Ten), J (Jack), Q (Queen) K (King), A (1/As)

// - picas/spades (S)
// - corazones/hearts (H)
// - tréboles/clubs (C)
// - diamantes/diamonds (D)

class Cartas{
    constructor(palos,valores){
        this.palos = palos;
        this.valores = valores;
    }
}
