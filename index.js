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

task1.logState(); //clean cat litter HAS NOT been completed
task1.markCompleted(); //mark as complete
task1.logState(); //clean cat litter HAS been completed

// console.log(tasks);






//OLD CODE

// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
/// Allow each task to have a description
// A new task will be created as incomplete

// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// }


// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed