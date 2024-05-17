using BLL;
using DAL.Model;
using DAL.Operation;
using log4net;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace Patient_Medical_REcord_1.Controllers
{
    public class HomeController : Controller
    {
        private static readonly ILog Logger = LogManager.GetLogger
    (System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);


        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public ActionResult PatientRecord()
        {
            ViewBag.Title = "Home Page";

            return View();
        }
        [HttpPost]
        public PartialViewResult GetPartialview(string PartialViewType)
        {

            if (PartialViewType == "GetPatientInfo")
            {

                return PartialView("_PatientInfoView");
            }
            else if (PartialViewType == "GetPatientHistory")
            {
                return PartialView("_PatientHistory");
            }
            else if (PartialViewType == "GetPatientImmunization")
            {
                return PartialView("_PatientImmunization");
            }
            else if (PartialViewType == "GetPatientConsultation")
            {
                return PartialView("_PatientConsultations");
            }
            else
            {
                return PartialView("_PatientInfoView");
                //_PatientHistory
            }

        }
        [HttpPost]
        public async Task<JsonResult> PatientHDetailsUpdate(string updateJsonModel)
        {
            try
            {
                if (updateJsonModel != null)
                {
                    var dataModel = JsonConvert.DeserializeObject<List<Patient_HDetails>>(updateJsonModel);

                    var employeeManager = new Patient_HistDetailsOperations();
                    var iEmployees = await employeeManager.LinqInsertUpdate_HistDetails(dataModel[0]);

                    return Json(dataModel, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Exception: {ex}");
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
            return null;
        }
        [HttpPost]
        public async Task<JsonResult> PatientImmunizationUpdate(string updateJsonModel)
        {
            try
            {
                if (updateJsonModel != null)
                {
                    var dataModel = JsonConvert.DeserializeObject<List<Patient_ImmuneDetails>>(updateJsonModel);

                    var employeeManager = new PatientImmunizationDetailsOperation();
                    var iEmployees = await employeeManager.LinqInsertUpdate_Immunization(dataModel[0]);

                    return Json(dataModel, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Exception: {ex}");
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
            return null;
        }
        [HttpPost]
        public async Task<JsonResult> PatientInfoUpdate(string updateJsonModel)
        {
            try
            {
                if (updateJsonModel != null)
                {
                    var dataModel = JsonConvert.DeserializeObject<List<PatientMasterFile>>(updateJsonModel);
                    //var dataModel = new PatientMasterFile()
                    //{

                    //    Patient_No = 1234,
                    //    First_Name = "Emmanuel",
                    //    Last_Name = "Dijan",
                    //    Middle_Name = "Pineda",
                    //    Address = "Lipa City",
                    //    BirthDate = Convert.ToDateTime("05/02/1989"),
                    //    Age = 30,
                    //    Sex = "M",
                    //    Nationality = "Pilipino",
                    //    MobielNo_1 = "09124216073",
                    //    MobielNo_2 = "1111111",
                    //    MobielNo_3 = "1122222",
                    //    PhoneNo = "543232",
                    //    CreateDate = Convert.ToDateTime("07/14/1989")
                    //};

                    var employeeManager = new PatientInfoManager();
                    var iEmployees = await employeeManager.LinqInsertUpdate_patientInfo(dataModel[0]);

                    return Json(dataModel, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Exception: {ex}");
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
            return null;
        }
        [HttpPost]
        public async Task<JsonResult> PatientPROGUpdate(string updateJsonModel)
        {
            try
            {
                if (updateJsonModel != null)
                {
                    var dataModel = JsonConvert.DeserializeObject<List<Patient_ConsultPROGDetails>>(updateJsonModel);

                    var employeeManager = new Patient_PROGOperations();
                    var iEmployees = await employeeManager.LinqInsertUpdate_PROG(dataModel[0]);

                    return Json(dataModel, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Exception: {ex}");
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
            return null;
        }

        [HttpPost]
        public async Task<JsonResult> PatientSOAPUpdate(string updateJsonModel)
        {
            try
            {
                if (updateJsonModel != null)
                {
                    var dataModel = JsonConvert.DeserializeObject<List<Patient_ConsultSOAPDetails>>(updateJsonModel);

                    var employeeManager = new PatientSOAPManager();
                    var iEmployees = await employeeManager.LinqInsertUpdate_SOAP(dataModel[0]);

                    return Json(dataModel, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Logger.Error($"Exception: {ex}");
                return Json(ex.Message.ToString(), JsonRequestBehavior.AllowGet);
            }
            return null;
        }
        [HttpPost]
        public async Task<JsonResult> GetEmployeeList()
        {
            var employeeManager = new PatientInfoManager();
            var iEmployees = await employeeManager.GetEmployeeList();


            return Json(iEmployees, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public async Task<JsonResult> GetEmployeeSOAP()
        {
            var employeeManager = new PatientInfoManager();
            var iEmployees = await employeeManager.GetEmployeeSOAP();


            return Json(iEmployees, JsonRequestBehavior.AllowGet);
        }
        public async Task<JsonResult> GetEmployeeSOAP_Progress(int soapId)
        {
            var employeeManager = new PatientInfoManager();
            var iEmployees = await employeeManager.GetEmployeeSOAP_Progress(soapId);


            return Json(iEmployees, JsonRequestBehavior.AllowGet);
        }


    }
}
