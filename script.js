function addTask() {
    let input = document.getElementById("taskInput");
    let list = document.getElementById("list");

    let li = document.createElement("li");
    li.textContent = input.value;

    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    list.appendChild(li);

    input.value = "";
}
