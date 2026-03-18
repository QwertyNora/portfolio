using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.Repositories.Static;

public class StaticExperienceRepository : IExperienceRepository
{
    private static readonly List<Experience> _experiences =
    [
        new Experience
        {
            Id = 1,
            Company = "SALT",
            Role = "Utvecklarstudent",
            Description = "Fullstack-utbildning med fokus på modern webbutveckling.",
            StartDate = new DateOnly(2025, 1, 1),
            EndDate = null,
            IsCurrentPosition = true,
            Type = ExperienceType.Education
        }
    ];

    public Task<IEnumerable<Experience>> GetAllAsync() =>
        Task.FromResult<IEnumerable<Experience>>(_experiences);

    public Task<Experience?> GetByIdAsync(int id) =>
        Task.FromResult(_experiences.FirstOrDefault(e => e.Id == id));

    public Task<Experience> CreateAsync(Experience experience)
    {
        experience.Id = _experiences.Max(e => e.Id) + 1;
        _experiences.Add(experience);
        return Task.FromResult(experience);
    }

    public Task<Experience> UpdateAsync(Experience experience)
    {
        var index = _experiences.FindIndex(e => e.Id == experience.Id);
        if (index != -1) _experiences[index] = experience;
        return Task.FromResult(experience);
    }

    public Task DeleteAsync(int id)
    {
        var experience = _experiences.FirstOrDefault(e => e.Id == id);
        if (experience is not null) _experiences.Remove(experience);
        return Task.CompletedTask;
    }
}