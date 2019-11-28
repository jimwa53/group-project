var checkInDate = document.getElementById("checkin");
var checkOutDate = document.getElementById("checkout");


    
function searchBooking(){

    date1 = moment($("#checkin").val(),"YYYY-MM-DD");
    date2 = moment($("#checkout").val(),"YYYY-MM-DD");
	var timeover;
	function compare(dateTimeA, dateTimeB) {
	if (date1 < date2) {
		return timeover = 1;
	} else if (date1 > date2) {
		return timeover = -1;
	} else {
		return timeover = 0;
	}
	}
    if(checkInDate.value == "" || checkOutDate.value == "")
    {
        return alert("Please choose you booking date");
    }else if(compare($("#checkin").val(),$("#checkout").val()) == -1){
		alert("The checkout day should be greater than "+$("#checkin").val());
    }  
}

function bookcheck(r) {
	console.log(r);
    date1 = moment($("#checkin").val(),"YYYY-MM-DD");
    date2 = moment($("#checkout").val(),"YYYY-MM-DD");
				if(moment(roomlist[r-1].indate).isBetween(moment(roomlist[r-1].indate),moment(roomlist[r-1].outdate), null, '[]'))
				{
					var room = roomlist[r-1].roomId;

					alert("The room "+(r)+" is booked")
					document.getElementById(r+String(r)).setAttribute("disabled", "");
				}
}