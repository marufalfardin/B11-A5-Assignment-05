
document.addEventListener("click", function (event) {

    let clickedButton = event.target;
    if (clickedButton.classList.contains("completed-btn")) {

        clickedButton.disabled = true;
        clickedButton.style.opacity = "0.8";
        clickedButton.style.backgroundColor = "#B0B0B0";


        alert("Task Completed!");

        //task number komano//

        const taskAssigned = document.getElementById("task-assigned");
        const taskCount = parseInt(taskAssigned.innerText);

        if (taskCount > 0) {
            taskAssigned.innerText = taskCount - 1;
           
        }
  
        //nav bar number increased//

        const navCount = document.getElementById("nav-digit-count");
        const convertedNavCount = parseInt(navCount.innerText);
        navCount.innerText = convertedNavCount + 1;

        if (taskCount === 0) {
            alert("All tasks are completed!");
        }
    }
});

