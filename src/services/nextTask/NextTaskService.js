class NextTaskService {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  async execute() {
    const tasks = await this.tasksRepository.list();
    const pendingTasks = tasks.filter((t) => t.status === "pending");

    const highTasks = pendingTasks.filter((t) => t.priority === "high");
    const normalTasks = pendingTasks.filter((t) => t.priority === "normal");
    const lowTasks = pendingTasks.filter((t) => t.priority === "low");

    //TODO: fix how to return tasks
    // should be position fixed? [0] == high, [1] == normal, [2] == low

    const returnNextTasks = [];
    if (highTasks[0]) returnNextTasks.push(highTasks[0]);
    if (normalTasks[0]) returnNextTasks.push(normalTasks[0]);
    if (lowTasks[0]) returnNextTasks.push(lowTasks[0]);

    return returnNextTasks;
  }
}

export { NextTaskService };
