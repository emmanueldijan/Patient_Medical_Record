function CheckLogin() {
    //$.ajax({
    //    //type: 'POST',
    //    url: '/Account/CheckLogin', // we are calling json method
    //    traditional: true,
    //    async: true,
    //    data: { UserName: document.getElementById("loginInputUname").value, UserPassword: document.getElementById("loginInputUpw").value },

    //    success: function (data) {
    //        console.log(data);

    //    },
    //    error: function (ex) {
    //        throw ex;
    //    }
    //});
    $.ajax({
        url: "/Account/CheckLogin",
        data: { UserName: document.getElementById("loginInputUname").value, UserPassword: document.getElementById("loginInputUpw").value },
        cache: false,
        type: "POST",
        success: function (data) {
            if (data == "1") {
                alert("Successfull login.");
            } else {
                alert("Invalid user id and password.");
            }
            $("#loginInputUname").attr({ 'value': '' });
            $("#loginInputUpw").attr({ 'value': '' });
        },
        error: function (reponse) {
            alert("error : " + reponse);
        }
    });
}
