function calcula(){

    var principal = document.getElementById("numero").value
    var exponente = document.getElementById("exponente").value,divisor = document.getElementById("divisor").value
    


    if(isNaN(principal) && principal == "")return alert("ingrese un numero porfavor")
    var potencia = document.getElementById("potencia").checked,division = document.getElementById("division").checked,divisible = document.getElementById("divisible").checked
    var nota = 0
    
    
    /**
     * alternativa por si no funciona lo otro
     * nota= principal^exponente-1
     * nota= principal/divi
     */
    
    
    
    if(potencia == true){
        var operacion = "potencia"
        nota = Math.pow(principal, exponente)
    }else if(division == true){
        var operacion = "division"
        nota = principal / divisor
    }else if(divisible == true){
        var operacion = "divisible"
        nota = principal % divisor == 0
    }   


    //tabla
    var tabla = document.getElementById("tabla")
    tabla.hidden = false
    //filas de la tabla
    var tr = document.createElement("tr")
    tabla.appendChild(tr)
    //columnas de la tabla
    tr.appendChild(document.createElement("td"))
    tr.children[0].innerHTML = nota
    
    
    
    tr.appendChild(document.createElement("td"))
    tr.children[1].innerHTML = operacion
    
}

function borra(){
    var numero = parseInt(prompt("ingrese un numero para eliminar de la tabla"))
    var tabla = document.getElementById("tabla")
    if(numero <= tabla.children.length){
        tabla.removeChild(tabla.children[numero])
    }else{
        alert("ingreso algo mal")
    }
}