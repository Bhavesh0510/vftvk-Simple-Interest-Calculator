  function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);
    var interest = principal * years * rate /100;
	
 document.getElementById("result").innerHTML="If you deposit "+<span style="backgrond-color:yellow;">principal</span>+",\<br\>at an interest rate of "+<span style="backgrond-color:yellow;">rate</span>+"%\<br\>You will receive an amount of "+<span style="backgrond-color:yellow;">interest</span>+",\<br\>in the year "+<span style="backgrond-color:yellow;">year</span>+"\<br\>"
}

    function updateRate(newVal) 
{
    document.getElementById("rate_val").innerHTML = newVal + "%";

}
