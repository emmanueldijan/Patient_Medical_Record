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
    public class PatientImmunizationDetailsOperation : OperationsBase<PatientMasterFile>
    {
        private static readonly ILog Logger = LogManager.GetLogger
    (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_ImmuneDetails_InsertUpdate_BatchResult>>> LinqInsertUpdate_Immunization(Patient_ImmuneDetails modellist)
        {
            using (var adaDb = new Model.MedicalHistory(ConfigConstants.SQLConnString))
            {
                var returnValue = new List<LinqInsertUpdateResult<Usp_Patient_ImmuneDetails_InsertUpdate_BatchResult>>();
                try
                {
                    int? result = 0;
                    var whatever = Extensions.SerializeToXElement(modellist);
                    var queryResultList = (from e in adaDb.Usp_Patient_ImmuneDetails_InsertUpdate_Batch(
                            modellist.PImmune_Id
                          , modellist.PHist_Id
                          , modellist.Patient_No
                          , modellist.CC_Dosage
                          , modellist.CC_Orderby
                          , modellist.CC_DateOrder
                          , modellist.CC_AdministerBy
                          , modellist.CC_DateAdminister
                          , modellist.Flu_Dosage
                          , modellist.Flu_Orderby
                          , modellist.Flu_DateOrder
                          , modellist.Flu_AdministerBy
                          , modellist.Flu_DateAdminister
                          , modellist.HA_Dosage
                          , modellist.HA_Orderby
                          , modellist.HA_DateOrder
                          , modellist.HA_AdministerBy
                          , modellist.HA_DateAdminister
                          , modellist.HB_Dosage
                          , modellist.HB_Orderby
                          , modellist.HB_DateOrder
                          , modellist.HB_AdministerBy
                          , modellist.HB_DateAdminister
                          , modellist.HAB_Dosage
                          , modellist.HAB_Orderby
                          , modellist.HAB_DateOrder
                          , modellist.HAB_AdministerBy
                          , modellist.HAB_DateAdminister
                          , modellist.MMR_Dosage
                          , modellist.MMR_Orderby
                          , modellist.MMR_DateOrder
                          , modellist.MMR_AdministerBy
                          , modellist.MMR_DateAdminister
                          , modellist.TT_Dosage
                          , modellist.TT_Orderby
                          , modellist.TT_DateOrder
                          , modellist.TT_AdministerBy
                          , modellist.TT_DateAdminister
                          , modellist.Varicella_Dosage
                          , modellist.Varicella_Orderby
                          , modellist.Varicella_DateOrder
                          , modellist.Varicella_AdministerBy
                          , modellist.Varicella_DateAdminister
                          , modellist.TA_Dosage
                          , modellist.TA_Orderby
                          , modellist.TA_DateOrder
                          , modellist.TA_AdministerBy
                          , modellist.TA_DateAdminister
                          , modellist.TD_Dosage
                          , modellist.TD_Orderby
                          , modellist.TD_DateOrder
                          , modellist.TD_AdministerBy
                          , modellist.TD_DateAdminister
                          , modellist.TDAP_Dosage
                          , modellist.TDAP_Orderby
                          , modellist.TDAP_DateOrder
                          , modellist.TDAP_AdministerBy
                          , modellist.TDAP_DateAdminister
                          , modellist.TG_Dosage
                          , modellist.TG_Orderby
                          , modellist.TG_DateOrder
                          , modellist.TG_AdministerBy
                          , modellist.TG_DateAdminister
                          , modellist.CreateDate
                        )
                                           select e).ToList();
                    foreach (var queryResult in queryResultList)
                    {
                        var returnV = new LinqInsertUpdateResult<Usp_Patient_ImmuneDetails_InsertUpdate_BatchResult>
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
