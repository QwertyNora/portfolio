using Microsoft.EntityFrameworkCore;
using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Services;

public class ContactService : IContactService
{
    private readonly AppDbContext _context;

    public ContactService(AppDbContext context)
    {
        _context = context;
    }

    public async Task SendMessageAsync(ContactMessage message)
    {
        _context.ContactMessages.Add(message);
        await _context.SaveChangesAsync();

        // TODO: Send-mail business logic 
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
}