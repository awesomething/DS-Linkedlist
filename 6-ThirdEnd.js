// Write an algorithm to find the 3rd element from the end of a linked list. 
// NOTE You may be tempted to add a length property to your linked list class. 
// The length property is not a typical property of linked list, therefore don't 
// make any modification to the linked list class that is provided to you.

function thirdFromLast(list) {
    let current = list.head
    if(!current || !current.next || !current.next.next){
        return null
    }

    while(current.next.next.next !== null) {
        current = current.next
    }
    return current
}