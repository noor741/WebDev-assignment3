/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 

var totalCost = 0;

var daysSelected = 0;
var dailyRate = 35;


var calculatedCost = document.getElementById("calculated-cost");

var mon = document.getElementById("monday");
var tues = document.getElementById("tuesday");
var wed = document.getElementById("wednesday");
var thur = document.getElementById("thursday");
var fri = document.getElementById("friday");

var clear = document.getElementById("clear-button");
var fullDay = document.getElementById("full");
var halfDay = document.getElementById("half");





/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function changeColor()
{
    if(this.classList.contains('blue-hover') && !this.classList.contains('clicked'))
    {
        this.classList.add('clicked');
        daysSelected += 1;
        dailyRate = 35;
        
        calculate();
    }
}


mon.addEventListener('click', changeColor);
tues.addEventListener('click', changeColor);
wed.addEventListener('click', changeColor);
thur.addEventListener('click', changeColor);
fri.addEventListener('click', changeColor);





/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function removeClicked() 
{
    mon.classList.remove("clicked");
    tues.classList.remove("clicked");
    wed.classList.remove("clicked");
    thur.classList.remove("clicked");
    fri.classList.remove("clicked");

    totalCost = 0;
    daysSelected = 0;
    calculate();
}
clear.addEventListener("click",removeClicked);





/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function rateChange(){
    dailyRate = 20;
    halfDay.classList.add('clicked');
    fullDay.classList.remove('clicked');
    calculate();
}
halfDay.addEventListener("click",rateChange);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function change_full(){
    dailyRate = 35;
    fullDay.classList.add('clicked');
    halfDay.classList.remove('clicked');
    calculate();
}
fullDay.addEventListener('click',change_full);





/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(){
    totalCost = dailyRate * daysSelected;
    calculatedCost.innerHTML = totalCost;
}

