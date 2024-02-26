namespace WebApi.Services;

using WebApi.Entities;
using WebApi.Models.Visitors;

public interface IVisitorService
{
    IEnumerable<Visitor> GetAll();
    Visitor GetById(int id);
    void Create(CreateRequest model);
    void Update(int id, UpdateRequest model);
    void Delete(int id);
}