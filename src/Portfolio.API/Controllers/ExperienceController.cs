using Microsoft.AspNetCore.Mvc;
using Portfolio.Application.DTOs;
using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;

namespace Portfolio.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ExperienceController : ControllerBase
{
    private readonly IExperienceRepository _repository;

    public ExperienceController(IExperienceRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<ExperienceDto>>> GetAll()
    {
        var experiences = await _repository.GetAllAsync();
        var dtos = experiences.Select(e => new ExperienceDto
        {
            Id = e.Id,
            Company = e.Company,
            Role = e.Role,
            Description = e.Description,
            StartDate = e.StartDate,
            EndDate = e.EndDate,
            IsCurrentPosition = e.IsCurrentPosition,
            Type = e.Type.ToString()
        });
        return Ok(dtos);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ExperienceDto>> GetById(int id)
    {
        var experience = await _repository.GetByIdAsync(id);
        if (experience is null) return NotFound();

        return Ok(new ExperienceDto
        {
            Id = experience.Id,
            Company = experience.Company,
            Role = experience.Role,
            Description = experience.Description,
            StartDate = experience.StartDate,
            EndDate = experience.EndDate,
            IsCurrentPosition = experience.IsCurrentPosition,
            Type = experience.Type.ToString()
        });
    }
}