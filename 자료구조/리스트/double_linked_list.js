let LinkedList = function() {
  let list = {};
  list.length = 0;
  list.head = null;
  list.tail = null;

  list.addToHead = function(value){
    let newNode = new Node(value);

    if(!list.head) { //헤드노드가 null이라면?
      list.head = newNode;
      list.tail = newNode;
    } else {
      let curr = list.head
      list.head = newNode;
      curr.prev = list.head;
      list.head.next = curr;
      list.length++;
    }

    return list.head;
  }

  list.addToTail = function(value){
    let newNode = new Node(value);

    if (!list.head) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      let curr = list.tail;
      list.tail = newNode;
      curr.next = list.tail;
      list.tail.prev = curr;
      list.length++;
    }

    return list.tail;
  }

  list.removeAt = function(index) {
    if (index < list.length && index > 0) {
      if(Math.floor(list.length / 2, 10) < index) {
        let count = list.length - index;
        let curr1 = list.tail;
        while (--count !== 0) {
          curr1 = curr1.prev;
        }
        let deleted = curr1.prev;
        let curr2 = curr1.prev.prev;
        curr2.next = curr1;
        curr1.prev = curr2;
        delete deleted
        list.length--;
      } else {
        let curr1 = list.head;
        while (--index !== 0) {
          curr1 = curr1.next;
        }
        let deleted = curr1.next;
        let curr2 = curr1.next.next;
        curr1.next = curr2;
        curr2.prev = curr1;
        delete deleted;
        list.length--;
      }
    } else if (index == 0){
      
    }
    return "인덱스가 잘못됬습니다."
  }

  list.allElementes = function() {
    let answer = "" //모든 원소를 문자열 타입으로 보기 위해 변수 answer 선언.
    if (list.head) { //만약 list의 head가 null이 아니라면?
      let curr = list.head; //list.head의 노드 주소를 curr의 할당;
      while (curr.next) { // 노드의 next가 null 직전까지 반복.
        answer += curr.value + " "; //answer 변수의 현재 노드의 value값을 추가.
        curr = curr.next; //그리고 나서 curr 값을 다음 노드로 할당.
      }
      answer += curr.value; // list 전체 노드 -1 만큼 반복해서 돌았기 때문에 마지막 남은 노드를 개별적으로 answer에 추가.
    }
    return answer; //answer를 리턴 하고 종료;
  }

  return list;
}

let Node = function(value) {
  let node = {};
  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
}

let list = new LinkedList();

list.addToHead(3);
list.addToHead(4);
list.addToHead(5);
console.log(list.head);
console.log(list.allElementes());
list.addToTail(20);
console.log(list.allElementes());
list.removeAt(0);
console.log(list.allElementes());