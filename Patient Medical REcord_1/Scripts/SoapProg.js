var divObjhr2 = 'MyConsultasion';
var globalSoapID = "";
var globalHistId = "";
var globalPID = "";

function ShowProgModal() {
   document.getElementById("progBP").value = "";
    document.getElementById("ProgPR").value = "";
    document.getElementById("ProgTemp").value = "";
    document.getElementById("ProgRR").value = "";
    document.getElementById("ProgW").value = "";
    document.getElementById("ProgLB").value = "";
    document.getElementById("ProgFT").value = "";
    document.getElementById("ProgInc").value = "";
    document.getElementById("ProgCM").value = "";
    document.getElementById("ProgBMI").value = "";
    document.getElementById("txtProgNote").value = "";

    $('#modalAddConsultationProg').modal('show');

}
function CancelConsultationDetails() {
    $('#modalViewConsultationDetails').modal('hide');

}
function CancelConsultationSOAP() {
    $('#modalAddPatientRecord').modal('hide');

}
function CancelConsultationProg() {
    $('#modalAddConsultationProg').modal('hide');


}
function GetSOAPDetails(soapID) {
    globalSoapID = soapID;
    $.ajax({
        type: 'POST',
        url: '/Home/GetEmployeeSOAP_Progress', // we are calling json method
        traditional: true,
        async: true,
        data: {
            soapId: soapID
        },
        success: function (SOAPdata) {
            //$('#MyConsultasion').empty();
            var hrdataTbl2 = '<table style="font-size: 14px; color: #333333; width:100%;overflow:auto;height:20%;background-color: silver;"><thead>';
            hrdataTbl2 += '<tr style="background: lightgray;"> <th style="max-width: 90px;text-align: center;">Date Created</th> <th style="max-width: 50px;text-align: center;">Prog ID</th> <th style="max-width: 110px;text-align: center;"> Emergency</th>';
            hrdataTbl2 += '<th style="max-width: 65px;text-align: center;">Follow Up</th> <th style="max-width: 90px;text-align: center;">Blood Pressure</th> <th style="max-width: 60px;text-align: center;">Pulse Rate</th>';
            hrdataTbl2 += '<th style="max-width: 110px;text-align: center;">Temperature</th> <th style="max-width: 100px;text-align: center;">Respiratory Rate</th> <th style="max-width: 80px;text-align: center;">Weight</th>';
            hrdataTbl2 += '<th style="max-width: 80px;text-align: center;">Height</th> <th style="max-width: 50px;text-align: center;">BMI</th> <th style="max-width: 100px">Notes</th></tr ></thead > <tbody>';
            SOAPdatas = $.map(SOAPdata, function (data) {
                var match = data["Patient_ID"] == UniquePatientID;
                return match ? data : null;
            });
            
            $.each(SOAPdatas, function (key, value) {
                console.log(SOAPdatas[key].PSOAP_Id, value, "sopas");


                hrdataTbl2 += '<tr>';
                hrdataTbl2 += '<td>' + value.CreateDate  + '</td>';
                hrdataTbl2 += '<td>' + value.PPROG_Id + '</td>';
                hrdataTbl2 += '<td>' + value.Emergency + '</td>';

                hrdataTbl2 += '<td>' + value.FollowUp + '</td>';
                hrdataTbl2 += '<td>' + value.BloodPressure + '</td>';
                hrdataTbl2 += '<td>' + value.PulseRate + '</td>';

                hrdataTbl2 += '<td>' + value.Temperature + '</td>';
                hrdataTbl2 += '<td>' + value.RespiratoryRate + '</td>';
                hrdataTbl2 += '<td>' + value.Weight + '</td>';

                hrdataTbl2 += '<td>' + value.Height + '</td>';
                hrdataTbl2 += '<td>' + value.BMI + '</td>';
                hrdataTbl2 += '<td>' + value.Notes + '</td>';

                hrdataTbl2 += '</tr>';
            });
            hrdataTbl2 += '</tbody></table>';

            $('#' + divObjhr2)[0].innerHTML = hrdataTbl2;
            document.getElementById('lblsubjective').innerHTML = SOAPdatas[0].Subjective;
            document.getElementById('lblHEENT').innerHTML = SOAPdatas[0].HEENT;
            document.getElementById('lblHeart').innerHTML = SOAPdatas[0].Heart;
            document.getElementById('lblLungs').innerHTML = SOAPdatas[0].Lungs;
            document.getElementById('lblExtremities').innerHTML = SOAPdatas[0].Extremities;
            document.getElementById('lblAbdomen').innerHTML = SOAPdatas[0].Abdomen;
            document.getElementById('lblSkin').innerHTML = SOAPdatas[0].Skin;

            document.getElementById('lblMSkelital').innerHTML = SOAPdatas[0].MSkelital;
            document.getElementById('lblGUrinary').innerHTML = SOAPdatas[0].GUrinary;
            document.getElementById('lblSOthers').innerHTML = SOAPdatas[0].Others;
            document.getElementById('lblOHFlags').innerHTML = SOAPdatas[0].OHazzardFlags;
            document.getElementById('lblDcategory').innerHTML = SOAPdatas[0].DiagnosisCategory;
            document.getElementById('lblDiagnosis').innerHTML = SOAPdatas[0].Diagnosis;
            document.getElementById('lblAssesment').innerHTML = SOAPdatas[0].Assesment;
            document.getElementById('lblPlan').innerHTML = SOAPdatas[0].SOAP_Plan;

            document.getElementById('lblsoapno').innerHTML = soapID;
            document.getElementById('lblconsultDate').innerHTML = SOAPdatas[0].CosultationDate;
            globalHistId = SOAPdatas[0].pHist_Id;
            globalPID = SOAPdatas[0].Patient_ID;

            $('#modalViewConsultationDetails').modal('show');

        },
        error: function (ex) {
            throw ex;
        }
    });

}

