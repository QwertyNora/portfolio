using Portfolio.Domain.Entities;

namespace Portfolio.Application.Interfaces;

public interface IContactService
{
    Task SendMessageAsync(ContactMessage message);
    Task<IEnumerable<ContactMessage>> GetAllMessagesAsync();
    Task MarkAsReadAsync(int id);
    Task DeleteAsync(int id);
}