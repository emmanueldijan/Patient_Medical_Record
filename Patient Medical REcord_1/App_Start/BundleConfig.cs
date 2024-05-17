using System.Web;
using System.Web.Optimization;

namespace Patient_Medical_REcord_1
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
            bundles.Add(new ScriptBundle("~/scripts/PatientData").Include(
                "~/Scripts/EmployeeInformation.js"));
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                     "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                "~/Scripts/DataTables/media/js/jquery.dataTables.min.js",
                "~/Scripts/dataTables.cellEdit.js",
                "~/Scripts/bootstrap-multiselect.js",
                "~/Scripts/Datatables/extensions/Select/js/dataTables.select.js",
                "~/Scripts/jquery-confirm.min.js",
                "~/Scripts/Datatables/extensions/Buttons/js/dataTables.buttons.min.js",
                "~/Scripts/Datatables/extensions/JSZip/jszip.min.js",
                "~/Scripts/Datatables/extensions/Buttons/js/buttons.html5.min.js",
                "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/Content/DataTables/media/css/jquery.dataTables.min.css",
                "~/Content/bootstrap.css",
                "~/Content/jquery-ui.css",
                "~/Content/bootstrap-multiselect.css",
                "~/Content/Datatables/extensions/Select/css/select.dataTables.css",
                "~/Content/jquery-confirm.min.css",
               "~/Content/DataTables/extensions/Buttons/css/buttons.dataTables.min.css",
                "~/Content/site.css"));
        }
    }
}
