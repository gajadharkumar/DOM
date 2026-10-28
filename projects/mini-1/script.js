let input = document.querySelector("input");
let addBtn = document.querySelector(".btn-inp");
let taskContainer = document.querySelector(".task");

addBtn.addEventListener("click", function () {

    if (input.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    // Create task div
    let task = document.createElement("div");

    task.innerHTML = `
        <h2>${input.value}</h2>
        <div>
            <button class="task-btn1">Update</button>
            <button class="task-btn2">Delete</button>
        </div>
    `;

    taskContainer.appendChild(task);

    input.value = "";

    // Update button
    let updateBtn = task.querySelector(".task-btn1");

    updateBtn.addEventListener("click", function () {
        let taskText = task.querySelector("h2");

        let newTask = prompt("Enter new task:", taskText.innerText); 

        if (newTask !== null && newTask.trim() !== "") {
            taskText.innerText = newTask;
        }
    });

    let deleteBtn = task.querySelector(".task-btn2");

    deleteBtn.addEventListener("click", function () {
        task.remove();
    });
});