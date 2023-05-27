function extract(content) {
     let regEx =/\(([^)]+)\)/g;
     let cont = document.getElementById('content').textContent
     let match = cont.match(regEx)
     let newArr = match.map(el => el.slice(1,el.length - 1))
     
     return newArr.join("; ")
}