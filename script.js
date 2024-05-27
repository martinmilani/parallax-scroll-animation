window.onscroll = () => {
  document.querySelector(".mountain").style.marginTop = scrollY + "px";
  document.querySelector(".trees").style.marginTop = scrollY / 1.5 + "px";
  document.querySelector(".stars").style.marginTop = scrollY * 2 + "px";
  document.querySelector(".stars").style.marginRight = scrollY / 2 + "px";
  document.querySelector(".moon").style.transform =
    "rotate(-" + scrollY / 5.5 + "deg)";

  document.querySelector(".home h1").style.marginTop = scrollY + "px";
  document.querySelector(".home h1").style.opacity = (300 - scrollY) / 300;
  document.querySelector(".lottie").style.opacity = (300 - scrollY) / 300;
};
