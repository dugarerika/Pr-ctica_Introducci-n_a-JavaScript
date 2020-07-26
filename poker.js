// 2, 3, 4, 5, 6, 7, 8, 9, T (10/Ten), J (Jack), Q (Queen) K (King), A (1/As)

// - picas/spades (S)
// - corazones/hearts (H)
// - tréboles/clubs (C)
// - diamantes/diamonds (D)

let palos = ['Picas','Corazones','Treboles','Diamantes'];

let valores = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'As'];

class Carta{
    constructor(palo, valor) {
        this.palo = palo;
        this.valor = valor;
    }

    imprimircarta(){
        console.log(`${this.valor} de ${this.palo}`);
    }
}

// let carta = new Carta('Corazones',8);
// carta.imprimircarta();

class Baraja {
    constructor(){
        this.baraja = [];
    }

    crearBaraja(palos, valores){
        for (let palo of palos ){
            for(let valor of valores){
                this.baraja.push(new Carta(palo, valor).imprimircarta());
                // console.log(this.baraja);
            }
        }
        return this.baraja;
    }

    repartir(){
        let mano = [];
        while(mano.length < 5){
            mano.push(this.baraja.pop());
        }
        return mano;
    }

    barajar(){
        let i;
        let temporal;
        let contador = this.baraja.length;
    }


}



let baraja = new Baraja();
baraja.crearBaraja(palos, valores);
// console.log(baraja.repartir());