namespace WebApi.Entities;

using System.Text.Json.Serialization;

public class Visitor
{
  public int Id { get; set; }
  public string Name { get; set; }
  public int Phone { get; set; }
  public int Cpf { get; set; }
  public string Email { get; set; }
  public string Password { get; set; }
}