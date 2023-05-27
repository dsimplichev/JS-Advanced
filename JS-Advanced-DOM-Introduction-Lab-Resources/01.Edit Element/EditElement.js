function editElement(element, stringToReplace, expect) {
    
    element.textContent = element.textContent.replace(stringToReplace, expect)
}