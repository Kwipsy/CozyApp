using Microsoft.EntityFrameworkCore;
using CozyApp.Domain.Entities;

namespace CozyApp.Infrastructure.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Character> Characters => Set<Character>();

        public DbSet<GuildMember> GuildMembers { get; set; }
    }
}