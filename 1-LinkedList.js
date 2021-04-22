class _Node {
    constructor(value, next){
        this.value = value
        this.next = next
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertFirst(data) {
        const newNode = new _Node(data, this.head)
        this.head = newNode
        this.length++
    }

    insertLast(data) {
        if (this.head === null) {
            this.insertFirst(data)
        }
        else {
            let tempNode = this.head
            while(tempNode.next !== null) {
                tempNode = tempNode.next
            }
            tempNode.next = new _Node(data, null)
        }
    }

    insertBefore(data, key) {
        let currNode = this.head
        let nextNode = currNode.next

        if(!currNode) {
            return
        }
        if(currNode === key) {
            this.insertFirst(data)
            return
        }

        while(nextNode !== null && nextNode.value !== key){
            currNode = currNode.next
        }

        if(nextNode === null) {        
            return
        }

        nextNode = new _Node(data, nextNode)
    }

    insertAfter(data, key) {
        let currNode = this.head

        if(!currNode) {
            return
        }
        if(currNode === key) {
            this.insertLast(data)
            return
        }
    }

    insertAt(index, value) {
        if(index === 0) {
            return this.insertFirst(value)
        }

        const previous = this.getByIndex(index -1)
        if(previous === null) {
            return null
        }

        previous.next = new _Node(value, previous.next)
        this.length++
    }

    getByIndex(index) {
        if(index < 0 || index >= this.length) {
            return null
        }

        let current = this.head
        for(let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }


    find(data) {
        let currNode = this.head            //start at the head
        if(!this.head) {                    // if the list is empty, return null
            return null
        }
                                            //check for the data
        while(currNode.value !== data) {    //return null if it's the end of the list and data is
            if(currNode.next === null) {    //not on the list
                return null
            }
            else {
                currNode = currNode.next    //otherwise, keep looking
            }
        }
        return currNode                     //found it
    }

    remove(data) {
        if(!this.head) {                        //if the list is empty
            return null
        }

        if(this.head.value === data) {          //if node to be removed is head, make next
            this.head = this.head.next          //node head
            return
        }

        let currNode = this.head                //start at the head
        let previousNode = this.head            //keep track of the previous

        while((currNode !== null) && (currNode.value !== data)) {
            previousNode = currNode             
            currNode = currNode.next            //save the previous node
        }

        if(currNode === null) {
            console.log('data not found')
            return
        }

        previousNode.next = currNode.next
    }

    print() {
        let output = ''
        let current = this.head
        while(current) {
            output = `${output} ${current.value} ->`
            current = current.next
        }
        console.log(`${output} null`)
    }
}


let link = new LinkedList([])
link.insertFirst(1)
link.insertFirst(3)
link.insertFirst(5)
link.insertFirst(7)
link.insertFirst(8)
console.log(link)



LinkedList.fromValues = function(...values) {
    const ll = new LinkedList()
    for(let i = values.length - 1; i >= 0; i--) {
        ll.insertFirst(values[i])
    }
    return ll
}






module.exports = LinkedList