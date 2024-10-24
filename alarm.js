
function showTime(){
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    const showtime = document.querySelector(".time");
    showtime.innerText = time;
    setTimeout(showTime, 1000);
}
showTime();

    let container = document.querySelector(".container");
    let innerdiv = document.querySelector(".innerdiv");
    let addButton = document.querySelector("#addButton");
    let addtime = document.querySelector(".addTime");
    let add = document.querySelector("#add");
    let cancel = document.querySelector("#cancel");

    window.addEventListener("load", () => {
    addtime.remove();
    innerdiv.remove();
    });

    addButton.addEventListener("click", () => {
        addButton.after(innerdiv);
        addButton.after(addtime);
    });

    add.addEventListener("click", () => {
        if(addtime.value == 0){
            alert("You Cannot Add Empty Alarm!!!.");
        }
        else {
            addAlarm();
        }
    });
    function addAlarm() {
        let alarmbox = document.createElement("div");
        let alarm = document.createElement("p");
        let check = document.createElement("input");
        let deletebutton = document.createElement("span");

        alarmbox.style.display = "flex";
        alarmbox.style.justifyContent = "space-around";
        alarmbox.setAttribute("class", "alarmbox");
        check.setAttribute("type", "checkbox");
        check.setAttribute("class", "check");
        check.checked = true;

        alarm.innerText = addtime.value;
        deletebutton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" class="delete"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

        container.append(alarmbox);
        alarmbox.prepend(alarm, check, deletebutton);

        alert("You Alarm Has Been Added!!!");

        addtime.remove();
        innerdiv.remove();
        addtime.value = 0;

        deletebutton.addEventListener("click", () => {
            alarmbox.remove();
        });
    }

    cancel.addEventListener("click", () => {
        addtime.remove();
        innerdiv.remove();
        addtime.value = 0;
    });

    