using Microsoft.EntityFrameworkCore;
using Portfolio.Application.Interfaces;
using Portfolio.Domain.Entities;
using Portfolio.Infrastructure.Data;

namespace Portfolio.Infrastructure.Repositories;

public class ExperienceRepository : IExperienceRepository
{
    private readonly AppDbContext _context;

    public ExperienceRepository(AppDbContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Experience>> GetAllAsync() =>
        await _context.Experiences.ToListAsync();

    public async Task<Experience?> GetByIdAsync(int id) =>
        await _context.Experiences.FindAsync(id);

    public async Task<Experience> CreateAsync(Experience experience)
    {
        _context.Experiences.Add(experience);
        await _context.SaveChangesAsync();
        return experience;
    }

    public async Task<Experience> UpdateAsync(Experience experience)
    {
        _context.Experiences.Update(experience);
        await _context.SaveChangesAsync();
        return experience;
    }

    public async Task DeleteAsync(int id)
    {
        var experience = await _context.Experiences.FindAsync(id);
        if (experience is not null)
        {
            _context.Experiences.Remove(experience);
            await _context.SaveChangesAsync();
        }
    }
}