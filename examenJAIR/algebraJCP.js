function calcular(){

    var numero = document.getElementById("numero").value
    var exponente = document.getElementById("exponente").value
    var divisor = document.getElementById("divisor").value

    if(isNaN(numero)){
        return alert("ingrese un numero porfavor")
    }
    var potencia = document.getElementById("potencia").checked
    var division = document.getElementById("division").checked
    var divisible = document.getElementById("divisible").checked
    var resultado = 0
    if(potencia == true){
        var operacion = "potencia"
        Math.pow(numero, exponente)
    }else if(division == true){
        var operacion = "division"
        resultado = numero / divisor
    }else if(divisible == true){
        var operacion = "divisible"
        resultado = numero % divisor == 0
    }   

    var tabla = document.getElementById("tabla")
    tabla.hidden = false
    var tr = document.createElement("tr")
    tabla.appendChild(tr)
    tr.appendChild(document.createElement("td"))
    tr.children[0].innerHTML = resultado
    tr.appendChild(document.createElement("td"))
    tr.children[1].innerHTML = operacion
    
}

function borrar(){
    var pedir = parseInt(prompt("ingrese un numero para eliminar de la tabla"))
    var tabla = document.getElementById("tabla")
    if(pedir >= 1 && pedir <= tabla.children.length){
        tabla.removeChild(tabla.children[pedir])
    }else{
        alert("A ingresado una posicion incorrecta")
    }
}