// This is a JavaScript file
/*$(document).on('click','#btn7',function(){
    var valor;
    valor = $("#display").val();
    valor += "7";
   $("#display").val(valor);     
});*/

var op;
var valor1;
var valor2;

$(document).on('click','.botao',function(){
    var valor;
    valor = $("#display").val();
    valor += $(this).val();
    $("#display").val(valor);
});

$(document).on('click','#btnSomar', function(){
    valor1 = $("#display").val();
    op="somar";
    $("#display").val("");
});

$(document).on('click','#btnSubtrair', function(){
    valor1 = $("#display").val();
    op="subtrair";
    $("#display").val("");
});

$(document).on('click','#btnMultiplicar', function(){
    valor1 = $("#display").val();
    op="mult";
    $("#display").val("");
});

$(document).on('click','#btnDividir', function(){
    valor1 = $("#display").val();
    op="dividir";
    $("#display").val("");
});







