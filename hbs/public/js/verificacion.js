const formulario= document.querySelector('#form');
    formulario.addEventListener('submit', (validar) => {
        validar.preventDefault();
        var inicio = new Date(document.querySelector('#inicio').value);
        var fin = new Date(document.querySelector("#fin").value);
        let fecha= new Date();

        if(inicio < fecha|| fin < inicio){
            alert('Fechas invalidas');
        }else if (inicio > fin){
            alert('Fecha invalida');
        }else{
            alert('registrado con exito feliz viaje');
        }
       
    });
    