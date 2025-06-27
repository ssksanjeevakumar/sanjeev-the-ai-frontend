async function sendMessage() {
  const input = document.getElementById("messageInput");
  const chatbox = document.getElementById("chatbox");
  const message = input.value.trim();

  if (!message) return;

  chatbox.innerHTML += `<p><b>You:</b> ${message}</p>`;
  input.value = "";

  try {
    const res = await fetch("https://ssksanjeevakumar.github.io/sanjeev-the-ai-frontend/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    chatbox.innerHTML += `<p><b>Sanjeev:</b> ${data.reply}</p>`;
    chatbox.scrollTop = chatbox.scrollHeight;
  } catch (err) {
    chatbox.innerHTML += `<p style="color:red"><b>Error:</b> Couldn't reach Sanjeev the AI</p>`;
  }
}
