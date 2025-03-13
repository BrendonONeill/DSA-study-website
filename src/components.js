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
        console.log(code, codeStore)
        const genCode = codeStore[code]
        const genText = textStore[code]
        console.log(genCode)

        cloneContainer.querySelector(".section-header").textContent = header
        cloneContainer.querySelector(".custom-text").textContent = genText
        cloneContainer.querySelector(".custom-code").innerHTML = genCode

        this.appendChild(cloneContainer)
    }
}



 export default customElements.define("custom-slot", CustomComponents)