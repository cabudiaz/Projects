valoractual=0
valorsuma=1
function secuencia () {
    repeticiones = Number(document.querySelector('.input-repeticiones').value);
    for (let i = 0; i < repeticiones; i++) {
        valoractual = valoractual + valorsuma
        valorsuma = valoractual - valorsuma
        document.querySelector('.table tbody tr').innerHTML += `<td>${valoractual}</td>`;
    }
    
    valoractual=0
    valorsuma=1
}