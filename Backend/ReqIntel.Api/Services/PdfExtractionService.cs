using UglyToad.PdfPig;

namespace ReqIntel.Api.Services;

public class PdfExtractionService
{
    public string ExtractText(Stream pdfStream)
    {
        using var document = PdfDocument.Open(pdfStream);

        var text = string.Empty;

        foreach (var page in document.GetPages())
        {
            text += page.Text + Environment.NewLine;
        }

        return text;
    }
}