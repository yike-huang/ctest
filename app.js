const activities = {
  anxiety: {
    title: "Safe Place Drawing",
    time: "5 minutes",
    energy: "Low energy",
    materials: "Paper or canvas",
    description: "Draw or assemble a place where your body can imagine some safety.",
    need: "A small sense of steadiness and a place for uncertainty to rest.",
    steps: [
      "Take one slower breath and let your shoulders soften if they can.",
      "Choose one color that feels protective or steady today.",
      "Draw a simple place, shape, room, path, or shelter. It does not need to be realistic.",
      "Add one detail that would help your body feel less alone there.",
      "Pause and notice whether anything in your body changed, even slightly."
    ],
    source: "Grounded in cancer distress support guidance from NCI and ACS."
  },
  anger: {
    title: "Scribble Release",
    time: "4 minutes",
    energy: "Medium energy",
    materials: "Paper or canvas",
    description: "Use strong lines, pressure, and color to give anger a place outside your body.",
    need: "A nonverbal outlet that does not require explaining or justifying the feeling.",
    steps: [
      "Choose a color or brush size that matches the force of the feeling.",
      "Make marks quickly for 30 seconds. Let the page hold the pressure.",
      "Change color and draw around the strongest area.",
      "Ask quietly: what might this anger be protecting?",
      "End by adding one boundary line or one calmer color."
    ],
    source: "Uses expressive coping principles alongside cancer emotion support resources."
  },
  sadness: {
    title: "Color Weather Map",
    time: "6 minutes",
    energy: "Low energy",
    materials: "Paper or canvas",
    description: "Represent the emotional weather of the day with color, texture, and space.",
    need: "Permission to let sadness be seen without needing to fix it.",
    steps: [
      "Imagine today's feeling as weather rather than a problem.",
      "Pick one color for the sky, one for the ground, and one for what is moving through.",
      "Fill the canvas with simple shapes, clouds, rain, fog, light, or empty space.",
      "Add a small mark for what is still here with you.",
      "Write one sentence in your closing note if words feel available."
    ],
    source: "Inspired by supportive emotional expression practices and psychosocial care guidance."
  },
  numbness: {
    title: "Five Senses Texture Drawing",
    time: "5 minutes",
    energy: "Low energy",
    materials: "Canvas or nearby object",
    description: "Use texture-like marks to gently reconnect with sensory experience.",
    need: "A very small bridge back to sensation, without forcing emotion.",
    steps: [
      "Notice one thing you can see, hear, or touch.",
      "Make a mark that matches that sensation: dotted, smooth, jagged, soft, or layered.",
      "Repeat with two more sensations if that feels okay.",
      "Leave blank space wherever you need blank space.",
      "Close by naming one sensation that felt neutral or tolerable."
    ],
    source: "Designed as a gentle grounding exercise, not a clinical intervention."
  },
  uncertainty: {
    title: "Circle of Control Collage",
    time: "7 minutes",
    energy: "Medium energy",
    materials: "Canvas or paper",
    description: "Separate what is controllable, influenceable, and outside your control.",
    need: "A little structure when waiting, scans, treatment decisions, or unknowns feel loud.",
    steps: [
      "Draw one small inner circle for what you can do today.",
      "Draw a larger circle around it for what you may influence with support.",
      "Use the outside space for what is not yours to control.",
      "Add colors, lines, or words to each space.",
      "Choose one small action from the inner circle, only if one appears."
    ],
    source: "Aligned with coping support around uncertainty and distress in cancer care."
  },
  loneliness: {
    title: "Connection Postcard",
    time: "8 minutes",
    energy: "Medium energy",
    materials: "Canvas or paper",
    description: "Create a small visual message to someone supportive, whether or not you send it.",
    need: "A way to approach connection without needing a long conversation.",
    steps: [
      "Think of one person, place, community, or memory that feels less isolating.",
      "Draw a simple postcard shape or message space.",
      "Add colors or symbols for what you wish they could understand.",
      "Write one sentence you might send, or keep it private.",
      "Notice whether you want to reach out now, later, or not today."
    ],
    source: "Reflects the role of social support described by cancer support organizations."
  },
  body: {
    title: "Gentle Body Letter",
    time: "6 minutes",
    energy: "Low energy",
    materials: "Canvas and note",
    description: "Draw or write a compassionate message to one part of the body.",
    need: "A kinder relationship with a body that may be hurting, changing, or tired.",
    steps: [
      "Choose one body area that wants attention, without judging it.",
      "Draw a color, shape, or boundary around that area symbolically.",
      "Write or imagine the words: I notice you.",
      "Add one mark that represents care, warmth, distance, or protection.",
      "Close by noting what kind of support your body may need next."
    ],
    source: "A supportive reflection activity, not medical guidance."
  },
  hope: {
    title: "Small Light Study",
    time: "5 minutes",
    energy: "Low energy",
    materials: "Canvas or paper",
    description: "Make a small image of something that still offers warmth, meaning, or steadiness.",
    need: "Space for hope that does not deny fear or difficulty.",
    steps: [
      "Choose a warm or steady color.",
      "Draw a small light, window, object, word, or shape.",
      "Let the rest of the page stay honest. It does not all need to become bright.",
      "Add one line showing how the light reaches you.",
      "Name one thing that can remain small and still matter."
    ],
    source: "Uses gentle meaning-making without pressuring positive thinking."
  }
};

