function options(option){
    let number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + option;
    if(option == "AC"){
        document.getElementById('result').innerHTML = "";
    }else if(option == "DEL"){
        var result = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = result.substring(0, result.length -4); //para não precisar criar outra função, usei o -4
    }else if(option == ""){
        var result = document.getElementById('result').innerHTML;
        if(result){
            document.getElementById('result').innerHTML = eval(result); //A função eval irá analisar a sequência de caracteres de result, e retornará o resultado dessa sequência por ordem de prioridade matemática 
        }
    }
}