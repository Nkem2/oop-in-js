const second = document.querySelector('#seconds');
  const minute = document.querySelector('#minutes');
  const hour = document.querySelector('#hours');


  const getTime =() => {
    const today = new Date();
    hour.textContent =`${today.getHours} :`;
    second.textContent =`${today.getSeconds} :`;
    minute.textContent =`${today.getMinutes} :`;
  };
  setInterval(getTime, 1000);