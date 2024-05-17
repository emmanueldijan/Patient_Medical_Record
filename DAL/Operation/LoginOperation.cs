using DAL.Constant;
using DAL.Operation.Base;
using DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using log4net;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;
using DapperExtensions;

namespace DAL.Operation
{
   public class LoginOperation: OperationsBase<PatientMasterFile>
    {
        private static readonly ILog Logger = LogManager.GetLogger
        (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public IEnumerable<EmployeeLogIn> GetEmployeeLogIns()
        {
            using (SqlConnection connection = GetConnection())
            {
                IEnumerable<EmployeeLogIn> resultDynamic = new List<EmployeeLogIn>();
                try
                {
                     connection.OpenAsync();
                    resultDynamic =  connection.Query<EmployeeLogIn>("SELECT * FROM [dbo].[EmployeeLogIn] ");
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                }
                return resultDynamic;
            }
        }
    }
}
