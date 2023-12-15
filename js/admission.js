// script for admission //
function html() {
    let text1;
    let person1 = prompt("Please enter your name:", "");
    if (person1 == null || person1 == "")
    {
        text1 ="Goodbye";
    } else{
        text1 = "Hello " + person1 + 
        "<br><br>" + "Welcome to Gospellive Academy" +"<br>" + 
        "Bellow are the requirements for HTML course:" + "<br><br>"
        +"1. Mobile Phone" + "<br>" + "2. Strong Internet" + "<br>" +
        "3. Trebedit App or Visual Studio Code" + "<br>" + 
        "4. Free Course"
    }
    document.getElementById("demo").
    innerHTML =text1;
}


function css() {
    let text2;
    let person2 = prompt("Please enter your name:", "");
    if (person2 == null || person2 == "")
    {
        text2 ="Process Aborted";
    } else{
        text2 = "Hello " + person2 + 
        "<br><br>" + "Welcome to Gospellive Academy" +"<br>" + 
        "Bellow are the requirements for CSS course:" + "<br><br>"
        +"1. Laptop/Mobile Phone" + "<br>" + "2. Strong Internet" + "<br>" +
        "3. Visual Studio Code" + "<br>" + 
        "4.Course is #3,000"
    }
    document.getElementById("demo").
    innerHTML =text2;
}