using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.DTOs;
using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ContactController : ControllerBase
{
    private readonly IContactService _contactService;

    public ContactController(IContactService contactService)
    {
        _contactService = contactService;
    }

    [HttpPost]
    public async Task<IActionResult> SendMessage(ContactMessageDto dto)
    {
        var message = new ContactMessage
        {
            Name = dto.Name,
            Email = dto.Email,
            Message = dto.Message,
            SentAt = DateTime.UtcNow,
            IsRead = false
        };

        await _contactService.SendMessageAsync(message);
        return Ok(new { message = "Tack för ditt meddelande!" });
    }

    [Authorize]
    [HttpGet]
    public async Task<ActionResult<IEnumerable<ContactMessageDto>>> GetAll()
    {
        var messages = await _contactService.GetAllMessagesAsync();
        var dtos = messages.Select(m => new AdminContactMessageDto
        {
            Id = m.Id,
            Name = m.Name,
            Email = m.Email,
            Message = m.Message,
            SentAt = m.SentAt,
            IsRead = m.IsRead
        });
        return Ok(dtos);
    }

    [Authorize]
    [HttpPatch("{id}/read")]
    public async Task<IActionResult> MarkAsRead(int id)
    {
        await _contactService.MarkAsReadAsync(id);
        return NoContent();
    }

    [Authorize]
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        await _contactService.DeleteAsync(id);
        return NoContent();
    }
}