//Calculo media nota
let average = function(sum,value){
    let sum = values.reduce(function(sum,value){
        return sum + value;
    },0);

let avg = sum / values.length;
return avg;
}

function differences(values) {

    let avg = average(values);
    
    let diffs = values.map(function(values) {
        let diffs = values - avg;
        return diffs;
});
return diffs;

}

function square(sum,value){

    let sqrs = values.map(function(value){
        let sqr = value * value;
        return sqr;
    });
    return sqrs;

}

function standarDeviation(values) {

    let diffs = differences(values);
    let squarediffs = square(diffs);
    let avgSquareDiffs = average(squarediffs);

}

