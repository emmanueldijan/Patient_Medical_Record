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
    public class PatientInfoManager
    {
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_Information_InsertUpdate_BatchResult>>> LinqInsertUpdate_patientInfo(PatientMasterFile modellist)
        {
            return await new PatientGenInfoOperation().LinqInsertUpdate_patientInfo(modellist);

        }

        public async Task<IEnumerable<Uvw_PatientHistDetails>> GetEmployeeList()
        {
            return await new PatientGenInfoOperation().GetEmployeeList();
        }
        public async Task<IEnumerable<Uvw_PatientSOAPDetails>> GetEmployeeSOAP()
        {
            return await new PatientGenInfoOperation().GetEmployeeSOAP();
        }
        public async Task<IEnumerable<Uvw_PatientSOAPandPROGDetails>> GetEmployeeSOAP_Progress(int soapId)
        {
            return await new PatientGenInfoOperation().GetEmployeeSOAP_Progress(soapId);
        }
        
    }
}
