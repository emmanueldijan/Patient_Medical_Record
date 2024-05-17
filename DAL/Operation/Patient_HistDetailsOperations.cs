using DAL.Constant;
using DAL.Model;
using DAL.Operation.Base;
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Operation
{
     public class Patient_HistDetailsOperations : OperationsBase<PatientMasterFile>
    {
            private static readonly ILog Logger = LogManager.GetLogger
                (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
            public async Task<List<LinqInsertUpdateResult<Usp_Patient_HistDetails_InsertUpdate_BatchResult>>> LinqInsertUpdate_HistDetails(Patient_HDetails modellist)
            {
                using (var adaDb = new Model.MedicalHistory(ConfigConstants.SQLConnString))
                {
                    var returnValue = new List<LinqInsertUpdateResult<Usp_Patient_HistDetails_InsertUpdate_BatchResult>>();
                    try
                    {
                        int? result = 0;
                        var whatever = Extensions.SerializeToXElement(modellist);
                        var queryResultList = (from e in adaDb.Usp_Patient_HistDetails_InsertUpdate_Batch(
                            modellist.PHist_Id
                           , modellist.Patient_No
                           ,modellist.PatientFlags
                           ,modellist.Hospitalization
                           ,modellist.Surgery
                           ,modellist.Trauma
                           ,modellist.Accident
                           ,modellist.Habits
                           ,modellist.Food_Allergy
                           ,modellist.Medicine_Allergy
                           ,modellist.Other_Allergy
                           ,modellist.PastIllness
                           ,modellist.CreateDate
                            )
                                               select e).ToList();
                        foreach (var queryResult in queryResultList)
                        {
                            var returnV = new LinqInsertUpdateResult<Usp_Patient_HistDetails_InsertUpdate_BatchResult>
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
