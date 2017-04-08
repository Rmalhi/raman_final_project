function mycalendar(){

    let x = new Date();
    let name_of_month=['January','February','March','April','May','June','July','August','September','October','November','December'];
    let m=  x.getMonth();

    let year = x.getFullYear();
    let first_date= name_of_month[m]+" "+1+" "+year;
let tmp = new Date(first_date).toDateString();

let first_day=tmp.substring(0,3);
let day_name=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
let day_no=day_name.indexOf(first_day);
let days=new Date(year, m+1 ,0).getDate();


let cal=get_cal(day_no, days);
document.getElementById("MonthandYear").innerHTML=name_of_month[m]+" "+year;
document.getElementById("dates")
}

function get_cal(day_no,days){
    let table=document.createElement('table');
    let tr=document.createElement('tr');

    for(let i=0;i<=6;i++){
        let td=document.createElement('td');
        td.innerHTML="SMTWTFS"[i];
        tr.appendChild(td);
    }
    table.appendChild(tr);
    tr=document.createElement('tr');
    let i;
    for(i=0;i<=6;i++){
        if(i == day_no){
            break;
        }
        let td=document.createElement('td');
        td.innerHTML="";
        tr.appendChild(td);
    }
    let count=1;
    
    for(;i<=6;i++){
        let td=document.createElement('td');
        td.innerHTML=count;
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);

    for(let r=3;r<=6;r++){
        tr=document.createElement('tr');
        for(let i=0;i<=6;i++){
            if(count>days){
                table.appendChild(tr);
                return table;
            }
            let td=document.createElement('td');
            td.innerHTML=count;
            count++;
            tr.appendChild(td);
        
    }
    table.appendChild(tr);
    document.getElementById("dates").appendChild('cal');
}
    
}
window.onload= mycalendar;


