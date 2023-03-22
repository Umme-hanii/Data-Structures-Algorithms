"use strict";
const Stack = require('../stack');
function sortStack(stack) {
  let tempStack = new Stack()
  let finalStack = new Stack()
  while(stack.isEmpty() == false) {
    let currVal = stack.pop()   
      while(finalStack.isEmpty() == false && (finalStack.getTop() <= currVal)) {
        tempStack.push(finalStack.pop())
      }
    finalStack.push(currVal)
    while(tempStack.isEmpty() == false) {
      finalStack.push(tempStack.pop())
    }
   }
   console.log(finalStack)
   return finalStack;
}

const stack = new Stack()
stack.push(2)
stack.push(97)
stack.push(4)
stack.push(42)
stack.push(12)
stack.push(60)
stack.push(23)

stack.print()

sortStack(stack)