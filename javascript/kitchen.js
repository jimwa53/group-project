var menulist = JSON.parse(localStorage.getItem("menulist"));
displayMenulist();

function displayMenulist()
{
    menulist.forEach(function(Menu){
        var mealId = Menu.MealId;
        var mealName = Menu.MealName;
        var price = Menu.Price;
        var onMenu = Menu.OnMenu;
        var mealPhoto;
        mealPhoto = "images/menu/"+Menu.MealImg;

        var htmlContent =
        "<div class=\"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2\">"+
            "<div class=\"card\">"+
                "<img class=\"card-img-top\" src=\""+mealPhoto+"\" alt=\"Card image\" style=\"height:150px\">"+
                "<div class=\"card-body\">"+
                    "<h4 class=\"card-title\">"+mealName+"</h4>"+
                    "<p class=\"card-text\">price: $"+price+"</p>"+
                    "<p class=\"card-text\"><b> available: "+onMenu+"</b></p>"+
                    "<button type=\"button\""+"onclick=\"editMenu("+mealId+")\""+"class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#Menu\">"+
                        "Change menu"+
                    "</button>"+
                "</div>"+
            "</div>"
        "</div>"
        if (onMenu)
        {
            $("#customerTitle").after(htmlContent);
        }else
        {
            $("#createButton").before(htmlContent);
        }
    })
}


function editMenu(inputId)
{
    console.log(menulist[inputId].OnMenu)
    if (menulist[inputId].OnMenu)
    {
        menulist[inputId] = 
        {
            MealId:menulist[inputId].MealId,
            MealName:menulist[inputId].MealName,
            MealImg:menulist[inputId].MealImg,          
            Price:menulist[inputId].Price,
            OnMenu:false
        }
    }
    else
    {
        menulist[inputId] = 
        {
            MealId:menulist[inputId].MealId,
            MealName:menulist[inputId].MealName,
            MealImg:menulist[inputId].MealImg,          
            Price:menulist[inputId].Price,
            OnMenu:true
        }
    }
    console.log(menulist);
    localStorage.setItem("menulist",JSON.stringify(menulist));
    $("#confirmAddUser").attr('data-dismiss',"modal");
    window.location.reload();
}
