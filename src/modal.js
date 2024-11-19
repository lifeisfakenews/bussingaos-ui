document.addEventListener("keydown", e => {
    const settingsModal = document.querySelector("#settings-modal");
    if (e.key === "s" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        settingsModal.showModal();
    }
});

document.addEventListener("click", e => {
    const settingsModal = document.querySelector("#settings-modal");
    if (e.target == settingsModal) {
        settingsModal.close();
    }
});