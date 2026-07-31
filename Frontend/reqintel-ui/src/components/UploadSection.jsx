import { useRef, useState } from "react";
import api from "../services/api";

function UploadSection() {
    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [dragging, setDragging] = useState(false);

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);
            setMessage("");

            const response = await api.post(
                "/Documents/upload",
                formData
            );

            setMessage(response.data.message);
        } catch (error) {
            console.error(error);
            setMessage("Upload failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];

        if (!file) return;

        setSelectedFile(file);
        await uploadFile(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDrop = async (e) => {
        e.preventDefault();
        setDragging(false);

        const file = e.dataTransfer.files[0];

        if (!file) return;

        setSelectedFile(file);
        await uploadFile(file);
    };

    return (
        <section className="upload-section">

            <h2>Upload Document</h2>

            <p>
                Upload any PDF document and let AI analyze its content.
                Ask questions, generate summaries, and discover key insights.
            </p>

            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                hidden
                onChange={handleFileSelect}
            />

            <div
                className={`upload-box ${dragging ? "dragging" : ""}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >

                <div className="upload-icon">
                    ☁️
                </div>

                <h3>
                    Drag & Drop Your Document
                </h3>

                <span>or</span>

                <button
                    onClick={() => fileInputRef.current.click()}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Browse Files"}
                </button>

                {selectedFile && (
                    <p style={{ marginTop: "20px" }}>
                        📄 {selectedFile.name}
                    </p>
                )}

                {message && (
                    <p style={{ marginTop: "10px" }}>
                        {message}
                    </p>
                )}

            </div>

            <small>
                Supports PDF • Max 20MB
            </small>

        </section>
    );
}

export default UploadSection;