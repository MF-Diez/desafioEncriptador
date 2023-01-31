var botonEncriptar = document.querySelector(".boton-encriptar");
var botonDesencriptar = document.querySelector(".boton-desencriptar")
var botonCopiar = document.querySelector(".boton-copiar")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;


function encriptar(){
    var texto = document.querySelector (".cuadro-mensaje");
    var txtEncriptado = texto.value.replace(/e/igm,"enter").replace(/o/igm,"ober").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/u/igm,"ufat");
    
    document.querySelector(".cuadro-respuesta").innerHTML = txtEncriptado;
    document.querySelector(".boton-copiar").style.display = "show";
    document.querySelector(".boton-copiar").style.display = "inherit";
    document.querySelector(".cuadro-respuesta").style.backgroundImage = "none";

}

function desencriptar(){
    var texto = document.querySelector (".cuadro-mensaje");
    var txtDesencriptado = texto.value.replace(/enter/igm,"e").replace(/ober/igm,"o").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ufat/igm,"u");
    
    document.querySelector(".cuadro-respuesta").innerHTML = txtDesencriptado;
    document.querySelector(".boton-copiar").style.display = "show";
    document.querySelector(".boton-copiar").style.display = "inherit";
    document.querySelector(".cuadro-respuesta").style.backgroundImage = "none";

}

function copiar (){
  let textoRespuesta = document.querySelector(".cuadro-respuesta");
  let boton =  document.querySelector(".boton-copiar");

  navigator.clipboard.writeText(textoRespuesta.textContent);
  
}

