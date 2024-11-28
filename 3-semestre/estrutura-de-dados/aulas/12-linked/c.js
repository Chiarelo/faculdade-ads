function LinkedList() {
    let Node = function(element){
        this.element = element;
        this.next = null;
        };
   
    let length = 0;
    let head = null;    
 
    this.append = function (element) {
        let node =  new Node(element);        
        if (head == null){
            head = node;                    
        } else{                              
            current= head;
            while(current.next) {                          
                current = current.next;                  
            }
            current.next = node;                          
        }
        length++;                                                                                  
    };
    this.size = function(){
        return length
    }
     this.print = function () {
        let current = head;
        let elements = [];
        while (current) {
            elements.push(current.element);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    };
    this.InserirNovoElemento = function (element) {
        let node = new Node(element);
        if (head === null) {
            head = node;
        } else {
            node.next = head;
            head = node;
        }
        length++;
    };
}
 
lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.InserirNovoElemento(5);
lista.print()
console.log(lista.size());