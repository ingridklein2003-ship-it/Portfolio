// Denne fil er udviklet med assistance fra Claude (Anthropic)
// og efterfølgende tilpasset til projektets behov.

const faqToggle =
document.querySelector("#faqToggle");

const faqList =
document.querySelector("#faqList");

const faqItems = [
    { question: "Hvad er køberrådgivning?", answer: "Køberrådgivning er professionel hjælp til dig som boligkøber, så du undgår dyre fejl." },
    { question: "Hvad koster det at bruge en køberrådgiver?", answer: "Prisen afhænger af opgavens omfang. Kontakt os for et uforpligtende tilbud." },
    { question: "Hvornår i processen skal jeg kontakte jer?", answer: "Jo tidligere jo bedre — gerne inden du begynder at kigge på boliger." },
    { question: "Kan I hjælpe med budgetlægning?", answer: "Ja, vi hjælper dig med at lægge et realistisk budget inden boligkøbet." },
    { question: "Hvad sker der ved et boligtjek?", answer: "Vi gennemgår boligen og alle dokumenter, så du ved præcist hvad du køber." }
];


function createFaqItem(faqItem){

    const item = document.createElement("button");

    item.type = "button";
    item.className = "faq-item";
    item.textContent = faqItem.question;

    item.addEventListener("click", function(){

        handleFaqItemClick(faqItem);

    });

    return item;

}


function handleFaqItemClick(faqItem){

    const answerBox = document.querySelector(".faq-answer");

    if(answerBox){

        answerBox.remove();

    }

    const chatMessages = document.querySelector("#chatMessages");

    const message = document.createElement("p");
    message.className = "chat-bubble chat-bubble--bot";
    message.textContent = faqItem.answer;
    chatMessages.appendChild(message);

}


function renderFaqItems(){

    faqItems.forEach(function(faqItem){

        const item = createFaqItem(faqItem);

        faqList.appendChild(item);

    });

}


function toggleFaq(){

    faqList.classList.toggle("faq-list--open");

}


faqToggle.addEventListener("click", toggleFaq);

renderFaqItems();
