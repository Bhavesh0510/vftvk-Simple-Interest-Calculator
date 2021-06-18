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
	
 document.getElementById("result").innerHTML="</br>If you deposit <mark>" + principal + "</mark>,</br> at an interest rate of <mark>" + rate + "</mark> %.</br> You will receive an amount of <mark>"  + interest + "</br></mark> in the year <mark>" + year + "</mark>.";
}

    function updateRate(newVal) 
{
    document.getElementById("rate_val").innerHTML = newVal + "%";

}
