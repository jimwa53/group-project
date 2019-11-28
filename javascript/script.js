function signout() {
	sessionStorage.removeItem("logineduser");
	window.location.reload();
}

if (localStorage.getItem("roomlist") == null) {
	var roomlist = 
		[
			{
				UserId:"",
				roomId:"r1",
				indate:"",
                outdate:"",
                mealorder:"",
                Price:0
			},
			{
				UserId:"",
				roomId:"r2",
				indate:"",
                outdate:"",
                mealorder:"",
                Price:0
			},
			{
				UserId:"",
				roomId:"r3",
				indate:"",
                outdate:"",
                mealorder:"",
                Price:0
			},
			{
				UserId:"",
				roomId:"r4",
				indate:"",
                outdate:"",
                mealorder:"",
                Price:0
			},
			{
				UserId:"",
				roomId:"r5",
				indate:"",
<<<<<<< HEAD
                outdate:"",
                mealorder:"",
                Price:0
=======
				outdate:""

>>>>>>> 6a09cb74425e3b9c3ea95847494412a75c2149aa
			}
		];
		localStorage.setItem("roomlist",JSON.stringify(roomlist));
} else {
	var roomlist = JSON.parse(localStorage.getItem("roomlist"));
}
if (localStorage.getItem("userlist") == null)
{
    var userlist = 
    [
        {
            UserId:1,
            FirstName:"Tai Man",
            LastName:"Chan",
            Gender:"Male",
            UserType:"Hotel Manager",
            UserName:"admin",
            UserPassword:"admin"
        }
    ];
    localStorage.setItem("userlist",JSON.stringify(userlist))
}else
{     
    var userlist = JSON.parse(localStorage.getItem("userlist"));
}

if (localStorage.getItem("menulist") == null)
{
    var menulist = 
    [
        {
            MealId:0,
            MealName:"bolognese spaghetti",
            MealImg:"bolognese.jpg",
            Price:10,
            OnMenu:false
        },
        {
            MealId:1,
            MealName:"Carbonara spaghetti",
            MealImg:"Carbonara.jpg",
            Price:10,
            OnMenu:false
        },
        {
            MealId:2,
            MealName:"Rack of Lamp",
            MealImg:"lambrack.jpg",
            Price:20,
            OnMenu:false
        },
        {
            MealId:3,
            MealName:"cream soup",
            MealImg:"creamsoup.jpg",
            Price:5,
            OnMenu:false
        },
        {
            MealId:4,
            MealName:"Vegetable Salad",
            MealImg:"VegetableSalad.jpg",
            Price:4,
            OnMenu:false
        },
        {
            MealId:5,
            MealName:"Chicken Salad",
            MealImg:"ChickenSalad.jpg",
            Price:4,
            OnMenu:false
        },
        {
            MealId:6,
            MealName:"paella",
            MealImg:"paella.jpg",
            Price:15,
            OnMenu:false
        },
        {
            MealId:7,
            MealName:"Risotto",
            MealImg:"Risotto.jpg",
            Price:15,
            OnMenu:false
        },
        {
            MealId:8,
            MealName:"Borscht",
            MealImg:"Borscht.jpg",
            Price:5,
            OnMenu:false
        },
        {
            MealId:9,
            MealName:"steak",
            MealImg:"steak.jpg",
            Price:20,
            OnMenu:false
        }
    ];
    localStorage.setItem("menulist",JSON.stringify(menulist))
}else
{     
    menulist = JSON.parse(localStorage.getItem("menulist"));
}


	
if (sessionStorage.getItem("logineduser")==null) {
	document.getElementById("customer").innerHTML = "<a href='signin.html'>Sign In</a><a href='signup.html' style='margin-left: 10px;''>Sign Up</a>"
<<<<<<< HEAD
} else
{
    var signinusername = sessionStorage.getItem("logineduser"); 
	$("customer").append(signinusername) ;
=======
} else if (signinusername==signinusername){

	document.getElementById("customer").innerHTML = signinusername + "<a onclick='signout()' style='cursor:pointer;'> Sign Out</a>";
>>>>>>> 6a09cb74425e3b9c3ea95847494412a75c2149aa
}


var room1 = 
	"<img src=\"images/room1.jpg\" style=\"width:50%\" id='ro1'><br><b><span id='r1' name ='room1'>Room1</span> HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p><button id='11' onClick=checkined('r1')>Book now!</button>";
var room2 = 
	"<img src=\"images/room2.jpg\" style=\"width:50%\" id='ro2'><br><b><span id='r2' name ='room2'>Room2</span> HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p><button id='22' onClick=checkined('r2')>Book now!</button>";
var room3 = 
	"<img src=\"images/room3.jpg\" style=\"width:50%\" id='ro3'><br><b><span id='r3' name ='room3'>Room3</span> HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p><button id='33' onClick=checkined('r3')>Book now!</button>";
var room4 = 
	"<img src=\"images/room4.jpg\" style=\"width:50%\" id='ro4'><br><b><span id='r4' name ='room4'>Room4</span> HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p><button id='44' onClick=checkined('r4')>Book now!</button>";
var room5 = 
	"<img src=\"images/room5.jpg\" style=\"width:50%\" id='ro5'><br><b><span id='r5' name ='room5'>Room5</span> HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p><button id='55' onClick=checkined('r5')>Book now!</button>";


function layout1() {
	document.getElementById("room").innerHTML=room1;
}
function layout2() {
	document.getElementById("room").innerHTML=room2;
}
function layout3() {
	document.getElementById("room").innerHTML=room3;
}
function layout4() {
	document.getElementById("room").innerHTML=room4;
}
function layout5() {
	document.getElementById("room").innerHTML=room5;
}



function checkined(roomid) {
	
	if (sessionStorage.getItem("logineduser")==null) {
		var islogined = confirm("Please sign in first!");
		if (islogined==true) {
			window.location.href="signin.html";
			sessionStorage.setItem("url",document.location);
		}
	} else if(checkInDate.value == "" || checkOutDate.value == ""){
		return alert("Please choose you booking date");
	}else{
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
												indate:checkInDate.value,
<<<<<<< HEAD
                                                outdate:checkOutDate.value,
                                                mealorder:"",
                                                Price:""
=======
												outdate:checkOutDate.value,

>>>>>>> 6a09cb74425e3b9c3ea95847494412a75c2149aa
											}
					localStorage.setItem("roomlist",JSON.stringify(roomlist));
				}
			})
			window.location.href="confirmroom.html";
		}
	}
}

var alertlogined = sessionStorage.getItem("alertsuss");
switch(alertlogined) {
	case "true":
		alert("Welcome back "+signinusername);
		sessionStorage.removeItem("alertsuss");
}