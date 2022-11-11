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
    Acertadas = 0;
    document.getElementById("Inicio").style.display = "none";
    document.getElementById("PantallaJuego").style.display = "block";
    cargarImg();
}

function cargarImg(){
    if(imagenes.length <= posAct){
        terminarJuego();
    }
    else{
        limpiarOpciones();
        document.getElementById("imgReg").src = "img/" + imagenes[posAct];
        document.getElementById("r0").innerHTML = opciones[posAct][0];
        document.getElementById("r1").innerHTML = opciones[posAct][1];
        document.getElementById("r2").innerHTML = opciones[posAct][2];
    }
}

function limpiarOpciones(){
    document.getElementById("r0").className = "respuesta";
    document.getElementById("r1").className = "respuesta";
    document.getElementById("r2").className = "respuesta";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
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
posAct++;
setTimeout(cargarImg, 1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("PantallaJuego").style.display = "none";
    document.getElementById("Final").style.display = "block";
    //agreamos los resultados
    document.getElementById("Correctas").innerHTML = Acertadas;
    document.getElementById("Incorrectas").innerHTML = banderas.length - Acertadas;
}
function volverInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("Final").style.display = "none";
    document.getElementById("Inicio").style.display = "block";
    document.getElementById("PantallaJuego").style.display = "none";
}