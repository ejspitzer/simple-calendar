const prevBtn = document.querySelector("#arrow-left");
const nextBtn = document.querySelector("#arrow-right");
const monthTitle = document.querySelector("#month-title");
const d = new Date();
monthTitle.innerHTML = `${getMonthName()} ${d.getFullYear()}`;

const allWeeks = document.querySelectorAll(".week");
let daysInMonth = numOfDays(d.getFullYear(), d.getMonth());
buildCalendar();

prevBtn.addEventListener("click", changePrev);
nextBtn.addEventListener("click", changeNext);

function changePrev() {
    d.setMonth(d.getMonth() - 1);
    monthTitle.innerHTML = `${getMonthName()} ${d.getFullYear()}`;
    daysInMonth = numOfDays(d.getFullYear(), d.getMonth());
    buildCalendar();
}

function changeNext() {
    d.setMonth(d.getMonth() + 1)
    monthTitle.innerHTML = `${getMonthName()} ${d.getFullYear()}`;
    daysInMonth = numOfDays(d.getFullYear(), d.getMonth());
    buildCalendar();
}

function getMonthName() {
    let mesec;

    switch(d.getMonth()) {
        case 0:
            mesec = "Januar";
            break;
        case 1:
            mesec = "Februar";
            break;
        case 2:
            mesec = "Marec";
            break;
        case 3:
            mesec = "April";
            break;
        case 4:
            mesec = "Maj";
            break;
        case 5:
            mesec = "Junij";
            break;
        case 6:
            mesec = "Julij";
            break;
        case 7:
            mesec = "Avgust";
            break;
        case 8:
            mesec = "September";
            break;
        case 9:
            mesec = "Oktober";
            break;
        case 10:
            mesec = "November";
            break;
        case 11:
            mesec = "December";
            break
    }

    return mesec;
}

function numOfDays(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

function buildCalendar(){
    const firstDay = new Date(d.getFullYear(), d.getMonth(), 0);
    const day = firstDay.getDay();
    console.log(daysInMonth);

    // RESET CALANDER:
    for(i = 1; i < allWeeks.length; i++) {
        for (j = 0; j < allWeeks[i].children.length; j++) {
            allWeeks[i].children[j].innerHTML = "";
        }
    }

    // FIRST DAY IN A MONTH:
    if(day === 0){
        allWeeks[1].children[0].innerHTML = "1";
    } else if(day === 1){
        allWeeks[1].children[1].innerHTML = "1";
    } else if(day === 2){
        allWeeks[1].children[2].innerHTML = "1";
    } else if(day === 3){
        allWeeks[1].children[3].innerHTML = "1";
    } else if(day === 4){
        allWeeks[1].children[4].innerHTML = "1";
    } else if(day === 5){
        allWeeks[1].children[5].innerHTML = "1";
    } else if(day === 6){
        allWeeks[1].children[6].innerHTML = "1";
    }


    // THE REST OF THE DAYS
    let dayIndex = 2;
    
    for(i = 1; i < allWeeks.length; i++) {

        if (i === 1) {
            for(j = day + 1; j < allWeeks[i].children.length; j++) {
                allWeeks[i].children[j].innerHTML = `${dayIndex}`;
                dayIndex++;
            }
        } else {
            for(j = 0; j < allWeeks[i].children.length; j++) {

                if (dayIndex > daysInMonth) {
                    break;
                } else {
                    allWeeks[i].children[j].innerHTML = `${dayIndex}`;
                    dayIndex++;
                }
            }    
        }
    }
}
