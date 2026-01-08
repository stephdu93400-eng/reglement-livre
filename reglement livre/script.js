const pageSound = document.getElementById("pageSound");

const pageFlip = new St.PageFlip(
  document.getElementById("book"),
  {
    width: 700,
    height: 500,
    size: "stretch",
    showCover: true,
    flippingTime: 800,
    maxShadowOpacity: 0.8,
    mobileScrollSupport: false
  }
);

pageFlip.loadFromHTML(document.querySelectorAll(".page"));

pageFlip.on("flip", () => {
  pageSound.currentTime = 0;
  pageSound.play();
});

function goToPage(index) {
  pageSound.currentTime = 0;
  pageSound.play();
  pageFlip.flip(index);
}
