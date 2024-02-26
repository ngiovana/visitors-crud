namespace WebApi.Models.Visitors;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class CreateRequest
{

  [Required]
  public string Name { get; set; }

  [Required]
  public int Phone { get; set; }

  [Required]
  public int Cpf { get; set; }

  [Required]
  [EmailAddress]
  public string Email { get; set; }

  public string Password { get; set; }

}