// Пример реализации паттерна Медиатор
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Базовый класс для коллег
var Colleague = /** @class */ (function () {
    function Colleague(mediator) {
        this.mediator = mediator;
    }
    return Colleague;
}());
// Конкретная реализация коллеги
var ConcreteColleague = /** @class */ (function (_super) {
    __extends(ConcreteColleague, _super);
    function ConcreteColleague(mediator) {
        return _super.call(this, mediator) || this;
    }
    ConcreteColleague.prototype.send = function (message) {
        console.log("Sending message: ".concat(message));
        this.mediator.sendMessage(message, this);
    };
    ConcreteColleague.prototype.receive = function (message) {
        console.log("Received message: ".concat(message));
    };
    return ConcreteColleague;
}(Colleague));
// Конкретный класс посредника
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator() {
        this.colleagues = [];
    }
    ConcreteMediator.prototype.addColleague = function (colleague) {
        this.colleagues.push(colleague);
    };
    ConcreteMediator.prototype.sendMessage = function (message, sender) {
        this.colleagues.forEach(function (colleague) {
            if (colleague !== sender) {
                colleague.receive(message);
            }
        });
    };
    return ConcreteMediator;
}());
// Использование паттерна Медиатор
var mediator = new ConcreteMediator();
var colleague1 = new ConcreteColleague(mediator);
var colleague2 = new ConcreteColleague(mediator);
mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
colleague1.send("Hello from colleague 1");
colleague2.send("Hello from colleague 2");
