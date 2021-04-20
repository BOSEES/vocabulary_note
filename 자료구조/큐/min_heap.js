//기본 골격 만들기
class Heap {
  constructor() {
    this.heap = [];
  }


  getLeftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  getRightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2, 10);
  } 

  peek() {
    return this.heap[0]// 항상 최상위 노드가 peek이 됨
  } 

  insert(key, value) {
    const newNode = new Node(key, value);
    this.heap.push(newNode);
    this.heapifyUp();
  }
  //변경된 루트가 제 자리를 찾아가도록 하는 메소드.
  heapifyUp() {
    let index = this.heap.length - 1;// 계속해서 변하는 인덱스 값. 방금 들어온 노드의 위치를 탐색하기 위한 변수
    const lastInsertedNode = this.heap[index]; //최근 삽입된 노드의 정보를 기억.

    //루트 노드가 되기 전까지.
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);

      //부모 노드의 key 값이 마지막에 삽입된 노드의 키값 보다 크다면
      //부모의 자리를 계속해서 아래로 내린다.
      if (this.heap[parentIndex].key > lastInsertedNode.key) {
        this.heap[index] = this.heap[parentIndex];
        index = parentIndex;
      } else break;
    }

    //break을 만나서 자신의 자리를 찾은 상황
    // 마지막에 찾아진 곳이 가장 나중에 들어온 노드가 들어갈 자리이다.
    this.heap[index] = lastInsertedNode;
  }

  remove() {
    const count = this.heap.length;
    const rootNode = this.heap[0];

    if (count <= 0) return undefined; //만약 힙의 길이가 0과 같거나 작다면 힙이 비어있다는 말임.
    if (count === 1) this.heap = []; //힙의 길이가 1이라면 다른 연산이 필요없이 바로 삭제.
    else {
      this.heap[0] = this.heap.pop(); //루트에다 마지막으로 추가한 노드를 pop()하면서 할당.
      this.heapifyDown();//그리고 루트노드의 올바른 자리를 찾아갈수있도록 메소드 호출;
    }
    return rootNode;//삭제한 루트노드를 리턴
  }
  //변경된 루트가 제 자리를 찾아가도록하는 메소드.
  heapifyDown() {
    let index = 0;
    const count = this.heap.length;
    const rootNode = this.heap[index];
    
    //계속해서 left child 가 있을 때 까지 검사한다.
    while (this.getLeftChildIndex(index) < count) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      //왼쪽,오른쪽 중 더 작은 노드를 찾는다.
      //rightChild 가 있다면 key 값을 비교해서 더 작은 값을 찾는다.
      //없다면 leftChild 가 더 작은 값을 가지는 인덱스가 된다.
      const smallerChildIndex = 
        rightChildIndex < count && this.heap[rightChildIndex].key <
        this.heap[leftChildIndex].key
        ? rightChildIndex //true 일때
        : leftChildIndex; //false 일때
      //자식 노드의 키 값이 루트 노드보다 작다면 위로 끌어올린다.
      if (this.heap[smallerChildIndex].key <= rootNode.key) {
        this.heap[index] = this.heap[smallerChildIndex];
        index = smallerChildIndex;
      } else break;

      this.heap[index] = rootNode;
    }
  }
}

class Node{
  constructor(key,value) {
    this.key = key;
    this.value = value;
  }
}

class PriorityQueue extends Heap {
  constructor() {
    super();
  }

  enqueue(priority, value) {
    this.insert(priority, value);
  }

  dequeue() {
    this.remove();
  }

  isEmpty() {
    return this.heap.length <= 0
  }
}

let queue = new PriorityQueue();

queue.enqueue(7,7)
queue.enqueue(3,3)
queue.enqueue(2,2)
queue.enqueue(5,5)
queue.enqueue(1,1)
queue.dequeue();
console.log(queue.heap[0]);
