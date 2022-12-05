export class Job {
    private _role: string;
    private _salary: number;

    constructor(role: string, salary: number) {
        this._role = role;
        this._salary = salary;
    }

    get role(): string {
        return this._role;
    }

    get salary(): number {
        return this._salary;
    }

    public work(personName: string): void {
        console.log(`${personName} сейчас работает, как ${this.role}`);
    }
}

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