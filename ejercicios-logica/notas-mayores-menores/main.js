
 let mayoresCero = 0;
 let menoresCero = 0;
 let igualesCero= 0;


function operacion (e) {
    const nota= document.querySelector('.input-nota').value;
   
    
   
    

    if (nota > 0) {
        mayoresCero++;
        fillMayores(mayoresCero);
        
    } else if (nota == 0) {
        igualesCero++;
        fillIguales(igualesCero)

    } else if (nota < 0) {
        menoresCero++
        fillMenores(menoresCero);
    }

    fillNota(nota) 
    
    /* alert(nota) */
}

function fillNota (n) {
    document.querySelector('.table tbody tr').innerHTML += `<td>${n}</td>`;
    document.querySelector('.input-note').value = "";

}

function fillMayores (mayoresCero){
    document.querySelector('.table-nota-mayores tbody tr').innerHTML = `<td>${mayoresCero}</td>`;
}

function fillMenores (menoresCero){
    document.querySelector('.table-nota-menores tbody tr').innerHTML = `<td>${menoresCero}</td>`;
}

function fillIguales (igualesCero){
    document.querySelector('.table-nota-iguales tbody tr').innerHTML = `<td>${igualesCero}</td>`;
}

