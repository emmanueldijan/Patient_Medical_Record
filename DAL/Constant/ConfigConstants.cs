using System.Configuration;

namespace DAL.Constant
{
    public class ConfigConstants
    {
        public static string SQLConnString;

        static ConfigConstants()
        {
            SQLConnString = ConfigurationManager.AppSettings["SQLConnString"];
        }
    }
}
