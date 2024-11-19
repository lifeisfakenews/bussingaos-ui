document.addEventListener("DOMContentLoaded", () => {
    const taskbarLuncherMenu = document.querySelector(".taskbar-launcher-menu");
    document.querySelector(".taskbar-launcher-button").addEventListener("click", () => {
        if (taskbarLuncherMenu.getAttribute("aria-expanded") === "false") {
            taskbarLuncherMenu.setAttribute("aria-expanded", "true");
        } else {
            taskbarLuncherMenu.setAttribute("aria-expanded", "false");
        }
    });
});

window.addEventListener("click", (e) => {
    if (e.target.closest(".taskbar-launcher-menu")) {
        e.target.closest(".taskbar-launcher-menu").setAttribute("aria-expanded", "false");
    }
});