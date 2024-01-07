// seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplication")
const multiplicationOperations = document.querySelector("#multiplication-operations")
const multiplicationTable = document.querySelector("#multiplication-table")
const multiplicationTitle = document.querySelector("#multiplication-title span")
// funções
const operacao = (numero, multiplicador)=>{
    multiplicationTable.style.display = "block"
    multiplicationOperations.innerHTML = ""

    for(let i = 1; i <= multiplicador; i++){
        const result = numero * i
        
        const template = `
        <div class = "row">
            <div class = "operation">${numero} x ${i} =</div>
            <div class = "result">${result}</div>
        </div>
        `
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")
        multiplicationOperations.appendChild(row)
    }

    multiplicationTitle.innerText = numero
}

// eventos
multiplicationForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = + multiplicationInput.value
    if(!multiplicationNumber || !multiplicatorNumber){
        return
    }
    operacao(multiplicationNumber, multiplicatorNumber)
})