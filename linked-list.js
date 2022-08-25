class Node {
  constructor(value) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  append(node) {
    let currNode = this.head;
    if (this.head.nextNode === null) {
      this.head.nextNode = node;
    } else {
      while (currNode.nextNode != null) currNode = currNode.nextNode;
      currNode.nextNode = node;
    }
  }

  prepend(node) {
    const head = this.head;
    node.nextNode = head;
    this.head = node;
  }

  size() {
    let currNode = this.head;
    let count = 0;
    while (currNode !== null) {
      count++;
      currNode = currNode.nextNode;
    }
    return count;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.nextNode === null) {
        return currNode;
      }
      currNode = currNode.nextNode;
    }
  }

  at(index) {
    let currNode = this.head;
    let i = 1;
    while (index !== i) {
      i++;
      currNode = currNode.nextNode;
    }
    return currNode;
  }

  pop() {
    const temp = this.head;
    this.head = temp.nextNode;
    temp.nextNode = null;
  }

  contains(value) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currNode = this.head;
    let i = 1;
    while (currNode !== null) {
      if (currNode.value === value) return i;
      i++;
      currNode = currNode.nextNode;
    }
    return null;
  }

  toString() {
    let listString = "";
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.nextNode === null) {
        listString += currNode.value;
      } else {
        listString += currNode.value + " -> ";
      }
      currNode = currNode.nextNode;
    }
    console.log(listString);
  }

  insertAt(value, index) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    if (value === 0) {
      this.prepend(newNode);
      return;
    }

    if (index >= this.size()) {
      this.append(newNode);
      return;
    }

    const parent = this.at(index - 1);
    const child = parent.nextNode;
    parent.nextNode = newNode;
    newNode.nextNode = child;
  }

  removeAt(index) {
    if (this.head === null) {
      return;
    }

    if (index === 0) {
      const tempHead = this.head;
      const newHead = this.head.nextNode;
      tempHead.nextNode = null;
      this.head = newHead;
      return;
    }

    if (index >= this.size()) {
      this.at(this.size() - 1).nextNode = null;
      return;
    }

    const parent = this.at(index - 1);
    const child = this.at(index).nextNode;
    parent.nextNode = child;
    this.at(index).nextNode = null;
  }
}

const main = (() => {
  const head = new Node(1);
  const two = new Node(2);
  const three = new Node(3);
  const four = new Node(4);

  const myLinkedList = new LinkedList(head);

  myLinkedList.append(two);
  myLinkedList.append(three);
  myLinkedList.toString();

  myLinkedList.prepend(four);
  myLinkedList.toString();

  console.log(myLinkedList.at(3));
  console.log(myLinkedList.size());
  console.log(myLinkedList.getHead());
  console.log(myLinkedList.getTail());
  myLinkedList.pop();
  myLinkedList.toString();

  console.log(myLinkedList.contains(2));
  console.log(myLinkedList.contains(5));
  console.log(myLinkedList.find(2));
  console.log(myLinkedList.find(5));

  myLinkedList.insertAt(7, 2);
  myLinkedList.toString();

  myLinkedList.removeAt(4);
  myLinkedList.toString();
  myLinkedList.removeAt(2);
  myLinkedList.toString();
})();
