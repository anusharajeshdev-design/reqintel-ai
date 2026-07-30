using Microsoft.EntityFrameworkCore;
using Pgvector;
using ReqIntel.Api.Data;
using ReqIntel.Api.Models;
using Pgvector.EntityFrameworkCore;

namespace ReqIntel.Api.Services;

public class SearchService
{
    private readonly ReqIntelDbContext _dbContext;
    private readonly EmbeddingService _embeddingService;

    public SearchService(
        ReqIntelDbContext dbContext,
        EmbeddingService embeddingService)
    {
        _dbContext = dbContext;
        _embeddingService = embeddingService;
    }

    public async Task<List<DocumentChunk>> SearchAsync(
        string question,
        int topK = 3)
    {
        var embedding = await _embeddingService.GenerateEmbeddingAsync(question);

        var vector = new Vector(embedding);

        return await _dbContext.DocumentChunks
            .OrderBy(c => c.Embedding!.CosineDistance(vector))
            .Take(topK)
            .ToListAsync();
    }
}