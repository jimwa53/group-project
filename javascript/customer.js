
function checkReservation()
{
    for(i=0;i<roomlist.length;i++)
    {
        if (signinusername == roomlist[i].UserId)
        {
            return $("#alertbooking").css("display","none")
        }else
        {
            $("#alertbooking").css("display","")
        }
    }
    
}
checkReservation();
