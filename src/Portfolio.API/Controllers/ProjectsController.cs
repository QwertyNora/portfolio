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

        var dtos = projects.Select(p => new ProjectDto
        {
            Id = p.Id,
            Title = p.Title,
            Description = p.Description,
            Technologies = p.Technologies,
            GitHubUrl = p.GitHubUrl,
            LiveUrl = p.LiveUrl,
            ImageUrl = p.ImageUrl,
            IsFeatured = p.IsFeatured
        });

        return Ok(dtos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ProjectDto>> GetById(int id)
    {
        var project = await _repository.GetByIdAsync(id);

        if (project is null) return NotFound();

        return Ok(new ProjectDto
        {
            Id = project.Id,
            Title = project.Title,
            Description = project.Description,
            Technologies = project.Technologies,
            GitHubUrl = project.GitHubUrl,
            LiveUrl = project.LiveUrl,
            ImageUrl = project.ImageUrl,
            IsFeatured = project.IsFeatured
        });
    }
}