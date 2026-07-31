<div align="center">

![ReqIntel-AI](Screenshots/ReqIntel-AI.png)

# 🤖 ReqIntel AI

## AI-Powered Document Intelligence using Retrieval-Augmented Generation (RAG)

Transform any PDF document into an intelligent, searchable knowledge base. Upload a document, ask questions in natural language, and receive accurate, context-aware answers powered by semantic search, vector embeddings, and Large Language Models.

Built with **ASP.NET Core 10**, **React**, **OpenAI**, **PostgreSQL + pgvector**, **Render**, **Vercel**, and **Neon**.

<br/>

🌐 **Live Application:** https://reqintel-ai.vercel.app

⚡ **Backend API:** https://reqintel-ai.onrender.com

</div>

---

# 📸 Application Preview

## Home Page

![Home](Screenshots/Home.png)

---

## Upload Document

![Upload](Screenshots/Upload.png)

---

## AI Assistant

![AI](Screenshots/AI.png)

---

# 📖 Overview

ReqIntel AI is a full-stack AI-powered document intelligence platform that enables users to upload PDF documents and interact with them using natural language.

Instead of manually reading lengthy documents or relying on traditional keyword searches, ReqIntel AI understands the meaning behind a user's question through **Retrieval-Augmented Generation (RAG)** and **semantic vector search**.

After a document is uploaded, the application automatically extracts the text, intelligently divides it into smaller chunks, generates vector embeddings using OpenAI, and stores those embeddings in PostgreSQL using the **pgvector** extension.

Whenever a user asks a question, the application converts the question into an embedding, performs semantic similarity search across the indexed document, retrieves the most relevant sections, and sends only the retrieved context to the Large Language Model before generating the final answer.

Because responses are generated using the uploaded document as context, the AI provides more accurate, reliable, and context-aware answers while significantly reducing hallucinations.

ReqIntel AI is designed to work with any text-based PDF document including:

- Technical Documentation
- Software Requirement Specifications
- User Manuals
- Research Papers
- Business Reports
- Standard Operating Procedures (SOPs)
- Company Policies
- Contracts
- Whitepapers
- Training Documents
- Academic Material
- Knowledge Base Documents

Rather than searching documents using keywords, users can simply ask questions naturally, making large collections of documents easier to understand and navigate.

---

# ✨ Features

- 📄 Upload any text-based PDF document
- 🤖 Ask questions using natural language
- 📑 Automatic PDF text extraction
- ✂️ Intelligent document chunking
- 🧠 OpenAI Embedding Generation
- 🔍 Semantic Vector Search
- 🗄️ PostgreSQL + pgvector Vector Database
- 💬 Context-aware AI Responses
- ⚡ Fast document indexing
- 🌐 Modern responsive React UI
- ☁️ Cloud deployment with Render, Vercel and Neon
- 🏗️ Enterprise-ready ASP.NET Core Web API

---

# 🏗️ System Architecture

```text
                     ┌──────────────────────────┐
                     │      React Frontend      │
                     │          (Vite)          │
                     └─────────────┬────────────┘
                                   │
                            HTTP REST APIs
                                   │
                                   ▼
              ┌────────────────────────────────────┐
              │       ASP.NET Core Web API         │
              ├────────────────────────────────────┤
              │                                    │
              │  • PDF Processing                  │
              │  • Text Extraction                 │
              │  • Intelligent Chunking            │
              │  • Embedding Generation            │
              │  • Semantic Vector Search          │
              │  • AI Chat Service                 │
              │                                    │
              └──────────────┬─────────────────────┘
                             │
             ┌───────────────┴─────────────────┐
             │                                 │
             ▼                                 ▼
    PostgreSQL + pgvector               OpenAI API
      Vector Database          GPT + Embedding Models
             │                                 │
             └───────────────┬─────────────────┘
                             │
                             ▼
                AI-Powered Contextual Response
```

---

# 🔄 Retrieval-Augmented Generation (RAG) Workflow

