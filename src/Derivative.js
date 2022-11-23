function ruleOfThumb(termo){
    if (!termo.includes("x")){
        return "0";
    }
    else if (!termo.includes("^")){
        return termo.slice(0, -1); 
    }
    else {
        let sinal = "";
        if (termo.includes("+") || termo.includes("-")){
            sinal = termo.slice(0,1);
            termo = termo.slice(1);
        }
        let numeros = termo.split("x");
        let base = 0;
        let expoente = parseInt(numeros[1].slice(1));

        if (numeros[0] === ""){
            base = 1;
        }
        else{
            base = parseInt(numeros[0]);
        }

        base *= expoente;
        expoente -= 1;

        let resultado = base.toString() + "x";
        if (expoente > 1){
            resultado += "^" + expoente.toString();
        }
    
        return sinal + resultado;
    }
}

function derivar(expression){
    expression = expression.replaceAll("+0", "");
    expression = expression.replaceAll("-0", "");
    
    let termos = expression.split(" ");

    if (termos.length === 1){
        return ruleOfThumb(termos[0])
    }
    else{
        let derivada = "";
        for (let j = 0; j < termos.length - 1; j++){
            derivada += ruleOfThumb(termos[j])
        }
        return derivada;
    }
}

export default derivar;