const state = {
  currentEmotion: "anxiety",
  currentActivity: activities.anxiety,
  drawing: false
};

const views = document.querySelectorAll(".view");
const navTabs = document.querySelectorAll(".nav-tab");
const linkButtons = document.querySelectorAll("[data-view-link]");
const checkinForm = document.querySelector("#checkin-form");
const intensity = document.querySelector("#intensity");
const intensityOutput = document.querySelector("#intensity-output");
const activitySelect = document.querySelector("#activity-select");
const canvas = document.querySelector("#drawing-canvas");
const ctx = canvas.getContext("2d");

function showView(id) {
  views.forEach((view) => view.classList.toggle("is-visible", view.id === id));
  navTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function getFormData() {
  const formData = new FormData(checkinForm);
  return {
    emotion: formData.get("emotion") || "anxiety",
    intensity: Number(formData.get("intensity") || 3),
    energy: formData.get("energy") || "medium",
    stage: formData.get("stage") || "prefer not to say",
    diary: String(formData.get("diary") || "").trim(),
    needsSupport: document.querySelector("#needs-support").checked
  };
}

function detectSafetyNeed(data) {
  const riskWords = [
    "kill myself",
    "suicide",
    "self harm",
    "hurt myself",
    "not wake up",
    "end my life",
    "unsafe"
  ];
  const diary = data.diary.toLowerCase();
  return data.needsSupport || riskWords.some((word) => diary.includes(word));
}

function updateReflection(data) {
  const activity = activities[data.emotion] || activities.anxiety;
  state.currentEmotion = data.emotion;
  state.currentActivity = activity;

  if (detectSafetyNeed(data)) {
    document.querySelector("#reflection-summary").textContent =
      "Your check-in suggests this may be a moment for real-time human support rather than a solo activity.";
    document.querySelector("#need-text").textContent =
      "You deserve immediate support. Please contact emergency services, a crisis line, your care team, or a trusted person now.";
    document.querySelector("#context-text").textContent =
      "The support page is available from every screen. In the United States, 988 is available for suicidal thoughts or emotional crisis.";
    document.querySelector("#activity-title").textContent = "Support first";
    document.querySelector("#activity-description").textContent =
      "Creative reflection can wait. Your safety and connection with a real person matter more right now.";
    document.querySelector("#activity-meta").innerHTML = "<li>Human support recommended</li><li>No solo task required</li>";
    document.querySelector("#start-recommended").textContent = "Go to support";
    document.querySelector("#start-recommended").onclick = () => showView("support");
    document.querySelector("#meter-fill").style.width = "100%";
    return;
  }

  const energyText = data.energy === "low"
    ? "Because your energy is low, a short and simple version may be enough."
    : "You can keep this brief or spend more time if it feels supportive.";

  document.querySelector("#reflection-summary").textContent =
    `Your check-in suggests ${data.emotion} may be present today. This is not a diagnosis; it is a starting point for a gentle activity.`;
  document.querySelector("#need-text").textContent = activity.need;
  document.querySelector("#context-text").textContent =
    `Intensity ${data.intensity}/5. Energy: ${data.energy}. Stage: ${data.stage}. ${energyText}`;
  document.querySelector("#activity-title").textContent = activity.title;
  document.querySelector("#activity-description").textContent = activity.description;
  document.querySelector("#activity-meta").innerHTML = `
    <li>${activity.time}</li>
    <li>${activity.energy}</li>
    <li>${activity.materials}</li>
    <li>${activity.source}</li>
  `;
  document.querySelector("#start-recommended").textContent = "Start activity";
  document.querySelector("#start-recommended").onclick = () => {
    activitySelect.value = data.emotion;
    updateStudio(data.emotion);
    showView("studio");
  };
  document.querySelector("#meter-fill").style.width = `${Math.max(20, data.intensity * 20)}%`;
}

function updateStudio(emotion) {
  const activity = activities[emotion] || activities.anxiety;
  state.currentEmotion = emotion;
  state.currentActivity = activity;
  document.querySelector("#guide-title").textContent = activity.title;
  document.querySelector("#guide-time").textContent = activity.time;
  document.querySelector("#guide-steps").innerHTML = activity.steps.map((step) => `<li>${step}</li>`).join("");
}

function speakActivity(activity) {
  if (!("speechSynthesis" in window)) {
    alert("Audio guidance is not available in this browser.");
    return;
  }

  window.speechSynthesis.cancel();
  const text = `${activity.title}. ${activity.description}. ${activity.steps.join(" ")}`;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 0.95;
  window.speechSynthesis.speak(utterance);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function initializeCanvas() {
  ctx.fillStyle = "#fffdf8";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
}

function getCanvasPoint(event) {
  const rect = canvas.getBoundingClientRect();
  const pointer = event.touches ? event.touches[0] : event;
  return {
    x: ((pointer.clientX - rect.left) / rect.width) * canvas.width,
    y: ((pointer.clientY - rect.top) / rect.height) * canvas.height
  };
}

function startDrawing(event) {
  state.drawing = true;
  const point = getCanvasPoint(event);
  ctx.beginPath();
  ctx.moveTo(point.x, point.y);
}

function draw(event) {
  if (!state.drawing) return;
  event.preventDefault();
  const point = getCanvasPoint(event);
  ctx.strokeStyle = document.querySelector("#brush-color").value;
  ctx.lineWidth = Number(document.querySelector("#brush-size").value);
  ctx.lineTo(point.x, point.y);
  ctx.stroke();
}

function stopDrawing() {
  state.drawing = false;
}

function getSavedReflections() {
  try {
    return JSON.parse(localStorage.getItem("innerCanvasReflections") || "[]");
  } catch {
    return [];
  }
}

function setSavedReflections(reflections) {
  localStorage.setItem("innerCanvasReflections", JSON.stringify(reflections));
}

function saveReflection() {
  const note = document.querySelector("#closing-note").value.trim();
  const image = canvas.toDataURL("image/png");
  const saved = getSavedReflections();
  saved.unshift({
    id: Date.now(),
    title: state.currentActivity.title,
    emotion: state.currentEmotion,
    note,
    image,
    date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })
  });
  setSavedReflections(saved.slice(0, 12));
  renderReflections();
  showView("reflections");
}

