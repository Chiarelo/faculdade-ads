    //Laura Andrade de Oliveira & Vinícius Chiarelo Gomes 
    function CircularLinkedList() {
        let Node = function (element) {
        this.element = element;
        this.next = null;
        };
    
        let length = 0;
        let head = new Node("head");
        head.next = head; // Fazemos o último nó apontar de volta para o primeiro nó.
    
        this.append = function (element) {
        let node = new Node(element);
        let current = head;
        while (current.next !== head) {
            current = current.next;
        }
        current.next = node;
        node.next = head;
        length++;
        };
    
        this.resolucaoJosephus = function (m) {
        let current = head;
        while (length > 1) {
            for (let i = 0; i < m - 1; i++) { // Ajuste aqui
            current = current.next;
            }
            current.next = current.next.next;
            length--;
        }
        };
    
        this.encontrarSobrevivente = function () {
        return head.next.element;
        };
    }
    
    let list = new CircularLinkedList();
    let n = 15,
        m = 3;
    for (let i = 1; i <= n; i++) {
        list.append(i);
    }
    list.resolucaoJosephus(m);
    let sobrevivente = list.encontrarSobrevivente();
    console.log("Número que sobrou: " + sobrevivente);
    