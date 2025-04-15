const imgPath = (digit) => `/number_${digit}.webp`;

const updateDigit = (id, digit) => {
  const img = document.getElementById(id);
  const newSrc = imgPath(digit);

  if (!img.src !== newSrc) {
    img.src = newSrc;
  }
};

const updateClock = () => {
  const now = new Date();
  const h = now.getHours().toString().padStart(2, "0");
  const m = now.getMinutes().toString().padStart(2, "0");
  const s = now.getSeconds().toString().padStart(2, "0");

  updateDigit("h1", h[0]);
  updateDigit("h2", h[1]);
  updateDigit("m1", m[0]);
  updateDigit("m2", m[1]);
  updateDigit("s1", s[0]);
  updateDigit("s2", s[1]);
};

setInterval(updateClock, 1000);
updateClock();
