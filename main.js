const accBtn = document.getElementsByClassName("accordion-btn");
const panel = document.getElementsByClassName("panel");
const arrow = document.getElementsByClassName("arrow")
const test = ["A","B","C"];
const arr1 = [1,2,3,4]; 
arr1.splice(1,2,5);
console.log(arr1)

for (let i = 0; i < accBtn.length; i++) {
        accBtn[i].addEventListener("click", function () {
        this.classList.toggle("active");
        arrow[i].classList.toggle("rotate");
        if (panel[i].style.maxHeight) {
            panel[i].style.maxHeight = null;
        } else {
            panel[i].style.maxHeight = panel[i].scrollHeight + "px";
        }
    });
}









class Node {
    constructor(value) {
        this.val = value
        this.next = null
        this.prev
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
            nodeData.prev = this.tail;
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
        temp.prev = null
        return temp
    }

    
    
   

    
    

}

    let cat = new LinkedList()

    cat.Push(4)
    cat.Push(3)
    cat.Push(2)
    cat.Push(1)
    console.log(cat)
