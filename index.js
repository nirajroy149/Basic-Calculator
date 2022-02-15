
var screen = document.querySelector(".display");
var offScreen = "";

var buttons = Array(document.querySelectorAll(".button"));
//console.log(buttons);

var NoOfElement = document.querySelectorAll(".button").length;
//console.log(NoOfElement);

for (var i = 0; i < NoOfElement; i++) {

    document.querySelectorAll(".button")[i].addEventListener("click", function (event) {
    var element = this.innerHTML;  

    switch (element) {
        case ("C"):
            screen.innerHTML = "";
            break;
        case ("DEL"):
            screen.innerHTML = screen.innerHTML.slice(0, -1)
            break;
        case ("="):
            screen.innerHTML = eval(screen.innerHTML);
            break;
            
        default:
            screen.innerHTML += this.innerHTML;
            break;
    }
    });
};
//screen.innerHTML += this.innerHTML;