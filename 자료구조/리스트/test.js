function Node(data) { this.data = data; this.next = null; }

function LinkedList() { var _length = 0; var _head = null; }


LinkedList.prototype.append = function(data) { 
  var node = new Node(data);
  var curr; if( this._head == null ) { this._head = node; } else { curr = this._head; while( curr.next ) { curr = curr.next; } curr.next = node; } this._length ++; };

LinkedList.prototype.isEmpty = function() { return this._length === 0; };
let list = new LinkedList();
list.append(15);
list.append(10);

console.log(list.isEmpty());