function colorize() {
   const tableElement = Array.from(document.querySelectorAll('tr'))
    
   for (let i = 1;i < tableElement.length;i += 2) {
    tableElement[i].style.backgroundColor = "red"
    
   }
}