import { useState } from "react";
import api from "../services/api";

function ChatSection() {
    const welcomeMessage = {
        sender: "ai",
        text: `Hello! 👋

Upload a requirement document and ask me anything.

I can help you with:
• Requirement Summary
• Backend Changes
• Database Changes
• API Changes
• UI Changes
• Test Cases
• Requirement Gaps`
    };

    const [messages, setMessages] = useState([welcomeMessage]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);

    const askQuestion = async () => {
        if (!question.trim() || loading)
            return;

        const userQuestion = question.trim();

        setMessages(prev => [
            ...prev,
            {
                sender: "user",
                text: userQuestion
            }
        ]);

        setQuestion("");
        setLoading(true);

        try {

            const response = await api.post("/Chat", {
                question: userQuestion
            });

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: response.data.answer
                }
            ]);

        }
        catch (error) {

            console.error(error);

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Unable to process your request. Please try again."
                }
            ]);

        }
        finally {
            setLoading(false);
        }
    };

    const clearChat = () => {
        setMessages([welcomeMessage]);
        setQuestion("");
    };

    return (
        <section className="chat-section">

            <div className="chat-header">
                <h2>💬 AI Assistant</h2>

                <button
                    className="clear-btn"
                    onClick={clearChat}
                >
                    Clear Chat
                </button>
            </div>

            <div className="chat-window">

                {messages.map((message, index) => (

                    <div
                        key={index}
                        className={
                            message.sender === "user"
                                ? "user-message"
                                : "ai-message"
                        }
                    >
                        <div className="message-header">
                            {message.sender === "user"
                                ? "🧑 You"
                                : "🤖 ReqIntel AI"}
                        </div>

                        <p style={{ whiteSpace: "pre-line" }}>
                            {message.text}
                        </p>
                    </div>

                ))}

                {loading && (

                    <div className="ai-message">

                        <div className="message-header">
                            🤖 ReqIntel AI
                        </div>

                        <p>Thinking...</p>

                    </div>

                )}

            </div>

            <div className="chat-input">

                <input
                    type="text"
                    placeholder="Ask about your requirement..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            askQuestion();
                        }
                    }}
                />

                <button
                    onClick={askQuestion}
                    disabled={loading}
                >
                    {loading ? "Thinking..." : "Ask AI"}
                </button>

            </div>

        </section>
    );
}

export default ChatSection;