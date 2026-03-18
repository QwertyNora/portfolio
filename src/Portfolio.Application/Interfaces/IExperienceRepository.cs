using Portfolio.Domain.Entities;

namespace Portfolio.Application.Interfaces;

public interface IExperienceRepository
{
    Task<IEnumerable<Experience>> GetAllAsync();
    Task<Experience?> GetByIdAsync(int id);
}