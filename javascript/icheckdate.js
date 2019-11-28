var icheckInDate = document.getElementById("icheckin");
var icheckOutDate = document.getElementById("icheckout");

function searchBook(){

    idate1 = moment($("#icheckin").val(),"YYYY-MM-DD");
    idate2 = moment($("#icheckout").val(),"YYYY-MM-DD");
	function compare(dateTimeA, dateTimeB) {
	if (idate1 < idate2) {
		return 1;
	} else if (idate1 > idate2) {
		return -1;
	} else {
		return 0;
	}
	}
    if(icheckInDate.value == "" || icheckOutDate.value == "")
    {
        return alert("Please choose you booking date");
    }else if(compare($("#icheckin").val(),$("#icheckout").val()) == -1){
		alert("The checkout day should be greater than "+$("#icheckin").val());
    } else {
		window.location.href="booking.html"
	}
}