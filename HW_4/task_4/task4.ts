import { Job } from "./Job"
import { Person } from "./Person"


let programmer = new Job("Программист", 120000);
let plumber = new Job("Слесарь", 50000);
let turner = new Job("Токарь", 70000);

let sanya = new Person("Александр");
sanya.job = plumber;
sanya.work();
console.log(sanya.getSalary());
sanya.job = turner;
sanya.work();
console.log(sanya.getSalary());

let vasilich = new Person("Петр");
vasilich.job = turner;
vasilich.work();

let ivan = new Person("Иван");
ivan.job = programmer;
ivan.work();
