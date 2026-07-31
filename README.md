<img width="1467" height="799" alt="Screenshot 2026-07-31 at 5 04 03 PM" src="https://github.com/user-attachments/assets/572b8e7e-f538-4e4b-9a0e-634313866f05" /># 🤖 ReqIntel AI

<div align="center">

### AI-Powered Requirement Intelligence using Retrieval-Augmented Generation (RAG)

Upload requirement documents, automatically extract and index their contents using vector embeddings, and ask natural language questions to receive accurate, context-aware AI-generated answers.

Built with **ASP.NET Core**, **React**, **PostgreSQL + pgvector**, and **OpenAI**.

---

**Frontend:** https://your-vercel-url.vercel.app

**Backend API:** https://reqintel-ai.onrender.com

</div>

---

### Upload Document

![Upload](Screenshots/Upload.png)

### Ask AI

![Ask AI](Screenshots/AI.png)

# 📖 Overview

ReqIntel AI is an AI-powered Requirement Intelligence platform that enables users to upload software requirement documents in PDF format and interact with them using natural language.

Traditional document search relies on keyword matching, making it difficult to locate relevant information when users phrase questions differently from the original document. ReqIntel AI overcomes this limitation by implementing a Retrieval-Augmented Generation (RAG) architecture powered by vector embeddings.

When a document is uploaded, the application automatically extracts its contents, splits the text into meaningful chunks, converts each chunk into vector embeddings using OpenAI, and stores them inside a PostgreSQL database enhanced with the pgvector extension.

When a user asks a question, the application converts the question into an embedding, performs semantic similarity search against the stored vectors, retrieves the most relevant document sections, and provides an AI-generated answer grounded in the retrieved content.

This enables accurate, context-aware document understanding instead of simple keyword searching.

---

# 🚀 Key Features

## 📄 Intelligent PDF Processing

- Upload requirement documents in PDF format
- Automatic PDF text extraction
- Supports large technical documents
- Processes documents without manual preprocessing

---

## ✂️ Smart Text Chunking

Large documents are automatically divided into manageable text chunks before indexing.

Chunking improves:

- Embedding quality
- Retrieval accuracy
- AI response relevance
- Semantic search performance

---

## 🧠 OpenAI Embedding Generation

Each document chunk is converted into a high-dimensional vector representation using OpenAI Embeddings.

These embeddings capture the semantic meaning of the text rather than relying on exact keyword matching.

Benefits include:

- Semantic understanding
- Context-aware retrieval
- Better search quality
- Natural language question answering

---

## 🗄️ Vector Database (PostgreSQL + pgvector)

Instead of storing only plain text, ReqIntel AI stores vector embeddings inside PostgreSQL using the pgvector extension.

Each stored record contains:

- Document Name
- Chunk Index
- Chunk Content
- Vector Embedding
- Creation Timestamp

This enables high-performance similarity search directly inside PostgreSQL.

---

## 🔍 Semantic Vector Search

When a user asks a question:

1. The question is converted into an embedding.
2. PostgreSQL performs vector similarity search.
3. The most relevant document chunks are retrieved.
4. Retrieved context is passed to the language model.

Unlike traditional search engines, semantic search understands the meaning of the user's question.

---

## 🤖 Retrieval-Augmented Generation (RAG)

Instead of allowing the language model to answer purely from its training knowledge, ReqIntel AI provides relevant document context before generating a response.

The workflow is:

- User uploads document
- Document is indexed
- User asks a question
- Relevant chunks are retrieved
- AI generates an answer using retrieved context

This significantly improves:

- Accuracy
- Reliability
- Context awareness
- Reduction of hallucinations

---

# 🏗️ System Architecture

```
                        +--------------------+
                        |   React Frontend   |
                        +---------+----------+
                                  |
                                  |
                                  ▼
                    +----------------------------+
                    | ASP.NET Core Web API       |
                    +----------------------------+
                    |                            |
                    | PDF Extraction             |
                    | Text Chunking              |
                    | OpenAI Embeddings          |
                    | Vector Similarity Search   |
                    | Chat Service               |
                    +-------------+--------------+
                                  |
                                  ▼
                    +----------------------------+
                    | PostgreSQL + pgvector      |
                    | Vector Database            |
                    +-------------+--------------+
                                  |
                                  ▼
                           OpenAI GPT Model
```

---

# 🔄 End-to-End Workflow

## Step 1 — Upload Document

The user uploads a requirement specification PDF through the React application.

↓

## Step 2 — Extract Text

The backend extracts readable text using PdfPig.

↓

## Step 3 — Chunk the Content

The extracted text is split into smaller logical sections.

↓

## Step 4 — Generate Embeddings

Each chunk is converted into a vector embedding using OpenAI.

↓

## Step 5 — Store in PostgreSQL

Every chunk and its embedding are stored inside PostgreSQL using pgvector.

↓

## Step 6 — Ask Questions

The user asks a natural language question.

↓

## Step 7 — Retrieve Relevant Chunks

The application performs vector similarity search to identify the most relevant document sections.

↓

## Step 8 — Generate AI Response

Retrieved document context is provided to the language model, which generates an accurate answer based on the uploaded document.

---

# 💻 Technology Stack

## Frontend

- React
- Vite
- Axios
- HTML5
- CSS3

---

## Backend

- ASP.NET Core 10
- C#
- Entity Framework Core
- REST API

---

## Artificial Intelligence

- OpenAI GPT
- OpenAI Embeddings
- Retrieval-Augmented Generation (RAG)
- Semantic Search

---

## Database

- PostgreSQL
- pgvector Extension
- Neon Cloud Database

---

## Deployment

- Vercel (Frontend)
- Render (Backend)
- Neon PostgreSQL

---

# 📁 Project Structure

```
ReqIntelAI
│
├── Backend
│   │
│   ├── Controllers
│   ├── Services
│   ├── Models
│   ├── Data
│   ├── Migrations
│   └── Program.cs
│
├── Frontend
│   │
│   ├── Components
│   ├── Pages
│   ├── Services
│   ├── Assets
│   └── App.jsx
│
└── README.md
```

---

# ⚙️ Local Installation

## Clone Repository

git clone https://github.com/yourusername/reqintel-ai.git


---

## Backend

cd Backend/ReqIntel.Api

dotnet restore

dotnet run


---

## Frontend

cd Frontend/reqintel-ui

npm install

npm run dev


# 🌐 Deployment

Frontend

- Vercel

Backend

- Render

Database

- Neon PostgreSQL

---

# 📈 Future Enhancements

- JWT Authentication
- Multi-document support
- DOCX document processing
- Conversation history
- Source citations
- Streaming AI responses
- User document management
- Role-based access control
- Azure OpenAI support
- Hybrid Search (Keyword + Vector Search)

---

# 🎯 Learning Outcomes

This project demonstrates practical implementation of modern AI application development, including:

- Retrieval-Augmented Generation (RAG)
- Vector Databases
- OpenAI Embeddings
- Semantic Search
- ASP.NET Core API Development
- PostgreSQL + pgvector
- React Frontend Development
- Cloud Deployment
- Enterprise Application Architecture

---

# 👩‍💻 Author

## Anusha Rajesh

Senior Software Engineer | .NET Backend Developer | AI Application Developer

GitHub: https://github.com/anusharajeshdev-design

LinkedIn: https://www.linkedin.com/in/anusha-rajeshkannan-485a83155/

---

## ⭐ If you found this project useful, consider giving it a star!
