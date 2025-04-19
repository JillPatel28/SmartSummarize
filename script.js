async function summarizeNote() {
    const note = document.getElementById("noteInput").value;
    const summaryBox = document.getElementById("summaryOutput");
  
    if (!note.trim()) {
      summaryBox.innerText = "Please enter some text to summarize.";
      return;
    }
  
    summaryBox.innerText = "Summarizing...";
  
    // --- Dummy AI summary logic ---
    // Replace this with real API call (e.g., OpenAI)
    setTimeout(() => {
      const fakeSummary = note.length > 100
        ? note.slice(0, 100) + "..."
        : "This note is too short to summarize. Try adding more content.";
  
      summaryBox.innerText = fakeSummary;
    }, 1000);
  }