function validacion(){
    nombre = document.getElementById("nombre").value;
    apelidos =document.getElementById("apellidos").value;
    genero = document.getElementById("genero").value;
    direccion = document.getElementById("direccion").value;
    pais = document.getElementById("pais").value;
    estado = document.getElementById("estado").value;

    val = 0;

    if(nombre == ""){
        val++;
    }

    if(apellidos == ""){
        val++;
    }

    if(genero == ""){
        val++;
    }

    if(direccion == ""){
        val++;
    }

    if(pais == ""){
        val++;
    }

    if(estado == ""){
        val++;
    }

    if(val == 0){
        document.getElementById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
    }
} 

document.getElementById("nombre").addEventListener("keyup", validacion);
document.getElementById("apellidos").addEventListener("keyup", validacion);
document.getElementById("genero").addEventListener("change", validacion);
document.getElementById("direccion").addEventListener("keyup", validacion);
document.getElementById("pais").addEventListener("change", validacion);
document.getElementById("estado").addEventListener("change", validacion);
document.getElementById("enviar").addEventListener("click", () => {
    alert("Formulario Completado");
});