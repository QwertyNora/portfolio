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
        },
        new Experience
        {
            Id = 2,
            Company = "SALT",
            Role = "Utvecklarstudent",
            Description = "Fullstack-utbildning med fokus på modern webbutveckling.",
            StartDate = new DateOnly(2025, 1, 1),
            EndDate = null,
            IsCurrentPosition = false,
            Type = ExperienceType.Education
        }
    ];

    public Task<IEnumerable<Experience>> GetAllAsync() =>
        Task.FromResult<IEnumerable<Experience>>(_experiences);

    public Task<Experience?> GetByIdAsync(int id) =>
        Task.FromResult(_experiences.FirstOrDefault(e => e.Id == id));

}