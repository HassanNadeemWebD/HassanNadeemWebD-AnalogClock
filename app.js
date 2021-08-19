setInterval(() => {
    date = new Date();
    Hour = date.getHours();
    Minute = date.getMinutes();
    Second = date.getSeconds();
    hourRotation = 30 * Hour + (Minute / 2);
    minuteRotation = 6 * Minute;
    secondRotation = 6 * Second;
    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minuteRotation}deg)`;
    second.style.transform = `rotate(${secondRotation}deg)`;

}, 1000);