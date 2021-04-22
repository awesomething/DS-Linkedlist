// Analyze the following function (without running it in an IDE) to determine
// what problem it is trying to solve. What is the time complexity of this 
// algortithm.



function WhatDoesThisProgramDo(list) {
    let current = list.head

    while(current !== null) {
        let newNode = current
        while(newNode !== null) {
            if(newNode.next.value === current.value) {
                newNode.next = newNode.next.next
            }
            else {
                newNode = newNode.next
            }
        }
        current = current.next
    }
}



// O(n^2) time complexity