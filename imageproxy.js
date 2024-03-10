// Пример реализации паттерна Прокси
// Конкретный класс, представляющий реальный объект
var RealImage = /** @class */ (function () {
    function RealImage(filename) {
        this.filename = filename;
        this.loadImage();
    }
    RealImage.prototype.display = function () {
        console.log("Displaying image: ".concat(this.filename));
    };
    RealImage.prototype.loadImage = function () {
        console.log("Loading image: ".concat(this.filename));
    };
    return RealImage;
}());
// Прокси для управления доступом к объекту RealImage
var ProxyImage = /** @class */ (function () {
    function ProxyImage(filename) {
        this.realImage = null;
        this.filename = filename;
    }
    ProxyImage.prototype.display = function () {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    };
    return ProxyImage;
}());
// Тестирование
// Использование паттерна Прокси
var image1 = new ProxyImage("cat.jpg");
image1.display(); // Загрузка и отображение изображения
// Изображение не загружается повторно
var image2 = new ProxyImage("dog.jpg");
image2.display(); // Загрузка и отображение изображения
