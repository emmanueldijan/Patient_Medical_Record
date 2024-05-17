using DAL.Constant;
using DAL.Operation.Base;
using DAL.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using log4net;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;
using DapperExtensions;

namespace DAL.Operation
{
   public class PatientGenInfoOperation:OperationsBase<PatientMasterFile>
    {
        private static readonly ILog Logger = LogManager.GetLogger
   (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);
        public async Task<List<LinqInsertUpdateResult<Usp_Patient_Information_InsertUpdate_BatchResult>>> LinqInsertUpdate_patientInfo(PatientMasterFile modellist)
        {
            using (var adaDb = new Model.MedicalHistory(ConfigConstants.SQLConnString))
            {
                var returnValue = new List<LinqInsertUpdateResult<Usp_Patient_Information_InsertUpdate_BatchResult>>();
                try
                {
                    int? result = 0;
                    var whatever = Extensions.SerializeToXElement(modellist);
                    var queryResultList = (from e in adaDb.Usp_Patient_Information_InsertUpdate_Batch(
                        modellist.Patient_ID,
                        modellist.Patient_No ,
                        modellist.First_Name,
                        modellist.Last_Name,
                        modellist.Middle_Name,
                        modellist.Address,
                        modellist.BirthDate,
                        modellist.Age,
                        modellist.Sex,
                        modellist.Nationality,
                        modellist.MobielNo_1,
                        modellist.MobielNo_2,
                        modellist.MobielNo_3,
                        modellist.PhoneNo,
                        modellist.CreateDate                        
                        )
                                           select e).ToList();
                    foreach (var queryResult in queryResultList)
                    {
                        var returnV = new LinqInsertUpdateResult<Usp_Patient_Information_InsertUpdate_BatchResult>
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

        public async Task<IEnumerable<Uvw_PatientHistDetails>> GetEmployeeList()
        {
            using (SqlConnection connection = GetConnection())
            {
                IEnumerable<Uvw_PatientHistDetails> resultDynamic = new List<Uvw_PatientHistDetails>();
                try
                {
                    await connection.OpenAsync();
                    resultDynamic = await connection.QueryAsync<Uvw_PatientHistDetails>("SELECT * FROM [dbo].[Uvw_PatientHistDetails] ");
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                }
                return resultDynamic;
            }
        }
        public async Task<IEnumerable<Uvw_PatientSOAPDetails>> GetEmployeeSOAP()
        {
            using (SqlConnection connection = GetConnection())
            {
                IEnumerable<Uvw_PatientSOAPDetails> resultDynamic = new List<Uvw_PatientSOAPDetails>();
                try
                {
                    await connection.OpenAsync();
                    resultDynamic = await connection.QueryAsync<Uvw_PatientSOAPDetails>("SELECT * FROM [dbo].[Uvw_PatientSOAPDetails]");
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                }
                return resultDynamic;
            }
        }
        public async Task<IEnumerable<Uvw_PatientSOAPandPROGDetails>> GetEmployeeSOAP_Progress(int soapId)
        {
            using (SqlConnection connection = GetConnection())
            {
                IEnumerable<Uvw_PatientSOAPandPROGDetails> resultDynamic = new List<Uvw_PatientSOAPandPROGDetails>();
                try
                {
                    await connection.OpenAsync();
                    resultDynamic = await connection.QueryAsync<Uvw_PatientSOAPandPROGDetails>("SELECT * FROM [dbo].[Uvw_PatientSOAPandPROGDetails] where pSOAP_Id ="+ soapId + " order by CreateDate desc ");
                }
                catch (Exception ex)
                {
                    Logger.Error(ex);
                }
                return resultDynamic;
            }
        }

    }
}
