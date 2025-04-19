const responses = [
  "😍 круто! ",
  "no way 🫨",
  "ЩооОООо? ⁉️",
  "дякую 👌",
  "обожнюю цю погоду 🌡️☁️🌞",
  "час придбати велосипед 🚲",
  "🤒i`m sick of that",
  "🐾🐾🐾🐾🐾🐾🐾meow🐈‍⬛🐈‍⬛",
  "🕷️boo🕸️",
];

const sendButton = document.querySelector("button");
const inputField = document.querySelector("input");

inputField.addEventListener("input", () => {
  if (
    inputField.value.trim() !== "" &&
    inputField.value !== "почніть писати..."
  ) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
});

async function handleMessage() {
  const input = inputField.value.trim();
  const responsesDiv = document.querySelector(".chat-messages");

  function addMessage(text) {
    const p = document.createElement("p");
    p.textContent = text;
    responsesDiv.appendChild(p);
    return p;
  }

  function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  if (input === "My watch has ended") {
    addMessage("чат завершено");
    sendButton.disabled = true;
    return;
  } else if (!input) {
    addMessage("введіть повідомлення щоб отримати відповідь");
    sendButton.disabled = true;
  } else {
    addMessage(input);
    inputField.value = "";
    const thinking = addMessage("чат-бот набирає повідомлення...");

    await wait(Math.random() * 9000 + 1000);
    responsesDiv.removeChild(thinking);

    const chance = Math.random();
    if (chance < 0.1) {
      addMessage("мені раптом набридло...💤💤💤 чат завершено");
      sendButton.disabled = true;
      return;
    }

    let randomMessage = responses[Math.floor(Math.random() * responses.length)];
    addMessage(randomMessage);
  }
}

sendButton.addEventListener("click", handleMessage);
