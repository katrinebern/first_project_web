const toggleBtn = document.querySelector("#theme-toggle");
const page = document.body;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  page.classList.add("theme-dark");
  toggleBtn.setAttribute("aria-pressed", "true");
  toggleBtn.textContent = "Light mode";
} else {
  page.classList.remove("theme-dark");
  toggleBtn.setAttribute("aria-pressed", "false");
  toggleBtn.textContent = "Dark mode";
}

toggleBtn.addEventListener("click", () => {
  page.classList.toggle("theme-dark");

  const isDark = page.classList.contains("theme-dark");

  toggleBtn.setAttribute("aria-pressed", String(isDark));
  toggleBtn.textContent = isDark ? "Light mode" : "Dark mode";

  localStorage.setItem("theme", isDark ? "dark" : "light");
});
