using DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using DapperExtensions;


namespace DAL.Operation.Base

{
	/// <summary>
	/// Defines the core operations a repository implementation for a concrete entity type must support.
	/// </summary>
	/// <typeparam name="T">The type of the entity we're dealing with.</typeparam>
	public partial interface IRepository<T> where T : IEntity
    {
        /// <summary>
        /// Adds a new entity asynchronously.
        /// </summary>
        /// <param name="entity">The entity to add.</param>
        /// <returns></returns>
        Task AddAsync(T entity);

        /// <summary>
        /// Removes an entity asynchronously.
        /// </summary>
        /// <param name="entity">The entity to remove.</param>
        /// <returns></returns>
        Task RemoveAsync(T entity);

        /// <summary>
        /// Updates an entity asynchronously.
        /// </summary>
        /// <param name="entity">The entity to update.</param>
        /// <returns></returns>
        Task UpdateAsync(T entity);

        /// <summary>
        /// Finds an entity by its identifier.
        /// </summary>
        /// <param name="id">The identifier of the entity.</param>
        /// <returns></returns>
        Task<T> FindByIdAsync(Guid id);

        /// <summary>
        /// Finds entities that satisfy the specified predicate.
        /// </summary>
        /// <param name="predicate">The predicate to satisfy.</param>
        /// <returns></returns>
        Task<IEnumerable<T>> FindAsync(Expression<Func<T, bool>> predicate);

        /// <summary>
        /// Finds entities that satisfy the specified predicate.
        /// </summary>
        /// <param name="predicate">The predicate to satisfy.</param>
        /// <param name="sort">The sort order.</param>
        /// <returns></returns>
        Task<IEnumerable<T>> FindAsync(IPredicate predicate = null, ISort sort = null);

        /// <summary>
        /// Finds all entities of this type.
        /// </summary>
        /// <returns></returns>
        Task<IEnumerable<T>> FindAllAsync();

        /// <summary>
        /// Finds all entities and pages the result set.
        /// </summary>
        /// <param name="sort">The sort order.</param>
        /// <param name="pageIndex">Index of the page.</param>
        /// <param name="pageSize">Size of the page.</param>
        /// <returns></returns>
  
    }

}
