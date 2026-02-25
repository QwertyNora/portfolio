using Portfolio.Domain.Entities;

namespace Portfolio.Application.Interfaces;

public interface IExperienceRepository
{
    Task<IEnumerable<Experience>> GetAllAsync();
    Task<Experience?> GetByIdAsync(int id);
    Task<Experience> CreateAsync(Experience experience);
    Task<Experience> UpdateAsync(Experience experience);
    Task DeleteAsync(int id);
}