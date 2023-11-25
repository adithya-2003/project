class Stack {
    constructor() {
      this.items = [];
      this.minStack = [];
    }
  
    push(element) {
      this.items.push(element);
  
      // Update the minStack with the current minimum element
      if (this.minStack.length === 0 || element <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(element);
      }
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
      }
  
      // If the popped element is the current minimum, update minStack
      if (this.items[this.items.length - 1] === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return "Stack is empty";
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const numberStack = new Stack();
  
  numberStack.push(3);
  numberStack.push(5);
  numberStack.push(2);
  numberStack.push(8);
  numberStack.push(1);
  
  console.log("Current Stack:", numberStack.items);
  console.log("Smallest Number:", numberStack.getMin());
  