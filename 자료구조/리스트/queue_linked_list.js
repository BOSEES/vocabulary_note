class QueueLinkedList {
  constructor(){
    this.front = null;
    this.rear = null;
  }

  isEmpty() {
    if (this.front) {
      return false
    }
    return true;
  }

  enqueue(value) {
    let newNode = new Node(value);

    if(this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      let curr = this.rear;
      curr.next = newNode;
      this.rear = curr.next;
    }
  }

  dequeue() {
    if(this.isEmpty()) {
      return console.log("큐가 비어 있습니다.");
    } else {
      let curr = this.front;
      let value = curr.value;
      this.front = curr.next;
      curr = null; // 가비지 컬렉터의 의해 삭제;
      return value;
    }
  }

  peek() {
    if (this.isEmpty) {
      return console.log("큐가 비어 있습니다.");
    } else {
      return this.front;
    }
  }
}

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

let list = new QueueLinkedList();


list.enqueue(2)
list.enqueue(1)
list.enqueue(4)
list.enqueue(20)
console.log(list.front);
console.log(list.rear);