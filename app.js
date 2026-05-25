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

const resourcesByStage = {
  "newly diagnosed": [
    {
      organization: "National Cancer Institute",
      title: "Coping with Cancer",
      description: "Practical guidance for managing fear, information overload, and emotional uncertainty after diagnosis.",
      href: "https://www.cancer.gov/about-cancer/coping"
    },
    {
      organization: "American Cancer Society",
      title: "Understanding Psychosocial Support",
      description: "How counseling, support groups, and social services can help people newly diagnosed with cancer.",
      href: "https://www.cancer.org/cancer/survivorship/coping/understanding-psychosocial-support-services.html"
    }
  ],
  "in treatment": [
    {
      organization: "National Cancer Institute",
      title: "Support During Treatment",
      description: "Coping with side effects, managing fatigue, and staying connected while receiving treatment.",
      href: "https://www.cancer.gov/about-cancer/coping"
    },
    {
      organization: "American Cancer Society",
      title: "Managing Distress",
      description: "Support for emotional changes and stress during active cancer treatment.",
      href: "https://www.cancer.org/cancer/managing-cancer/side-effects/emotional-mood-changes/distress/managing-distress.html"
    }
  ],
  "after treatment": [
    {
      organization: "National Cancer Institute",
      title: "Adjusting After Treatment",
      description: "Resources for coping with recovery anxiety, follow-up care, and changes in identity.",
      href: "https://www.cancer.gov/about-cancer/coping/feelings"
    },
    {
      organization: "American Cancer Society",
      title: "Survivorship Support",
      description: "Practical tips for life after active cancer treatment and managing scan-related worry.",
      href: "https://www.cancer.org/cancer/survivorship/coping.html"
    }
  ],
  "scan waiting": [
    {
      organization: "Cancer Support Community",
      title: "Managing Waiting Periods",
      description: "Tools for handling uncertainty and scan-related anxiety while you wait for results.",
      href: "https://www.cancersupportcommunity.org/"
    },
    {
      organization: "National Cancer Institute",
      title: "Emotions and Cancer",
      description: "Information about normal emotional responses to scans, follow-up, and monitoring.",
      href: "https://www.cancer.gov/about-cancer/coping/feelings"
    }
  ],
  "recurrence or metastatic disease": [
    {
      organization: "American Cancer Society",
      title: "Living with Advanced Cancer",
      description: "Support resources for people navigating recurrence or metastatic illness.",
      href: "https://www.cancer.org/cancer.html"
    },
    {
      organization: "Cancer.Net",
      title: "Coping with a Recurrence",
      description: "Emotional support and practical tips for cancer recurrence and ongoing treatment.",
      href: "https://www.cancer.net/"
    }
  ],
  "transitioning off treatment": [
    {
      organization: "National Cancer Institute",
      title: "Life After Treatment",
      description: "Guidance on rebuilding routine, dealing with uncertain recovery, and seeking support.",
      href: "https://www.cancer.gov/about-cancer/coping"
    },
    {
      organization: "American Cancer Society",
      title: "Returning to Everyday Life",
      description: "Practical advice for the transition period after treatment ends.",
      href: "https://www.cancer.org/cancer/survivorship.html"
    }
  ],
  "end of life": [
    {
      organization: "National Cancer Institute",
      title: "End-of-Life Support",
      description: "Information about comfort care, family conversations, and emotional support during later stages.",
      href: "https://www.cancer.gov/about-cancer/coping"
    },
    {
      organization: "American Cancer Society",
      title: "Support for Patients and Caregivers",
      description: "Practical and emotional support resources for people nearing end of life.",
      href: "https://www.cancer.org/"
    }
  ],
  default: [
    {
      organization: "National Cancer Institute",
      title: "Emotions and Cancer",
      description: "Information about common emotional responses and ways to cope.",
      href: "https://www.cancer.gov/about-cancer/coping/feelings"
    },
    {
      organization: "American Cancer Society",
      title: "Managing Distress",
      description: "Guidance on distress, coping, and when to reach out for help.",
      href: "https://www.cancer.org/cancer/managing-cancer/side-effects/emotional-mood-changes/distress/managing-distress.html"
    }
  ]
};

