const Stack = require('./Stack')

describe('Stack', () => {
  let stack

  beforeEach(() => {
    stack = new Stack()
  })

  test('isEmpty() should return true for an empty stack', () => {
    expect(stack.isEmpty()).toBe(true)
  })

  test('getTop() should return null for an empty stack', () => {
    expect(stack.getTop()).toBe(null)
  })

  test('size() should return 0 for an empty stack', () => {
    expect(stack.size()).toBe(0)
  })

  test('push() should add an element to the top of the stack', () => {
    stack.push(1)
    expect(stack.getTop()).toBe(1)
    expect(stack.size()).toBe(1)
  })

  test('pop() should remove and return the top element from the stack', () => {
    stack.push(1)
    stack.push(2)
    expect(stack.pop()).toBe(2)
    expect(stack.getTop()).toBe(1)
    expect(stack.size()).toBe(1)
  })

  test('pop() should return null for an empty stack', () => {
    expect(stack.pop()).toBe(null)
  })

  test('pop() should set top to null for a stack with one element', () => {
    stack.push(1)
    expect(stack.pop()).toBe(1)
    expect(stack.getTop()).toBe(null)
    expect(stack.size()).toBe(0)
  })

  test('pop() should update top after removing the top element from a stack with more than one element', () => {
    stack.push(1)
    stack.push(2)
    stack.push(3)
    expect(stack.pop()).toBe(3)
    expect(stack.getTop()).toBe(2)
    expect(stack.size()).toBe(2)
  })
})
