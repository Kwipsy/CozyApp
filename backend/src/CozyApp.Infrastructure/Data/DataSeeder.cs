using System;
using System.Linq;
using CozyApp.Domain.Entities;

namespace CozyApp.Infrastructure.Data
{
    public static class DataSeeder
    {
        public static void Seed(ApplicationDbContext context)
        {
            if (context.Characters.Any())
                return;

            var characters = new[]
            {
                new Character { Id = Guid.NewGuid(), Name = "Msrager", Class = "Warrior", Level = 60, IsAlive = false },
                new Character { Id = Guid.NewGuid(), Name = "Mohandarr", Class = "Mage", Level = 60, IsAlive = true },
                new Character { Id = Guid.NewGuid(), Name = "Nyxol", Class = "Rogue", Level = 60, IsAlive = true }
            };

            context.Characters.AddRange(characters);
            context.SaveChanges();
        }
    }
}