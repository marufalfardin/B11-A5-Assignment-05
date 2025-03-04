document.addEventListener("click", function (event) {

    let clickedButton = event.target;
    if (clickedButton.classList.contains("completed-btn")) {

        // title //
        const taskTitle = clickedButton.closest(".task-card").querySelector(".task-title").innerText;

        const currentTime = new Date().toLocaleTimeString();

        // div er structure// 

        const activityLog = document.getElementById("activity-log");
        const newLog = document.createElement("div");
        newLog.classList.add("bg-gray-200", "p-3", "mb-2", "rounded-lg");

        newLog.innerHTML = `
            <p class="text-gray-800 font-medium">You have completed the task <span class="font-bold">${taskTitle}</span>
            <span class="text-gray-600 text-sm">at ${currentTime}</span> </p> 
            
        `;
        activityLog.appendChild(newLog);
    }
});

document.getElementById("clear-history").addEventListener("click", function () {
    document.getElementById("activity-log").innerHTML = "";
});
