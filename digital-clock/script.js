function updateTime(){
    const now = new Date(); 
    let hours = now.getHours();
    let Minutes = now.getMinutes();
    let Seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
    Seconds = Seconds < 10 ? "0" + Seconds : Seconds;

    const timeString =`${hours}:${Minutes}:${Seconds}`;
    document.getElementById("display").innerText = timeString;

}

setInterval(updateTime, 1000);
updateTime();
console.log(now.getHours);

