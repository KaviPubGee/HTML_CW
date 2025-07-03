window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Keep preloader visible for 2 seconds before fading out
  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 2000);
});
