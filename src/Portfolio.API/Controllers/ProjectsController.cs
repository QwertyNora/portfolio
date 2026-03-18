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

    [HttpPost]
    public async Task<ActionResult<ProjectDto>> Create(ProjectDto dto)
    {
        var project = new Project
        {
            Title = dto.Title,
            Description = dto.Description,
            Technologies = dto.Technologies,
            GitHubUrl = dto.GitHubUrl,
            LiveUrl = dto.LiveUrl,
            ImageUrl = dto.ImageUrl,
            IsFeatured = dto.IsFeatured
        };

        var created = await _repository.CreateAsync(project);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, dto);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<ProjectDto>> Update(int id, ProjectDto dto)
    {
        var existing = await _repository.GetByIdAsync(id);
        if (existing is null) return NotFound();

        existing.Title = dto.Title;
        existing.Description = dto.Description;
        existing.Technologies = dto.Technologies;
        existing.GitHubUrl = dto.GitHubUrl;
        existing.LiveUrl = dto.LiveUrl;
        existing.ImageUrl = dto.ImageUrl;
        existing.IsFeatured = dto.IsFeatured;

        await _repository.UpdateAsync(existing);
        return Ok(dto);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var existing = await _repository.GetByIdAsync(id);
        if (existing is null) return NotFound();

        await _repository.DeleteAsync(id);
        return NoContent();
    }
}