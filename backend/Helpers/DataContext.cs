namespace WebApi.Helpers;

using Microsoft.EntityFrameworkCore;
using WebApi.Entities;

public class DataContext : DbContext
{
  protected readonly IConfiguration Configuration;

  public DataContext(IConfiguration configuration)
  {
    Configuration = configuration;
  }

  protected override void OnConfiguring(DbContextOptionsBuilder options)
  {
    var connectionString = Configuration.GetConnectionString("ApiDatabase");
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)).
    UseSnakeCaseNamingConvention();
  }

  public DbSet<Visitor> Visitors { get; set; }
}