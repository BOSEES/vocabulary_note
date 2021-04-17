# 트리 자료구조
트리는 계층적 관계(Hierarchical Relationship)를 "표현"하는 자료구조 이다.
실제 나무를 거꾸로 한 것과 같은 모양을 하고 있기 때문에 트리라고 부른다.

                                   A (root node) & (internal node)
                               /   |   \
                              /    |    \ (eage)
                             /     |     \
            (internal node) B      C      D (terminal node) & (leaf node)
                           / \
                          /   \
                         E     F (terminal node) & (leaf node)
## 트리 관련 용어
- 노드(node)
  
  - 트리의 구성요쇼에 해당하는 A,B,C,D,E,F 와 같은 요소 (vertex)

- 간선(edge)

  - 노드와 노드를 연결하는 연결선

- 루트노드(root node)

  - 트리구조에서 최상위에 존재하는 A와 같은 노드

- 단말 노드(terminal node)

  - 아래로 또 다른 노드가 연결되어 있지 않은 E, F, C, D 와 같은 노드

- 내부 노드(internal node)

  - 단말 노드를 제외한 모든 노드로 A, B와 같은 노드


참고로 '단말 노드'는 나무의 구조상 잎에 해당한다 하여 '입사귀 노드(leaf node)'라고도 불리며, '내부 노드'는 단말노드가 아니라 하여 '비단말 노드(nonterminal node)'라고도 불린다.
그리고 노드간에는 부모,자식,형제의 관계가 성립이 되어 되어 다음과같이 표현 할 수 있다.

## 이진 트리
이진트리는 컴퓨터 응용에서 가장 많이 활용되는 아주 중요한 트리구조이다. 이 이진 트리는 모든 노드가 정확하게 두 개의 서브트리를 가지고 있는 트리이다.  다만 서브트리는 공백이 될 수 있다.  즉 노드의 유한 집합으로서 공백이거나 루트와 두 개의 분리된 이진트리인 경우 왼쪽서브트리와 오른쪽 서브트리로 구성된다.  여기서 중요한점은 왼쪽과 오른쪽 서브트리를 확실하게 구분한다는 것이다.

즉, 1개의 부모 노드가 2개 이하의 자식노드를 가지고 있는 트리 구조를 이진 트리(binary tree)라고 함.

                                   A (root node) & (internal node)
                                 /   \
                                /     \
                               /       \ (eage)
                              /         \
            (internal node) B            C (internal node)
                           / \          / \
                          /   \        /   \
                         D     E      F     G (terminal ndoe) & (leaf node)



## 포화 이진 트리(Full Binary Tree)와 완전 이진 트리(Complete Binary Tree)

### 포화 이진 트리

                                   A (root node) & (internal node)
                                 /   \
                                /     \
                               /       \ (eage)
                              /         \
            (internal node) B            C (internal node)
                           / \          / \
                          /   \        /   \
                         D     E      F     G (terminal node) & (leaf node)

포화 이진트리란 이진트리가 보유할 수 있는 최대의 노드를 가지고 있는 형태이다. 높이가 h인 이진 트리에서 있을 수 있는 최대 노드 수는 이다.  위 그림은 높이가 2인 포화 이진 트리이다. 

-------

### 완전 이진트리

                                   A (root node) & (internal node)
                                 /   \
                                /     \
                               /       \ (eage)
                              /         \
            (internal node) B            C (internal node)
                           / \          
                          /   \        
                         D     E (terminal ndoe) & (leaf node)

위 포화 이진트리 같은 경우에는 루트 노드를 1번으로 하고 레벨별로 왼편에서 오른 편오로 차례로 노드 위치에 번호를 까지 부여가 가능하다.  그런데 만일 높이가 h이고 노드 수가 n, 일때 n<=()인  이진트리를 노드의 레벨 순수에 따라 노드 번호를 붙인다면 이때 각 노드 번호의 위치가 포화 이진트리 번호 1에서 n까지의 위치와 모두 정확하게 일치한다면 이 트리를 완전 이진트리라고 한다.  즉 루트 노드를 1이라고 하고 그외에 모든 노드가 왼쪽에서부터 오른쪽까지 꽉 차서 노드의 수가  n<=()라면 완전 이진트리이다. 위 그림은 완전 이진트리의 예이다.

-----

## 이진 트리의 순차 표현
이진 트리는 유일하게 붙여지는 포화 이진 트리 번호를 이용하면 순차 표현 즉 1차원 배열로 쉽게 표현할 수 있다. 즉 포화 이진트리 번호를 배열의 인덱스로 사용하면 된다. 아래 그림은 이진 트리의 순차표현을 보여준다. 이때 1차원 배열에시 인덱스 0은 실제 사용하지 않고 인덱스 1은 항상 루트 노드를 나타낸다.

### 완전 이진 트리
                                   A (root node) & (internal node)
                                 /   \                          0 | - |
                                /     \                         1 | A |
                               /       \ (eage)                 2 | B |     
                              /         \                       3 | C |
            (internal node) B            C (internal node)      4 | D |
                           / \                                  5 | E |
                          /   \                                 6 |   |
                         D     E (terminal ndoe) & (leaf node)  7 |   |

### 편향 이진 트리
                                   A (root node) & (internal node)
                                 /                             0 | - |
                                B                              1 | A |
                              /                                2 | B |     
                             c                                 3 | - |
                           /                                   4 | C |
                          D (terminal node) & (leaf node)      5 | - |
                                                               6 | - |
                                                               7 | - |
                                                               8 | D |

## 이진 트리 순회 (Traversal)
이진 트리를 순회하는 방법은 크게 3가지이며, 방법 또한 재귀적이다

- 전위 순회 (PreOrder Traversal) 루트 노드를 먼저! 

- 중위 순회 (InOrder Traversal) 루트 노드를 중간에!

- 후위 순회 (PostOrder Traversal) 루트 노드를 마지막에!

이렇듯 이진 트리를 순회하는 대표적인 방법은 결국 루트 노드를 언제 방문하느냐에 따라 정해진다.