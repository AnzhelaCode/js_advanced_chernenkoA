/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/
let Train = {
    name: "Saturn",
    speed: 350,
    passenger: 10,
    go: function (){
        console.log(`Поезд ${this.name} везет ${this.passenger} со скоростью ${this.speed}`);
    },
    stop: function (){
        console.log(`Поезд ${this.name} остановился. Скорость ${this.speed}`)
    },
    gatherPassenger:function (item){
        let total = this.passenger += item;
        console.log("Total passenger " + total );
    }
}

Train.go();
Train.stop();
Train.gatherPassenger(2);
