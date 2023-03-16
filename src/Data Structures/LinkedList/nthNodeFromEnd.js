module.exports = function findNthNode(n) {
    let endNode = this.getHead()
    let nthNode = this.getHead()

    if(this.isEmpty()) return null
    let count = 0
    while(count < n) {
        if(endNode == null) {
            // console.log("Out of bounds")
            return null
        }
        endNode = endNode.nextElement
        count++
    }

    while(endNode != null) {
        endNode = endNode.nextElement
        nthNode = nthNode.nextElement
    }
    if(nthNode != null) return nthNode
    else return null
}