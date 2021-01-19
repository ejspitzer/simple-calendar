const imgArray = ["img/jan-wp.jpg", "img/feb-wp.jpg", "img/mar-wp.jpg","img/apr-wp.jpg",
"img/maj-wp.jpg", "img/jun-wp.jpg", "img/jul-wp.jpg","img/avg-wp.jpg",
"img/sep-wp.jpg", "img/okt-wp.jpg", "img/nov-wp.jpg", "img/dec-wp.jpg",];
const prevBtn = document.querySelector("#arrow-left");
const nextBtn = document.querySelector("#arrow-right");
const monthTitle = document.querySelector("#month-title");
const allWeeks = document.querySelectorAll(".week");
const d = new Date();

let daysInMonth = numOfDays(d.getFullYear(), d.getMonth());
monthTitle.innerHTML = `${getMonthName()} ${d.getFullYear()}`;
buildCalendar();
setBackground(d.getMonth());

prevBtn.addEventListener("click", changePrev);
nextBtn.addEventListener("click", changeNext);

function changePrev() {
    d.setMonth(d.getMonth() - 1);
    monthTitle.innerHTML = `${getMonthName()} ${d.getFullYear()}`;
    daysInMonth = numOfDays(d.getFullYear(), d.getMonth());
    buildCalendar();
    setBackground(d.getMonth());
}

function changeNext() {
    d.setMonth(d.getMonth() + 1)
    monthTitle.innerHTML = `${getMonthName()} ${d.getFullYear()}`;
    daysInMonth = numOfDays(d.getFullYear(), d.getMonth());
    buildCalendar();
    setBackground(d.getMonth());
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

function setBackground(month){
    switch (month){
        case 0:
            console.log(imgArray[0]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[0]})`;
            break;
        case 1:
            console.log(imgArray[1]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[1]})`;
            break;
        case 2:
            console.log(imgArray[2]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[2]})`;
            break;
        case 3:
            console.log(imgArray[3]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[3]})`;
            break;
        case 4:
            console.log(imgArray[4]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[4]})`;
            break;
        case 5:
            console.log(imgArray[5]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[5]})`;
            break;
        case 6:
            console.log(imgArray[6]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[6]})`;
            break;
        case 7:
            console.log(imgArray[7]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[7]})`;
            break;
        case 8:
            console.log(imgArray[8]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[8]})`;
            break;
        case 9:
            console.log(imgArray[9]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[9]})`;
            break;
        case 10:
            console.log(imgArray[10]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[10]})`;
            break;
        case 11:
            console.log(imgArray[11]);
            document.querySelector("body").style.backgroundImage = `url(${imgArray[11]})`;
            break;
    }
}