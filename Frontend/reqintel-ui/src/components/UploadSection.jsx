function UploadSection() {
  return (
    <section className="upload-section">

      <h2>Upload Requirement</h2>

      <p>
        Upload your requirement document (PDF or DOCX)
        and start asking AI intelligent questions.
      </p>

      <div className="upload-box">

        <div className="upload-icon">
          ☁️
        </div>

        <h3>Drag & Drop PDF or DOCX</h3>

        <span>or</span>

        <button>
          Browse Files
        </button>

      </div>

      <small>
        Supports PDF • DOCX • Max 20MB
      </small>

    </section>
  );
}

export default UploadSection;