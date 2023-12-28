function ArraySum(array, reduce = 0.01){
    return array.reduce((a, b) => a + b, 0) - reduce;
}