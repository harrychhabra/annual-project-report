var count=1;
  var count1=[];
  var title=[];
  var fundingAgency=[];
  var financialOutlay=[];
  var year=[];
  var totalPeriod=[];
  var piname=[];
  var status1=[];
  if(count<=1)
  document.getElementById("tb").style.visibility = "hidden";
  else
  document.getElementById("tb").style.visibility = "visible";

  if(count<=1)
  document.getElementById("bck").style.visibility = "hidden";
  else
  document.getElementById("bck").style.visibility = "visible";

    function add()
    {
      var t=document.getElementById('title').value;
      var fa=document.getElementById('fundingAgency').value;
      var fo=document.getElementById('financialOutlay').value;
      var y=document.getElementById('year').value;
      var tp=document.getElementById('totalPeriod').value;
      var n=document.getElementById('Name').value;
      var s=document.getElementById('Status').value;
      
     if(t==""||fa==""||fo==""||y==""||tp==""||n==""||s=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;

      count1.push(count);
      title.push(t);
      fundingAgency.push(fa);
      financialOutlay.push(fo);
      year.push(y);
      totalPeriod.push(tp);
      piname.push(n);
      status1.push(s);
      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(count1[i]-1+" "+title[i]+" "+fundingAgency[i]+" "+financialOutlay[i]+" "+year[i]+" "+totalPeriod[i]+" "+piname[i]+" "+status1[i]);
        }
                // Find a <table> element with id="myTable":
var table = document.getElementById("tb");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);

// Add some text to the new cells:

cell1.innerHTML = count;
cell2.innerHTML = t;
cell3.innerHTML = fa;
cell4.innerHTML = fo;
cell5.innerHTML = y;
cell6.innerHTML = tp;
cell7.innerHTML = n;
cell8.innerHTML = s;

      document.getElementById('myform').reset();
        }    

        }
        
        function back(){
          count--;
          if(count<=1)
  document.getElementById("tb").style.visibility = "hidden";
  else
  document.getElementById("tb").style.visibility = "visible";

  if(count<=1)
  document.getElementById("bck").style.visibility = "hidden";
  else
  document.getElementById("bck").style.visibility = "visible";
          var table = document.getElementById("tb");
          var row = table.deleteRow(-1);
    

          document.getElementById('title').innerHTML=title[title.length-1];
          
          document.getElementById('fundingAgency').innerHTML=fundingAgency[fundingAgency.length-1];
          document.getElementById('financialOutlay').innerHTML=financialOutlay[financialOutlay.length-1];
          document.getElementById('totalPeriod').innerHTML=totalPeriod[totalPeriod.length-1];
          document.getElementById('Name').innerHTML=piname[piname.length-1];
         

         
          if(count==1)
      document.querySelector("#count").innerHTML= count +"st Project Details" ;
      else if(count==2)
      document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;
          count1.pop();
          title.pop();
          fundingAgency.pop();
          financialOutlay.pop();
          year.pop();
          totalPeriod.pop();
          piname.pop();
          status1.pop();
        }
        
        function sub(){

      var t=document.getElementById('title').value;
      var fa=document.getElementById('fundingAgency').value;
      var fo=document.getElementById('financialOutlay').value;
      var y=document.getElementById('year').value;
      var tp=document.getElementById('totalPeriod').value;
      var n=document.getElementById('Name').value;
      var s=document.getElementById('Status').value;


if((t==""||fa==""||fo==""||y==""||tp==""||n==""||s=="")&&(count<=1))
     alert("Fill all the required fields");
     else if((t==""||fa==""||fo==""||y==""||tp==""||n==""||s=="")&&(count>1)){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(count1[i]+" "+title[i]+" "+fundingAgency[i]+" "+financialOutlay[i]+" "+year[i]+" "+totalPeriod[i]+" "+piname[i]+" "+status1[i]);
    }
    document.getElementById('myform').reset();
    alert("Project Details Submitted");
    location.href = "index.html";
     }
else{
      count1.push(count);
      title.push(t);
      fundingAgency.push(fa);
      financialOutlay.push(fo);
      year.push(y);
      totalPeriod.push(tp);
      piname.push(n);
      status1.push(n);
count++;
  document.getElementById("tb").style.visibility = "visible";
  document.getElementById("bck").style.visibility = "visible";
  var table = document.getElementById("tb");

// Create an empty <tr> element and add it to the 1st position of the table:
var row = table.insertRow(-1);

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);


// Add some text to the new cells:
cell1.innerHTML = count;
cell2.innerHTML = t;
cell3.innerHTML = fa;
cell4.innerHTML = fo;
cell5.innerHTML = y;
cell6.innerHTML = tp;
cell7.innerHTML = n;
cell8.innerHTML = s;

          var i=0;
          for(i=0;i<count-1;i++){
            console.log(count1[i]+" "+title[i]+" "+fundingAgency[i]+" "+financialOutlay[i]+" "+year[i]+" "+totalPeriod[i]+" "+piname[i]+" "+status1[i]);
        }
        document.getElementById('myform').reset();
        alert("Project Details Submitted");
        location.href = "index.html";
}

        }
      
        