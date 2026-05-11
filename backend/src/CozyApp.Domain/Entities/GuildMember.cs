using CozyApp.Domain.Enums;

namespace CozyApp.Domain.Entities
{
    public class GuildMember
    {
        public Guid Id { get; set; }
        public string DiscordName { get; set; } = string.Empty;
        public GuildRank Rank { get; set; }
        public List<Character> Character { get; set; } = new List<Character>(); 
    }
}
