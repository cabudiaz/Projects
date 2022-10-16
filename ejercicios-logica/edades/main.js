var menorEdad = 200;
var mayorEdad = 0;

var nombreMenor = "";
var nombreMayor = "";

function operacion (e) {
    
    
    
     

    const nombre= document.querySelector('.input-nombre').value;
    const edad= Number(document.querySelector('.input-edad').value);
    
    
   /*  contador= 1; */
    
    if ( edad < menorEdad ) {
       
        menorEdad = edad;
        nombreMenor = nombre;
        
        fillMenor(nombreMenor, menorEdad);
    }  
    if (edad > mayorEdad) {
        
        mayorEdad = edad;
        nombreMayor = nombre;
        
        fillMayor(nombreMayor, mayorEdad);
    }


    fillPerson(edad, nombre);
    
    contador++;
   
    
  

}

function fillPerson (e, n) {
    document.querySelector('.table tbody').innerHTML += `<tr><td>${n}</td> <td>${e}</td> </tr>`;
    document.querySelector('.input-note').value = "";

}

function fillMenor (nombreMenor, menorEdad) {
    document.querySelector('.table-result-menor tbody').innerHTML = `<tr><td>${nombreMenor}</td> <td>${menorEdad}</td> </tr>`;
}

function fillMayor (nombreMayor, mayorEdad) {
    document.querySelector('.table-result-mayor tbody').innerHTML = `<tr><td>${nombreMayor}</td> <td>${mayorEdad}</td> </tr>`;
}