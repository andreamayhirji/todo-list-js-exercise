// We are using an object to keep all the task data together, which keeps the code more organized.

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false
  };
  return task;
}

//log task function
function logTaskState(task) {
  console.log(`${task.title} has${task.complete ? ' ' : ' not '}been completed`);
}

//mark a task as complete function
function completeTask(task) {
  task.complete = true;
}

/// NEW DRIVER CODE BELOW

const task1 = newTask('Clean the cat litter', 'Take all the poops out of the litter box');
const task2 = newTask('Do the laundry', 'sad face emoji');
const tasks = [task1, task2];

logTaskState(task1);
completeTask(task1); 
logTaskState(task1); 

// console.log(tasks);

// each function now accepts a task object instead of an array index.
// passing the task object into functi on so they're not dependent on variables outside of their own scope.







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
