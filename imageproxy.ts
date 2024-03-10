// Пример реализации паттерна Прокси

// Интерфейс для описания функциональности
interface Image {
    display(): void;
}

// Конкретный класс, представляющий реальный объект
class RealImage implements Image {
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
        this.loadImage();
    }

    display(): void {
        console.log(`Displaying image: ${this.filename}`);
    }

    private loadImage(): void {
        console.log(`Loading image: ${this.filename}`);
    }
}

// Прокси для управления доступом к объекту RealImage
class ProxyImage implements Image {
    private realImage: RealImage | null = null;
    private filename: string;

    constructor(filename: string) {
        this.filename = filename;
    }

    display(): void {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

// Тестирование

// Использование паттерна Прокси
const image1: Image = new ProxyImage("cat.jpg");
image1.display(); // Загрузка и отображение изображения

// Изображение не загружается повторно
const image2: Image = new ProxyImage("dog.jpg");
image2.display(); // Загрузка и отображение изображения