
document.addEventListener("click", function (event) {

    let clickedButton = event.target;
    if (clickedButton.classList.contains("completed-btn")) {

        clickedButton.disabled = true;
        clickedButton.style.opacity = "0.8";
        clickedButton.style.backgroundColor = "#B0B0B0";


        alert("Board Updated Successfully");

        //task number komano//

        const taskAssigned = document.getElementById("task-assigned");
        const taskCount = parseInt(taskAssigned.innerText);

        if (taskCount > 0) {
            taskAssigned.innerText = taskCount - 1;
            if (taskCount === 1) {
                alert('Congrats!!! You have completed all the current task, Now go and enjoy your day');
            } 
        } 


        //nav bar number increased//

        const navCount = document.getElementById("nav-digit-count");
        const convertedNavCount = parseInt(navCount.innerText);
        navCount.innerText = convertedNavCount + 1;

       
    }
});

