const change_btn = document.getElementById("show-date");
const disp_date = document.getElementById("time-area");
//Implementation with object oriented programming
class DateTime{
    constructor ()
    {
       this.today = new Date();
    }

    getTodayDate(){
        return this.today;
    }
    
     
}

let myDate = new DateTime()

change_btn.addEventListener("click" ,()=>{
    disp_date.innerHTML = `
    <p> ${myDate.getTodayDate()} </p>
    `
})
