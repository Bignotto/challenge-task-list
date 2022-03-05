import * as icons from "../shared/utils/icons.js";
import * as colors from "../shared/utils/colors.js";

import { getTaskAge } from "../shared/utils/getTaskAge.js";
import { NoTasksMessage } from "./components/NoTasksMessage.js";

class TaskListView {
  render(tasks, listAll, totalTasks, pendingTotal) {
    if (totalTasks === 0) {
      // console.log(`\nYou have not created any tasks yet`);
      // console.log(`Try:\n`);
      // console.log(
      //   colors.brightWhite(
      //     `tsk add New task description [-p] <high|normal|low>`
      //   )
      // );
      NoTasksMessage();
      return;
    }

    const ratio = (1 - pendingTotal / totalTasks) * 100;

    console.log(`\ntasks » ${totalTasks - pendingTotal}/${totalTasks}`);

    tasks.forEach((t) => {
      if (t.status === "done" && !listAll) return;

      let age = getTaskAge(t);

      console.log(
        `${colors.gray(`${t.id.toString().padStart(3, " ")}.`)} ${
          t.status === "done"
            ? icons.greenCheckMark()
            : icons.undoneMark(t.priority)
        } ${
          t.status === "done"
            ? colors.gray(t.description)
            : colors.white(t.description)
        } ${colors.gray(age)}`
      );
    });

    console.log(`\n${ratio.toFixed(1)}% done`);
    console.log(
      `${colors.green(
        (totalTasks - pendingTotal).toString()
      )} done, ${colors.red(pendingTotal)} pending`
    );
  }
}

export { TaskListView };
