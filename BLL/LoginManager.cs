using DAL.Model;
using DAL.Operation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
   public class LoginManager
    {
        public  IEnumerable<EmployeeLogIn> GetEmployeeLogIns()
        {
            return  new LoginOperation().GetEmployeeLogIns();
        }
    }
}
