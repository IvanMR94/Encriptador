/* Boton para Encriptar el mensaje */

const InputTexto = document.querySelector(".input_text");
const Muestra = document.querySelector(".input_text_Muestra");


function Boton_Encriptar(){
    const Mensaje_Encriptado = Encriptar(InputTexto.value);
    Muestra.value = Mensaje_Encriptado;
}

const pattern = new RegExp('^[a-z ]+$');

function Encriptar(StEncriptador){

    let LRemplazo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]
    StEncriptador = StEncriptador.toLowerCase();

    if(StEncriptador.length==0){
        alert("¡No se encontró el mensaje para encriptar!");
        mostrar("muestreo");
        return StEncriptador=""
    
    }else if(!pattern.test(StEncriptador)){
        alert("Solo se aceptan letras minusculas, no caracteres especiales");
        return StEncriptador=""
    }else{
        for (let n=0; n<LRemplazo.length; n++){
            if(StEncriptador.includes(LRemplazo[n][0])){
                StEncriptador = StEncriptador.replaceAll(LRemplazo[n][0], LRemplazo[n][1]) 
            }
        }
        return StEncriptador;
       

    }
}

/* Boton para Desencriptar el mensaje */

function Boton_Dese_Encriptar(){
    const Mensaje_Encriptado = Dese_Encriptar(InputTexto.value);
    Muestra.value = Mensaje_Encriptado;
}

function Dese_Encriptar(StEncriptador){

    let LRemplazo = [["e","enter"],["i","imes"],["o","ober"],["a","ai"],["u","ufat"]]
    StEncriptador = StEncriptador.toLowerCase();

    if(StEncriptador.length==0){
        alert("¡No se encontró el mensaje para desencriptar!");
        mostrar("muestreo");


        return StEncriptador=""
    }else if(!pattern.test(StEncriptador)){
        alert("Solo se aceptan letras minusculas, no caracteres especiales");
        return StEncriptador=""
    }else{
        for (let n=0; n<LRemplazo.length; n++){
            if(StEncriptador.includes(LRemplazo[n][1])){
                StEncriptador = StEncriptador.replaceAll(LRemplazo[n][1], LRemplazo[n][0])
            }
        }
        
        return StEncriptador;

    }

}