const state = {
  currentEmotion: "anxiety",
  currentActivity: activities.anxiety,
  profile: null,
  entries: [],
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
const signupForm = document.querySelector("#signup-form");
const loginForm = document.querySelector("#login-form");
const profileForm = document.querySelector("#profile-form");
const profileContext = document.querySelector("#profile-context");
const welcomeGreeting = document.querySelector("#welcome-greeting");
const resourceList = document.querySelector("#resource-list");
const trendSummary = document.querySelector("#trend-summary");

function getProfile() {
  return JSON.parse(localStorage.getItem("innerCanvasProfile") || "null");
}

function setProfile(profile) {
  localStorage.setItem("innerCanvasProfile", JSON.stringify(profile));
  state.profile = profile;
}

function clearProfile() {
  localStorage.removeItem("innerCanvasProfile");
  state.profile = null;
}

function getDiaryEntries() {
  return JSON.parse(localStorage.getItem("innerCanvasDiary") || "[]");
}

function setDiaryEntries(entries) {
  localStorage.setItem("innerCanvasDiary", JSON.stringify(entries));
  state.entries = entries;
}

function addDiaryEntry(entry) {
  const entries = getDiaryEntries();
  entries.unshift(entry);
  setDiaryEntries(entries.slice(0, 14));
}

function formatDate(value) {
  return new Date(value).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function updateProfileUI() {
  const profile = state.profile;

  if (!profile) {
    welcomeGreeting.textContent = "Welcome to Inner Canvas. Start with the profile tab so the app can tailor support to you.";
    profileContext.textContent = "Complete sign-up to personalize your recommendations.";
    return;
  }

  welcomeGreeting.textContent = `Welcome back. Support will be shaped by ${profile.cancerType}, age ${profile.ageRange}, and ${profile.stage}.`;
  profileContext.textContent = `Profile: ${profile.cancerType} • ${profile.ageRange} • ${profile.stage}. Update anytime in Profile.`;

  document.querySelector("#profile-email").value = profile.email || "";
  document.querySelector("#profile-cancerType").value = profile.cancerType || "";
  document.querySelector("#profile-ageRange").value = profile.ageRange || "";
  document.querySelector("#profile-stage").value = profile.stage || "prefer not to say";
  const checkinStage = document.querySelector("#stage");
  if (checkinStage) {
    checkinStage.value = profile.stage || "prefer not to say";
  }
}

function computeTrend(entries) {
  const recent = entries.slice(0, 7);

  if (!recent.length) {
    return "No diary entries yet. Your first entry will help the app learn your emotional pattern.";
  }

  const count = recent.reduce((acc, entry) => {
    acc[entry.emotion] = (acc[entry.emotion] || 0) + 1;
    return acc;
  }, {});
  const sorted = Object.entries(count).sort((a, b) => b[1] - a[1]);
  const topEmotion = sorted[0][0];
  const trend = `In your last ${recent.length} entries, ${topEmotion} appeared most often.`;

  const recentSlice = recent.slice(0, 3).map((entry) => entry.emotion);
  const earlierSlice = recent.slice(-3).map((entry) => entry.emotion);

  if (recentSlice.filter((e) => e === topEmotion).length > earlierSlice.filter((e) => e === topEmotion).length) {
    return `Your most recent entries show more ${topEmotion} than earlier this week. ${trend}`;
  }

  return `${trend} This can help guide what may feel most supportive.`;
}

function buildResourceCards(profile) {
  const stage = (profile && profile.stage) || "default";
  return resourcesByStage[stage] || resourcesByStage.default;
}

function renderResources() {
  if (!resourceList) return;

  if (!state.profile) {
    resourceList.innerHTML = `
      <article class="resource-card">
        <p class="tagline">Personalized resources</p>
        <h2>Create a profile</h2>
        <p>Sign up and complete your profile to see resources matched to your current cancer journey stage.</p>
      </article>
    `;
    return;
  }

  const cards = buildResourceCards(state.profile).map((resource) => `
    <article class="resource-card">
      <p class="tagline">${escapeHtml(resource.organization)}</p>
      <h2>${escapeHtml(resource.title)}</h2>
      <p>${escapeHtml(resource.description)}</p>
      <a href="${escapeHtml(resource.href)}" target="_blank" rel="noreferrer">Open source</a>
    </article>
  `);

  resourceList.innerHTML = cards.join("");
}

function getFormData() {
  const formData = new FormData(checkinForm);
  const profile = state.profile || {};

  return {
    emotion: formData.get("emotion") || "anxiety",
    intensity: Number(formData.get("intensity") || 3),
    energy: formData.get("energy") || "medium",
    stage: formData.get("stage") || profile.stage || "prefer not to say",
    diary: String(formData.get("diary") || "").trim(),
    needsSupport: document.querySelector("#needs-support").checked,
    cancerType: profile.cancerType || "Unknown",
    ageRange: profile.ageRange || "Unknown"
  };
}

function saveDiaryEntry(data) {
  const entry = {
    id: Date.now(),
    date: new Date().toISOString(),
    emotion: data.emotion,
    intensity: data.intensity,
    energy: data.energy,
    stage: data.stage,
    diary: data.diary,
    cancerType: data.cancerType,
    ageRange: data.ageRange
  };
  addDiaryEntry(entry);
}

function getActivityRecommendation(data) {
  let activity = activities[data.emotion] || activities.anxiety;

  if (data.stage === "end of life" && data.emotion === "uncertainty") {
    activity = activities.body;
  }

  if (data.stage === "after treatment" && data.emotion === "uncertainty") {
    activity = activities.uncertainty;
  }

  if (data.stage === "in treatment" && data.emotion === "body") {
    activity = activities.body;
  }

  return activity;
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
  saveDiaryEntry(data);
  const activity = getActivityRecommendation(data);
  state.currentEmotion = data.emotion;
  state.currentActivity = activity;

  if (detectSafetyNeed(data)) {
    document.querySelector("#reflection-summary").textContent =
      "Your check-in suggests this may be a moment for real-time human support rather than a solo activity.";
    document.querySelector("#need-text").textContent =
      "You deserve immediate support. Please contact emergency services, a crisis line, your care team, or a trusted person now.";
    document.querySelector("#context-text").textContent =
      "The support page is available from every screen. In the United States, 988 is available for suicidal thoughts or emotional crisis.";
    document.querySelector("#trend-summary").textContent = computeTrend(getDiaryEntries());
    document.querySelector("#activity-title").textContent = "Support first";
    document.querySelector("#activity-description").textContent =
      "Creative reflection can wait. Your safety and connection with a real person matter more right now.";
    document.querySelector("#activity-meta").innerHTML = "<li>Human support recommended</li><li>No solo task required</li>";
    document.querySelector("#start-recommended").textContent = "Go to support";
    document.querySelector("#start-recommended").onclick = () => showView("support");
    document.querySelector("#meter-fill").style.width = "100%";
  } else {
    const energyText = data.energy === "low"
      ? "Because your energy is low, a short and simple version may be enough."
      : "You can keep this brief or spend more time if it feels supportive.";
    document.querySelector("#reflection-summary").textContent =
      `Your check-in suggests ${data.emotion} may be present today. This is not a diagnosis; it is a starting point for a gentle activity.`;
    document.querySelector("#need-text").textContent = activity.need;
    document.querySelector("#context-text").textContent =
      `Intensity ${data.intensity}/5. Energy: ${data.energy}. Stage: ${data.stage}. ${energyText}`;
    document.querySelector("#trend-summary").textContent = computeTrend(getDiaryEntries());
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
  renderResources();
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
    date: formatDate(new Date())
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

function showView(id) {
  if (!state.profile && id !== "auth" && id !== "support") {
    id = "auth";
  }
  views.forEach((view) => view.classList.toggle("is-visible", view.id === id));
  navTabs.forEach((tab) => tab.classList.toggle("is-active", tab.dataset.view === id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function handleSignup(event) {
  event.preventDefault();
  const formData = new FormData(signupForm);
  const profile = {
    email: String(formData.get("email") || "").trim().toLowerCase(),
    cancerType: String(formData.get("cancerType") || "").trim(),
    ageRange: String(formData.get("ageRange") || "").trim(),
    stage: String(formData.get("stage") || "prefer not to say").trim()
  };
  if (!profile.email || !profile.cancerType || !profile.ageRange) {
    alert("Please complete every field to sign up.");
    return;
  }
  setProfile(profile);
  updateProfileUI();
  renderResources();
  showView("home");
}

function handleLogin(event) {
  event.preventDefault();
  const formData = new FormData(loginForm);
  const email = String(formData.get("email") || "").trim().toLowerCase();
  const profile = getProfile();
  if (!profile || profile.email !== email) {
    alert("No profile found for that email. Please sign up first.");
    return;
  }
  state.profile = profile;
  updateProfileUI();
  renderResources();
  showView("home");
}

function handleProfileUpdate(event) {
  event.preventDefault();
  const formData = new FormData(profileForm);
  const updatedProfile = {
    email: String(formData.get("email") || "").trim().toLowerCase(),
    cancerType: String(formData.get("cancerType") || "").trim(),
    ageRange: String(formData.get("ageRange") || "").trim(),
    stage: String(formData.get("stage") || "prefer not to say").trim()
  };
  if (!updatedProfile.email || !updatedProfile.cancerType || !updatedProfile.ageRange) {
    alert("Please complete every field to update your profile.");
    return;
  }
  setProfile(updatedProfile);
  updateProfileUI();
  renderResources();
  alert("Profile updated.");
}

function handleLogout() {
  clearProfile();
  showView("auth");
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

signupForm.addEventListener("submit", handleSignup);
loginForm.addEventListener("submit", handleLogin);
profileForm.addEventListener("submit", handleProfileUpdate);
document.querySelector("#logout-button").addEventListener("click", handleLogout);

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
  localStorage.removeItem("innerCanvasDiary");
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

function init() {
  state.profile = getProfile();
  state.entries = getDiaryEntries();
  updateProfileUI();
  renderResources();
  if (state.profile) {
    showView("home");
  } else {
    showView("auth");
  }
  initializeCanvas();
  updateStudio(state.currentEmotion);
  renderReflections();
}

init();
