export const codeStore = {
    createArray: 
    `
    <span class="com">// Creating an empty array</span>
    <span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="ds">]</span>;
    
    <span class="com">// Create an empty array with a set length</span>
    <span class="const">const</span> arr2 <span class="new">=</span> <span class="new">new</span> Array<span class="ds">(</span><span class="data">5</span><span class="ds">)</span>;
    
    <span class="com">// Create an array with values</span>
    <span class="const">const</span> arr3 <span class="new">=</span> <span class="ds">[</span><span class="data">"A"</span>,<span class="data">"B"</span>,<span class="data">"C"</span><span class="ds">]</span>; 
    `,
    pushArray:
    `
<span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="data">"A"</span>,<span class="data">"B"</span>,<span class="data">"C"</span><span class="ds">]</span>;
<span class="const">const</span> arr2 <span class="new">=</span> <span class="ds">[</span><span class="data">1</span>,<span class="data">2</span>,<span class="data">3</span><span class="ds">]</span>
    
<span class="com">// Pushing D onto the end of the array</span>
arr.push<span class="ds">(</span><span class="data">"D"</span><span class="ds">)</span>; <span class="com">// ["A","B","C","D"]</span>

arr2.push<span class="ds">(</span><span class="data">4</span>,<span class="data">5</span>,<span class="data">6</span><span class="ds">)</span>; <span class="com">// [1,2,3,4,5,6]</span>
    
<span class="com">// You can also use the spread operator</span>
arr.push<span class="ds">(</span>...arr2<span class="ds">)</span> <span class="com">// ["A","B","C",1,2,3]</span>
    `,
    popArray:
    `
<span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="data">"A"</span>,<span class="data">"B"</span>,<span class="data">"C"</span><span class="ds">]</span>;
<span class="const">const</span> arr2 <span class="new">=</span> <span class="ds">[</span><span class="data">1</span>,<span class="data">2</span>,<span class="data">3</span><span class="ds">]</span>

<span class="com">// Popping removes the last element of an </span>
<span class="com">// array</span>
arr.pop<span class="ds">(</span><span class="ds">)</span>;  <span class="com">// ["A","B"]</span>

<span class="com">// When popping you can return the popped </span>
<span class="com">// value</span>
<span class="const">const</span> a <span class="new">=</span> arr.pop<span class="ds">(</span><span class="ds">)</span>
console.log<span class="ds">(</span>a<span class="ds">)</span> <span class="com">// "C"</span>
    `,
    shiftArray:
    `
<span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="data">"A"</span>,<span class="data">"B"</span>,<span class="data">"C"</span><span class="ds">]</span>;

<span class="com">// shifting removes the first element of </span>
<span class="com">// an arr</span>
arr.shift<span class="ds">(</span><span class="ds">)</span>; <span class="com">// ["B","C"]</span>

<span class="com">// When shifting you can return the shifted </span>
<span class="com">// value</span>
<span class="const">const</span> a <span class="new">=</span> arr.shift<span class="ds">(</span><span class="ds">)</span>
console.log<span class="ds">(</span>a<span class="ds">)</span> <span class="com">// "A"</span>
    `,
    unshiftArray:
    `
<span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="data">"A"</span>,<span class="data">"B"</span>,<span class="data">"C"</span><span class="ds">]</span>;
<span class="const">const</span> arr2 <span class="new">=</span> <span class="ds">[</span><span class="data">1</span>,<span class="data">2</span>,<span class="data">3</span><span class="ds">]</span>;
                            
<span class="com">// Pushing D onto the end of the array</span>
arr.unshift<span class="ds">(</span><span class="data">"D"</span><span class="ds">)</span>; <span class="ds">[</span><span class="data">"D"</span>,<span class="data">"A"</span>,<span class="data">"B"</span>,<span class="data">"C"</span><span class="ds">]</span>
                        
arr2.unshift<span class="ds">(</span><span class="data">4</span>,<span class="data">5</span><span class="ds">)</span>; <span class="com">// [4,5,1,2,3]</span>
                        
<span class="com">// You can also use the spread operator</span>
arr.unshift<span class="ds">(</span><span class="new">...</span>arr2<span class="ds">)</span> <span class="com">// [1,2,3,"A","B","C"]</span>
    `,
    sliceArray:
    `
<span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="data">"A"</span>, <span class="data">"B"</span>, <span class="data">"C"</span><span class="ds">]</span>

arr.slice<span class="ds">(</span><span class="data">2</span><span class="ds">)</span> <span class="com">// ["C"]</span>

arr.slice<span class="ds">(</span><span class="data">1</span>,<span class="data">2</span><span class="ds">)</span> <span class="com">// ["B","C"];</span>
    `,
    spliceArray:
    `
<span class="const">const</span> arr <span class="new">=</span> <span class="ds">[</span><span class="data">1</span>,<span class="data">2</span>,<span class="data">3</span>,<span class="data">4</span><span class="ds">]</span>

<span class="com">// This will go to the index at 1 and delete </span>
<span class="com">// 0 values and place 5 within the array</span>
arr.splice<span class="ds">(</span><span class="data">1</span>,<span class="data">0</span>,<span class="data">5</span><span class="ds">)</span> <span class="com">// [1,5,2,3,4]</span>

<span class="com">// Here we replace 2,3 with 5</span>
arr.splice<span class="ds">(</span><span class="data">1</span>,<span class="data">2</span>,<span class="data">5</span><span class="ds">)</span> <span class="com">// [1,5,4]</span>
    `,
    classNode:
    `
class Node {

    constructor(value) {
    this.value = value
    this.next = null
    }
}
    `,
    pushLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }
                        
    <span class="const">Push</span>(<span class="data">value</span>){
        <span class="const">const</span> nodeData <span class="new">=</span> <span class="new">new</span> Node(<span class="data">value</span>)
        <span class="const">this</span>.length++;
        <span class="const">if</span>(!<span class="const">this</span>.head){
            <span class="const">this</span>.head <span class="new">=</span> nodeData;
            <span class="const">this</span>.tail <span class="new">=</span> nodeData;
            <span class="new">return</span>;
        }
        <span class="const">else</span>{
                <span class="const">this</span>.tail.next <span class="new">=</span> nodeData;
                <span class="const">this</span>.tail <span class="new">=</span> nodeData;
                <span class="new">return</span>;
        }
    }
}
    `,
    popLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }

    <span class="const">Pop</span>(){
        <span class="const">if</span>(!<span class="const">this</span>.head){
            <span class="new">return</span> <span class="data">undefined</span>
        }
        <span class="const">let</span> temp <span class="new">=</span> <span class="const">this</span>.head
        <span class="const">let</span> pre <span class="new">=</span> <span class="const">this</span>.head
        <span class="const">while</span>( temp.next){
            pre <span class="new">=</span> temp
            temp <span class="new">=</span> temp.next
        }
        <span class="const">this</span>.tail <span class="new">=</span> pre
        <span class="const">this</span>.tail.next <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length--
        <span class="const">if</span>(<span class="const">this</span>.length <span class="new">===</span> <span class="data">0</span>){
            <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
            <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        }
        <span class="new">return</span> temp
    }
}
    `,
    insertAtPosLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }

    <span class="const">InsertAtPos</span>(<span class="data">index</span>, <span class="data">value</span>)
    {
        <span class="const">if</span>(<span class="data">index</span> &#60; <span class="data">0</span> || <span class="data">index</span> &#62; <span class="const">this</span>.length)
        {
            <span class="new">return</span> <span class="data">null</span>
        }

        <span class="const">let</span> node <span class="new">=</span> <span class="new">new</span> Node(<span class="data">value</span>)

        <span class="const">if</span>(<span class="data">index</span> <span class="new">===</span> <span class="data">0</span>)
        {
            <span class="const">let</span> temp <span class="new">=</span> <span class="const">this</span>.head
            node.next <span class="new">=</span> temp
            <span class="const">this</span>.head <span class="new">=</span> node
            <span class="const">this</span>.length++
            <span class="new">return</span>
        }

        <span class="const">if</span>(<span class="data">index</span> <span class="new">===</span> <span class="const">this</span>.length)
        {
                <span class="const">let</span> temp <span class="new">=</span> <span class="const">this</span>.tail
                temp.next <span class="new">=</span> node
                <span class="const">this</span>.tail <span class="new">=</span> node
                <span class="const">this</span>.length++
                <span class="new">return</span>
        }

        <span class="const">let</span> curr <span class="new">=</span> <span class="const">this</span>.head
        <span class="const">let</span> num <span class="new">=</span> <span class="data">0</span>
        <span class="const">while</span>(num &#60; <span class="data">index</span> <span class="new">-</span> <span class="data">1</span>)
        {
            curr <span class="new">=</span> curr.next  
            num++
        }

        node.next <span class="new">=</span> curr.next
        curr.next <span class="new">=</span> node
        <span class="const">this</span>.length++
        <span class="new">return</span>

    }
   

    }
    `,
    removeFromLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }

    <span class="const">removeFrom</span>(<span class="data">index</span>)
    {
        <span class="const">if</span>(<span class="data">index</span> &#60; <span class="data">0</span> || <span class="data">index</span> &#62; <span class="const">this</span>.length)
        {
                <span class="new">return</span> <span class="data">null</span>
        }

        <span class="const">if</span>(<span class="data">index</span> <span class="new">===</span> <span class="data">0</span>)
        {
            <span class="const">let</span> temp <span class="new">=</span> <span class="const">this</span>.head
            <span class="const">this</span>.head <span class="new">=</span> temp.next
            temp.next <span class="new">=</span> <span class="data">null</span>
            <span class="const">this</span>.length--
            <span class="new">return</span> temp
        }

        <span class="const">let</span> num <span class="new">=</span> <span class="data">0</span>
        <span class="const">let</span> curr <span class="new">=</span> <span class="const">this</span>.head
        <span class="const">while</span>(num &#60; <span class="data">index</span> <span class="new">-</span> <span class="data">1</span>)
        {
            curr <span class="new">=</span> curr.next
            num++
        }

        <span class="const">if</span>(<span class="data">index</span> <span class="new">===</span> <span class="const">this</span>.length)
        {
            <span class="const">let</span> temp <span class="new">=</span> curr.next
            <span class="const">this</span>.tail <span class="new">=</span> curr
            curr.next <span class="new">=</span> <span class="data">null</span>
            <span class="const">this</span>.length--
            <span class="new">return</span> temp
        }

        <span class="const">let</span> temp <span class="new">=</span> curr.next
        curr.next <span class="new">=</span> temp.next
        temp.next <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length--
        <span class="new">return</span> temp
    }

}
    `,
    removeNodeLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }

    <span class="const">removeNode</span>(<span class="data">value</span>)
    {
        
        <span class="const">if</span>(<span class="const">this</span>.head.val <span class="new">===</span> <span class="data">value</span>)
        {
                <span class="const">let</span> temp <span class="new">=</span> <span class="const">this</span>.head
                <span class="const">this</span>.head <span class="new">=</span> <span class="const">this</span>.head.next
                temp.next <span class="new">=</span> <span class="data">null</span>
                <span class="const">this</span>.length--
                <span class="new">return</span> temp
        }

        <span class="const">let</span> curr <span class="new">=</span> <span class="const">this</span>.head
        <span class="const">while</span>(<span class="data">value</span> <span class="new">!==</span> curr.val)
        {
            <span class="const">if</span>(!curr.next)
            {
                <span class="new">return</span>
            }
            <span class="const">if</span>(curr.next.val <span class="new">===</span> <span class="data">value</span>)
            {
                <span class="const">break</span>
            }
            curr <span class="new">=</span> curr.next   
        }
        
        <span class="const">if</span>(<span class="const">this</span>.tail.val <span class="new">===</span> <span class="data">value</span>)
        {
            <span class="const">let</span> temp <span class="new">=</span> curr.next
            <span class="const">this</span>.tail <span class="new">=</span> curr
            curr.next <span class="new">=</span> <span class="data">null</span>
            <span class="const">this</span>.length--
            <span class="new">return</span> temp
        }

        <span class="const">let</span> temp <span class="new">=</span> curr.next
        curr.next <span class="new">=</span> temp.next
        temp.next <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length--
        <span class="new">return</span> temp
    }

}
    `,
    indexOfLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }

    <span class="const">indexOf</span>(<span class="data">value</span>)
    {
        <span class="const">if</span>(<span class="const">this</span>.head.val <span class="new">===</span> <span class="data">value</span>)
        {
            <span class="new">return</span> <span class="data">0</span>
        }

        <span class="const">if</span>(<span class="const">this</span>.tail.val <span class="new">===</span> <span class="data">value</span>)
        {
            <span class="new">return</span> <span class="const">this</span>.length <span class="new">-</span> <span class="data">1</span>
        }

        <span class="const">let</span> curr <span class="new">=</span> <span class="const">this</span>.head
        <span class="const">let</span> num <span class="new">=</span> <span class="data">0</span>
        <span class="const">while</span>(curr.val <span class="new">!==</span> <span class="data">value</span>)
        {
            <span class="const">if</span>(!curr.next)
            {
                <span class="new">return</span>
            }
            curr <span class="new">=</span> curr.next
            num++
        }

        <span class="new">return</span> num
    }
}
    `,
    isEmptyLinkedList:
    `
<span class="const">class</span> LinkedList {

    <span class="const">constructor</span>() {
        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
    }

    <span class="const">isEmpty</span>()
    {
        if(<span class="const">this</span>.length <span class="new">===</span> <span class="data">0</span>)
        {
            <span class="new">return</span> <span class="data">true</span>
        }
        else
        {
            <span class="new">return</span> <span class="data">false</span>
        }
    }

}
    `,
    getIndexAtLinkedList:
    `
                <span class="const">class</span> LinkedList <span class="ds">{</span>
                
                    <span class="const">constructor</span><span class="ds">(</span><span class="ds">)</span> <span class="ds">{</span>
                        <span class="const">this</span>.head <span class="new">=</span> <span class="data">null</span>
                        <span class="const">this</span>.tail <span class="new">=</span> <span class="data">null</span>
                        <span class="const">this</span>.length <span class="new">=</span> <span class="data">0</span>
                    <span class="ds">}</span>
                
                    <span class="const">getValueAtIndex</span><span class="ds">(</span><span class="data">index</span><span class="ds">)</span>
                    <span class="ds">{</span>
                        <span class="const">if</span><span class="ds">(</span><span class="data">index</span> <span class="new">===</span> <span class="data">0</span><span class="ds">)</span>
                        <span class="ds">{</span>
                            <span class="new">return</span> <span class="const">this</span>.head.val
                        <span class="ds">}</span>
                
                        <span class="const">if</span><span class="ds">(</span><span class="data">index</span> <span class="new">===</span> <span class="const">this</span>.length - <span class="data">1</span><span class="ds">)</span>
                        <span class="ds">{</span>
                            <span class="new">return</span> <span class="const">this</span>.tail.val
                        <span class="ds">}</span>
                
                        <span class="const">let</span> num <span class="new">=</span> <span class="data">0</span>
                        <span class="const">let</span> curr <span class="new">=</span> <span class="const">this</span>.head
                
                        <span class="const">while</span><span class="ds">(</span>num &#60; <span class="data">index</span><span class="ds">)</span>
                        <span class="ds">{</span>
                            curr <span class="new">=</span> curr.next
                            num++
                        <span class="ds">}</span>
                
                        <span class="new">return</span> curr.val
                    <span class="ds">}</span>
                
                <span class="ds">}</span>
    `,
    getLengthOfLinkedList:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    getLengthOfList()
    {
        return this.length
    }

}
    `,
    reverseLinkedList:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    reverse()
    {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let prev = null
        let curr = this.tail
        let after = this.tail.next
        curr.next = null
        while(curr.val !== this.head.val)
        {
            prev = curr
            curr = after
            if(after.next)
            {
                after = after.next
            }
            curr.next = prev            
        }
    }
    

}
    `,
    classNodeD:
    `
class Node {
    constructor(value) {
        this.val = value
        this.next = null
        this.prev
    }
}
    `,
    pushLinkedListD:
    `
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
}
    `,
    popLinkedListD:
    `
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
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
    `,
    insertAtPosLinkedListD:
    `
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
                            
    InsertAtPos(index, value)
    {
        if(index &#60; 0 || index &#62; this.length)
        {
            return null
        }
    
        let node = new Node(value)
    
        if(index === 0)
        {
            let temp = this.head
            node.next = temp
            temp.prev = node
            this.head = node
            this.length++
            return
        }
    
        if(index === this.length)
        {
            let temp = this.tail
            temp.next = node
            node.prev = temp
            this.tail = node
            this.length++
            return
        }
    
        let curr = this.head
        let num = 0
        while(num &#60; index - 1)
        {
            curr = curr.next    
            num++    
        }
    
       node.next = curr.next
       node.prev = curr
       node.next.prev = node
       curr.next = node
       this.length++
       return
   }
}
    `,
    removeFromLinkedListD:
    `
class LinkedList {
    
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    removeFrom(index)
    {
        if(index &#60; 0 || index &#62; this.length)
        {
                return null
        }

        if(index === 0)
        {
            let temp = this.head
            this.head = temp.next
            this.head.prev = null
            temp.next = null
            this.length--
            return temp
        }

        let num = 0
        let curr = this.head
        while(num &#60; index - 1)
        {
            curr = curr.next
            num++
        }

        if(index === this.length - 1)
        {
            let temp = curr.next
            this.tail = curr
            curr.next = null
            temp.prev = null
            this.length--
            return temp
        }

        let temp = curr.next
        curr.next = temp.next
        curr.next.prev = curr
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }

}
    `,
    removeNodeLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    removeNode(value)
    {
        
        if(this.head.val === value)
        {
                let temp = this.head
                this.head = this.head.next
                this.head.prev = null
                temp.next = null
                this.length--
                return temp
        }

        let curr = this.head
        while(value !== curr.val)
        {
            if(!curr.next)
            {
                return
            }
            if(curr.next.val === value)
            {
                break
            }
            curr = curr.next   
        }
        
        if(this.tail.val === value)
        {
            let temp = curr.next
            this.tail = curr
            curr.next = null
            temp.prev = null
            this.length--
            return temp
        }

        let temp = curr.next
        curr.next = temp.next
        curr.next.prev = curr
        temp.next = null
        temp.prev = null
        this.length--
        return temp
    }
}
    `,
    indexOfLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    indexOf(value)
    {
        if(this.head.val === value)
        {
            return 0
        }

        if(this.tail.val === value)
        {
            return this.length - 1
        }

        let curr = this.head
        let num = 0
        while(curr.val !== value)
        {
            if(!curr.next)
            {
                return
            }
            curr = curr.next
            num++
        }
        return num
    }
}
    `,
    isEmptyLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    isEmpty()
    {
        if(this.length === 0)
        {
            return true
        }
        else
        {
            return false
        }
    }

}
    `,
    getIndexAtLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    getValueAtIndex(index)
    {
        if(index === 0)
        {
            return this.head.val
        }

        if(index === this.length - 1)
        {
            return this.tail.val
        }

        let num = 0
        let curr = this.head

        while(num &#60; index)
        {
            curr = curr.next
            num++
        }

        return curr.val
    }
}
    `,
    getLengthOfLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    getLengthOfList()
    {
        return this.length
    }

}
    `,
    reverseLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    reverse()
    {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let last = null
        let curr = this.tail
        let after = this.tail.next
        curr.next = after
        while(curr.val !== this.head.val)
        {
            last = curr
            curr = after
            if(after.next)
            {
                after = after.next
            }
            curr.next = last
            if(after)
            {
                curr.prev = after 
            }           
        }

        curr.prev = null
    }


}
    `,
    swapValuesLinkedListD:
    `
class LinkedList {

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    swapValues(value1, value2)
    {
        let node1 = null
        let node2 = null
        if(this.head.val === value1)
        {
            node1 = this.head
        }
        if(this.head.val === value2)
        {
            node2 = this.head
        }
        if(this.tail.val === value1)
        {
            node1 = this.tail
        }
        if(this.tail.val === value2)
        {
            node2 = this.tail
        }

        if(node1 === null || node2 === null)
        {
            let curr = this.head
            while(curr.val !== value1)
            {
                if(!curr.next)
                {
                    return undefined
                }
                curr = curr.next
            }
            node1 = curr
            curr = this.head
            while(curr.val !== value2)
            {
                    if(!curr.next)
                    {
                        return undefined
                    }
                    curr = curr.next
            }
            node2 = curr
        }

        let temp = node1.val
        node1.val = node2.val
        node2.val = temp
    }
}
    `,
    pushStack:
    `
class Stack {

    constructor()
    {
        this.items = [];
    }

    push(value)
    {
        this.items.push(value)
    }
}
    `,
    popStack:
    `
class Stack {

    constructor()
    {
        this.items = [];
    }
                        
    pop()
    {
        if(ths.items === 0)
        {
            return null
        }
        return this.items.pop()
    }
}
    `,
    peekStack:
    `
class Stack {

    constructor()
    {
        this.items = [];
    }
                        
    Peek()
    {
        if(this.items.length() === 0)
        {
            return null;
        }
        return this.items[this.items.length()];
    }
}    
    `,
    isEmptyStack:
    `
class Queue {

    constructor()
    {
        this.items = [];
    }
                        
    isEmpty()
    {
        if(this.items.length &#60; 1)
        {
            return true
        }
        else
        {
            return false
        }
    }
}    
    `,
    enqueueQueue:
    `
class Queue {
    
    constructor()
    {
        this.items = [];
    }
                                                
    enqueue(value)
    {
        return this.items.push(value);
    }
}    
    `,
    dequeueQueue:
    `
class Queue {
    
    constructor()
    {
        this.items = [];
    }
                                                
    dequeue()
    {
        return this.items.shift();
    }
}    
    `,
    peekQueue:
    `
class Queue {

    constructor()
    {
        this.items = [];
    }
                                                
    Peek()
    {
        return this.items[0]
    }
}    
    `,
    isEmptyQueue:
    `
class Queue {
    
    constructor()
    {
        this.items = [];
    }
                                                
    isEmpty()
    {
        if(this.items.length &#60; 1)
        {
            return true
        }
        else
        {
            return false
        }
    }
}    
    `,
}