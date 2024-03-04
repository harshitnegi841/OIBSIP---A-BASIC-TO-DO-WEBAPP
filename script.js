function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        var taskContainer = document.getElementById("taskList");

        var li = document.createElement("div");
        li.classList.add("task-item");

        var span = document.createElement("span");
        span.textContent = taskText;
        span.classList.add("task-text");
        li.appendChild(span);
        
        var btnGroup = document.createElement("div");
        btnGroup.classList.add("task-actions");

        var completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.classList.add("btn");
        completeBtn.onclick = function() {
            li.classList.toggle("completed");
        };
        btnGroup.appendChild(completeBtn);

        var editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("btn");
        editBtn.onclick = function() {
            var newText = prompt("Edit task:", span.textContent);
            if (newText !== null && newText.trim() !== "") {
                span.textContent = newText.trim();
            }
        };
        btnGroup.appendChild(editBtn);

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("btn");
        deleteBtn.onclick = function() {
            li.remove();
        };
        btnGroup.appendChild(deleteBtn);

        li.appendChild(btnGroup);

        var dateTime = document.createElement("span");
        dateTime.textContent = "Created: " + new Date().toLocaleString();
        dateTime.classList.add("task-date");
        li.appendChild(dateTime);

        taskContainer.appendChild(li);
        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}