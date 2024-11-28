function LinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
    };
 
    let length = 0;
    let head = null;
 
    this.append = function (element) {
        let node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            let current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    };
 
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };
 
    this.removeFirst = function () {
        return this.removeAt(0);
    };
 
    this.size = function () {
        return length;
    };
 
    this.print = function () {
        let current = head;
        let elements = [];
        while (current) {
            elements.push(current.element);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    };
}
 
lista = new LinkedList();
lista.append(10);
lista.append(12);
lista.removeFirst();
lista.print(); // Output: 12