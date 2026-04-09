using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.Infrastructure.Repositories.Static;

public class StaticExperienceRepository : IExperienceRepository
{
    private static readonly List<Experience> _experiences =
    [
        // WORK EXPERIENCE
        new Experience
        {
            Id = 1,
            Company = "School of Applied Technology",
            Role = "Full Stack .NET C# Developer Consultant",
            Description = "PGP Lead for a cohort of 8, acting as the primary liaison with the COO, facilitating communications, and ensuring timely follow-up on assigned tasks and team objectives. Developed features for CodeQuest, an AI-driven coding platform using Azure OpenAI to generate adaptive story-based programming challenges.",
            StartDate = new DateOnly(2026, 2, 1),
            EndDate = null,
            IsCurrentPosition = true,
            Type = ExperienceType.Work
        },
        new Experience
        {
            Id = 2,
            Company = "Will & Skill AB",
            Role = "Full Stack Developer Intern",
            Description = "Led the end-to-end design and deployment of a new website, guiding the transition from Figma prototypes to a fully launched product. Contributed to backend development, component maintenance, customer meetings, and CRM training.",
            StartDate = new DateOnly(2024, 11, 1),
            EndDate = new DateOnly(2025, 5, 1),
            IsCurrentPosition = false,
            Type = ExperienceType.Work
        },
        new Experience
        {
            Id = 3,
            Company = "Host Staffing London",
            Role = "Event Coordinator Assistant",
            Description = "Maintained professionalism and adaptability in high-pressure environments, delivering quality service to diverse high-end clients. Demonstrated strong multitasking and problem-solving skills while managing dynamic event operations.",
            StartDate = new DateOnly(2020, 10, 1),
            EndDate = new DateOnly(2022, 10, 1),
            IsCurrentPosition = false,
            Type = ExperienceType.Work
        },

        // EDUCATION
        new Experience
        {
            Id = 4,
            Company = "School of Applied Technology",
            Role = "Full Stack C# .NET",
            Description = "Intensive three-month training program for full stack web development with a focus on TDD, mob programming, and applied learning. Led UX/UI design for a healthcare platform, establishing the overall design language and determining the frontend tech stack.",
            StartDate = new DateOnly(2025, 10, 1),
            EndDate = new DateOnly(2026, 1, 1),
            IsCurrentPosition = false,
            Type = ExperienceType.Education
        },
        new Experience
        {
            Id = 5,
            Company = "Nackademin",
            Role = "Full-stack Open Source",
            Description = "Vocational higher education program in full-stack web development with a focus on open-source technologies and modern development workflows. Gained experience with JavaScript, Node.js, React, MongoDB, SQL, REST APIs, and Agile methodologies.",
            StartDate = new DateOnly(2023, 8, 1),
            EndDate = new DateOnly(2025, 5, 1),
            IsCurrentPosition = false,
            Type = ExperienceType.Education
        },
    ];

    public Task<IEnumerable<Experience>> GetAllAsync() =>
        Task.FromResult<IEnumerable<Experience>>(_experiences);

    public Task<Experience?> GetByIdAsync(int id) =>
        Task.FromResult(_experiences.FirstOrDefault(e => e.Id == id));
}