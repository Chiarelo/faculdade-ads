function LinkedList() {
  this.empty = function () {
    return length == 0;
  };
  this.removerPrimero = function () {
    let current = head;
    if (this.empty()) {
      return -1;
    } else {
      head = current.next;
      length--;
      return current.data;
    }
  };
}
