class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return "Underflow";
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
  }
  
  function reverseStack(stack) {
    const reversedStack = new Stack();
  
    // Push all elements from the original stack to the reversed stack
    while (!stack.isEmpty()) {
      reversedStack.push(stack.pop());
    }
  
    return reversedStack;
  }
  
  // Example usage:
  const originalStack = new Stack();
  originalStack.push(1);
  originalStack.push(2);
  originalStack.push(3);
  originalStack.push(4);
  
  console.log("Original Stack:", originalStack.items);
  
  const reversedStack = reverseStack(originalStack);
  
  console.log("Reversed Stack:", reversedStack.items);
  