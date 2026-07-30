using OpenAI;
using OpenAI.Embeddings;

namespace ReqIntel.Api.Services;

public class EmbeddingService
{
    private readonly EmbeddingClient _embeddingClient;

    public EmbeddingService(IConfiguration configuration)
    {
        var apiKey = configuration["OpenAI:ApiKey"]
            ?? throw new Exception("OpenAI API Key not found.");

        _embeddingClient = new EmbeddingClient(
            model: "text-embedding-3-small",
            apiKey: apiKey);
    }

    public async Task<float[]> GenerateEmbeddingAsync(string text)
    {
        var result = await _embeddingClient.GenerateEmbeddingAsync(text);

        return result.Value.ToFloats().ToArray();
    }
}