interface HasAge {
    age: number
}

type Person = HasAge & {
    name: string,
    age: number,

}

type Bridge = HasAge & {
    city: string,
    age: number,


}


type Wine = HasAge & {
    manufacturer: string,
    age: number,
    grade: string,
}

function getOldest<T extends HasAge>(items: T[]): T {
    return items.sort((a, b) => b.age - a.age)[0];
}

let wines: Wine[] = [
    {
    manufacturer: "Кузбасс",
    age: 19,
    grade: "Программная инженерения"
    },
    {
        manufacturer: "Кубань",
        age: 10,
        grade: "Красное"
    },
    {
        manufacturer: "Шато тамань",
        age: 15,
        grade: "Черное"
    },
]

let briges: Bridge[] = [
    {
        age: 20,
        city: "Новокузнецк"
    },
    {
        age: 150,
        city: "Екатеринбург"
    },
    {
        age: 70,
        city: "Шерегеш"
    }
]

let persons: Person[] = [
    {
      age: 20,
      name: "Данил"
    },
    {
        age: 19,
        name: "Иван"
    },
    {
        age: 154894,
        name: "Кто?"
    },
]

console.log(getOldest(wines));
console.log(getOldest(briges));
console.log(getOldest(persons));