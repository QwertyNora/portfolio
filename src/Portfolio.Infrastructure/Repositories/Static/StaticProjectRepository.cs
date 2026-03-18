using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.Repositories.Static;

public class StaticProjectRepository : IProjectRepository
{
    private static readonly List<Project> _projects =
    [
        new Project
        {
            Id = 1,
            Title = "Portfolio",
            Description = "Min personliga portfolio byggd med .NET och React.",
            Technologies = ["C#", ".NET", "React", "TypeScript", "PostgreSQL"],
            GitHubUrl = "https://github.com/QwertyNora/portfolio",
            IsFeatured = true,
            CreatedAt = new DateTime(2026, 1, 1)
        },
        new Project
        {
            Id = 2,
            Title = "Platemates",
            Description = "Beskrivning av projektet.",
            Technologies = ["React", "Node.js"],
            GitHubUrl = "https://github.com/QwertyNora/platemates",
            IsFeatured = true,
            CreatedAt = new DateTime(2025, 6, 1)
        }
    ];

    public Task<IEnumerable<Project>> GetAllAsync() =>
        Task.FromResult<IEnumerable<Project>>(_projects);

    public Task<Project?> GetByIdAsync(int id) =>
        Task.FromResult(_projects.FirstOrDefault(p => p.Id == id));

}