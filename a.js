function isOperand(char) {
    return /^[a-zA-Z0-9_]+$/.test(char);
  }
  
  function isOperator(char) {
    return /^[+\-*/^]$/.test(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
    const operators = ['+', '-', '*', '/', '^'];
  
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
      const currentChar = prefixExpression[i];
  
      if (isOperand(currentChar)) {
        stack.push(currentChar);
      } else if (isOperator(currentChar)) {
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1}${currentChar}${operand2})`;
        stack.push(infixExpression);
      }
    }
  
    return stack.pop();
  }
  
  // Example usage:
  const prefixExpression = "*+AB-CD"; // Prefix expression
  const infixExpression = prefixToInfix(prefixExpression);
  console.log(`Prefix: ${prefixExpression}`);
  console.log(`Infix: ${infixExpression}`);
  