using OpenAI;
using OpenAI.Chat;
using ReqIntel.Api.Models;
using System.Text;

namespace ReqIntel.Api.Services;

public class ChatService
{
    private readonly SearchService _searchService;
    private readonly ChatClient _chatClient;

    public ChatService(
        SearchService searchService,
        IConfiguration configuration)
    {
        _searchService = searchService;

        var apiKey = configuration["OpenAI:ApiKey"]
            ?? throw new Exception("OpenAI API Key not found.");

        _chatClient = new ChatClient(
            model: "gpt-4.1-mini",
            apiKey: apiKey);
    }

    public async Task<string> AskQuestionAsync(string question)
    {
        var chunks = await _searchService.SearchAsync(question);

        var context = new StringBuilder();

        foreach (var chunk in chunks)
        {
            context.AppendLine(chunk.ChunkContent);
            context.AppendLine();
        }

       var prompt = $"""
        You are ReqIntel AI, an AI-powered document intelligence assistant.

        Your purpose is to help users understand uploaded documents through Retrieval-Augmented Generation (RAG).

        Guidelines:

        1. Answer ONLY using the supplied document context.
        2. Never invent or infer information that is not explicitly supported by the document.
        3. If the answer cannot be found in the document, respond exactly:
        "I couldn't find that information in the uploaded document."
        4. Keep answers clear, accurate, and well organized.
        5. Use bullet points when listing multiple items.
        6. Preserve important technical details, names, dates, values, and terminology.
        7. When asked to summarize:
        - Focus on the key concepts.
        - Avoid unnecessary repetition.
        8. When asked to explain:
        - Simplify complex concepts.
        - Do not introduce information outside the document.
        9. When the document contains code, APIs, or technical specifications:
        - Explain them clearly.
        - Do not modify or invent missing details.

        Document Context:
        {context}

        User Question:
        {question}

        Provide the best possible answer using only the document context.
        """;

        var response = await _chatClient.CompleteChatAsync(prompt);

        return response.Value.Content[0].Text;
    }
}