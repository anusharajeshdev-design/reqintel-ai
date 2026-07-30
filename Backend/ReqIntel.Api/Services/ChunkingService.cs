namespace ReqIntel.Api.Services;

public class ChunkingService
{
    public List<string> ChunkText(string text, int chunkSize = 1000)
    {
        var chunks = new List<string>();

        if (string.IsNullOrWhiteSpace(text))
            return chunks;

        for (int i = 0; i < text.Length; i += chunkSize)
        {
            var length = Math.Min(chunkSize, text.Length - i);
            chunks.Add(text.Substring(i, length));
        }

        return chunks;
    }
}