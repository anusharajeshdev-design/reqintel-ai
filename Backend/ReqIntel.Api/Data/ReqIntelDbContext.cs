using Microsoft.EntityFrameworkCore;
using ReqIntel.Api.Models;

namespace ReqIntel.Api.Data;

public class ReqIntelDbContext : DbContext
{
    public ReqIntelDbContext(DbContextOptions<ReqIntelDbContext> options)
        : base(options)
    {
    }

    public DbSet<DocumentChunk> DocumentChunks => Set<DocumentChunk>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.HasPostgresExtension("vector");
    }
}