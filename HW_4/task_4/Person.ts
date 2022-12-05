import { Job } from "./Job"

export class Person{
    private _name: string;
    private _job: Job;

    constructor(name: string){
        this._name = name;
    }
    
    set job(job: Job){
        this._job = job;
    }

    public getSalary(): number {
        return this._job.salary;
    }

    public work(): void{
        console.log(`${this._name} принудительно выполнил работу по своей профессии ${this._job.role}`);
    }
}