function LengthConverter_FTtoIncCM(valNum) {
    document.getElementById("ProgInc").value = valNum * 12;
    document.getElementById("ProgCM").value = valNum / 0.032808;
    calculateBMI();
}
function LengthConverter_InctoFTCM(valNum) {
    document.getElementById("ProgFT").value = valNum * 0.083333;
    document.getElementById("ProgCM").value = valNum / 0.39370;
    calculateBMI();
}
function LengthConverter_CMtoFTInc(valNum) {
    document.getElementById("ProgFT").value = valNum * 0.032808;
    document.getElementById("ProgInc").value = valNum * 0.39370;
    calculateBMI();
}
function weightlConverter_LBK(valNum) {
    document.getElementById("ProgW").value = valNum / 2.2046;
    calculateBMI();
}
function weightConverter_KLB(valNum) {
    document.getElementById("ProgLB").value = valNum * 2.2046;
    calculateBMI();
}
function calculateBMI() {
    if ((document.getElementById("ProgFT").value != "" && document.getElementById("ProgLB").value != "") || document.getElementById("ProgFT").value >0 && document.getElementById("ProgLB").value >0 ) {
        var weight = document.getElementById("ProgW").value;
        var height = document.getElementById("ProgCM").value;
        if (weight > 0 && height > 0) {
            var finalBmi = weight / (height / 100 * height / 100);
            document.getElementById("ProgBMI").value = finalBmi;
        }
        else {
            document.getElementById("ProgBMI").value = "";
        }
    }
    else {
        document.getElementById("ProgBMI").value = "";
    }
}
function AddUpdateSOAP() {
    getTodayDate();
    updateArray = [];
    var update = {
        Patient_No: patientHistDataInfo[0].Patient_ID,
        Subjective: document.getElementById("txtSubjective").value.trim(),
        HEENT: document.getElementById("txtheent").value.trim(),
        Heart: document.getElementById("txtheart").value.trim(),
        Lungs: document.getElementById("txtlungs").value.trim(),
        Extremities: document.getElementById("txtEtremities").value.trim(),
        Abdomen: document.getElementById("txtabdomen").value.trim(),
        Skin: document.getElementById("txtskin").value.trim(),
        MSkelital: document.getElementById("txtskelital").value.trim(),
        GUrinary: document.getElementById("txturinary").value.trim(),
        Others: document.getElementById("txtothers").value.trim(),
        OHazzardFlags: document.getElementById("txthazzard").value.trim(),
        DiagnosisCategory: document.getElementById("txtDcategory").value.trim(),
        Diagnosis: document.getElementById("txtdiagnosis").value.trim(),
        Assesment: document.getElementById("txtassesment").value.trim(),
        Plan: document.getElementById("txtplan").value.trim(),
        CreateDate: today,
        CosultationDate: today
    };


    updateArray.push(update);

    $.ajax({
        type: 'POST',
        //url: '/Home/EmployeePDMUpdate', // we are calling json method
        url: '/Home/PatientSOAPUpdate', // we are calling json method
        traditional: true,

        //dataType: 'json',
        data: { updateJsonModel: JSON.stringify(updateArray), connId: "" },
        success: function (data) {
            consultation.click();
            $('#modalADDConsultationSOAP').modal('hide');

        },
        error: function (ex) {
            console.log('EmployeePDMUpdate error', ex);
        }
    });

}
function AddUpdateProgress() {
    getTodayDate();
    updateArray = [];
    console.log(globalPID, globalSoapID, globalHistId, document.getElementById("emergencyflag").value.trim(), document.getElementById("PFollowUpflag").value.trim(), document.getElementById("progBP").value.trim(),document.getElementById("ProgPR").value.trim(), document.getElementById("ProgTemp").value.trim(), document.getElementById("ProgRR").value.trim(), document.getElementById("ProgW").value.trim(), document.getElementById("ProgCM").value.trim(), document.getElementById("ProgBMI").value.trim(), document.getElementById("txtProgNote").value.trim(),);
    var update = {

        pPROG_Id: 0,
        Patient_No: globalPID,
        pSOAP_Id: globalSoapID,
        pHist_Id: globalHistId,
        Emergency: document.getElementById("emergencyflag").value.trim(),
        FollowUp: document.getElementById("PFollowUpflag").value.trim(),
        BloodPressure: document.getElementById("progBP").value.trim(),
        PulseRate: document.getElementById("ProgPR").value.trim(),
        Temperature: document.getElementById("ProgTemp").value.trim(),
        RespiratoryRate: document.getElementById("ProgRR").value.trim(),
        Weight: document.getElementById("ProgW").value.trim(),
        Height: document.getElementById("ProgCM").value.trim(),
        BMI: document.getElementById("ProgBMI").value.trim(),
        Notes: document.getElementById("txtProgNote").value.trim(),
        CreateDate: today
    };
    

    updateArray.push(update);

    $.ajax({
        type: 'POST',
        //url: '/Home/EmployeePDMUpdate', // we are calling json method
        url: '/Home/PatientPROGUpdate', // we are calling json method
        traditional: true,

        //dataType: 'json',
        data: { updateJsonModel: JSON.stringify(updateArray), connId: "" },
        success: function (data) {
            GetSOAPDetails(globalSoapID);
            $('#modalAddConsultationProg').modal('hide');
            //$('#modalADDConsultationSOAP').hide();
            //$('.modal-backdrop').hide();
        },
        error: function (ex) {
            console.log('EmployeePDMUpdate error', ex);
        }
    });

}

$(document).ready(function () {


    $('#AddSOAP').click(function (event) {

        document.getElementById("txtSubjective").value = "";
        document.getElementById("txtheent").value = "";
        document.getElementById("txtheart").value = "";
        document.getElementById("txtlungs").value = "";
        document.getElementById("txtEtremities").value = "";
        document.getElementById("txtabdomen").value = "";
        document.getElementById("txtskin").value = "";
        document.getElementById("txtskelital").value = "";
        document.getElementById("txturinary").value = "";
        document.getElementById("txtothers").value = "";
        document.getElementById("txthazzard").value = "";
        document.getElementById("txtDcategory").value = "";
        document.getElementById("txtdiagnosis").value = "";
        document.getElementById("txtassesment").value = "";
        document.getElementById("txtplan").value = "";

            $('#modalADDConsultationSOAP').modal('show');
    });

});