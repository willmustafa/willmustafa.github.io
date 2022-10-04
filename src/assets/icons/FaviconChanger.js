const FaviconChanger = () => {
  const faviconEl = document.querySelector('link[rel="icon"]');

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  mediaQuery.addEventListener("change", themeChange);

  function themeChange(event) {
    if (event.matches) {
      faviconEl.setAttribute("href", "/favicon.png");
    } else {
      faviconEl.setAttribute("href", "/favicon-light.png");
    }
  }
};

export default FaviconChanger;
