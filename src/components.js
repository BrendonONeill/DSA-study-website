import {codeStore} from './codeStore.js'
import {textStore} from './textStore.js'
class CustomComponents extends HTMLElement{

    constructor()
    {
        super()
        const container = document.getElementById('custom-template').content;
        const cloneContainer = container.cloneNode(true);

        const header = this.getAttribute("header")
        const code = this.getAttribute("code")
        const file = this.getAttribute("codefile")
        const genCode = codeStore[code] 
        const genText = textStore[code]
        cloneContainer.querySelector(".section-header").textContent = header
        cloneContainer.querySelector(".text-node").innerHTML = genText
        cloneContainer.querySelector(".custom-code").innerHTML = genCode
        cloneContainer.querySelector(".file-name").textContent = file 

        this.appendChild(cloneContainer)
    }
}



 export default customElements.define("custom-slot", CustomComponents)