function extractText() {
    ulElemnt = document.getElementById('items').children
    textarea = document.getElementById('result')
    liElemnts = Array.from(ulElemnt)
    liElemnts.map(el => {
     console.log(el.textContent)
     textarea.textContent += el.textContent + " \n"

    })
}