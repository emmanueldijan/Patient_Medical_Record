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
    public class PatientPROGManager
    {
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_PROG_InsertUpdate_BatchResult>>> LinqInsertUpdate_PROG(Patient_ConsultPROGDetails modellist)
        {
            return await new Patient_PROGOperations().LinqInsertUpdate_PROG(modellist);

        }
    }
}
