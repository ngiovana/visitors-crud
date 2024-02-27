namespace WebApi.Entities;

using System.Text.Json.Serialization;

public class Visitor
{
  public int Id { get; set; }
  public string Name { get; set; }
  public string Phone { get; set; }
  public string Cpf { get; set; }
  public string Email { get; set; }
  public string Password { get; set; }
}