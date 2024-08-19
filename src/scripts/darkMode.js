var themeToggleDarkIcons = document.querySelectorAll(
  "#theme-toggle-dark-icon, #theme-toggle-dark-icon-drawer",
);
var themeToggleLightIcons = document.querySelectorAll(
  "#theme-toggle-light-icon, #theme-toggle-light-icon-drawer",
);

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "light" ||
  (!("color-theme" in localStorage) &&
    // remove ! here and in BaseKead.astro to set dark mode as default
    window.matchMedia("(prefers-color-scheme: dark)").matches) //removed !
) {
  themeToggleDarkIcons.forEach((icon) => icon.classList.remove("hidden")); // Show dark mode icon
} else {
  themeToggleLightIcons.forEach((icon) => icon.classList.remove("hidden")); // Show light mode icon
}

var themeToggleBtns = document.querySelectorAll(
  "#theme-toggle, #theme-toggle-drawer",
);

themeToggleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // toggle icons inside button
    themeToggleDarkIcons.forEach((icon) => icon.classList.toggle("hidden"));
    themeToggleLightIcons.forEach((icon) => icon.classList.toggle("hidden"));

    // if set via local storage previously
    if (localStorage.getItem("color-theme")) {
      if (localStorage.getItem("color-theme") === "dark") {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light"); // Switch to light mode
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark"); // Switch to dark mode
      }
    } else {
      // if NOT set via local storage previously
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("color-theme", "light"); // Switch to light mode
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("color-theme", "dark"); // Switch to dark mode
      }
    }
  });
});
