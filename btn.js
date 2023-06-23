window.addEventListener("load", function () {
    const btn = document.getElementById("openbtn");
    const nav = document.getElementById("g-nav");
    btn.addEventListener("click", function (event) {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            nav.classList.remove("panelactive");
        } else {
            btn.classList.add("active");
            nav.classList.add("panelactive");
        }
    })
})