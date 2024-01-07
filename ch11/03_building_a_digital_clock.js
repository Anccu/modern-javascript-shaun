const clock = document.querySelector('.clock');

const tick = () => {

  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;

  // console.log(h, m, s);

};

setInterval(tick,1000);// execute tick every 1 second

