const displayDate = document.querySelector(".date");
const displayTime = document.querySelector(".time");
console.log(window.innerWidth);
const startTime = () => {
  let time = new Date();
  let hr = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = hr > 12 ? "Pm" : "Am";
  //   console.log(am_pm);

  let date = new Date();
  let year = date.getFullYear();
  let day = date.getDay();
  let month = date.getMonth();
  let dayNum = date.getDate();

  hr = hr > 12 ? hr - 12 : hr;

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  dayNum = dayNum < 10 ? "0" + dayNum : dayNum;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  switch (day) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }
  month = months[month];
  //   console.log(month);
  //   console.log(day);
  let fullDate = `${day},${month} ${dayNum},${year}`;
  let fullTime = `${hr}:${min}:${sec} ${am_pm}`;
  //   console.log(fullDate);
  //   console.log(fullTime);
  displayDate.innerHTML = fullDate;
  displayTime.innerHTML = fullTime;
};
setInterval(startTime, 1000);
