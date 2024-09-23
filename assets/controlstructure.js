
const functionObjects = {
    Ejercicio1: function(edad) {
        const resultado = (edad >= 18) ? "La persona es Mayor de Edad":"La persona es Menor de Edad";
        return resultado;
    },
    Ejercicio2: function(infoAlumno){
        const notaFinal = (infoAlumno.NotaExamen * 0.2) + (infoAlumno.NotaTareas*0.4) + (infoAlumno.NotaAsistencia*0.1) + (infoAlumno.NotaInvestigacion*0.3);
        return `Nombre: ${infoAlumno.Nombre}, Carnet:${infoAlumno.Carnet}, Nota Final:${notaFinal.toFixed(2)}`;
    },
    Ejercicio3: function(infoTrabajador){
        let aumentoSalarial = 0;
        switch (infoTrabajador.Categoria) {
            case "A":
                aumentoSalarial = infoTrabajador.Salario * 0.15;
                break;
            case "B":
                aumentoSalarial = infoTrabajador.Salario * 0.30;
                break;
            case "C":
                aumentoSalarial = infoTrabajador.Salario * 0.10;
                break;
            case "D":
                aumentoSalarial = infoTrabajador.Salario * 0.20;
                break;
        }
        return `Nombre: ${infoTrabajador.Nombre}, Salario Actual:${infoTrabajador.Salario}, Categoria:${infoTrabajador.Categoria}, Aumento Salarial:${aumentoSalarial.toFixed(2)}`;

    },
    Ejercicio4: function(arrayNum) {
        let numeroMayor = 0;
        if (arrayNum[0] > arrayNum[1]) {
            numeroMayor = arrayNum[0];
        } 
        else if (arrayNum[1] == arrayNum[0]) {
            //los numeros son iguales por lo que no existe numero mayor.
            return `los 2 numeros son iguales, bebes ingresar diferentes numeros`;
        }
        else {
            numeroMayor = arrayNum[1];
        }

        return `El numero mayor es:${numeroMayor}`;
    }

}

const resultContainer = document.getElementById("resultContainer");

function printResultsHTML(nameFunction, parameterFunction) {
        
    console.log(resultContainer);
    const resultFunction = functionObjects[nameFunction](parameterFunction);
    console.log(resultFunction);
    if (resultContainer!= null) {
        console.log(resultContainer);
        const result = document.createElement('div');
        result.innerHTML = `
            <p><b>${nameFunction}</b></p>
            <p> La Funcion llamada ${nameFunction}, con los parametros ${parameterFunction}</p>
            <p> Salida: ${resultFunction}</p>
        `;
        resultContainer.appendChild(result);
    }

}


function Ejercicio5() {
    const selectedCar = document.getElementById("cars");
    const resultExercise5 = document.getElementById("resultExercise5");
    
    let DescuentoAplicable = 0;
    if (selectedCar != null) {
        //utilizando un switch seleccionamo el descuento aplicable
        switch(selectedCar.value) {
            case "FORD FIESTA":
                DescuentoAplicable = "5%";
                break;
            case "FORD FOCUS":
                DescuentoAplicable = "10%";
                break;
            case "FORD ESCAPE":
                DescuentoAplicable = "20%";
                break;
            default:
                DescuentoAplicable = "";
        }
        
        if (resultExercise5 != null) {resultExercise5.innerHTML = '';} //reiniciando el contenido.
        const result = document.createElement('div');
        result.innerHTML = `
            <p>El Descuento aplicable al vehiculo seleccionado es de ${DescuentoAplicable}</p>
        `;
        resultExercise5.appendChild(result);
    }
    
}


function Ejercicio6() {
    const origen = document.getElementById("origen");
    const destino = document.getElementById("destino");
    const resultExercise6 = document.getElementById("resultExercise6");
    
    let DescuentoAplicable = 0;
    if (destino != null) {
        //utilizando un switch seleccionamos el descuento aplicable
        switch(destino.value) {
            case "La costa del Sol":
                DescuentoAplicable = "5%";
                break;
            case "Panchimalco":
                DescuentoAplicable = "10%";
                break;
            case "Puerto El Triunfo":
                DescuentoAplicable = "15%";
                break;
            default:
                DescuentoAplicable = "";
        }
        
        if (resultExercise6 != null) {resultExercise6.innerHTML = '';} //reiniciando el contenido.
        const result = document.createElement('div');
        result.innerHTML = `
            <p>El Descuento aplicable al destino seleccionado es de ${DescuentoAplicable}</p>
        `; //imprimimos el resultado en HTML
        resultExercise6.appendChild(result);
    }
}

