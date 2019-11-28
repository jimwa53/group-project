
var checkInDate = document.getElementById("checkIn");
    var checkOutDate = document.getElementById("checkIn");
    if(checkInDate.value == "" || checkOutDate.value == "")
    {
        return alert("Please")
    }
function checkined(roomid) {
    if (sessionStorage.getItem("logineduser")==null) {
        var islogined = confirm("Please sign in first!");
        if (islogined==true) {
            window.location.href="signin.html";
            sessionStorage.setItem("url",document.location);
        }
    }
    else
    {
        var sure = confirm("Sure?");
        if (sure==true) {
            rm = document.getElementById(roomid).id;
            roomlist.forEach(function(obj) {
                if(obj.roomId==rm) {
                    obj.UserId = signinusername;
                    var indexofnum = roomlist.indexOf(obj);
                    roomlist[indexofnum] = {
                                                UserId:signinusername,
                                                roomId:rm,
                                                indate:"",
                                                outdate:""
                                            }
                    localStorage.setItem("roomlist",JSON.stringify(roomlist));
                }
            })
            window.location.href="confirmroom.html";
    }
    
}

let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) {
    item.addEventListener('click', (e)=> {
		let hashval = item.getAttribute('href')
		let target = document.querySelector(hashval)
		target.scrollIntoView({
			behavior: 'smooth'
		})
		history.pushState(null, null, hashval)
		e.preventDefault()
	})
}
}