const secsHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const dateFun = () => {
  const now = new Date();
  const mins = now.getMinutes();
  const secs = now.getSeconds();
  const hr = now.getHours();

  secsHd = (secs / 60) * 360 + 90;
  minHd = (mins / 60) * 360 + 90;
  hrHd = (hr / 12) * 360 + 89;

  secsHand.style.transform = `rotate(${secsHd}deg)`;
  minsHand.style.transform = `rotate(${minHd}deg)`;
  hourHand.style.transform = `rotate(${hrHd}deg)`;
};

setInterval(() => {
  dateFun();
}, 1000);
