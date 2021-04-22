// Write an algorithm to reverse a linked list. The time complexity of your 
// algorithm should be linear (O(n)). For this exercise, notice we are not 
// asking you just to print the linked list in reverse or use another linked 
// list to store the value in reverse order. Your program should reverse the 
// direction of a given singly linked list. In other words, all pointers should 
// point backward. BONUS: Solve this problem using both recursive and iterative 
// algorithms.

class ListNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

let node1 = new ListNode([1, 2, 3, 4, 5])


function reverse(head) {
    let previous = null
    let current = head
    let following = head

    while(current !== null) {
        following = following.next      // head --> 2nd
        current.next = previous         // 2nd --> null
        previous = current              // null --> head
        current = following             // head --> 2nd 
    }
    return previous
}

// 

console.log(reverse(node1))

// previous = head