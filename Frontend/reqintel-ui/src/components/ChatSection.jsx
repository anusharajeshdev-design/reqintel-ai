import { useState } from "react";
import api from "../services/api";

function ChatSection() {

    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(false);

    const features = [
        {
            icon: "📄",
            title: "Summarize",
            description: "Generate concise document summaries."
        },
        {
            icon: "❓",
            title: "Ask Questions",
            description: "Ask anything in natural language."
        },
        {
            icon: "🔍",
            title: "Extract Insights",
            description: "Identify important information instantly."
        },
        {
            icon: "⭐",
            title: "Key Sections",
            description: "Locate relevant sections quickly."
        }
    ];

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
        catch {

            setMessages(prev => [
                ...prev,
                {
                    sender: "ai",
                    text: "Unable to process your request."
                }
            ]);

        }
        finally {

            setLoading(false);

        }

    };

    const clearChat = () => {

        setMessages([]);

    };

    return (

        <section className="chat-section">

            <div className="chat-header">

                <h2>AI Assistant</h2>

                {messages.length > 0 && (

                    <button
                        className="clear-btn"
                        onClick={clearChat}
                    >
                        Clear Chat
                    </button>

                )}

            </div>

            <div className="chat-window">

                {messages.length === 0 ? (

                    <div className="welcome-screen">

                        <h2>👋 Welcome to ReqIntel AI</h2>

                        <p>
                            Upload any PDF document and ask questions in natural language.
                        </p>

                        <div className="feature-grid">

                            {features.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="feature-card"
                                >

                                    <div className="feature-icon">
                                        {feature.icon}
                                    </div>

                                    <h3>{feature.title}</h3>

                                    <p>{feature.description}</p>

                                </div>

                            ))}

                        </div>

                        <small>
                            Upload a document to start chatting with AI.
                        </small>

                    </div>

                ) : (

                    messages.map((message, index) => (

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
                                    ? "You"
                                    : "ReqIntel AI"}

                            </div>

                            <p>{message.text}</p>

                        </div>

                    ))

                )}

                {loading && (

                    <div className="ai-message">

                        <div className="message-header">
                            ReqIntel AI
                        </div>

                        <p>Thinking...</p>

                    </div>

                )}

            </div>

            <div className="chat-input">

                <input
                    type="text"
                    placeholder="Ask anything about your document..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && askQuestion()}
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