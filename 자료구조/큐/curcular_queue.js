class CucularQueue {
  constructor() {
    this.front = 0;
    this.rear = 0;
    this.array = []; // 원래는 정적으로 선언하는게 정석임.
  }

  isEmpty(){
    return this.front === this.rear;
  }

  enqueue(value) {
    this.rear++;
    this.array[this.rear] = value;
  }

  dequeue() {
    if (!this.isEmpty()) {
      let deletedValue = this.array[this.front];
    this.front++;
    delete this.array[this.front];
    return deletedValue;
    }
    return console.log("큐가 비어있습니다.")
  }

  peek() {
    if (!this.isEmpty()) {
      if(this.array[this.front] == undefined) {
        return this.array[this.front + 1]
      }
      return this.array[this.front];
    }
    return console.log("큐가 비어있습니다.")
  }
}

let queue = new CucularQueue();
queue.enqueue(2);
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(5);

console.log(queue.peek());