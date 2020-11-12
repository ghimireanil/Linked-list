// var x ='101';
// var decimal = parseInt(x,2);
// console.log(decimal);

//creating a linked list
const list ={
    head: {
        value: 6,
        next: {
            value: 10,
            next:{
                value: 12,
                next: {
                    value: 3,
                    next: null
                }
            }

        }
    }
}
console.log(list.head); //access head
console.log(list.head.next); //access element next to head

//Implementing listNode and linked list
class ListNode {
    constructor(data) {
        this.data = data
        this.next = null                
    }
}
//creating linkedlist and some common methods
class LinkedList {
    constructor(head = null) {
        this.head = head
    }
    //size -- no of nodes present
    size() {
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
    return count;
    }
    //clear-- empties out the list
    clear() {
        this.head = null;
    }
    //getlast -- returns the last node
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
    //getFirst()
    getFirst() {
        return this.head;
    }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list1 = new LinkedList(node1);
console.log(list1.head.data);// accessing head
console.log(list1.head.next.data);// accessing head
console.log(list1.size());