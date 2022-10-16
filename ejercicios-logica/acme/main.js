function descuento (){
    let pizza = document.querySelector('.input-pizza').value;
    let precio = Number(document.querySelector('.input-precio').value);
    let precioFinal = precio * 0.93;
    const descuento ="7%"

    fillVentas (pizza, precio, descuento, precioFinal);
    
}


function fillVentas (pizza, precio, descuento, precioFinal) {
    document.querySelector('.table tbody').innerHTML += `<tr><td>${pizza}</td> <td>${precio}</td> <td>${descuento}</td> <td>${precioFinal}</td> </tr>`;
}