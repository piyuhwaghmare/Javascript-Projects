const submit = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

submit.addEventListener("submit", function (e) {
    e.preventDefault();
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        const clear = document.createElement("button");
        clear.classList.add("clear");
        clear.textContent = "X";
        clear.addEventListener("click", function (event) {
            event.stopPropagation();
            li.remove();
            savedata();
        });
        li.appendChild(clear);
        li.addEventListener("click", function () {
            li.classList.toggle("completed");
            savedata();
        });
        list.appendChild(li);
        input.value = "";
    }
});

function savedata() {
    const tasks = [];
    const items = list.querySelectorAll("li");
    items.forEach((item) => {
        const task = {
            text: item.childNodes[0].textContent,
            completed: item.classList.contains("completed"),
        };
        tasks.push(task);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

