class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }

    ligarMotor() {
        console.log("Ligando Motor");
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, anoFabricacao) {
        super(marca);
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, anoFabricacao) {
        super(marca);
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }
}

const moto1 = new Moto('Honda', 'Twister', 2020);
const carro1 = new Carro('Chevrolet', 'Onix', 2023);
const carro2 = new Carro('Honda', 'Civic', 2019);

moto1.ligarMotor(); 
carro1.ligarMotor(); 

console.log(moto1);
console.log(carro1);
console.log(carro2);