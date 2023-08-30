
class Node {
    constructor(value) {
        this.value = value
        this.next = undefined
    }
}



class LinkedList {
    constructor() {
        this.head = undefined
        this.tail = undefined
        this.length = 0
    }

    Prepend(value){
        const nodeData = new Node(value)
        this.length++
        if(!this.head){
            this.head = nodeData;
            return;
        }
        nodeData.next = this.head;
        this.head = nodeData;
    }

    Append(value){
        const nodeData = new Node(value)
        this.length++;
        if(!this.tail)
        {
            this.head = this.tail = nodeData;
            return;
        }
        this.tail.next = nodeData;
        this.tail = nodeData;
    }

    Remove(value){
        if(!this.head){
            return console.log("value not in linked list")
        }
        if(this.head.value === value){
            if(!this.head.next)
            {
                let head = this.head
                this.head = this.tail = undefined;
                this.length--
                return head;
            }
        }
        let curr  = this.head;
        for(let i = 0; i < this.length; ++i){
            if(curr.next.value === value){
                break;
            }
            if(curr.next === null)
            {
                return console.log("value not in linked list")
            }
            curr = curr.next
        }
        this.length--
        if(curr.next.value === this.tail.value)
        {
            let tail = curr.next
            curr.next = undefined
            this.tail = curr;
            return tail;
        }
        let item = curr
        curr = curr.next
        return item     
    }

    Get(value){

    }
    
    InsertAt(value, idx){
        if(idx > this.length){
            throw new Error("Index number is outside of the linked list")
        }
        else if( idx === this.length){
            this.Append(value);
            return
        }
        else if( idx === 0){
            this.Prepend(value);
            return;
        }
        this.length++
        let curr = this.head
        for(let i = 0; i < idx - 1; ++i){
            curr = curr.next;
        }
        let nodeData = new Node(value);
        nodeData.next = curr.next
        curr.next = nodeData
    }

    RemoveAt(location){ // revise not 100% correct needs more work...............
        if( location > this.length || location < 0 ){
            return undefined;
        }
        this.length--;
        if(location === 0)
        {
         let head = this.head
         this.head = this.head.next;
         return head;  
        }
        if(location === this.length + 1)
        {
            let tail = this.head
            while(tail.next.value !== this.tail.value)
            {
                tail = tail.next
            }
            let removeTail = this.tail
            tail.next = null
            this.tail = tail
            return removeTail
        }
        let curr = this.head;
        let index = 0
        while((location - 1) >= index){
            if(!curr.next)
            {
                return
            }
            curr = curr.next
            index++
        }
        let fish  = curr.next
        curr.next = curr.next.next
        return fish
        
        
    }
    }

    let cat = new LinkedList()

    cat.Append(4)
    cat.Append(5)
    cat.InsertAt(3,1)
    cat.InsertAt(12,0)
    console.log(cat.RemoveAt(2))
    console.log(cat)
