export class Task{
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public priority?: number,
    public due_date?: string,
    public updated_at?: string,
  ){}
}
