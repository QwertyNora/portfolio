namespace Portfolio.Application.DTOs;

public class ProjectDto
{
    public int Id { get; set; }
    public string Slug { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string AboutMarkdown { get; set; } = string.Empty;
    public string[] Technologies { get; set; } = [];
    public string? GitHubUrl { get; set; }
    public string? LiveUrl { get; set; }
    public string? ImageUrl { get; set; }
    public string[] ImageUrls { get; set; } = [];
    public bool IsFeatured { get; set; }
}