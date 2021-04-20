class Tree {
  constructor() {
    this.root = null;
  }

  insertKey(node, data) {
    const root = node;
    const newNode = new Node(data);

    if(!root) {
      return newNode;
    } else {
      if (data < root.data) {
        root.left = this.insertKey(root.left,data);
        return root;
      } else if(data > root.data){
        root.right = this.insertKey(root.right, data);
        return root;
      } else {
        return node;
      }
    }
  }

  insertBST(data) {
    const insert = this.insertKey(this.root,data);
    console.log(insert);
    this.root = insert;
  }

  search(node, data) {
    let parent = node;
    let child = node;
    while(child !== null) {
      if(data < child.data) {
        parent = child;
        child = child.left;
      } else if(data > child.data) {
        parent = child;
        child = child.right;
      }
      else return parent === child? [parent, null] : [parent, child];
    }
  }

  deleteBST(data) {
    let findNode = this.search(this.root, data);
    let parent = findNode[0];
    let child = findNode[1] === null ? parent : findNode[1];
    const root = child;
    
    console.log(this.root);

    if (child.left === null && child.right === null) {
      parent.data > child.data ? parent.left === null : parent.right = null;
    }
    else if (child.left === null || child.right === null) {
      parent = child;
      if (parent.left !== null) {
        child = child.left;
        root.data = child.data;
        parent.left = null;
      } else {
        child = child.right;
        root.data = child.data;
        parent.left = null;
      }
    }
    else if(child.left !== null && child.right !== null ){
      parent = child;
      child = child.right;
      let flag = true;

      while(child.left !== null && child.right !== null) {
        flag = false;
        parent = child;
        child = child.left;
      }
      root.data = child.data;
      flag === true ? parent.right = null : parent.left = null;
    }
    console.log(this.root)
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

tree.insertBST(3);
tree.insertBST(2);
tree.insertBST(1);

tree.deleteBST(2);
console.log(tree.root)