using DAL.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dapper;
using DapperExtensions;
using System.Linq.Expressions;

namespace DAL.Operation.Base
{
    public abstract class OperationsBase<T> : IRepository<T> where T : class, IEntity
    {
        protected SqlConnection GetConnection()
        {
            return new SqlConnection(ConfigurationManager.AppSettings["SQLConnString"]);
        }

        Task IRepository<T>.AddAsync(T entity)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<T>> IRepository<T>.FindAllAsync()
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<T>> IRepository<T>.FindAsync(Expression<Func<T, bool>> predicate)
        {
            throw new NotImplementedException();
        }

        Task<IEnumerable<T>> IRepository<T>.FindAsync(IPredicate predicate, ISort sort)
        {
            throw new NotImplementedException();
        }

        Task<T> IRepository<T>.FindByIdAsync(Guid id)
        {
            throw new NotImplementedException();
        }

        Task IRepository<T>.RemoveAsync(T entity)
        {
            throw new NotImplementedException();
        }

        Task IRepository<T>.UpdateAsync(T entity)
        {
            throw new NotImplementedException();
        }
    }
}
