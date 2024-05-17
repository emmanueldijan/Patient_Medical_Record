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
    public class PatientImmunizationDetailsManager
    {
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_ImmuneDetails_InsertUpdate_BatchResult>>> LinqInsertUpdate_Immunization(Patient_ImmuneDetails modellist)
        {
            return await new PatientImmunizationDetailsOperation().LinqInsertUpdate_Immunization(modellist);

        }

    }
}
