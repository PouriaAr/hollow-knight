function checkAnswers() {
    let correct = 0;

    const answers = {
        q1: "a",
        q2: "a",
        q3: "b",
        q4: "b",
        q5: "d",
        q6: "c",
        q7: "b",
        q8: "a",
        q9: "c",
        q10: "c"
    };

    for (let key in answers) {
        let selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === answers[key]) {
            correct++;
        }
    }

    const total = Object.keys(answers).length;
    let resultDiv = document.getElementById("result");
    let resultP = document.getElementById("res");
    let resImg = document.getElementById("resImg");
    resultDiv.classList.remove("d-none");
    if (correct <= 3) {
        resultP.textContent = "Not Good"
        resultP.style.color = "red"
        resImg.src = "bosses/npc_zote.png"
    }
    if (correct > 3 && correct <= 5) {
        resultP.textContent = "Not Bad"
        resultP.style.color = "yellow"
        resImg.src = "bosses/npc_quirrel.png"
    }

    if (correct > 5 && correct <= 8) {
        resultP.textContent = "Good"
        resultP.style.color = "lightgreen"
        resImg.src = "bosses/npc_cloth.png"
    }

    if (correct > 8) {
        resultP.textContent = "Perfect!"
        resultP.style.color = "green"
        resImg.src = "bosses/npc_nailmaster.png"
    }

    resultDiv.textContent = `You answered ${correct} out of ${total} correctly!`;
}

