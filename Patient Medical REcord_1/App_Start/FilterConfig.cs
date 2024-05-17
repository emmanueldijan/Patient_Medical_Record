using System.Web;
using System.Web.Mvc;

namespace Patient_Medical_REcord_1
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
