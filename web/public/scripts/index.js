function RenderLoginPage() {
	$("#loader").addClass("is-active");
    //alert('Render');

     $(function(){

      $("#includedContent").load("../pages/login.html"); 
        $("#loader").removeClass("is-active");

    });
}