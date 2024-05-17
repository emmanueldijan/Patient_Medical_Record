var updateArray = [];
var patientHistData = [];
var Global_patientId, UniquePatientID;
var patientHistDataInfo = [];
var patientHistData2 = [];
var today;
var Hist_Id;
var ImmuneID;
var TempArray = [];
var ishist;

function getTodayDate() {
    today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
}
function createUpateArray() {
    var p_Id;
    if (document.getElementById("lblPatient_ID").value == null || document.getElementById("lblPatient_ID").value == "") {
        p_Id = 0;
    }
    else {
        p_Id = document.getElementById("lblPatient_ID").value.trim();
    }
    updateArray = [];
    getTodayDate();
    var update = "";
    update = {
        Patient_ID: p_Id,
        Patient_No: document.getElementById("txtPatientIDNo").value.trim(),
        First_Name: document.getElementById("txtFirstName").value.trim(),
        Last_Name: document.getElementById("txtLastName").value.trim(),
        Middle_Name: document.getElementById("txtMiddleName").value.trim(),
        Address: document.getElementById("txtAddress").value.trim(),
        BirthDate: document.getElementById("txtBirthDate").value.trim(),
        Age: document.getElementById("txtAge").value.trim(),
        Sex: document.getElementById("txtSex").value.trim(),
        Nationality: document.getElementById("txtNationality").value.trim(),
        MobielNo_1: document.getElementById("txtMobileNo1").value.trim(),
        MobielNo_2: document.getElementById("txtMobileNo2").value.trim(),
        MobielNo_3: document.getElementById("txtMobileNo3").value.trim(),
        PhoneNo: document.getElementById("txtPhoneNo").value.trim(),
        CreateDate: today
    };


    updateArray.push(update);
    UpdatePDMManager(updateArray);
}

