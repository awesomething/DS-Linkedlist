// Write an algorithm to find whether a linked list has a cycle (i.e., whether a node 
// in the list has its next value pointing to an earlier node in the list). For this 
// exercise, create a linked list with the name CycleList. Be sure to insert nodes in 
// the list so that it has a cycle. Then test your program with a cycleList function.


function cycle(list) {
    let current = list.head

    while(current !== null){
        if(current.flagged){
            return true
        }
            current.flagged = true
            current = current.next
    }
    return false
}