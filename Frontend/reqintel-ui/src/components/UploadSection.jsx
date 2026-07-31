import { useRef, useState } from "react";
import api from "../services/api";

function UploadSection() {
    const fileInputRef = useRef(null);

    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const uploadFile = async (file) => {
        const formData = new FormData();
        formData.append("file", file);

        try {
            setLoading(true);

            const response = await api.post(
                "/Documents/upload",
                formData
            );

            setMessage(response.data.message);
        }
        catch (error) {
            console.error(error);
            setMessage("Upload failed. Please try again.");
        }
        finally {
            setLoading(false);
        }
    };

    const handleFileSelect = async (event) => {
        const file = event.target.files[0];

        if (!file)
            return;

        setSelectedFile(file);

        await uploadFile(file);
    };

    return (
        <section className="upload-section">

            <h2>Upload Requirement</h2>

            <p>
                Upload your requirement document (PDF or DOCX)
                and start asking AI intelligent questions.
            </p>

            <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx"
                hidden
                onChange={handleFileSelect}
            />

            <div className="upload-box">

                <div className="upload-icon">
                    ☁️
                </div>

                <h3>
                    Drag & Drop PDF or DOCX
                </h3>

                <span>or</span>

                <button
                    onClick={() => fileInputRef.current.click()}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Browse Files"}
                </button>

                {selectedFile && (
                    <p>
                        📄 {selectedFile.name}
                    </p>
                )}

                {message && (
                    <p>
                        {message}
                    </p>
                )}

            </div>

            <small>
                Supports PDF • DOCX • Max 20MB
            </small>

        </section>
    );
}

export default UploadSection;