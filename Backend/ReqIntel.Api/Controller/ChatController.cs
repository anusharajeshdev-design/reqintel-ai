using Microsoft.AspNetCore.Mvc;
using ReqIntel.Api.Models;
using ReqIntel.Api.Services;

namespace ReqIntel.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly ChatService _chatService;

    public ChatController(ChatService chatService)
    {
        _chatService = chatService;
    }

    [HttpPost]
    public async Task<IActionResult> Chat(ChatRequest request)
    {
        var answer = await _chatService.AskQuestionAsync(request.Question);

        return Ok(new
        {
            Answer = answer
        });
    }
}