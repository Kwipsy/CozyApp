using CozyApp.Domain.Enums;

namespace CozyApp.Domain.Entities
{
    public class Character
    {
        public Guid Id { get; set; }
        public string Name { get; set; } = string.Empty;

        // Might want to use some other datatype to represent class
        public string Class { get; set; } = string.Empty;
        public int Level { get; set; }
        public bool IsAlive { get; set; } = true;

    }
}
