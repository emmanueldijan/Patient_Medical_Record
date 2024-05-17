using DAL.Model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Operation.Base
{
    public class LinqInsertUpdateResult<T>
    {
        public LinqInsertUpdateResult()
        { }
        public T ReturnValue { get; set; }
        public int? ExecResult { get; set; }

        
    }



}
