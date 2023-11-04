var inss2023 = [
    {
        range: 1320,
        percent: 0.075,
        result: 0
    },
    {
        range: 2571.29,
        percent: 0.09,
        result: 0
    },
    {
        range: 3856.94,
        percent: 0.12,
        result: 0
    },
    {
        range: 7507.49,
        percent: 0.14,
        result: 0
    },
];
var inss2022 = [
    {
        range: 1212,
        percent: 0.075,
        result: 0
    },
    {
        range: 2427.35,
        percent: 0.09,
        result: 0
    },
    {
        range: 3641.03,
        percent: 0.12,
        result: 0
    },
    {
        range: 7087.22,
        percent: 0.14,
        result: 0
    },
];


var taxesList = [
    inss2023
]

function calculateFGTS(grossSalary){
    let converted = isSalaryValid(grossSalary);
    if (!converted)
        return 0;
    
    return converted * 0.08;
}


function calculateInss(grossSalary, taxRange){
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