var checkInDate = document.getElementById("checkin");
var checkOutDate = document.getElementById("checkout");


    
function searchBooking(){
    
    
    
    
    
    
    
    
    
    date1 = moment($("#checkin").val(),"YYYY-MM-DD");
    date2 = moment($("#checkout").val(),"YYYY-MM-DD");
    if(checkInDate.value == "" || checkOutDate.value == "")
    {
        return alert("Please choose you booking date");
    }else
    {
        for(i=0;i<roomlist.length;i++)
       { 
            if(moment(roomlist[i].indate).isBetween(date1,date2, null,'[]') || moment(roomlist[i].outdate).isBetween(date1,date2, null,'[]'))
            {
                var room = roomlist[i].roomId;
                
                alert("The room "+(i+1)+"is booked")
            }else
            {
                //alert("The room "+(i+1)+" can booked")
                var UserId = roomlist[i].UserId;
                var roomId = roomlist[i].roomId;
                var indate = roomlist[i].indate;
                var outdate = roomlist[i].outdate;

                var htmlContent =
                "<div class=\"col-12\">"+roomId+" can book</div>"

                $("#bookinglist").append(htmlContent)

            }
        }
    }
}

