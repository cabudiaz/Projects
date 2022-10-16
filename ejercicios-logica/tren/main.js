

var tren = [
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
     [0,0,0,0,0,0,0,0,0,0],
    
];

lectura ();


function registro (){
/*     let cliente =document.querySelector(".input-cliente").value;*/
let documento = Number(document.querySelector('.input-cliente').value);
let vagon = Number(document.querySelector('.vagones').value);
let silla = Number(document.querySelector('.sillas').value);
 
    if (tren[vagon][silla-1] == "Disponible" || tren[vagon][silla-1] == 0){
        tren[vagon][silla-1]=documento
    } else {
        alert("Silla ocupada, elija otra")
    }

  
    

    console.log(vagon)

    document.querySelector('.input-cliente').value =""

   
}

function lectura (){
    
    
    for (let i = 0; i <= 9; i++) {
        document.querySelector(`.pru #vagon${i}`).innerHTML =""  
         document.querySelector(`.pru #vagon${i}`).innerHTML += `<td>${i+1}</td>`; 
        for (let j = 0; j <=9; j++) {
           if (tren[i][j]== 0) {
            tren[i][j] = "Disponible"
           }
            document.querySelector(`#vagon${i}`).innerHTML += `<td >${tren[i][j]}<td>`;
        }
        
    }
  
}

function eliminarPasajero () {
     let vagon = Number(document.querySelector('.vagones').value);
    let silla = Number(document.querySelector('.sillas').value);
    
   tren[vagon][silla-1]="Disponible" 
    /* console.log(tren[vagon][silla-1]) */
    lectura ()
}


