

// Класс для конструирования объекта автомобиля
class Car {
    private model: string;
    private color: string;
    private year: number;

    constructor(model: string, color: string, year: number) {
        this.model = model;
        this.color = color;
        this.year = year;
    }

    // Геттеры для получения свойств автомобиля
    getModel(): string {
        return this.model;
    }

    getColor(): string {
        return this.color;
    }

    getYear(): number {
        return this.year;
    }
}

// Класс для пошагового конструирования автомобиля
class CarBuilder {
    private model: string;
    private color: string;
    private year: number;

    setModel(model: string): CarBuilder {
        this.model = model;
        return this;
    }

    setColor(color: string): CarBuilder {
        this.color = color;
        return this;
    }

    setYear(year: number): CarBuilder {
        this.year = year;
        return this;
    }

    build(): Car {
        return new Car(this.model, this.color, this.year);
    }
}

// Тестирование
const car = new CarBuilder()
    .setModel("Toyota")
    .setColor("Red")
    .setYear(2022)
    .build();

console.log(car.getModel()); // Toyota
console.log(car.getColor()); // Red
console.log(car.getYear());  // 2022
