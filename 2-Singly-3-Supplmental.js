const LinkedList = require('./1-LinkedList')


function main() {
    const SLL = new.LinkedList()
        SLL.insertLast('Apollo')
        SLL.insertLast('Boomer')
        SLL.insertLast('Helo')
        SLL.insertLast('Husker')
        SLL.insertLast('Starbuck')
        SLL.insertLast('Tahuida')
        SLL.remove('squirrel')
        SLL.insertBefore('Athena', 'Boomer')
        SLL.insertAfter('Hotdog', 'Helo')
        SLL.insertAt('Kat', 3)
        SLL.remove('Tahuida')
        console.log(SLL)
}


function display(list) {
    let currNode = this.head
    while(!(currNode.next === null)) {
        console.log(currNode.next.element)
        currNode = currNode.next
    }
}


function size(LinkedList) {

}


function isEmpty(LinkedList) {

}


function findPrevious(LinkedList) {

}


function findLast(LinkedList) {

}

console.log(main())


module.export = main