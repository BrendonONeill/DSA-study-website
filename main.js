
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}



class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    Push(value){
        const nodeData = new Node(value)
        this.length++;
        if(!this.head)
        {
            this.head = nodeData;
            this.tail = nodeData;
            return;
        }
        else{
            this.tail.next = nodeData;
            this.tail = nodeData;
            return;
        }
    }

    Pop(){
        if(!this.head){
            return undefined
        }
        let temp = this.head
        let pre = this.head
        while( temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }

    Unshift(value){
        const nodeData = new Node(value)
        if(!this.head){
            this.head = nodeData;
            this.tail = nodeData;
        }
        else{
            nodeData.next = this.head;
            this.head = nodeData;
        }
        this.length++
        return
    }

    Shift(){
        if(!this.head){
            return undefined
        }
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return temp
    }

}

    let cat = new LinkedList()

    cat.Push(4)
    cat.Push(5)
    cat.Unshift(13)
    cat.Shift()
    console.log(cat)
