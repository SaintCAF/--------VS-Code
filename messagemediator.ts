// Пример реализации паттерна Медиатор

// Интерфейс для описания функциональности
interface Mediator {
    sendMessage(message: string, sender: Colleague): void;
    addColleague(colleague: Colleague): void;
}

// Базовый класс для коллег
abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    abstract send(message: string): void;
    abstract receive(message: string): void;
}

// Конкретная реализация коллеги
class ConcreteColleague extends Colleague {
    constructor(mediator: Mediator) {
        super(mediator);
    }

    send(message: string): void {
        console.log(`Sending message: ${message}`);
        this.mediator.sendMessage(message, this);
    }

    receive(message: string): void {
        console.log(`Received message: ${message}`);
    }
}

// Конкретный класс посредника
class ConcreteMediator implements Mediator {
    private colleagues: Colleague[] = [];

    addColleague(colleague: Colleague): void {
        this.colleagues.push(colleague);
    }

    sendMessage(message: string, sender: Colleague): void {
        this.colleagues.forEach(colleague => {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        });
    }
}

// Использование паттерна Медиатор
const mediator: Mediator = new ConcreteMediator();

const colleague1: Colleague = new ConcreteColleague(mediator);
const colleague2: Colleague = new ConcreteColleague(mediator);

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);

colleague1.send("Hello from colleague 1");
colleague2.send("Hello from colleague 2");
