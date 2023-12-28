

function calculateFGTS(grossSalary){
    let converted = isSalaryValid(grossSalary);
    if (!converted)
        return 0;
    
    return converted * 0.08;
}


function calculateRangeTax(grossSalary, taxRange){
    let converted = isSalaryValid(grossSalary);
    if (!converted)
        return 0;

    let continueLoop = true;
    for(let i = 0; i < taxRange.length; i++){

        // Caso 1 - Calcula a faixa inteira
        if (converted >= taxRange[i].range){
            if (i === 0)
                taxRange[i].result = (taxRange[i].range) * taxRange[i].percent;
            else
                taxRange[i].result = (taxRange[i].range - taxRange[i-1].range) * taxRange[i].percent;
        }

        // Caso 2 - Calcular faixa parcial
        if (converted <= taxRange[i].range){
            taxRange[i].result = (converted - taxRange[i-1].range) * taxRange[i].percent;
            continueLoop = false;
        }

        taxRange[i].result = Number(taxRange[i].result.toFixed(2));

        if (!continueLoop)
            break;
    }

    return taxRange.map(item => item.result);
}



function isSalaryValid(grossSalary){
    let converted = Number(grossSalary);

    if (Number.isNaN((converted)))
        return false;

    return converted;
}


function calculateINSS(grossSalary, taxesList){
    return calculateRangeTax(grossSalary, taxesList);
}

function calculateIRRF(grossSalary, taxesList, inssList){
    let inss = ArraySum(calculateINSS(grossSalary, inssList));
    return calculateRangeTax(grossSalary - inss, taxesList);
}