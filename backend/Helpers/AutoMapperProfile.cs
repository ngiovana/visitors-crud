namespace WebApi.Helpers;

using AutoMapper;
using WebApi.Entities;
using WebApi.Models.Visitors;

public class AutoMapperProfile : Profile
{
  public AutoMapperProfile()
  {
    CreateMap<CreateRequest, Visitor>();

    CreateMap<UpdateRequest, Visitor>()
      .ForAllMembers(x => x.Condition(
        (src, dest, prop) =>
        {
          if (prop == null) return false;
          if (prop.GetType() == typeof(string) && string.IsNullOrEmpty((string)prop)) return false;

          return true;
        }
      ));
  }
}