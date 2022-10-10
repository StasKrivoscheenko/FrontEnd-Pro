function Calculator(base) {
    this.result = base;

    this.add = function (val) {
        return (this.result += val);
    };
    this.div = function (val) {
        return (this.result /= val);
    };
    this.mult = function (val) {
        return (this.result *= val);
    };
    this.sub = function (val) {
        return (this.result -= val);
    };
}

const calc = new Calculator(10);
calc.result; 
calc.add(100); 
calc.result; 