// Array of Objects containing language learning data
const languageLogs = [
  {
    lang: "Japanese",
    level: "N5",
    topic: "Grammar: は vs が Particles",
    date: "2026-08-10",
    notes: "Learned 20 new vocabulary words and clarified particle distinctions in sentence structure."
  },
  {
    lang: "French",
    level: "A2",
    topic: "Verbs with Passé Composé",
    date: "2026-08-12",
    notes: "Practiced auxiliary verb conjugation using être and avoir."
  },
  {
    lang: "English",
    level: "C1",
    topic: "Academic Writing & Essay Structure",
    date: "2026-08-14",
    notes: "Reviewed transitions and formal vocabulary for academic coursework."
  },
  {
    lang: "Italian",
    level: "A1",
    topic: "Essential Everyday Greetings",
    date: "2026-08-15",
    notes: "Mastered basic conversational greetings and phonetics."
  }
];

// Function 1: Render log cards exclusively using Template Literals
function renderLanguageCards(logs) {
  const container = document.querySelector("#posts-container");
  if (!container) return;

  container.innerHTML = ""; // Clear existing elements

  logs.forEach(log => {
    const cardHTML = `
      <article class="card">
        <div>
          <span class="stamp-tag">${log.lang} · LEVEL ${log.level}</span>
          <h3>${log.topic}</h3>
          <p>${log.notes}</p>
        </div>
        <small class="stamp-tag">DATE: ${log.date}</small>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

// Function 2: Filter logs using Array.prototype.filter
function filterByLanguage(selectedLang) {
  if (selectedLang === "all") {
    renderLanguageCards(languageLogs);
  } else {
    const filteredLogs = languageLogs.filter(item => item.lang.toLowerCase() === selectedLang.toLowerCase());
    renderLanguageCards(filteredLogs);
  }
}

// Function 3: Set up event listeners for filter buttons
function initFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  if (filterButtons.length === 0) return;

  filterButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove("active"));
      
      // Add active class to clicked button
      e.target.classList.add("active");

      const lang = e.target.getAttribute("data-lang");
      filterByLanguage(lang);
    });
  });
}

// Initialization on DOM Content Loaded
document.addEventListener("DOMContentLoaded", () => {
  renderLanguageCards(languageLogs);
  initFilterButtons();
});