let LinkedList = function() {
  let list = {}; //LinkedList에 활용할 리스트의 객채(c언어에선 구조체를 활용);
  list.length = 0; // 나중에 단순하게 리스트의 길이를 리턴하기 위해 할당.
  list.head = null; //초기값 null 할당
  list.tail = null; //초기값 null 할당. single linked 같은경우는 tail 까진 필요가 없지만. 양방향 연결리스트에서 활용하게끔 미리 만들어놈.

  list.addToHead = function(value) {
    let newNode = new Node(value);
    
    if (!list.head) { //만약 리스트의 머리노드 주소가 없다면.
      list.head = newNode;
      list.tail = newNode;
      list.length++;
    } else { //그게 아니라면??
      let formelHead = list.head; //현재 머리 노드의 주소를 임시로 저장 하기위해 변수 선언
      list.head = newNode; // 현재 머리노드를 새로 만든 노드로 변경.
      list.head.next = formelHead; //새로 만들어진 머리노드의 next(다음 노드)는 
      list.length++;              //아까 만들어 놓은 formel변수를 통해 할당하고 종료.
    }
    return list.head;
  }


  list.addToTail = function(value) {
    let newNode = new Node(value);

    //만약 list.head가 null이라면(첫번째) 바로 머리노드,꼬리노드로 추가.
    //배열로 비교하자면 스택의 로직을 구현함.
    if (!list.head) {
      list.tail = newNode;
      list.head = newNode;
      list.length++;
    } else { // 그게 아니라면!
      let formelTail = list.tail; // 일단 현재 리스트의 꼬리노드의 주소값을 formelTail 변수의 저장;
      list.tail = newNode; //그후 리스트의 꼬리노드를 방금 만든 새로운 노드의 주소를 가리키게 함.
      formelTail.next = list.tail; // 이전에 가리키던 노드의 다음 노드는 null값이었지만 리스트의 꼬리노드를 가리키게 함.
      list.length++;
    }
    return list.tail;
  }
  
  list.removeHead = function() {
    if (list.head) { //만약 list.head가 있다면? (거진 있다는 가정하에.)
      let prevHeadVal = list.head.value; //prevHeadVal 변수에 기존 리스트의 머리노드의 값을 저장.
      list.head = list.head.next; //그리고 list의 머리노드의 다음 노드를 다시 머리노드로 변경.
      if (list.head == null) { // 이때 만약 머리노드가 null이라면 더이상 LinkedList에 노드가 남아있지 않다는 말임.
        list.tail = null; // 리스트의 꼬리노드도 null로 만듬
      }
      list.length--;
      return prevHeadVal; // 그리고 삭제한 노드의 값을 리턴해보고 종료.(잘 제거가 됬는지 반환해 확인할수있음)
    }
  }

  list.removeAt = function(index) {
    if (index <= list.length) { //삭제하고 싶은 index보다 리스트의 길이가 크거나 같은 경우만 허용
      let curr = list.head; //일단 list.head값을 curr 변수에 저장.(추가,삭제,조회 등 모든걸 하기 위해선 머리노드의 주소값이 필요함.)
      while(--index !== 0) {//반복문을 통해 삭제하고싶은 인덱스 - 1 만큼 이동.
        curr = curr.next; //머리노드에서 한칸씩 이동하여 curr의 할당.
      }
      let deleted = curr.next; //삭제하고 싶은 노드를 deleted 변수에 저장.
      curr.next = curr.next.next; //그리고 삭제하고 싶은 노드 - 1 해당하는 노드의 next 주소 값을 다다음 노드로 설정.
      delete deleted; // 그리고 노드 삭제.
      list.length--; // 리스트의 길이를  -1 빼주기.
      return deleted.value; //삭제한 노드의 value값을 리턴 하고 종료. (혹시 콘솔로 찍어보기위함.)
    }
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

  list.size = function() {
    return list.length;
  }

  list.indexOf = function(target) {
    if (list.head) { //list 의 head 가 null이 아니라면?
      let index = 0; // 나중에 찾는 value를 가진 노드의 인덱스를 리턴하기위해 숫자형 타입 변수 선연 
      let curr = list.head; //curr 의 머리노드의 주소를 할당. (여기서 주소란 결국 메모리의 주소를 말함.)
      if(curr.value == target) { //혹시 첫 머리노드의 value가 내가 찾고자하는 값 이라면 바로 index = 0 리턴; 
        return index;
      } else { //첫 머리노드 찾고자하는 값이 아니라면!
        while (curr.next) { //현재 노드의 next가 null이 아니라면?은 최악의상황 결국. 
                            //찾고자하는 데이터가 끝까지 찾아봤는데 없다면 결국 꼬리노드에 next 값이 null이기 때문에 반복문은 멈추게 된다.
          curr = curr.next; //curr에 다음 노드의 주소를 할당.
          index++; //1칸 이동하였으므로 index의 값을 1만큼 추가.
          if (curr.value == target) {// 이때 다음 노드의 값이 내가 찾고자하는 값이라면?
            return index; //index를 바로 리턴하고 종료. 
          }
        }
      }
    }
    return "원소를 찾을수 없습니다.";// 찾고자하는 원소가 없다면 결국 마지막 리턴문까지 도달하게 됨.
  }
  //중요한 추상 자료!!!!
  list.insert = function(index, value) { //중간의 데이터를 넣고싶은 index 와 , value를 인풋으로 넣자.
    let newNode = new Node(value); //value 를 담은 node 객체를 새로 생성해 newNode 로 인스턴스.

    if (list.length > index) { //만약! 리스트의 길이가 내가 찾고자하는 인덱스보다 크다면 통과.
      let curr = list.head; //리스트의 머리노드의 주소를 curr의 할당.
      while (--index !== 0) { // index - 1 인 값이 0과 다르다면 통과 같다면 반복분 종료. 이말은 즉 추가 하고싶은 index 자리 직전까지 이동하겠다는 말.
        curr = curr.next; //한칸씩 이동하기위해 curr에 다음 노드의 주소를 할당.
      }
      let formelNextNode = curr.next; //다음 노드의 값을 임시적으로 저장. 마지막 연결의 필요한 주소값을 가지고있어야 하기 때문에.
      curr.next = newNode; //현재 노드의 next를 새로 만든 노드의 주소로 변경.
      curr.next.next = formelNextNode; // 그리고 새로만든 노드의 next 값을 아까 선언한 변수로 지정.
      list.length++; //완료 하였으므로 리스트의 길이를 1 만큼 추가.
    }
  }

  list.isEmpty = function() {
    if (!list.length){ 
      return true;
    }
    return false;
  }

  return list;
}

//가장 기본적인 Node 객체의 구조. value 값과 다음 주소를 가리키는 next를 포함한 node를 생성하기위한 구조 혹은 객체.
let Node = function(value) {
  let node = {};
  
  node.value = value;
  node.next = null;

  return node;
}

let list = new LinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);
list.addToTail(4);
list.addToTail(5);
console.log(list.allElementes());
list.removeAt(3);
console.log(list.allElementes());
console.log(list.indexOf(1));
list.insert(3, 200);
console.log(list.allElementes());
console.log(list.isEmpty());
console.log(list.size());
list.addToHead(300);
console.log(list.allElementes());
console.log(list.size());

