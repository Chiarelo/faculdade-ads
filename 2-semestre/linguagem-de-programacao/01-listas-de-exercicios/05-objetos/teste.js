let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor de Software",
    apresentar: function() {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
};

pessoa.apresentar()


let usuario = {
    nome: "oi",
    idade: 0,
    altura: 0
    
}

console.log(usuario.nome)


function fds(){
    let notas = [];

for (let i = 0; i < carros.length; i++) {
    notas[i] = [];
    for (let j = 0; j < 5; j++) {
        notas[i][j] = Math.floor(Math.random() * 100); // Gerar uma nota aleatória entre 0 e 99
    }
}
}