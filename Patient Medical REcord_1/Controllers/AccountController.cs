using BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Patient_Medical_REcord_1.Controllers
{
    public class AccountController : Controller
    {
        // GET: Account
        public ActionResult Index()
        {
            return View();
        }
        [AllowAnonymous]
        public ActionResult Login(string returnUrl, string fromLogOut)
        {
            return View();
        }
        [AllowAnonymous]

        public ActionResult CheckLogin(string UserName,string UserPassword)
        {
            var employeeLoginManager = new LoginManager();
            var EmployeeLogIns =  employeeLoginManager.GetEmployeeLogIns();
            try
            {
                var Slist = (from t in EmployeeLogIns
                             where t.UserName == UserName
                             select t).ToList();
                if (Slist.Count > 0)
                {
                    string Salt = Slist[0].Salt;
                    string HashedPassword = Slist[0].Password.ToString();

                    byte[] passwordAndSalt = System.Text.Encoding.UTF8.GetBytes(UserPassword + Salt);
                    byte[] hashPass = new System.Security.Cryptography.SHA256Managed().ComputeHash(passwordAndSalt);
                    string hashCode = Convert.ToBase64String(hashPass);
                    if (hashCode == HashedPassword)
                    {
                        return this.RedirectToAction("EmployeeSearchNew", "Home");
                    }
                    else
                    {
                        return View();
                    }
                }
                else
                {
                    return View();
                }



            }
            catch (Exception ex)
            {

                throw ex;
            }

        }
    }
}