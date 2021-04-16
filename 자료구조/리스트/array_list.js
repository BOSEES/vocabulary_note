
//배열리스트 클래스
//구조가 간단하여 헤더포인터를 따라갈수있는 head 변수만 선언;
class ArrayList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
//노드 클래스
//생성자의 인풋으로 배열을 받아 Node의 value를 할당.
//노드의 다음 주소를 따라갈수 있도록 next 선언
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//초기화
ArrayList.prototype.init = function() {
  this.head = null;
}

//데이터 삽입
ArrayList.prototype.push = function(value) {
  let newNode = new Node(value);
  
  if(!this.head) {
    this.head = newNode;
    this.length++;
  } else {
    let curr = this.head;
    this.head = newNode;
    this.head.next = curr;
    this.length++;
  }
}

//데이터 삭제
ArrayList.prototype.pop = function() {
  if(!this.head) {
    return console.log("노드가 존재하지 않습니다.");
  } else {
    let retrunValue = this.head.value;
    let curr = this.head;
    this.head = this.head.next;
    delete curr;
    this.length--;
    return retrunValue;
  }
}

//마지막 원소 조회
ArrayList.prototype.peek = function() {
  if(!this.head) {
    return console.log("노드가 존재하지 않습니다.");
  } else {
    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    return curr.value;
  }
}

let list = new ArrayList();
list.push(3);
list.push(1);
console.log();
console.log(list.pop());
console.log(list.length);
console.log(list.peek());


