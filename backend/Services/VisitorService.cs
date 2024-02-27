using AutoMapper;
using WebApi.Entities;
using WebApi.Helpers;
using WebApi.Models.Visitors;

namespace WebApi.Services
{
  public class VisitorService : IVisitorService
  {
    private DataContext _context;
    private readonly IMapper _mapper;

    public VisitorService(
      DataContext context,
      IMapper mapper)
    {
      _context = context;
      _mapper = mapper;
    }

    public IEnumerable<Visitor> GetAll()
    {
      return _context.Visitors;
    }

    public Visitor GetById(int id)
    {
      return getVisitor(id);
    }

    public void Create(CreateRequest model)
    {
      if (_context.Visitors.Any(x => x.Email == model.Email))
        throw new AppException("O E-mail '" + model.Email + "' já está sendo utilizado.");

      if (_context.Visitors.Any(x => x.Cpf == model.Cpf))
        throw new AppException("O CPF '" + model.Cpf + "' já foi cadastrado.");

      if (string.IsNullOrEmpty(model.Password))
        model.Password = "12345678";

      var visitor = _mapper.Map<Visitor>(model);

      _context.Visitors.Add(visitor);
      _context.SaveChanges();
    }

    public void Update(int id, UpdateRequest model)
    {
      var visitor = getVisitor(id);

      if (model.Email != visitor.Email && _context.Visitors.Any(x => x.Email == model.Email))
        throw new AppException("O E-mail '" + model.Email + "' já está sendo utilizado.");

      if (_context.Visitors.Any(x => x.Cpf == model.Cpf))
        throw new AppException("O CPF '" + model.Cpf + "' já foi cadastrado.");
        
      _mapper.Map(model, visitor);
      _context.Visitors.Update(visitor);
      _context.SaveChanges();
    }

    public void Delete(int id)
    {
      var visitor = getVisitor(id);
      _context.Visitors.Remove(visitor);
      _context.SaveChanges();
    }


    private Visitor getVisitor(int id)
    {
      var visitor = _context.Visitors.Find(id);
      if (visitor == null) throw new KeyNotFoundException("Visitante não encontrado.");
      return visitor;
    }
  }
}