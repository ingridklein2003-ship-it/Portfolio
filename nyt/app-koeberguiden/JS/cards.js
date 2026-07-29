const reviewCards = document.querySelectorAll(".review-card");

// Array med kortdata som objekter
const cardData = [
    { id: 0, expanded: false },
    { id: 1, expanded: false }
];

for (let i = 0; i < reviewCards.length; i++) {
    reviewCards[i].addEventListener("click", toggleReviewCard);
}

function toggleReviewCard() {

    const clickedIndex = Array.from(reviewCards).indexOf(this);
    const isActive = this.classList.contains("active");

    console.log("Klik på kort:", clickedIndex);

    for (let j = 0; j < reviewCards.length; j++) {
        reviewCards[j].classList.remove("active");
        cardData[j].expanded = false;
    }

    if (!isActive) {
        this.classList.add("active");
        cardData[clickedIndex].expanded = true;
    } else {
        this.classList.remove("active");
        cardData[clickedIndex].expanded = false;
    }

    console.log("Kortstatus:", cardData);

}