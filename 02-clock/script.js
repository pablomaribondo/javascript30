const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours() % 12;

  const secondsDegrees = (seconds / 60) * 360 + 90;
  const minutesDegrees = (minutes / 60) * 360 + 90;
  const hoursDegrees = (hours / 12) * 360 + 90;

  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (seconds === 0) {
    secondHand.style.transition = "none";
    setTimeout(() => {
      secondHand.style.transition = "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
    }, 1000);

    if (minutes === 0) {
      minuteHand.style.transition = "none";
      setTimeout(() => {
        minuteHand.style.transition =
          "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
      }, 1000);

      if (hours === 0) {
        hourHand.style.transition = "none";
        setTimeout(() => {
          hourHand.style.transition =
            "all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)";
        }, 1000);
      }
    }
  }
};

setInterval(setDate, 1000);
