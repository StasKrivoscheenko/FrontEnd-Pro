function Hamburger(size) {
    this._size = size;
    this._toppings = [];
    this._price = size.price;
    this._callories = size.callories;
}

Hamburger.SMALL_SIZE = { label: 'Small size', price: 50, callories: 20 };
Hamburger.MEDIUM_SIZE = { label: 'Medium size', price: 75, callories: 30 };
Hamburger.BIG_SIZE = { label: 'Big size', price: 100, callories: 40 };

Hamburger.TOPPING_MAYO = { label: 'Mayo', price: 20, callories: 5 };
Hamburger.TOPPING_POTATO = { label: 'Potato', price: 15, callories: 10 };
Hamburger.TOPPING_CHEESE = { label: 'Cheese', price: 10, callories: 20 };
Hamburger.TOPPING_SALAD = { label: 'SALAD', price: 20, callories: 5 };
Hamburger.TOPPING_SEASONING = { label: 'Seasoning', price: 15, callories: 0 };

Hamburger.prototype.addTopping = function (topping) {
    this._toppings.push(topping);

    this._calculate();
    return this;
};

Hamburger.prototype._calculate = function () {
    this._price = this._toppings.reduce(
        (acc, { price }) => acc + price,
        this._size.price
    );

    this._callories = this._toppings.reduce(
        (acc, { callories }) => acc + callories,
        this._size.callories
    );
};

Hamburger.prototype.getPrice = function () {
    return this._price;
};

Hamburger.prototype.getCallories = function () {
    return this._callories;
};

const hum = new Hamburger(Hamburger.SMALL_SIZE);

hum.addTopping(Hamburger.TOPPING_MAYO)
    .addTopping(Hamburger.TOPPING_CHEESE)
    .addTopping(Hamburger.TOPPING_KETCHUP);