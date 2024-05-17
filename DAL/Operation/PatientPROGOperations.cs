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
   public class Patient_PROGOperations : OperationsBase<PatientMasterFile>
    {
        private static readonly ILog Logger = LogManager.GetLogger
    (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_PROG_InsertUpdate_BatchResult>>> LinqInsertUpdate_PROG(Patient_ConsultPROGDetails modellist)
        {
            using (var adaDb = new Model.MedicalHistory(ConfigConstants.SQLConnString))
            {
                var returnValue = new List<LinqInsertUpdateResult<Usp_Patient_PROG_InsertUpdate_BatchResult>>();
                try
                {
                    int? result = 0;
                    var whatever = Extensions.SerializeToXElement(modellist);
                    var queryResultList = (from e in adaDb.Usp_Patient_PROG_InsertUpdate_Batch(
                        modellist.PPROG_Id                    
                      , modellist.Patient_No
                      , modellist.PSOAP_Id
                      , modellist.PHist_Id
                      , modellist.Emergency
                      , modellist.FollowUp
                      , modellist.BloodPressure
                      , modellist.PulseRate
                      , modellist.Temperature
                      , modellist.RespiratoryRate
                      , modellist.Weight
                      , modellist.Height
                      , modellist.BMI
                      , modellist.Notes
                      , modellist.CreateDate
                        )
                                           select e).ToList();
                    foreach (var queryResult in queryResultList)
                    {
                        var returnV = new LinqInsertUpdateResult<Usp_Patient_PROG_InsertUpdate_BatchResult>
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
