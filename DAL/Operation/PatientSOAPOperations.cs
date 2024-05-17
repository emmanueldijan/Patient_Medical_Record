using DAL.Constant;
using DAL.Model;
using DAL.Operation.Base;
using log4net;
using log4net.Repository.Hierarchy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Operation
{
    public class PatientSOAPOperations : OperationsBase<PatientMasterFile>
    {
        private static readonly ILog Logger = LogManager.GetLogger
            (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_SOAP_InsertUpdate_BatchResult>>> LinqInsertUpdate_SOAP(Patient_ConsultSOAPDetails modellist)
        {
            using (var adaDb = new Model.MedicalHistory(ConfigConstants.SQLConnString))
            {
                var returnValue = new List<LinqInsertUpdateResult<Usp_Patient_SOAP_InsertUpdate_BatchResult>>();
                try
                {
                    int? result = 0;
                    var whatever = Extensions.SerializeToXElement(modellist);
                    var queryResultList = (from e in adaDb.Usp_Patient_SOAP_InsertUpdate_Batch(
                        modellist.PSOAP_Id,
                        modellist.Patient_No,
                        modellist.PHist_Id,
                        modellist.Subjective,
                        modellist.HEENT,
                        modellist.Heart,
                        modellist.Lungs,
                        modellist.Extremities,
                        modellist.Abdomen,
                        modellist.Skin,
                        modellist.MSkelital,
                        modellist.GUrinary,
                        modellist.Others,
                        modellist.OHazzardFlags,
                        modellist.DiagnosisCategory,
                        modellist.Diagnosis,
                        modellist.Assesment,
                        modellist.Plan,
                        modellist.CreateDate,
                        modellist.CosultationDate


                        )
                                           select e).ToList();
                    foreach (var queryResult in queryResultList)
                    {
                        var returnV = new LinqInsertUpdateResult<Usp_Patient_SOAP_InsertUpdate_BatchResult>
                        {
                            ExecResult = result,
                            ReturnValue = queryResult
                        };
                        returnValue.Add(returnV);
                    }
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                }
                return returnValue.ToList();
            }
        }

    }
}
