// Mapping of symptoms to treatments and possible causes
const symptomMap = {
  "headache": {
    treatment: "Take pain relievers such as ibuprofen or acetaminophen.",
    causes: "Possible causes include stress, dehydration, or eye strain.",
  },
  "fever": {
    treatment: "Rest, drink plenty of fluids, and take over-the-counter fever reducers like acetaminophen or ibuprofen.",
    causes: "Fevers can be caused by infections, such as the flu or a cold, as well as other medical conditions.",
  },
  // Add more symptoms and their corresponding treatments and causes here
};

// Function to check a symptom
function checkSymptom() {
  const symptomInput = document.getElementById("symptom-input").value.toLowerCase();
  const chatContainer = document.getElementById("chat-container");

  // Display user input
  const userMessage = document.createElement("div");
  userMessage.innerHTML = `<strong>You:</strong> ${symptomInput}`;
  chatContainer.appendChild(userMessage);

  // Check if there's information for the symptom
  const symptomInfo = symptomMap[symptomInput];
  if (symptomInfo) {
    // Display treatment and possible causes
    const botMessage = document.createElement("div");
    botMessage.innerHTML = `<strong>Bot:</strong> Treatment: ${symptomInfo.treatment}<br><strong>Possible Causes:</strong> ${symptomInfo.causes}`;
    chatContainer.appendChild(botMessage);
  } else {
    // If no information found, display default message
    const defaultMessage = document.createElement("div");
    defaultMessage.innerHTML = "<strong>Bot:</strong> I'm sorry, I don't have information about that symptom.";
    chatContainer.appendChild(defaultMessage);
  }

  // Clear symptom input field
  document.getElementById("symptom-input").value = "";

  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to clear the chat history and input fields
function clearChat() {
  const chatContainer = document.getElementById("chat-container");
  chatContainer.innerHTML = "";

  // Clear all input fields
  document.getElementById("symptom-input").value = "";
  document.getElementById("name-input").value = "";
  document.getElementById("city-input").value = "";
  document.getElementById("phone-input").value = "";
  document.getElementById("age-input").value = "";
}

// Function to exit the chat
function exitChat() {
  if (confirm("Are you sure you want to exit the chat?")) {
    window.close();
  }
}
