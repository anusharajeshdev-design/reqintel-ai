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
            You are an AI assistant.

            Answer ONLY using the provided document context.

            If the answer is not present, say:
            "I couldn't find that information in the uploaded document."

            Document Context:
            {context}

            Question:
            {question}
            """;

        var response = await _chatClient.CompleteChatAsync(prompt);

        return response.Value.Content[0].Text;
    }
}