```text
                  Upload PDF
                      │
                      ▼
             Extract Document Text
                      │
                      ▼
          Split Document into Chunks
                      │
                      ▼
       Generate OpenAI Vector Embeddings
                      │
                      ▼
      Store Embeddings inside PostgreSQL
             using pgvector Extension
                      │
                      ▼
            User Asks a Question
                      │
                      ▼
       Generate Question Embedding
                      │
                      ▼
         Perform Semantic Search
                      │
                      ▼
      Retrieve Most Relevant Chunks
                      │
                      ▼
   Send Retrieved Context + User Question
              to OpenAI GPT Model
                      │
                      ▼
      Generate Accurate AI Response
```

---

# ⚙️ How It Works

## 1. Upload a Document

Users upload any text-based PDF document through the web application.

The platform automatically accepts documents such as technical documentation, research papers, software requirement specifications, user manuals, contracts, policies, reports, and other knowledge-rich documents.

---

## 2. Extract Text

The backend extracts readable text from the uploaded PDF using the PdfPig library.

---

## 3. Intelligent Chunking

The extracted content is divided into smaller logical chunks.

Chunking improves embedding quality and allows the retrieval engine to locate precise sections instead of searching an entire document.

---

## 4. Generate Embeddings

Each text chunk is converted into a high-dimensional vector representation using OpenAI Embeddings.

Unlike traditional indexing, embeddings capture semantic meaning instead of exact keywords.

---

## 5. Store Vectors

Each chunk together with its embedding is stored inside PostgreSQL using the pgvector extension.

Stored information includes:

- Document Name
- Chunk Number
- Chunk Content
- Vector Embedding
- Creation Timestamp

---

## 6. Ask Questions

Users ask questions naturally through the AI Assistant.

Example questions include:

- Summarize this document.
- Explain the architecture.
- What technologies are discussed?
- What are the key findings?
- What security recommendations are mentioned?
- List the deployment steps.
- What APIs are described?
- Explain this section in simple terms.

---

## 7. Semantic Retrieval

The user's question is converted into another embedding.

The application performs semantic similarity search against the stored document vectors and retrieves the most relevant document chunks.

Unlike keyword search, semantic search understands the meaning and intent behind the user's question.

---

## 8. Generate AI Response

The retrieved document context and user question are sent to the OpenAI GPT model.

Because the model answers using retrieved document context instead of relying solely on pretrained knowledge, responses remain accurate, relevant, and grounded in the uploaded document.

---

# 💻 Technology Stack

| Category | Technologies |
|------------|-------------|
| Frontend | React, Vite, Axios |
| Backend | ASP.NET Core 10, C# |
| AI | OpenAI GPT, OpenAI Embeddings |
| Database | PostgreSQL, pgvector |
| ORM | Entity Framework Core |
| Cloud | Render, Vercel, Neon |
| PDF Processing | PdfPig |

---

# 📂 Project Structure

```text
ReqIntelAI
│
├── Backend
│   ├── Controllers
│   ├── Services
│   ├── Models
│   ├── Data
│   ├── DTOs
│   ├── Properties
│   ├── Dockerfile
│   ├── Program.cs
│   └── appsettings.json
│
├── Frontend
│   ├── src
│   │   ├── Components
│   │   ├── Services
│   │   ├── Assets
│   │   └── App.jsx
│   │
│   └── public
│
├── Screenshots
│
└── README.md
```

---

# 🚀 Running the Project Locally

## Clone Repository

```bash
git clone https://github.com/anusharajeshdev-design/reqintel-ai.git

cd reqintel-ai
```

---

## Backend

```bash
cd Backend/ReqIntel.Api

dotnet restore

dotnet run
```

---

## Frontend

```bash
cd Frontend/reqintel-ui

npm install

npm run dev
```

---

# ☁️ Cloud Deployment

| Component | Platform |
|------------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Neon PostgreSQL |

---

# 🚀 Future Enhancements

- Authentication & Authorization
- DOCX Document Support
- Multiple Document Collections
- Chat History
- Source Citations
- Streaming AI Responses
- Azure OpenAI Integration
- Hybrid Search (Keyword + Vector Search)
- Role-Based Access Control
- Conversation Memory

---

# 👩‍💻 Author

## Anusha Rajesh

**Senior Software Engineer | .NET Backend Developer | AI Application Developer**

GitHub

https://github.com/anusharajeshdev-design

LinkedIn

https://www.linkedin.com/in/anusha-rajeshkannan-485a83155/

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.

It helps others discover the project and motivates future improvements.

---