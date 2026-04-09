using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.DTOs;
using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProjectsController : ControllerBase
{
    private readonly IProjectRepository _repository;

    public ProjectsController(IProjectRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ProjectDto>>> GetAll()
    {
        var projects = await _repository.GetAllAsync();
        return Ok(projects.Select(ToDto));
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<ProjectDto>> GetById(int id)
    {
        var project = await _repository.GetByIdAsync(id);
        if (project is null) return NotFound();
        return Ok(ToDto(project));
    }

    [HttpGet("{slug}")]
    public async Task<ActionResult<ProjectDto>> GetBySlug(string slug)
    {
        var project = await _repository.GetBySlugAsync(slug);
        if (project is null) return NotFound();
        return Ok(ToDto(project));
    }

    private static ProjectDto ToDto(Project p) => new()
    {
        Id = p.Id,
        Slug = p.Slug,
        Title = p.Title,
        Description = p.Description,
        AboutMarkdown = p.AboutMarkdown,
        Technologies = p.Technologies,
        GitHubUrl = p.GitHubUrl,
        LiveUrl = p.LiveUrl,
        ImageUrl = p.ImageUrl,
        ImageUrls = p.ImageUrls,
        IsFeatured = p.IsFeatured
    };
}