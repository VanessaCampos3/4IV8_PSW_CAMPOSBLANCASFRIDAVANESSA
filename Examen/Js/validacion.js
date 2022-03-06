function validar(formulario){

    if(formulario.valordelauto.value.length < 5){
        alert("Escriba por lo menos 5 digitos para el valor del Auto");
        formulario.nombre.focus();
        return false;
    }

    var checkOK = "0123456789";

    var checkStr = formulario.valordelauto.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente Números en el Campo de 'Valor del Auto'");
        formulario.valordelauto.focus();
        return false;
    }


    var checkOK = "0123456789";

// var checkstr = document.formulario.nombre.value;

    var checkStr = formulario.cuotai.value;

    var allValido = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOK.length; j++){
            if(ch == checkOK.charAt(j))
            break;
        }
        if(j == checkOK.length){
            allValido = false;
            break;
        }
    }

    if(!allValido){
        alert("Escriba unicamente numeros en el campo de Cuota Inicial");
        formulario.edad.focus();
        return false;
    }

    /*
    Es necesario que busquen como crear expresiones regulares
    para poder validar la entrada de datos
    */ 

    var txt = formulario.interes.value;

    //crear mi expresion

    var b = 1234567890;

    alert("No Funciona:(");

    return b.test;

}