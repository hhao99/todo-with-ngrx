import { nanoid } from 'nanoid'
export class Todo {
    id: string = nanoid()
    task: string = '';
    done: boolean = false;
    constructor(task: string) {
        this.task = task
    }
}
