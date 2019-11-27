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
            MealName:"Borscht",
            MealImg:"Borscht.jpg",
            Price:5,
            OnMenu:false
        },
        {
            MealId:3,
            MealName:"creamsoup",
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
            MealName:"lamb rack",
            MealImg:"lambrack.jpg",
            Price:20,
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
    var menulist = JSON.parse(localStorage.getItem("menulist"));
}