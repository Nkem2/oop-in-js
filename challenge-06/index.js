const secondHand = document.querySelector('#seconds');
  const minsHand = document.querySelector('#minutes');
  const hourHand = document.querySelector('#hours');
  function setseconds() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    // secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    document.querySelector("#seconds").innerHTML =seconds;
    // const minsDegrees = ((mins / 60) * 360) +  90;
    // minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    // const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    document.querySelector("#hours").innerHTML =hours;
    // hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }
  setInterval(setDate, 1000);

  // setDate();