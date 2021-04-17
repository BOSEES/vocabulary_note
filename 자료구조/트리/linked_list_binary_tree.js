const preOrderResult = [];
const inOrderResult = [];
const postOrderResult = [];

class Tree {
  constructor() {
    this.root = null;
  }

  makeBTreeNode(left,data,right) {
    let newNode = new Node(data);
    newNode.left = left;
    newNode.right = right;
    this.root = newNode;
  }
  //전위 순회
  preOrder(treeRoot) {
    if (treeRoot) {
      preOrderResult.push(treeRoot.data);
      this.preOrder(treeRoot.left);
      this.preOrder(treeOrder.right);
    }
  }
  //중위 순회
  inOdrer(treeRoot) {
    if (treeRoot) {
      this.inOdrer(treeRoot.left);
      inOrderResult.push(treeRoot.data);
      this.inOdrer(treeRoot.right);
    }
  }
  //후위 순회
  postOrder(treeRoot) {
    if (treeRoot) {
      this.postOrder(treeRoot.left);
      this.postOrder(treeRoot.right);
      postOrderResult.push(treeRoot.data);
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

let tree = new Tree();

let n7 = tree.makeBTreeNode(null,"D",null);
let n6 = tree.makeBTreeNode(null,"C",null);
let n5 = tree.makeBTreeNode(null,"B",null);
let n4 = tree.makeBTreeNode(null,"A",null);
let n3 = tree.makeBTreeNode(n6,"/",n7);
let n2 = tree.makeBTreeNode(n4,"*",n5);
let n1 = tree.makeBTreeNode(n2,"-",n3);

tree.preOrder(n1);
tree.inOdrer(n1);
tree.postOrder(n1);

console.log(preOrderResult);
console.log(inOrderResult);
console.log(postOrderResult);

