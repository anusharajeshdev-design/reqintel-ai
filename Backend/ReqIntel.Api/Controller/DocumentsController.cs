using Microsoft.AspNetCore.Mvc;

namespace ReqIntel.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DocumentsController : ControllerBase
{
    [HttpPost("upload")]
    public IActionResult UploadDocument(IFormFile file)
    {
        if (file == null || file.Length == 0)
            return BadRequest("No file uploaded.");

        return Ok(new
        {
            FileName = file.FileName,
            Size = file.Length,
            ContentType = file.ContentType
        });
    }
}