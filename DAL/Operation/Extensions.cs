using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;
using System.Xml.Serialization;
namespace DAL.Operation
{
    public static class Extensions
    {
        public static XElement SerializeToXElement<T>(this T obj, XmlSerializer serializer = null, bool omitStandardNamespaces = true)
        {
            var doc = new XDocument();
            using (var writer = doc.CreateWriter())
            {
                (serializer ?? new XmlSerializer(obj.GetType())).Serialize(writer, obj);
                //XmlSerializerNamespaces ns = null;
                //if (omitStandardNamespaces)
                //	(ns = new XmlSerializerNamespaces()).Add("", ""); // Disable the xmlns:xsi and xmlns:xsd lines.
                //(serializer ?? new XmlSerializer(obj.GetType())).Serialize(writer, obj, ns);
            }
            var element = doc.Root;
            if (element != null)
                element.Remove();
            return element;
        }
    }
}
