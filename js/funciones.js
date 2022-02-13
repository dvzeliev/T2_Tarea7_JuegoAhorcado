adivinar.addEventListener("blur", añadirGuiones, true);
letra.addEventListener("keyup", buscarLetra, false);

var guiones;

function añadirGuiones() {
    // Igualamos la variable guiones a la palabra que hemos escrito en el input de tipo password
    guiones = adivinar.value;

    // Añade guiones entre los caracteres de la palabra
    guiones = guiones.replace(/[a-z]/gi, "-");

    aciertos.value = guiones;

}


function buscarLetra() {
    if (letra.value == "") {
        return
    }
    ;
    var letraBuscar = letra.value.toUpperCase();

    var adivinarA = (adivinar.value).toUpperCase();
    // alert(adivinarA)
    var posicion = adivinarA.indexOf(letraBuscar);
    
    var es_acierto = false;
    while (posicion > -1) {
        console.log("0:"+guiones)
        console.log("1:" +guiones.substring(0, posicion));
        console.log("2:" +letraBuscar);
        console.log("3:"+ guiones.substr(posicion+ 1,guiones.length));
       
        guiones = guiones.substring(0, posicion)
         + letraBuscar 
         + guiones.substr(posicion+ 1,guiones.length);
         
         console.log("4:"+guiones)
        aciertos.value = guiones;

        posicion = adivinarA.indexOf(letraBuscar, posicion + 1);
        es_acierto = true;
    }
    if (!es_acierto) {
        fallos.innerHTML = fallos.innerHTML +"<b>"+ letraBuscar+"</b>";
    }
    letra.value = "";
}