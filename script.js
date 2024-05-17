const symptomMap = {
  "headache": {
    treatment: "Rest in a quiet, dark room, hydrate, and consider over-the-counter pain relievers like ibuprofen or acetaminophen.",
    causes: "Headaches can be triggered by stress, dehydration, lack of sleep, or underlying health conditions.",
  },
  "fever": {
    treatment: "Rest, drink plenty of fluids, and take over-the-counter fever reducers like acetaminophen or ibuprofen.",
    causes: "Fevers can be caused by infections, such as the flu or a cold, as well as other medical conditions.",
  },
  // Add more symptoms and their corresponding treatments and causes here
  "skin rash": {
    treatment: "Keep the affected area clean and dry, apply soothing lotions or creams, and avoid scratching. Consult a dermatologist if the rash persists or worsens.",
    causes: "Skin rashes may result from allergic reactions, infections, autoimmune disorders, or contact with irritants.",
  },
  "stomach pain": {
    treatment: "Rest the stomach by fasting or consuming bland foods, drink clear fluids, and consider over-the-counter antacids or anti-diarrheal medications. Seek medical attention if pain is severe or persistent.",
    causes: "Stomach pain can be caused by indigestion, gas, food poisoning, infections, or underlying gastrointestinal issues.",
  },
  "cough": {
    treatment: "Stay hydrated, use cough drops or lozenges, and consider over-the-counter cough suppressants or expectorants. Seek medical advice if coughing persists for more than a few weeks.",
    causes: "Coughs can result from viral infections like the common cold or flu, allergies, asthma, or smoking.",
  },
  "muscle soreness": {
    treatment: "Rest the affected muscles, apply ice packs or heating pads, gently stretch, and consider over-the-counter pain relievers like ibuprofen or acetaminophen.",
    causes: "Muscle soreness can occur after intense exercise, physical exertion, or due to muscle strain or injury.",
  },
  "fatigue": {
    treatment: "Get plenty of rest, maintain a balanced diet, stay hydrated, and engage in light physical activity. Consult a healthcare professional if fatigue is persistent or severe.",
    causes: "Fatigue can be caused by lack of sleep, stress, poor nutrition, underlying medical conditions, or medication side effects.",
  },
  "nausea": {
    treatment: "Stay hydrated with clear fluids, eat bland foods, avoid strong odors or triggers, and consider over-the-counter anti-nausea medications. Seek medical attention if nausea is severe or accompanied by other concerning symptoms.",
    causes: "Nausea can result from gastrointestinal infections, food poisoning, motion sickness, pregnancy, migraines, or medication side effects.",
  },
  "sore throat": {
    treatment: "Gargle with warm salt water, stay hydrated, use throat lozenges or sprays, and consider over-the-counter pain relievers like ibuprofen or acetaminophen.",
    causes: "Sore throats can be caused by viral infections like the common cold or flu, bacterial infections like strep throat, allergies, or irritants like smoke or pollution.",
  },
  "diarrhea": {
    treatment: "Stay hydrated with clear fluids, consume bland foods like rice or bananas, avoid dairy and spicy foods, and consider over-the-counter anti-diarrheal medications. Seek medical attention if diarrhea persists for more than a few days.",
    causes: "Diarrhea can result from viral or bacterial infections, food poisoning, medication side effects, or underlying gastrointestinal conditions.",
  },
  "insomnia": {
    treatment: "Establish a consistent sleep schedule, create a relaxing bedtime routine, limit caffeine and screen time before bed, and consider relaxation techniques or over-the-counter sleep aids. Consult a healthcare provider if insomnia persists.",
    causes: "Insomnia can be caused by stress, anxiety, depression, poor sleep habits, underlying medical conditions, or medication side effects.",
  }
};

function checkSymptom() {
  const symptomInput = document.getElementById("symptom-input").value.toLowerCase();
  const chatContainer = document.getElementById("chat-container");

  // Retrieve personal information entered by the user
  const name = document.getElementById("name-input").value;
  const city = document.getElementById("city-input").value;
  const phoneNumber = document.getElementById("phone-input").value;
  const age = document.getElementById("age-input").value;

  // Display user input along with personal information
  const userMessage = document.createElement("div");
  userMessage.innerHTML = `<strong>You:</strong> Symptom: ${symptomInput}<br>Name: ${name}<br>City: ${city}<br>Phone Number: ${phoneNumber}<br>Age: ${age}`;
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

// Function to exit the chat and close the tab
function exitChat() {
  if (confirm("Are you sure you want to exit the chat?")) {
    window.close(); // Close the current tab
  }
}

function openEmergencyNumbers() {
  var popup = document.getElementById("emergencyPopup");
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("emergencyPopup");
  popup.style.display = "none";
}