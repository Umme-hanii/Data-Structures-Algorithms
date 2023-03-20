class TwoStacks {
    constructor(s) {
        this.items = new Array(s)
        this.top1 = -1
        this.top2 = s
    }

    push1(value) {
        if(this.top1 + 1 < this.top2) {
            this.top1++
            this.items[this.top1] = value
        } else {
            return -1
        }
    }

    push2(value) {
        if(this.top2 - 1 > this.top1) {
            this.top2--
            this.items[this.top2] = value
        } else {
            return -1
        }
    }

    pop1() {
        if(this.top1 > -1) {
            this.top1--
            return this.items[this.top1 + 1]
        }
        return null
    }

    pop2() {
        if(this.top2 < this.items.length) {
            this.top2++
            return this.items[this.top2 - 1]
        }
        return null
    }
}

//All the operations take constant time as array is being indexed not resized

const twoStacks = new TwoStacks(8)
twoStacks.push1(6)
twoStacks.push1(3)
twoStacks.push1(2)

twoStacks.push2(4)
twoStacks.push2(5)
console.log(twoStacks)

twoStacks.push1(9)
twoStacks.push2(8)
twoStacks.push2(1)
console.log(twoStacks)

console.log(twoStacks.push1(6))

console.log(twoStacks.pop2())
console.log(twoStacks.pop1())