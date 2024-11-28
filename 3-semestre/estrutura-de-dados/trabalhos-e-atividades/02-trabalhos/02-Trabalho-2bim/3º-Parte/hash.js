    //Laura andrade de Oliveira & Vinícius Chiarelo Gomes
    function HashTable(size) {
    this.table = new Array(size); // Inicializa a tabela hash com o tamanho especificado
    this.size = size; // Define o tamanho da tabela hash

    // Função de hash que converte um caractere em um índice da tabela hash
    this.hash = function(key) {
        return key.charCodeAt(0) % this.size;
    };

    // Função para inserir uma chave na tabela hash
    this.insertion = function(key) {
        let index = this.hash(key); // Calcula o índice inicial
        while (this.table[index] !== undefined) { // Verifica se a posição já está ocupada
            index = (index + 1) % this.size; // Move para a próxima posição (hashing linear)
        }
        this.table[index] = key; // Insere a chave na posição encontrada
    };

    // Função para buscar uma chave na tabela hash
    this.fetch = function(key) {
        let index = this.hash(key); // Calcula o índice inicial
        let startIndex = index; // Salva o índice inicial para evitar loops infinitos

        while (this.table[index] !== undefined) { // Verifica se a posição está ocupada
            if (this.table[index] === key) { // Se a chave for encontrada, retorna o índice
                return index;
            }
            index = (index + 1) % this.size; // Move para a próxima posição (hashing linear)
            if (index === startIndex) { // Se voltarmos ao índice inicial, a chave não está na tabela
                break;
            }
        }
        return -1; // Chave não encontrada
    };

    // Função para imprimir o estado atual da tabela hash
    this.print = function() {
        console.log(this.table);
    };
}

// Exemplo de uso
let hashTable = new HashTable(7); // Cria uma tabela hash com tamanho 10
hashTable.insertion('n'); // Insere a chave 'a'
hashTable.insertion('i'); // Insere a chave 'b'
hashTable.insertion('v'); // Insere a chave 'c'
hashTable.insertion('o'); // Insere a chave 'c'
hashTable.insertion('z'); // Insere a chave 'c'
hashTable.insertion('u'); // Insere a chave 'c'
hashTable.insertion('a'); // Insere a chave 'c'
hashTable.insertion('e'); // Insere a chave 'c'
hashTable.insertion('f'); // Insere a chave 'c'
hashTable.insertion('r'); // Insere a chave 'c'
hashTable.insertion('b'); // Insere a chave 'c'
hashTable.insertion('l'); // Insere a chave 'c'

console.log('Index of n:', hashTable.fetch('n')); // Deve retornar o índice de 'a'
console.log('Index of i:', hashTable.fetch('i')); // Deve retornar o índice de 'b'
console.log('Index of v:', hashTable.fetch('v')); // Deve retornar -1 (não encontrado)
console.log('Index of o:', hashTable.fetch('o')); 
console.log('Index of z:', hashTable.fetch('z')); 
console.log('Index of u:', hashTable.fetch('u')); 
console.log('Index of a:', hashTable.fetch('a')); 
console.log('Index of e:', hashTable.fetch('e')); 
console.log('Index of f:', hashTable.fetch('f')); 
console.log('Index of r:', hashTable.fetch('r')); 
console.log('Index of b:', hashTable.fetch('b')); 
console.log('Index of l:', hashTable.fetch('l')); 
hashTable.print(); // Imprime o estado da tabela hash
