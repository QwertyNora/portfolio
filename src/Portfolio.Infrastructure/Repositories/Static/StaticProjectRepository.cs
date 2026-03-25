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
            Slug = "portfolio",
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
            Slug = "platemates",
            Title = "Platemates",
            Description = "Beskrivning av projektet.",
            Technologies = ["React", "Node.js"],
            GitHubUrl = "https://github.com/QwertyNora/platemates",
            IsFeatured = true,
            CreatedAt = new DateTime(2025, 6, 1)
        },
        new Project
        {
            Id = 3,
            Slug = "chatapplikation",
            Title = "Chatapplikation",
            Description = "En realtidschatt byggd med WebSockets och SignalR.",
            Technologies = ["C#", ".NET", "SignalR", "React", "Redis"],
            GitHubUrl = "link.....",
            IsFeatured = true,
            CreatedAt = new DateTime(2026, 2, 5)
        },
        new Project
        {
            Id = 4,
            Slug = "task-manager",
            Title = "Task Manager",
            Description = "En app för att hantera uppgifter med autentisering och notiser.",
            Technologies = ["C#", ".NET", "Angular", "TypeScript", "Firebase"],
            GitHubUrl = "link.....",
            IsFeatured = true,
            CreatedAt = new DateTime(2026, 2, 20)
        },
        new Project
        {
            Id = 5,
            Slug = "bloggplattform",
            Title = "Bloggplattform",
            Description = "En bloggplattform med stöd för kommentarer och markdown.",
            Technologies = ["C#", ".NET", "MVC", "MySQL", "Bootstrap"],
            GitHubUrl = "link.....",
            IsFeatured = true,
            CreatedAt = new DateTime(2026, 3, 1)
        },
        new Project
        {
            Id = 6,
            Slug = "vaederapp",
            Title = "Väderapp",
            Description = "En väderapplikation som hämtar data från externa API:er.",
            Technologies = ["C#", ".NET", "React", "TypeScript", "OpenWeather API"],
            GitHubUrl = "link.....",
            IsFeatured = true,
            CreatedAt = new DateTime(2026, 3, 10)
        }
    ];

    public Task<IEnumerable<Project>> GetAllAsync() =>
        Task.FromResult<IEnumerable<Project>>(_projects);

    public Task<Project?> GetByIdAsync(int id) =>
        Task.FromResult(_projects.FirstOrDefault(p => p.Id == id));

    public Task<Project?> GetBySlugAsync(string slug) =>
        Task.FromResult(_projects.FirstOrDefault(p => p.Slug == slug));
}