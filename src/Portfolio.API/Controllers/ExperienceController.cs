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

    [HttpPost]
    public async Task<ActionResult<ExperienceDto>> Create(ExperienceDto dto)
    {
        var experience = new Experience
        {
            Company = dto.Company,
            Role = dto.Role,
            Description = dto.Description,
            StartDate = dto.StartDate,
            EndDate = dto.EndDate,
            IsCurrentPosition = dto.IsCurrentPosition,
            Type = Enum.Parse<ExperienceType>(dto.Type)
        };

        var created = await _repository.CreateAsync(experience);
        return CreatedAtAction(nameof(GetById), new { id = created.Id }, dto);
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<ExperienceDto>> Update(int id, ExperienceDto dto)
    {
        var existing = await _repository.GetByIdAsync(id);
        if (existing is null) return NotFound();

        existing.Company = dto.Company;
        existing.Role = dto.Role;
        existing.Description = dto.Description;
        existing.StartDate = dto.StartDate;
        existing.EndDate = dto.EndDate;
        existing.IsCurrentPosition = dto.IsCurrentPosition;
        existing.Type = Enum.Parse<ExperienceType>(dto.Type);

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