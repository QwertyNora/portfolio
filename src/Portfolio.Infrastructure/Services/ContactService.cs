using Microsoft.EntityFrameworkCore;
using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Services;

public class ContactService : IContactService
{
    private readonly AppDbContext _context;
    private readonly EmailService _emailService;

    public ContactService(AppDbContext context, EmailService emailService)
    {
        _context = context;
        _emailService = emailService;
    }

    public async Task SendMessageAsync(ContactMessage message)
    {
        _context.ContactMessages.Add(message);
        await _context.SaveChangesAsync();

        await _emailService.SendContactNotificationAsync(
            message.Name,
            message.Email,
            message.Message
        );
    }

    public async Task<IEnumerable<ContactMessage>> GetAllMessagesAsync() =>
        await _context.ContactMessages.ToListAsync();

    public async Task MarkAsReadAsync(int id)
    {
        var message = await _context.ContactMessages.FindAsync(id);
        if (message is not null)
        {
            message.IsRead = true;
            await _context.SaveChangesAsync();
        }
    }

    public async Task DeleteAsync(int id)
    {
        var message = await _context.ContactMessages.FindAsync(id);
        if (message is not null)
        {
            _context.ContactMessages.Remove(message);
            await _context.SaveChangesAsync();
        }
    }
}