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
   public class PatientSOAPManager
    {
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_SOAP_InsertUpdate_BatchResult>>> LinqInsertUpdate_SOAP(Patient_ConsultSOAPDetails modellist)
        {
            return await new PatientSOAPOperations().LinqInsertUpdate_SOAP(modellist);

        }
    }
}
