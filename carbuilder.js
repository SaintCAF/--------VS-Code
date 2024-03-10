// Пример реализации паттерна Строитель
// Класс для конструирования объекта автомобиля
var Car = /** @class */ (function () {
    function Car(model, color, year) {
        this.model = model;
        this.color = color;
        this.year = year;
    }
    // Геттеры для получения свойств автомобиля
    Car.prototype.getModel = function () {
        return this.model;
    };
    Car.prototype.getColor = function () {
        return this.color;
    };
    Car.prototype.getYear = function () {
        return this.year;
    };
    return Car;
}());
// Класс для пошагового конструирования автомобиля
var CarBuilder = /** @class */ (function () {
    function CarBuilder() {
    }
    CarBuilder.prototype.setModel = function (model) {
        this.model = model;
        return this;
    };
    CarBuilder.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    CarBuilder.prototype.setYear = function (year) {
        this.year = year;
        return this;
    };
    CarBuilder.prototype.build = function () {
        return new Car(this.model, this.color, this.year);
    };
    return CarBuilder;
}());
// Использование паттерна Строитель
var car = new CarBuilder()
    .setModel("Toyota")
    .setColor("Red")
    .setYear(2022)
    .build();
console.log(car.getModel()); // Вывод: Toyota
console.log(car.getColor()); // Вывод: Red
console.log(car.getYear()); // Вывод: 2022
