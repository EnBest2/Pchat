
function sendMessage() {
    const input = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    const mode = document.getElementById("mode").value;

    const userText = input.value;
    if (!userText.trim()) return;

    chatBox.innerHTML += `<div><strong>Te:</strong> ${userText}</div>`;

    let response = "";
    if (mode === "flort") {
        response = generateFlirtyResponse(userText);
    }

    setTimeout(() => {
        chatBox.innerHTML += `<div><strong>pChat:</strong> ${response}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);

    input.value = "";
}

function generateFlirtyResponse(input) {
    const responses = [
        "Hát te honnan kerültél elő, ilyen csábító szöveggel?",
        "Ó, ezt nem szabad csak úgy mondani valakinek... de tetszik!",
        "Most megfogtál... mit szólnál egy kis flörthöz?",
        "Te mindig ilyen kedves vagy, vagy csak velem vagy így?",
        "Ha ezt még egyszer mondod, lehet elpirulok 😉"
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}
