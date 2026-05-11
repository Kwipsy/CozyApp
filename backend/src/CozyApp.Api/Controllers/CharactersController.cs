using Microsoft.AspNetCore.Mvc;
using CozyApp.Infrastructure.Data;
using CozyApp.Domain.Entities;

namespace CozyApp.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CharactersController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public CharactersController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        return Ok(_context.Characters.ToList());
    }

    [HttpPost]
    public IActionResult Create(Character character)
    {
        _context.Characters.Add(character);
        _context.SaveChanges();

        return Ok(character);
    }

    [HttpDelete("{name}")]
    public IActionResult Delete(string name)
    {
        if (string.IsNullOrEmpty(name))
            return BadRequest();

        // Case-insensitive lookup (translatable to SQL)
        var normalized = name.ToLowerInvariant();
        var character = _context.Characters
            .FirstOrDefault(c => c.Name.ToLower() == normalized);

        if (character == null)
            return NotFound();

        _context.Characters.Remove(character);
        _context.SaveChanges();
        return NoContent();
    }
}
