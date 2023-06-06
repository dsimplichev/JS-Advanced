function sumTable() {
  const rows = Array.from(document.querySelectorAll('tr > td'))
  const rowsArray = rows.slice(0, rows.length - 2)
  let sumRows = 0;
  rowsArray.map((el,i) =>{
    if( i %2 !== 0){
       sumRows += Number(el.textContent);
    }
  })

  document.getElementById('sum').textContent = sumRows

  
  
}