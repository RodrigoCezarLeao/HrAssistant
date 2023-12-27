function areTwoNumbersAreQuiteSimilar(n1, n2){
    var marginError = 0.01;
    var result = Math.abs(n1 - n2);

    if (result > marginError)
        return false;

    return true;
}


function compareAndLog(expected, result, message=""){
    let flag = areTwoNumbersAreQuiteSimilar(expected, result);
    console.log(`${message}.\nExpected = '${expected}' == Calculated '${result}'? ${flag ? "✅" : "❌" }`);
    return flag;
}


function TEST_calculateINSS(){
    let grossSalary1 = 4000;
    let grossSalary2 = 5380;
    let grossSalary3 = 5670;
    
    let inssSalary1 = ArraySum(calculateINSS(grossSalary1, inss2022));
    let inssSalary2 = ArraySum(calculateINSS(grossSalary2, inss2022));
    let inssSalary3 = ArraySum(calculateINSS(grossSalary3, inss2023));

    compareAndLog(396.17, inssSalary1, `INSS de salário bruto = R$${grossSalary1.toFixed(2)}`);
    compareAndLog(589.37, inssSalary2, `INSS de salário bruto = R$${grossSalary2.toFixed(2)}`);
    compareAndLog(619.72, inssSalary3, `INSS de salário bruto = R$${grossSalary3.toFixed(2)}`);
}

function TEST_calculateIRRF(){
    let grossSalary1 = 4000;
    let grossSalary2 = 5380;
    let grossSalary3 = 5670;
    
    let irrfSalary1 = ArraySum(calculateIRRF(grossSalary1, irrf_04_15_to_04_23, inss2022));
    let irrfSalary2 = ArraySum(calculateIRRF(grossSalary2, irrf_04_15_to_04_23, inss2022));
    let irrfSalary3 = ArraySum(calculateIRRF(grossSalary3, irrf2023, inss2023));

    compareAndLog(185.77, irrfSalary1, `IRRF de salário bruto = R$${grossSalary1.toFixed(2)}`);
    compareAndLog(448.06, irrfSalary2, `IRRF de salário bruto = R$${grossSalary2.toFixed(2)}`);
    compareAndLog(503.87, irrfSalary3, `IRRF de salário bruto = R$${grossSalary3.toFixed(2)}`);
}

function TEST_calculateFGTS(){
    let grossSalary1 = 4000;
    let grossSalary2 = 5380;
    let grossSalary3 = 5670;
    
    let fgtsSalary1 = calculateFGTS(grossSalary1);
    let fgtsSalary2 = calculateFGTS(grossSalary2);
    let fgtsSalary3 = calculateFGTS(grossSalary3);

    compareAndLog(320, fgtsSalary1, `FGTS de salário bruto = R$${grossSalary1.toFixed(2)}`);
    compareAndLog(430.4, fgtsSalary2, `FGTS de salário bruto = R$${grossSalary2.toFixed(2)}`);
    compareAndLog(453.6, fgtsSalary3, `FGTS de salário bruto = R$${grossSalary3.toFixed(2)}`);
}

TEST_calculateINSS();
TEST_calculateIRRF();
TEST_calculateFGTS();