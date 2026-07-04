function SuggestedQuestions() {
  const suggestions = [
    "📝 Summarize",
    "⚙️ Backend",
    "🌐 APIs",
    "🗄️ Database",
    "🎨 UI",
    "🧪 Test Cases",
    "🔍 Find Gaps",
    "❓ BA Questions"
  ];

  return (
    <div className="suggestions-section">

      <div className="suggestion-title">
        ✨ Try asking...
      </div>

      <div className="suggestions-grid">
        {suggestions.map((item, index) => (
          <button
            key={index}
            className="suggestion-chip"
          >
            {item}
          </button>
        ))}
      </div>

    </div>
  );
}

export default SuggestedQuestions;