using DAL.Model;
using DAL.Operation;
using DAL.Operation.Base;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL
{
    public class Patient_HistDetailsManager
    {
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_HistDetails_InsertUpdate_BatchResult>>> LinqInsertUpdate_HistDetails(Patient_HDetails modellist)
        {
            return await new Patient_HistDetailsOperations().LinqInsertUpdate_HistDetails(modellist);

        }
    }
}
