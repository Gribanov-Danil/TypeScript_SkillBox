type AgeObject<T, J> = {
    objectType: T,
    age: number
    data?: J
}

type Name = {
    name: string
}

type City = {
    city: string
}

type Manufacturer = {
    manufacturer: string
}

type Grade = {
    grade: string
}

type Person = AgeObject<Name, undefined>;
type Bridge = AgeObject<City, undefined>;
type Wine = AgeObject<Manufacturer, Grade>


function getOldestPerson(items: Person[]): Person {
    return items.sort((a, b) => b.age - a.age)[0];
}


function getOldestWine(items: Wine[]): Wine {
    return items.sort((a, b) => b.age - a.age)[0];
}


function getOldestBridge(items: Bridge[]): Bridge {
    return items.sort((a, b) => b.age - a.age)[0];
}

let pivo: Wine = {
    objectType: {"pivot"},

}

let winesCollection: Wine[] =[
    {"Франция",}
];