function Ejercicio7() {
    const valores = document.getElementById("valores");
    const resultExercise7 = document.getElementById("resultExercise7");

    if (resultExercise7 != null) {resultExercise7.innerHTML = '';} //reiniciando el contenido.

    const arrayNumbers = valores.value.split(",");
    let countNegativos = 0;
    let countPositivos = 0;
    let countMultiplosQuince = 0;
    let countPares = 0;

    for (const valor of arrayNumbers) {

        const negativo = (valor < 0)?true:false;
        const positivo = (valor > 0)?true:false;
        const multiploQuince = ((valor % 15)==0)?true:false;
        const esPar = ((valor%2)==0)?true:false;
        
        if (negativo) {countNegativos++}
        if (positivo) {countPositivos++}
        if (multiploQuince) {countMultiplosQuince++}
        if (esPar) {countPares++}
    }
    
    const result = document.createElement('div');
        result.innerHTML = `
            <p>Negativos: ${countNegativos}</p>
            <p>Positivos: ${countPositivos}</p>
            <p>Multiplos de Quince: ${countMultiplosQuince}</p>
            <p>Pares: ${countPares}</p>
        `;
        resultExercise7.appendChild(result);
}

function Ejercicio8() {
    
    const numeroMultiplicar = document.getElementById("numeroMultiplicar");
    const resultExercise8 = document.getElementById("resultExercise8");
    
    if (resultExercise8 != null) {resultExercise8.innerHTML = '';} //reiniciando el contenido.

    //utilizando for para multiplicar el numero ingresado por 10 interacciones.
    for(let i = 0; i < 10; i++) {
        const indexNum = i+1; //Aumentamos en 1 ya que iniciamos en 0.
        const result = document.createElement('div');
        result.innerHTML = `
            <p>${indexNum} x ${numeroMultiplicar.value} = ${(indexNum)*numeroMultiplicar.value}</p>
        `;
        resultExercise8.appendChild(result);
    }

}

function Ejercicio9() {
    
    const tempCelsius = document.getElementById("tempCelsius");
    const resultExercise9 = document.getElementById("resultExercise9");
    
    if (resultExercise9 != null) {resultExercise9.innerHTML = '';} //reiniciando el contenido.

    console.log(tempCelsius.value);
    //pasando le temperatura Celsius a Fahrenheit
    const tempFahrenheit = (tempCelsius.value*1.8) + 32;

    console.log(tempFahrenheit);

    let Phrase = "";
    //devolviendo la frase de acuerdo de tabla.
    switch(true) {
        case ((tempFahrenheit >= 14) && (tempFahrenheit < 32)):
            Phrase = "Temperatura Baja";
            break;
        case ((tempFahrenheit >= 32) && (tempFahrenheit < 68)):
            Phrase = "Temperatura Adecuada";
            break;
        case ((tempFahrenheit >= 68) && (tempFahrenheit < 96)):
            Phrase = "Temperatura Alta";
            break;
        default:
            Phrase = "Temperatura desconocida";
            break;
    }
    

    const result = document.createElement('div');
    result.innerHTML = `
        <p>La Temperatura Fahrenheit es ${tempFahrenheit},  ${Phrase}</p>
    `;
    resultExercise9.appendChild(result);


}


function generateInputs(containerInput, N) {
    // Get the container where inputs will be appended
    const container = document.getElementById(containerInput);

    // reiniciar.
    container.innerHTML = '';

    // generar los N inputs indicados
    for (let i = 0; i < N; i++) {

        const inputLabel = document.createElement('LABEL');
        var t = document.createTextNode("Alumno # "+(i+1)+": ");
        inputLabel.appendChild(t);

        const input = document.createElement('input');
        // configuracion general del input
        input.type = 'text';
        input.placeholder = `Alumno ${i + 1}`;

        // agregando a container
        container.appendChild(inputLabel);
        container.appendChild(input);
        

        container.appendChild(document.createElement('br'));
    }
}


