namespace WebApi.Models.Visitors;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class UpdateRequest
{
  public string Name { get; set; }
  public int Phone { get; set; }
  public int Cpf { get; set; }
  public string Password { get; set; }

  [EmailAddress]
  public string Email { get; set; }


  private string replaceEmptyWithNull(string value)
  {
      return string.IsNullOrEmpty(value) ? null : value;
  }
}