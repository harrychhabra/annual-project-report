var count=1;

  var act=[];
  var instituteOutside=[];
  var facultyOutside=[];
  var facNit=[];
  var course=[];
  var sta=[];
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
      var ac=document.getElementById('Act').value;
      var io=document.getElementById('InstOut').value;
      var fo=document.getElementById('FacOut').value;
      var fn=document.getElementById('FacNit').value;
     
    
     if(ac==""||io==""||fo==""||fn=="")
     alert("Fill all the required fields");
     else{
      count++;
      if(count==2)
        document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;

      
      act.push(ac);
      instituteOutside.push(io);
      facultyOutside.push(fo);
      facNit.push(fn);
      document.getElementById("tb").style.visibility = "visible";
      document.getElementById("bck").style.visibility = "visible";
      var i=0;
          for(i=0;i<count-1;i++){
            console.log(act[i]+" "+instituteOutside[i]+" "+facultyOutside[i]+" "+facNit[i]+" ");
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


// Add some text to the new cells:
cell1.innerHTML = ac;
cell2.innerHTML = io;
cell3.innerHTML = fo;
cell4.innerHTML = fn;

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
    

          
          document.getElementById('Act').innerHTML=act[act.length-1];
          document.getElementById('InstOut').innerHTML=instituteOutside[instituteOutside.length-1];
          document.getElementById('FacOut').innerHTML=facultyOutside[facultyOutside.length-1];
          document.getElementById('FacNit').innerHTML=facNit[facNit.length-1];
         

         
          if(count==1)
      document.querySelector("#count").innerHTML= count +"st Project Details" ;
      else if(count==2)
      document.querySelector("#count").innerHTML= count +"nd Project Details" ;
      else if(count==3)
      document.querySelector("#count").innerHTML= count +"rd Project Details" ;
      else
      document.querySelector("#count").innerHTML= count +"th Project Details" ;
          act.pop();
          instituteOutside.pop();
          facultyOutside.pop();
          facNit.pop();
        }
        
        function sub(){

var ac=document.getElementById('Act').value;
var io=document.getElementById('InstOut').value;
var fo=document.getElementById('FacOut').value;
var fn=document.getElementById('FacNit').value;


if((ac==""||io==""||fo==""||fn=="")&&(count<=1))
     alert("Fill all the required fields");
     else if((ac==""||io==""||fo==""||fn=="")&&(count>1)){
      var i=0;
      for(i=0;i<count-1;i++){
        console.log(act[i]+" "+instituteOutside[i]+" "+facultyOutside[i]+" "+facNit[i]+" ");
    }
    document.getElementById('myform').reset();
    alert("Project Details Submitted");
    location.href = "index.html";
     }
else{

act.push(ac);
instituteOutside.push(io);
facultyOutside.push(fo);
facNit.push(fn);
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


// Add some text to the new cells:
cell1.innerHTML = ac;
cell2.innerHTML = io;
cell3.innerHTML = fo;
cell4.innerHTML = fn;

          var i=0;
          for(i=0;i<count-1;i++){
            console.log(act[i]+" "+instituteOutside[i]+" "+facultyOutside[i]+" "+facNit[i]+" ");
        }
        document.getElementById('myform').reset();
        alert("Project Details Submitted");
        location.href = "index.html";
}

        }
      
        