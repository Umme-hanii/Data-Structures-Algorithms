
//Complexities of Stack Operations
// isEmpty	O(1)
// getTop	O(1)
// size  	O(1)
// push 	O(1)
// pop  	O(1)
module.exports = class Stack {
    constructor() {
        this.items = []
        this.top = null
    }

    isEmpty() {
        return this.items.length == 0
    }

    getTop() {
        if(this.items.length == 0) return null
        return this.top
    }

    size() {
        return this.items.length
    }

    push(element) {
        this.items.push(element)
        this.top = element
    }

    pop() {
        if(this.items.length != 0) {
            if(this.items.length == 1) {
                this.top = null
                return this.items.pop()
            } else {
                this.top = this.items[this.items.length - 2]
                return this.items.pop()
            }
        } else
            return null
    }

    print() {
        let str = ''
        for(let i = 0; i < this.items.length; i++) {
            str = str + this.items[i] + '->'
        }
        str = str + ' top'
        console.log(str)
    }
}