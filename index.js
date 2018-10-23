// USING METHODS INSTEAD

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    
    //log task function
    logState: function () {
      console.log(`${this.title} has${this.complete ? ' ' : ' not '}been completed`);
    },
    
    //mark a task as complete function
    markCompleted: function () {
      this.complete = true;
    }
  };
  return task;
}


/// NEW DRIVER CODE BELOW

const task1 = newTask('Clean the cat litter', 'Take all the poops out of the litter box');
const task2 = newTask('Do the laundry', 'sad face emoji');
const tasks = [task1, task2];


console.log(task1.title)
task1.markCompleted();
task1.logState();





