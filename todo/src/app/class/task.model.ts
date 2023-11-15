export class Task {
  private static index: number = 0;
  public id: number;
  public created: Date;

  constructor(
    public title: string,
    public complete: boolean,
    public description: string
  ) {
    this.id = Task.index++;
    this.created = new Date();
  }
}
