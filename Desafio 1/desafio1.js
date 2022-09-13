    
    
    let nombre = prompt("Bienvenido, ingrese su nombre y apellido");
 
    let respuesta = prompt (`${nombre}, es usted mayor de edad? S/N`).toUpperCase();
    
    //DEBE INGRESAR UNA 'S' O 's' PARA PODER CONTINUAR.
    if(respuesta === 'S'){
        let edad = prompt("Ingrese su Edad");

        while(edad<18){

            edad = prompt(`${nombre}, edad: ${edad}. Su edad debe ser mas de 18, vuelva a ingresar.`); 

        }

        alert("Bienvenido, vamos a viajar en el futuro...");

        let añosViaje = Number(prompt("Ingrese cuantos años quiere viajar hacia al futuro..."));
        let edadFutura = añosViaje + Number(edad);

        for (let i = edad; i <= edadFutura; i++) {

             console.log(`Avanza en el tiempo, ahora tiene ${i} años...`);
  
        }

        alert(`Felicidades, usted avanzo ${añosViaje} años. Ahora tiene ${edadFutura}`)
    }
    else if(respuesta === 'N'){
        alert("No puede continuar, su respuesta debe ser una S");
    }
    else{
        alert("Debe ingresar un caracter valido. S/N");
    }
    
    


    