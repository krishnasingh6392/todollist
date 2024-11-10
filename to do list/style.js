let displayscreen = document.getElementById("display-screen");
let listcontainer = document.getElementById("list-container");
function addtask() {
    if (displayscreen.value === '') {
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = displayscreen.value;
        listcontainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        span.style.color = 'black';
        span.style.cursor = 'pointer';
        li.appendChild(span);
    }
    displayscreen.value = "";
    saveData();
}
listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},
    false);
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showtask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}
showtask();



