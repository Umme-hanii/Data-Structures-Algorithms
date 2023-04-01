'use strict'

const Stack = require('../stack')

function evaluatePostfix(exp) {
    let myStack = new Stack()
    let op1, op2
    for(let i = 0; i < exp.length; i++) {
        if(!isNaN(parseInt(exp[i], 10))) {
            myStack.push(parseInt(exp[i], 10))
        } else {
            op1 = myStack.pop()
            op2 = myStack.pop()
            if(exp[i] == '+') {
                myStack.push(op2 + op1)
            } else if(exp[i] == '-') {
                myStack.push(op2 - op1)
            } else if(exp[i] == '*') {
                myStack.push(op2 * op1)
            } else if(exp[i] == '/') {
                myStack.push(op2 / op1)
            }
        }
    }
    return myStack.pop()
}

console.log("Result 1: " + evaluatePostfix("921*-8-4+"))
console.log("Result 2: "+ evaluatePostfix("231*+4-"))