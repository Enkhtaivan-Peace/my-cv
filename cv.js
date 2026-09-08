document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-pdf");

    if (!downloadButton) {
        console.error("Download PDF button not found.");
        return;
    }

    downloadButton.addEventListener("click", () => {
        window.print();
    });
});