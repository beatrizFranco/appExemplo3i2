// This is a JavaScript file
/*$(document).on('click','#btn7',function(){
    var valor;
    valor = $("#display").val();
    valor += "7";
   $("#display").val(valor);     
});*/
//variaveis 
var op;
var valor1;


//inserindo valor no display
$(document).on('click','.botao',function(){
    var valor;
    valor = $("#display").val();
    valor += $(this).val();
    $("#display").val(valor);
});

//ações dos calculos
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
//ação do botão igual
$(document).on('click','#btnIgual',function(){
    var valor2;
    var result;
    valor2 = $("#display").val();
    if(op == "somar"){
      result = parseFloat(valor1) + parseFloat(valor2);
    }
    if(op == "subtrair"){
      result = parseFloat(valor1) - parseFloat(valor2);
    }
    if(op == "mult"){
      result = parseFloat(valor1) * parseFloat(valor2);
    }
    if(op == "dividir"){
      result = parseFloat(valor1) / parseFloat(valor2);
    }
    $("#display").val(result);
});
//ação do botão limpar
$(document).on('click','#limpar',function(){
    $("#display").val("");
    op = "";
    valor1 = "";
});