function UpdatePDMManager(updateArray) {
    //if (updateArray && updateArray.length > 0 && !ManagerUpdate) {
    $.ajax({
        type: 'POST',
        //url: '/Home/EmployeePDMUpdate', // we are calling json method
        url: '/Home/PatientInfoUpdate', // we are calling json method
        traditional: true,

        //dataType: 'json',
        data: { updateJsonModel: JSON.stringify(updateArray), connId: "" },
        success: function (data) {
            //PopulateData();
            alert("Data Successfully Saved.");
            PatientMasterFileTab.click();
            $('#modalAddPatientRecord').hide();
            $('.modal-backdrop').hide();

            
        },
        error: function (ex) {
            console.log('EmployeePDMUpdate error', ex);
        }
    });

    //}

}
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}
function GetpatienttoUpdate(MasterPatient_No, patientID) {
    Global_patientId = MasterPatient_No;
    var patientUpdateInfo = $.map(patientHistData, function (data) {
        //console.log(data, "viewdata");
        var match = data["MasterPatient_No"] == Global_patientId;
        return match ? data : null;
    }); 
    var bday = formatDate(patientUpdateInfo[0].BirthDate);

    document.getElementById("lblPatient_ID").value = patientID;    
    document.getElementById("txtPatientIDNo").value = patientUpdateInfo[0].MasterPatient_No;
    document.getElementById("txtFirstName").value = patientUpdateInfo[0].First_Name;
    document.getElementById("txtLastName").value = patientUpdateInfo[0].Last_Name;
    document.getElementById("txtMiddleName").value = patientUpdateInfo[0].Middle_Name;
    document.getElementById("txtAddress").value = patientUpdateInfo[0].Address;
    document.getElementById("txtBirthDate").value = bday;
    document.getElementById("txtAge").value = patientUpdateInfo[0].Age;
    document.getElementById("txtSex").value = patientUpdateInfo[0].Sex;
    document.getElementById("txtNationality").value = patientUpdateInfo[0].Nationality;
    document.getElementById("txtMobileNo1").value = patientUpdateInfo[0].MobielNo_1;
    document.getElementById("txtMobileNo2").value = patientUpdateInfo[0].MobielNo_2;
    document.getElementById("txtMobileNo3").value = patientUpdateInfo[0].MobielNo_3;
    document.getElementById("txtPhoneNo").value = patientUpdateInfo[0].PhoneNo;

    $('#modalAddPatientRecord').modal('show');

}
function GetpatientDetails(MasterPatient_No, patientID) {
    Global_patientId = MasterPatient_No;
    UniquePatientID = patientID;
    PatientInformationTab.click();
    //PatientInformationTab_Load(patientID);  

}
function modalInsertPatientClick() {
    createUpateArray();
}
function modalIHistandImmunetClick() {
    getTodayDate();
    updateArrayHist = [];
    updateArrayImmune = [];
    if (document.getElementById("lblhist_ID").value == null || document.getElementById("lblhist_ID").value == "") {
        Hist_Id = 0;
    }
    else {
        Hist_Id = document.getElementById("lblhist_ID").value.trim();
    }
    if (document.getElementById("lblimmune_ID").value == null || document.getElementById("lblimmune_ID").value == "") {
        ImmuneID = 0;
    }
    else {
        ImmuneID = document.getElementById("lblimmune_ID").value.trim();
    }
    if (ishist) {


       
       var updateHIST = {
            PHist_Id: Hist_Id,
            Patient_No: patientHistDataInfo[0].Patient_ID,
            PatientFlags: document.getElementById("txtPatientFlags").value == "null" ? "" : document.getElementById("txtPatientFlags").value.trim(),
            Hospitalization: document.getElementById("txtHospitalization").value == "null" ? "" : document.getElementById("txtHospitalization").value.trim(),
            Surgery: document.getElementById("txtSurgery").value == "null" ? "" : document.getElementById("txtSurgery").value.trim(),
            Trauma: document.getElementById("txtTrauma").value == "null" ? "" : document.getElementById("txtTrauma").value.trim(),
            Accident: document.getElementById("txtAccident").value == "null" ? "" : document.getElementById("txtAccident").value.trim(),
            Habits: document.getElementById("txtHabits").value == "null" ? "" : document.getElementById("txtHabits").value.trim(),
            Food_Allergy: document.getElementById("txtFoodAllergy").value == "null" ? "" : document.getElementById("txtFoodAllergy").value.trim(),
            Medicine_Allergy: document.getElementById("txtMedicineAllergy").value == "null" ? "" : document.getElementById("txtMedicineAllergy").value.trim(),
            Other_Allergy: document.getElementById("txtOtherAllergy").value == "null" ? "" : document.getElementById("txtOtherAllergy").value.trim(),
            PastIllness: document.getElementById("txtPastIllness").value == "null" ? "" : document.getElementById("txtPastIllness").value.trim(),
            CreateDate: today

        };


        updateArrayHist.push(updateHIST);
        if (updateArrayHist.length > 0) {

            $.ajax({
                type: 'POST',
                //url: '/Home/EmployeePDMUpdate', // we are calling json method
                url: '/Home/PatientHDetailsUpdate', // we are calling json method
                traditional: true,

                //dataType: 'json',
                data: { updateJsonModel: JSON.stringify(updateArrayHist), connId: "" },
                success: function (data) {
                    PopulateData();
                    TempArray = $.map(patientHistData, function (data) {
                        //console.log(data, "viewdata");
                        var match = data["MasterPatient_No"] == Global_patientId;
                        return match ? data : null;
                    });
                    patientHistData = null;
                    patientHistData = JSON.parse(JSON.stringify(TempArray));
                    alert("Data Successfully Saved.");

                    patienthist.click();

                },
                error: function (ex) {
                    console.log('EmployeePDMUpdate error', ex);
                }
            });
        }
    }
    else {
      

        var updateImmune = {
            PHist_Id: Hist_Id,
            PImmune_Id: ImmuneID,
            Patient_No: patientHistDataInfo[0].Patient_ID,
            CC_Dosage: document.getElementById("txtCCDosage").value.trim(),
            CC_Orderby: document.getElementById("txtCCOrderby").value.trim(),
            CC_DateOrder: document.getElementById("DtxtCCateOrder").value.trim(),
            CC_AdministerBy: document.getElementById("txtCCAdministerBy").value.trim(),
            CC_DateAdminister: document.getElementById("txtCCDateAdminister").value.trim(),

            Flu_Dosage: document.getElementById("txtFLUDosage").value.trim(),
            Flu_Orderby: document.getElementById("txtFLUOrderby").value.trim(),
            Flu_DateOrder: document.getElementById("txtFLUDateOrder").value.trim(),
            Flu_AdministerBy: document.getElementById("txtFLUAdministerBy").value.trim(),
            Flu_DateAdminister: document.getElementById("txtFLUDateAdminister").value.trim(),

            HA_Dosage: document.getElementById("txtHADosage").value.trim(),
            HA_Orderby: document.getElementById("txtHAOrderby").value.trim(),
            HA_DateOrder: document.getElementById("txtHADateOrder").value.trim(),
            HA_AdministerBy: document.getElementById("txtHAAdministerBy").value.trim(),
            HA_DateAdminister: document.getElementById("txtHADateAdminister").value.trim(),

            HB_Dosage: document.getElementById("txtHBDosage").value.trim(),
            HB_Orderby: document.getElementById("txtHBOrderby").value.trim(),
            HB_DateOrder: document.getElementById("txtHBDateOrder").value.trim(),
            HB_AdministerBy: document.getElementById("txtHBAdministerBy").value.trim(),
            HB_DateAdminister: document.getElementById("txtHBDateAdminister").value.trim(),

            HAB_Dosage: document.getElementById("txtHABDosage").value.trim(),
            HAB_Orderby: document.getElementById("txtHABOrderby").value.trim(),
            HAB_DateOrder: document.getElementById("txtHABDateOrder").value.trim(),
            HAB_AdministerBy: document.getElementById("txtHABAdministerBy").value.trim(),
            HAB_DateAdminister: document.getElementById("txtHABDateAdminister").value.trim(),

            MMR_Dosage: document.getElementById("txtMMRDosage").value.trim(),
            MMR_Orderby: document.getElementById("txtMMROrderby").value.trim(),
            MMR_DateOrder: document.getElementById("txtMMRDateOrder").value.trim(),
            MMR_AdministerBy: document.getElementById("txtMMRAdministerBy").value.trim(),
            MMR_DateAdminister: document.getElementById("txtMMRDateAdminister").value.trim(),

            TT_Dosage: document.getElementById("txtTTDosage").value.trim(),
            TT_Orderby: document.getElementById("txtTTOrderby").value.trim(),
            TT_DateOrder: document.getElementById("txtTTDateOrder").value.trim(),
            TT_AdministerBy: document.getElementById("txtTTAdministerBy").value.trim(),
            TT_DateAdminister: document.getElementById("txtTTDateAdminister").value.trim(),

            Varicella_Dosage: document.getElementById("txtVARDosage").value.trim(),
            Varicella_Orderby: document.getElementById("txtVAROrderby").value.trim(),
            Varicella_DateOrder: document.getElementById("txtVARDateOrder").value.trim(),
            Varicella_AdministerBy: document.getElementById("txtVARAdministerBy").value.trim(),
            Varicella_DateAdminister: document.getElementById("txtVARDateAdminister").value.trim(),

            TA_Dosage: document.getElementById("txtTADosage").value.trim(),
            TA_Orderby: document.getElementById("txtTAOrderby").value.trim(),
            TA_DateOrder: document.getElementById("txtTADateOrder").value.trim(),
            TA_AdministerBy: document.getElementById("txtTAAdministerBy").value.trim(),
            TA_DateAdminister: document.getElementById("txtTADateAdminister").value.trim(),

            TD_Dosage: document.getElementById("txtTDDosage").value.trim(),
            TD_Orderby: document.getElementById("txtTDOrderby").value.trim(),
            TD_DateOrder: document.getElementById("txtTDDateOrder").value.trim(),
            TD_AdministerBy: document.getElementById("txtTDAdministerBy").value.trim(),
            TD_DateAdminister: document.getElementById("txtTDDateAdminister").value.trim(),

            TDAP_Dosage: document.getElementById("txtTDAPDosage").value.trim(),
            TDAP_Orderby: document.getElementById("txtTDAPOrderby").value.trim(),
            TDAP_DateOrder: document.getElementById("txtTDAPDateOrder").value.trim(),
            TDAP_AdministerBy: document.getElementById("txtTDAPAdministerBy").value.trim(),
            TDAP_DateAdminister: document.getElementById("txtTDAPDateAdminister").value.trim(),

            TG_Dosage: document.getElementById("txtTGDosage").value.trim(),
            TG_Orderby: document.getElementById("txtTGOrderby").value.trim(),
            TG_DateOrder: document.getElementById("txtTGDateOrder").value.trim(),
            TG_AdministerBy: document.getElementById("txtTGAdministerBy").value.trim(),
            TG_DateAdminister: document.getElementById("txtTGDateAdminister").value.trim(),
            CreateDate: today
        }

        updateArrayImmune.push(updateImmune);
        if (updateArrayImmune.length > 0) {


            $.ajax({
                type: 'POST',
                //url: '/Home/EmployeePDMUpdate', // we are calling json method
                url: '/Home/PatientImmunizationUpdate', // we are calling json method
                traditional: true,

                //dataType: 'json',
                data: { updateJsonModel: JSON.stringify(updateArrayImmune), connId: "" },
                success: function (data) {
                    PopulateData();
                    TempArray = $.map(patientHistData, function (data) {
                        //console.log(data, "viewdata");
                        var match = data["MasterPatient_No"] == Global_patientId;
                        return match ? data : null;
                    });
                    patientHistData = null;
                    patientHistData = JSON.parse(JSON.stringify(TempArray));
                    alert("Data Successfully Saved.");

                    immunization.click();
                },
                error: function (ex) {
                    console.log('EmployeePDMUpdate error', ex);
                }
            });
        }
    }
}
$(document).ready(function () {
    $('#txtBirthDate').change(function (event) {
        var bday = document.getElementById("txtBirthDate").value.trim();
        const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);
        getAge(bday);
        document.getElementById("txtAge").value = getAge(bday);
    });
    $('#PatientMasterFileTab').click(function (event) {
        document.getElementById("PMasterTab").className = "active";
        document.getElementById("PMasterTab").style.display = "block";
        document.getElementById("PatientMasterFileTab").className = "tab-pane fade";
        document.getElementById("pInfoTab").className = "";
        document.getElementById("pInfoTab").style.display = "none";
        document.getElementById("PatientInformationTab").className = "tab-pane fade active";
        $("#PatientMasterFileTab").attr('class', 'active');
        $("#PatientInformationTab").attr('class', '');       
        PopulateData();
    });


    $('#PatientInformationTab').click(function (event) {
        //patientinfoload(PatientInformationTab);
        patientinfo.click();
        document.getElementById("PMasterTab").className = "";
        document.getElementById("PMasterTab").style.display = "none";
        document.getElementById("PatientMasterFileTab").className = "tab-pane fade active";
        document.getElementById("pInfoTab").className = "active";
        document.getElementById("pInfoTab").style.display = "block";
        document.getElementById("PatientInformationTab").className = "tab-pane fade";


        $("#PatientMasterFileTab").attr('class', '');
        $("#PatientInformationTab").attr('class', 'active');
    });
    $('#patientinfo').click(function (event) {
        document.getElementById("tabUpdateButton").style.display = "none";

        document.getElementById("sideTab").style.height = "556px";

        $.ajax({
            type: 'POST',
            url: '/Home/GetPartialView', // we are calling json method
            traditional: true,
            async: true,
            data: { PartialViewType: 'GetPatientInfo' },
            success: function (data) {
                console.log(Global_patientId, "patientinfo");
                var patient_Hist = '';
                $("#divPartialViewContainer").html(data);
                patientHistDataInfo = $.map(patientHistData, function (data) {
                    //console.log(data, "viewdata");
                    var match = data["MasterPatient_No"] == Global_patientId;
                    return match ? data : null;
                });
                $.each(patientHistDataInfo, function (key, value) {
                    document.getElementById("PatientDetails").innerText = value.FullName + " \n" + value.Age + "-" + value.Sex + " " + value.Address;

                    patient_Hist += '<tr>';
                    patient_Hist += '<td>' + "Patient_No: " + '</td>';
                    patient_Hist += '<td>' + value.Patient_No + '</td>';
                    patient_Hist += '<td>' + "Status: " + '</td>';
                    patient_Hist += '<td>' + "Active" + '</td>';
                    patient_Hist += '</tr>';
                    patient_Hist += '<tr>';
                    patient_Hist += '<td>' + "Sex:" + '</td>';
                    patient_Hist += '<td>' + value.Sex + '</td>';
                    patient_Hist += '<td>' + "BirthDate: " + '</td>';
                    patient_Hist += '<td>' + value.BirthDate + '</td>';
                    patient_Hist += '</tr>';
                    patient_Hist += '<tr>';
                    patient_Hist += '<td>' + "Address:" + '</td>';
                    patient_Hist += '<td>' + value.Address + '</td>';
                    patient_Hist += '<td>' + "Tel. No.: " + '</td>';
                    patient_Hist += '<td>' + value.PhoneNo + '</td>';
                    patient_Hist += '</tr>';
                    patient_Hist += '<tr>';
                    patient_Hist += '<td>' + "Nationality:" + '</td>';
                    patient_Hist += '<td>' + value.Nationality + '</td>';
                    patient_Hist += '<td>' + "Mobile No. 1: " + '</td>';
                    patient_Hist += '<td>' + value.MobielNo_1 + '</td>';
                    patient_Hist += '</tr>';
                    patient_Hist += '<tr>';
                    patient_Hist += '<td>' + "Age:" + '</td>';
                    patient_Hist += '<td>' + value.Age + '</td>';
                    patient_Hist += '<td>' + "Mobile No. 2: " + '</td>';
                    patient_Hist += '<td>' + value.MobielNo_2 + '</td>';
                    patient_Hist += '</tr>';
                    patient_Hist += '<tr>';
                    patient_Hist += '<td>' + "Create Date:" + '</td>';
                    patient_Hist += '<td>' + value.CreateDate + '</td>';
                    patient_Hist += '<td>' + "Mobile No. 3: " + '</td>';
                    patient_Hist += '<td>' + value.MobielNo_3 + '</td>';
                    patient_Hist += '</tr>';

                });
                $('#dtpatientInfo').append(patient_Hist);


            },
            error: function (ex) {
            }
        });





    });

    $('#patienthist').click(function (event) {
        document.getElementById("tabUpdateButton").style.display = "inline";
        document.getElementById("sideTab").style.height = "617px";
        ishist = true;

        $.ajax({
            type: 'POST',
            url: '/Home/GetPartialView', // we are calling json method
            traditional: true,
            async: true,
            data: { PartialViewType: 'GetPatientHistory' },
            success: function (data) {
                console.log(Global_patientId, "patientID");
                var patient_data = '';
                patientHistData2 = [];

                $("#divPartialViewContainer").html(data);
                patientHistData2 = $.map(patientHistData, function (data) {
                    var match = data["MasterPatient_No"] == Global_patientId;
                    return match ? data : null;
                });
                if (patientHistData2[0].PHist_Id == null || patientHistData2[0].PHist_Id == "") {
                    document.getElementById("lblhist_ID").value = "";

                }
                else {
                    document.getElementById("lblhist_ID").value = patientHistData2[0].PHist_Id;

                }

                $("#txtPatientFlags").text(patientHistData2[0].PatientFlags);
                $("#txtHospitalization").text(patientHistData2[0].Hospitalization);
                $("#txtSurgery").text(patientHistData2[0].Surgery);
                $("#txtTrauma").text(patientHistData2[0].Trauma);
                $("#txtAccident").text(patientHistData2[0].Accident);
                $("#txtHabits").text(patientHistData2[0].Habits);
                $("#txtFoodAllergy").text(patientHistData2[0].Food_Allergy);
                $("#txtMedicineAllergy").text(patientHistData2[0].Medicine_Allergy);
                $("#txtOtherAllergy").text(patientHistData2[0].Other_Allergy);
                $("#txtPastIllness").text(patientHistData2[0].PastIllness);

            },
            error: function (ex) {
            }
        });

    });
    $('#consultation').click(function (event) {
        document.getElementById("tabUpdateButton").style.display = "none";
        document.getElementById("sideTab").style.height = "556px";

        $.ajax({
            type: 'POST',
            url: '/Home/GetPartialView', // we are calling json method
            traditional: true,
            async: true,
            data: { PartialViewType: 'GetPatientConsultation' },
            success: function (data) {
                console.log(Global_patientId, "patientID");
                $("#divPartialViewContainer").html(data);
                $.ajax({
                    type: 'POST',
                    url: '/Home/GetEmployeeSOAP', // we are calling json method
                    traditional: true,
                    async: true,
                    success: function (SOAPdata) {
                        var patient_data = '';
                        SOAPdatas = $.map(SOAPdata, function (data) {
                            var match = data["Patient_ID"] == UniquePatientID;
                            return match ? data : null;
                        });
                        $.each(SOAPdatas, function (key, value) {

                            patient_data += '<tr>';
                            patient_data += '<td>' + value.PSOAP_Id + '</td>';
                            patient_data += '<td>' + value.Diagnosis + '</td>';
                            patient_data += '<td>' + value.CosultationDate + '</td>';
                            patient_data += '<td><button onclick="GetSOAPDetails(' + value.PSOAP_Id + ')">View</button></td>';
                            patient_data += '</tr>';
                        });
                        console.log(patient_data);
                        $('#consultationTable').append(patient_data);
                    },
                    error: function (ex) {
                        throw ex;
                    }
                });

            },
            error: function (ex) {
            }
        });





    });
    $('#immunization').click(function (event) {
        document.getElementById("tabUpdateButton").style.display = "inline";
        document.getElementById("sideTab").style.height = "617px";
        ishist = false;

        $.ajax({
            type: 'POST',
            url: '/Home/GetPartialView', // we are calling json method
            traditional: true,
            async: true,
            data: { PartialViewType: 'GetPatientImmunization' },
            success: function (data) {
                patientHistData2 = [];

                console.log(Global_patientId, "patientID");
                $("#divPartialViewContainer").html(data);
                patientHistData2 = $.map(patientHistData, function (data) {
                    var match = data["MasterPatient_No"] == Global_patientId;
                    return match ? data : null;
                });
                if (patientHistData2[0].PImmune_Id == null || patientHistData2[0].PImmune_Id == "") {
                    document.getElementById("lblimmune_ID").value = "";

                }
                else {
                    document.getElementById("lblimmune_ID").value = patientHistData2[0].PImmune_Id;

                }
                $("#txtCCDosage").val(patientHistData2[0].CC_Dosage);
                $("#txtCCOrderby").val(patientHistData2[0].CC_Orderby);
                $("#DtxtCCateOrder").val(patientHistData2[0].CC_DateOrder);
                $("#txtCCAdministerBy").val(patientHistData2[0].CC_AdministerBy);
                $("#txtCCDateAdminister").val(patientHistData2[0].CC_DateAdminister);

                $("#txtFLUDosage").val(patientHistData2[0].Flu_Dosage);
                $("#txtFLUOrderby").val(patientHistData2[0].Flu_Orderby);
                $("#txtFLUDateOrder").val(patientHistData2[0].Flu_DateOrder);
                $("#txtFLUAdministerBy").val(patientHistData2[0].Flu_AdministerBy);
                $("#txtFLUDateAdminister").val(patientHistData2[0].Flu_DateAdminister);

                $("#txtHADosage").val(patientHistData2[0].HA_Dosage);
                $("#txtHAOrderby").val(patientHistData2[0].HA_Orderby);
                $("#txtHADateOrder").val(patientHistData2[0].HA_DateOrder);
                $("#txtHAAdministerBy").val(patientHistData2[0].HA_AdministerBy);
                $("#txtHADateAdminister").val(patientHistData2[0].HA_DateAdminister);

                $("#txtHBDosage").val(patientHistData2[0].HB_Dosage);
                $("#txtHBOrderby").val(patientHistData2[0].HB_Orderby);
                $("#txtHBDateOrder").val(patientHistData2[0].HB_DateOrder);
                $("#txtHBAdministerBy").val(patientHistData2[0].HB_AdministerBy);
                $("#txtHBDateAdminister").val(patientHistData2[0].HB_DateAdminister);

                $("#txtHABDosage").val(patientHistData2[0].HAB_Dosage);
                $("#txtHABOrderby").val(patientHistData2[0].HAB_Orderby);
                $("#txtHABDateOrder").val(patientHistData2[0].HAB_DateOrder);
                $("#txtHABAdministerBy").val(patientHistData2[0].HAB_AdministerBy);
                $("#txtHABDateAdminister").val(patientHistData2[0].HAB_DateAdminister);

                $("#txtMMRDosage").val(patientHistData2[0].MMR_Dosage);
                $("#txtMMROrderby").val(patientHistData2[0].MMR_Orderby);
                $("#txtMMRDateOrder").val(patientHistData2[0].MMR_DateOrder);
                $("#txtMMRAdministerBy").val(patientHistData2[0].MMR_AdministerBy);
                $("#txtMMRDateAdminister").val(patientHistData2[0].MMR_DateAdminister);

                $("#txtTTDosage").val(patientHistData2[0].TT_Dosage);
                $("#txtTTOrderby").val(patientHistData2[0].TT_Orderby);
                $("#txtTTDateOrder").val(patientHistData2[0].TT_DateOrder);
                $("#txtTTAdministerBy").val(patientHistData2[0].TT_AdministerBy);
                $("#txtTTDateAdminister").val(patientHistData2[0].TT_DateAdminister);

                $("#txtVARDosage").val(patientHistData2[0].Varicella_Dosage);
                $("#txtVAROrderby").val(patientHistData2[0].Varicella_Orderby);
                $("#txtVARDateOrder").val(patientHistData2[0].Varicella_DateOrder);
                $("#txtVARAdministerBy").val(patientHistData2[0].Varicella_AdministerBy);
                $("#txtVARDateAdminister").val(patientHistData2[0].Varicella_DateAdminister);


                $("#txtTADosage").val(patientHistData2[0].TA_Dosage);
                $("#txtTAOrderby").val(patientHistData2[0].TA_Orderby);
                $("#txtTADateOrder").val(patientHistData2[0].TA_DateOrder);
                $("#txtTAAdministerBy").val(patientHistData2[0].TA_AdministerBy);
                $("#txtTADateAdminister").val(patientHistData2[0].TA_DateAdminister);

                $("#txtTDDosage").val(patientHistData2[0].TD_Dosage);
                $("#txtTDOrderby").val(patientHistData2[0].TD_Orderby);
                $("#txtTDDateOrder").val(patientHistData2[0].TD_DateOrder);
                $("#txtTDAdministerBy").val(patientHistData2[0].TD_AdministerBy);
                $("#txtTDDateAdminister").val(patientHistData2[0].TD_DateAdminister);

                $("#txtTDAPDosage").val(patientHistData2[0].TDAP_Dosage);
                $("#txtTDAPOrderby").val(patientHistData2[0].TDAP_Orderby);
                $("#txtTDAPDateOrder").val(patientHistData2[0].TDAP_DateOrder);
                $("#txtTDAPAdministerBy").val(patientHistData2[0].TDAP_AdministerBy);
                $("#txtTDAPDateAdminister").val(patientHistData2[0].TDAP_DateAdminister);

                $("#txtTGDosage").val(patientHistData2[0].TG_Dosage);
                $("#txtTGOrderby").val(patientHistData2[0].TG_Orderby);
                $("#txtTGDateOrder").val(patientHistData2[0].TG_DateOrder);
                $("#txtTGAdministerBy").val(patientHistData2[0].TG_AdministerBy);
                $("#txtTGDateAdminister").val(patientHistData2[0].TG_DateAdminister);
            },
            error: function (ex) {
            }
        });





    });



    $('#AddPatientRecord').click(function (event) {
        document.getElementById("lblPatient_ID").value = "";
        document.getElementById("txtPatientIDNo").value = "";
        document.getElementById("txtFirstName").value = "";
        document.getElementById("txtLastName").value = "";
        document.getElementById("txtMiddleName").value = "";
        document.getElementById("txtAddress").value = "";
        document.getElementById("txtBirthDate").value = "";
        document.getElementById("txtAge").value = "";
        document.getElementById("txtSex").value = "";
        document.getElementById("txtNationality").value = "";
        document.getElementById("txtMobileNo1").value = "";
        document.getElementById("txtMobileNo2").value = "";
        document.getElementById("txtMobileNo3").value = "";
        document.getElementById("txtPhoneNo").value = "";

        $('#modalAddPatientRecord').modal('show');
    });


    PopulateData();
});
function PopulateData() {
    $.ajax({
        type: 'POST',
        url: '/Home/GetEmployeeList', // we are calling json method
        traditional: true,
        async: true,
        success: function (data) {
            patientHistData = [];
            var patient_data = '';
            patientHistData = data;
            //$.each(data, function (key, value) {

            //    patient_data += '<tr>';
            //    patient_data += '<td>' + value.MasterPatient_No + '</td>';
            //    patient_data += '<td>' + value.Last_Name + ', ' + value.First_Name + ' ' + value.Middle_Name + '</td>';
            //    patient_data += '<td>' + value.Address + '</td>';
            //    patient_data += '<td>' + value.BirthDate + '</td>';
            //    patient_data += '<td>' + value.Age + '</td>';
            //    patient_data += '<td><button onclick="GetpatientDetails(' + value.MasterPatient_No + ',' + value.Patient_ID + ')">View</button></td>';
            //    patient_data += '</tr>';
            //});
            //$('#MyTable').append(patient_data);
            $('#example').DataTable().clear().destroy();
            $('#example').DataTable({
                scroller: true,
                data: data,
                columns: [
                   
                    { data: "MasterPatient_No" },
                    { data: "FullName" } ,
                    { data: "Address" },
                    { data: "BirthDate" },
                    { data: "Age" },
                    {
                        "data": null,
                        "bSortable": false,
                        "mRender": function (o) { return '<button class="btn btn-secondary" onclick="GetpatientDetails(' + o.MasterPatient_No + ',' + o.Patient_ID + ')">View</button>'; }
                    },
                    {
                        "data": null,
                        "bSortable": false,
                        "mRender": function (o) { return '<button class="btn btn-success" onclick="GetpatienttoUpdate(' + o.MasterPatient_No + ',' + o.Patient_ID + ')">Edit</button>'; }
                    }

                ]
                //,dom: 'Bfrtip'
                //,buttons: [
                //    'excel'
                //]
            });
            //$('#modalAddPatientRecord').modal('hide');

        },
        error: function (ex) {
            throw ex;
        }
    });

}