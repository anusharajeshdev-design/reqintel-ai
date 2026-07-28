using Pgvector;

namespace ReqIntel.Api.Models;

public class DocumentChunk
{
    public int Id { get; set; }

    public string DocumentName { get; set; } = string.Empty;

    public int ChunkIndex { get; set; }

    public string ChunkContent { get; set; } = string.Empty;

    public Vector? Embedding { get; set; }

    public DateTime CreatedAt { get; set; }
}