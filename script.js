let imagenes = ["Regiones.jpg", "fauna.jpg", "Selva.jpg", "Seca.jpg", "Desierto.jpg", ];

let correcta = [0,1,2,0,0];

let opciones = [];

opciones.push (["Seis", "Diez", "Cinco"]);
opciones.push (["tecnología, flora y clima", "clima, flora y fauna", "habitantes, flora y fauna"]);
opciones.push (["CDMX, Chiapas y Guadalajara", "Guanajuato, Veracruz y Yucatán", "Yucatán, Campeche y Chiapas"]);
opciones.push (["Guatemala", "Nuevo León", "Yucatán"]);
opciones.push (["Cactus", "Palmeras", "Plantas carnivoras"]);

let posAct = 0;
let correctas = 0;

function comenzarJuego(){
    posAct = 0;
    correctas = 0;
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("PantallaJuego").style.display = "block";
    cargarImg();
}

function cargarImg(){
    if(imagenes.length <= posAct){
        terminarJuego();
    }
    else{
        document.getElementById("imgReg").src = "img/" + imagenes[posAct];
        document.getElementById("r0").innerHTML = opciones[posAct][0];
        document.getElementById("r1").innerHTML = opciones[posAct][1];
        document.getElementById("r2").innerHTML = opciones[posAct][2];
    }
}

function comprobarRespuesta(opElegida){
if (opElegida == correcta [posAct]){
    document.getElementById("r" + opElegida).className = "respuestacorrecta";
    document.getElementById("l" + opElegida).className = "letracorrecta";
    Acertadas ++;
}
else{
    document.getElementById("r" + opElegida).className = "respuestaIncorrecta";
    document.getElementById("l" + opElegida).className = "letraIncorrecta";

    document.getElementById("r" + correcta[posAct]).className = "respuestacorrecta";
    document.getElementById("l" + posAct).className = "letracorrecta";
}
}