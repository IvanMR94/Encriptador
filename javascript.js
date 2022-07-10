/* Función para validar Minúsculas */

function Restrinccion(event){
    return ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32) || (event.charCode == 164))
}



/* Función del botón copiar */

function copiar() {

    let copyText = document.getElementById("Muestra_E_D").value;

    console.log({copyText});


    navigator.clipboard.writeText(copyText).then(() => {
        
        if (copyText.length == 0) {
            alert("¡No hay mensaje que copiar!");
        } else {
            alert("¡Mensaje copiado!");
        }
    });
}


/* Funciones adyacentes al encriptador */

function mostrar(id){
    document.getElementById(id).style.display = '';
}

function mostrardos(id){
    document.getElementById(id).style.display = 'flex';
}

function ocultar(id){
    document.getElementById(id).style.display = 'none';
}

const Boton_En = document.getElementById('BotonEn');
const Texto = document.getElementById('IngresoTexto');

Boton_En.addEventListener("click", function(){
    if(Texto.value!=""){
        ocultar("muestreo");
        mostrardos("text-resultado");

    }else{
        ocultar("text-resultado");
        mostrar("muestreo");

    }
});

