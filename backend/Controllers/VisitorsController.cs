namespace WebApi.Controllers;

using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using WebApi.Models.Visitors;
using WebApi.Services;

[ApiController]
[Route("api/v1/[controller]")]
public class VisitorsController : ControllerBase
{
  private IVisitorService _visitorService;
  private IMapper _mapper;

  public VisitorsController(
    IVisitorService visitorService,
    IMapper mapper)
  {
    _visitorService = visitorService;
    _mapper = mapper;
  }

  [HttpGet]
  public IActionResult GetAll()
  {
    var visitors = _visitorService.GetAll();
    return Ok(visitors);
  }

  [HttpGet("{id}")]
  public IActionResult GetById(int id)
  {
    var visitor = _visitorService.GetById(id);
    return Ok(visitor);
  }

  [HttpPost]
  public IActionResult Create(CreateRequest model)
  {
    _visitorService.Create(model);
    return Ok(new { message = "Visitante criado." });
  }

  [HttpPut("{id}")]
  public IActionResult Update(int id, UpdateRequest model)
  {
    _visitorService.Update(id, model);
    return Ok(new { message = "Visitante atualizado." });
  }

  [HttpDelete("{id}")]
  public IActionResult Delete(int id)
  {
    _visitorService.Delete(id);
    return Ok(new { message = "Visitante deletado" });
  }
}
