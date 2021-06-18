  function compute()
{
    var principal = document.getElementById("principal").value;
	
    if(principal < 1){
        alert("Please enter a positive value");
        document.getElementById("principal").focus();
        return false;
    }	

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
	
 document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%.\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+".\<br\>";
}

    function updateRate(newVal) 
{
    document.getElementById("rate_val").innerHTML = newVal + "%";

}
