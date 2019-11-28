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

{
    var signinusername = sessionStorage.getItem("logineduser");
    console.log(signinusername);
    document.getElementById("customer").innerHTML = signinusername;
}

var room1 = 
	"<img src=\"images/room1.jpg\" style=\"width:50%\"><br><b>Room1 HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p><button onClick=checkined()>Book now!</button>";
var room2 = 
	"<img src=\"images/room2.jpg\" style=\"width:50%\"><br><b>Room2 HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p>";
var room3 = 
	"<img src=\"images/room3.jpg\" style=\"width:50%\"><br><b>Room3 HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p>";
var room4 = 
	"<img src=\"images/room4.jpg\" style=\"width:50%\"><br><b>Room4 HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p>";
var room5 = 
	"<img src=\"images/room5.jpg\" style=\"width:50%\"><br><b>Room5 HK$ 500/day</b><p>Modern and elegant, the Suite has been geared to accommodate the demand of business travellers who are looking for space and comfort. The Suite is equipped with bespoke facilities including LED TV, bathrobe and iron / ironing board completing the home away from home experience. Mini-bar and in-room coffee machine are also available for enjoyment.</p><p>Some of the Suites are located on higher floors and command a panoramic view of the cityscape and the Kai Tak Cruise Terminal. Adding to the impressive space are floor-to-ceiling windows which allow ample natural light.</p><p><b>No. of rooms: 24 Room Size (Sq.m.): 39</b></p>";

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

function checkined() {
	if (sessionStorage.getItem("logineduser")==null) {
		var islogined = confirm("Please sign in first!");
		if (islogined==true) {
			window.location.href="signin.html";
			sessionStorage.setItem("url",document.location);
		}
	} else {
		var sure = confirm("Sure?");
		if (sure==true) {
			window.location.href="confirmroom.html";
		}
	}
}

var alertlogined = sessionStorage.getItem("alertsuss");
switch(alertlogined) {
	case "true":
		alert("Welcome back "+signinusername);
		sessionStorage.removeItem("alertsuss");

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