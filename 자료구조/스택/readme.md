# 스택의 자료구조
    stack은  lifo(Last In First Out)의 형태를 취하는 자료구조로써 맨 먼저 들어온 것이 가장 나중에 나가고 가장 최근에 들어온것이 가장 먼저 나간다. 흔히들 접시를 쌓아놓은 구조로 설명하는데 접시를 쌓아 놓고 맨 아래에 있는 접시를 꺼내기위해서는 맨 아래 접시위에 있는 것들은 모두 치워야지 가능하다. 이처럼 스택 또한 데이터를 수직으로 쌓아 놓고 원하는 데이터 위에 아무것도 없어야지만 해당 데이터를 뺄 수 있다.

## 스택의 ADT(추상 자료형)
  *ADT 란?:  순수하게 기능이 무엇인지를 나열한 것을 가리켜 '추상 자료형' 혹은 ADT라고 한다
    
    init(): 스택의 초기화를 진행한다. 스택 생성후 제일 먼저 호출이 되어야하는 함수.

    isEmpty(): 스택이 빈 경우 true를, 그게 아니라면 false를 반환 한다.

    push(data): 스택에 데이터를 저장한다. 매개변수 data로 전달된 값을 저장한다.

    pop(): 마지막을 저장된 데이터를 삭제한다.삭제된 데이터는 반환된다. 본 함수를 호출하기위해서 데이터가 하나 이상 존재함이 보장 되어야 한다.

    peek():마지막에 저장된 요소를 반환하되 삭제 하지 않는다. 본 함수를 호출하기위해서 데이터가 하나 이상 존재함이 보장 되어야 한다.

    length(): 스택에 포함된. 포함된 요소 수를 반환.

# 스택 자료구조를 구현해보고 느낌점
- 역시 스택 구조는 기능이 많지 않고 단순하기 때문에 구현하기 쉽다.
- 그만큼 많이 사용하는 구조이기도 함.