function renderReflections() {
  const list = document.querySelector("#reflection-list");
  const saved = getSavedReflections();
  if (!saved.length) {
    list.innerHTML = `
      <div class="empty-state">
        <h2>No saved reflections yet</h2>
        <p>When you save an activity, it will appear here in this browser.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = saved.map((item) => `
    <article class="saved-item">
      <img src="${escapeHtml(item.image)}" alt="Saved canvas from ${escapeHtml(item.title)}">
      <div>
        <p class="tagline">${escapeHtml(item.date)} - ${escapeHtml(item.emotion)}</p>
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.note || "No written note saved. The image can be enough.")}</p>
      </div>
    </article>
  `).join("");
}

navTabs.forEach((tab) => {
  tab.addEventListener("click", () => showView(tab.dataset.view));
});

linkButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewLink));
});

intensity.addEventListener("input", () => {
  intensityOutput.textContent = intensity.value;
});

checkinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = getFormData();
  updateReflection(data);
  showView("reflection");
});

document.querySelector("#quick-activity").addEventListener("click", () => {
  const data = getFormData();
  activitySelect.value = data.emotion;
  updateStudio(data.emotion);
  showView("studio");
});

Object.entries(activities).forEach(([key, activity]) => {
  const option = document.createElement("option");
  option.value = key;
  option.textContent = activity.title;
  activitySelect.append(option);
});

activitySelect.addEventListener("change", () => updateStudio(activitySelect.value));

document.querySelector("#listen-recommended").addEventListener("click", () => speakActivity(state.currentActivity));
document.querySelector("#play-guide").addEventListener("click", () => speakActivity(state.currentActivity));
document.querySelector("#save-reflection").addEventListener("click", saveReflection);
document.querySelector("#clear-canvas").addEventListener("click", initializeCanvas);
document.querySelector("#clear-data").addEventListener("click", () => {
  localStorage.removeItem("innerCanvasReflections");
  renderReflections();
});

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mouseleave", stopDrawing);
canvas.addEventListener("touchstart", startDrawing, { passive: false });
canvas.addEventListener("touchmove", draw, { passive: false });
canvas.addEventListener("touchend", stopDrawing);

document.querySelector("#start-recommended").onclick = () => {
  activitySelect.value = state.currentEmotion;
  updateStudio(state.currentEmotion);
  showView("studio");
};

initializeCanvas();
updateStudio("anxiety");
renderReflections();
