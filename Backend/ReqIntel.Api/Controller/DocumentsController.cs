using Microsoft.AspNetCore.Mvc;
using ReqIntel.Api.Services;
using ReqIntel.Api.Data;
using ReqIntel.Api.Models;

namespace ReqIntel.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DocumentsController : ControllerBase
{
    private readonly PdfExtractionService _pdfExtractionService;
    private readonly ChunkingService _chunkingService;
    private readonly EmbeddingService _embeddingService;
   private readonly ReqIntelDbContext _dbContext;
  public DocumentsController(
    PdfExtractionService pdfExtractionService,
    ChunkingService chunkingService,
    EmbeddingService embeddingService,
    ReqIntelDbContext dbContext)
{
    _pdfExtractionService = pdfExtractionService;
    _chunkingService = chunkingService;
    _embeddingService = embeddingService;
    _dbContext = dbContext;
}

    [HttpPost("upload")]
    public async Task<IActionResult> UploadDocument(IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded.");

        using var stream = file.OpenReadStream();

       var extractedText = _pdfExtractionService.ExtractText(stream);

        var chunks = _chunkingService.ChunkText(extractedText);

        int chunkIndex = 0;

        foreach (var chunk in chunks)
        {
            var embedding = await _embeddingService.GenerateEmbeddingAsync(chunk);

            var documentChunk = new DocumentChunk
            {
                DocumentName = file.FileName,
                ChunkIndex = chunkIndex++,
                ChunkContent = chunk,
                Embedding = new Pgvector.Vector(embedding),
                CreatedAt = DateTime.UtcNow
            };

            _dbContext.DocumentChunks.Add(documentChunk);
        }

        await _dbContext.SaveChangesAsync();

        return Ok(new
        {
            Message = "Document processed successfully.",
            TotalChunks = chunks.Count
        });
    }
}