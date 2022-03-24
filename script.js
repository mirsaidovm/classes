// КЛАСС

// const hater = {
//     name: 'Nick',
//     age:30,
//     class: 'Hater'
// }

// class Hater {
//     constructor(name, age, gender){
//         this.name = name
//         this.age = age
//         this.gender = gender
//     }
//     sayName(){
//         alert(`${this.name} ${this.age} ${this.gender}`)
//     }
// }

// let firstHater = new Hater('Rick', 30, 'Male')
// let secondHater = new Hater('Sasha', 25, 'Female')
// let thirdHater = new Hater('Sasha', 25, 'Female')
// let firthHater = new Hater('Sasha', 25, 'Female')
// let fifthHater = new Hater('Sasha', 25, 'Female')
// let sixthHater = new Hater('Sasha', 25, 'Female')
// let seventhHater = new Hater('Sasha', 25, 'Female')
// let eightHater = new Hater('Sasha', 25, 'Female')
// let ninethHater = new Hater('Sasha', 25, 'Female')
// let tenHater = new Hater('Sasha', 25, 'Female')

// console.log(firstHater.sayName());
// console.log(secondHater);

// class Animal {
//     constructor(options) {
//         this.name = options.name
//         this.breed = options.breed
//         this.age = options.age
//         this.gender = options.gender
//     }
// }

// let monkey = new Animal({
//     name: 'Маркус',
//     breed: 'Шимпанзе',
//     age: 10,
//     gender: 'Male'
// })

// console.log(monkey);

// class Cats extends Animal{
//     constructor(options){
//         super(options)
//         this.hasWool = options.hasWool
//     }
//     meow(){
//         alert('Meow!')
//     }
// }

// let cat = new Cats({
//     name: 'Барсик',
//     breed: 'Манчкин',
//     age: 2,
//     gender: 'Мужской',
//     hasWool: true
// })
// console.log(cat);
// console.log(cat.meow());





class Component {
    constructor(selector){
        this.id = document.querySelector(selector.id);
        this.id.style.background = selector.color
        this.id.style.width= this.id.style.height = selector.size + 'px'
    }
    hide(){
        this.id.style.display = 'none'
    }
    show(){
        this.id.style.display = 'block'
    }
}

let box = new Component({
    id: '#box',
    color: 'black',
    size: 500
})