function Ejercicio10() {
    

    // Leer los inputs generados.
    const container = document.getElementById('inputContainerMorning');
    const inputs = container.getElementsByTagName('input');

    let sumaEdades = 0;

    // utilizar un for para navegar entre los inputs encontrados
    for (let i = 0; i < inputs.length; i++) {
        sumaEdades = sumaEdades + Number(inputs[i].value);
    }

    //console.log(sumaEdades );

    const promedioEdadesMorning = sumaEdades / inputs.length;
    
    const resultadoContainerMorning = document.getElementById('resultadoContainerMorning');
    resultadoContainerMorning.innerHTML = '';
    const promedioMorning = document.createElement('div');
    promedioMorning.innerHTML = `
        <p>El Promedio de Edad turno de la mañana es: ${promedioEdadesMorning.toFixed(2)}</p>
    `;
    resultadoContainerMorning.appendChild(promedioMorning);


    // Leer los inputs generados.
    const containerAftNoon = document.getElementById('inputContainerAfternoon');
    const inputsAftNoon = containerAftNoon.getElementsByTagName('input');

    sumaEdades = 0;
    promedioEdades = 0;

    // utilizar un for para navegar entre los inputs encontrados
    for (let i = 0; i < inputsAftNoon.length; i++) {
        sumaEdades = sumaEdades + Number(inputsAftNoon[i].value);
    }

    //console.log(sumaEdades );

    const promedioEdadesAftNoon = sumaEdades / inputsAftNoon.length;
    
    const resultadoContainerAftNoon = document.getElementById('resultadoContainerAfternoon');
    resultadoContainerAftNoon.innerHTML = '';
    const promedioAftNoon = document.createElement('div');
    promedioAftNoon.innerHTML = `
        <p>El Promedio de Edad turno de la Tardes es: ${promedioEdadesAftNoon.toFixed(2)}</p>
    `;
    resultadoContainerAftNoon.appendChild(promedioAftNoon);



    // Leer los inputs generados.
    const containerNigth= document.getElementById('inputContainerNigth');
    const inputsNigth = containerNigth.getElementsByTagName('input');

    sumaEdades = 0;
    promedioEdades = 0;

    // utilizar un for para navegar entre los inputs encontrados
    for (let i = 0; i < inputsNigth.length; i++) {
        sumaEdades = sumaEdades + Number(inputsNigth[i].value);
    }

    //console.log(sumaEdades );

    const promedioEdadesNigth = sumaEdades / inputsNigth.length;
    
    const resultadoContainerNigth = document.getElementById('resultadoContainerNigth');
    resultadoContainerNigth.innerHTML = '';
    const promedioNigth = document.createElement('div');
    promedioNigth.innerHTML = `
        <p>El Promedio de Edad turno de la Noche es: ${promedioEdadesNigth.toFixed(2)}</p>
    `;
    resultadoContainerNigth.appendChild(promedioNigth);
    //console.log(values); // 

    const ContainerPromedioMayor = document.getElementById("PromedioMayor");
    ContainerPromedioMayor.innerHTML = '';
    const resultadoPromedio = document.createElement('div');

    let promedioMayor = promedioEdadesMorning;
    let turno = "Mañana";

    if (promedioEdadesAftNoon > promedioMayor) {
        promedioMayor = promedioEdadesAftNoon;
        turno = "Tarde";
    }
    if (promedioEdadesNigth > promedioMayor) {
        promedioMayor = promedioEdadesNigth;
        turno = "Noche";
    }

    resultadoPromedio.innerHTML = `
        <p>El turno de la ${turno} tiene el promedio Mayor: ${promedioMayor.toFixed(2)}</p>
    `;
    ContainerPromedioMayor.appendChild(resultadoPromedio);

    
    // if (resultExercise9 != null) {resultExercise9.innerHTML = '';} //reiniciando el contenido.

    // console.log(tempCelsius.value);
    // //pasando le temperatura Celsius a Fahrenheit
    // const tempFahrenheit = (tempCelsius.value*1.8) + 32;

    
    // const result = document.createElement('div');
    // result.innerHTML = `
    //     <p>La Temperatura Fahrenheit es ${tempFahrenheit},  ${Phrase}</p>
    // `;
    // resultExercise9.appendChild(result);


}




