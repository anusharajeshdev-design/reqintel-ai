function ChatSection() {
  return (
    <section className="chat-section">

      <div className="chat-header">

        <h2>💬 AI Assistant</h2>

        <button className="clear-btn">
          Clear Chat
        </button>

      </div>

      <div className="chat-window">

        <div className="ai-message">

          <div className="message-header">
            🤖 ReqIntel AI
          </div>

          <p>
            Hello! 👋
          </p>

          <p>
            Upload a requirement document and I'll help you identify:
          </p>

          <ul className="feature-list">
            <li>Backend Changes</li>
            <li>Database Changes</li>
            <li>API Changes</li>
            <li>UI Changes</li>
            <li>Generate Test Cases</li>
            <li>Find Requirement Gaps</li>
          </ul>

        </div>

      </div>

      <div className="chat-input">

        <input
          type="text"
          placeholder="Ask about your requirement..."
        />

        <button>
          Ask AI
        </button>

      </div>

    </section>
  );
}

export default ChatSection;