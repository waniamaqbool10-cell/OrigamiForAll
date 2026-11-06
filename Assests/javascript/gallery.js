let selectedCat = "all";
let selectedLvl = "all";

const cards = document.querySelectorAll(".tile");

document.querySelectorAll(".cat-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        document.querySelectorAll(".cat-btn")
            .forEach(b => b.classList.remove("active"));

        this.classList.add("active");

        selectedCat = this.dataset.cat;
        filterCards();
    });
});

document.querySelectorAll(".lvl-btn").forEach(btn => {
    btn.addEventListener("click", function () {

        document.querySelectorAll(".lvl-btn")
            .forEach(b => b.classList.remove("active"));

        this.classList.add("active");

        selectedLvl = this.dataset.lvl;
        filterCards();
    });
});

function filterCards() {
    cards.forEach(card => {

        const catMatch =
            selectedCat === "all" ||
            card.dataset.cat === selectedCat;

        const lvlMatch =
            selectedLvl === "all" ||
            card.dataset.lvl === selectedLvl;

        if (catMatch && lvlMatch) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });
}