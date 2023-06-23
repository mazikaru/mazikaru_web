window.addEventListener("load", function () {
    const titleImg = document.getElementById("title");
    titleImg.style.marginTop = ((window.innerHeight - titleImg.clientHeight) / 2).toString() + "px";
    /** @type {number[]} */
    let id = [];
    titleImg.style.opacity = 0;
    id.title = setInterval(function (elem) {
        elem.style.opacity = parseFloat(elem.style.opacity) + 0.025;
        if (titleImg.style.opacity >= 1) {
            clearInterval(id.title);
        }
    }, 30, titleImg)
    const night = document.getElementById("night");
    window.addEventListener("scroll", function (event) {
        console.log(night.style.opacity = Math.min(1, scrollY / window.innerHeight));
    })
    document.getElementById("lastMovie").addEventListener("click", function() {
        window.location.href = "https://drive.google.com/drive/folders/1S0NLF2V4eR4HwMiAmLN7UiXsIhx5lyaJ";
    })
    document.getElementById("characterIntro").addEventListener("click", function () {
        window.location.href = "character.html";
    });
});