document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("oshibochka");

  const variants = [
    "ОшИбкА 404",
    "оШИбка 404",
    "ОШиБка 404"
  ];

  let i = 0;

  setInterval(() => {
    el.innerText = variants[i];
    i = (i + 1) % variants.length;
  }, 500);
});