class Heap {
  constructor() {
    this.array = [];
  }
  leftChildNode(parentIndex) {
    return parentIndex * 2 + 1;
  }

  rightChildNode(parentIndex) {
    return parentIndex * 2 + 2;
  }

  parentNode(childIndex) {
    return Math.floor((childIndex - 1) / 2, 10);
  }

  enqueue(value) {
    let newNode = new Node(value); //노드 객체 인스턴스
    this.array.push(newNode); //그리고 일단 push 를 한다.

    let index = this.array.length - 1; //금방 push 했던 인덱스를 가져오고
    let lastInsertedNode = this.array[index]; // 나중에 사용할 임시 변수 생성
    

    while (index > 0) {//루트노드 전까지
      let parentNode = this.parentNode(index); //부모 노드를 찾는 방법

      if (this.array[parentNode].value < lastInsertedNode.value) {
        this.array[parentNode] = this.array[index];
        index = parentNode;
      } else break
    }
    this.array[index] = lastInsertedNode;
  }

  dequeue() {
    this.array[0] = this.array.pop();
    let index = 0
    let leng = this.array.length
    let rootNode = this.array[index];

    if (index <= 0) return undefined;
    if (index == 1) this.array.clear();
    else {

      while (this.leftChildNode(index) < leng) {
        const leftChildIndex = this.leftChildNode(index);
        const rightChildIndex = this.rightChildNode(index);

        const biggerChildIndex = 
        rightChildIndex < leng && this.array[rightChildIndex].value >
        this.array[leftChildIndex].value
        ? rightChildIndex 
        : leftChildIndex;

        if (this.array[biggerChildIndex].value > rootNode.value) {
          this.array[index] = this.array[biggerChildIndex];
          index = biggerChildIndex;
        } else break;
      }
      this.array[index] = rootNode;
    }
  }


  peek(){
    return this.array[0];
  }
}

class Node {
  constructor(value) {
    this.value = value;
  }
}

let heap = new Heap();

heap.enqueue(2)
heap.enqueue(3)
heap.enqueue(10)
heap.enqueue(4)
heap.enqueue(1)
heap.enqueue(7)
heap.dequeue();
console.log(heap.peek())