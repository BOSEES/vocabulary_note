class Stack {
  constructor(size){
    this.size = size;
    this.top = 0;
    this.array = [];
  }
}

Stack.prototype.init = function() {
  this.top = - 1;
}

Stack.prototype.isEmpty = function() {
  if (this.top == -1) return true;
  return false;
}

Stack.prototype.push = function(data) {
  if(this.size > this.top) {
    this.top++;
    this.array[this.top] = data;
  } else {
    console.log(new Error("stack is full"));
  }
}

Stack.prototype.pop = function() {
  let temp = this.array[this.top];
  this.top--;
  return temp;
}

Stack.prototype.peek = function() {
  return this.array[this.top];
}

let stack = new Stack(5);

stack.init();
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.peek());