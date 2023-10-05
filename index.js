class personagem {
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque;
    }

    atacar() {
            console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}

let novoPersonagem = new personagem("Juba", 16, "Mago", "magia")

novoPersonagem.atacar()