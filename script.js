
const counter = document.getElementById("counter");
const startDay = "10-29-2020";
const startDate = new Date(startDay);
const intlNumberFormatter = new Intl.NumberFormat("en-US");

setInterval(() => {
    const now = new Date();
    const difference = Math.floor((now.getTime() - startDate.getTime()) / 1000);

    counter.innerText = intlNumberFormatter.format(difference);
    }, 1000);