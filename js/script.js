const chart = document.querySelector(".chart");
const chartLabels = document.querySelector(".chart-labels");
const res = await fetch(`${window.location}/data.json`);
const data = await res.json();
let weeklySpend = 0;
data.forEach((el) => {
  let bar = document.createElement("div");
  bar.style.height = el.amount * 3 + "px";
  bar.classList.add("bar");
  bar.dataset.amount = "$" + el.amount;
  let label = document.createElement("div");
  label.textContent = el.day;
  if (el.day == getDay()) {
    bar.classList.add("current-day");
  }
  label.classList.add("label");
  chart.append(bar);
  chartLabels.append(label);
  weeklySpend += el.amount;
});

let outputSpan = document.querySelector(".weekly-spend");
outputSpan.textContent = weeklySpend;

function getDay() {
  const weekday = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

  const d = new Date();
  return weekday[d.getDay()];
}
